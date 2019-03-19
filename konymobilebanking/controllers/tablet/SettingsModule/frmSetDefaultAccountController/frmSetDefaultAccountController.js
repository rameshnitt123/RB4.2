define({
 
	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
  
	preShow: function() {
		this.initActions();
      	this.initHeaderActions();
		this.setSegDefaultAcct();
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
	},

	initActions: function () {       
		this.view.segSelectAccounts.onRowClick = this.segDefaultAccountOnClick;
	},
  
  	initHeaderActions: function() {
    	var isIpad = applicationManager.getDeviceUtilManager().isIpad();
		if (!isIpad) { 	
      		this.view.customHeader.flxBack.onClick = this.backNavigation;  
        }
    },
  
  	backNavigation: function() {
    	var navManager = applicationManager.getNavigationManager();
		navManager.goBack();  
    },
  
	setSegDefaultAcct: function() {
		var navManager = applicationManager.getNavigationManager();        
		var data = navManager.getCustomInfo("frmSetDefaultAccount"); 
		if (data.popUpMsg) {
			applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, data.popUpMsg);         
		}
		data.popUpMsg = "";
		this.view.segSelectAccounts.widgetDataMap = {
			lblTitle: "lblTitle",
			lblValue: "lblValue",
			imgArrow: "imgArrow",
			lblAccId: "lblAccId"
		};
		this.view.segSelectAccounts.setData(data);         
	},
  
	segDefaultAccountOnClick: function() {
		applicationManager.getPresentationUtility().showLoadingScreen(); 
		var navManager = applicationManager.getNavigationManager();  
		var selectedAcntRow = this.view.segSelectAccounts.selectedIndex[1];
		var settingsMode = applicationManager.getModule("SettingsModule");
		var selectedRecord = this.view.segSelectAccounts.data[selectedAcntRow];   
		var data = [];
		data[0] =  selectedRecord;
		navManager.setCustomInfo("frmPreferencesDefaultAccount", data); 
		settingsMode.presentationController.setDataDefaultAccLogin(selectedAcntRow);              
	}
});