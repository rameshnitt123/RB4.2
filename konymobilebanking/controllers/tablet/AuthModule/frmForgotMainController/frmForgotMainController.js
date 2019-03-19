define({ 
  onNavigate: function (obj) {

  },
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  callOnPreShow: function () {
    this.view.flxPopup.setVisibility(false);
    this.initActions();
    this.setUserName();
    this.renderTitleBar();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
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
  initActions: function(){
    this.view.customHeader.btnRight.onClick = this.onCancel;
    this.view.customHeader.flxBack.onClick = this.goBack;
    this.view.flxSelectCVV.onClick = this.loginWithUsername;
    this.view.flxSelectSecurityCode.onClick = this.navigateToResetPassword; 
  },
  setUserName:function()
  {
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var forgotObj = authModule.presentationController.getForgotObjectForView();
    var userName = (forgotObj.userName === undefined || forgotObj.userName === "" || forgotObj.userName === null)? "konybankingdev" : userName;
    this.view.rtxForgotInfo.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.Forgot.WeFoundYou")+": "+userName;
    this.view.rtxSelectCVV.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.forgot.loginas")+" "+userName;
  },
  goBack:function()
  {
    var navManger = applicationManager.getNavigationManager();
    navManger.goBack();
  },
  onCancel : function()
  {
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authModule.presentationController.navigateToLogin();    
  },
  loginWithUsername : function(){
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var forgotObj = authModule.presentationController.getForgotObjectForView();
    var userName = (forgotObj.userName === undefined || forgotObj.userName === "" || forgotObj.userName === null)? "konybankingdev" : userName;
    authModule.presentationController.navigateToLogin(userName);    
  },
  navigateToResetPassword : function(){ 
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authModule.presentationController.commonFunctionForNavigation("frmForgotSelectMethod");    
  }
});