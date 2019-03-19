define({ 

 //Type your controller code here 
  frmPreshow : function(){
    if(kony.os.deviceInfo().name==="iPhone"){
      this.view.flxHeader.isVisible = false;
    //  this.view.flxFooter.isVisible = true;
    }else{
      this.view.flxHeader.isVisible = true;
      //this.view.flxFooter.isVisible = false;
    }
       this.bindData();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  init : function(){
      var navManager = applicationManager.getNavigationManager();
	  this.view.customHeader.flxBack.onClick = function() {
      navManager.goBack();
	  }
      var scope =this;
      var currentForm=navManager.getCurrentForm();
      this.view.btnPayBill.onClick = this.payBill;
      this.view.btnViewBill.onClick = this.viewBill;
      this.view.segSelectAccounts.onRowClick=this.navToDetails;
      this.view.customHeader.btnRight.onClick = function() {
            scope.view.flxEditOptions.isVisible = true;
        };
        this.view.flxEditOptions.onClick = function(){
            scope.view.flxEditOptions.isVisible = false;
        };
        this.view.btnEditPayeeAddress.onClick = function(){
            scope.view.flxEditOptions.isVisible = false;
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
           var navManager = applicationManager.getNavigationManager();
           navManager.setEntryPoint("editBillPayPayee","frmBillPayPayeeDetails");	
            billPayMod.presentationController.setFlowType("editBillPay");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayEditAddress");
        };
        this.view.btnEditNickName.onClick = function(){
            scope.view.flxEditOptions.isVisible = false;
          var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
           var navManager = applicationManager.getNavigationManager();
           navManager.setEntryPoint("editBillPayPayee","frmBillPayPayeeDetails");	
            billPayMod.presentationController.setFlowType("editBillPay");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayEditName");
        };
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);

  },
  onClickEdit: function(){
      if(applicationManager.getDeviceUtilManager().isIPhone()) {
       var actionSheetObject = new kony.ui.ActionSheet(
                                                       {
                                                       "title":null,
                                                       "message":null,
                                                       "showCompletionCallback": null
                                                       }
                                                       );
       var actionEditPayeeAddress = new kony.ui.ActionItem(
                                                       {
                                                       "title":"Edit PayeeAddress",
                                                       "style":constants.ACTION_STYLE_DEFAULT,
                                                       "action": this.view.btnEditPayeeAddress.onClick
                                                       }
                                                       );
       var actionEditNickName = new kony.ui.ActionItem(
                                                      {
                                                      "title":"Edit Nick Name",
                                                      "style":constants.ACTION_STYLE_DEFAULT,
                                                      "action": this.view.btnEditNickName.onClick
                                                      }
                                                      );
       
       
       var actionCancel = new kony.ui.ActionItem(
                                                 {
                                                 "title":"Cancel",
                                                 "style":constants.ACTION_ITEM_STYLE_CANCEL,
                                                 "action": null
                                                 }
                                                 );
       actionSheetObject.addAction(actionEditPayeeAddress);
       actionSheetObject.addAction(actionEditNickName);
       actionSheetObject.addAction(actionCancel);
       actionSheetObject.show();
      }
       else {
        this.view.flxEditOptions.setVisibility(true);
        this.view.flxMainContainer.setEnabled(false);
       }
    },
   
  bindData:function()
   {
     var navManager = applicationManager.getNavigationManager();
     var  data=navManager.getCustomInfo("frmBillPayAllPayments");
         this.view.segSelectAccounts.widgetDataMap={
          lblTransaction:"amount",
          lblAccount:"showDate",
          lblDate:"fromAccountName",
          imgAccount:"empty"
        };
     this.view.segSelectAccounts.setData(data.billData);
     this.view.lblAmount.text=data.billPayeeDueDetails[0].dueAmount;
     this.view.lblDueDateValue.text=data.billPayeeDueDetails[0].billDueDate;
     this.view.lblLastPaymentDate.text=data.billPayeeDueDetails[0].paidDate;
     this.view.lblLastPaymentAmount.text=data.billPayeeDueDetails[0].paidAmount;
     
  
   },
  viewBill:function()
  	{
      var navMan = applicationManager.getNavigationManager();
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      var billPayeeData = navMan.getCustomInfo("frmBillPayPayeeDetails"); 
      billPayMod.presentationController.viewBill(billPayeeData[0].ebillURL);
  	},
  	payBill:function()
  	{
   
  	  var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      var payeeData=billPayMod.presentationController.getPayeeDetails();
      billPayMod.presentationController.navAfterSelectPayee(payeeData);
  	},
  navToDetails:function()
  {
     applicationManager.getPresentationUtility().showLoadingScreen();
     var navMan = applicationManager.getNavigationManager();   
    var selectedRowIndex=Math.floor(this.view.segSelectAccounts.selectedRowIndex[1]);
    var transactionData=this.view.segSelectAccounts.data[selectedRowIndex];
   transactionData.transactionId=transactionData.referenceId;
 
   // var navMan=applicationManager.getNavigationManager();
    navMan.setEntryPoint("payBill","frmBillPay");
    navMan.setCustomInfo("frmTransactionDetails",transactionData);
    navMan.setEntryPoint("frmTransactionDetails","BillPay");
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    billPayMod.presentationController.commonFunctionForNavigation("frmTransactionDetails");
  }

 });