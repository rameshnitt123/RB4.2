define({
  init:function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  callOnPreshow : function()
  {
    this.renderTitleBar();
    this.initActions();

  },
  initActions : function()
  {
    this.view.btnSetAsDefault.onClick = this.goToDefaultLogin;
    this.view.customHeader.btnRight.onClick = this.skipAction;
    this.view.customHeader.flxBack.onClick = this.backNavigation;
  },
  
  backNavigation : function()
  {
    var navMan=applicationManager.getNavigationManager();    
    navMan.goBack();     
  },
  
  goToDefaultLogin : function()
  {
    var navManager = applicationManager.getNavigationManager();
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMod.presentationController.setTouchIdflag(true);
    authMod.presentationController.setDefaultMode("touchid");
    var data = {loginMode:"touchid"};
    navManager.setCustomInfo("frmDefaultLogin",data);
    authMod.presentationController.commonFunctionForNavigation("frmDefaultLogin");
  },
  skipAction : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.defaultLoginToAccounts();
  },
  renderTitleBar :function(){
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIpad = deviceUtilManager.isIpad();
    if(!isIpad){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }    
  },
});