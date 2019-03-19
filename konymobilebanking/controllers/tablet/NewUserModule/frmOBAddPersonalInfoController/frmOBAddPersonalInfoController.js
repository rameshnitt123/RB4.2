define({
  timerCounter: 0,

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initHeaderActions();
    this.initActions();
    this.updateRightPane();

    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
    this.view.flxEnter.onClick = this.onSelectManually;
    this.view.flxScan.onClick = this.onClickScanCard;
  },

  initHeaderActions: function() {
    if (!this.isIpad()) {
      this.view.customHeaderTablet.flxBack.onClick = this.onBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClose;  
    }
  },

  onBack: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();   
  },

  onClose: function() {
    var AuthModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    AuthModule.presentationController.commonFunctionForNavigation("frmLogin");
  },

  onClickScanCard: function() {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.getUserCurrentAddress();
    NUOMod.presentationController.isOCRScanSelected = "true";
  },

  onSelectManually: function() {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.isOCRScanSelected = "false";
    NUOMod.presentationController.navOnClickManuallySelected();
  },

  bindGenericError: function(msg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },

  isIpad: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    return deviceUtilManager.isIpad();
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
  },
});