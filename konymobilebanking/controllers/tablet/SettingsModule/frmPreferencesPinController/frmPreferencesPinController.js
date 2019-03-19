define({
	
	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
  
	preShow: function() {
		this.initActions();
      	this.initHeaderActions();
	    this.showPopUpMsg();
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
	},
  
	initActions: function() {
		this.view.btnSetAsDefault.onClick = this.setAsDefault; 
		this.view.btnChangePin.onClick = this.changePin;  
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
  
	setAsDefault: function() { 
		applicationManager.getPresentationUtility().showLoadingScreen(); 
		var navManager = applicationManager.getNavigationManager();
		var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
		authMod.presentationController.setPinflag(true);
		authMod.presentationController.setDefaultMode("pin");
		var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		var tempData = settingsModule.presentationController.getAuthModeData();
		settingsModule.presentationController.getDevDetails();
		tempData.popUpMsg = kony.i18n.getLocalizedString("kony.mb.PIN.is.set.as.Default.Login");
		navManager.setCustomInfo("frmPreferencesDefaultLogin", tempData);
		settingsModule.presentationController.commonFunctionForNavigation("frmPreferencesDefaultLogin");
	},
  	
	showPopUpMsg: function() {
		var navManager = applicationManager.getNavigationManager(); 
		var msgData = navManager.getCustomInfo("frmPreferencesPin");
		if (msgData.popUpMsg) {
			var self = this;
			applicationManager.getDataProcessorUtility().showToastMessageSuccess(self, msgData.popUpMsg);
		}
		msgData.popUpMsg = "";
		navManager.setCustomInfo("frmPreferencesPin", msgData);
	},
  
	changePin: function() {
		applicationManager.getPresentationUtility().showLoadingScreen(); 
		var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesResetStep1");
	},
  
  	bindViewSuccess: function(msg) {   		
    	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);        
  	}
});