define({

  init: function() {
    var self = this;
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, self.navigateToAccountsDashboard);
  },

  preShow: function() {
    this.setFlowAction();
    this.populateDetails();

    var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    var transactionID =  cardlessModule.presentationController.getTransactionId();
    if (transactionID) {
      this.showTransactionWithdrawalToastMessage(transactionID);
      cardlessModule.presentationController.setTransactionId();
    }	
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  setFlowAction: function() {
    this.view.flxQRCode.onClick = this.onQRClick;
    this.view.btnDone.onClick = this.btnDoneOnClick;
    this.view.btnFindNearByAtm.onClick = this.findNearByATM;  
    this.view.btnSeeWithdrawCash.onClick = this.btnSeeWithdrawCashOnClick;
  },
  
  onQRClick: function() {
    var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    cardLessModule.presentationController.invokeQRCodeFunctionality();
  },
  
  navigateToAccountsDashboard: function() {
    var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    cardlessModule.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
  },

  findNearByATM: function() {
    var self = this;
    var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    locateUsModule.presentationController.presentLocateUsView(true, self); 
  },

  showTransactionWithdrawalToastMessage: function(transactionID) {
    this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardless.withdrawalMessage") + transactionID);
  },

  btnDoneOnClick: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    cardLessModule.presentationController.setcardlessTransactionId(""); 	
    cardLessModule.presentationController.getCardlessPendingAndPostedTransactionsQRScanner();
    cardLessModule.presentationController.qrSuccessFlag = false;
  },

  btnSeeWithdrawCashOnClick: function() {
    kony.application.openURL("https://youtu.be/UGJMk5_ZNrk");
  },

  populateDetails: function() {
    var navMan = applicationManager.getNavigationManager();
    var txnDetails = navMan.getCustomInfo("frmCardLessQRCode");
    var createDetails = txnDetails.createResponse;
    var cardlessTxnDetails = txnDetails.transnDetails;
    this.view.lblExpiresIn.text = "Expires in:" + createDetails.validDate;
  },

  bindGenericSuccess: function(msg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
  }
});