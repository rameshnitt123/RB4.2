define({
 transferType: '',
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
   preShow: function() {
  //  applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
      this.view.flxMainContainer.top = "0dp";
    }
     this.clearTextBox();
     this.initActions(); 
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     var navManager = applicationManager.getNavigationManager();
     var currentForm=navManager.getCurrentForm();
     applicationManager.getPresentationFormUtility().logFormName(currentForm);   
  },
  initActions: function() {
    var scope = this;
    this.view.customHeader.flxBack.onClick = function() {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    }
    this.view.customHeader.btnRight.onClick =this.cancelOnClick;
    this.view.flxClose.onTouchStart = this.clearTextBox;
    this.view.tbxTo.onTextChange = this.showRecepSuggestions;
    this.view.segToAccount.onRowClick = this.chooseRecep;
    this.view.btnAddRecipient.onClick = this.onClickContinue;
  }, 
  chooseRecep : function(){
    var rowindex=Math.floor(this.view.segToAccount.selectedRowIndex[1]);
    var selectedAccountData=this.view.segToAccount.data[rowindex];
    this.view.tbxTo.text=selectedAccountData.IBAN;
    this.view.flxClose.setVisibility(true);
    this.view.flxToAccountHints.setVisibility(false);
    this.view.flxNewRecipient.setVisibility(false);
    this.view.flxNoTransactions.setVisibility(false);
    this.enableContinueButton();
  },
  clearTextBox : function(){
    this.view.tbxTo.text="";
    this.view.flxClose.setVisibility(false);
    this.view.flxToAccountHints.setVisibility(false);
    this.view.flxNewRecipient.setVisibility(false);
    this.view.flxNoTransactions.setVisibility(false);
    this.disableContinueButton();
    var navMan=applicationManager.getNavigationManager();
    var accdata=  navMan.getCustomInfo("frmTransfersToAccount");
    accdata.selectedAccountData = {}
    navMan.setCustomInfo("frmTransfersToAccount",accdata);
  },
  showRecepSuggestions : function(){
    var data = this.view.tbxTo.text;
    var navMan=applicationManager.getNavigationManager();
    var accdata=  navMan.getCustomInfo("frmTransfersToAccount");
    if(data.length){
      this.view.flxClose.setVisibility(true);
      var TransModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
      TransModPresentationController.fetchExternalAccountsByIbanOrName(data);
    }
    else
      this.clearTextBox();
  },
  cancelOnClick:function()
  {
    var TransModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        TransModPresentationController.cancelCommon();
  },
  segmentDataSet:function(recepList)
  {
    if(recepList.length){
        this.view.segToAccount.widgetDataMap={
          lblNickNameValue:"beneficiaryName",
          lblIBANValue:"IBAN"
        };
      this.view.segToAccount.setData(recepList);
      this.view.flxToAccountHints.setVisibility(true);
      this.view.flxNewRecipient.setVisibility(false);
      this.view.flxNoTransactions.setVisibility(false);
      this.enableContinueButton();
    }
    else{
      this.view.flxToAccountHints.setVisibility(false);
      this.view.flxNoTransactions.setVisibility(true);
      if(applicationManager.getValidationUtilManager().isValidIBAN(this.view.tbxTo.text)){
        this.enableContinueButton();
        this.view.flxNewRecipient.setVisibility(true);
      }
      else{
        this.view.flxNewRecipient.setVisibility(false);
        this.disableContinueButton();
      }
    }
  },
  enableContinueButton: function() {
    this.view.btnAddRecipient.setEnabled(true);
    this.view.btnAddRecipient.skin = "sknBtn0095e4RoundedffffffSSP26px";
  },
  disableContinueButton: function() {
    this.view.btnAddRecipient.setEnabled(false);
    this.view.btnAddRecipient.skin = "sknBtna0a0a0SSPReg26px";
  },
  onClickContinue : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var IBAN = this.view.tbxTo.text;
    if(IBAN!=""&&!kony.sdk.isNullOrUndefined(IBAN)&&applicationManager.getValidationUtilManager().isValidIBAN(IBAN)){
      var navMan=applicationManager.getNavigationManager();
      var accdata=  navMan.getCustomInfo("frmTransfersToAccount");
      if(kony.sdk.isNullOrUndefined(accdata.selectedAccountData))
        accdata.selectedAccountData = {}
      accdata.selectedAccountData.IBAN=applicationManager.getFormatUtilManager().deFormatIBAN(IBAN);
      navMan.setCustomInfo("frmTransfersToAccount",accdata);
      var TransModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
      TransModPresentationController.checkExistingAccountwithIBAN(IBAN);      
      //navMan.navigateTo("frmTransfersRecipientNameEurope");
    }
    else{
      this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.InvalidIBAN"));
    }
  },
    bindGenericError : function(msg){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
    } 
});