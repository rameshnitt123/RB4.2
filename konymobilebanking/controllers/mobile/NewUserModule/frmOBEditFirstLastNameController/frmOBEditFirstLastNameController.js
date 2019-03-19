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
    var scope = this;
     if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var NUOData = NUOMod.presentationController.getUserData();
    this.assignDataToForm(NUOData);
    this.validateFormUI();
    this.view.customHeader.flxBack.onClick = this.onBack;
    this.view.customHeader.btnRight.onClick = this.onClose;
    this.view.txtFirstName.onTextChange = this.validateFirstName;
    this.view.txtLastName.onTextChange = this.validateLastName;
    this.view.btnContinueEnterPersonalInfo.onClick = this.submitAndNavigate;
	var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onBack : function(){
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();  
  },
  onClose : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.onClose();
  },
  validateFirstName : function(){
    var text = this.view.txtFirstName.text;
    this.fv.checkAndUpdateStatusForNull(0, text);
  },
  validateLastName : function(){
    var text = this.view.txtLastName.text;
    this.fv.checkAndUpdateStatusForNull(1, text);
  },
  validateFormUI : function(){
    var formValues =[];
    formValues.push(this.view.txtFirstName.text);
    formValues.push(this.view.txtLastName.text);
    this.fv.submissionView(this.view.btnContinueEnterPersonalInfo);
    this.fv.preshowCheck(formValues);
  },
  submitAndNavigate:function()
  {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var data = {
      "userfirstname" : this.view.txtFirstName.text,
      "userlastname" : this.view.txtLastName.text
    };
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.updateNewUserModel(data);   
    NUOMod.presentationController.commonFunctionForNavigation("frmOBDOB");    
  },
  assignDataToForm : function(newUserJSON){
    this.view.txtFirstName.text = (newUserJSON.userfirstname && newUserJSON.userfirstname !== "" && newUserJSON.userfirstname !== null)?newUserJSON.userfirstname:"";
    this.view.txtLastName.text = (newUserJSON.userlastname && newUserJSON.userlastname !== "" && newUserJSON.userlastname !== null)?newUserJSON.userlastname:"";
  }
});