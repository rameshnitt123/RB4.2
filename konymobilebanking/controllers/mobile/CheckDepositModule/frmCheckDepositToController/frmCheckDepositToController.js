define({ 
  segData: [],
  searchText: "",
  
  checkDepositToInit: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
 
  preShow:function(){
    this.view.tbxSearch.text = "";
    this.renderTitleBar();
    this.setSegmentData();
    this.view.customHeader.flxBack.onClick=this.flxBackOnClick;
    this.view.customHeader.btnRight.onClick = this.onCancelClick;
    this.view.btnAddAccount.onClick = this.btnAddAccountOnClick;
    this.view.tbxSearch.onTextChange = this.onSearchTextChange;
  applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  renderTitleBar: function(){
   var deviceUtilManager = applicationManager.getDeviceUtilManager();
   var isIphone = deviceUtilManager.isIPhone();
   if (isIphone) {
     this.view.flxHeader.setVisibility(false);
   }
 },
  flxBackOnClick:function(){
     var navManager = applicationManager.getNavigationManager();	
     navManager.goBack();
  },
 
  onCancelClick: function() {
    var navManager = applicationManager.getNavigationManager();
    var prevForm = navManager.getPreviousForm();
    var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    checkDepositModule.presentationController.commonFunctionForNavigation(prevForm);
  },
 
  getWidgetDataMap : function(){
    var dataMap = {
    "lblAccountNumber": "lblAccountNumber",  
    "lblAccountName":"nickName",
    "lblBankName" : "lblBankName",
    "lblAccountBalValue":"lblAccountBalValue",
    "lblAccountBal":"AvailableBalStaticLabel",
    "imgBank": "imgBank"
  };
   return dataMap;
  },
  segToAccountOnClick:function(){
      var selectedToAccountData = this.view.segToAccount.selectedRowItems[0];
       var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
      checkDepositModule.presentationController.setSelectedAccountData(selectedToAccountData);
  },
 setSegmentData : function(segData){	
      var navManager = applicationManager.getNavigationManager();
       var dataToSet = [];
     if(!segData) {
         this.segData	= navManager.getCustomInfo("frmCheckDepositTo");
           dataToSet = this.segData;
       }
     else {
          dataToSet = segData;
       }
      if(dataToSet && dataToSet.length !== 0)
        {var dataMap = this.getWidgetDataMap();
       this.view.segToAccount.widgetDataMap = dataMap;
       this.view.segToAccount.setData(dataToSet);
       
       this.view.segToAccount.setVisibility(true);
       this.view.flxNoTransactions.setVisibility(false);}
   else
     {
       this.view.segToAccount.setVisibility(false);
       this.view.flxNoTransactions.setVisibility(true);
     }
      
 },
   onSearchTextChange: function() {
       var searchText = this.view.tbxSearch.text.toLowerCase();
     var navManager = applicationManager.getNavigationManager();
      if(searchText && this.segData.length !== 0) {
         this.view.segToAccount.removeAll();
          var data = this.segData;
          var searchSegData = applicationManager.getDataProcessorUtility().commonSegmentSearch("lblAccountName",searchText,data);
          this.setSegmentData(searchSegData);
       }
       else if(!searchText && this.segData.length !== 0){
         this.setSegmentData(this.segData);
     }
       
       
       applicationManager.getPresentationUtility().dismissLoadingScreen();
   }
});