define({ 

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initHeaderActions();
    this.initContinueButton();
    this.initComponents();
    this.assignDataToForm();

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

  assignDataToForm: function() {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var userPhone = NUOMod.presentationController.getUserPhoneNumber(); 
    var phone = (userPhone && userPhone !== "") ? userPhone : "";
    this.view.inputPhoneNumber.setPhoneNumber(phone);
  },

  initComponents: function() {
    var self = this;
    var inputPhoneNumber = this.view.inputPhoneNumber;
    inputPhoneNumber.onPhoneNumberEntered = this.changeContinueBtnState.bind(this, true);
    inputPhoneNumber.onPhoneNumberRemoved = this.changeContinueBtnState.bind(this, false);

    var keypad = this.view.digitkeypad;
    keypad.onDigitEntered = function(digit) {
      inputPhoneNumber.addDigit(digit);
    };
    keypad.onDigitRemoved = function() {
      inputPhoneNumber.removeDigits();
    };
  },

  initContinueButton: function() {
    var self = this;
    this.changeContinueBtnState(false);
    this.view.btnVerifyPhoneNumber.onClick = function() {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var enteredNumber = self.view.inputPhoneNumber.getPhoneNumber();
      navManager.setCustomInfo("frmOBSignInWithPhoneNumber", enteredNumber);
      var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      authMod.presentationController.verifyPhoneNo(enteredNumber); 
    };
  },

  changeContinueBtnState: function(isEnable) {
    this.view.btnVerifyPhoneNumber.setEnabled(isEnable);
    this.view.btnVerifyPhoneNumber.skin = isEnable ? "sknBtnRnd4pxffffffSSPReg36pxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
  },

  bindError: function(par) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (par === "invalidphoneno") {
      applicationManager.getDataProcessorUtility()
        .showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.OnBoarding.InvaliPhoneno"));
    }
  }
});