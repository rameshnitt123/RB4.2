define({ 
  depositModule: null,
  isIpadDevice: null,
  init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
	this.initActions();
	applicationManager.getPresentationUtility().dismissLoadingScreen();
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },

  initActions: function() {
	this.initHeaderActions();
    this.view.flxShadow.isVisible = !this.isIpad();
	this.setDescription();
	this.accountData();
	this.view.btnConfirm.onClick = this.confirmHandle;
	this.view.txtDescription.onTextChange = this.descriptionHandle;
  },

  initHeaderActions: function() {
	if (!this.isIpad()) {
	  this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
	  this.view.customHeaderTablet.flxHeader.btnRight.onClick = this.backHandle;
	}
  },

  backNavigation: function() {
	var navManager = applicationManager.getNavigationManager();	
	navManager.goBack();
  },

  backHandle: function() {
	this.getCheckDepositModule().presentationController.cancelDeposit();
  },

  confirmHandle: function(){
	applicationManager.getPresentationUtility().showLoadingScreen();
	this.getCheckDepositModule().presentationController.createDeposit();
  },

  accountData: function() {
	var configurationManager = applicationManager.getConfigurationManager();
	var symbol = configurationManager.getCurrencyCode();
	var depositObject = this.getCheckDepositModule().presentationController.getDepositObjInView();
	var collapsedAccountName = this.constructAccountName(depositObject);
	var constructAccountValue = this.constructAccountValue(depositObject, symbol);
	this.view.lblAmountValue.text = constructAccountValue;
	this.view.lblToAccountValue.text = collapsedAccountName;
	this.view.lblBankName.text = depositObject.bankName;
	this.setPicture(depositObject);
	this.setRightPaneData(collapsedAccountName, constructAccountValue);
  },

  setPicture: function(data) {
	var base64StrFront = data.checkImage;
	var base64StrBack = data.checkImageBack;
	var rawBytesFront = kony.convertToRawBytes(base64StrFront);
	var rawBytesBack = kony.convertToRawBytes(base64StrBack);

	if (this.isIpad()) {
	  this.view.imgFront.base64 = base64StrFront;
	  this.view.imgBack.base64 = base64StrBack;
	} else {
	  this.view.imgFront.rawBytes = rawBytesFront;
	  this.view.imgBack.rawBytes = rawBytesBack;
	}
  },

  setRightPaneData: function(data, depositAmount) {
	var rightPane = this.view.RightPane;
	rightPane.flxFirstRow.flxCheckedRow.lblCheckedRowName.text = data;
	rightPane.flxSecondRow.flxSecondCheckedRow.lblSecondCheckedRowName.text = depositAmount;
  },

  setDescription: function() {
	var depObj = this.getCheckDepositModule().presentationController.getDepositObjInView();
	if(!depObj.transactionsNotes) {
	  this.view.txtDescription.text = "";
	} else {
	  this.view.txtDescription.text = depObj.notes;
	}
  },

  descriptionHandle: function() {
	var description = this.view.txtDescription.text;
	this.getCheckDepositModule().presentationController.setNotesToDepositObject(description);
  },

  getCheckDepositModule: function() {	
	if (!this.depositModule) {
	  this.depositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
	}
	return this.depositModule;
  },

  constructAccountValue: function(data, symbol) {
	var accountSymbol = symbol;
	var fromAccountValue = data.amount;
	return accountSymbol + "" + fromAccountValue;
  },

  constructAccountName: function(data) {
	var fromAccountName = data.toAccountName;
	var fromAccountNumber = data.toAccountNumber;
	return fromAccountName + "..." + fromAccountNumber.slice(-4);
  },

  isIpad: function() {
	if (!this.isIpadDevice) {
	  this.isIpadDevice = applicationManager.getDeviceUtilManager().isIpad();
	}
	return this.isIpadDevice;
  },
});