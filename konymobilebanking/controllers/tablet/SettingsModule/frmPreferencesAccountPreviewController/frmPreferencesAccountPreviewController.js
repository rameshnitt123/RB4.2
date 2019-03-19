define({
  
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },
  
  preShow: function() {
    this.initActions();
    this.initHeaderActions();
    this.frmAccpreviewPreshow();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  initActions: function() { 
    this.view.flxToggle.onClick = this.toggleBtnAction; 
  },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
    }
  },

  
  frmAccpreviewPreshow: function() {
    var navManager = applicationManager.getNavigationManager();
    var status = navManager.getCustomInfo("frmPreferencesAccountPreview");
    if (!status.isRememberMeOn || !status.deviceReg) {
      this.view.lblNote.text = kony.i18n.getLocalizedString("kony.mb.preferences.AccountPreviewCannotBeEnabled");
      this.view.flxSwitch.setVisibility(false);
    } else {
      this.view.lblNote.text = kony.i18n.getLocalizedString("kony.mb.See.your.account.and.card.balances.instantly.without.signing.on.the.login");
      this.view.flxSwitch.setVisibility(true);
      this.view.imgSwitch.src = status.accPreview ? "active.png" : "inactive.png";
    }
  },

  toggleBtnAction: function() {
    var navManager = applicationManager.getNavigationManager();	 
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    var isActive = this.view.imgSwitch.src === "active.png";
    this.view.imgSwitch.src = isActive ? "inactive.png" : "active.png";
    authMode.presentationController.setAccountPreviewFlag(!isActive );
    settingsModule.presentationController.getDevDetails(); 
    var keys = navManager.getCustomInfo("frmSettings");
    keys.popUpMsg = "";
    navManager.setCustomInfo("frmSettings", keys);
  },

  backNavigation: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack(); 
  }
 
});