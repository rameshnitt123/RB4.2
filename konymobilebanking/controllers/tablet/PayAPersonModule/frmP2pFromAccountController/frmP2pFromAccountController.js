define({
  frmAccountsFlag: true,
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initActions();
    this.initHeaderActions();
    this.updateRightPane();
    this.setSegData();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
	this.view.tbxSearch.text = "";
	this.view.flxCancel.setVisibility(false);
	this.view.flxNoTransactions.setVisibility(false);
    this.view.segAccounts.onRowClick = this.segmentRowClick;
	this.view.tbxSearch.onTextChange = this.searchInfo.bind(this, true);
	this.view.flxCancel.onClick = this.cancelSearch;
  },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navigateBack;
      this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
    }
  },
  
  navigateBack: function() {
    var navMan = applicationManager.getNavigationManager();    
    navMan.goBack();      
  },

  handleCancelAction: function() {
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payAPersonModule.presentationController.cancelCommon();
  },

  setSegData: function() {
    this.view.segAccounts.widgetDataMap = {
      lblAccountName: "accountName",
      lblAccountBalValue: "availableBalance",              
      lblBankName: "bankName",
      lblAccountId: "accountID",
      lblAccountBal: "accountBalanceType"                           
    };
    this.view.segAccounts.setData(this.getData());      
  },
  
  getData: function() {
	var navManager = applicationManager.getNavigationManager();
	var accData = navManager.getCustomInfo("frmP2pFromAccount");
    return applicationManager.getDataProcessorUtility().processAccountsData(accData); 
  },

  segmentRowClick: function() {        
    var navManager = applicationManager.getNavigationManager();
    var data = this.view.segAccounts.selectedItems[0];
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payAPersonModule.presentationController.setFromAccountsForP2p(data);
    payAPersonModule.presentationController.commonFunctionForNavigation("frmP2pAmount");
  },

  searchInfo: function(showCancel) {
	this.view.flxCancel.setVisibility(showCancel);
    var searchtext = this.view.tbxSearch.text.toLowerCase();

    if (searchtext) {
      this.view.segAccounts.removeAll();
      var data = this.getData();
      var searchData = applicationManager.getDataProcessorUtility().commonSegmentSearch("accountName", searchtext, data);

      if (searchData.length) {
        this.view.segAccounts.setData(searchData);
        this.view.flxNoTransactions.setVisibility(false);
        this.view.segAccounts.setVisibility(true);
      } else {
        this.view.segAccounts.setVisibility(false);
        this.view.flxNoTransactions.setVisibility(true);
      }
    } else {
      if (this.getData().length) { 
        this.view.segAccounts.setData(this.getData());
        this.view.flxNoTransactions.setVisibility(false);
        this.view.segAccounts.setVisibility(true);
      } else {
        this.view.flxNoTransactions.setVisibility(true);
        this.view.segAccounts.setVisibility(false);
      }
    }
  },
  
  cancelSearch: function() {
	this.view.flxCancel.setVisibility(false);
	this.view.tbxSearch.text = "";
	this.searchInfo(false);
	this.view.flxLeftPaneTitle.setFocus(true);
  },

  updateRightPane: function() {
    var configurationManager = applicationManager.getConfigurationManager();
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payAPersonModule.presentationController.getP2PObject();
    var rightPane = this.view.RightPane;
    rightPane.lblCheckedRowName.text = data.payPersonName;
  },

  constructAccountName: function(data) {
    var fromAccountName = data.fromAccountName;
    var fromAccountNumber = data.fromAccountNumber;
    return fromAccountName + "..." + fromAccountNumber.slice(-4);
  }  
});