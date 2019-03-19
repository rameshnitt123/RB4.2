define({ 
  isIpadDevice: null,
  settingsModule: null,
  imageRawBytes: null,
  init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
	this.initHeaderActions();
	this.initActions();
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
	this.view.flxEditOptions.setVisibility(false);
	this.view.flxEditProfilePicture.setVisibility(false);
	this.setDetailsData();
	this.setCameraProperties();
	this.view.flxChangeProfilePicture.onClick = this.showChangeProfileOptions;
	this.view.flxEditPhoneNumbers.onClick = this.navToEditPhoneNumber;
	this.view.flxEditEmail.onClick = this.navToEditEmail;
	this.view.flxEditAddress.onClick = this.navToEditAddress;
	this.view.cameraWidget.onCapture = this.takePicture;
	this.view.flxChoose.onClick = this.chooseFromGallery;
	this.view.flxCancel.onClick = this.widgetVisibilityToggle.bind(this, null, this.view.flxEditOptions);
	this.view.flxCancelButton.onClick = this.widgetVisibilityToggle.bind(this, null, this.view.flxEditProfilePicture);
  },

  initHeaderActions: function() {
	if (!this.isIpad()) {
	  this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
	  this.view.customHeaderTablet.btnRight.onClick = this.btnRightHandle;
	}
  },

  btnRightHandle: function() {
	this.widgetVisibilityToggle(this.view.flxEditOptions, null);
  },

  takePicture: function() {
	this.view.flxEditProfilePicture.setVisibility(false);
	this.view.flxEditOptions.setVisibility(false);
	var rawBytes = this.view.cameraWidget.rawBytes;
	this.imageRawBytes = rawBytes;
	var base64Image = kony.convertToBase64(rawBytes);

	if (base64Image) {
	  this.getSettingsModule().presentationController.uploadProfilePicture(base64Image);
	}
  },

  chooseFromGallery: function() {
	this.view.flxEditProfilePicture.setVisibility(false);
	this.view.flxEditOptions.setVisibility(false);
	var self = this;
	var queryContext = {
	  mimetype: "image/*"
	};

	kony.phone.openMediaGallery(gallerySelectionCallback.bind(this), queryContext);

	function gallerySelectionCallback(rawBytes, permissionStatus) {
	  if (rawBytes) {
		self.imageRawBytes = rawBytes;
		var base64 = kony.convertToBase64(rawBytes);
		this.getSettingsModule().presentationController.uploadProfilePicture(base64);
	  } else if (permissionStatus == kony.application.PERMISSION_DENIED) {
		var i18nPermission = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.gallery.permissionDenied");
		self.bindViewError(i18nPermission);
	  } else {
		var i18nNo = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.gallery.noImageSelected");
		self.bindViewError(i18nNo);
	  }
	}
  },

  bindUploadedImage: function() {
	if (this.imageRawBytes) {

	  if (this.isIpad()) {
		var base64Str = kony.convertToBase64(this.imageRawBytes);
		this.view.imgUser.base64 = base64Str;
	  }
	  else {
		this.view.imgUser.rawBytes = this.imageRawBytes;
	  }
	  this.imageRawBytes = null;
	}
  },

  setDetailsData: function() {
	var self = this;
	this.view.segDetails.widgetDataMap = this.getDataMap();
	var nav = applicationManager.getNavigationManager();
	var data = nav.getCustomInfo('frmProfilePersonalDetails');
	var name = nav.getCustomInfo('frmProfilePersonalDetails1');
	this.view.lblUSer.text = name;
	var counterEmail;
	var counterAddress;
	data.forEach(function(item) {
	  switch (item[0].lblHeader) {
		case "Registered Email ID's":
		  counterEmail = item[1].length;
		  if (counterEmail < 3) {
			item[0].imgDetails = "addiconnoborder_blue.png";
			item[0].flxHeader = {"onClick": self.segHeaderRowClickHandle.bind(this, item[0].lblHeader)};
		  }
		  break;
		case "Registered Addresses":
		  counterAddress = item[1].length;
		  if (counterAddress < 3) {
			item[0].imgDetails = "addiconnoborder_blue.png";
			item[0].flxHeader = {"onClick": self.segHeaderRowClickHandle.bind(this, item[0].lblHeader)};
		  }
		  break; 
	  } 
	});
	this.view.segDetails.setData(data);
	this.view.forceLayout();
  },
  
  getDataMap: function() {
	return {
	  "flxDetails": "flxDetails",
	  "flxMain": "flxMain",
	  "lblDetail": "lblDetail",
	  "lblDetailValue": "lblDetailValue",
	  "flxDetailsHeader": "flxDetailsHeader",
	  "flxHeader": "flxHeader",
	  "lblHeader": "lblHeader",
	  "imgDetails": "imgDetails"
	};
  },

  segHeaderRowClickHandle: function(item) {
	var navToForm = (item === "Registered Email ID's") ? "frmProfileEnterEmailID" : "frmProfileAddAddress";
	var navManager = applicationManager.getNavigationManager();

	if (item === "Registered Email ID's") {
	  navManager.setCustomInfo("frmProfileEnterEmailIDFlow", "add");
	} else if (item === "Registered Addresses") {
	  var data = {};
	  navManager.setCustomInfo("frmProfileAddAddress", data);
	  this.getSettingsModule().presentationController.updateUserAddressFlowType("add");
	  this.getSettingsModule().presentationController.clearUserAddressData();
	}
	this.getSettingsModule().presentationController.commonFunctionForNavigation(navToForm);
  },

  navToEditPhoneNumber: function() {
	this.getSettingsModule().presentationController.navigateToEditPhoneNumber({"flow": "null"});
  },

  navToEditEmail: function() {
	this.getSettingsModule().presentationController.navigateToAddOrEditEmail("null");
  },

  navToEditAddress: function() {
	this.getSettingsModule().presentationController.navigateToEditOrAddAddress();
  },

  showChangeProfileOptions: function() {
	this.view.flxEditOptions.setVisibility(false);
	this.view.flxEditProfilePicture.setVisibility(true);
  },

  bindViewError: function(msg) {
	applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },

  bindViewSuccess: function(msg) {
	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
  },

  setCameraProperties: function() {
	if(!this.isIpad()) {
	  this.view.cameraWidget.cameraOptions = {
		hideControlBar: true
	  };
	}
  },

  backNavigation: function() {
	var navManager = applicationManager.getNavigationManager();	
	navManager.goBack();
  },

  isIpad: function() {
	if (!this.isIpadDevice) {
	  this.isIpadDevice = applicationManager.getDeviceUtilManager().isIpad();
	}
	return this.isIpadDevice;
  },

  getSettingsModule: function() {	
	if (!this.settingsModule) {
	  this.settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
	}
	return this.settingsModule;
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