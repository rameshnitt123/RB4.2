define({
  timerCounter: 0,
  init : function(){
    var FormValidator = require("FormValidatorManager")
	this.fv = new FormValidator(2);
	var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    this.fv.submissionView(this.view.btnLogIn);
    this.view.tbxUsername.setFocus(true);
    this.view.flxPopup.setVisibility(false);
    this.view.tbxUsername.text = "";
    this.view.tbxPassword.text = "";
    this.view.tbxUsername.onTextChange = this.validateUsername;
    this.view.tbxPassword.onTextChange = this.validatePassword;
    this.view.btnCancel.onClick = this.onCancel;
    this.view.btnLogIn.onClick = this.onLogin;
    this.view.imgPwdVisiblityToggle.onTouchEnd = this.maskUnmaskText;
	var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  validateUsername : function(){
    var text = this.view.tbxUsername.text;
    this.fv.checkAndUpdateStatusForNull(0, text);
  },
  validatePassword : function(){
    var text = this.view.tbxPassword.text;
    this.fv.checkAndUpdateStatusForNull(1, text);
  },
  onCancel : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmLogin");    
  },
  maskUnmaskText : function () {
      if (this.view.imgPwdVisiblityToggle.src === "viewactive.png") {
        this.view.tbxPassword.secureTextEntry = false;
        this.view.imgPwdVisiblityToggle.src = "viewicon.png";
        this.view.forceLayout();
      } else {
        this.view.tbxPassword.secureTextEntry = true;
        this.view.imgPwdVisiblityToggle.src = "viewactive.png";
        this.view.forceLayout();
      }
    },
  onLogin:function()
  {
    var data = {
      "username" : this.view.tbxUsername.text,
      "password" : this.view.tbxPassword.text
    };
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.NUOLogin(data, this);   
  },
  bindGenericError : function(msg)
  {
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  },
});