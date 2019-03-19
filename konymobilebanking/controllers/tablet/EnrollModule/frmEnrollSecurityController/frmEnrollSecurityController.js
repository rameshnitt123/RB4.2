define({ 

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initComponent();
    this.initActions();
    this.initHeaderActions();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },

  initComponent: function() {
    var self = this;
    var verifyButton = this.view.btnVerify;
    verifyButton.setEnabled(false);
    var securityCode = this.view.secureCodeView;
    securityCode.requiredLength = 6;
    securityCode.enableSSN = false;
    securityCode.onCodeEntered = function() {
      self.changeButtonState(true);
    };

    securityCode.onCodeRevoked = function() {
      self.changeButtonState(false);
    };

    var keypad = this.view.digitkeypad;
    keypad.onDigitEntered = function(digit) {
      securityCode.addDigit(digit);
    }; 
    keypad.onDigitRemoved = function() {
      securityCode.removeDigit(); 
    }; 
  },

  initActions: function() {
    this.view.btnVerify.onClick = this.submitOTP;
    this.view.btnResend.onClick = this.requestResendOTP;
  },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClickCancel;
    }
  },

  changeButtonState: function(enable) {
    var verifyButton = this.view.btnVerify;
    verifyButton.setEnabled(enable);
    var skin = enable ? "sknBtnRnd4pxffffffSSPReg36pxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
    verifyButton.skin = skin;
  },

  navBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },

  onClickCancel: function() {
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.resetEnrollObj();
  },

  /*
  * Code to resend OTP
  */
  requestResendOTP: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollModule.presentationController.resendOTP();
  },

  /*
  * code to submit OTP
  */
  submitOTP: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var otp = this.view.secureCodeView.getEnteredCode();
    if (applicationManager.getPresentationValidationUtility().isValidTextBox(otp)) {
      var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
      enrollModule.presentationController.validateOTP(otp);
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