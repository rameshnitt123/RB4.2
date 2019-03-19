define({ 
  settingsModule: null,
  init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
	this.initActions();
	this.popupListener();
	this.setDataToSegment();
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  initActions: function() {
	this.initHeaderActions();
	this.view.segAddress.onRowClick = this.editAddress;
    this.view.btnContinue.onClick = this.onAddAddress;
  },
  
  initHeaderActions: function() {
	if (!this.isIpad()) {
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

  popupListener: function() {
	var navManager = applicationManager.getNavigationManager();
	var data = navManager.getCustomInfo("frmProfileEditAddressList1");
	if (data && data.message.length) {
	  this.showPopup(data.message);
	  data.message = "";
	  navManager.setCustomInfo("frmProfileEditAddressList1", data);
	}
  },
  
  showPopup: function (value) {
	var self = this;
	switch (value) {
	  case "AdressAdded":
		this.showSuccessPopUp(self.getString("kony.mb.pm.successfullyaddedaddress"));
		break;
	  case "AddressUpdated":	
		this.showSuccessPopUp(self.getString("kony.mb.pm.successfullyupdatedaddress"));
		break;
	  case "AddressDeleted":
		this.showSuccessPopUp(self.getString("kony.mb.pm.successfullydeletedaddress"));
		break;
	  default:
		this.showErrorMessage(self.getString("kony.mb.An.Internal.Error.occured.Please.try.after.sometime."));
		break;
	}
  },

  editAddress: function() {
	var userObj = applicationManager.getUserPreferencesManager();
	var addressObj = userObj.getUserAllAddresses();
	var selectedRowIndex = this.view.segAddress.selectedIndex[1];
	var addressData = addressObj[selectedRowIndex];
	addressData.isPreferredAddress = selectedRowIndex === 0 ? "1" : "0";
	this.getSettingsModule().presentationController.updateUserAddressDataOnEdit(addressData);
	this.getSettingsModule().presentationController.updateUserAddressFlowType("edit");
	this.getSettingsModule().presentationController.commonFunctionForNavigation("frmProfileEditAddress");
  },
   
  setDataToSegment: function() {	
	var self = this;
	var navManager = applicationManager.getNavigationManager();
	var data = navManager.getCustomInfo('frmProfileEditAddressList');
	this.view.segAddress.widgetDataMap = this.getDataMap();

	if (data && data.length) {
	  data.forEach(function(items, index) {	   
		items.template = "flxMain";
		items.lblDelete = self.getString("kony.mb.common.Delete");
		items.imgDelete = "deleteicon.png";
		items.flxDelete = {"onClick": self.onSwipeDeleteClick.bind(this, index)};
	  }); 
	  this.view.lblUSer.text = this.getString("kony.mb.ProfileEditAddressList.USer");
	  this.view.segAddress.setVisibility(true);
	  this.view.segAddress.setData(data);
	} else {
	  this.view.segAddress.setVisibility(false);
	  this.view.lblUSer.text = this.getString("i18n.maps.NoResultsFound");
	}
    if(data.length>=3)
      this.view.btnContinue.setVisibility(false);
    else
      this.view.btnContinue.setVisibility(true);
  },
  
  getDataMap: function() {
	return {
	  "flxDelete": "flxDelete",
	  "lblDetail": "lblDetail",
	  "lblDetailValue": "lblDetailValue",
	  "lblDelete": "lblDelete",
	  "imgDelete": "imgDelete"
	};
  },
  
  onSwipeDeleteClick: function(index) {
	var self = this;
	this.view.flxPopupDelete.setVisibility(true);
	this.view.flxYes.onClick = this.deletedAddress.bind(this, index);
	this.view.flxNo.onClick = function() {
	  self.setDataToSegment();
	  self.view.flxPopupDelete.setVisibility(false);
	};
  },
  
  deletedAddress: function(index) {
	this.view.flxPopupDelete.setVisibility(false);
	applicationManager.getPresentationUtility().showLoadingScreen();
	var addData = this.view.segAddress.data[index];
	var data = {
	  "addressId": addData.addressId
	};
	this.getSettingsModule().presentationController.deleteProfileAddress(data);
  },
  
  showSuccessPopUp: function(msg) {
	applicationManager.getPresentationUtility().dismissLoadingScreen();
	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
  },
  
  showErrorMessage: function(msg) {
	applicationManager.getPresentationUtility().dismissLoadingScreen();
	applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },

  getString: function(key) {
	return applicationManager.getPresentationUtility().getStringFromi18n(key);
  },

  getSettingsModule: function() {	
	if (!this.settingsModule) {
	  this.settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
	}
	return this.settingsModule;
  },
  
  onAddAddress : function(){
    var data = {};
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("frmProfileAddAddress",data);
    var flowType = "add";
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMode.presentationController.updateUserAddressFlowType(flowType);
    settingsMode.presentationController.clearUserAddressData();
    settingsMode.presentationController.commonFunctionForNavigation("frmProfileAddAddress");
  },

  isIpad: function() {
	return applicationManager.getDeviceUtilManager().isIpad();
  }
});