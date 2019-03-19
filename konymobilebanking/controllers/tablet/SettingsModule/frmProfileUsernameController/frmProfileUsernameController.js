define({
  timerCounter : 0,
  init: function() {
    var FormValidator = require("FormValidatorManager");
    this.fv = new FormValidator(1);    
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.setFlowAction();
    this.setPreShowData();
    this.updateOldUserName();
    this.fv.submissionView(this.view.btnContinue);
    this.initHeaderActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  validateTheUserName: function() {
    var text = this.view.tbxUsername.text;
    this.fv.checkAndUpdateStatusForNull(0, text);
  },

  setFlowAction: function() {
    this.view.btnContinue.onClick = this.onUpdateClick;
    this.view.tbxUsername.onTextChange = this.validateTheUserName; 
  },

  setPreShowData: function() {
    this.view.tbxUsername.text = "";
    this.view.tbxUsername.setFocus(true);
  },

  updateOldUserName: function() {
    var navManager = applicationManager.getNavigationManager();
    var userName = navManager.getCustomInfo('frmProfileUsername');
    this.view.lblPreviousUsername.text = userName;
  },

  onUpdateClick: function() {
    var updatedUserName = this.view.tbxUsername.text;
    if (!updatedUserName) {
      var i18n_msg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.usernameEmptyMsg", "Please enter a valid username");
      this.bindViewError(i18n_msg);
      return;
    }
    var validationManager = applicationManager.getValidationUtilManager();
    if (!validationManager.isValidUserName(updatedUserName)) {
      var i18nMsg1 = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.OnBoarding.invalidusername", "Please enter a valid username");
      this.bindViewError(i18nMsg1);
      return;
    }
    var settings = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    var stepData = settings.presentationController.updateUserName(updatedUserName);
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClickCancel;
    }
  },

  navBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },

  onClickCancel: function() {
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
  },

  bindViewError: function(msg) {
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  }
});