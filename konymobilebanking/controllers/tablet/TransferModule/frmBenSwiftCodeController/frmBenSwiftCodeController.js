define({

  timerCounter : 0,

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

  preShow : function() 
  {
    try
    {
      this.renderTitleBar();
      this.initActions();
      this.initialUiSettings();

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
      var swiftCode=transferModule.presentationController.getSwiftCode();
      this.view.txtSwiftCode.setFocus(true);
      if(swiftCode){
        this.view.txtSwiftCode.text=swiftCode;
      }
      else{
        this.view.txtSwiftCode.text="";
        this.disableContinueButton();
      } 
      
      //right pane
      this.setRightPaneData();

    }
    catch(ex)
    {

    }   
  },

  initActions : function() 
  {
    try
    {
      var scope = this;

      this.view.txtSwiftCode.onTextChange=scope.navigateToAccountNumber;
      this.view.customHeaderTablet.flxBack.onClick = scope.flxBackOnClick;
      this.view.btnContinue.onClick = function() {
        var swiftCode=scope.view.txtSwiftCode.text;
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        var isValidSwiftCode=transferModule.presentationController.isValidSwiftCode(swiftCode,"frmBenSwiftCode");
        if(isValidSwiftCode){
          transferModule.presentationController.navigateToEnterBenificiaryAccountNumberFromSwiftCode(swiftCode);
        }
      };
      this.view.customHeaderTablet.btnRight.onClick = scope.onClickCancel;          
    }
    catch(ex)
    {

    }
  },

  onClickCancel : function() 
  {
    try
    {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var navigateToForm=navManager.getEntryPoint("createInternalBankBenificiary");
      var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferMod.presentationController.commonFunctionForNavigation(navigateToForm);         
    }
    catch(ex)
    {

    }        
  },

  flxBackOnClick : function() 
  {
    try
    {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();           
    }
    catch(ex)
    {

    }
  },

  navigateToAccountNumber : function()
  {
    try
    {
      var swiftCode=this.view.txtSwiftCode.text;
      if(swiftCode.length>0){
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

  enableContinueButton : function()
  {
    try
    {
      this.view.btnContinue.setEnabled(true);
      this.view.btnContinue.skin = "sknBtnBg0A78D1SSP30PxTab";         
    }
    catch(ex)
    {

    }
  },

  disableContinueButton : function() 
  {
    try
    {
      this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";          
    }
    catch(ex)
    {

    }
  },

  bindGenericError : function (errorMsg) 
  {
    try
    {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var scopeObj = this;
      applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);          
    }
    catch(ex)
    {

    }
  },

  renderTitleBar : function()
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

  setRightPaneData : function()
  {
    try
    {
      var scope = this;
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var transferFlowType = transferModule.presentationController.getFlowType();

      this.setRightPaneForInternationalAccounts();
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
  
});