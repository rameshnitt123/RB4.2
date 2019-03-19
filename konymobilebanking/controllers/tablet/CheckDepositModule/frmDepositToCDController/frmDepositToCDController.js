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
	this.view.segTransactionMode.onRowClick = this.segRowClick;
  },

  initHeaderActions: function() {
	var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    this.view.flxShadow.isVisible = !isIpad;
	if (!isIpad) {
	  this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
	  this.view.customHeaderTablet.flxHeader.btnRight.onClick = this.handleBack;
	}
  },

  backNavigation: function() {
	var navMan = applicationManager.getNavigationManager();
	navMan.goBack();
  },

  handleBack: function() {
	this.getCheckDepositModule().presentationController.cancelDeposit();
  },

  setSegmentData: function() {
	var segData = [{
	  "lblTransactionMode": this.getString("kony.mb.transfer.MyKonyAccounts"),
	  "lblTransactionModeDescription": this.getString("kony.mb.transfer.DepositToMyKonyAccounts"),
	  "imgArrow":"chevron.png"
	}];
	this.view.segTransactionMode.setData(segData);
  },

  segRowClick: function() {
	applicationManager.getPresentationUtility().showLoadingScreen();
	var depositObject = this.getCheckDepositModule().presentationController.getDepositObjInView();

	if (depositObject.amount) {
	  this.getCheckDepositModule().presentationController.commonFunctionForNavigation("frmDepositAmountCD");
	} else {
	  this.getCheckDepositModule().presentationController.getToAccounts(false); 
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
  }
});