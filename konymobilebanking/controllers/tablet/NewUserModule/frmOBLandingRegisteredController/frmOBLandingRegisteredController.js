define({

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initActions();
    this.initHeaderActions();
    this.view.lblPhoneNumber.text = this.getStyledPhoneNumber();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
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

  initActions: function() {
    var newUserModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    this.view.btnChangePhoneNumber.onClick = newUserModule.presentationController.commonFunctionForNavigation.bind(this, "frmOBSignInWithPhoneNumber"); 
    this.view.btnLandingOne.onClick = newUserModule.presentationController.commonFunctionForNavigation.bind(this, "frmOBLogin"); 
  },

  navBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },


  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navBack;
    }
  },
});