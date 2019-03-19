define({

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initActions();
    this.initHeaderActions();
  },

  initActions: function() {
    this.view.btnLoginHere.onClick = this.navToLogin;
    this.view.btnChangeDetails.onClick = this.navToChangeDetails;
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.btnRight.onClick = this.navToLogin;
    }
  },

  navToLogin: function() {
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.resetEnrollObj();
  },

  navToChangeDetails: function() {
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.commonFunctionForNavigation("frmEnrollLastName");
  },

  backNavigation: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  }
});