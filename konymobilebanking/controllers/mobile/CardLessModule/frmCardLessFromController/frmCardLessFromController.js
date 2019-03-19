define({ 

	cardlessAccounts:null,
   preShow:function(){
     var self = this;
   this.view.customHeader.flxBack.onClick=this.flxBackOnClick;
   this.view.customHeader.flxHeader.btnRight.onClick = this.flxBackOnClick;
   this.view.tbxSearch.onTouchStart = this.tbxSearchOnTouchEnd;
   this.view.customSearchbox.btnCancel.onClick = this.btnCancelOnClick;
     if(kony.os.deviceInfo().name==="iPhone"){
       this.view.flxHeader.isVisible = false;
     }else{
       this.view.flxHeader.isVisible = true;
     }
	var navMan=applicationManager.getNavigationManager();
    var fromAccountsList = navMan.getCustomInfo("frmCardLessFrom");
    var fromaccounts = fromAccountsList.fromaccounts;
	this.view.customSearchbox.tbxSearch.text="";
    this.view.flxSearch.top = "0dp";
    this.view.tbxSearch.text="";
    this.view.customSearchbox.tbxSearch.onTextChange=this.tbxSearchOnTextChange;
    var accProcessedData = (JSON.parse(JSON.stringify(fromaccounts)));
    this.setSegmentData(accProcessedData);
    this.btnCancelOnClick();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);

	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
 },

  segToAccountOnRowClick:function(){
	applicationManager.getPresentationUtility().showLoadingScreen();
    var navMan=applicationManager.getNavigationManager();
    var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    var preAccData = this.view.segToAccount.selectedItems[0];
    cardlessModule.presentationController.setFromAccountDetails(preAccData);
    var txnDetails=cardlessModule.presentationController.getTransactionObject();
	txnDetails=cardlessModule.presentationController.processAccountsData(txnDetails);
    navMan.setCustomInfo("frmCardLessWithdraw",txnDetails);
    cardlessModule.presentationController.commonFunctionForNavigation("frmCardLessWithdraw");
  },
  flxBackOnClick:function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  btnRightOnCLick:function(){
    var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
	cardlessModule.presentationController.cancelCommon();
  },
   tbxSearchOnTouchEnd: function() {
           this.view.customSearchbox.tbxSearch.setFocus(true);
         this.view.tbxSearch.setFocus(true);
         this.view.flxHeader.setVisibility(false);
         this.view.flxHeaderSearchbox.setVisibility(true);
         this.view.flxMainContainer.top = "40dp";
         this.view.flxSearch.setVisibility(false);
     },
     btnCancelOnClick: function() {
        this.view.customSearchbox.tbxSearch.text="";
    	this.view.tbxSearch.text="";
         this.view.flxHeaderSearchbox.setVisibility(false);
         this.view.flxSearch.setVisibility(true);
             this.view.flxNoTransactions.isVisible=false;
          	//this.view.flxHeaderNT.isVisible=false;
          	//this.view.flxSeperator3.isVisible=false;
    	    this.view.lblNoTransaction.isVisible=false;
        	this.view.segToAccount.isVisible=true;
         if (kony.os.deviceInfo().name === "iPhone") {
             this.view.flxHeader.isVisible = false;
             this.view.flxMainContainer.top = "0dp";
         } else {
             this.view.flxHeader.isVisible = true;
             this.view.flxMainContainer.top = "56dp";
         }
         this.view.segToAccount.setData(this.cardlessAccounts);
  },
  setSegmentData:function(res){
    var dataMap=this.getDataMap();
    this.view.segToAccount.widgetDataMap=dataMap;
    if(res.length === 0)
      {
    	 this.view.segToAccount.isVisible=false;
    	    this.view.flxNoTransactions.isVisible=true;
          	//this.view.flxHeaderNT.isVisible=false;
          	//this.view.flxSeperator3.isVisible=false;
    	    this.view.lblNoTransaction.isVisible=true;    
      }
    else
      {
         this.view.segToAccount.isVisible=true;
    	    this.view.flxNoTransactions.isVisible=false;
          	//this.view.flxHeaderNT.isVisible=false;
          	//this.view.flxSeperator3.isVisible=false;
    	    this.view.lblNoTransaction.isVisible=false;
        var forUtility=applicationManager.getFormatUtilManager();
		for(var i =0 ; i < res.length;i++)
           {
             res[i].lblAccountBal="Available Balance";
			 res[i].amount=res[i].availableBalance;
             res[i].availableBalance=forUtility.formatAmountandAppendCurrencySymbol(res[i].availableBalance,res[i].currencyCode);
           }
         this.view.segToAccount.setData(res);
		 this.cardlessAccounts=res;
      }
    
  },
  getDataMap : function(){
    var dataMap={};
    dataMap = {
       "lblAccountName":"nickName",
      "lblAccountBal":"lblAccountBal",
      "lblAccountBalValue":"availableBalance",
	  "lblBankName":"accountType",
      "accountID":"accountID",
      "amount":"amount"
    };
    return dataMap;
  },
  tbxSearchOnTextChange:function(){
      	var searchtext=this.view.customSearchbox.tbxSearch.text.toLowerCase();
    	var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        var data = this.cardlessAccounts;
        var searchSegmentData = applicationManager.getDataProcessorUtility().commonSegmentSearch("accountName",searchtext,data);
        if(searchSegmentData && searchSegmentData.length===0){
      		this.view.flxNoTransactions.isVisible=true;
          	//this.view.flxHeaderNT.isVisible=false;
          	//this.view.flxSeperator3.isVisible=false;
    	    this.view.lblNoTransaction.isVisible=true;
        	this.view.segToAccount.isVisible=false;
		}
		else{
          	this.view.flxNoTransactions.isVisible=false;
          	//this.view.flxHeaderNT.isVisible=false;
          	//this.view.flxSeperator3.isVisible=false;
    	    this.view.lblNoTransaction.isVisible=false;
	        this.view.segToAccount.isVisible=true;
      		this.view.segToAccount.setData(searchSegmentData);
       }	
  	}
 });