define({

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

  preShow : function () 
  {
    try
    {
      this.renderTitleBar();
      this.initActions();
      this.initialUiSettings();
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
      var navManager = applicationManager.getNavigationManager();
      var status = navManager.getCustomInfo("frmPreferencesDeviceRegistration");
      if(status.isRememberMeOn == false)
      {
        this.setDisableDeviceRegistrationUi();
      }
      else
      {
        this.setEnableDeviceRegistrationUi();
      }     
    }
    catch(ex)
    {

    }
  },

  setEnableDeviceRegistrationUi : function()
  {
    try
    {
      this.view.lblRegisterDevice2.text=kony.i18n.getLocalizedString("kony.mb.preferences.ThisDeviceIsNotYetRegisteredForMobileBankingPeriod");
      this.view.btnRegisterDevice.setVisibility(true);
      this.view.lblRegisterDevice3.setVisibility(true);        
    }
    catch(ex)
    {

    }
  },

  setDisableDeviceRegistrationUi : function()
  {
    try
    {
      this.view.lblRegisterDevice2.text=kony.i18n.getLocalizedString("kony.mb.preferences.DeviceRegistrationError");
      this.view.btnRegisterDevice.setVisibility(false);
      this.view.lblRegisterDevice3.setVisibility(false);        
    }
    catch(ex)
    {

    }    
  },

  initActions : function () 
  {
    try
    {
      var scope = this;
      this.view.customHeader.btnRight.onClick = function(){
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
      };
      this.view.customHeader.flxBack.onClick=function(){
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
      };
      this.view.btnRegisterDevice.onClick=function(){
        applicationManager.getPresentationUtility().showLoadingScreen();
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesDeviceRegSecCode");
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