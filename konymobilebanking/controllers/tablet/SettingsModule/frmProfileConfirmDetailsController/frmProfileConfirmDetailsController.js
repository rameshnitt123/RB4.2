define({ 
  init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  }, 
  
  preShow: function() {
	this.initActions();
	this.setData();
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  initActions: function() {
	this.initHeaderActions();
	this.view.btnVerifySecCode.onClick = this.confirmHandle;
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
  
  setData: function() {
	var nav = applicationManager.getNavigationManager();
	var data = nav.getCustomInfo('frmProfileConfirmDetails');
	this.view.lblPhoneNumberValue.text = data.phoneNumber;
	this.view.lblContantTypeValue.text = data.type;
	this.view.lblCountryValue.text = data.countryType;
	this.view.lblMarkasPrimaryValue.text = data.isPrimary === "1"? this.getString("kony.tab.common.Yes") : this.getString("kony.mb.common.AlertNo");
  },
  
  confirmHandle: function() {
	var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
	settingsMode.presentationController.addUserPhoneNumber();
  },
  
  getString: function(key) {
	return applicationManager.getPresentationUtility().getStringFromi18n(key);
  }
});