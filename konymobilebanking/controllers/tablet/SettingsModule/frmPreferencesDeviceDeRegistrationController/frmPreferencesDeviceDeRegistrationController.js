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
      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
      applicationManager.getPresentationUtility().dismissLoadingScreen();        
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
      this.view.btnDeregisterDevice.onClick = this.btnDeregisterDeviceOnClick;
      this.view.customHeader.flxBack.onClick=function(){
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack(); 
      };        
    }
    catch(ex)
    {

    }    
  },

  btnDeregisterDeviceOnClick : function()
  {
    try
    {
      var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsMode.presentationController.deRegisterDevice(this);        
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