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
      var beneficiaryName=benificiaryData.beneficiaryName;
      
      if(beneficiaryName){
        this.view.txtRecipientName.text=beneficiaryName;
      }
      else{
        this.view.txtRecipientName.text="";
        this.disableContinueButton();
      }

      this.view.txtRecipientName.setFocus(true);     
      
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

      this.view.customHeaderTablet.flxBack.onClick = scope.flxBackOnClick;
      this.view.btnContinue.onClick = scope.btnContinueOnClick;
      this.view.customHeaderTablet.btnRight.onClick = scope.onClickCancel;             
      this.view.txtRecipientName.onTextChange=this.navigateToVerifyDetails;      
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

  navigateToVerifyDetails:function(){
    try
    {
      var recipientName=this.view.txtRecipientName.text;
      if(recipientName.length>0){
        this.enableContinueButton();
      }
      else{
        this.disableContinueButton();
      }          
    }
    catch(ex)
    {

    }
  },
  
/*//a//
  btnContinueHandler: function() {
    try
    {
      if ((this.view.txtFirstName.text !== '') && (this.view.txtFirstName.text !== null) && (this.view.txtLastName.text !== '') && (this.view.txtLastName.text !== null)) {
        this.enableContinueButton();
      } else {
        this.disableContinueButton();
      }          
    }
    catch(ex)
    {

    }
  },
*/
  
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

  btnContinueOnClick: function() {
    try
    {
      var recipientName=this.view.txtRecipientName.text;
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.navigateToBenificiaryVerifyDetails(recipientName);          
    }
    catch(ex)
    {

    }
  },

  enableContinueButton: function() {
    try
    {
      this.view.btnContinue.setEnabled(true);
      this.view.btnContinue.skin = "sknBtnBg0A78D1SSP30PxTab";          
    }
    catch(ex)
    {

    }
  },

  disableContinueButton: function() {
    try
    {
      this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";          
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
      this.setRecipientAccountType();
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
      this.setRecipientAccountType();
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
      this.setRecipientAccountType();
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

  setRecipientAccountType : function()
  {
    try
    {
      var recipientsManager = applicationManager.getRecipientsManager();
      var recipientData = recipientsManager.getBenificiaryData();     

      this.view.RightPane.lblFifthCheckedRowName.text = recipientData.accountType;
    }
    catch(ex)
    {

    }     
  },  
});