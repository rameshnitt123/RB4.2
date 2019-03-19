define({
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initFrequencyView();
    this.initActions();
    this.initHeaderActions();
    this.initComponents();
    this.updateRightPane();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initFrequencyView: function() {
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payeeMod.presentationController.getP2PObject();
    var frequencyView = this.view.frequencyView;
    var frequencyType = data.frequencyType;
    frequencyView.setFirstRowNamei18("kony.mb.tablet.transferFrequency");
    frequencyView.setFirstRowValue(data.frequencyType);
    frequencyView.setThirdRowNamei18("kony.mb.Transfers.setFrequency");
    frequencyView.setThirdRowValue(data.duration);
    frequencyView.setActiveTabValue(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.enterNumberofRecurrence"));
    frequencyView.activeTabSkin = "sknLbl3E4F56SSP32pxTab";
  },

  initActions: function() {
    this.view.btnContinue.onClick = this.continueAction;
  },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.backAction;
      this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
    }
  },
  
  initComponents: function() {
    var self = this;
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payeeMod.presentationController.getP2PObject();
    var recurrenceView = this.view.inputAmount;
    recurrenceView.enableAmountMode = false;
    recurrenceView.clear();
    var recurrence = data.numberOfRecurrences;
    if (recurrence) {
      recurrenceView.setAmount(recurrence);
      this.changeButtomState(true);
    } else {
      this.changeButtomState(false);
    }
    var digitalKeyPad = this.view.digitkeypad;
    digitalKeyPad.onDigitEntered = function(digit) {
      recurrenceView.addDigit(digit);
      self.changeButtomState(true);
    };
    
    digitalKeyPad.onDigitRemoved = function() {
      recurrenceView.removeDigit();
      if (recurrenceView.getAmount() === "00") {
        self.changeButtomState(false);
      }
    };
  },

  handleCancelAction: function() {
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payeeMod.presentationController.cancelCommon();
  },

  backAction: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  },

  continueAction: function() {  
    var data = this.view.inputAmount.getAmount();
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payeeMod.presentationController.transferSetRecurrence(data);
  },

  changeButtomState: function(isEnabled) {
    var button = this.view.btnContinue;
    button.setEnabled(isEnabled);
    button.skin = isEnabled ? "sknBtnBg0A78D1SSP30PxTab" : "sknBtnBgf9f9f9SSP36Pxa0a0a0Tab";
  }, 

  updateRightPane: function() {
    var configurationManager = applicationManager.getConfigurationManager();
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payeeMod.presentationController.getP2PObject();
    var amount =  configurationManager.getCurrencyCode() + " " + data.amount;
    var fromAccountName = this.constructAccountName(data);
    var rightPane = this.view.RightPane;
    rightPane.lblCheckedRowName.text = data.payPersonName;
    rightPane.lblSecondCheckedRowName.text = fromAccountName;
    rightPane.lblThirdCheckedRowName.text = amount;
  },

  constructAccountName: function(data) {
    var fromAccountName = data.fromAccountName;
    var fromAccountNumber = data.fromAccountNumber;
    return fromAccountName + "..." + fromAccountNumber.slice(-4);
  }
});