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
    var continueButton = this.view.btnContinue;
    continueButton.setEnabled(false);
    var ssnCodeView = this.view.ssnCodeView;
    ssnCodeView.requiredLength = 9;
    ssnCodeView.enableSSN = true;
    ssnCodeView.onCodeEntered = function() {
			self.changeButtonState(true);
    };

    ssnCodeView.onCodeRevoked = function() {
			self.changeButtonState(false);
    };

    var keypad = this.view.digitkeypad;
    keypad.onDigitEntered = function(digit) {
      ssnCodeView.addDigit(digit);
    }; 
    keypad.onDigitRemoved = function() {
      ssnCodeView.removeDigit(); 
    }; 
  },
  
  initActions: function() {
    this.view.btnContinue.onClick = this.verifyAndNavigate;
  },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClickCancel;
    }
  },

  /**
  * Code to verify the SSN is valid or not 
  */
  verifyAndNavigate: function() {
    var ssnCode = this.view.ssnCodeView.getEnteredCode();
    if (!ssnCode) {
      this.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.enterSSN"));   
    } else {
      var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
      var params = {
        dateOfBirth: enrollModule.presentationController.getEnrollDOB(),
        ssn: ssnCode,
        userlastname: enrollModule.presentationController.getEnrollLastName(),
      };
      enrollModule.presentationController.checkUserEnrolled(params);
    }
  },

  userNotEnrolled: function() {
		var ssnCode = this.view.ssnCodeView.getEnteredCode();
    var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollModule.presentationController.validateEnrollSSN(ssnCode);
  },

  navBack: function() {
     var navManager = applicationManager.getNavigationManager();
      navManager.goBack();
  },

  onClickCancel: function() {
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.resetEnrollObj();
  },

  navToAlreadyEnrolled: function() {
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.commonFunctionForNavigation("frmAlreadyEnrolled");
  },

  /*
  *Code to show error message
  */
  bindViewError: function(msg) {
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },

  changeButtonState: function(enable) {
    var continueButton = this.view.btnContinue;
    continueButton.setEnabled(enable);
    var skin = enable ? "sknBtnRnd4pxffffffSSPReg36pxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
    continueButton.skin = skin;
  }
});