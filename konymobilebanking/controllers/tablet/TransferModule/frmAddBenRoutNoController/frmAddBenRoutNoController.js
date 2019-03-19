define({
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

  preshow: function() 
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
      // this.view.customHeader.btnRight.onClick=this.flxBackOnClick;          
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
      var routingNumber=transferModule.presentationController.getRoutingNumber();
      if(routingNumber){
        this.keypadString=routingNumber; 
        this.enterCodePostAction();	
      }
      else{
        this.incompleteCodeView();
      }
      this.preshowHideBankDetails();
      this.updateInputBullets("flxInputRoutingNo");     
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
      this.view.customHeaderTablet.btnRight.onClick = scope.onClickCancel;
      this.view.customHeaderTablet.flxBack.onClick=scope.flxBackOnClick;    
      
      this.setKeypadActions();
    }
    catch(ex)
    {

    }    
  },

  btnRightOnClick: function() 
  {
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

  btnContinueOnClick: function() 
  {
    try
    {
      var routingNumber=this.keypadString;
      var navManager = applicationManager.getNavigationManager();
      var accDetails=navManager.getCustomInfo("frmAddBenRoutNo");
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.navigateToEnterBenificiaryAccountNumber(routingNumber);          
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
      if (this.keypadString.length > 0 && this.keypadString.length < 10) {
        this.enterCodePostAction();
      } else if (this.keypadString.length < 1) {
        this.incompleteCodeView();
      } else if (this.keypadString.length > 9) {
        this.keypadString = this.keypadString.slice(0, 9);
        return;
      }
      this.updateInputBullets("flxInputRoutingNo");          
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
        this.updateInputBullets("flxInputRoutingNo");
      }
      if (this.keypadString.length !== 0) {
        this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
        if (this.keypadString.length < 1) {
          this.incompleteCodeView();
        }
        this.updateInputBullets("flxInputRoutingNo");
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
        // widgets[i].skin = "sknLbl979797SSP60px";
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
      this.view.lblBankName.setVisibility(false);
      this.view.lblAddLine1.setVisibility(false);
      this.view.lblAddLine2.setVisibility(false);
      this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
      this.view.btnContinue.setEnabled(false);          
    }
    catch(ex)
    {

    }      
  },

  preshowHideBankDetails:function()
  {
    try
    {
      this.view.lblBankName.setVisibility(false);
      this.view.lblAddLine1.setVisibility(false);
      this.view.lblAddLine2.setVisibility(false);         
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
   
});