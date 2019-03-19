define({ 
  init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },
  
  preShow: function () {
	this.setData();
	this.initActions();
	var navigationManager = applicationManager.getNavigationManager();
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  initActions: function() {
	this.initHeaderActions();
	this.view.segContactType.onRowClick = this.segRowClick.bind(this, "add");
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
	var self = this;
	var data = [{
	  "lblFrequency": self.getString("kony.tab.common.home")
	},
	{
	  "lblFrequency": self.getString("kony.mb.ProfilePersonalDetails.Mobile")
	},
	{			
	  "lblFrequency": self.getString("kony.tab.common.work")
	},
	{
	  "lblFrequency": self.getString("kony.mb.CardMng.OtherReasonCancel")			
	}];
	this.view.segContactType.setData(data);
  },

  segRowClick: function(value) {
	var self = this;
	var index = this.view.segContactType.selectedIndex[1];
	var navManager = applicationManager.getNavigationManager();
	var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
	var currentData = settingsMod.presentationController.getPhoneBuilderObject();

	var data = {
	  flow: value,
	  data: {
		type: self.getSelectedRowData(index),
		countryType: currentData.countryType	
	  }
	};
	navManager.setCustomInfo("frmProfileEditPhoneNumberMain", data);
	settingsMod.presentationController.commonFunctionForNavigation("frmProfileEditPhoneNumberMain");
  },
  
  getSelectedRowData: function(rowIndex) {
	var type;
	var data = this.view.segContactType.data;
	data.forEach(function(item, index) {
	  if (rowIndex == index) {
		type = item.lblFrequency;
	  }
	});
	return type;
  },
  
  getString: function(key) {
	return applicationManager.getPresentationUtility().getStringFromi18n(key);
  }
});