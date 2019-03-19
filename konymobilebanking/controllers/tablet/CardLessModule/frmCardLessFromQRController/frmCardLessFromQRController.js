define({ 

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
    var self = this;
    this.view.tbxSearch.setFocus(false);
    this.view.flxCancel.setVisibility(false);
    this.view.tbxSearch.text = "";
    this.view.segToAccount.onRowClick = this.segmentRowClick;
    this.view.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
    var navMan = applicationManager.getNavigationManager();
    var fromAccountsList = navMan.getCustomInfo("frmCardLessFromQR");
    var fromaccounts = fromAccountsList.fromaccounts;
    var accProcessedData = (JSON.parse(JSON.stringify(fromaccounts)));
    this.setSegmentData(accProcessedData);
    this.view.flxCancel.onClick = function() {
      self.view.tbxSearch.text = "";
      self.view.tbxSearch.setFocus(false);
      self.tbxSearchOnTextChange();
      self.view.flxCancel.setVisibility(false);
    };
  },

  segmentRowClick: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navMan = applicationManager.getNavigationManager();
    var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    var preAccData = this.view.segToAccount.selectedItems[0];
    cardlessModule.presentationController.setFromAccountDetails(preAccData);
    var txnDetails = cardlessModule.presentationController.getTransactionObject();
    txnDetails = cardlessModule.presentationController.processAccountsData(txnDetails);
    navMan.setCustomInfo("frmCardLessWithdrawQR", txnDetails);
    cardlessModule.presentationController.commonFunctionForNavigation("frmCardLessWithdrawQR");
  },

  setSegmentData: function(res) {
    var dataMap = {
      lblAccountName: "accountName",
      lblAccountBal: "lblAccountBal",
      lblAccountBalValue: "availableBalance",
      lblBankName: "accountType",
      accountID: "accountID",
      amount: "amount"
    };
    this.view.segToAccount.widgetDataMap = dataMap;
    if (res.length === 0) {
      this.view.segToAccount.setVisibility(false);
      this.view.flxNoTransactions.setVisibility(true);
      this.view.lblNoTransaction.setVisibility(true);    
    } else {
      this.view.segToAccount.setVisibility(true);
      this.view.flxNoTransactions.setVisibility(false);
      this.view.lblNoTransaction.setVisibility(false);
      var forUtility = applicationManager.getFormatUtilManager();
      var data = res.map(function(item) {
        var balance = item.availableBalance;
        item.lblAccountBal = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AvailableBalance");
        item.amount = balance;
        item.availableBalance = forUtility.formatAmountandAppendCurrencySymbol(balance);
        return item;
      });
      this.view.segToAccount.setData(data);
      this.cardlessAccounts = data;
    }
  },

  tbxSearchOnTextChange: function() {
    this.view.flxCancel.setVisibility(true);
    var searchtext = this.view.tbxSearch.text.toLowerCase();
    var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    var data = this.cardlessAccounts;
    var searchSegmentData = applicationManager.getDataProcessorUtility().commonSegmentSearch("accountName", searchtext, data);
    if (searchSegmentData && !searchSegmentData.length) {
      this.view.flxNoTransactions.setVisibility(true);
      this.view.lblNoTransaction.setVisibility(true);
      this.view.segToAccount.setVisibility(false);
    } else {
      this.view.flxNoTransactions.setVisibility(false);
      this.view.lblNoTransaction.setVisibility(false);
      this.view.segToAccount.setVisibility(true);
      this.view.segToAccount.setData(searchSegmentData);
    }	
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClickCancel;
    }
  },

  navBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },

  onClickCancel: function() {
    var cardLessMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    cardLessMod.presentationController.cancelCommonQR();
  }
});