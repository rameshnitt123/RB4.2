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
    this.view.btnViewTransactionDetails.text = "";
    if ((this.popupMsg !== null) && (this.popupMsg !== '')) {
      this.showPopupSuccess();
    }
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
    this.view.btnSeeWithdrawCash.onClick = this.btnSeeWithdrawCashOnClick;
    this.view.btnDone.onClick = this.btnDoneOnClick;
    this.view.btnFindNearByAtm.onClick = this.findNearByATM;  
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

  showMsg: function() {
    if (this.userdetails.phone) {
      kony.phone.sendSMS(this.cardlessTxnDetails.cashlessPhone, "Dear " + this.cardlessTxnDetails.cashlessPersonName + 
                         ", You have received " + this.cardlessTxnDetails.amount + " from mobile " + this.userdetails.phone + 
                         ". To withdraw cash, please enter the Withdrawal Code - " + this.createDetails.otp + 
                         " and 4-digit Secure Code shared by the sender at the ATM.");
    } else if (this.userdetails.email) {
      kony.phone.sendSMS(this.cardlessTxnDetails.cashlessPhone, "Dear " + this.cardlessTxnDetails.cashlessPersonName + 
                         ", You have received " + this.cardlessTxnDetails.amount + " from email " + this.userdetails.email + 
                         ". To withdraw cash, please enter the Withdrawal Code - " + this.createDetails.otp + 
                         " and 4-digit Secure Code shared by the sender at the ATM.");
    } else {
      kony.phone.sendSMS(this.cardlessTxnDetails.cashlessPhone, "Dear " + this.cardlessTxnDetails.cashlessPersonName + 
                         ", You have received " + this.cardlessTxnDetails.amount + ". To withdraw cash, please enter the Withdrawal Code - " + 
                         this.createDetails.otp + " and 4-digit Secure Code shared by the sender at the ATM.");
    }
  },

  showMail: function() {
    if (this.userdetails.phone) {
      kony.phone.openEmail([this.cardlessTxnDetails.cashlessEmail], [], [], "Cardless Cash Withdrawal", "Dear " + 
                           this.cardlessTxnDetails.cashlessPersonName + ", You have received " + this.cardlessTxnDetails.amount + 
                           " from mobile " + this.userdetails.phone + ". To withdraw cash, please enter the Withdrawal Code - " + 
                           this.createDetails.otp + " and 4-digit Secure Code shared by the sender at the ATM.");
    } else if (this.userdetails.email) {
      kony.phone.openEmail([this.cardlessTxnDetails.cashlessEmail], [], [], "Cardless Cash Withdrawal", "Dear " + 
                           this.cardlessTxnDetails.cashlessPersonName + ", You have received " + this.cardlessTxnDetails.amount + 
                           " from email "+this.userdetails.email + ". To withdraw cash, please enter the Withdrawal Code - " + this.createDetails.otp + 
                           " and 4-digit Secure Code shared by the sender at the ATM.");          
    } else {
      kony.phone.openEmail([this.cardlessTxnDetails.cashlessEmail], [], [], "Cardless Cash Withdrawal", "Dear " + 
                           this.cardlessTxnDetails.cashlessPersonName + ", You have received " + this.cardlessTxnDetails.amount + 
                           ". To withdraw cash, please enter the Withdrawal Code - " + this.createDetails.otp + 
                           " and 4-digit Secure Code shared by the sender at the ATM.");          
    }
  },

  showPopupSuccess: function() {
    var self = this;
    this.timerCounter = parseInt(this.timerCounter) + 1;
    var timerId = "timerPopupSuccess" + this.timerCounter;
    this.view.flxPopup.skin = "sknFlx43ce6eTab";
    this.view.customPopup.imgPopup.src = "confirmation.png";
    this.view.customPopup.lblPopup.text = this.popupMsg;
    this.view.flxPopup.setVisibility(true);
    kony.timer.schedule(timerId, function() {
      self.view.flxPopup.setVisibility(false);
    }, 3, false);
  },

  bindGenericSuccess: function(msg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
  },

  showTransactionWithdrawalToastMessage: function(transactionID) {
    this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardless.withdrawalMessage") + transactionID);
  },

  btnDoneOnClick: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    cardLessModule.presentationController.getCardlessPendingAndPostedTransactions();
  },

  btnSeeWithdrawCashOnClick: function() {
    kony.application.openURL("https://youtu.be/UGJMk5_ZNrk");
  },

  populateDetails: function() {
    var navMan = applicationManager.getNavigationManager();
    var txnDetails = navMan.getCustomInfo("frmCardLessCWCode");
    this.createDetails = txnDetails.createResponse;
    this.cardlessTxnDetails = txnDetails.transnDetails;
    this.cardlessTxnDetails = JSON.parse(JSON.stringify(txnDetails.transnDetails));
    var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    this.cardlessTxnDetails.amount = cardLessModule.presentationController.processAmount(this.cardlessTxnDetails.amount);
    this.userdetails = txnDetails.userDetails;
    this.view.lblCashWithdrawalCodeVal.text = this.createDetails.otp;
    this.view.lblExpiresIn.text = "Expires in:" + this.createDetails.validDate;
    if (this.cardlessTxnDetails.cashlessMode === "Self") {
      this.view.flxShareWithdrawCode.setVisibility(false);
    } else {
      this.view.flxShareWithdrawCode.setVisibility(true);
      this.view.flxMsg.onClick = this.showMsg;
      this.view.flxMail.onClick = this.showMail;
    }
  }
});