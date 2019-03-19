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
    this.view.tbxTo.text=selectedAccountData.accountNumber;
    this.view.flxClose.setVisibility(true);
    this.view.flxToAccountHints.setVisibility(false);
    this.view.flxNewRecipient.setVisibility(false);
    this.view.flxNoTransactions.setVisibility(false);
  },
  clearTextBox : function(){
    this.view.tbxTo.text="";
    this.view.flxClose.setVisibility(false);
    this.view.flxToAccountHints.setVisibility(false);
    this.view.flxNewRecipient.setVisibility(false);
    this.view.flxNoTransactions.setVisibility(false);
    this.deactivateContBtn();
    var navMan=applicationManager.getNavigationManager();
    var accdata=  navMan.getCustomInfo("frmTransfersToAccount");
    accdata.selectedAccountData = {};
    navMan.setCustomInfo("frmTransfersToAccount",accdata);
  },
  showRecepSuggestions : function(){
    var data = this.view.tbxTo.text;
    var navMan=applicationManager.getNavigationManager();
    if(data.length){
      this.view.flxClose.setVisibility(true);
      var TransModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
      TransModPresentationController.fetchInternationalAccountsByAccNoOrName(data);
      this.activeteContBtn();
    }
    else
      this.deactivateContBtn();
  },
  activeteContBtn : function(){
    this.view.btnAddRecipient.skin = "sknBtn0095e4RoundedffffffSSP26px";
      this.view.btnAddRecipient.setEnabled(true);
  },
  deactivateContBtn : function(){
    this.view.btnAddRecipient.skin = "sknBtnOnBoardingInactive";
      this.view.btnAddRecipient.setEnabled(false);
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
          lblIBANValue:"accountNumber"
        };
      this.view.segToAccount.setData(recepList);
      this.view.flxToAccountHints.setVisibility(true);
      this.view.flxNewRecipient.setVisibility(false);
      this.view.flxNoTransactions.setVisibility(false);
    }
    else{
      this.view.flxToAccountHints.setVisibility(false);
      this.view.flxNewRecipient.setVisibility(true);
      this.view.flxNoTransactions.setVisibility(true);
    }
  },
  onClickContinue : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var accountNumber = this.view.tbxTo.text;
    var navMan=applicationManager.getNavigationManager();
    var accdata=  navMan.getCustomInfo("frmTransfersToAccount");
    if(kony.sdk.isNullOrUndefined(accdata.selectedAccountData))
        accdata.selectedAccountData = {};
    accdata.selectedAccountData.accountNumber=accountNumber;
    navMan.setCustomInfo("frmTransfersToAccount",accdata);
    var TransModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
    TransModPresentationController.checkExistingAccountwithAccountNumber(accountNumber);
    //navMan.navigateTo("frmTransfersRecipientNameEurope");
  },
    bindGenericError : function(msg){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
    } 
});