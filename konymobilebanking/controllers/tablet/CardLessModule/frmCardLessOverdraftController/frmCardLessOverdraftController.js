define({

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.setSegmentData();
    this.initActions();
    this.initHeaderActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
    this.view.btnEditTransaction.onClick = this.btnEditOnClick;
    this.view.btnContinue.onClick = this.btnContinueOnClick;
  },

  setSegmentData:function(){
    var dataMap = this.getDataMap();
    this.view.segAccounts.widgetDataMap = dataMap;
    var navMan = applicationManager.getNavigationManager();
    var txnDetails = navMan.getCustomInfo("frmCardLessOverdraft");
    var cardlessTxnDetails = txnDetails.createResponse;
    var forUtility = applicationManager.getFormatUtilManager();

    var data = txnDetails.createResponse.map(function(item) {
      var date = forUtility.getDateObjectfromString(item.transactionDate, "YYYY-MM-DD");
      item.transactionDate = forUtility.getFormatedDateString(date, forUtility.APPLICATION_DATE_FORMAT);
      item.amount = forUtility.formatAmountandAppendCurrencySymbol(item.amount);
      return item;
    });
    cardlessTxnDetails = [[{"lblHeader": "Scheduled Transactions"}, data]];
    this.view.segAccounts.setData(cardlessTxnDetails);
  },

  getDataMap: function() {
    var dataMap = {
      lblAccountName: "description",
      lblAccountBal: "transactionDate",
      lblAccountBalValue: "amount",
      lblBankName: "fromAccountType",
      accountID: "accountID",
      lblHeader: "lblHeader"
    };
    return dataMap;
  },

  btnEditOnClick: function() {
    var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    cardlessModule.presentationController.commonFunctionForNavigation("frmCardLessWithdraw");
  },

  btnContinueOnClick: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    cardlessModule.presentationController.setOverDraftFlag("false");
    cardlessModule.presentationController.createCardlessTransaction();    
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navigateBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onHandleCancelAction;
    }
  },

  navigateBack: function() {
    var navMan = applicationManager.getNavigationManager();    
    navMan.goBack();      
  },

  onHandleCancelAction: function() {
    var cardLessMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    cardLessMod.presentationController.cancelCommon();
  }
});