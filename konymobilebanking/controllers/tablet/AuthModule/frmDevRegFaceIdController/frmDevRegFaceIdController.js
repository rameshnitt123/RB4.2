define({ 
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  callOnPreshow:function(){
    this.view.customHeader.btnRight.setVisibility(true); 
    this.initActions();
    this.renderTitleBar();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  initActions:function()
  {
    this.view.btnContinue.onClick = this.btnContinueOnClick;
    this.view.customHeader.btnRight.onClick = this.btnSkipOnClick;
    this.view.customHeader.flxBack.onClick = this.imgbackAction;
  },
  btnContinueOnClick:function()
  {
    var navManger = applicationManager.getNavigationManager();
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    applicationManager.getPresentationUtility().showLoadingScreen();
    authMod.presentationController.FaceAuthEnroll(this);

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