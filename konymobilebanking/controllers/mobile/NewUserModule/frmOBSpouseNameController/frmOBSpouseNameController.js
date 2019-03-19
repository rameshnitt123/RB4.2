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
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var NUOData = NUOMod.presentationController.getUserData();
    this.assignDataToForm(NUOData);
    this.validateFormUI();
    this.view.btnContinuePersonalInfo.onClick = this.validateAndNavigate;
    this.view.customHeaderPersonalInfo.flxBack.onClick = this.onBack;
    this.view.customHeaderPersonalInfo.btnRight.onClick = this.onClose;
    this.view.txtSpouseFirstName.onTextChange = this.validateSpouseFirstName;
    this.view.txtSpouseLastName.onTextChange = this.validateSpouseLastName;
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeaderPersonalInfo.isVisible = true;
    }
    else{
      this.view.flxHeaderPersonalInfo.isVisible = false;
    }
	var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  validateSpouseFirstName : function(){
    var text = this.view.txtSpouseFirstName.text;
    this.fv.checkAndUpdateStatusForNull(0, text);
  },
  validateSpouseLastName : function(){
    var text = this.view.txtSpouseLastName.text;
    this.fv.checkAndUpdateStatusForNull(1, text);
  },
  onBack : function(){
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();  
  },
  onClose : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.onClose();
  },
  validateFormUI : function(){
    var formValues =[];
    formValues.push(this.view.txtSpouseFirstName.text);
    formValues.push(this.view.txtSpouseLastName.text);
    this.fv.submissionView(this.view.btnContinuePersonalInfo);
    this.fv.preshowCheck(formValues);
  },
  validateAndNavigate: function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var data = {
      "spouseFirstName" : this.view.txtSpouseFirstName.text,
      "spouseLastName" : this.view.txtSpouseLastName.text
    };
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.updateNewUserModel(data); 
    NUOMod.presentationController.commonFunctionForNavigation("frmOBDependents");
  },
  assignDataToForm : function(newUserJSON){
    this.view.txtSpouseFirstName.text = (newUserJSON.spouseFirstName && newUserJSON.spouseFirstName !== "" && newUserJSON.spouseFirstName !== null)?newUserJSON.spouseFirstName:"";
    this.view.txtSpouseLastName.text = (newUserJSON.spouseLastName && newUserJSON.spouseLastName !== "" && newUserJSON.spouseLastName !== null)?newUserJSON.spouseLastName:"";
  }
});