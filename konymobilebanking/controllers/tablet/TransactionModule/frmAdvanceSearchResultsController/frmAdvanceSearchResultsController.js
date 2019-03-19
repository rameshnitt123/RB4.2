define({
 
transModule: null,
getTransactionModule: function() {
  if (!this.transModule) {
  	this.transModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
  }
  return  this.transModule;
},  
  
init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
},
  
preshow: function() {
	this.initActions();
	var navManager = applicationManager.getNavigationManager();
	var searchParams = navManager.getCustomInfo("frmAdvanceSearch");
	this.view.lblSearchTransactions.text = searchParams.searchDescription;
	applicationManager.getPresentationUtility().dismissLoadingScreen();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
  	this.setTransactionData();
},
  
initActions: function() {
	this.view.segTransactions.onRowClick = this.segTransactionsOnRowClick;
	this.view.flxHeaderSearchbox.customSearchbox.flxSearchMain.btnCancel.onClick = this.btnCancelClick;
	this.view.flxDummySearch.onTouchEnd = this.textEdit;
},
 
setTransactionData: function() {
	var navManager = applicationManager.getNavigationManager();
	var searchParams = navManager.getCustomInfo("frmAdvanceSearch");
	var TransMod = this.getTransactionModule();
	var transactionData =  TransMod.presentationController.getPendPostTransactions();
	var configManager = applicationManager.getConfigurationManager();
  	var pendingTransactions = transactionData.pendingTransactions;
	var postedTransactions = transactionData.postedTransactions;
  
  	if (postedTransactions.length === 0 && pendingTransactions.length === 0) {
      this.view.flxSearchResults.flxNoTransactions.setVisibility(true);
      this.view.segTransactions.setVisibility(false);
    } else {
      	this.view.flxSearchResults.flxNoTransactions.setVisibility(false);
      	this.view.segTransactions.setVisibility(true);
     	var data = [];   
      	var max_size;
     	this.view.segTransactions.widgetDataMap = this.getDataMap();
     	max_size = Math.abs(pendingTransactions.length - 25);
      	
      	if (max_size > postedTransactions.length) {
        	max_size = postedTransactions.length;
     	}
    	      
        pendingTransactions.forEach(function (transaction) {
          var forUtility = applicationManager.getFormatUtilManager();
          var trandateobj = forUtility.getDateObjectfromString(transaction.transactionDate, "YYYY-MM-DD");
          transaction.transactionDate = forUtility.getFormatedDateString(trandateobj,forUtility.APPLICATION_DATE_FORMAT);
          transaction.amount = configManager.getCurrencyCode() + transaction.amount;
        });

        postedTransactions.forEach(function (transaction) {
          var forUtility = applicationManager.getFormatUtilManager();
          var trandateobj = forUtility.getDateObjectfromString(transaction.transactionDate, "YYYY-MM-DD");
          transaction.transactionDate =  forUtility.getFormatedDateString(trandateobj,forUtility.APPLICATION_DATE_FORMAT);
          transaction.amount = configManager.getCurrencyCode() + transaction.amount;
        });
      
        var dataSeg =  [
          [
            {
              lblHeader: "PendingTransactions"
            },
            pendingTransactions
          ],
          [
            {
              lblHeader: "PostedTransactions"
            },
            postedTransactions]
        ];
        this.view.segTransactions.setData(dataSeg);
    }
    
},
  
getDataMap: function() {
	var dataMap = {
		lblTransactionAmount: "amount",
		lblDate: "transactionDate",
		lblTransaction: "description",
		transactionId: "transactionId",
		lblHeader: "lblHeader"
	};
    return dataMap;
},
  
segTransactionsOnRowClick: function() {
	var navMan = applicationManager.getNavigationManager();
	var selectedSectionIndex = Math.floor(this.view.segTransactions.selectedRowIndex[0]);
	var selectedRowIndex = Math.floor(this.view.segTransactions.selectedRowIndex[1]);
	var data = navMan.getCustomInfo("frmAdvanceSearch");
	var transactionData = this.view.segTransactions.data[selectedSectionIndex][1][selectedRowIndex];
	navMan.setCustomInfo("frmTransactionDetails", transactionData);
	navMan.setEntryPoint("frmTransactionDetails", "AdvanceSearch"); 
	var transMod = this.getTransactionModule();
	transMod.presentationController.commonFunctionForNavigation("frmTransactionDetails");
},

navigateBack: function() {      
	var navMan = applicationManager.getNavigationManager();
	navMan.goBack(); 
},
  
onScrollEndTransactions: function()	{
	applicationManager.getPresentationUtility().showLoadingScreen();
	var navManager = applicationManager.getNavigationManager();
	var searchParams = navManager.getCustomInfo("frmAdvanceSearch");
	var segData = this.view.segTransactions.data ;
	var TransMod = this.getTransactionModule();
	TransMod.presentationController.getNextPostedTransactions(searchParams, segData);
},
   
assignScrollEndData: function(response) {
	if (response) {
		var configManager = applicationManager.getConfigurationManager();
		var len =  this.view.segTransactions.data[1][1].length ;

      	response.forEach(function(res, index) {
         var forUtility = applicationManager.getFormatUtilManager();
			var trandateobj = forUtility.getDateObjectfromString(res.transactionDate, "YYYY-MM-DD");
			res.transactionDate =  forUtility.getFormatedDateString(trandateobj,forUtility.APPLICATION_DATE_FORMAT);
			res.amount = configManager.getCurrencyCode() + res.amount;
			this.view.segTransactions.addDataAt(res, index + len, 1);
        });
	}
},

textEdit: function() {
	this.view.flxHeaderSearchbox.customSearchbox.tbxSearch.setFocus = false;
	var navMan = applicationManager.getNavigationManager();
	navMan.goBack();
},
  
btnCancelClick: function() {
    var transMod = this.getTransactionModule();
    transMod.presentationController.commonFunctionForNavigation("frmAccountDetails");
}
});