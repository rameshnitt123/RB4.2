define({ 
  settingsModule: null,
  init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },
  
  preShow: function() {
	this.initActions();
	this.setDataToForm();
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  initActions: function() {
	this.initHeaderActions();
	this.visibilityButton();
	this.view.lblPrimary.text = this.getString("kony.tab.ProfileConfirmDetails.PrimaryAddress");
	this.view.btnUpdateChanges.onClick = this.onConfirmAddAddress;
	this.view.flxCheckboxPrimary.onClick = this.checkboxToggle;
  },
  
  initHeaderActions: function() {
	if (!applicationManager.getDeviceUtilManager().isIpad()) {
	  this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
	  this.view.customHeaderTablet.btnRight.onClick = this.backHandle;
	}
  },

  backNavigation: function() {
	var navigationManager = applicationManager.getNavigationManager();
	navigationManager.goBack();
  },

  backHandle: function() {
	this.getSettingsModule().presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
  },

  onConfirmAddAddress: function() {
	applicationManager.getPresentationUtility().showLoadingScreen();
	var self = this;
	this.getSettingsModule().presentationController.updateUserPreferredAddressData({"isPreferredAddress": self.getPreferredAddress()});
	
	if (this.getSettingsModule().presentationController.getUserAddressFlowType() === "add" ) {
	  this.getSettingsModule().presentationController.createProfileAddress();
	} else {
	  this.getSettingsModule().presentationController.updateProfileAddress();
	}
  },
  
  setDataToForm: function() {
	var data = this.getSettingsModule().presentationController.getUserAddressData();
	//this.view.lblValueAddressType.text = data.addressType && data.addressType.length ? data.addressType : "";
    this.view.lblValueAddressType.text = (data.addressTypeForDisplay && data.addressTypeForDisplay !== "" && data.addressTypeForDisplay !== null)?data.addressTypeForDisplay:"";
	this.view.lblValueAddressline1.text = data.addressLine1 && data.addressLine1.length ? data.addressLine1 : "";
	this.view.lblValueAddressline2.text = data.addressLine2 && data.addressLine2.length ? data.addressLine2 : "";
	this.view.lblValueState.text = data.state && data.state.length ? data.state : "";
	this.view.lblValueCity.text = data.city && data.city.length ? data.city : "";
	this.view.lblValueCountry.text = data.country && data.country.length ? data.country : "";
	this.view.lblValueZipcode.text = data.zipcode && data.zipcode.length ? data.zipcode : "";
	this.updateCheckboxes(data.isPreferredAddress);
  },
  
  updateCheckboxes: function(isPreferredAddress) {
	var preferredAddress =  Number(isPreferredAddress);
	this.view.imgCheckboxPrimary.src = preferredAddress ? "checkbox.png" : "checkboxempty.png";
	this.view.flxMarkAsPrimary.setVisibility(!preferredAddress);
	
	var flowType = this.getSettingsModule().presentationController.getUserAddressFlowType();
	if (flowType === "add" ) {
	  this.view.imgCheckboxPrimary.src = "checkboxempty.png";
	  this.view.flxMarkAsPrimary.setVisibility(true);
	}
  },
  
  getPreferredAddress: function() {
	return this.view.imgCheckboxPrimary.src === "checkbox.png" ? "1" : "0";
  },
  
  checkboxToggle: function() {
	var checkbox = this.view.imgCheckboxPrimary;
	checkbox.src = checkbox.src === "checkbox.png" ? "checkboxempty.png" : "checkbox.png";
  },
  
  getSettingsModule: function() {	
	if (!this.settingsModule) {
	  this.settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
	}
	return this.settingsModule;
  },
  
  getString: function(key) {
	return applicationManager.getPresentationUtility().getStringFromi18n(key);
  },
  
  visibilityButton: function() {
	var flow = this.getSettingsModule().presentationController.getUserAddressFlowType();
	var button = this.view.btnUpdateChanges;
	var validator = this.getAmountAddress() < 3 || flow === "edit";
	button.setVisibility(validator);
  },
  
  getAmountAddress: function() {
	var navManager = applicationManager.getNavigationManager();
	var data = navManager.getCustomInfo("frmProfilePersonalDetails");
	var count;
	
	data.forEach(function(item) {
	  if (item[0].lblHeader === "Registered Addresses") {
		count = item[1].length;
	  }
	});
	return count;
  }
});