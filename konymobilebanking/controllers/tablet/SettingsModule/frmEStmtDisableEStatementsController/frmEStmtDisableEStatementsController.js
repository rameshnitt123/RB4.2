define({ 
	
	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
  
	preShow: function() {      
		this.initAction();
      	this.initHeaderActions();
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
	},
  
	initAction: function() {
		this.view.btnTAndC.onClick = this.goToTermsAndConditions;
  		this.view.btnDisable.onClick = this.disableStatements;
	},
  
  	initHeaderActions: function() {
    	var isIpad = applicationManager.getDeviceUtilManager().isIpad();
		
      	if (!isIpad) {
        	this.view.customHeader.flxBack.onClick = this.backNavigation;	
			this.view.customHeader.btnRight.onClick = this.backNavigation;  
        } 
    },
  
	backNavigation: function() {
		var navManager = applicationManager.getNavigationManager();
		navManager.goBack();
	},
  
  	goToTermsAndConditions: function() {
     	var settingsModule = applicationManager.getModule("SettingsModule"); 
		settingsModule.presentationController.commonFunctionForNavigation("frmEStmtTermsAndConditions"); 
    },
  
  	disableStatements: function() {
    	applicationManager.getPresentationUtility().showLoadingScreen();
		var settingsMode = applicationManager.getModule("SettingsModule");
		var navManager = applicationManager.getNavigationManager();
		var data = navManager.getCustomInfo("frmEStmtAccountDetails");
		var accountID = (data && data.accountID) ? data.accountID : "";
	
      	var updatedSettings = {
        	nickName: data.nickName,
          	accountID: accountID,
          	eStatementEnable: false,
          	email: ""
        };
      
		settingsMode.presentationController.updateUserAccountSettingsForEstatements(updatedSettings, "disable");  
    }
});