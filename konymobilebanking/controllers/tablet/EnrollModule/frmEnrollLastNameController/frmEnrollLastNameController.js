define({
  
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  
  frmEnrollLAstNamePreShow: function() {
    this.setFlowAction();
    this.setPreShowData();
    this.initHeaderActions();
    this.view.tbxLastName.text = "";
    this.view.tbxLastName.setFocus(true);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  
  setFlowAction: function() {
    var self = this; 
    this.view.tbxLastName.onTextChange = function() {
      var text = self.view.tbxLastName.text;
      var isInputValid = text.length > 0;
      self.changeButtonState(isInputValid);
    };
    
    this.view.btnContinue.onClick = function() {
      var lastName = self.view.tbxLastName.text;
      var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
      enrollMod.presentationController.navigateToFrmEnrollDOB(lastName);
    };
  },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClickCancel;
    }
  },
  
  setPreShowData: function() {
    this.view.tbxLastName.setFocus(true);
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    var userLastName = enrollMod.presentationController.getEnrollLastName();
    var isUserLastNameValid = userLastName !== null && userLastName !== undefined  && userLastName.length > 0;
    this.view.tbxLastName.text = isUserLastNameValid ? userLastName : "";
    this.changeButtonState(isUserLastNameValid);
  },
  
  onClickCancel: function() {
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.resetEnrollObj();
  },
  
  navBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },
  
  changeButtonState: function(isEnabled) {
    this.view.btnContinue.skin = isEnabled ? "sknBtnRnd4pxffffffSSPReg36pxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
    this.view.btnContinue.setEnabled(isEnabled);
  }
});