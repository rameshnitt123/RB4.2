define({ 
	
	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
  
	preShow: function() {
		this.updateRightPane();
      	this.initActions();
      	this.initHeaderActions();
      	this.setDefaultNumber();
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
	},
  
	initActions: function() {
		this.view.btnPickFromContacts.onClick = this.pickFromContactList;
 		this.view.btnContinue.onClick = this.continueOnClick;
      	this.view.digitkeypad.onDigitEntered = this.addDigit;
      	this.view.digitkeypad.onDigitRemoved = this.removeDigit;
      	this.view.inputPhoneNumber.onPhoneNumberEntered = this.changeContinueBtnState.bind(this, true);
      	this.view.inputPhoneNumber.onPhoneNumberRemoved = this.changeContinueBtnState.bind(this, false);
	},
  
  	initHeaderActions: function() {
    	var isIpad = applicationManager.getDeviceUtilManager().isIpad();
		if (!isIpad) {
			this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
			this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
		} 
    },

	backNavigation: function() {
		var navMan = applicationManager.getNavigationManager();
		navMan.goBack();
	},  

	handleCancelAction: function() {
		var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
		cardLessModule.presentationController.cancelCommon();
	},
  
	pickFromContactList: function() {
		var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
		cardLessModule.presentationController.navigateToContacts();
	},
  
	addDigit: function(char) {
		var inputPhoneNumber = this.view.inputPhoneNumber;
		inputPhoneNumber.addDigit(char);
	},
  
	removeDigit: function() {
		var inputPhoneNumber = this.view.inputPhoneNumber; 
		inputPhoneNumber.removeDigits();
	},
 
	continueOnClick: function() {   
		var inputPhoneNumber = this.view.inputPhoneNumber;
      	var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
		cardLessModule.presentationController.setCardlessPhoneNumber(inputPhoneNumber.getPhoneNumber(), "frmCardLessRecName");   
	},
  
	setDefaultNumber: function() {
		var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        var data = cardLessModule.presentationController.getTransactionObject();
        var phoneNum = data.cashlessPhone;
      	var inputPhoneNumber = this.view.inputPhoneNumber;
		if (phoneNum) {
        	inputPhoneNumber.setPhoneNumber(phoneNum); 	
		}
      	var navMan = applicationManager.getNavigationManager();
      	var newTRNflag = navMan.getCustomInfo("frmCardlessPhoneNumberNewTRNflag");
      	if(newTRNflag === true){
          inputPhoneNumber.clearPhoneNumber();
          navMan.setCustomInfo("frmCardlessPhoneNumberNewTRNflag", false);
        }
	},
  
	updateRightPane: function() {
		var navManager = applicationManager.getNavigationManager();
      	var data = navManager.getCustomInfo("frmCardLessWithdraw");
		var rightPane = this.view.RightPane;
 		if (data) {
 			rightPane.lblSecondCheckedRowName.text = this.constructAccountName(data);
        }
	},

	constructAccountName: function(data) {
		var fromAccountName = data.fromAccountName;
		var fromAccountNumber = data.fromAccountNumber;
		return fromAccountName + "..." + fromAccountNumber.slice(-4);
	}, 
  
	changeContinueBtnState: function(isEnable) {
		this.view.btnContinue.setEnabled(isEnable);
		this.view.btnContinue.skin = isEnable ? "sknBtn0a78d1Brd2pxSSP30pxTab" : "sknBtnf9f9f9Brd2pxSSP30pxTab";
	},
  	
	bindGenericError: function (errorMsg) {
      	applicationManager.getPresentationUtility().dismissLoadingScreen();
		applicationManager.getDataProcessorUtility().showToastMessageError(this, errorMsg);
	}
});