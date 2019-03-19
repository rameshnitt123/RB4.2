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
  
	initActions: function() {
		this.view.segSelectAccounts.onRowClick = this.segSelectAccountsOnClick;     	    
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
		var data = navManager.getCustomInfo("frmEStmtAccountPreferences"); 		
      	
		this.view.segSelectAccounts.widgetDataMap = {
			lblAccountHolderName: "nickName",
			lblBankName: "bankName",
			imgBank: "bankofamerica",
			imgChevron: "imgChevron"
		};

		this.view.segSelectAccounts.setData(data);       
	},
  
	segSelectAccountsOnClick: function() {  
		applicationManager.getPresentationUtility().showLoadingScreen(); 
		var navManager = applicationManager.getNavigationManager();  
		var selectedAcntRow = this.view.segSelectAccounts.selectedIndex[1];
		var settingsMode = applicationManager.getModule("SettingsModule");
		var selectedRecord = this.view.segSelectAccounts.data[selectedAcntRow];   
		selectedRecord.selectedRow = selectedAcntRow;
		navManager.setCustomInfo("frmEStmtAccountDetails", selectedRecord);
		settingsMode.presentationController.commonFunctionForNavigation("frmEStmtAccountDetails");
	}
});