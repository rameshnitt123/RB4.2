define({
  timerCounter: 0,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
 },
  preShow: function () {
    this.view.txtNewPassword.setFocus(true);
    this.view.flxPopup.setVisibility(false);
    this.initActions();
    this.renderTitleBar();
    this.handleData();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.view.txtNewPassword.setFocus(true);
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  renderTitleBar :function(){
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if(!isIphone){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
  },
  handleData : function(){
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
	var forgotObj = authModule.presentationController.getForgotObjectForView();
    if(!forgotObj.userlastname)
    {
      this.view.txtNewPassword.text = "";
      this.view.btnUpdatePassword.skin = "sknBtnOnBoardingInactive";
      this.view.btnUpdatePassword.setEnabled(false);
    }
  },
    initActions:function()
  {  
     this.view.btnUpdatePassword.onClick=this.validateUserName;
     this.view.customHeader.flxBack.onClick=this.goBack;
     this.view.customHeader.btnRight.onClick = this.onCancel;
     this.view.txtNewPassword.onTextChange = this.onLastNameTextChange;
  },
   
  onLastNameTextChange : function (){
    if(this.view.txtNewPassword.text === "")
      {
    this.view.btnUpdatePassword.skin = "sknBtnOnBoardingInactive";
    this.view.btnUpdatePassword.setEnabled(false);
      }
    else
      {
       this.view.btnUpdatePassword.skin = "sknBtn0095e426pxEnabled";
       this.view.btnUpdatePassword.setEnabled(true);
      }
  },
 validateUserName:function()
  {
    var lastName = this.view.txtNewPassword.text;
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
	authModule.presentationController.navigateToSSN(lastName);   
  },
  bindViewError : function(msg)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  },
   goBack:function()
  {
    var ForgotPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    ForgotPC.presentationController.commonFunctionForNavigation("frmLogin");
  },
  onCancel : function()
  {
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authModule.presentationController.navigateToLogin();    
  }
  
});