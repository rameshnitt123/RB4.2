define({

  	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},

	preShow: function() {
		this.view.flxPopup.setVisibility(false);
		this.initActions();
      	this.initHeaderActions();
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
	},

	initActions: function() {
		this.view.btnNext.onClick = this.btnNextOnClick;
      	this.view.digitkeypad.onDigitEntered = this.addDigit;
    	this.view.digitkeypad.onDigitRemoved = this.removeDigit;
      	this.view.SecureCode.onCodeEntered = this.changeContinueBtnState.bind(this, true);
    	this.view.SecureCode.onCodeRevoked = this.changeContinueBtnState.bind(this, false);	 	
	},
  
  	initHeaderActions: function() {
		var isIpad = applicationManager.getDeviceUtilManager().isIpad();
		if (!isIpad) {
			this.view.customHeader.btnRight.onClick = this.cancelHandleAction;
          	this.view.customHeader.flxBack.onClick = this.backNavigation;
		}
	},
 
	cancelHandleAction: function() {
    	var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      	settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesDefaultLogin");  
    },
  
  	backNavigation: function() {
      	var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      	settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesPin");
    },
  	
  	addDigit: function(char) {
    	var inputPin = this.view.SecureCode;
    	inputPin.addDigit(char);
  	}, 

  	removeDigit: function() {
	    var inputPin = this.view.SecureCode; 
	    inputPin.removeDigit();
  	},
  
 	changeContinueBtnState: function(isEnable) {
    	this.view.btnNext.setEnabled(isEnable);
    	this.view.btnNext.skin = isEnable ? "sknBtn0a78d1SSP36pxTab" : "sknBtna0a0a0SSP36pxTab";
  	},
	  
	btnNextOnClick: function() {
		var inputPin = this.view.SecureCode;	
      	applicationManager.getPresentationUtility().showLoadingScreen(); 
		var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      	var code = inputPin.getEnteredCode();
		settingsMode.presentationController.verifyCurrPin(inputPin.getEnteredCode()); 
	},
  
	clearKeyPadString: function() {
   		var inputPin = this.view.SecureCode;
      	inputPin.clear();
  	},
  
  	bindGenericError: function(errorMsg) {
    	var self = this;
    	applicationManager.getDataProcessorUtility().showToastMessageError(self, errorMsg);
  	}
});