define({

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function () { 
    this.setDataToForm();
    this.initActions();
    this.initHeaderActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
    this.view.btnEditPersonalInfo.onClick = this.changePersonalInfo;
    this.view.btnContinuePersonalInfo.onClick = this.confirmPersonalInfo;
    this.view.btnChangeIDPersonalInfo.onClick = this.changePersonalId; 	  
  }, 
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.flxHeader.btnRight.onClick = this.handleCancelAction;
    }
  },

  backNavigation: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();  
  },

  handleCancelAction: function() {
    var newUserModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    newUserModule.presentationController.onClose();
  },

  changePersonalInfo: function() {
    var newUserModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    newUserModule.presentationController.commonFunctionForNavigation("frmOBManuallyPersonalInfo");   
  },

  confirmPersonalInfo: function() {
    var newUserModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var newUserJSON = newUserModule.presentationController.getUserData();
    var dob = (newUserJSON.dateOfBirth && newUserJSON.dateOfBirth !== "" && newUserJSON.dateOfBirth !== null) ? 
        newUserJSON.dateOfBirth.split("-") : "";
    var utilManager = applicationManager.getValidationUtilManager();
    var dobToBeValidated = dob[1] + "/" + dob[2] + "/" + dob[0];
    var isDOBValid = utilManager.isDOBValid(dobToBeValidated);
    var isAgeValid = utilManager.isAgeValid(dobToBeValidated);
    newUserModule.presentationController.commonFunctionForNavigation("frmOBManuallyPersonalInfo"); 
  },

  changePersonalId: function() {
    var newUserModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    newUserModule.presentationController.initializeSDK();
  },

  bindGenericError: function(msg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },

  setDataToForm: function() {
    var newUserModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var newUserJSON = newUserModule.presentationController.getUserData();
    this.view.lblFirstNameValue.text = (newUserJSON.userfirstname) ? newUserJSON.userfirstname : "";
    this.view.lblLastNameValue.text = (newUserJSON.userlastname)? newUserJSON.userlastname : "";
    this.view.lblDateOfBirthValue.text= (newUserJSON.dateOfBirth) ? newUserJSON.dateOfBirth : "";
    this.view.lblGenderValue.text = (newUserJSON.gender) ? newUserJSON.gender : "";
    this.view.lblAddressLine1.text = (newUserJSON.addressLine1) ? newUserJSON.addressLine1 : this.view.lblAddressLine1.setVisibility(false);
    this.view.lblAddressLine2.text = (newUserJSON.addressLine2) ? newUserJSON.addressLine2 : "";    
    this.view.lblAddressCity.text = (newUserJSON.city) ? newUserJSON.city : "";
    this.view.lblAddressState.text = (newUserJSON.state) ? newUserJSON.state : "";
    this.view.lblAddressZipCode.text = (newUserJSON.zipcode) ? newUserJSON.zipcode : "";
    this.view.lblAddressCountry.text = (newUserJSON.country) ? newUserJSON.country : "";
  }
});