define({

  keypadString: '',
  timerCounter: 0,

  init : function()
  {
    try
    {
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
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

      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
    catch(ex)
    {

    }    
  },

  initialUiSettings : function()
  {
    try
    {
      this.view.flxPopup.setVisibility(false);
      this.updateInputBullets();
      this.view.btnVerify.skin="sknBtna0a0a0SSPReg26px";
      this.view.btnVerify.setEnabled(false);
      this.clearKeyPadString();
    }
    catch(ex)
    {

    }
  },

  initActions : function()
  {
    try
    {
      var self = this;
      this.view.customHeader.flxBack=function(){
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
      };
      this.view.customHeader.btnRight=function(){
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
      };
      this.view.btnVerify.onClick=this.btnVerifyOnClick;
      this.view.btnReSend.onClick=function(){
        alert("code resent");
        self.clearKeyPadString();
      };

      this.setKeyPadActions();      
    }
    catch(ex)
    {

    }   
  },

  updateInputBullets : function() 
  {
    try
    {
      var scope = this;
      var widgets = this.view["flxInputSecurityCode"].widgets();
      for (var i = 0; i < this.keypadString.length; i++) {
        widgets[i].skin = "sknLbl979797SSP60px";
      }
      for (var i = this.keypadString.length; i < widgets.length - 1; i++) {
        widgets[i].skin = "sknLble3e3e3SSP60px";
      }
      this.view.forceLayout();      
    }
    catch(ex)
    {

    }    
  },

  setKeypadChar : function(char) 
  {
    try
    {
      if (this.keypadString.length === 6) return;

      this.keypadString = this.keypadString + char;
      this.updateInputBullets();
      if (this.keypadString.length === 6){
        this.view.btnVerify.skin="sknBtn0095e426pxEnabled";
        this.view.btnVerify.setEnabled(true);
      }
      else{
        this.view.btnVerify.skin="sknBtna0a0a0SSPReg26px";
        this.view.btnVerify.setEnabled(false);
      }     
    }
    catch(ex)
    {

    }   
  },

  clearKeypadChar : function() 
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
      this.view.btnVerify.skin="sknBtna0a0a0SSPReg26px";
      this.view.btnVerify.setEnabled(false);     
    }
    catch(ex)
    {

    }   
  },

  btnVerifyOnClick : function()
  {
    try
    {
      applicationManager.getPresentationUtility().showLoadingScreen(); 
      var settings = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settings.presentationController.updateDeviceRegistration();       
    }
    catch(ex)
    {

    }          
  }, 

  bindGenericError  : function(errorMsg)
  {
    try
    {
      var scopeObj=this;
      applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj,errorMsg);     
    }
    catch(ex)
    {

    }    
  },

  clearKeyPadString : function()
  {
    try
    {
      for(var i=0;i<6;i++){
        this.clearKeypadChar();
      }      
    }
    catch(ex)
    {

    }    
  },

  setKeyPadActions : function() 
  {
    try
    {
      var scopeObj = this;
      this.view.keypad.btnOne.onClick = function() {
        scopeObj.setKeypadChar(1);
      };
      this.view.keypad.btnTwo.onClick = function() {
        scopeObj.setKeypadChar(2);
      };
      this.view.keypad.btnThree.onClick = function() {
        scopeObj.setKeypadChar(3);
      };
      this.view.keypad.btnFour.onClick = function() {
        scopeObj.setKeypadChar(4);
      };
      this.view.keypad.btnFive.onClick = function() {
        scopeObj.setKeypadChar(5);
      };
      this.view.keypad.btnSix.onClick = function() {
        scopeObj.setKeypadChar(6);
      };
      this.view.keypad.btnSeven.onClick = function() {
        scopeObj.setKeypadChar(7);
      };
      this.view.keypad.btnEight.onClick = function() {
        scopeObj.setKeypadChar(8);
      };
      this.view.keypad.btnNine.onClick = function() {
        scopeObj.setKeypadChar(9);
      };
      this.view.keypad.btnZero.onClick = function() {
        scopeObj.setKeypadChar(0);
      };
      this.view.keypad.imgClearKeypad.onTouchEnd = function() {
        scopeObj.clearKeypadChar();
      };      
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
});