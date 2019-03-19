define({ 
  depositModule: null,
  init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
//     this.view.customPopup.flxPopupWrapper.lblPopup.doLayout =  function(){   //calling anonymous function as binding function does not works for doLayout
//           var labelWidth = this.frame.width;
//           var totallength =  parseInt(labelWidth)+25;         				   //20 - width of image and 5 padding
//           var screenWidth = kony.os.deviceInfo().screenWidth;
//           var screenHeight = kony.os.deviceInfo().screenHeight;

//           if(screenWidth>screenHeight){
//             screenWidth = screenHeight;        								    //as orientation of app is fixed so taking minimum width as screen width
//           }
//           var remainingSpace = parseInt(screenWidth) - parseInt(totallength);
//           var leftInDP = parseInt(remainingSpace/2);
//           this.parent.imgPopup.left=leftInDP+"dp";
//           this.parent.forceLayout();  
//         };
  },

  preShow: function() {
	this.setInitialData();
	this.initActions();
	applicationManager.getPresentationUtility().dismissLoadingScreen();
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },

  initActions: function() {
	this.initHeaderActions();
	this.initComponents();
	this.view.flxAmount.btnContinue.onClick = this.onClickContinue; 
  },

  initHeaderActions: function() {
	var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    this.view.flxShadow.isVisible = isIpad;
	if (!isIpad) {
	  this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
	  this.view.customHeaderTablet.flxHeader.btnRight.onClick = this.backHandle;
	}
  },

  setInitialData: function() {
	var navManager = applicationManager.getNavigationManager();
	var customData = navManager.getCustomInfo("frmDepositAmountCD");
	var data = customData.accountInfo;
	var configurationManager = applicationManager.getConfigurationManager();
	var inputAmountView = this.view.inputAmount;
	inputAmountView.defaultSymbol = configurationManager.getCurrencyCode();
	inputAmountView.defaultAmount = "0.00";
	var newDepositFromAccountDetailsFlag = navManager.getCustomInfo("newDepositFromAccountDetailsFlag");
	if (customData.isNewCheckDeposit || newDepositFromAccountDetailsFlag) {
	  customData.isNewCheckDeposit = false;
       navManager.setCustomInfo("newDepositFromAccountDetailsFlag", false);
	  navManager.setCustomInfo("frmDepositAmountCD", customData);
	  this.clearAmount();
	} else {
	  if (data.amount) {
		inputAmountView.setAmount(data.amount);
		this.changeButtonState();
	  }
	}
	var collapsedAccountName = this.constructAccountName(data);
	var fromAccountView = this.view.FromAccount;
	fromAccountView.setData(collapsedAccountName, data.lblBankName, data.lblAccountBalValue, data.AvailableBalStaticLabel);
	fromAccountView.onActionHandler = this.clickBtnChange;
	fromAccountView.setActionI18Title("kony.tab.common.Change");
	fromAccountView.setTitleI18Name("kony.tab.transfers.toAccount");
	this.setRightPaneData(collapsedAccountName);
  },

  backNavigation: function() {
	var navManager = applicationManager.getNavigationManager();	
	navManager.goBack();
  },

  backHandle: function() {
	this.getCheckDepositModule().presentationController.cancelDeposit();
	this.clearAmount();
  },

  clickBtnChange: function() {
	applicationManager.getPresentationUtility().showLoadingScreen();
	this.getCheckDepositModule().presentationController.getToAccounts(true);
  },

  onClickContinue: function() {
	var configManager = applicationManager.getConfigurationManager();
	var amountEntered = parseFloat(this.view.inputAmount.getAmount());
	var minLimit = parseFloat(configManager.getConfigurationValue("minRDCLimit"));
	var maxLimit = parseFloat(configManager.getConfigurationValue("maxRDCLimit"));

	if (amountEntered < minLimit) {
	  this.bindGenericError(this.getString("kony.tab.entitlements.minTransactionLimitUnreached") +  " " + configManager.getCurrencyCode() + minLimit); 
	} else if (amountEntered > maxLimit) {
	  this.bindGenericError(this.getString("kony.tab.entitlements.maxTransactionLimitExceeded") +  " " + configManager.getCurrencyCode() + maxLimit);  
	} else {
	  applicationManager.getPresentationUtility().showLoadingScreen();
	  var navManager = applicationManager.getNavigationManager();
	  var customData = navManager.getCustomInfo("frmDepositAmountCD");
	  var data = customData.accountInfo;
	  var depositData = {
		toAccountNumber: data.lblAccountNumber,
		toAccountName: data.lblAccountName,
		bankName: data.lblBankName,
		amount: amountEntered.toString()
	  };  
	  this.getCheckDepositModule().presentationController.setDepositDetails(depositData);
	}
  },

  initComponents: function() {
	var self = this;
	var keyPadView = this.view.digitkeypad;
	var inputAmountView = this.view.inputAmount;

	keyPadView.onDigitEntered = function(digit) {
	  inputAmountView.addDigit(digit);
	  self.changeButtonState();
	};

	keyPadView.onDigitRemoved = function() {
	  inputAmountView.removeDigit();
	  self.changeButtonState();
	}; 
  },

  setRightPaneData: function(data) {
	var rightPane = this.view.RightPane;
	rightPane.flxFirstRow.flxCheckedRow.lblCheckedRowName.text = data;	
  },

  changeButtonState: function() {	
	var enteredAmount = this.view.inputAmount.getAmount();
	var isEnabled = enteredAmount !== "";
	this.view.btnContinue.setEnabled(isEnabled);
	this.view.btnContinue.skin = isEnabled ? "sknBtnRnd4pxffffffSSPReg36pxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
  },

  bindGenericError: function (errorMsg) {
	applicationManager.getPresentationUtility().dismissLoadingScreen();
	var scopeObj = this;
	applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  },

  getCheckDepositModule: function() {	
	if (!this.depositModule) {
	  this.depositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
	}
	return this.depositModule;
  },

  getString: function(key) {
	return applicationManager.getPresentationUtility().getStringFromi18n(key);
  },

  constructAccountName: function(data) {
	var fromAccountName = data.lblAccountName;
	var fromAccountNumber = data.lblAccountNumber;
	return fromAccountName + "..." + fromAccountNumber.slice(-4);
  },

  clearAmount: function() {
	this.view.inputAmount.clear();
  }
});