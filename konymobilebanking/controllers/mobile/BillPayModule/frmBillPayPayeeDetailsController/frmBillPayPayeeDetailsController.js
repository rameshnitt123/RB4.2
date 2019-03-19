define({
    onNavigate: function(obj) {
        if (obj === undefined) {
            return;
        }
        if(obj=="view"){
            this.view.customHeader.btnRight.isVisible = false;
            this.view.btnPayAPerson.isVisible = false;
            this.view.btnDeleteRecipient.isVisible = false;
        }
    },
   init : function(){
      this.view.btnActivateEBill.onClick = this.activateEBilling;
      this.view.btnDeactivateEBill.onClick = this.deactivateEBilling;
      this.view.flxViewAllPayments.onClick = this.viewAllPayments;
	  this.view.btnPayBill.onClick = this.payBill;
      this.view.btnViewBill.onClick = this.viewBill;
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function() {
      var scope = this;
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.view.flxEditOptions.setVisibility(false);
        this.setDataToForm();
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        if(this.view.btnDeactivateEBill.isVisible && this.view.btnActivateEBill.isVisible){
          scope.view.flxMainContainer.bottom = "200dp";
        }
      else{
        scope.view.flxMainContainer.bottom = "140dp";
      }
     //alert(this.view.flxMainContainer.bottom);
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
      var navMan=applicationManager.getNavigationManager();
      navMan.setEntryPoint("payBill","frmBillPayPayeeDetails");
   
  	  var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      var payeeData=billPayMod.presentationController.getPayeeDetails();
      billPayMod.presentationController.navAfterSelectPayee(payeeData);
  	},
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
          var navMan=applicationManager.getNavigationManager();
          navMan.goBack();
        };

        this.view.customHeader.btnRight.onClick = function() {
            scope.view.flxEditOptions.isVisible = true;
        };
        this.view.flxEditOptions.onClick = function(){
            scope.view.flxEditOptions.setVisibility(false);
        };
        this.view.btnEditPayeeAddress.onClick = function(){
            scope.view.flxEditOptions.setVisibility(false);
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
           var navManager = applicationManager.getNavigationManager();
           navManager.setEntryPoint("editBillPayPayee","frmBillPayPayeeDetails");	
            billPayMod.presentationController.setFlowType("editBillPay");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayEditAddress");
        };
        this.view.btnEditNickName.onClick = function(){
            scope.view.flxEditOptions.setVisibility(false);
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            var navManager = applicationManager.getNavigationManager();
            navManager.setEntryPoint("editBillPayPayee","frmBillPayPayeeDetails");	
            billPayMod.presentationController.setFlowType("editBillPay");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayEditName");
        };
        this.view.btnDeleteRecipient.onClick = function(){
           var basicConfig={
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "alertTitle": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deletePayeeAlertTitle"),
            "yesLabel":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
            "message":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.billpay.deletePayeeMessage","Do you want to delete the payee"),
            "alertHandler": scope.confirmDelete
          };
          applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});
        };
        this.view.btnPayAPerson.onClick = function(){
          scope.view.flxEditOptions.isVisible = false;
          var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
//           var navManager = applicationManager.getNavigationManager();
//           navManager. setEntryPoint("BillPayPayee","frmBillPayPayeeDetails");	
//         billPayMod.presentationController.setFlowType("editBillPay");
          var navMan=applicationManager.getNavigationManager();
          navMan.setEntryPoint("payBill","frmBillPayPayeeDetails");
          var payeeData=billPayMod.presentationController.getPayeeDetails();
          billPayMod.presentationController.navAfterSelectPayee(payeeData);
        };
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
   
  
    activateEBilling:function(){
       var basicConfig={
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Areyousuredoyouwanttoactivatee-bill"),
            "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
            "alertHandler": this.activeBill
          };
       applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});
    },
    
    deactivateEBilling:function(){
       var basicConfig={
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Areyousuredoyouwanttode-activatee-bill"),
            "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
            "alertHandler": this.deactiveBill
          };
       applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});
    },
    activeBill:function(response){
      if(response===true){
        applicationManager.getPresentationUtility().showLoadingScreen();
        var scope = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var payeeData=billPayMod.presentationController.getPayeeDetails();
		payeeData.EBillEnable = "1";
        billPayMod.presentationController.updateEBillStatus(payeeData,true);
        
      } else{
      kony.print("don't delete");
    }
    },
     activeEbillStatus:function(){
      var scope = this;
      var navMan = applicationManager.getNavigationManager();
	  var billPayeeData = navMan.getCustomInfo("frmBillPayPayeeDetails"); 
      if(billPayeeData && billPayeeData.length !==0)
      {
      scope.view.lblAmount.text=billPayeeData[0].dueAmount;
      scope.view.lblDueDateValue.text=billPayeeData[0].billDueDate;
      scope.view.lblLastPaymentDate.text=billPayeeData[0].paidDate;
      scope.view.lblLastPaymentAmount.text=billPayeeData[0].paidAmount;
      scope.view.flxUpcommingBillDetails.setVisibility(true);  
      scope.view.btnPayAPerson.setVisibility(false);
      }
      else{
        scope.view.flxUpcommingBillDetails.setVisibility(false); 
        scope.view.btnPayAPerson.setVisibility(true);
      }
      scope.view.imgebill.src = "ebill.png";
      scope.view.lbleBillStatusValue.text = "Active";
      scope.view.btnActivateEBill.setVisibility(false);
      scope.view.btnDeactivateEBill.setVisibility(true);
     // scope.view.flxMainContainer.bottom = "190dp";
      applicationManager.getPresentationUtility().dismissLoadingScreen(); 
      this.showEBillToastMessage(true);
        
        
    },
    deactiveBill:function(response){
      if(response===true){
        applicationManager.getPresentationUtility().showLoadingScreen();
        var scope = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var payeeData=billPayMod.presentationController.getPayeeDetails();
		payeeData.EBillEnable = "0";
        billPayMod.presentationController.updateEBillStatus(payeeData,false);
       
      } else{
      kony.print("don't delete");
    }
      
    },
    deactiveEbillStatus:function(){
      var scope = this;
       scope.view.imgebill.src = "ebillinactive.png";
           scope.view.lbleBillStatusValue.text = "Inactive";
           scope.view.btnActivateEBill.setVisibility(true);
      	 //  scope.view.flxMainContainer.bottom = "190dp";
           scope.view.btnDeactivateEBill.setVisibility(false);
           scope.view.flxUpcommingBillDetails.setVisibility(false);
           scope.view.btnPayAPerson.setVisibility(true);
           applicationManager.getPresentationUtility().dismissLoadingScreen();
           this.showEBillToastMessage(false);
    }, 
    showEBillToastMessage : function(res){
      if(res ===true){
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.ebill.EBillActivatedSuccessfully"));
      }
      else{
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.ebill.EBillDe-activatedSuccessfully"));
      }
	},
	
    setDataToForm:function(){
        var scope=this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var payeeData=billPayMod.presentationController.getPayeeDetails();
        if(payeeData.payeeName){
          scope.view.lblPayeeFullNameValue.text=payeeData.payeeName;
        }
        if(payeeData.accountNumber){
          var accnum=payeeData.accountNumber;
          scope.view.lblAccountNumberValue.text=applicationManager.getDataProcessorUtility().maskAccountNumber(accnum);
        }
        else if(payeeData.accountNumber==="" || payeeData.accountNumber===null || payeeData.accountNumber===undefined){
          scope.view.lblAccountNumberValue.text="Not Available";
        }
        if(payeeData.nameOnBill){
          scope.view.lblNameOnBillValue.text=payeeData.nameOnBill;
        }
        if(payeeData.payeeNickName){
          scope.view.lblNickNameValue.text=payeeData.payeeNickName;
        }
        if(payeeData.street || payeeData.addressLine2 || payeeData.cityName|| payeeData.zipCode || payeeData.state ){
          var address="";
          if(payeeData.addressLine1){
            address=address+payeeData.addressLine1+",";
          }
          if(payeeData.street){
            address=address+payeeData.street+",";
          }
          if(payeeData.addressLine2){
            address=address+payeeData.addressLine2+",";
          }
          if(payeeData.cityName){
            address=address+payeeData.cityName+",";
          }
          if(payeeData.state){
            address=address+payeeData.state+",";
          }
          if(payeeData.zipCode){
            address=address+payeeData.zipCode;
          }
          scope.view.lblPayeeAddressValue.text=address;
        }
      if(payeeData.eBillSupport === "true"){
        if(payeeData.eBillStatus === "0"){
           scope.view.imgebill.setVisibility(true);
           scope.view.imgebill.src = "ebillinactive.png";
           scope.view.lbleBillStatusValue.text = "Inactive";
           scope.view.btnActivateEBill.setVisibility(true);
         // scope.view.flxMainContainer.bottom = "190dp";
           scope.view.btnPayAPerson.setVisibility(true);
           scope.view.flxUpcommingBillDetails.setVisibility(false);
           scope.view.btnDeactivateEBill.setVisibility(false);
        }
        else{
          var navMan = applicationManager.getNavigationManager();
    	  var billPayeeData = navMan.getCustomInfo("frmBillPayPayeeDetails"); 
		  if(billPayeeData && billPayeeData.length !== 0)
            {
          		scope.view.lblAmount.text=billPayeeData[0].dueAmount;
          		scope.view.lblDueDateValue.text=billPayeeData[0].billDueDate;
          		scope.view.lblLastPaymentDate.text=billPayeeData[0].paidDate;
          		scope.view.lblLastPaymentAmount.text=billPayeeData[0].paidAmount;
          		scope.view.flxUpcommingBillDetails.setVisibility(true);
                scope.view.btnPayAPerson.setVisibility(false);
            }
          else{
          		scope.view.flxUpcommingBillDetails.setVisibility(false);  
                scope.view.btnPayAPerson.setVisibility(true);
          }
          scope.view.imgebill.setVisibility(true);
          scope.view.imgebill.src = "ebill.png";
          scope.view.lbleBillStatusValue.text = "Active";
          scope.view.btnActivateEBill.setVisibility(false);
          scope.view.btnDeactivateEBill.setVisibility(true);
        //  scope.view.flxMainContainer.bottom = "190dp";
        }
      }
       else{
         scope.view.imgebill.setVisibility(false);
         scope.view.lbleBillStatusValue.text = "Not Available";
         scope.view.btnActivateEBill.setVisibility(false);
         scope.view.btnPayAPerson.setVisibility(true);
         scope.view.flxUpcommingBillDetails.setVisibility(false);
         scope.view.btnDeactivateEBill.setVisibility(false);
       }
    },
  confirmDelete:function(response){
    if(response===true){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      billPayMod.presentationController.deleteBillPayPayee();
    } else{
      kony.print("don't delete");
    }
  },
  bindGenericError : function(msg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },
viewAllPayments:function()
   {
     applicationManager.getPresentationUtility().showLoadingScreen();
     var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
     var payeeData=billPayMod.presentationController.getPayeeDetails();
     var navMan = applicationManager.getNavigationManager();
     var billPayeeData = navMan.getCustomInfo("frmBillPayPayeeDetails"); 
     billPayeeData.payeeId = payeeData.payeeId;
     navMan.setCustomInfo("frmBillPayAllPayments",billPayeeData);
     billPayMod.presentationController.viewallPayments(billPayeeData);
   }

});