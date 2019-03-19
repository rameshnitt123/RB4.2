define({
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preshow: function () {
    this.initActions();
    var navManager = applicationManager.getNavigationManager();
    var searchParams = navManager.getCustomInfo("frmAdvanceSearch");
    this.view.lblSearchTransactions.text = searchParams.searchDescription ;
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  initActions: function () {
    this.view.segTransactions.onRowClick = this.segTransactionsOnRowClick;
    this.view.flxHeaderSearchbox.customSearchbox.flxSearchMain.btnCancel.onClick= this.btnCancelClick ;
    this.view.flxDummySearch.onTouchEnd = this.textEdit1 ;

  },
  setTransactionData : function() {
    var scope = this;
    var navManager = applicationManager.getNavigationManager();
    var searchParams = navManager.getCustomInfo("frmAdvanceSearch");
    var TransModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
    var transactionData =  TransModPresentationController.getPendPostTransactions();
    var configManager = applicationManager.getConfigurationManager();
    var pendingTransactions = transactionData.pendingTransactions;
    var postedTransactions = transactionData.postedTransactions;
    if(postedTransactions.length===0&&pendingTransactions.length===0){
      this.view.flxSearchResults.flxNoTransactions.setVisibility(true);
      this.view.segTransactions.setVisibility(false);
    }
    else{
      this.view.flxSearchResults.flxNoTransactions.setVisibility(false);
      this.view.segTransactions.setVisibility(true);
      var data = [];   
      var data2=[];
      var max_size;
      this.view.segTransactions.widgetDataMap = this.getDataMap();
      max_size = Math.abs(pendingTransactions.length-25);
      if(max_size>postedTransactions.length){
        max_size = postedTransactions.length;
      }

      //pending transaction data
      for(var i=0;i<pendingTransactions.length;i++){
        var forUtility=applicationManager.getFormatUtilManager();
        var trandateobj=forUtility.getDateObjectfromString(pendingTransactions[i]["transactionDate"],"YYYY-MM-DD");
        pendingTransactions[i].transactionDate =  forUtility.getFormatedDateString(trandateobj,forUtility.getApplicationDateFormat());
        pendingTransactions[i].amount = configManager.getCurrencyCode() + pendingTransactions[i].amount;
      }

      for(var i=0;i<max_size;i++){
        var forUtility = applicationManager.getFormatUtilManager();
        var trandateobj=forUtility.getDateObjectfromString(postedTransactions[i]["transactionDate"],"YYYY-MM-DD");
        postedTransactions[i].transactionDate =  forUtility.getFormatedDateString(trandateobj,forUtility.getApplicationDateFormat());
        postedTransactions[i].amount = configManager.getCurrencyCode() + postedTransactions[i].amount;
      }
      var dataSeg=  [
        [
          {
            "lblHeader": "PendingTransactions"
          },
          pendingTransactions
        ],[{"lblHeader": "PostedTransactions"},postedTransactions]];
      this.view.segTransactions.setData(dataSeg);
    }
  },
  // Setting the datamap for the segment 
  getDataMap: function(){
    var dataMap = {"lblTransactionAmount": "amount",
                   "lblDate":"transactionDate",
                   "lblTransaction":"description",
                   "transactionId": "transactionId",
                   "lblHeader":"lblHeader"
                  }
    return dataMap;

  },
  segTransactionsOnRowClick:function(){
    var navMan = applicationManager.getNavigationManager();
    var selectedSectionIndex=Math.floor(this.view.segTransactions.selectedRowIndex[0]);
    var selectedRowIndex=Math.floor(this.view.segTransactions.selectedRowIndex[1]);
    var data = navMan.getCustomInfo("frmAdvanceSearch");

    var transactionData=this.view.segTransactions.data[selectedSectionIndex][1][selectedRowIndex];
    navMan.setCustomInfo("frmTransactionDetails",transactionData);
    navMan.setEntryPoint("frmTransactionDetails","AdvanceSearch"); 
    var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
    transModPresentationController.commonFunctionForNavigation("frmTransactionDetails");
  },
  navigateBack: function(){      
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack(); 
  },
  onScrollEndTransactions : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var searchParams = navManager.getCustomInfo("frmAdvanceSearch");
    var segData = this.view.segTransactions.data ;
    var TransModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
    TransModPresentationController.getNextPostedTransactions(searchParams,segData);


  },
  assignScrollEndData : function(response){
    if(response){
      var data2=[] ;
      var configManager = applicationManager.getConfigurationManager();
      // looping the data
      var len =  this.view.segTransactions.data[1][1].length ;

      for(var i=0;i<response.length;i++){

        var forUtility=applicationManager.getFormatUtilManager();
        var trandateobj=forUtility.getDateObjectfromString(response[i]["transactionDate"],"YYYY-MM-DD");
        response[i].transactionDate =  forUtility.getFormatedDateString(trandateobj,forUtility.getApplicationDateFormat());
        response[i].amount = configManager.getCurrencyCode() + response[i].amount;

        this.view.segTransactions.addDataAt(response[i],i+len,1);

      } 

    }


  },
  textEdit1 : function(){
    this.view.flxHeaderSearchbox.customSearchbox.tbxSearch.setFocus = false;
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();

  },
  btnCancelClick : function()
  {
    var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
    transModPresentationController.commonFunctionForNavigation("frmAccountDetails");

  }
});