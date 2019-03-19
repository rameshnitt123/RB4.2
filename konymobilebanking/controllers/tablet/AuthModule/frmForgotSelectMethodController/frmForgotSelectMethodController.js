define({
  timerCounter: 0,
  onNavigate: function (obj) {

  },
 init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
 },
  callOnPreShow: function () {
    this.view.flxPopup.setVisibility(false);
    this.setUserName();
    this.initActions();
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
    this.view.flxSelectCVV.onClick = this.onSelectCVV;
    this.view.flxSelectSecurityCode.onClick = this.onSelectSecurityCode;
    this.view.customHeader.flxBack.onClick = this.goBack;
    this.view.customHeader.btnRight.onClick = this.onCancel;
  },

  onSelectCVV : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authModule.presentationController.navigateToCVV();
  },
  onSelectSecurityCode : function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authModule.presentationController.requestOTP();
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
  setUserName:function()
  {
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var forgotObj = authModule.presentationController.getForgotObjectForView();
    var userName = forgotObj.userName;
    this.view.lblUserName.text="Hi! "+userName;
  },
   bindGenericError: function (errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  }

});