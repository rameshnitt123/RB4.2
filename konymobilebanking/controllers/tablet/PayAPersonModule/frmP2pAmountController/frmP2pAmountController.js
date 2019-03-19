define({
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payeeMod.presentationController.getP2PObject();
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
    this.view.btnContinue.onClick = this.continueOnClick;	
    this.changeButtomState(false);
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

  initComponents: function(data) {
    var self = this;
    var configurationManager = applicationManager.getConfigurationManager();
    var inputAmountView = this.view.inputAmount;
    inputAmountView.defaultSymbol = configurationManager.getCurrencyCode();
    inputAmountView.defaultAmount = "0.00";
    inputAmountView.clear();
    if (data.amount && data.amount !== "") {
      inputAmountView.setAmount(data.amount);
      if (data.amount !== "0.00") {
        this.changeButtomState(true);
      }
    }

    var fromAccountView = this.view.FromAccount;
    fromAccountView.setData(this.constructAccountName(data), data.fromBankName, data.fromAccountBalance, data.accountBalanceType);
    fromAccountView.onActionHandler = function() {
      var p2pModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      p2pModule.presentationController.getAccounts();
    };

    fromAccountView.setActionI18Title("kony.mb.common.change");
    fromAccountView.setTitleI18Name("kony.mb.common.FromAccount");

    var keyPadView = this.view.digitkeypad;
    keyPadView.onDigitEntered = function(digit) {
      inputAmountView.addDigit(digit);
      self.changeButtomState(true);
    };

    keyPadView.onDigitRemoved = function() {
      inputAmountView.removeDigit();
      if (inputAmountView.getAmount() === "0.00") {
        self.changeButtomState(false);
      }
    }; 
  },

  onHandleCancelAction: function() {
    var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    p2pMod.presentationController.cancelCommon();
  },

  continueOnClick: function() {
    var configManager = applicationManager.getConfigurationManager();
    var amountEntered = parseFloat(this.view.inputAmount.getAmount());
    var minLimit = configManager.getConfigurationValue("minP2PLimit");
    var maxLimit = configManager.getConfigurationValue("maxP2PLimit");
    if (amountEntered >= minLimit && amountEntered <= maxLimit) {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      var dataObject = payeeMod.presentationController.getP2PObject();
      var data = {
        amount: amountEntered,
        fromAccountName: dataObject.fromAccountName,
        fromAvlBal: dataObject.fromAccountBalance
      };

      payeeMod.presentationController.evaluateAmount(data.amount, data.fromAvlBal, data);  
    } else if(Number(amountEntered) < Number(configManager.getConfigurationValue("minP2PLimit"))) {
      this.bindGenericError(		 
        kony.i18n.getLocalizedString("kony.tab.entitlements.minTransactionLimitUnreached") 
        + " " + configManager.getCurrencyCode() + Number(configManager.getConfigurationValue("minP2PLimit"))); 
    } else if (Number(amountEntered) > Number(configManager.getConfigurationValue("maxP2PLimit"))) {
      this.bindGenericError(
        kony.i18n.getLocalizedString("kony.tab.entitlements.maxTransactionLimitExceeded")
        + " " + configManager.getCurrencyCode() + Number(configManager.getConfigurationValue("maxP2PLimit")));
    }
  },
  
  changeButtomState: function(isEnabled) {
    var button = this.view.btnContinue;
    button.setEnabled(isEnabled);
    button.skin = isEnabled ? "sknBtnBg0A78D1SSP30PxTab" : "sknBtnBgf9f9f9SSP36Pxa0a0a0Tab";
  },
  
  updateRightPane: function(data) {
    var rightPane = this.view.RightPane;
    rightPane.flxFirstRow.flxCheckedRow.lblCheckedRowName.text = data.payPersonName;
    rightPane.flxSecondRow.flxSecondCheckedRow.lblSecondCheckedRowName.text = this.constructAccountName(data);
  },
  
  constructAccountName: function(data) {
    var fromAccountName = data.fromAccountName;
    var fromAccountNumber = data.fromAccountNumber;
    return fromAccountName + "..." + fromAccountNumber.slice(-4);
  },

  bindGenericError: function (errorMsg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  }
});