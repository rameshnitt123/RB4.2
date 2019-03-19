define({
  objRec: '',
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  onNavigate: function(obj) {
    if (obj === undefined) {
      var newObj = {
        "view": "familyCheckingAcc"
      };
      obj = newObj;
    }
    this.objRec = obj;
  },
  accDetails:'',
  preshowAccInfo: function() {
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    var navigationManager =applicationManager.getNavigationManager();
    this.accDetails =navigationManager.getCustomInfo("frmAccountDetails");
    this.btnCancelOnClick();
    this.accDetails=this.accDetails.selectedAccountData;
    this.view.flxAccNoToggleHL.onClick = this.flxAccNoToggleHLToggleOnClick;
    this.view.flxAccNoToggleCC.onClick = this.flxAccNoToggleCCOnClick;
    this.view.flxAccNoToggle.onClick = this.flxAccNoToggleOnClick;
    this.view.flxRouteNoToggle.onClick = this.flxRouteNoToggleOnClick;
    this.view.customHeader.btnRight.onClick=this.customHeaderBtnRightOnClick;
    this.view.btnEditNickName.onClick=this.btnEditNickNameOnClick;
    this.view.btnCancel.onClick=this.btnCancelOnClick;
    this.view.flxDismiss.onClick = this.CancelOptions;
    this.view.customHeader.flxBack.onClick=this.flxBackOnClick;
    this.view.flxAccNoToggleDA.onClick=this.flxAccNoToggleDAOnClick;
    this.view.flxPopupNickName.setVisibility(false); 
    this.view.customHeader.lblLocateUs.text = this.accDetails.nickName;
    this.view.title=this.accDetails.nickName;      
    var configManager = applicationManager.getConfigurationManager();
    if(String(this.accDetails.type).trim().toLowerCase() === "external") {
      this.createViewForExternalAccountDetails();
    } else {
      if (this.accDetails.accountType === configManager.constants.CHECKING ||this.accDetails.accountType === configManager.constants.SAVINGS) {
        this.createViewForFamilyCheckingAcc();
      }
      if (this.accDetails.accountType === configManager.constants.CREDITCARD) {
        this.createViewForCreditCard();
      }
      if (this.accDetails.accountType === configManager.constants.LOAN||this.accDetails.accountType === configManager.constants.MORTGAGE) {
        this.createViewForHomeLoanAcc();
      }
      if (this.accDetails.accountType === configManager.constants.DEPOSIT) {
        this.createViewForDepositAccount();
      }
    }
    var currentForm=navigationManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  CancelOptions : function(){
    this.view.flxPopupNickName.setVisibility(false);
    this.view.flxHeader.setEnabled(true);
    this.view.flxContainerCheckingAcc.setEnabled(true);
    this.view.flxContainerCreditCard.setEnabled(true);
    this.view.flxContainerHomeLoan.setEnabled(true);
    this.view.flxContainerDepositAccount.setEnabled(true);
  },
  createViewForFamilyCheckingAcc: function() {
    this.view.flxContainerCheckingAcc.setVisibility(true);
    this.view.flxExternalAccountContainer.setVisibility(false);
    this.view.flxContainerCreditCard.setVisibility(false);
    this.view.flxContainerHomeLoan.setVisibility(false);
    this.view.flxContainerDepositAccount.setVisibility(false);
    this.view.btnCallBank.onClick=this.callBank;
    this.view.btnMsgBank.onClick=this.messageBank;
    this.PopulateCheckingAccount();
    this.view.forceLayout();
  },

  PopulateCheckingAccount:function()
  {
    var configManager = applicationManager.getConfigurationManager();
    var forUtility=applicationManager.getFormatUtilManager();
    this.view.lblAvailBalValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.availableBalance);
    this.view.lblCurrBalValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.currentBalance);
    this.view.lblPendingDepValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.pendingDeposit);
    this.view.lblWithdrawValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.pendingWithdrawal);
    
    this.view.lblAccTypeValue.text=this.accDetails.accountType;
    //this.view.lblAccHoldrValue.text=this.accDetails.accountHolder;
    var accJson=JSON.parse(this.accDetails.accountHolder);
    this.view.lblAccHoldrValue.text=accJson.fullname;
    if(this.accDetails.jointHolders)
      this.view.lblJointAccHoldrValue.text=this.getJointHolderNames(JSON.parse(this.accDetails.jointHolders));
    else
      this.view.flxJointAccHolder.setVisibility(false);
    this.view.lblAccNickNameVal.text=this.accDetails.nickName;
    
    var accNo= this.accDetails.accountID;
    
    if(kony.sdk.isNullOrUndefined(accNo) || accNo === '')
    {
      this.view.flxAccountNumber.setVisibility(false);
    }
    else
    {
      this.view.lblAccNoValue.text=applicationManager.getDataProcessorUtility().maskAccountNumber(accNo);
      this.view.flxAccountNumber.setVisibility(true);
    }
    
    var routingNumber = this.accDetails.routingNumber;
    
    if(kony.sdk.isNullOrUndefined(routingNumber) || routingNumber === '')
    {
      this.view.flxRoutingNumber.setVisibility(false);
    }
    else
    {
      this.view.lblRoutingNoValue.text=routingNumber;
      this.view.flxRoutingNumber.setVisibility(true);
    }
    
    var swiftCode = this.accDetails.swiftCode;
    
    if(kony.sdk.isNullOrUndefined(swiftCode) || swiftCode === '')
    {
      this.view.flxSwiftCode.setVisibility(false);
    }
    else
    {
      this.view.lblSwiftCodeValue.text=swiftCode;
      this.view.flxSwiftCode.setVisibility(true);
    }

    var ibanNumber = this.accDetails.IBAN;

    if(kony.sdk.isNullOrUndefined(ibanNumber) || ibanNumber === '')
    {
      this.view.flxIBAN.setVisibility(false);
    }
    else
    {
      this.view.lblIBANValue.text = forUtility.formatIBAN(ibanNumber);
      this.view.flxIBAN.setVisibility(true);
    }
  },

  getJointHolderNames: function(jointHoldersList){
    var jntHldrList="";
    for(var jntHldrNum=0;jntHldrNum<jointHoldersList.length;jntHldrNum++){
      if(jntHldrList!=="")
        jntHldrList = jntHldrList+",";
      jntHldrList = jntHldrList+jointHoldersList[jntHldrNum]["fullname"];
    }
    return jntHldrList;
  },

  createViewForExternalAccountDetails: function() {
    this.view.flxExternalAccountContainer.setVisibility(true);
    this.view.flxContainerCheckingAcc.setVisibility(false);
    this.view.flxContainerCreditCard.setVisibility(false);
    this.view.flxContainerHomeLoan.setVisibility(false);
    this.view.flxContainerDepositAccount.setVisibility(false);
    this.view.btnCallBank.onClick = this.callBank;
    this.view.btnMsgBank.onClick = this.messageBank;
    this.populateExternalAccountDetail();
    this.view.forceLayout();
  },

  populateExternalAccountDetail: function() {
    var configManager = applicationManager.getConfigurationManager();
    var forUtility=applicationManager.getFormatUtilManager();
    var externalAccountDetails = this.accDetails.externalAccountDetails;
    var navMan = applicationManager.getNavigationManager();
    if(!kony.sdk.isNullOrUndefined(externalAccountDetails.NickName))
    {
      var accountsDetails = navMan.getCustomInfo("frmAccountDetails");
      accountsDetails.selectedAccountData.nickName = externalAccountDetails.NickName;
      navMan.setCustomInfo("frmAccountDetails",accountsDetails);
      this.view.customHeader.lblLocateUs.text = externalAccountDetails.NickName;
      this.view.title=externalAccountDetails.NickName;
    }
    else
    {
      this.view.customHeader.lblLocateUs.text = externalAccountDetails.AccountName;
      this.view.title=externalAccountDetails.AccountName;
    }
    this.view.lblExternalAccountAvailBalValue.text = forUtility.formatAmountandAppendCurrencySymbol(externalAccountDetails.AvailableBalance);
    this.view.lblExternalAccountTypeValue.text = externalAccountDetails.TypeDescription;
    this.view.lblExternalAccountHoldrValue.text = externalAccountDetails.AccountHolder;
    this.view.lblExternalAccountNickNameVal.text = externalAccountDetails.NickName;
    this.view.lblExternalAccountBankNameValue.text = externalAccountDetails.BankName;
    
    var accNo = externalAccountDetails.Number;
    
    if(kony.sdk.isNullOrUndefined(accNo) || accNo === '')
    {
      this.view.flxExternalAccountNumber.setVisibility(false);
    }
    else
    {
      this.view.lblExternalAccountNoValue.text=applicationManager.getDataProcessorUtility().maskAccountNumber(accNo);
      this.view.flxExternalAccountNumber.setVisibility(true);
    }
    
    var ibanNumber = this.accDetails.IBAN;

    if(kony.sdk.isNullOrUndefined(iban) || ibanNumber === '')
    {
      this.view.flxIBANExternalAcc.setVisibility(false);
    }
    else
    {
      this.view.lblIBANValueExternalAcc.text = forUtility.formatIBAN(ibanNumber);
      this.view.flxIBANExternalAcc.setVisibility(true);
    }
  },

  createViewForCreditCard: function() {
    this.view.flxContainerCheckingAcc.setVisibility(false);
    this.view.flxContainerCreditCard.setVisibility(true);
    this.view.flxExternalAccountContainer.setVisibility(false);
    this.view.flxContainerHomeLoan.setVisibility(false);
    this.view.flxContainerDepositAccount.setVisibility(false);
    this.populateCreditCardAccount();
    this.view.btnCallBankCC.onClick=this.callBank;
    this.view.btnMsgBankCC.onClick=this.messageBank;
    this.view.forceLayout();
  },
  populateCreditCardAccount:function()
  {
    var configManager = applicationManager.getConfigurationManager();
    var forUtility=applicationManager.getFormatUtilManager();
    this.view.lblOutstandingBalValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.outstandingBalance);
    this.view.lblUpcomingBalvalue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.currentAmountDue);
    var dateobj=forUtility.getDateObjectfromString(this.accDetails.dueDate,"YYYY-MM-DD");    
    this.view.lblDueDateValue.text=  forUtility.getFormatedDateString(dateobj,forUtility.getApplicationDateFormat());
    this.view.lblCurrentBalanceValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.availableCredit);
    this.view.lblCreditLmtValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.creditLimit);
    this.view.lblRwdBalValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.availablePoints);
    this.view.lblntRateValue.text=this.accDetails.interestRate + "%";
    
    this.view.lblCardTypeValue.text=this.accDetails.displayName;
    var dateobj1=forUtility.getDateObjectfromString(this.accDetails.openingDate,"YYYY-MM-DD");    
    this.view.lblCardIssueDateVal.text=  forUtility.getFormatedDateString(dateobj1,forUtility.getApplicationDateFormat());
    // this.view.lblCardHolderName.text=this.accDetails.accountHolder;
    var accJson=JSON.parse(this.accDetails.accountHolder);
    this.view.lblCardHolderNameVal.text=accJson.fullname;
    this.view.lblNickNameValue.text=this.accDetails.nickName;
    
    var accNo = this.accDetails.accountID;
    
    if(kony.sdk.isNullOrUndefined(accNo) || accNo === '')
    {
      this.view.flxAccountNumberCC.setVisibility(false);
    }
    else
    {
      this.view.lblAccNoValueCC.text=applicationManager.getDataProcessorUtility().maskAccountNumber(accNo);
      this.view.flxAccountNumberCC.setVisibility(true);
    }

    var ibanNumber = this.accDetails.IBAN;

    if(kony.sdk.isNullOrUndefined(ibanNumber) || ibanNumber === '')
    {
      this.view.flxIBANAccDetail.setVisibility(false);
    }
    else
    {
      this.view.lblIBANValueAccDetail.text = forUtility.formatIBAN(ibanNumber);
      this.view.flxIBANAccDetail.setVisibility(true);
    }
  },
  createViewForHomeLoanAcc: function() {
    this.view.flxContainerCheckingAcc.setVisibility(false);
    this.view.flxContainerCreditCard.setVisibility(false);
    this.view.flxContainerHomeLoan.setVisibility(true);
    this.view.flxExternalAccountContainer.setVisibility(false);
    this.view.flxContainerDepositAccount.setVisibility(false);
    this.populateLoanAccount();
    this.view.btnCallBankHL.onClick=this.callBank;
    this.view.btnMsgBankHL.onClick=this.messageBank;
    this.view.forceLayout();
  },
  populateLoanAccount:function()
  {
    var configManager = applicationManager.getConfigurationManager();
    var forUtility=applicationManager.getFormatUtilManager();
    this.view.lblOutstandingBalVal.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.outstandingBalance);
    this.view.lblPrincipalBalVal.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.principalBalance);
    this.view.lblPrincipalAmtValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.principalValue);
    this.view.lblInterestRateValue.text=this.accDetails.interestRate + "%";
    this.view.lblInterestPaidValue.text=this.accDetails.interestPaidYTD;
    this.view.lblIntPaidLastYearValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.interestPaidLastYear);
    this.view.lblLastPmtAmtValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.lastPaymentAmount);
    var dateobj=forUtility.getDateObjectfromString(this.accDetails.lastPaymentDate,"YYYY-MM-DD");    
    this.view.lblLastPmtDateValue.text=  forUtility.getFormatedDateString(dateobj,forUtility.getApplicationDateFormat());
    this.view.lblPayOffAmtValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.payoffAmount);
    this.view.lblAccTypeValHL.text=this.accDetails.accountType;
    this.view.lblLoanTypeValue.text=this.accDetails.accountType;
    this.view.lblPropertyAddressValue.text=""; 
    var dateobj1=forUtility.getDateObjectfromString(this.accDetails.openingDate,"YYYY-MM-DD");    
    this.view.lblLoanOriginationDateVal.text=  forUtility.getFormatedDateString(dateobj1,forUtility.getApplicationDateFormat());
	
    var accNo = this.accDetails.accountID;
    
    if(kony.sdk.isNullOrUndefined(accNo) || accNo === '')
    {
      this.view.flxAccountNumberHL.setVisibility(false);
    }
    else
    {
      this.view.lblAccNoValueHL.text=applicationManager.getDataProcessorUtility().maskAccountNumber(accNo);
      this.view.flxAccountNumberHL.setVisibility(true);
    }    
    
    var ibanNumber = this.accDetails.IBAN;

    if(kony.sdk.isNullOrUndefined(ibanNumber) || ibanNumber === '')
    {
      this.view.flxIBANHomeLoan.setVisibility(false);
    }
    else
    {
      this.view.lblIBANValueHomeLoan.text = forUtility.formatIBAN(ibanNumber);
      this.view.flxIBANHomeLoan.setVisibility(true);
    }
  },
  createViewForDepositAccount:function(){
    this.view.flxContainerCheckingAcc.setVisibility(false);
    this.view.flxContainerCreditCard.setVisibility(false);
    this.view.flxContainerHomeLoan.setVisibility(false);
    this.view.flxContainerDepositAccount.setVisibility(true);
    this.view.flxExternalAccountContainer.setVisibility(false);
    this.populateDepositAccount();
    this.view.btnCallBankDA.onClick=this.callBank;
    this.view.btnMsgBankDA.onClick=this.messageBank;
    this.view.forceLayout();
  },
  populateDepositAccount:function()
  {
    var configManager = applicationManager.getConfigurationManager();
    var forUtility=applicationManager.getFormatUtilManager();
    this.view.lblAvailBalValueDA.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.availableBalance);
    this.view.lblCurrBalValueDA.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.currentBalance);
    this.view.lblInterestEarnedValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.interestEarned);
    this.view.lblMaturityAmtValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.maturityAmount);
    var dateobj=forUtility.getDateObjectfromString(this.accDetails.maturityDate,"YYYY-MM-DD");    
    this.view.lblMaturityDateValue.text =  forUtility.getFormatedDateString(dateobj,forUtility.getApplicationDateFormat());
    this.view.lblMaturityOptionValue.text=this.accDetails.maturityOption;
    this.view.lblDividentRateValue.text=this.accDetails.dividendRate + "%";
    this.view.lblDividentPaidValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.dividendPaidYTD);
    this.view.lblDividentPaidAmtValue.text=forUtility.formatAmountandAppendCurrencySymbol(this.accDetails.dividendLastPaidAmount);
    this.view.lblAccNoValueDA.text=applicationManager.getDataProcessorUtility().maskAccountNumber(this.accDetails.accountID);
    // this.view.lbllAccHolderValueDA.text=this.accDetails.accountHolder;
    var accJson=JSON.parse(this.accDetails.accountHolder);
    this.view.lbllAccHolderValueDA.text=accJson.fullname;
    this.view.lblNickNameDAValue.text=this.accDetails.nickName;
    
    var accNo = this.accDetails.accountID;

    if(kony.sdk.isNullOrUndefined(accNo) || accNo === '')
    {
      this.view.flxAccountNumberDA.setVisibility(false);
    }
    else
    {
      this.view.lblAccNoValueDA.text=applicationManager.getDataProcessorUtility().maskAccountNumber(accNo);
      this.view.flxAccountNumberDA.setVisibility(true);
    }  
    
    var ibanNumber = this.accDetails.IBAN;

    if(kony.sdk.isNullOrUndefined(ibanNumber) || ibanNumber === '')
    {
      this.view.flxIBANDepositAccount.setVisibility(false);
    }
    else
    {
      this.view.lblIBANValueDepositAccount.text = forUtility.formatIBAN(ibanNumber);
      this.view.flxIBANDepositAccount.setVisibility(true);
    }

  },
  flxAccNoToggleHLToggleOnClick: function() {
    if (this.view.imgAccNoToggleHL.src === "view.png") {
      this.view.imgAccNoToggleHL.src = "viewactive.png";
      this.view.lblAccNoValueHL.text = this.accDetails.accountID;
      this.view.flxAccountNumberHL.forceLayout();
    } else {
      this.view.imgAccNoToggleHL.src = "view.png";
      this.view.lblAccNoValueHL.text = applicationManager.getDataProcessorUtility().maskAccountNumber(this.accDetails.accountID);
      this.view.flxAccountNumberHL.forceLayout();
    }
  },
  flxAccNoToggleCCOnClick: function() {
    if (this.view.imgAccNoToggleCC.src === "view.png") {
      this.view.imgAccNoToggleCC.src = "viewactive.png";
      this.view.lblAccNoValueCC.text = this.accDetails.accountID;
      this.view.flxAccountNumberCC.forceLayout();
    } else {
      this.view.imgAccNoToggleCC.src = "view.png";
      this.view.lblAccNoValueCC.text = applicationManager.getDataProcessorUtility().maskAccountNumber(this.accDetails.accountID);
      this.view.flxAccountNumberCC.forceLayout();
    }
  },
  flxAccNoToggleOnClick: function() {
    if (this.view.imgAccNoToggle.src === "view.png") {
      this.view.imgAccNoToggle.src = "viewactive.png";
      this.view.lblAccNoValue.text = this.accDetails.accountID;
      this.view.flxAccountNumber.forceLayout();
    } else {
      this.view.imgAccNoToggle.src = "view.png";
      this.view.lblAccNoValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(this.accDetails.accountID);
      this.view.flxAccountNumber.forceLayout();
    }
  },
  flxRouteNoToggleOnClick: function() {
    if (this.view.imgRouteNoToggle.src === "view.png") {
      this.view.imgRouteNoToggle.src = "viewactive.png";
      this.view.lblRoutingNoValue.text = this.accDetails.routingNumber;
      this.view.flxRouteNoToggle.forceLayout();
    } else {
      this.view.imgRouteNoToggle.src = "view.png";
      this.view.lblRoutingNoValue.text = this.accDetails.routingNumber;
      this.view.flxRouteNoToggle.forceLayout();
    }
  },
  flxAccNoToggleDAOnClick:function(){
    if (this.view.imgAccNoToggleDA.src === "view.png") {
      this.view.imgAccNoToggleDA.src = "viewactive.png";
      this.view.lblAccNoValueDA.text = this.accDetails.accountID;
      this.view.flxAccNoToggleDA.forceLayout();
    } else {
      this.view.imgAccNoToggleDA.src = "view.png";
      this.view.lblAccNoValueDA.text = applicationManager.getDataProcessorUtility().maskAccountNumber(this.accDetails.accountID);
      this.view.flxAccNoToggleDA.forceLayout();
    }
  },
  customHeaderBtnRightOnClick: function() {
    if(applicationManager.getDeviceUtilManager().isIPhone()) {
      var actionSheetObject = new kony.ui.ActionSheet(
        {
          "title":null,
          "message":null,
          "showCompletionCallback": null
        }
      );
      var actionEditNickName = new kony.ui.ActionItem(
        {
          "title":"Nick Name",
          "style":constants.ACTION_STYLE_DEFAULT,
          "action": this.btnEditNickNameOnClick
        }
      );
      var actionCancel = new kony.ui.ActionItem(
        {
          "title":"Cancel",
          "style":constants.ACTION_ITEM_STYLE_CANCEL,
          "action": null
        }
      );
      actionSheetObject.addAction(actionEditNickName);
      actionSheetObject.addAction(actionCancel);
      actionSheetObject.show();
    }else{
      this.view.flxPopupNickName.setVisibility(true);
      this.view.flxHeader.setEnabled(false);
      this.view.flxContainerCheckingAcc.setEnabled(false);
      this.view.flxContainerCreditCard.setEnabled(false);
      this.view.flxContainerHomeLoan.setEnabled(false);
      this.view.flxContainerDepositAccount.setEnabled(false);
    }
  },
  btnCancelOnClick:function(){
    this.view.flxPopupNickName.setVisibility(false);
    this.view.flxHeader.setEnabled(true);
    this.view.flxContainerCheckingAcc.setEnabled(true);
    this.view.flxContainerCreditCard.setEnabled(true);
    this.view.flxContainerHomeLoan.setEnabled(true);
    this.view.flxContainerDepositAccount.setEnabled(true);
    // this.view.flxFooter.setEnabled(true);   
  },
  btnEditNickNameOnClick:function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navMan=applicationManager.getNavigationManager();
    var isExternal = this.accDetails.type === "external" ? true : false ;
    if(isExternal) {
      navMan.setCustomInfo("frmAccInfoEdit", this.accDetails.externalAccountDetails.NickName);
    }
    else {
      navMan.setCustomInfo("frmAccInfoEdit",this.accDetails.nickName);
    }
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    accountMod.presentationController.commonFunctionForNavigation("frmAccInfoEdit");
  },
  flxBackOnClick:function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  callBank:function()
  {    
    applicationManager.getPresentationUtility().showLoadingScreen(); 
    var infoCall = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
    infoCall.presentationController.onClickCallUs();  

  },
  showDial: function (phoneNumber) {     
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    kony.phone.dial(phoneNumber);         
  },
  messageBank:function()
  { 
    applicationManager.getPresentationUtility().showLoadingScreen();
    var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    messagesMod.presentationController.getCategories();
  }, 
});