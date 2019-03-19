define({

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.populateDetails();
    this.setFlowAction();
    this.initHeaderActions();
    this.updateRightPane();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  setFlowAction: function() {
    this.view.btnConfirm.onClick = this.confirmTransaction;
  },

  confirmTransaction: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    var description = this.view.txtDescription.text;
    cardlessModule.presentationController.setTransactionsNotes(description);
    cardlessModule.presentationController.setOverDraftFlag("true");
    cardlessModule.presentationController.setScheduledDate(this.view.lblTransactionDateValue.text);
    cardlessModule.presentationController.createCardlessQRTransaction();    	
  },

  populateDetails: function() {
    var navMan = applicationManager.getNavigationManager();
    var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    var txnData = navMan.getCustomInfo("frmCardLessConfWithdrawQR");
    var forUtility = applicationManager.getFormatUtilManager();
    var dateobj = new Date(); 
    var formatedDate = forUtility.getFormatedDateString(dateobj,forUtility.APPLICATION_DATE_FORMAT);  
    if (txnData) {
      this.view.lblBankName.text = txnData.fromAccountType; 
      this.view.lblAmountValue.text = forUtility.formatAmountandAppendCurrencySymbol(txnData.amount);
      this.view.lblToAccountValue.text = txnData.fromAccountName;
      if (txnData.cashlessMode === "Self") {
        this.view.lblForCollectionByValue.text = "Self";
        this.view.lblPhoneNumber.setVisibility(false);
      } else {
        this.view.lblForCollectionByValue.text = txnData.cashlessPersonName;
        var contactType = cardlessModule.presentationController.getCashlessContactType() === "phone";
        this.view.lblPhoneNumber.text = contactType ? txnData.cashlessPhone : txnData.cashlessEmail;
      }
      this.view.lblTransactionDateValue.text = formatedDate;
      this.view.txtDescription.text = txnData.transactionsNotes ? txnData.transactionsNotes : "";
    }
  },
  
  updateRightPane: function() {
    var navMan = applicationManager.getNavigationManager();
    var data = navMan.getCustomInfo("frmCardLessConfWithdrawQR");
    var rightPane = this.view.RightPane;
    rightPane.flxFirstRow.flxCheckedRow.lblCheckedRowName.text = this.constructAccountName(data);
    rightPane.flxSecondRow.flxSecondCheckedRow.lblSecondCheckedRowName.text = data.cashlessMode;
    rightPane.flxThirdCheckedRow.lblThirdCheckedRowName.text = data.amount;
  },

  constructAccountName: function(data) {
    var fromAccountName = data.fromAccountName;
    var fromAccountNumber = data.fromAccountNumber;
    return fromAccountName + "..." + fromAccountNumber.slice(-4);
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
    var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    cardlessModule.presentationController.cancelCommonQR();
  }
});