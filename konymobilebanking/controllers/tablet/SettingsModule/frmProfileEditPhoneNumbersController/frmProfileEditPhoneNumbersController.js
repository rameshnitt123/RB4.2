define({ 
  settingsModule: null,
  init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
	this.initHeaderActions();
	this.initActions();
	this.setDataToSegment();
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initHeaderActions: function() {
	if (!this.isIpad()) {
	  this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
	  this.view.customHeaderTablet.btnRight.onClick = this.backHandle;
	}
  },

  initActions: function() {
	this.checkForToastMessage();
	this.view.btnContinue.onClick = this.navToContactLocation.bind(this, "add");
	this.view.segPhoneNumbers.onRowClick = this.navigateToEditPhoneNumber;
  },

  backNavigation: function() {
	var navigationManager = applicationManager.getNavigationManager();
	navigationManager.goBack();
  },

  backHandle: function() {
	this.getSettingsModule().presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
  },

  setDataToSegment: function() {
	if (this.view.flxPopupDelete.isVisible) {
	  this.widgetVisibilityToggle(null, this.view.flxPopupDelete);
	}
	var self = this;
	var nav = applicationManager.getNavigationManager();
	var customdata = nav.getCustomInfo('frmProfileEditPhoneNumbers');
	var data = customdata.data;
	this.view.segPhoneNumbers.widgetDataMap = this.dataMap();

	if (data && data.length) {
	  this.view.lblUSer.text = this.getString("kony.mb.ProfileEditPhoneNumbers.USer");

	  data.forEach (function(item) {
		item.flxDelete = {"onClick": self.deleteHandle.bind(this, item)};
		item.imgDelete = "deleteicon.png";
		item.lblDelete = self.getString("kony.mb.common.Delete");
	  });
	  this.view.segPhoneNumbers.setData(data);
	} else {
	  this.view.lblUSer.text = this.getString("kony.mb.OB.NoRecordsAvailable");
	}
	this.toggleVisibilityButton();
  },

  toggleVisibilityButton: function() {
	var data = this.view.segPhoneNumbers.data;
	this.view.btnContinue.setVisibility(data && data.length < 3);
  },

  dataMap: function() {
	var	dataMap = {
	  "lblDetail": "lblDetail",
	  "lblDetailValue": "lblDetailValue",
	  "flxDelete": "flxDelete",
	  "lblDelete": "lblDelete",
	  "imgDelete": "imgDelete"
	};	
	return dataMap;
  },

  deleteHandle: function(data) {
	this.widgetVisibilityToggle(this.view.flxPopupDelete, null);
	this.view.flxNo.onClick = this.setDataToSegment;
	this.view.flxYes.onClick = this.runDelete.bind(this, data);
  },

  runDelete: function(data) {
	this.getSettingsModule().presentationController.deleteUserPhoneNumber(data.id);
  },

  navToContactLocation: function(param) {
	var navigationManager = applicationManager.getNavigationManager();
	navigationManager.setCustomInfo("frmProfileSelectLocation", param);
	this.getSettingsModule().presentationController.commonFunctionForNavigation("frmProfileSelectLocation");
  },

  navigateToEditPhoneNumber: function() {
	var selectedIndex = this.view.segPhoneNumbers.selectedRowIndex;
	this.getSettingsModule().presentationController.naviagteToProfileEditPhoneNumber(selectedIndex);
  },

  bindViewError: function(msg) {
	applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },

  bindViewSuccess: function(msg) {
	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
  },

  checkForToastMessage: function() {
	var self = this;
	var navManager = applicationManager.getNavigationManager();
	var data = navManager.getCustomInfo('frmProfileEditPhoneNumberMain');

	switch (data) {
	  case "addsuccess":
		this.bindViewSuccess(self.getString("kony.profile.addPhoneNumberSuccess"));
		break;
	  case "editsuccess":
		this.bindViewSuccess(self.getString("kony.profile.editPhoneNumberSuccess"));
		break;
	  case "deletesuccess":
		this.bindViewSuccess(self.getString("kony.profile.deletePhoneNumberSuccess"));
		break;
	}
	navManager.setCustomInfo('frmProfileEditPhoneNumberMain', null);
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

  isIpad: function() {
	return applicationManager.getDeviceUtilManager().isIpad();
  },

  widgetVisibilityToggle: function(visibleElement, invisibleElement) {
	if (visibleElement) {
	  visibleElement.setVisibility(true);
	}

	if (invisibleElement) {
	  invisibleElement.setVisibility(false);
	}
  }
});