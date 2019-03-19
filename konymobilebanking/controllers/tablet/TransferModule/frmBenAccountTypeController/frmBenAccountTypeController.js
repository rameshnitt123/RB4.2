define({

  init : function()
  {
    try
    {
      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);       
    }
    catch(ex)
    {

    }    
  },

  preShow: function() {
    try
    {
      this.renderTitleBar();
      this.initialUiSettings();
      this.initActions();
      
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);          
    }
    catch(ex)
    {

    }
  },

  initialUiSettings : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var benificiaryData=transferModule.presentationController.getBenificiaryData();
      var accountType=benificiaryData.accountType;
      this.clearSkins();
      if(accountType){
        if(accountType===applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Checking")){
          this.view.btnCheckingAcc.skin = "sknBtnF4F4F4Bg0A78D1SSPR30pxTab";
        }
        else if(accountType===applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Savings")){
          this.view.btnSavingAccount.skin ="sknBtnF4F4F4Bg0A78D1SSPR30pxTab";
        }
        else if(accountType===applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Loan")){
          this.view.btnLoanAcc.skin = "sknBtnF4F4F4Bg0A78D1SSPR30pxTab";
        }else{
          this.view.btnFdAccount.skin = "sknBtnF4F4F4Bg0A78D1SSPR30pxTab";
        }
      }  
      
      //right pane
      this.setRightPaneData();
    }
    catch(ex)
    {

    }
  },

  initActions:function(){
    try
    {
      var scope=this;

      this.view.btnCheckingAcc.onClick = scope.btnCheckingAccOnClick;
      this.view.btnSavingAccount.onClick = scope.btnSavingAccOnClick;
      this.view.btnLoanAcc.onClick = scope.btnLoanAccOnClick;
      this.view.btnFdAccount.onClick = scope.btnFDAccOnClick;
      this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
      this.view.customHeader.btnRight.onClick = scope.onClickCancel;          
    }
    catch(ex)
    {

    }
  },

  renderTitleBar :function()
  {
    try
    {
      var deviceUtilManager = applicationManager.getDeviceUtilManager();
      var isIpad = deviceUtilManager.isIpad();
      if(!isIpad){
        this.view.flxHeader.isVisible = true;
      }
      else{
        this.view.flxHeader.isVisible = false;
      }         
    }
    catch(ex)
    {

    }   
  }, 

  clearSkins:function(){
    try{
      this.view.btnCheckingAcc.skin = "sknBtnNoBg424242SSP30PxTab";
      this.view.btnSavingAccount.skin ="sknBtnNoBg424242SSP30PxTab";
      this.view.btnLoanAcc.skin = "sknBtnNoBg424242SSP30PxTab";
      this.view.btnFdAccount.skin = "sknBtnNoBg424242SSP30PxTab";      
    }
    catch(ex)
    {

    }          
  },

  btnRightOnClick: function() {
    try
    {

    }
    catch(ex)
    {

    }
  },

  btnCheckingAccOnClick: function() {
    try
    {
      applicationManager.getPresentationUtility().showLoadingScreen();
      this.navigateToBenName(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Checking"));         
    }
    catch(ex)
    {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }      
  },

  btnSavingAccOnClick: function() {
    try
    {
      applicationManager.getPresentationUtility().showLoadingScreen();
      this.navigateToBenName(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Savings"));          
    }
    catch(ex)
    {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }      
  },

  btnLoanAccOnClick: function() {
    try
    {
      applicationManager.getPresentationUtility().showLoadingScreen();
      this.navigateToBenName(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Loan"));         
    }
    catch(ex)
    {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }      
  },

  btnFDAccOnClick: function() {
    try
    {
      applicationManager.getPresentationUtility().showLoadingScreen();
      this.navigateToBenName(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.FD"));         
    }
    catch(ex)
    {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }      

  },

  navigateToBenName:function(accountType){
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.navigateToBenificiaryName(accountType);          
    }
    catch(ex)
    {

    }      
  },

  flxBackOnClick: function() {
    try
    {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();          
    }
    catch(ex)
    {

    }      
  },

  onClickCancel: function() {
    try
    {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var navManager = applicationManager.getNavigationManager();	
      var navigateToForm=navManager.getEntryPoint("createInternalBankBenificiary");
      var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferMod.presentationController.commonFunctionForNavigation(navigateToForm);          
    }
    catch(ex)
    {

    }      
  },
  
  setRightPaneData : function()
  {
    try
    {
      var scope = this;
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var transferFlowType = transferModule.presentationController.getFlowType();

      switch(transferFlowType)
      {
        case "OtherKonyBankMembersCreateTransfer":
          this.setRighPaneForOtherKonyBankMembers();
          break;
        case "OtherBankAccountsCreateTransfer":
          this.setRightPaneForOtherBankAccounts();
          break;
        case "InternationalTransferCreateTransfer": 
          this.setRightPaneForInternationalAccounts();
      }      
    }
    catch(ex)
    {

    }
  },

  setRighPaneForOtherKonyBankMembers : function()
  {
    try
    {
      this.view.RightPane.flxFirstRow.isVisible = false;
      this.view.RightPane.flxSecondRow.isVisible = false;
      this.view.RightPane.flxThirdRow.isVisible = false;
      this.view.RightPane.flxFourthRow.isVisible = true;
      this.view.RightPane.flxFifthRow.isVisible = true;
      this.view.RightPane.flxSixthRow.isVisible = true;
      this.view.RightPane.flxSeventhRow.isVisible = true;  

      this.setRecipientAccountNumber();
    }
    catch(ex)
    {

    }
  },

  setRightPaneForOtherBankAccounts : function()
  {
    try
    {
      this.view.RightPane.flxFirstRow.isVisible = false;
      this.view.RightPane.flxSecondRow.isVisible = false;
      this.view.RightPane.flxThirdRow.isVisible = true;
      this.view.RightPane.flxFourthRow.isVisible = true;
      this.view.RightPane.flxFifthRow.isVisible = true;
      this.view.RightPane.flxSixthRow.isVisible = true;
      this.view.RightPane.flxSeventhRow.isVisible = true;  

      this.setRecipientRoutingNumber();
      this.setRecipientAccountNumber();
    }
    catch(ex)
    {

    }
  },

  setRightPaneForInternationalAccounts : function()
  {
    try
    {
      this.view.RightPane.flxFirstRow.isVisible = true;
      this.view.RightPane.flxSecondRow.isVisible = true;
      this.view.RightPane.flxThirdRow.isVisible = false;
      this.view.RightPane.flxFourthRow.isVisible = true;
      this.view.RightPane.flxFifthRow.isVisible = true;
      this.view.RightPane.flxSixthRow.isVisible = true;
      this.view.RightPane.flxSeventhRow.isVisible = true;

      this.setRecipientCountry();
      this.setRecipientSwiftCode();
      this.setRecipientAccountNumber();
    }
    catch(ex)
    {

    }
  },

  setRecipientCountry : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var recipientCountry = transferModule.presentationController.getCountryName();
      this.view.RightPane.lblCheckedRowName.text = recipientCountry;
    }
    catch(ex)
    {

    }
  },

  setRecipientSwiftCode : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var recipientSwiftCode = transferModule.presentationController.getSwiftCode();
      this.view.RightPane.lblSecondCheckedRowName.text = recipientSwiftCode;
    }
    catch(ex)
    {

    }    
  },

  setRecipientRoutingNumber : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var recipientRoutingNumber = transferModule.presentationController.getRoutingNumber();
      this.view.RightPane.lblThirdCheckedRowName.text = recipientRoutingNumber;
    }
    catch(ex)
    {

    }     
  }, 

  setRecipientAccountNumber : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var recipientAccountNumber = transferModule.presentationController.getReEnteredAccountNumber();
      var maskedAccountNumber = applicationManager.getDataProcessorUtility().maskAccountNumber(recipientAccountNumber);
      this.view.RightPane.lblFourthCheckedRowName.text = maskedAccountNumber;
    }
    catch(ex)
    {

    }     
  },
});