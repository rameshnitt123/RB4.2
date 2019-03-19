define({ 
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
    this.view.tbxUsername.setFocus(true);
    this.view.tbxUsername.text = "";
    this.view.tbxPassword.text = "";
    this.view.tbxUsername.onTextChange = this.validation;
    this.view.tbxPassword.onTextChange = this.validation;
    this.view.btnContinue.onClick = this.onLogin;
    this.view.imgPwdVisiblityToggle.onTouchEnd = this.showHidePassword;
  },

  validation: function() {
    var username = this.view.tbxUsername.text;
    var password = this.view.tbxPassword.text;
    var button = this.view.btnContinue;
    var validator = username && password;
    button.setEnabled(!!validator);
    button.skin = !!validator ? "sknBtnBg0A78D1BorderE9FontFFSSPR36pxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
  },

  showHidePassword: function () {
    var visibility = this.view.imgPwdVisiblityToggle.src === "view.png";
    this.view.tbxPassword.secureTextEntry = !visibility;
    this.view.imgPwdVisiblityToggle.src = visibility ? "viewactive.png" : "view.png";
    this.view.forceLayout();
  },

  onLogin: function() {
    var data = {
      "username": this.view.tbxUsername.text,
      "password": this.view.tbxPassword.text
    };
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.NUOLogin(data);   
  },

  bindGenericError: function(msg) {
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  }
});