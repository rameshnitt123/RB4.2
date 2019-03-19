define({

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initHeaderActions();
    this.initButtons();
    this.initComponents();
    this.updateRightPane();

    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  navBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },

  handleCancelAction: function() {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmLogin");
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.flxHeader.btnRight.onClick = this.handleCancelAction;
    }
  },

  initComponents: function() {
    var self = this;
    var secureCode = this.view.SecureCode;
    secureCode.onCodeEntered = this.changeContinueBtnState.bind(this, true);
    secureCode.onCodeRevoked = this.changeContinueBtnState.bind(this, false);

    var keypad = this.view.digitkeypad;
    keypad.onDigitEntered = function(digit) {
      secureCode.addDigit(digit);
    };
    keypad.onDigitRemoved = function() {
      secureCode.removeDigit();
    };
  },

  initButtons: function() {
    var self = this;
    this.changeContinueBtnState(false);
    this.view.btnContinueSecurityCode.onClick = function() {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var validationUtility = applicationManager.getValidationUtilManager();
      var enteredCode = self.view.SecureCode.getEnteredCode();
      if (enteredCode && validationUtility.isValidOTP(enteredCode)) {
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        authMod.presentationController.commonFunctionForNavigation("frmOBMembershipEligibility"); 
      } else{
        self.bindError();
      }
    };
    
    this.view.btnReSend.onClick = function () {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      authMod.presentationController.verifyResendOTP(); 
    };
  },

  changeContinueBtnState: function(isEnable) {
    this.view.btnContinueSecurityCode.setEnabled(isEnable);
    this.view.btnContinueSecurityCode.skin = isEnable 
       																			 ? "sknBtnRnd4pxffffffSSPReg36pxTab"
    																				 : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
  },

  showPopupIncorrectCredentials: function () {
    var self = this;
    if (!this.timerCounter) {
      this.timerCounter = 0;
    }
    this.timerCounter = this.timerCounter + 1;
    var timerId = "timerPopupError" + this.timerCounter;
    this.view.flxPopup.skin = "sknFlxf54b5e";
    this.view.customPopup.imgPopup.src = "errormessage.png";
    this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.OnBoarding.IncorrectOTP");
    this.view.flxPopup.setVisibility(true);
    kony.timer.schedule(timerId, function () {
      self.view.flxPopup.setVisibility(false);
      self.view.SecureCode.clear();
    }, 1.5, false);
  },

  bindError: function() {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility()
      .showToastMessageError(this,kony.i18n.getLocalizedString("kony.mb.OnBoarding.IncorrectOTP"));
  },
  
  updateRightPane: function() {
    var rightPane = this.view.RightPane;
    rightPane.lblCheckedRowName.text = this.getStyledPhoneNumber();
  },
  
  getStyledPhoneNumber: function() {
    var navManager = applicationManager.getNavigationManager();
    var phoneNumber = navManager.getCustomInfo("frmOBSignInWithPhoneNumber");
    var text = "(___)___-____";
    var delta = 1;
		
    for (var i = 0; i < text.length; i++) {
      if (i === 3 || i === 6) {
        delta++;
      }

      if (i < phoneNumber.length) {
        var index = i + delta;
        var replacement = phoneNumber.charAt(i);
        text = text.substr(0, index) + replacement + text.substr(index + 1);
      }
    }
    return text;
  }
});