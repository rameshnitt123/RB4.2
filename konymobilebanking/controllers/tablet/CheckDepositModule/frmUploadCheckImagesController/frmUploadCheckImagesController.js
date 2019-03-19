define({
  depositModule: null,
  isIpadDevice: null,
  init: function() {
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
	this.initHeaderActions();
	this.getDataFromAccount();
	this.initActions();
	applicationManager.getPresentationUtility().dismissLoadingScreen();
	var navManager = applicationManager.getNavigationManager();
	var currentForm = navManager.getCurrentForm();
	applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },

  initActions: function() {
    this.view.flxShadow.isVisible = !this.isIpad();
	this.setInitialUI();
	this.setCameraProperties();
	this.view.camFront.onCapture = this.onFrontCamCapture;
	this.view.camBack.onCapture = this.onBackCamCapture;
	this.view.btnReTakeFront.onClick = this.onReTakeFrontClick;
	this.view.btnReTakeBack.onClick = this.onReTakeBackClick;
	this.view.btnContinue.onClick = this.btnContinueOnClick;
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

  btnContinueOnClick: function() {
	applicationManager.getPresentationUtility().showLoadingScreen();
	this.getCheckDepositModule().presentationController.navigateToConfirmTransfer();
  },

  setInitialUI: function() {
	this.view.flxFrontUploaded.setVisibility(false);
	this.view.flxBackUploaded.setVisibility(false);
	this.view.flxFront.setVisibility(true);
	this.view.flxBack.setVisibility(true);
	var depObj = this.getCheckDepositModule().presentationController.getDepositObjInView();

	if (depObj) {
	  if (depObj.checkImage) {
		this.view.flxFrontUploaded.setVisibility(true);
		this.view.flxFront.setVisibility(false);
	  }

	  if(depObj.checkImageBack) {
		this.view.flxBackUploaded.setVisibility(true);
		this.view.flxBack.setVisibility(false);
	  }
	  this.changeButtonState();
	} 
  },

  afterImageCapture: function(orientation) {
	if (orientation === "front") {
	  this.changeButtonState();
	  this.view.flxFront.setVisibility(false);
	  this.view.flxFrontUploaded.setVisibility(true);
	} else {
	  this.changeButtonState();
	  this.view.flxBack.setVisibility(false);
	  this.view.flxBackUploaded.setVisibility(true);
	}
	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  onFrontCamCapture: function() {
	this.setPicture(this.view.camFront, this.view.imgCheckFront, "front");
  },

  onBackCamCapture: function() {
	this.setPicture(this.view.camBack, this.view.imgCheckBack, "back");
  },

  setPicture: function(typeCam, typeCamImg, typeName) {
	var rawBytes = typeCam.rawBytes;
	var base64Str = kony.convertToBase64(rawBytes);

	if (this.isIpad()) {
	  typeCamImg.base64 = base64Str;
	} else {
	  typeCamImg.rawBytes = rawBytes;
	}
	this.getCheckDepositModule().presentationController.captureCheckImage(base64Str, typeName);
  },

  onReTakeFrontClick: function() {
	this.reTakePicture(this.view.camFront, "front");
  },

  onReTakeBackClick: function() {
	this.reTakePicture(this.view.camBack, "back");
  },

  reTakePicture: function(typeCam) {
	if(this.isIpad()) {
	  typeCam.takePicture();
	} else {
	  typeCam.openCamera();
	}
	KNYMetricsService.sendCustomMetrics("frmUploadCheckImages", {"Check Retake": "Check Image Retake"});
  },

  setCameraProperties: function() {
	if(!this.isIpad()) {
	  this.view.camFront.cameraOptions = {
		hideControlBar: true
	  };
	  this.view.camBack.cameraOptions = {
		hideControlBar: true
	  };
	}
  },

  getCheckDepositModule: function() {	
	if (!this.depositModule) {
	  this.depositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
	}
	return this.depositModule;
  },

  isIpad: function() {
	if (!this.isIpadDevice) {
	  this.isIpadDevice = applicationManager.getDeviceUtilManager().isIpad();
	}
	return this.isIpadDevice;
  },

  getDataFromAccount: function() {	
	var configurationManager = applicationManager.getConfigurationManager();
	var symbol = configurationManager.getCurrencyCode();
	var depositObj = this.getCheckDepositModule().presentationController.getDepositObjInView();
	var data = depositObj;
	var collapsedAccountName = this.constructAccountName(data);
	this.setRightPaneData(collapsedAccountName, data.amount, symbol);
  },

  setRightPaneData: function(data, depositAmount, symbol) {
	var rightPane = this.view.RightPane;
	rightPane.flxFirstRow.flxCheckedRow.lblCheckedRowName.text = data;
	rightPane.flxSecondRow.flxSecondCheckedRow.lblSecondCheckedRowName.text = symbol + '' + depositAmount;
  },

  constructAccountName: function(data) {
	var fromAccountName = data.toAccountName;
	var fromAccountNumber = data.toAccountNumber;
	return fromAccountName + "..." + fromAccountNumber.slice(-4);
  },

  changeButtonState: function() {
	var depObj = this.getCheckDepositModule().presentationController.getDepositObjInView();
	var isEnabled = depObj.checkImage && depObj.checkImageBack ? true : false;	
	this.view.btnContinue.setEnabled(isEnabled);
	this.view.btnContinue.skin = isEnabled ? "sknBtnRnd4pxffffffSSPReg36pxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
  }
});