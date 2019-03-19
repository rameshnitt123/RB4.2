define({

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initHeaderActions();
    this.initComponent(); 
    this.initActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initComponent: function() {
    var self = this;
    var securityCode = this.view.SecureCode;
    securityCode.requiredLength = 6;
    securityCode.enableSSN = false;

    var keypad = this.view.digitkeypad;
    keypad.onDigitEntered = function(digit) {
      securityCode.addDigit(digit);
    }; 
    keypad.onDigitRemoved = function() {
      securityCode.removeDigit(); 
    }; 
  },

  initActions: function() {
    this.view.btnVerifySecCode.onClick = this.submitOTP;
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClickCancel;
    }
  },

  navBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },

  onClickCancel: function() {
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
  },

  /*
  * code to submit OTP
  */

  submitOTP: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var otp = this.view.SecureCode.getEnteredCode();
    var navManager = applicationManager.getNavigationManager();

    if (applicationManager.getPresentationValidationUtility().isValidTextBox(otp)) {
      var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      var type = navManager.getCustomInfo("frmProfileSecurityCode");
      if (type === "password"){
        settingsMod.presentationController.verifyOTP(otp, 'frmProfileChangeAndUpdatePassword');
      } else {
        settingsMod.presentationController.verifyOTP(otp, 'frmProfileUsername');
      }
    } else {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.enterSecurityCode");
      this.bindGenericError(errorMsg);
    }
  },

  /*
  * Code to show error
  */
  bindGenericError: function(errorMsg) {
    applicationManager.getDataProcessorUtility().showToastMessageError(this, errorMsg);
  }
});