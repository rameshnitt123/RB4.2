define({ 
  settingsModule: null,
  init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function () {
	this.initActions();
	this.setDataToForm();
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
	this.initHeaderActions();
	this.clearForm();
	this.validateForm();
	this.view.flxSearchMain.txtSearch.text = "";
	this.view.customSearchbox.tbxSearch.text = "";
	this.view.flxSearchAddress.setVisibility(false);
	this.setWidgetHandles();
  },

  initHeaderActions: function() {
	if (!applicationManager.getDeviceUtilManager().isIpad()) {
	  this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
	  this.view.customHeaderTablet.btnRight.onClick = this.backHandle;
	}
  },

  setWidgetHandles: function() {
	this.view.flxSearchMain.txtSearch.onTextChange = this.switchSearchBox;
	this.view.customSearchbox.btnCancel.onClick = this.cancelSearch;
	this.view.segAddresses.onRowClick = this.setSearchedAddress;
	this.view.txtResidentialAddressLineOne.onTextChange = this.validateForm;
	this.view.txtResidentialAddressCity.onTextChange = this.validateForm;
	this.view.txtResidentialAddressState.onTextChange = this.validateForm;
	this.view.txtResidentialAddressZipCode.onTextChange = this.validateForm;
	this.view.txtCountry.onTextChange = this.validateForm;
	this.view.btnContinueResidentialAddress.onClick = this.submitEditedAddress;
  },

  backNavigation: function() {
	var navigationManager = applicationManager.getNavigationManager();
	navigationManager.goBack();
  },

  backHandle: function() {
	this.getSettingsModule().presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
  },

  submitEditedAddress: function() {
	applicationManager.getPresentationUtility().showLoadingScreen();
	var data = {
	  "addressLine1": this.view.txtResidentialAddressLineOne.text,
	  "addressLine2": this.view.txtResidentialAddressLineTwo.text,
	  "state": this.view.txtResidentialAddressState.text,
	  "city": this.view.txtResidentialAddressCity.text,
	  "country": this.view.txtCountry.text,
	  "zipcode": this.view.txtResidentialAddressZipCode.text
	};
	this.getSettingsModule().presentationController.updateUserAddressData(data);
	this.getSettingsModule().presentationController.commonFunctionForNavigation("frmProfileAdressType");
	this.clearForm();
  },

  setDataToForm: function() {
	var data = this.getSettingsModule().presentationController.getUserAddressData();
	this.view.txtResidentialAddressLineOne.text = data.addressLine1 && data.addressLine1.length ? data.addressLine1 : "";
	this.view.txtResidentialAddressLineTwo.text = data.addressLine2 && data.addressLine2.length ? data.addressLine2 : "";
	this.view.txtResidentialAddressState.text = data.state && data.state.length ? data.state : "";
	this.view.txtResidentialAddressZipCode.text = data.zipcode && data.zipcode.length ? data.zipcode : "";
	this.view.txtResidentialAddressCity.text = data.city && data.city.length ? data.city : "";
	this.view.txtCountry.text = data.country && data.country ? data.country : "";
	this.validateForm();
  },

  switchSearchBox: function() {
	this.view.customSearchbox.tbxSearch.setFocus(true);
	this.view.customSearchbox.tbxSearch.text = "";
	this.view.flxSearchAddress.setVisibility(true);
	this.view.segAddresses.removeAll();
	this.onSearchingAddress();
  },

  onSearchingAddress: function() {
	this.view.customSearchbox.tbxSearch.text = this.view.flxSearchMain.txtSearch.text;
	var searchText = this.view.customSearchbox.tbxSearch.text;
    var query = {};
   	query.text = searchText;
	this.getSettingsModule().presentationController.addressSearchEditFlow(query);
  },

  cancelSearch: function() {
	this.view.flxSearchAddress.setVisibility(false);
	this.view.flxSearchMain.txtSearch.text = "";
	this.view.customSearchbox.tbxSearch.text = "";
	this.view.customSearchbox.tbxSearch.setFocus(false);
	this.view.flxSearchMain.txtSearch.text = "";
	this.view.segAddresses.removeAll();
  },
	
  //Sets address data from backesnd to appropriate fields on form
  setSearchedAddress: function() {
	this.view.flxSearchMain.txtSearch.text = "";
	var segment = this.view.segAddresses;
	var data = segment.data[segment.selectedRowIndex[1]].formattedAddress;
	var address = data.split(",");
	address.reverse();
	this.view.txtCountry.text = address[0];
	this.view.txtResidentialAddressState.text = address[1];
	this.view.txtResidentialAddressCity.text = address[2];
	this.view.txtResidentialAddressLineTwo.text = address[3];
	this.view.txtResidentialAddressZipCode.text = "";

	if (address[4]) {
	  this.view.txtResidentialAddressLineOne.text = address[4]; 
	} else if(address[5]) {
	  var temp = address[5].concat(",");
	  this.view.txtResidentialAddressLineOne.text = temp.concat(address[4]); 
	}
	this.view.flxSearchAddress.setVisibility(false);
 	this.validateForm();
  },

  setSearchData: function(data) {
	if(data && data.length) {
	  this.view.segAddresses.widgetDataMap = {
		"lblAddress": "formattedAddress"
	  };
	  this.view.segAddresses.setData(data);
	}
  },
  
  validateForm: function() {
	var button = this.view.btnContinueResidentialAddress;
	var firstLine = this.view.txtResidentialAddressLineOne.text;
	var city = this.view.txtResidentialAddressCity.text;
	var state = this.view.txtResidentialAddressState.text;
	var zipCode = this.view.txtResidentialAddressZipCode.text;
	var country = this.view.txtCountry.text;
	var validator = firstLine && city && state && zipCode && country;
	button.setEnabled(!!validator);
	button.skin = validator ? "sknBtnBg0A78D1BorderE9FontFFSSPR36pxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
  },
  
  clearForm: function() {
	this.view.txtResidentialAddressLineOne.text = "";
	this.view.txtResidentialAddressLineTwo.text = "";
	this.view.txtResidentialAddressCity.text = "";
	this.view.txtResidentialAddressState.text = "";
	this.view.txtResidentialAddressZipCode.text = "";
	this.view.txtCountry.text = "";
  },

  getSettingsModule: function() {	
	if (!this.settingsModule) {
	  this.settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
	}
	return this.settingsModule;
  }
});