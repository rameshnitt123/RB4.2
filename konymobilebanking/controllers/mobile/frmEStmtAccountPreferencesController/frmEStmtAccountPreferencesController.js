define({
	init : function(){
		var navManager = applicationManager.getNavigationManager();
		var currentForm=navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
	},
    frmPreshow : function(){
      if(kony.os.deviceInfo().name==="iPhone"){
        this.view.flxHeader.isVisible = false;
        this.view.flxFooter.isVisible = false;
      }else{
        this.view.flxHeader.isVisible = true;
        this.view.flxFooter.isVisible = false;
      }
      this.initActions();
      //this.setAccountsSegmentData();	
      this.setSegDefaultAcct();
      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function () {
        var scope = this;
        this.view.segSelectAccounts.onRowClick=this.segSelectAccountsOnClick;
        this.view.customHeader.flxBack.onClick=function(){
        	var navManager = applicationManager.getNavigationManager();
           navManager.goBack(); 
    	};        
    },
	setSegDefaultAcct : function(){
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo("frmEStmtAccountPreferences"); 
		if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.title = kony.i18n.getLocalizedString("kony.mb.default.account");	
        }  
        this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.default.account");		
        this.view.segSelectAccounts.widgetDataMap={
     		 "lblAccountHolderName":"nickName",
      		 "lblBankName":"bankName",
      		 "imgBank":"bankofamerica",
             "imgChevron":"imgChevron"
    		 };
      for(var i=0;i<data.length;i++){
        data[i].imgChevron="segmentarrow.png";
        data[i].bankofamerica="konybanklogo.png";
      }
       this.view.segSelectAccounts.setData(data);       
    },
    segSelectAccountsOnClick : function(){  
        applicationManager.getPresentationUtility().showLoadingScreen(); 
        var navManager = applicationManager.getNavigationManager();  
		var selectedAcntRow = this.view.segSelectAccounts.selectedIndex[1];
		var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		var selectedRecord = this.view.segSelectAccounts.data[selectedAcntRow];   
		var data = [];
        selectedRecord.selectedRow=selectedAcntRow;
		navManager.setCustomInfo("frmEStmtAccountDetails",selectedRecord);
        var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule"); 
	    settingsModule.presentationController.commonFunctionForNavigation("frmEStmtAccountDetails");
    },
});