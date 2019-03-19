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
	this.setEmailsData();
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  initActions: function() {
	this.checkForToastMessage();
	this.view.segEmails.onRowClick = this.onSegEmailClick;
  },
  
  initHeaderActions: function() {
	if (!this.isIpad()) {
	  this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
	  this.view.customHeaderTablet.btnRight.onClick = this.backHandle;
	}
  },

 backHandle: function() {
	this.getSettingsModule().presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
  },

  backNavigation: function() {
	var navManager = applicationManager.getNavigationManager();	
	navManager.goBack();
  },
  
  setEmailsData: function() {
	var self = this;
	var dataMap = {
	  "flxDelete": "flxDelete",
	  "lblDetail": "lblDetail",
	  "lblDetailValue": "lblDetailValue",
	  "lblDelete": "lblDelete",
	  "imgDelete": "imgDelete"
	};

	var navManager = applicationManager.getNavigationManager();
	var data = navManager.getCustomInfo('frmProfileEditEmails');
	
	data.forEach(function(item, index) {
	  item.index = index;
	  item.imgDelete = "deleteicon.png";
	  item.lblDelete = self.getString("kony.mb.common.Delete");
	  item.flxDelete = {"onClick": self.onSwipeDeleteClick.bind(self, index)};
	});		
	this.view.segEmails.widgetDataMap = dataMap;
	
	if (data && data.length) {
	  this.view.segEmails.setVisibility(true);
	  this.view.lblUSer.text = this.getString('kony.mb.ProfileEditEmails.USer');
	  this.view.segEmails.setData(data);
	} else {
	  this.view.segEmails.setVisibility(false);
	  this.view.lblUSer.text = this.getString('i18n.maps.NoResultsFound');
	}
	this.view.forceLayout();
  },
  
  checkForToastMessage: function() {
	var self = this;
	var navManager = applicationManager.getNavigationManager();
	var data = navManager.getCustomInfo('frmProfileEnterEmailID');

	switch (data) {
	  case "deletesuccess":
		this.bindViewSuccess(self.getString("kony.tab.Profile.DeleteEmails"));
		break;
	  case "addsuccess":
		this.bindViewSuccess(self.getString("kony.profile.addEmailSuccess"));
		break;
	  case "updatesuccess":
		this.bindViewSuccess(self.getString("kony.profile.editEmailSuccess"));
		break;
	}
	navManager.setCustomInfo('frmProfileEnterEmailID', null);
  },

  onSwipeDeleteClick: function(index) {
	var self = this;
	this.view.flxPopupDelete.setVisibility(true);
	
	this.view.flxYes.onClick = function() {
	  self.getSettingsModule().presentationController.deleteEmail(index);
	  self.view.flxPopupDelete.setVisibility(false);
	};

	this.view.flxNo.onClick = function() {
	  self.setEmailsData();
	  self.view.flxPopupDelete.setVisibility(false);
	};
  },
  
  onSegEmailClick: function() {
    var navManager = applicationManager.getNavigationManager();	
          var swipeFlag = navManager.getCustomInfo("segPhoneNumbersSwipeFlag");
          if(swipeFlag===true){
              navManager.setCustomInfo("segPhoneNumbersSwipeFlag",false);
              return;
          }
	var index = this.view.segEmails.selectedRowIndex[1];
	this.getSettingsModule().presentationController.navigateToEditEmail(index);
  },

  bindViewError: function(msg) {
	applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },
  
  bindViewSuccess: function(msg) {
	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
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

  getString: function(key) {
	return applicationManager.getPresentationUtility().getStringFromi18n(key);
  }
});