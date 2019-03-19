define({ 
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  callOnPreshow:function(){     
    this.renderTitleBar();
    this.view.customHeader.btnRight.setVisibility(true);
    this.initActions();
    var navManager = applicationManager.getNavigationManager();
    var flags = navManager.getCustomInfo("frmDevRegFaceIdSetAsDefault");
    if(flags){
      if((flags.popUpMsg!==null)&&(flags.popUpMsg!==""))
      {
        var scopeObj=this;
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj,flags.popUpMsg);
      }
      flags.popUpMsg=null;
      navManager.setCustomInfo("frmDevRegFaceIdSetAsDefault",flags);
    }
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  initActions:function(){
    this.view.btnSetAsDefault.onClick = this.btnSetAsDefaultOnClick;
    this.view.customHeader.btnRight.onClick = this.btnSkipOnClick;
    this.view.customHeader.flxBack.onClick = this.imgbackAction;
  },
  btnSetAsDefaultOnClick:function()
  {
    var navManager = applicationManager.getNavigationManager();
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
    authMod.presentationController.setFaceIdflag(true);
    authMod.presentationController.setDefaultMode("faceid");             
    var data = {loginMode:"faceid"};
    navManager.setCustomInfo("frmDefaultLogin",data);
    authMod.presentationController.commonFunctionForNavigation("frmDefaultLogin");
  },
  btnSkipOnClick:function()
  {
    applicationManager.getPresentationUtility().showLoadingScreen(); 
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.defaultLoginToAccounts();
  },
  imgbackAction : function(){
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack(); 
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