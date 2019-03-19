define({ 

	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
  
	preShow: function() {
		this.initActions();
      	this.initHeaderActions();
		var navManager = applicationManager.getNavigationManager();
		var flags = navManager.getCustomInfo("frmPreferencesFaceIdSetAsDefault");
		if (flags) {
			if (flags.popUpMsg) {
				var scopeObj = this;
				applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj, flags.popUpMsg);
			}
			
          	flags.popUpMsg = null;
			navManager.setCustomInfo("frmPreferencesFaceIdSetAsDefault", flags);
        }
		
      	var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
	},
  
  	initActions: function() {
    	this.view.btnSetAsDefault.onClick = this.setAsDefaultOnClick;
	},
  
  	initHeaderActions: function() {
		var isIpad = applicationManager.getDeviceUtilManager().isIpad();
		if (!isIpad) {
          	this.view.customHeader.btnRight.onClick = this.cancelHandleAction;
          	this.view.customHeader.flxBack.onClick = this.backNavigation;
		}
	},
  
  	cancelHandleAction: function() {
    	var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      	settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesDefaultLogin");  
    },
  
  	backNavigation: function() {
      	var navManager = applicationManager.getNavigationManager();
      	navManager.goBack();
    },
  
	setAsDefaultOnClick: function() {
		var navManager = applicationManager.getNavigationManager();
		var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");                    
		authMod.presentationController.setDefaultMode("faceid");             
		var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		settingsModule.presentationController.getDevDetails();
		var tempData = settingsModule.presentationController.getAuthModeData();
		tempData.popUpMsg = kony.i18n.getLocalizedString("kony.mb.Face.Id.is.set.as.Default.Login");
		navManager.setCustomInfo("frmPreferencesDefaultLogin", tempData);
		var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesDefaultLogin");
	}
});