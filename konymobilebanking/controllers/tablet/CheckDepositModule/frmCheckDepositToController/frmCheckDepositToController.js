define({ 
  depositModule: null,  
  init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
	this.initActions();
	this.setSegmentData();
	applicationManager.getPresentationUtility().dismissLoadingScreen();
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  
  initActions: function() {
	this.initHeaderActions();
	this.view.flxHeaderSticky.flxBox.tbxSearch.text = '';
	this.view.customSearchbox.flxSearchMain.tbxSearch.text = ''; 
	this.widgetVisibilityToggle(this.view.flxHeaderSticky, this.view.flxHeaderSearchbox);		
	this.view.flxHeaderSticky.flxBox.tbxSearch.onTextChange = this.showHideSearch;
	this.view.customSearchbox.flxSearchMain.btnCancel.onClick = this.cancelSearch;
	this.view.segToAccount.onRowClick = this.segRowClick;
  },
  
  initHeaderActions: function() {
	var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    this.view.flxShadow.isVisible = !isIpad;
	if (!isIpad) {
	  this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
	  this.view.customHeaderTablet.flxHeader.btnRight.onClick = this.backHandle;
	} else {
	  this.view.customSearchbox.flxSearchMain.btnCancel.setVisibility(false); 
	}
  },

  backNavigation: function() {
	var navManager = applicationManager.getNavigationManager();	
	navManager.goBack();
  },

  backHandle: function() {
	this.getCheckDepositModule().presentationController.cancelDeposit();
  },

  getWidgetDataMap: function() {
	var dataMap = {
	  "lblAccountNumber": "lblAccountNumber",  
	  "lblAccountName": "lblAccountName",
	  "lblBankName": "lblBankName",
	  "lblAccountBalValue": "lblAccountBalValue",
	  "lblAccountBal": "AvailableBalStaticLabel",
	  "imgBank": "imgBank"
	};
	return dataMap;
  },

  segRowClick: function() {
	applicationManager.getPresentationUtility().showLoadingScreen();
	var selectedToAccountData = this.view.segToAccount.selectedRowItems[0];
	this.getCheckDepositModule().presentationController.setSelectedAccountData(selectedToAccountData);
  },

  setSegmentData: function(searchSegData) {	
	var dataToSet;
	if (!searchSegData) {
	  var navManager = applicationManager.getNavigationManager();
	  dataToSet =  navManager.getCustomInfo("frmCheckDepositTo");
	} else {
	  dataToSet = searchSegData;
	}

	if (dataToSet.length) {
	  var dataMap = this.getWidgetDataMap();
	  this.view.segToAccount.widgetDataMap = dataMap;
	  this.view.segToAccount.setData(dataToSet);       
	  this.widgetVisibilityToggle(this.view.segToAccount, this.view.flxNoTransactions);
	} else {
	  this.widgetVisibilityToggle(this.view.flxNoTransactions, this.view.segToAccount);
	}      
  },

  tbxSearchOnTextChange: function() {
	var data = this.view.segToAccount.data;
	var query = this.view.customSearchbox.flxSearchMain.tbxSearch.text.toLowerCase();
	var navManager = applicationManager.getNavigationManager();

	if (query) {
	  var searchSegData = applicationManager.getDataProcessorUtility().commonSegmentSearch("lblAccountName", query, data);
	  this.setSegmentData(searchSegData);
	} else {
	  this.setSegmentData(null);
	}
  },

  getCheckDepositModule: function() {	
	if (!this.depositModule) {
	  this.depositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
	}
	return this.depositModule;
  },

  getString: function(key) {
	return applicationManager.getPresentationUtility().getStringFromi18n(key);
  },

  showHideSearch: function() {
	var enteredLetter = this.view.flxHeaderSticky.flxBox.tbxSearch.text;
	if (!this.view.flxHeaderSearchbox.isVisible) {
	  this.view.customSearchbox.flxSearchMain.tbxSearch.setFocus(true);
	  this.view.customSearchbox.flxSearchMain.tbxSearch.text = enteredLetter;
	  this.widgetVisibilityToggle(this.view.flxHeaderSearchbox, this.view.flxHeaderSticky);
	}
	this.view.customSearchbox.flxSearchMain.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
  },

  widgetVisibilityToggle: function(visibleElement, invisibleElement) {
	if (visibleElement) {
	  visibleElement.setVisibility(true);
	}

	if (invisibleElement) {
	  invisibleElement.setVisibility(false);
	}
  },

  cancelSearch: function() {
	this.view.customSearchbox.flxSearchMain.tbxSearch.setFocus(false);
	this.view.flxHeaderSticky.flxBox.tbxSearch.text = '';
	this.view.flxHeaderSticky.flxBox.tbxSearch.placeholder = this.getString("kony.tab.common.Search");
	this.view.customSearchbox.flxSearchMain.tbxSearch.text = ''; 
	this.view.customSearchbox.flxSearchMain.tbxSearch.placeholder = this.getString("kony.tab.common.Search");
	this.widgetVisibilityToggle(this.view.flxHeaderSticky, this.view.flxHeaderSearchbox);
	this.setSegmentData(null);
  }  
});