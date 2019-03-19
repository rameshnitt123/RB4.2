define({
  init:function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  callOnPreShow : function()
  {
    this.renderTitleBar();
    this.initActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen(); 
  },
  initActions : function()
  {
    this.view.customHeader.btnRight.onClick = this.skipAction;
    this.view.customHeader.flxBack.onClick = this.callOnClickOfFlxBack;
    this.view.btnSetAsDefault.onClick = this.goToDefaultLogin;
  },
  showPopUpMsg : function()
   {
      var navManager = applicationManager.getNavigationManager(); 
      var msgData = navManager.getCustomInfo("frmDevRegPinConfirmation");
      if((msgData.popUpMsg!==null)&&(msgData.popUpMsg!==""))
      {
         var scopeObj=this;
         applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj,msgData.popUpMsg);
         
      }
     msgData.popUpMsg="";
	 navManager.setCustomInfo("frmDevRegPinConfirmation",msgData);
    },
   
   goToDefaultLogin : function()
  {
     var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
     var navManager = applicationManager.getNavigationManager();
     authMod.presentationController.setPinflag(true);
     authMod.presentationController.setDefaultMode("pin");
     var data = {loginMode:"pin"};
     navManager.setCustomInfo("frmDefaultLogin",data);
     authMod.presentationController.commonFunctionForNavigation("frmDefaultLogin");
  },
  skipAction : function(){
  	applicationManager.getPresentationUtility().showLoadingScreen();
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
	authMode.presentationController.defaultLoginToAccounts();
  },
  callOnClickOfFlxBack : function()
  {
    var navigationManager=applicationManager.getNavigationManager();    
    navigationManager.goBack();   
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