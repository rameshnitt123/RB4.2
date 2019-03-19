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
        this.view.segSelectAccounts.onRowClick=this.segDefaultAccountOnClick;
        this.view.customHeader.flxBack.onClick=function(){
        	var navManager = applicationManager.getNavigationManager();
           navManager.goBack(); 
    	};        
    },
	setSegDefaultAcct : function(){
        var navManager = applicationManager.getNavigationManager();        
        var data=navManager.getCustomInfo("frmSetDefaultAccount");
        if((data.popUpMsg!==null)&&(data.popUpMsg!=="")&&(data.popUpMsg !== undefined))
       {
         var scopeObj=this;
         applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj,data.popUpMsg);         
      }
      data.popUpMsg="";
        this.view.segSelectAccounts.widgetDataMap={
          "lblTitle":"lblTitle",
          "lblValue":"lblValue",
          "imgArrow":"imgArrow",
          "lblAccId":"lblAccId"
        };
        
        this.view.segSelectAccounts.setData(data);         
    },
  	segDefaultAccountOnClick :function(){
        applicationManager.getPresentationUtility().showLoadingScreen(); 
        var navManager = applicationManager.getNavigationManager();  
		var selectedAcntRow = this.view.segSelectAccounts.selectedIndex[1];
		var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		var selectedRecord = this.view.segSelectAccounts.data[selectedAcntRow];   
		var data = [];
		data[0]=selectedRecord;
		navManager.setCustomInfo("frmPreferencesDefaultAccount",data); 
		settingsMode.presentationController.setDataDefaultAccLogin(selectedAcntRow);              
  },
});