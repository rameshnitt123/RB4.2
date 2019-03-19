define({
  timerCounter:0,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    var scopeObj = this;
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeaderPersonalInfo.isVisible = true;
    }
    else{
      this.view.flxHeaderPersonalInfo.isVisible = false;
    }
    this.setDataToForm();
    var scope=this;
        this.view.customHeaderPersonalInfo.flxBack.onClick = function(){
//       scopeObj.navtoSelectProduct();
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    };
    this.view.customHeaderPersonalInfo.btnRight.onClick = function(){
      var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.onClose();
    };
    this.view.btnEditPersonalInfo.onClick = function(){
      var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      NUOMod.presentationController.commonFunctionForNavigation("frmOBEditFirstLastName");  
    };
    this.view.btnContinuePersonalInfo.onClick = function(){     
      var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      var newUserJSON = NUOMod.presentationController.getUserData();
      var dob = (newUserJSON.dateOfBirth && newUserJSON.dateOfBirth !== "" && newUserJSON.dateOfBirth !== null)?newUserJSON.dateOfBirth.split("-"):"";
      var utilManager = applicationManager.getValidationUtilManager();
      var dobToBeValidated=dob[1] + "/" + dob[2] + "/" + dob[0];
      var isDOBValid = utilManager.isDOBValid(dobToBeValidated);
      var isAgeValid = utilManager.isAgeValid(dobToBeValidated);
      if (isDOBValid && isAgeValid) {
        NUOMod.presentationController.commonFunctionForNavigation("frmOBMaritialStatus");
      } else {
        scope.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validDOB"));
      }
    };
    this.view.btnChangeIDPersonalInfo.onClick = function(){ 
       var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
       NUOMod.presentationController.initializeSDK();
      //alert("toDoSelectDocuments");
    };
	var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  navtoSelectProduct : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBSelectProducts");  
  },
  bindGenericError : function(msg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },
  setDataToForm:function(){
    var scope = this;
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var newUserJSON = NUOMod.presentationController.getUserData();
    this.view.lblFirstNameValue.text = (newUserJSON.userfirstname && newUserJSON.userfirstname !== "" && newUserJSON.userfirstname !== null)?newUserJSON.userfirstname:"";
    this.view.lblLastNameValue.text = (newUserJSON.userlastname && newUserJSON.userlastname !== "" && newUserJSON.userlastname !== null)?newUserJSON.userlastname:"";
    this.view.lblDateOfBirthValue.text= (newUserJSON.dateOfBirth && newUserJSON.dateOfBirth !== "" && newUserJSON.dateOfBirth !== null)?newUserJSON.dateOfBirth:"";
    this.view.lblGenderValue.text = (newUserJSON.gender && newUserJSON.gender !== "" && newUserJSON.gender !== null)?newUserJSON.gender:"";
    this.view.lblAddressLine1.text = (newUserJSON.addressLine1 && newUserJSON.addressLine1 !== "" && newUserJSON.addressLine1 !== null)?newUserJSON.addressLine1:this.view.lblAddressLine1.setVisibility(false);
    this.view.lblAddressLine2.text = (newUserJSON.addressLine2 && newUserJSON.addressLine2 !== "" && newUserJSON.addressLine2 !== null)?newUserJSON.addressLine2:"";    
    this.view.lblAddressCity.text = (newUserJSON.city && newUserJSON.city !== "" && newUserJSON.city !== null)?newUserJSON.city:"";
    this.view.lblAddressState.text = (newUserJSON.state && newUserJSON.state !== "" && newUserJSON.state !== null)?newUserJSON.state:"";
    this.view.lblAddressZipCode.text = (newUserJSON.zipcode && newUserJSON.zipcode !== "" && newUserJSON.zipcode !== null)?newUserJSON.zipcode:"";
    this.view.lblAddressCountry.text = (newUserJSON.country && newUserJSON.country !== "" && newUserJSON.country !== null)?newUserJSON.country:"";
  }
});