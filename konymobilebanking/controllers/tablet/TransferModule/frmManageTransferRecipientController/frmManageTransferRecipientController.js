define({
  onNavigate: function (obj) {
    if (obj == undefined) {
      return;
    }
  },
  init:function(){
  	this.initActions();  
  },
  preShow: function () {
    applicationManager.getPresentationUtility().showLoadingScreen();
    if (applicationManager.getDeviceUtilManager().isIpad()) {
      this.view.flxHeader.isVisible = false;
    }

    var navManager = applicationManager.getNavigationManager();
    var transactionDetails=navManager.getCustomInfo("frmManageTransferRecipient");
    var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var benificiaryDetails=transferMod.presentationController.getBenificiaryData();
    var txns=transactionDetails.Transactions;
    this.view.customHeaderTablet.lblHeaderTitle.text=benificiaryDetails.nickName;
    this.view.title=benificiaryDetails.nickName;
    this.setAccountDetails(benificiaryDetails);
    this.setTransactions(txns);
    this.initHeaderActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  initActions: function () {
    var scope = this;
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    this.view.btnTransfer.onClick=function(){
      var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transMod.presentationController.setTransferToInfo();
     var navMan=applicationManager.getNavigationManager();
     navMan.setEntryPoint("makeatransfer","frmManageTransferRecipient");
    };
    this.view.segTransactions.onRowClick = this.segTransactionsOnRowClick; 
  },  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
    	 this.view.customHeaderTablet.flxSearch.onClick = this.showBenificiaryDetails;
   		 this.view.customHeaderTablet.flxBack.onClick = this.navigateBack;
   		 this.view.customHeaderTablet.btnRight.onClick = this.cancelHandlerAction;  
    }
  },  
  cancelHandlerAction: function() {
  	var transModule = applicationManager.getModule("TransferModule");
	transModule.presentationController.commonFunctionForNavigation("frmTransfers");  
  },
  navigateBack : function(){
    var navMan=applicationManager.getNavigationManager();
        navMan.goBack(); 
  },
  iphoneInformationIcononClick : function () {
    this.showBenificiaryDetails();
  },
  showBenificiaryDetails:function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transferModule.presentationController.commonFunctionForNavigation("frmManageTransferRecipientInfo");
  },
  setAccountDetails:function(accountDetails){
    this.view.lblBankName.text=accountDetails.bankName;
    this.view.lblAccountType.text=accountDetails.accountType;
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
	if(transferModule.presentationController.getFlowType()==="SameBankRecipients"){
      this.view.imgBank.isVisible=false;
    }
    else{
      this.view.imgBank.isVisible=true;
      this.view.imgBank.src="externalbank.png";
    }
  },
  setTransactions:function(data){
    var segmentData=[];
    for(var i=0;i<data.length;i++){
      if(data[i].transactionType==="ExternalTransfer"){
        data[i].fromAccountName=data[i].fromNickName;
        data[i].scheduledDate=data[i].transactionDate;
        segmentData.push(data[i]);
      }
    }
    var dataMap=this.getDataMap();
    this.view.segTransactions.widgetDataMap=dataMap;
    this.view.segTransactions.isVisible=true;
    if(segmentData.length>0){
    	this.view.flxNoTransactions.isVisible=false;
    	this.view.segTransactions.setData(segmentData);
    }else{
      this.view.segTransactions.isVisible=false;
      this.view.flxNoTransactions.isVisible=true;
    }
  },
  getDataMap : function(){
    var dataMap={};
    dataMap = {
      "lblAccountName":"description",
      "lblAccountBal":"transactionDate",
      "lblAccountBalValue":"amount",
      "lblTypeName":"lblHeader",
      "lblTypeValue":""
    };
    return dataMap;
  },
  segTransactionsOnRowClick:function(){
    var navManager = applicationManager.getNavigationManager();
	navManager.setEntryPoint("makeatransfer","frmManageTransferRecipient");
    var transactionDetails=navManager.getCustomInfo("frmManageTransferRecipient");
    var data=this.view.segTransactions.selectedRowItems[0];
    navManager.setCustomInfo("frmTransactionDetails",data);
	navManager.setEntryPoint("frmTransactionDetails","ManageTransferRecipient");
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transferModule.presentationController.commonFunctionForNavigation("frmTransactionDetails");
  }
});