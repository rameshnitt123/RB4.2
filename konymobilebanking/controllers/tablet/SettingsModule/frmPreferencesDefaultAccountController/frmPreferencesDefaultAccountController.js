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
		this.view.segAccounts.onRowClick = this.segAccountsOnClick;       
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
		var data = navManager.getCustomInfo("frmPreferencesDefaultAccount"); 		
		
      	this.view.segAccounts.widgetDataMap = {
  			lblAccountName: "nickName",
  			lblBankName: "bankName",
  			lblAccountID: "accountID",
  			imgRadio: "imgRadio"
		};
		      
      	data[1].forEach(function(item) {
        	item.imgRadio = (item.accountID === data[0].lblAccId) ? {src: "radiobtn.png"} : {src: "radiobuttoninactive.png"};
        });	
      
		this.view.segAccounts.setData(data[1]);       
	},
  
	segAccountsOnClick: function() {  
		var selectedAcntRow = this.view.segAccounts.selectedIndex[1];  
		var segData = this.view.segAccounts.data;   
      
      	segData.forEach(function(item, index) {
        	if (selectedAcntRow == index) {
            	if (item.imgRadio.src == "radiobtn.png") {
                	item.imgRadio.src = "radiobuttoninactive.png"; 
                } else {
                	item.imgRadio.src = "radiobtn.png";
                  	var selAccountId = item.accountID; 
					var settingsMode = applicationManager.getModule("SettingsModule");
					settingsMode.presentationController.defaultAccountBack(selAccountId); 
                } 
            } else {
            	item.imgRadio.src = "radiobuttoninactive.png";  
        	}
        });
           
		this.view.segAccounts.setData(segData);
	}
});