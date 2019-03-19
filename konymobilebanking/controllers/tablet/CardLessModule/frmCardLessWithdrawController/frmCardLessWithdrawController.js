define({
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager
      .getPresentationFormUtility()
      .initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    var navMan = applicationManager.getNavigationManager();
    var data = navMan.getCustomInfo(
      "selectedAccountDataForCardLessCashWithdrawal"
    );
    if (kony.sdk.isNullOrUndefined(data) || data === {})
      data = navMan.getCustomInfo("frmCardLessWithdraw");
    this.initComponents(data);
    this.updateRightPane(data);
    this.initActions();
    this.initHeaderActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
    var self = this;
    this.view.btnContinue.onClick = function() {
      var inputAmount = self.view.inputAmount;
      var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
      cardlessModule.presentationController.setTransactionAmount(inputAmount.getAmount());
    };
    this.changeButtonState(false);
  },

  populateDetails: function() {
    var navMan = applicationManager.getNavigationManager();
    var data = navMan.getCustomInfo("frmCardLessWithdraw");
    var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    if (data) {
      this.view.lblBank.text = cardlessModule.presentationController.getFromBankName();
      this.view.lblFromAccountValue.text = data.fromAccountName;
      this.view.lblBalanceValue.text = data.fromAccountBalance;
      if (data.amount) {
        this.view.lblAmount.text = data.amount;
        this.keypadString = data.amount;
        this.fv.checkAmountLength(this.keypadString);
      }
    }
  },

  initComponents: function(data) {
    var self = this;
    var configurationManager = applicationManager.getConfigurationManager();
    var inputAmountView = this.view.inputAmount;
    inputAmountView.defaultSymbol = configurationManager.getCurrencyCode();
    inputAmountView.defaultAmount = "0.00";
    inputAmountView.clear();
    if (data.amount && data.amount !== "0.00") {
      inputAmountView.setAmount(data.amount);
      this.changeButtonState(true);
    }

    var fromAccountView = this.view.FromAccount;
    var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    var bankName = cardlessModule.presentationController.getFromBankName();
    fromAccountView.setData(this.constructAccountName(data), bankName, data.fromAccountBalance, data.fromAccountType);
    fromAccountView.onActionHandler = function() {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var cardLessMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
      cardLessMod.presentationController.showFromAccounts();
    };

    fromAccountView.setActionI18Title("kony.mb.common.change");
    fromAccountView.setTitleI18Name("kony.mb.common.FromAccount");

    var keyPadView = this.view.digitkeypad;
    keyPadView.onDigitEntered = function(digit) {
      inputAmountView.addDigit(digit);
      self.changeButtonState(true);
    };

    keyPadView.onDigitRemoved = function() {
      inputAmountView.removeDigit();
      if (inputAmountView.getAmount() === "0.00") {
        self.changeButtonState(false);
      }
    };
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
  },

  changeButtonState: function(isEnabled) {
    var button = this.view.btnContinue;
    button.setEnabled(isEnabled);
    button.skin = isEnabled ? "sknBtnRnd4pxffffffSSPReg36pxTab" : "sknBtnBgf9f9f9SSP36Pxa0a0a0Tab";
  },

  updateRightPane: function(data) {
    var rightPane = this.view.RightPane;
    rightPane.flxFirstRow.flxCheckedRow.lblCheckedRowName.text = this.constructAccountName(data);
    rightPane.flxSecondActiveRow.isVisible= false;
    rightPane.flxSecondCheckedRow.isVisible = true;
    rightPane.flxSecondInActiveRow.isVisible = false;
    
    var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
	var cashlessmode = cardLessModule.presentationController.getcashlessMode();
    rightPane.lblSecondCheckedRowLabel.text = kony.i18n.getLocalizedString("kony.mb.cardLess.cashRecipient");
    if(cashlessmode.trim().toLowerCase()==="self"){
      rightPane.lblSecondCheckedRowName.text = kony.i18n.getLocalizedString("kony.mb.cardLess.self");
    }
    else{
      var recipient_firstName = cardLessModule.presentationController.getCashlessFirstName();
      rightPane.lblSecondCheckedRowName.text = recipient_firstName;
    }    
  },

  constructAccountName: function(data) {
    var fromAccountName = data.fromAccountName;
    var fromAccountNumber = data.fromAccountNumber;
    return fromAccountName + "..." + fromAccountNumber.slice(-4);
  },

  bindGenericError: function (errorMsg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, errorMsg);
  }
});
