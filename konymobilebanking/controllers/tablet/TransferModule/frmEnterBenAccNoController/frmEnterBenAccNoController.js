define({

  timerCounter:0,
  keypadString: '',

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
  
  preShow: function() 
  {
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
      this.keypadString = '';

      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var benificiaryData=transferModule.presentationController.getBenificiaryData();
      var accountNumber=benificiaryData.accountNumber;
      
      if(accountNumber){
        this.keypadString=accountNumber; 
        this.enterCodePostAction();
      }
      else{
        this.incompleteCodeView();
      }	
      
      this.updateInputBullets("flxInputAccNo");  
      
      //right pane
      this.setRightPaneData();
    }
    catch(ex)
    {

    }
  },

  initActions:function()
  {
    try
    {
      var scope=this;

      this.view.btnContinue.onClick = scope.btnContinueOnClick;
      this.view.customHeaderTablet.flxBack.onClick = scope.flxBackOnClick;
      this.view.customHeaderTablet.btnRight.onClick = scope.onClickCancel;  
      
      this.setKeypadActions();
    }
    catch(ex)
    {

    }      
  },
  
  btnRightOnClick: function() 
  {
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
  
  btnContinueOnClick: function() 
  {
    try
    {
      var accountNumber=this.keypadString;
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var isValidAccNo=transferModule.presentationController.isValidAccNum(accountNumber,"frmEnterBenAccNo");
      if(isValidAccNo){
        transferModule.presentationController.navigateToReEnterAccountNumber(accountNumber);
      }          
    }
    catch(ex)
    {

    }      
  },
  
  flxBackOnClick: function() 
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
  
  setKeypadChar: function(char) 
  {
    try
    {
      this.keypadString = this.keypadString + char;
      if (this.keypadString.length > 0 && this.keypadString.length < 17) {
        this.enterCodePostAction();
      } else if (this.keypadString.length < 1) {
        this.incompleteCodeView();
      } else if (this.keypadString.length > 16) {
        this.keypadString = this.keypadString.slice(0, 16);
        return;
      }
      this.updateInputBullets("flxInputAccNo");         
    }
    catch(ex)
    {

    }
  },

  clearKeypadChar: function() 
  {
    try
    {
      if (this.keypadString.length === 1) {
        this.keypadString = '';
        this.updateInputBullets("flxInputAccNo");
      }
      if (this.keypadString.length !== 0) {
        this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
        if (this.keypadString.length < 1) {
          this.incompleteCodeView();
        }
        this.updateInputBullets("flxInputAccNo");
      }
      if (this.keypadString.length < 1) {
        this.incompleteCodeView();
      }         
    }
    catch(ex)
    {

    }      
  },
  
  updateInputBullets: function(inputFlx) 
  {
    try
    {
      var widgets = this.view[inputFlx].widgets();
      for (var i = 0; i < this.keypadString.length; i++) {
        // widgets[i].skin = "sknLbl484848sspReg50px";
        widgets[i].text = this.keypadString[i];
      }
      for (var i = this.keypadString.length; i < widgets.length; i++) {
        //widgets[i].skin = "sknLble3e3e3SSP60px";
        widgets[i].text = '_';
      }
      this.view.forceLayout();          
    }
    catch(ex)
    {

    }      
  },
  
  enterCodePostAction: function() 
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
  
  incompleteCodeView: function() 
  {
    try
    {
      this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
      this.view.btnContinue.setEnabled(false);          
    }
    catch(ex)
    {

    }      
  },
  
  onClickCancel: function() 
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
  
  bindGenericError: function (errorMsg) 
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
  
  setKeypadActions : function()
  {
    try
    {
      var self = this;
      self.view.keypadTablet.btnOne.onClick = function(){
        self.setKeypadChar(1);
      };
        
      self.view.keypadTablet.btnTwo.onClick = function(){
        self.setKeypadChar(2);
      };
        
      self.view.keypadTablet.btnThree.onClick = function(){
        self.setKeypadChar(3);
      };
        
      self.view.keypadTablet.btnFour.onClick = function(){
        self.setKeypadChar(4);
      };
        
      self.view.keypadTablet.btnFive.onClick = function(){
        self.setKeypadChar(5);
      };
        
      self.view.keypadTablet.btnSix.onClick = function(){
        self.setKeypadChar(6);
      };
      
      self.view.keypadTablet.btnSeven.onClick = function(){
        self.setKeypadChar(7);
      };
        
      self.view.keypadTablet.btnEight.onClick = function(){
        self.setKeypadChar(8);
      };
        
      self.view.keypadTablet.btnNine.onClick = function(){
        self.setKeypadChar(9);
      };
        
      self.view.keypadTablet.btnZero.onClick = function(){
        self.setKeypadChar(0);
      };
        
      self.view.keypadTablet.imgClearKeypad.onTouchStart = function(){
        self.clearKeypadChar();
      };
        
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
  }
});