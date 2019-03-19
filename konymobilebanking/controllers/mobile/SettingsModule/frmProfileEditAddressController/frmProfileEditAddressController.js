define({
  init : function(){
    var FormValidator = require("FormValidatorManager")
	this.fv = new FormValidator(5);
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    this.setPreshowData();
    this.setFlowActions();
    this.setDataToForm();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  setPreshowData : function(){
    if(kony.os.deviceInfo().name === "iPhone"){
      this.view.flxHeader.isVisible = false;
    }else{
      this.view.flxHeader.isVisible = true;
    }
    this.fv.submissionView(this.view.btnContinueResidentialAddress);  
    this.view.btnDeleteAddress.setVisibility(false);
  },
  setFlowActions : function(){
    this.view.customHeader.flxBack.onClick = this.onBack;
    this.view.customHeader.btnRight.onClick = this.onCancel;
    this.view.txtResidentialAddressLineOne.onTextChange = this.validateAddressLineOne;
    this.view.txtResidentialAddressCity.onTextChange = this.validateCity;
    this.view.txtResidentialAddressState.onTextChange = this.validateState;
    this.view.txtResidentialAddressZipCode.onTextChange = this.validateZipCode;
    this.view.txtCountry.onTextChange = this.validateCountry;
    this.view.btnContinueResidentialAddress.onClick = this.submitEditedAddress;
    this.view.btnDeleteAddress.onClick = this.deletedAddress;
  },
  onBack : function () {
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  onCancel : function(){
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
  },
  validateAddressLineOne :function(){
    var text = this.view.txtResidentialAddressLineOne.text;
    this.fv.checkAndUpdateStatusForNull(0, text);
  },
  validateCity:function(){
    var text = this.view.txtResidentialAddressCity.text;
    this.fv.checkAndUpdateStatusForNull(1, text);
  },
  validateState : function(){
    var text = this.view.txtResidentialAddressState.text;
    this.fv.checkAndUpdateStatusForNull(2, text);
  },
  validateZipCode : function(){
    var text = this.view.txtResidentialAddressZipCode.text;
    this.fv.checkAndUpdateStatusForNull(3, text);
  },
  validateCountry : function(){
    var text = this.view.txtCountry.text;
    this.fv.checkAndUpdateStatusForNull(4, text);
  },
  validateFormUI : function(){
    var formValues =[];
    formValues.push(this.view.txtResidentialAddressLineOne.text);
    formValues.push(this.view.txtResidentialAddressCity.text);
    formValues.push(this.view.txtResidentialAddressState.text);
    formValues.push(this.view.txtResidentialAddressZipCode.text);
    formValues.push(this.view.txtCountry.text);
    this.fv.preshowCheck(formValues);
  },
  deletedAddress : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var addData = navManager.getCustomInfo("frmProfileEditAddress");
    var data = {
      "addressId" : addData.addressId
    };
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.deleteProfileAddress(data);
  },
  submitEditedAddress : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var data = {
      "addressLine1" : this.view.txtResidentialAddressLineOne.text,
      "addressLine2" : this.view.txtResidentialAddressLineTwo.text,
      "state" : this.view.txtResidentialAddressState.text,
      "city" : this.view.txtResidentialAddressCity.text,
      "country" : this.view.txtCountry.text,
      "zipcode" : this.view.txtResidentialAddressZipCode.text
    };
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.updateUserAddressData(data);
    settingsMode.presentationController.commonFunctionForNavigation("frmProfileAdressType");
  },
  setDataToForm : function(){
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    var addressData = settingsMode.presentationController.getUserAddressData();
    this.view.txtResidentialAddressLineOne.text = (addressData.addressLine1 && addressData.addressLine1 !== "" && addressData.addressLine1 !== null)?addressData.addressLine1:"";
    this.view.txtResidentialAddressLineTwo.text = (addressData.addressLine2 && addressData.addressLine2 !== "" && addressData.addressLine2 !== null)?addressData.addressLine2:"";
    this.view.txtResidentialAddressState.text = (addressData.state && addressData.state !== "" && addressData.state !== null)?addressData.state:"";
    this.view.txtResidentialAddressZipCode.text = (addressData.zipcode && addressData.zipcode !== "" && addressData.zipcode !== null)?addressData.zipcode:"";
    this.view.txtResidentialAddressCity.text = (addressData.city && addressData.city !== "" && addressData.city !== null)?addressData.city:"";
    this.view.txtCountry.text = (addressData.country && addressData.country !== "" && addressData.country !== null)?addressData.country:"";
    this.validateFormUI();
  }
});