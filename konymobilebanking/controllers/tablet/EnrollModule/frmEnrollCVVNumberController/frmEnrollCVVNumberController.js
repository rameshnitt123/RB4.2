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
    var CVVCode = this.view.CVVCodeView;
    CVVCode.requiredLength = 3;
    CVVCode.enableSSN = false;
    CVVCode.onCodeEntered = function() {
      self.changeButtonState(true);
    };

    CVVCode.onCodeRevoked = function() {
      self.changeButtonState(false);
    };

    var keypad = this.view.digitkeypad;
    keypad.onDigitEntered = function(digit) {
      CVVCode.addDigit(digit);
    }; 
    keypad.onDigitRemoved = function() {
      CVVCode.removeDigit(); 
    }; 
  },

  initActions: function() {
    this.view.btnVerify.onClick = this.navToEnrollSignUp;
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
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.resetEnrollObj();
  },

  /**
  * code to check the cvv is valid or not 
  */
  navToEnrollSignUp: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var cvvCode = this.view.CVVCodeView.getEnteredCode();
    if(!cvvCode || cvvCode.length === 0) {
      this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.enterSSN"));   
    } else {
      var navManager = applicationManager.getNavigationManager();
      var cardNumber = navManager.getCustomInfo("frmEnrollCVVNumber");
      var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
      enrollModule.presentationController.validateCVV(cardNumber, cvvCode); 
    }
  },

  changeButtonState: function(enable) {
    var verifyButton = this.view.btnVerify;
    verifyButton.setEnabled(enable);
    var skin = enable ? "sknBtnRnd4pxffffffSSPReg36pxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
    verifyButton.skin = skin;
  },

  bindGenericError: function(errorMsg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, errorMsg);
  },
});