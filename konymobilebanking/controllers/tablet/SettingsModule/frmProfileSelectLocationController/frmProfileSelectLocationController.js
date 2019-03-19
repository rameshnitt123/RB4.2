define({
  init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },
  
  preShow: function () {
	this.initActions(); 
	this.setData();
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  initActions: function () {
	this.initHeaderActions();
	this.view.segContactLocation.onRowClick = this.segRowClick;
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
	var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
	settingsModule.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
  },

  setData: function() {
	var data = [{
	  		"lblFrequency": "Domestic"
		},
		{
	  		"lblFrequency": "International"
		}];
	this.view.segContactLocation.setData(data);
  },
  
  segRowClick: function() {
	var index = this.view.segContactLocation.selectedRowIndex[1];
	var locationType = index ? "international" : "domestic";
	var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
 	settingsModule.presentationController.createOrUpdatePhoneBuilderObject('countryType', locationType);
	settingsModule.presentationController.navigateToProfileContactType();
  }
});