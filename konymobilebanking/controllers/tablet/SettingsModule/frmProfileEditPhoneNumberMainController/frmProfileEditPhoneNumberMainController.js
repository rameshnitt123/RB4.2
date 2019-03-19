define({ 
  char: '',
  settingsModule: null,
  init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function () {
	this.initHeaderActions();
	this.initActions();
	var navManager = applicationManager.getNavigationManager();
	var data = navManager.getCustomInfo('frmProfileEditPhoneNumberMain');
	this.toggleFlowNavigation(data.flow);
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
	var self = this;
	this.setSegmentData();
	this.view.btnVerifyPhoneNumber.setEnabled(false);
	this.view.flxPhoneType.setVisibility(false);
	this.view.txtInput.opacity = 0;
	this.view.btnDelete.onClick = this.onBtnDeleteClick;
	this.view.txtInput.onTextChange = this.keypadActions; 
	this.view.segContactType.onRowClick = this.handleRowClick;
	this.view.flxEnterPhoneNumberDropdown.onClick = this.setPhoneType;
	this.view.flxCheckboxPrimary.onClick = this.toggleImg.bind(this, this.view.imgCheckboxPrimary);
	this.view.flxCheckboxInternational.onClick = this.toggleImg.bind(this, this.view.imgCheckboxInternational);
	this.view.flxInputPhoneNumber.onClick = function() {
	  self.view.txtInput.setFocus(true);
	};
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

  toggleFlowNavigation: function(value) {
	switch (value) {
	  case "add":
		this.setAddFlow();
		break;
	  case "edit":
		this.setEditFlow();
		break;
	}
  },

  setAddFlow: function() {
	this.view.btnVerifyPhoneNumber.text = this.getString("kony.tab.common.Continue");
	this.view.imgCheckboxPrimary.src = "checkboxempty.png";
	this.view.imgCheckboxInternational.src = "checkboxempty.png";
	this.view.flxPrimary.setVisibility(true);
	this.view.btnDelete.setVisibility(false);
	this.view.lblEnterPhoneNumberHeader.text = this.setTitleTypeNumber();
	this.setPhoneNumber(true);
	this.view.btnVerifyPhoneNumber.onClick = this.navToConfirmDetails;
  },

  setEditFlow: function() {
	var self = this;
	this.view.btnVerifyPhoneNumber.text = this.getString("kony.tab.profileManegment.updateChanges");
	this.view.btnVerifyPhoneNumber.onClick = this.updatePhoneNumber;
	this.view.lblEnterPhoneNumberHeader.text = this.setTitleTypeNumber();
	this.view.flxPrimary.setVisibility(self.getCurrentData().isPrimary === "1" ? false : true);
	this.view.imgCheckboxPrimary.src = (this.getCurrentData().isPrimary === "1") ? "checkbox.png" : "checkboxempty.png";
	this.view.imgCheckboxInternational.src = (this.getCurrentData().countryType === "international") ? "checkbox.png" : "checkboxempty.png";
	this.view.btnDelete.setVisibility(self.getCurrentData().isPrimary === "1" ? false : true);
	this.setPhoneNumber(null);
  },

  getCurrentData: function() {
	var navManager = applicationManager.getNavigationManager();
	var data = navManager.getCustomInfo('frmProfileEditPhoneNumberMain');
	return data.data;
  },

  setTitleTypeNumber: function() {
	return "Type (" + this.getCurrentData().type + ")";
  },

  setPhoneNumber: function(clean) {
	var self = this;
	if (clean) {
	  this.view.inputPhoneNumber.setPhoneNumber("");
	  this.char = "";
	  this.view.txtInput.text = this.char;
	} else {
	  if (this.getCurrentData().phoneNumber) {
		this.view.inputPhoneNumber.setPhoneNumber(self.getCurrentData().phoneNumber);
		this.char = this.getCurrentData().phoneNumber;
		this.view.txtInput.text = this.char;
	  }
	}
	this.validationContinueButton();
  },

  setPhoneType: function() {
	var self = this;
	this.view.flxPhoneType.setVisibility(self.view.flxPhoneType.isVisible ? false : true);
  },

  segmentRadioToggle: function(index, rowInfo) {
	var segment = this.view.segContactType;
	var checkedRadio = {
	  lblFrequency: rowInfo.lblFrequency,
	  imgFrequency: "radiobtn.png"
	};

 	segment.setDataAt(checkedRadio, index);    
	segment.data.forEach(function(element, pos) {     
	  if (pos !== index && element.imgFrequency === "radiobtn.png") {
		var uncheckedRadio = {
		  lblFrequency: element.lblFrequency,
		  imgFrequency: "radiobuttoninactive.png"
		};     
		segment.setDataAt(uncheckedRadio, pos);      
	  }
	});	
  },

  handleRowClick: function() {
	var segment = this.view.segContactType;
	var index = segment.selectedIndex[1];
	var rowInfo = segment.data[index];

	if (rowInfo.imgFrequency === "radiobuttoninactive.png") {
	  this.segmentRadioToggle.call(this, index, rowInfo);
	}
  },

  setSegmentData: function() {
	var self = this;
	var type = this.getCurrentData().type;
	var segData = [{
			"lblFrequency": self.getString("kony.tab.common.home"),
			"imgFrequency": "radiobtn.png"
		},
		{
			"lblFrequency": self.getString("kony.mb.ProfilePersonalDetails.Mobile"),
			"imgFrequency": "radiobuttoninactive.png"
		},
		{
			"lblFrequency": self.getString("kony.tab.common.work"),
			"imgFrequency": "radiobuttoninactive.png"
		},
		{
			"lblFrequency": self.getString("kony.mb.CardMng.OtherReasonCancel"),
			"imgFrequency": "radiobuttoninactive.png"
		}];
	
	segData.forEach (function(item) {
		item.imgFrequency = (item.lblFrequency === type) ? "radiobtn.png" : "radiobuttoninactive.png";
	});
	this.view.segContactType.setData(segData);	
  },
  
  segSelectedRow: function() {
	var self = this;
	var selectedItem;
	var data = this.view.segContactType.data;
	
	data.forEach (function(item) {
	  if (item.imgFrequency === "radiobtn.png") {
		selectedItem = item.lblFrequency;
	  }
	});	
	return selectedItem ? selectedItem : this.getCurrentData().type;
  },

  keypadActions: function() {
	this.char = this.view.txtInput.text; 

	if (this.char.length !== 11) {
	  if (this.char.length > this.view.inputPhoneNumber.getPhoneNumber().length && this.isNumber(this.char.slice(-1))) {
		this.view.inputPhoneNumber.addDigit(this.char.slice(-1));
	  }  else if (this.char.length < this.view.inputPhoneNumber.getPhoneNumber().length) {
		this.view.inputPhoneNumber.removeDigits();
		this.char = this.char.slice(0, this.char.length-1);
	  } else if (!this.isNumber(this.char.slice(-1))) {
		this.char = this.view.inputPhoneNumber.getPhoneNumber();
		this.view.txtInput.text = this.char;
	  } 
	} else {
	  this.char = this.view.inputPhoneNumber.getPhoneNumber();
	  this.view.txtInput.text = this.char;
	}
	this.validationContinueButton();
  },

  toggleImg: function(img) {
	img.src = (img.src === "checkbox.png") ? "checkboxempty.png" : "checkbox.png";
  },

  validationContinueButton: function() {
	var value = this.view.inputPhoneNumber.getPhoneNumber().length;
	this.view.btnVerifyPhoneNumber.setEnabled(value === 10 ? true : false);
	this.view.btnVerifyPhoneNumber.skin = (value === 10) ? "sknBtn0095e4RoundedffffffSSP36pxTab" : "sknBtnBgf9f9f9SSP36Pxa0a0a0Tab";
  },

  navToConfirmDetails: function() {
	var self = this;
	var number = this.view.inputPhoneNumber.getPhoneNumber();
	var isPrimary = (this.view.imgCheckboxPrimary.src === "checkbox.png") ? "1" : "0";
	this.getSettingsModule().presentationController.createOrUpdatePhoneBuilderObject('phoneNumber', number);
	this.getSettingsModule().presentationController.createOrUpdatePhoneBuilderObject('isPrimary', isPrimary);
	this.getSettingsModule().presentationController.createOrUpdatePhoneBuilderObject('type', self.segSelectedRow());
	this.getSettingsModule().presentationController.navigateToAddPhoneNumberConfirmPage();
  },

  updatePhoneNumber: function() {
	var number = this.view.inputPhoneNumber.getPhoneNumber();
	var isPrimary = (this.view.imgCheckboxPrimary.src === "checkboxempty.png") ? "0": "1";
	var countryType = (this.view.imgCheckboxInternational.src === "checkbox.png") ? 'International' : "domestic";
	var data = this.getCurrentData();
	data.type = this.segSelectedRow();
	data.isPrimary = isPrimary;
	data.countryType = countryType;
	data.phoneNumber = number;
	this.getSettingsModule().presentationController.updateUserPhoneNumber(data);
  },

  onBtnDeleteClick: function() {
	var self = this;
	this.getSettingsModule().presentationController.deleteUserPhoneNumber(self.getCurrentData().id);
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

  isNumber (value) {
	return !isNaN(parseInt(value)) && isFinite(value);
  }
});