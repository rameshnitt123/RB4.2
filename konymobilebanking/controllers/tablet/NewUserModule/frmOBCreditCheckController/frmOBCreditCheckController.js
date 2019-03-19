define({ 
  timerCounter : 0, 
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initActions();
    this.initHeaderActions();
    this.initButtons();
    this.initComponents();
    this.updateRightPane();

    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.onBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClose;  
    }
  },

  initActions: function() {
    this.view.btnTnC.onClick = this.navToTermsAndConditions;
    this.view.btnContinueResult.onClick = this.navToEnployment;
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

  navToEnployment: function() {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBEmploymentType"); 
  },

  navToTermsAndConditions: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmTermsAndConditions"); 
  },

  onBack: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  },

  onClose: function() {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmLogin");
  },

  initButtons: function() {
    var self = this;
    this.changeContinueBtnState(false);
    this.view.btnSSNAccept.onClick = function() {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var enteredCode = self.view.SecureCode.getEnteredCode();
      if (enteredCode && enteredCode.length === 9) {
        self.view.flxResult.setVisibility(true);
        var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");  
        var data = {
          "ssn" : enteredCode,
          "informationType" : "PersonalInfo"
        };
        NUOMod.presentationController.updateNewUserModel(data);
        NUOMod.presentationController.userNavigation = data.informationType;
        NUOMod.presentationController.createPersonalInfo();  
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      } else {
        self.bindError();
      }
    };
  },

  changeContinueBtnState: function(isEnable) {
    this.view.btnSSNAccept.setEnabled(isEnable);
    this.view.btnSSNAccept.skin = isEnable 
      ? "sknBtnBg0A78D1BorderE9FontFFSSPR36pxTab"
    : "sknBtnOnBoardingInactive";
  },

  bindError: function() {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility()
      .showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.OnBoarding.IncorrectOTP"));
  },

  showPopupIncorrectCredentials: function() {
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

  updateRightPane: function() {
    var rightPane = this.view.RightPane;
    rightPane.lblCheckedRowName.text = this.getStyledPhoneNumber();

    var navManager = applicationManager.getNavigationManager();
    var eligibility = navManager.getCustomInfo("frmOBMembershipEligibility");
    var productsCount = navManager.getCustomInfo("selectedUserProduct").productsCount;
    if (eligibility && eligibility.length > 25) {
      eligibility = eligibility.substring(0, 24) + "...";
    }
    rightPane.lblThirdCheckedRowName.text = eligibility;
    rightPane.lblFifthCheckedRowName.text = parseInt(productsCount).toString() + " selected";
  },

  getStyledPhoneNumber: function() {
    var navManager = applicationManager.getNavigationManager();
    var phoneNumber = navManager.getCustomInfo("frmOBSignInWithPhoneNumber");
    var text = "(   )   -    ";
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