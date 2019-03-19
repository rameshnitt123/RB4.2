define({ 
  keypadString:'',

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
      this.initialUiSettings();
      this.initActions();

      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
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
      this.keypadString='';
      var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var recur= transMod.presentationController.getTransObject();
      //   var navMan=applicationManager.getNavigationManager();
      // var recurrence=navMan.getCustomInfo("frmTransfersRecurrence");
      if(recur.numberOfRecurrences!==null&&recur.numberOfRecurrences!==""&&recur.numberOfRecurrences!==undefined)
      {
        this.keypadString=recur.numberOfRecurrences;
      }
      this.updateInputBullets();  
      
       var navigationManager = applicationManager.getNavigationManager();
      var transferFrequencyType = navigationManager.getCustomInfo("transferFrequencyType");
      this.view.lblDaily.text = transferFrequencyType;      
      
      //right pane settings
      this.setTransferType();
      this.setBenificiaryAccount();
      this.setFromAccount();
      this.setTransferAmount();
    }
    catch(ex)
    {

    }
  },

  initActions : function()
  {
    try
    {
      var scope=this;
      
      this.view.btnContinue.onClick = this.clickOnContinue; 
      
      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
      
      this.view.customHeaderTablet.btnRight.onClick = function(){
        scope.cancelOnClick();
      }; 
      
      this.setKeypadActions();
    }
    catch(ex)
    {

    }      
  },
  
  backNavigation : function()
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

  cancelOnClick : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.cancelCommon();        
    }
    catch(ex)
    {

    }    
  },

  clickOnContinue : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.transferSetRecurrence(this.keypadString);         
    }
    catch(ex)
    {

    }        
  },

  updateInputBullets : function () 
  {
    try
    {
      var scope = this;
      var widgets = this.view["flxInputRecurrenceNumber"].widgets();
      var dummyString = "__";
      for (var i = 0; i < this.keypadString.length; i++) {
        widgets[i].text = this.keypadString[i];
        widgets[i].skin = "sknLbl979797SSP60px";
      }
      for (var i = this.keypadString.length; i < widgets.length ; i++) {
        widgets[i].text = dummyString[i];
        widgets[i].skin = "sknLble3e3e3SSP60px";
      }

      if(this.keypadString.length!==0){
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtnBg0A78D1SSP30PxTab";
        this.view.btnContinue.focusSkin = "sknBtnBg0A78D1SSP30PxTab";
      }else{
        this.view.btnContinue.setEnabled(false);
        this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
        this.view.btnContinue.focusSkin = "sknBtnOnBoardingInactive";
      }

      this.view.forceLayout();        
    }
    catch(ex)
    {

    }      
  },

  setKeypadChar : function (char) 
  {
    try
    {
      if (this.keypadString.length === 2) return;

      this.keypadString = this.keypadString + char;
      this.updateInputBullets();        
    }
    catch(ex)
    {

    }      
  },

  clearKeypadChar : function () 
  {
    try
    {
      if (this.keypadString.length === 1) {
        this.keypadString = '';
        this.updateInputBullets();
      }
      if (this.keypadString.length !== 0) {
        this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
        this.updateInputBullets();
      }        
    }
    catch(ex)
    {

    }      
  },

  renderTitleBar : function(){
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
  
  setTransferType : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var transferFlowType = transferModule.presentationController.getFlowType();

      switch(transferFlowType)
      {
        case "MyKonyAccounts":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccountsTablet");
          break;
        case "OtherKonyBankMembersCreateTransfer":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.transfers.myKonyBankBenificiary");
          break;
        case "OtherBankAccountsCreateTransfer":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyOtherAccounts");
          break;
        case "InternationalTransferCreateTransfer":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.transfers.internationalTransferType");
      }
    }
    catch(ex)
    {

    }
  },

  setBenificiaryAccount : function()
  {
    try
    {       
      var transactionManager = applicationManager.getTransactionManager();
      var transactionObject = transactionManager.getTransactionObject();
      this.view.RightPane.lblSecondCheckedRowName.text = transactionObject.toAccountName + "-" +transactionObject.toAccountNumber.slice(-4);
    }
    catch(ex)
    {

    }
  },

  setFromAccount : function()
  {
    try
    {
      var transactionManager = applicationManager.getTransactionManager();
      var transactionObject = transactionManager.getTransactionObject();
      this.view.RightPane.lblThirdCheckedRowName.text = transactionObject.fromAccountName + "-" + transactionObject.fromAccountNumber.slice(-4);        
    }
    catch(ex)
    {

    }
  },

  setTransferAmount : function()
  {
    try
    {
      var transactionManager = applicationManager.getTransactionManager();
      var transactionObject = transactionManager.getTransactionObject();
      var configManager = applicationManager.getConfigurationManager();

      this.view.RightPane.lblFourthCheckedRowName.text = configManager.getCurrencyCode() + transactionObject.amount;        
    }
    catch(ex)
    {

    }    
  }   
});