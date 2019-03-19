define({  
  	init : function(){
      var navManager =applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
  onNavigate:function(obj)
  {
	var MenuHandler = applicationManager.getMenuHandler();
    var navMan=applicationManager.getNavigationManager();
    var transactionData =navMan.getCustomInfo("frmTransactionDetails");
    
    var onDisputeClick = transactionData.onDisputeClick ? transactionData.onDisputeClick : function() {};
    this.view.btnDisputetCD.onClick = onDisputeClick;
    this.view.btnDisputetTransaction.onClick = onDisputeClick;
    this.view.btnDisputetTransactionLoans.onClick = onDisputeClick;
    this.view.btnDisputetTransactionP2P.onClick = onDisputeClick;
    this.view.btnDisputetTransactionTrans.onClick = onDisputeClick;
    this.view.btnDisputetTransBP.onClick = onDisputeClick;

    transactionData.eBillSupport=false;
     var deviceUtilManager =applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if(transactionData.isScheduled!==undefined && transactionData.isScheduled!== null && transactionData.isScheduled=== "true")
    {
      this.view.customHeader.btnRight.setVisibility(true);
      this.view.customHeader.btnRight.onClick = this.btnEditOnClick;
      if(isIphone)
        this.view.setTitleBarRightSideButtonSkin("Edit", "sknBtnffffffSSPSemiBold30px", this.btnEditOnClick);
    }
    else {
       this.view.customHeader.btnRight.setVisibility(false);
      if(isIphone)
        this.view.setTitleBarRightSideButtonSkin("", "sknBtnffffffSSPSemiBold30px", function(){});
    }
    if(transactionData.transactionType=="InternalTransfer"||transactionData.transactionType=="ExternalTransfer")
    {
      if(transactionData.isScheduled === "true")
        this.renderViewForTransfer('pending');
      else if(transactionData.statusDescription==="Pending")
        {
           this.renderViewForTransfer('pending1');
        }
      else
        {
        this.renderViewForTransfer();
        }
      this.bindDataForTransfer(transactionData);
    }
    if(transactionData.transactionType=="P2P")
    {
      if(transactionData.isScheduled === "true")
        this.renderViewForP2P('pending');
      else if(transactionData.statusDescription==="Pending")
        {
           this.renderViewForP2P('pending1');
        }
      else
        {
        this.renderViewForP2P();
        } 
      this.bindDataForP2P(transactionData);
    }
    if(transactionData.transactionType=="Loan")
    {
      if(transactionData.isScheduled === "true")
        this.renderViewForLoans('pending');
      else if(transactionData.statusDescription==="Pending")
        {
           this.renderViewForLoans('pending1');
        }
      else
        {
        this.renderViewForLoans();
        }
      this.bindDataForLoans(transactionData);
    }
   if(transactionData.transactionType=="Deposit")
    {
      if(transactionData.statusDescription === "Pending")
        this.renderViewForCheckDeposit('pending');
      else
        this.renderViewForCheckDeposit(); 
      this.bindDataForCheckDeposit(transactionData);
    }
    if(transactionData.transactionType=="Cardless")
    {
      if(transactionData.cashWithdrawalTransactionStatus  === "pending")
        this.renderViewForCashWithdrawal('pending');
      else
        this.renderViewForCashWithdrawal();
      this.bindDataForCashWithdrawl(transactionData);
	  //this.bindDataForQRCashWithdrawl(transactionData);
    }
    if(transactionData.transactionType=="BillPay")
    {
      if(transactionData.isScheduled === "true")
        this.renderViewForBillPay('pending');
       else if(transactionData.statusDescription==="Pending")
        {
           this.renderViewForBillPay('pending1');
        }
      else
        {
        this.renderViewForBillPay();
        }
      this.bindDataForBillPay(transactionData);
    }
    var navManager =applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    var Mod = navManager.getEntryPoint("frmTransactionDetails");
    var scope = this;
    var configManager =applicationManager.getConfigurationManager();
    if(Mod == "Accounts"|| Mod == "AdvanceSearch")
      MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUACCOUNTS);
    else if(Mod == "Transfers" || Mod == "ManageTransferRecipient")
      MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUTRANSFERS);
    else if(Mod == "BillPay")
      MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUBILLPAY);
    else if(Mod == "Deposits")
      MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUCHECKDEPOSIT);
    else if(Mod == "CardLess")
       MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUCARDLESS);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  bindDataForLoans:function(transactionData)
  {
    this.view.lblLoanAmount.text = transactionData.amount;
    this.view.lblTransferredFromValueLoans.text = transactionData.fromAccountName;
    this.view.lblAccTypeFromLoans.text = transactionData.fromAccountType;
    this.view.lblDescValueLoans.text = transactionData.description;
    this.view.lblTransactionTypeValue.text = transactionData.transactionType;
    this.view.lblTransDateValueLoans.text=transactionData.scheduledDate;
    this.view.lblReferenceNoValueLoans.text = transactionData.transactionId;
    this.view.lblNotesValueLoans.text = transactionData.transactionsNotes;

  },
  bindDataForP2P:function(transactionData)
  {
    this.view.lblTransferValueP2P.text = transactionData.amount;
    this.view.lblTransferredToValueP2P.text = transactionData.payPersonName;
    this.view.lblPhoneNo.text = transactionData.payPersonPhone;
    //format phone number.
    this.view.lblTransferredFromValueP2P.text = transactionData.fromAccountName;
    if(transactionData.toAccountType)
      this.view.lblAccTypeP2P.text = transactionData.toAccountType;
    else
      this.view.lblAccTypeP2P.text = "";
    this.view.lblAccTypeFromP2P.text = transactionData.fromAccountType;
    this.view.lblDescValueP2P.text = transactionData.description;
    this.view.lblTransDateValueP2P.text=transactionData.scheduledDate;
    this.view.lblFreqP2PValue.text = transactionData.frequencyType;  
	if(transactionData.recurrenceDesc!==undefined && transactionData.recurrenceDesc!== null  && transactionData.recurrenceDesc!=="0")
    {
       this.view.lblRecurrenceP2PValue.text = transactionData.recurrenceDesc;
       this.view.flxRecurrenceP2P.setVisibility(true);
      this.view.btnCancelThisOccurencep2p.setVisibility(true);
       this.view.btnCancelSeriesp2p.setVisibility(true);
       this.view.btnCancelTransactionP2P.setVisibility(false);
    }
    else
    {
      this.view.flxRecurrenceP2P.setVisibility(false);
      this.view.btnCancelThisOccurencep2p.setVisibility(false);
       this.view.btnCancelSeriesp2p.setVisibility(false);
    }
    this.view.lblReferenceNoValueP2P.text = transactionData.transactionId;
    this.view.lblNotesValueP2P.text = transactionData.transactionsNotes;
    this.view.btnCancelTransactionP2P.onClick = this.cancelTransactionP2P;
    this.view.btnRepeatTransactionP2P.onClick = this.repeatP2p;
    this.view.btnCancelThisOccurencep2p.onClick = this.cancelRecurrenceP2p;
    this.view.btnCancelSeriesp2p.onClick = this.cancelSeriesP2p;
  },
  cancelSeriesP2p:function()
  {
     var basicConfig={
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cancelSeries"),
            "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
          //  "message": "Do you wish to continue?",
            "alertHandler": this.cancelP2p
          };
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});
  
  },
  cancelTransactionP2P:function()
  {
     var basicConfig={
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.AreyousuredoyouwanttocancelTransaction?"),
            "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
          //  "message": "Do you wish to continue?",
            "alertHandler": this.cancelP2p
          };
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});
  
  },
  
  cancelP2p: function(response)
  {
    if(response===true)
      {
    var navMan=applicationManager.getNavigationManager();
    var transactionData =navMan.getCustomInfo("frmTransactionDetails"); 
    var p2pModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    p2pModule.presentationController.deleteTransaction(transactionData.transactionId);  
      }
  },
  repeatP2p: function()
  {
    var navMan=applicationManager.getNavigationManager();
    var transactionData =navMan.getCustomInfo("frmTransactionDetails"); 
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule"); 
    payeeMod.presentationController.setTransactionObject(transactionData);
  },
   cancelRecurrenceP2p:function()
  {
     var basicConfig={
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cancelOccurence"),
           "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
          //  "message": "Do you wish to continue?",
            "alertHandler": this.cancelRecP2p
          };
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});
  },
  cancelRecP2p:function(response)
  {
   if(response===true)
      {
    var navMan=applicationManager.getNavigationManager();
    var transactionData =navMan.getCustomInfo("frmTransactionDetails"); 
    var p2pModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    p2pModule.presentationController.deleteRecurrenceP2p(transactionData.transactionId);  
      }
  },
  bindDataForTransfer:function(transactionData)
  {
    this.view.lblTransferValue.text = transactionData.amount;
    this.view.lblTransferredToValueTrans.text = transactionData.toAccountName;
    this.view.lblTransferredFromValueTrans.text = transactionData.fromAccountName;
    if(transactionData.toAccountType)
      this.view.lblAccTypeTrans.text = transactionData.toAccountType;
    else
      this.view.lblAccTypeTrans.text = "";
    this.view.lblAccTypeFromTrans.text = transactionData.fromAccountType;
    this.view.lblDescValueTrans.text = transactionData.description;
    this.view.lblTransDateValueTrans.text=transactionData.scheduledDate;
    this.view.lblFreqTransValue.text = transactionData.frequencyType; 
	if(transactionData.recurrenceDesc!==undefined && transactionData.recurrenceDesc!== null  && transactionData.recurrenceDesc!=="0")
    {
       this.view.lblRecurrenceValueTrans.text = transactionData.recurrenceDesc;
       this.view.flxRecurrenceTrans.setVisibility(true);
       this.view.btnCancelThisOccurenceTrans.setVisibility(true);
       this.view.btnCancelSeriesTrans.setVisibility(true);
       this.view.btnCancelTransactionTrans.setVisibility(false);
    }
    else 
    {
      this.view.flxRecurrenceTrans.setVisibility(false);
       this.view.btnCancelThisOccurenceTrans.setVisibility(false);
       this.view.btnCancelSeriesTrans.setVisibility(false);
    }
    this.view.lblReferenceNoValueTrans.text = transactionData.transactionId;
    this.view.lblNotesValueTrans.text = transactionData.transactionsNotes;
     this.view.btnRepeatTransactionTrans.onClick = this.repeatTrans;
    this.view.btnCancelTransactionTrans.onClick = this.cancelTransactionTrans;
    this.view.btnCancelThisOccurenceTrans.onClick = this.cancelRecurrenceTrans;
    this.view.btnCancelSeriesTrans.onClick = this.cancelSerieTrans;
  },
  cancelSerieTrans:function()
  {
     var basicConfig={
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cancelSeries"),
           "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
          //  "message": "Do you wish to continue?",
            "alertHandler": this.cancelTrans
          };
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});
  
  },
  cancelTransactionTrans:function()
  {
     var basicConfig={
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.AreyousuredoyouwanttocancelTransaction?"),
           "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
          //  "message": "Do you wish to continue?",
            "alertHandler": this.cancelTrans
          };
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});
  
  },
  cancelTrans:function(response)
  {
    if(response===true)
      {
    var navMan=applicationManager.getNavigationManager();
    var transactionData =navMan.getCustomInfo("frmTransactionDetails"); 
    var transModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transModule.presentationController.deleteTransaction(transactionData.transactionId);  
      }
  },
   cancelRecurrenceTrans:function()
  {
     var basicConfig={
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "alertTitle": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cancelOccurence"),
           "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
          //  "message": "Do you wish to continue?",
            "alertHandler": this.cancelRecTrans
          };
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});
  },
  cancelRecTrans:function(response)
  {
    if(response===true)
      {
    var navMan=applicationManager.getNavigationManager();
    var transactionData =navMan.getCustomInfo("frmTransactionDetails"); 
    var transModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transModule.presentationController.deleteRecurrenceTransaction(transactionData.transactionId);  
      }
  },
 repeatTrans:function()
  {
    var navMan=applicationManager.getNavigationManager();
    var transactionData =navMan.getCustomInfo("frmTransactionDetails"); 
    var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
    transMod.presentationController.repeatTransfer(transactionData);
  },
  
  bindDataForCheckDeposit:function(transactionData)
  {
	var self = this;
	var checkNumber = transactionData.checkNumber ? transactionData.checkNumber : "-";
	var template = '<label style="color:#a0a0a0">Check number:</label>';
	this.view.lblCheckDepositValue.text = transactionData.amount ? transactionData.amount : "-";
	this.view.lblSuccessfulCD.text = transactionData.statusDescription ? transactionData.statusDescription : "-";
	this.view.rtxCheckNumber.text = "<p>" + template + ' ' + checkNumber + "</p>";
	this.view.lblDepositToValue.text = transactionData.toAccountName ? transactionData.toAccountName : "-";
	this.view.lblDescValueCD.text = transactionData.description ? transactionData.description : "-";
	this.view.lblDepositDateValue.text = transactionData.scheduledDate ? transactionData.scheduledDate : "-";
	this.view.lblRefNoValue.text = transactionData.transactionId ? transactionData.transactionId : "-";
	this.view.lblCDNotes.text = transactionData.transactionsNotes ? transactionData.transactionsNotes : "-";
    //this.rotateImgInPopUp();
    var data = 
        [
          {
            lblFront:applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transaction.front"),
            lblBack:applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transaction.back"),
            imgFront:{
              "src": "checksmall.png",
              "onTouchEnd": this.imgFrontOnTouchEnd.bind(self,{})
            },
            imgBack:{
              "src": "checksmall.png",
              "onTouchEnd": this.imgBackOnTouchEnd.bind(self,{})
            }
          }
        ];
    this.view.segCheckImages.setData(data);
  },
 // this function rotate img in Pop-up (check deposit state) 
  rotateImgInPopUp: function() {
    var imgPopUpTransform = kony.ui.makeAffineTransform();
    imgPopUpTransform.rotate(90);
    this.view.flxCheckZoomView.imgCheckZoom.transform = imgPopUpTransform;
  },
  
  bindDataForCashWithdrawl:function(transactionData)
  {
    if(transactionData.cashlessMode == "Self")
      this.view.flxShareWithdrawCode.setVisibility(false);
    else{
      this.view.flxShareWithdrawCode.setVisibility(true);
      this.view.flxMsg.onClick=this.showMsg;
      this.view.flxMail.onClick=this.showMail;
    }
    if(transactionData.cashWithdrawalTransactionStatus == "pending")
    {
      this.view.btnFindNearByAtm.onClick=this.findNearByATM;
      this.view.lblCashWithdrawalCodeVal.text =transactionData.cashlessOTP;
      this.view.lblExpiresIn.text ="Expires in:"+transactionData.cashlessOTPValidDate;
    }
	this.view.lblAccTypeCW.text = transactionData.fromAccountType;
    this.view.lblCash.text = transactionData.amount;
    this.view.lblSuccessfulCW.text = transactionData.cashWithdrawalTransactionStatus;
    this.view.lblFromValue.text = transactionData.fromAccountName;
    this.view.lblDescValueCW.text = transactionData.description;
    this.view.lblDateValue.text=transactionData.scheduledDate;
    this.view.lblRefNoCWValue.text = transactionData.transactionId;
    this.view.lblNotesValueCW.text = transactionData.transactionsNotes;
	this.view.btnCancelTransactionCW.onClick=this.cancelTransactionCW;
  },
   bindDataForQRCashWithdrawl:function(transactionData)
  {
      this.view.flxShareWithdrawCode.setVisibility(false);
      this.view.lblCashWithdrawalCodeVal.setVisibility(false);
      this.view.flxCashWithdrawal.flxCashWithdrawCode.flxQRCode.setVisibility(true);
      this.view.flxCashWithdrawal.flxCashWithdrawCode.flxQRCode.onClick = this.qrOnClick;
       		    
    if(transactionData.cashWithdrawalTransactionStatus == "pending")
    {
      this.view.lblExpiresIn.text ="Expires in:"+transactionData.cashlessOTPValidDate;
      this.view.btnFindNearByAtm.onClick=this.findNearByATM;
    }
     this.view.lblAccTypeCW.text = transactionData.fromAccountType;
    this.view.lblCash.text = transactionData.amount;
    this.view.lblSuccessfulCW.text = transactionData.cashWithdrawalTransactionStatus;
    this.view.lblFromValue.text = transactionData.fromAccountName;
    this.view.lblDescValueCW.text = transactionData.description;
    this.view.lblDateValue.text=transactionData.scheduledDate;
    this.view.lblRefNoCWValue.text = transactionData.transactionId;
    this.view.lblNotesValueCW.text = transactionData.transactionsNotes;
	this.view.btnCancelTransactionCW.onClick=this.cancelTransactionCW;
  },
  qrOnClick:function(){
    var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    cardLessModule.presentationController.invokeQRCodeFunctionality();
  },
   findNearByATM:function(){
    var scope=this;
    var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
     locateUsModule.presentationController.presentLocateUsView(true,scope); 
  },
  cancelTransactionCW:function()
  {
     var basicConfig={
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
             "alertTitle": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.AreyousuredoyouwanttocancelTransaction?"),
           "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
          //  "message": "Do you wish to continue?",
            "alertHandler": this.cardlessCancel
          };
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});
  },
  cardlessCancel:function(response){
    if(response===true)
      {
    var navMan=applicationManager.getNavigationManager();
    var transactionData =navMan.getCustomInfo("frmTransactionDetails");
    var record={};
    record.transactionId=transactionData.transactionId;
	record.fromAccountNumber=  transactionData.fromAccountNumber;
    var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    cLMod.presentationController.deleteCardlessTransaction(record);
      }
  },
  bindDataForBillPay:function(transactionData)
  {
    this.view.lblTransferBalBP.text = transactionData.amount;
    this.view.lblPaidToValue.text = transactionData.payeeName;
    this.view.lblSuccessfulBP.text = transactionData.statusDescription;
    this.view.lblFromBPValue.text = transactionData.fromAccountName;
    this.view.lblAccTypeBP.text = transactionData.fromAccountType;
    this.view.lblDescValueBP.text = transactionData.description;
    this.view.lblTransDateValueBP.text=transactionData.scheduledDate; 
    this.view.lblFreqValueBP.text = transactionData.frequencyType; 
    if(transactionData.eBillSupport ==="true")
    	{  
        this.view.imgebill.setVisibility(true);  
    		if(transactionData.eBillEnable==="0"){
           		this.view.imgebill.src = "ebillinactive.png";
        	}
        	else{
          		  this.view.imgebill.src = "ebill.png";
        	}
    	}
    else{
      	this.view.imgebill.setVisibility(false);
    }
	if(transactionData.recurrenceDesc!==undefined && transactionData.recurrenceDesc!== null  && transactionData.recurrenceDesc!=="0")
    {
       this.view.lblRecTypeValueBP.text = transactionData.recurrenceDesc;
       this.view.flxRecurrenceTypeBP.setVisibility(true);
       this.view.btnCancelSeriesBP.setVisibility(true);
       this.view.btnCancelThisOccurenceBP.setVisibility(true);
       this.view.btnCancelTransactionBP.setVisibility(false);
    }
    else
    {
      this.view.flxRecurrenceTypeBP.setVisibility(false);
       this.view.btnCancelSeriesBP.setVisibility(false);
       this.view.btnCancelThisOccurenceBP.setVisibility(false);
    }
    this.view.lblRefrNoBPValue.text = transactionData.transactionId;
    this.view.lblNotesValueBP.text = transactionData.transactionsNotes;
    this.view.btnRepeatTransBP.onClick = function (){
      var navMan=applicationManager.getNavigationManager();
      var transactionData =navMan.getCustomInfo("frmTransactionDetails"); 
      var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      billPayModule.presentationController.repeatTransaction(transactionData);
    };
    this.view.btnCancelTransactionBP.onClick = this.cancelTrnsactionBP;
    this.view.btnCancelSeriesBP.onClick = this.cancelSeriesBP;
    this.view.btnCancelThisOccurenceBP.onClick = this.cancelRecurrenceTrnsactionBP;
  },
   cancelSeriesBP:function (){
    var scope=this;
    var basicConfig={
      "alertType": constants.ALERT_TYPE_CONFIRMATION,
      "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cancelSeries"),
      "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
      "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
      //  "message": "Do you wish to continue?",
      "alertHandler": scope.billpayCancel
    };
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});

  },
  cancelTrnsactionBP:function (){
    var scope=this;
    var basicConfig={
      "alertType": constants.ALERT_TYPE_CONFIRMATION,
      "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.AreyousuredoyouwanttocancelTransaction?"),
      "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
      "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
      //  "message": "Do you wish to continue?",
      "alertHandler": scope.billpayCancel
    };
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});

  },
   billpayCancel:function(response)
    {
      if(response===true)
        {
      var navMan=applicationManager.getNavigationManager();
      var transactionData =navMan.getCustomInfo("frmTransactionDetails"); 
      var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      billPayModule.presentationController.deleteTransaction(transactionData.transactionId);
        }
    },
  cancelRecurrenceTrnsactionBP:function (){
    var scope=this;
    var basicConfig={
      "alertType": constants.ALERT_TYPE_CONFIRMATION,
      "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cancelOccurence"),
      "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
      "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
      //  "message": "Do you wish to continue?",
      "alertHandler": scope.billpayRecurreCancel
    };
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});

  },
  billpayRecurreCancel:function(response)
  {
    if(response===true)
    {
      var navMan=applicationManager.getNavigationManager();
      var transactionData =navMan.getCustomInfo("frmTransactionDetails"); 
      var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      billPayModule.presentationController.deleteRecurrenceBP(transactionData.transactionId);
    }
  },
  renderViewForWireTransfer:function(viewMode) 
  {
    if(viewMode==='pending')
    {
      this.view.btnCancelTransaction.setVisibility(true);
      this.view.btnDisputetTransaction.setVisibility(false);
      this.view.btnRepeatTransaction.setVisibility(false);
      this.view.flxWireTransfer.forceLayout();
    }
    else
    {
      this.view.btnCancelTransaction.setVisibility(false);
      this.view.btnDisputetTransaction.setVisibility(true);
      this.view.btnRepeatTransaction.setVisibility(true);
      this.view.flxWireTransfer.forceLayout();
    }
    this.view.flxWireTransfer.setVisibility(true);
    this.view.flxCashWithdrawal.setVisibility(false);
    this.view.flxBillPay.setVisibility(false);
    this.view.flxCheckDeposit.setVisibility(false);
    this.view.flxTransfers.setVisibility(false);
    this.view.flxP2P.setVisibility(false);
    this.view.flxLoans.setVisibility(false);
  },
  renderViewForCashWithdrawal:function(viewMode) 
  {
    if(viewMode === "pending")
    {
      this.view.flxCashWithdrawCode.setVisibility(true);
	  this.view.btnCancelTransactionCW.setVisibility(true);
      this.view.btnSeeWithdrawCash.onClick = function(){kony.application.openURL("https://youtu.be/UGJMk5_ZNrk");};
    }
    else
    {
		this.view.btnCancelTransactionCW.setVisibility(false);
      this.view.flxCashWithdrawCode.setVisibility(false);
    }
    this.view.customHeader.btnRight.setVisibility(false);
    this.view.flxWireTransfer.setVisibility(false);
    this.view.flxCashWithdrawal.setVisibility(true);
    this.view.flxBillPay.setVisibility(false);
    this.view.flxCheckDeposit.setVisibility(false);
    this.view.flxTransfers.setVisibility(false);
    this.view.flxP2P.setVisibility(false);
    this.view.flxLoans.setVisibility(false);
    this.view.forceLayout();
  },
  renderViewForBillPay:function(viewMode) 
  {
    if(viewMode==='pending')
    {
      this.view.btnRepeatTransBP.setVisibility(false);
      this.view.btnDisputetTransBP.setVisibility(false);
      this.view.btnCancelTransactionBP.setVisibility(true);
      this.view.flxBillPay.forceLayout();
    }
    else if(viewMode==='pending1')
    {
    	this.view.btnRepeatTransBP.setVisibility(false);
      this.view.btnDisputetTransBP.setVisibility(false);
      this.view.btnCancelTransactionBP.setVisibility(false);
      this.view.flxBillPay.forceLayout();
    }
    else{
      this.view.btnRepeatTransBP.setVisibility(true);
      this.view.btnDisputetTransBP.setVisibility(false);
      this.view.btnCancelTransactionBP.setVisibility(false);
      this.view.flxBillPay.forceLayout();
    }
    this.view.flxWireTransfer.setVisibility(false);
    this.view.flxCashWithdrawal.setVisibility(false);
    this.view.flxBillPay.setVisibility(true);
    this.view.flxCheckDeposit.setVisibility(false);
    this.view.flxTransfers.setVisibility(false);
    this.view.flxP2P.setVisibility(false);
    this.view.flxLoans.setVisibility(false);
    this.view.forceLayout();
  },
  renderViewForCheckDeposit:function(viewMode) 
  {
    //     cancel and dispute transaction in not implemented
    this.view.btnCancelTransactionCD.setVisibility(false);
    this.view.btnDisputetCD.setVisibility(true);
    this.view.flxCheckDeposit.forceLayout();

    //     if(viewMode==='pending')
    //       {
    //        this.view.btnCancelTransactionCD.setVisibility(true);
    //        this.view.btnDisputetCD.setVisibility(false);
    //        this.view.flxCheckDeposit.forceLayout();
    //       }
    //     else
    //       {
    //        this.view.btnCancelTransactionCD.setVisibility(false);
    //        this.view.btnDisputetCD.setVisibility(true);
    //        this.view.flxCheckDeposit.forceLayout();
    //       }
    this.view.flxWireTransfer.setVisibility(false);
    this.view.flxCashWithdrawal.setVisibility(false);
    this.view.flxBillPay.setVisibility(false);
    this.view.flxCheckDeposit.setVisibility(true);
    this.view.flxCheckDeposit.setContentOffset({x:0,y:0});
    this.view.flxTransfers.setVisibility(false);
    this.view.flxP2P.setVisibility(false);
    this.view.flxLoans.setVisibility(false);
    this.view.forceLayout();
  },
  goBack : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
  },
  registerActions:function(){
    this.view.segCheckImages["widgetSkin"] = "sknSegffffff";
    this.view.segCheckImages.pageSkin = "sknManageCardsPage";
    //this.view.flxFrontImg.onClick= this.imgFrontOnTouchEnd;
    //this.view.flxBackImg.onClick= this.imgBackOnTouchEnd;
    this.view.flxCross.onClick=this.flxCrossOnClick;
    this.view.customHeader.flxBack.onClick=function()
    {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    };
    if(!applicationManager.getDeviceUtilManager().isIpad()){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
  },
  imgFrontOnTouchEnd:function(data){
    var navMan=applicationManager.getNavigationManager();
    var transactionData =navMan.getCustomInfo("frmTransactionDetails");
    this.view.imgCheckZoom.src = transactionData.checkImage;
    this.view.flxCheckZoomView.setVisibility(true);
    this.view.flxHeader.setEnabled(false);
    this.view.flxCheckDeposit.setEnabled(false);
    this.view.flxCheckDeposit.enableScrolling=false;
    //this.view.flxFooter.setEnabled(false);
    this.view.forceLayout();
  },
  imgBackOnTouchEnd:function(){
    var navMan=applicationManager.getNavigationManager();
    var transactionData =navMan.getCustomInfo("frmTransactionDetails");
    this.view.imgCheckZoom.src = transactionData.checkImageBack;
    this.view.flxCheckZoomView.setVisibility(true);
    this.view.flxHeader.setEnabled(false);
    this.view.flxCheckDeposit.setEnabled(false);
    this.view.flxCheckDeposit.enableScrolling=false;
    //this.view.flxFooter.setEnabled(false);
    this.view.forceLayout();
  },
  flxCrossOnClick:function(){
    this.view.flxCheckZoomView.setVisibility(false);
    this.view.flxHeader.setEnabled(true);
    this.view.flxCheckDeposit.setEnabled(true);
    this.view.flxCheckDeposit.enableScrolling=true;
    //this.view.flxFooter.setEnabled(true);
    this.view.forceLayout();
  },
  renderViewForTransfer:function(viewMode) 
  {
    if(viewMode==='pending')
    {
      this.view.btnCancelTransactionTrans.setVisibility(true);
      this.view.btnDisputetTransactionTrans.setVisibility(false);
      this.view.btnRepeatTransactionTrans.setVisibility(false);
    }
    else if(viewMode==='pending1')
      {
        this.view.btnCancelTransactionTrans.setVisibility(false);
      this.view.btnDisputetTransactionTrans.setVisibility(false);
      this.view.btnRepeatTransactionTrans.setVisibility(false);
      }
    else
    {
      this.view.btnCancelTransactionTrans.setVisibility(false);
      this.view.btnDisputetTransactionTrans.setVisibility(false);
      this.view.btnRepeatTransactionTrans.setVisibility(true);
    }
    this.view.flxWireTransfer.setVisibility(false);
    this.view.flxCashWithdrawal.setVisibility(false);
    this.view.flxBillPay.setVisibility(false);
    this.view.flxCheckDeposit.setVisibility(false);
    this.view.flxTransfers.setVisibility(true);
    this.view.flxP2P.setVisibility(false);
    this.view.flxLoans.setVisibility(false);
  },
  renderViewForP2P:function(viewMode) 
  {
    if(viewMode==='pending')
    {
      this.view.btnCancelTransactionP2P.setVisibility(true);
      this.view.btnDisputetTransactionP2P.setVisibility(false);
      this.view.btnRepeatTransactionP2P.setVisibility(false);
    }
    else if(viewMode==='pending1')
    {
    	 this.view.btnCancelTransactionP2P.setVisibility(false);
      this.view.btnDisputetTransactionP2P.setVisibility(false);
      this.view.btnRepeatTransactionP2P.setVisibility(false);
    }
    else
    {
      this.view.btnCancelTransactionP2P.setVisibility(false);
      this.view.btnDisputetTransactionP2P.setVisibility(false);
      this.view.btnRepeatTransactionP2P.setVisibility(true);
    }
    this.view.flxWireTransfer.setVisibility(false);
    this.view.flxCashWithdrawal.setVisibility(false);
    this.view.flxBillPay.setVisibility(false);
    this.view.flxCheckDeposit.setVisibility(false);
    this.view.flxTransfers.setVisibility(false);
    this.view.flxP2P.setVisibility(true);
    this.view.flxLoans.setVisibility(false);
  },
  renderViewForLoans:function(viewMode) 
  {
    if(viewMode==='pending')
    {
      this.view.btnCancelTransactionLoans.setVisibility(false);
      this.view.btnRepeatTransactionLoans.setVisibility(false);
    }
    else if(viewMode==='pending1')
    {
    	 this.view.btnCancelTransactionLoans.setVisibility(false);
      this.view.btnRepeatTransactionLoans.setVisibility(false);
    }
    else
    {
      this.view.btnCancelTransactionLoans.setVisibility(false);
      this.view.btnRepeatTransactionLoans.setVisibility(false);
    }
    this.view.flxWireTransfer.setVisibility(false);
    this.view.flxCashWithdrawal.setVisibility(false);
    this.view.flxBillPay.setVisibility(false);
    this.view.flxCheckDeposit.setVisibility(false);
    this.view.flxTransfers.setVisibility(false);
    this.view.flxP2P.setVisibility(false);
    this.view.flxLoans.setVisibility(true);
  },
 btnEditOnClick: function()
  {
    var navMan=applicationManager.getNavigationManager();
    var transactionData =navMan.getCustomInfo("frmTransactionDetails");
    if(transactionData.transactionType === "P2P")
    {
      var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule"); 
      payeeMod.presentationController.setTransactionObject(transactionData);  
    }
    else if(transactionData.transactionType === "BillPay"){
      var billpayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule"); 
      billpayMod.presentationController.setTransactionObject(transactionData);
    }
    else
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.setTransactionObject(transactionData);  
    }
  },
  showMsg:function()
  {
    var navMan=applicationManager.getNavigationManager();
    var cardlessTxnDetails =navMan.getCustomInfo("frmTransactionDetails");
    var userPrefObj=applicationManager.getUserPreferencesManager();
    var contact={};
    contact.email=userPrefObj.getUserEmail();
    contact.phone=userPrefObj.getUserPhone();
    if(contact.phone){
      kony.phone.sendSMS(cardlessTxnDetails.cashlessPhone,"Dear "+cardlessTxnDetails.cashlessPersonName+", You have received "+cardlessTxnDetails.amount+" from mobile "+contact.phone+". To withdraw cash, please enter the Withdrawal Code - "+cardlessTxnDetails.cashlessOTP+" and 4-digit Secure Code shared by the sender at the ATM.");
    }
    else if(contact.email){
      kony.phone.sendSMS(cardlessTxnDetails.cashlessPhone,"Dear "+cardlessTxnDetails.cashlessPersonName+", You have received "+cardlessTxnDetails.amount+" from email "+contact.email+". To withdraw cash, please enter the Withdrawal Code - "+cardlessTxnDetails.cashlessOTP+" and 4-digit Secure Code shared by the sender at the ATM.");
    }
    else{
      kony.phone.sendSMS(cardlessTxnDetails.cashlessPhone,"Dear "+cardlessTxnDetails.cashlessPersonName+", You have received "+cardlessTxnDetails.amount+". To withdraw cash, please enter the Withdrawal Code - "+cardlessTxnDetails.cashlessOTP+" and 4-digit Secure Code shared by the sender at the ATM.");
    }


  },
  showMail:function()
  {
    var navMan=applicationManager.getNavigationManager();
    var cardlessTxnDetails =navMan.getCustomInfo("frmTransactionDetails");
    var userPrefObj=applicationManager.getUserPreferencesManager();
    var contact={};
    contact.email=userPrefObj.getUserEmail();
    contact.phone=userPrefObj.getUserPhone();
    if(!(cardlessTxnDetails.cashlessEmail !== null && cardlessTxnDetails.cashlessEmail !== undefined)){
      cardlessTxnDetails.cashlessEmail = "";
    }
    if(contact.email){
      kony.phone.openEmail([cardlessTxnDetails.cashlessEmail],[],[],"Cardless Cash Withdrawal","Dear "+cardlessTxnDetails.cashlessPersonName+", You have received "+cardlessTxnDetails.amount+" from email "+contact.email+". To withdraw cash, please enter the Withdrawal Code - "+cardlessTxnDetails.cashlessOTP+" and 4-digit Secure Code shared by the sender at the ATM.");          
	}
    else if(contact.phone){
      kony.phone.openEmail([cardlessTxnDetails.cashlessEmail],[],[],"Cardless Cash Withdrawal","Dear "+cardlessTxnDetails.cashlessPersonName+", You have received "+cardlessTxnDetails.amount+" from mobile "+contact.phone+". To withdraw cash, please enter the Withdrawal Code - "+cardlessTxnDetails.cashlessOTP+" and 4-digit Secure Code shared by the sender at the ATM.");
    }
    else{
      kony.phone.openEmail([cardlessTxnDetails.cashlessEmail],[],[],"Cardless Cash Withdrawal","Dear "+cardlessTxnDetails.cashlessPersonName+", You have received "+cardlessTxnDetails.amount+". To withdraw cash, please enter the Withdrawal Code - "+cardlessTxnDetails.cashlessOTP+" and 4-digit Secure Code shared by the sender at the ATM.");          
    }


  }
});