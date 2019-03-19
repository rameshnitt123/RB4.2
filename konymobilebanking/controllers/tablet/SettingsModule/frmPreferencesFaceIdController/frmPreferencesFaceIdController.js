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
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
		applicationManager.getPresentationUtility().dismissLoadingScreen();        
	},
  
	initActions: function() {
    	this.view.btnContinue.onClick = this.btnNextOnClick; 	
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
  
	btnNextOnClick: function() {
		var navManger = applicationManager.getNavigationManager();    
		applicationManager.getPresentationUtility().showLoadingScreen();
		var settingMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");  
		settingMod.presentationController.enrollFaceId_Settings(this);           
	}
});