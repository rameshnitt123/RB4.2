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
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
	this.setTypeFlow();
	this.validateEmailTextBox();
	this.view.flxCheckboxPrimary.onClick = this.changePrimaryEmail; 
	this.view.tbxEmail.onTextChange = this.validateEmailTextBox;
  },

  setTypeFlow: function() {
	var navManager = applicationManager.getNavigationManager();
	var typeFlow = navManager.getCustomInfo("frmProfileEnterEmailIDFlow");

	if (typeFlow === "add") {
	  this.showAddEmail();
	  this.visibilityButton(typeFlow);
	} else if (typeFlow === "edit") {
	  this.showEditEmail();
	  this.visibilityButton(typeFlow);
	}
  },

  validateEmailTextBox: function() {
	var text = this.view.tbxEmail.text;
	var button = this.view.btnContinue;
	button.setEnabled(!!text);
	button.skin = text ? "sknBtnBg0A78D1BorderE9FontFFSSPR36pxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
  },

  showAddEmail: function() {
	this.view.btnContinue.text = this.getString("kony.mb.Profile.AddEmailID");
	this.view.tbxEmail.text = "";
    this.view.flxPrimary.isVisible = true;
	this.view.imgCheckboxPrimary.src = "checkboxempty.png";
	this.view.btnContinue.onClick = this.addUserEmail;
  },

  showEditEmail: function() {
	this.view.btnContinue.text = this.getString("kony.mb.Profile.UpdateChanges");
	this.view.btnContinue.onClick = this.updateEmail;
	var navManager = applicationManager.getNavigationManager();
	var data = navManager.getCustomInfo('frmProfileEnterEmailID');
	this.view.tbxEmail.text = data.email;
	this.view.imgCheckboxPrimary.src = data.isPrimary ? "checkbox.png" : "checkboxempty.png";
	this.view.flxPrimary.setVisibility(data.isPrimary === 0);
  },

  changePrimaryEmail: function() {
	var isPrimaryEmail = this.view.imgCheckboxPrimary.src === "checkbox.png";
	this.view.imgCheckboxPrimary.src = isPrimaryEmail ? "checkboxempty.png" : "checkbox.png";
  },

  updateEmail: function() {
	var navManager = applicationManager.getNavigationManager();
	var data = navManager.getCustomInfo('frmProfileEnterEmailID');
	var email = this.view.tbxEmail.text;
	var isPrimary = this.view.imgCheckboxPrimary.src === "checkbox.png" ? 1 : 0;
	var updatedData = {
	  index: data.index,
	  email: email,
	  isPrimary: isPrimary,
	};
	this.getSettingsModule().presentationController.updateEmail(updatedData);
  },

  addUserEmail: function() {
	var email = this.view.tbxEmail.text;
	var isPrimary = this.view.imgCheckboxPrimary.src === "checkbox.png" ? 1 : 0;
	var data = {
	  email: email,
	  isPrimary: isPrimary,
	};
	this.getSettingsModule().presentationController.addEmail(data);
  },

  initHeaderActions: function() {
	if (!this.isIpad()) {
	  this.view.customHeaderTablet.flxBack.onClick = this.navBack;
	  this.view.customHeaderTablet.btnRight.onClick = this.onClickCancel;
	}
  },

  navBack: function() {
	var navManager = applicationManager.getNavigationManager();
	navManager.goBack();
  },

  onClickCancel: function() {
	this.getSettingsModule().presentationController.commonFunctionForNavigation("frmSettings");
  },

  bindViewError: function(msg){
	applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },

  getSettingsModule: function() {	
	if (!this.settingsModule) {
	  this.settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
	}
	return this.settingsModule;
  },

  visibilityButton: function(typeFlow) {
	var visibible = this.getAmountEmails() < 3 || typeFlow === "edit";
	this.view.btnContinue.setVisibility(visibible); 
  },

  getAmountEmails: function() {
	var navManager = applicationManager.getNavigationManager();
	var data = navManager.getCustomInfo("frmProfilePersonalDetails");
	var count;
	data.forEach(function(item) {
	  if (item[0].lblHeader === "Registered Email ID's") {
		count = item[1].length;
	  }
	});
	return count;
  },
  
  getString: function(key) {
	return applicationManager.getPresentationUtility().getStringFromi18n(key);
  },
  
  isIpad: function() {
	return applicationManager.getDeviceUtilManager().isIpad();
  }
});