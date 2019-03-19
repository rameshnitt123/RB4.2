define({

	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm=navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
  
	preShow: function() {
		this.initActions();
      	this.initHeaderActions();
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
	},
    
	initActions: function() {
		this.view.btnSetAsDefault.onClick = this.setTouchIdDefaultMode;
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
   
	setTouchIdDefaultMode: function() {
		applicationManager.getPresentationUtility().showLoadingScreen(); 
		var navManager = applicationManager.getNavigationManager();
		var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
		authMod.presentationController.setTouchIdflag(true);
		authMod.presentationController.setDefaultMode("touchid");
		var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		settingsModule.presentationController.getDevDetails();
		var tempData = settingsModule.presentationController.getAuthModeData();
		tempData.popUpMsg = kony.i18n.getLocalizedString("kony.mb.Touch.Id.is.set.a.Default.Login");
		navManager.setCustomInfo("frmPreferencesDefaultLogin", tempData);
		settingsModule.presentationController.commonFunctionForNavigation("frmPreferencesDefaultLogin");        
	}
});