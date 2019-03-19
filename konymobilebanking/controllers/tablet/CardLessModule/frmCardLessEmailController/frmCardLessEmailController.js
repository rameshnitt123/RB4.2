define({

	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
  
    preShow: function() {
      	this.initActions(); 
      	this.initHeaderActions();
        this.setDefaultEmailId();
      	this.updateRightPane();
      	var navManager = applicationManager.getNavigationManager();
      	var currentForm = navManager.getCurrentForm();
      	applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },

	initActions: function() {
 		this.view.txtEmailId.onTextChange = this.changeEmailId;
 		this.view.btnPickFromContacts.onClick = this.btnPickFromContactsOnClick;
 		this.view.btnConfirm.onClick = this.btnContinueOnClick;
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
 
  	setDefaultEmailId: function() {
     	this.view.txtEmailId.setFocus(true);
      	var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        var data = cardLessModule.presentationController.getTransactionObject();
        var email = data.cashlessEmail;
      	this.view.txtEmailId.text = email ? email : "";
      	var navMan = applicationManager.getNavigationManager();
      	var newTRNflag = navMan.getCustomInfo("frmCardlessEmailNewTRNflag");
      	if(newTRNflag === true){
          this.view.txtEmailId.text = "";
          navMan.setCustomInfo("frmCardlessEmailNewTRNflag", false);
        }
      	this.changeEmailId();
    },
  
	changeEmailId: function() {
		var isEnabled = this.view.txtEmailId.text !== "";
      	this.changeButtonState(isEnabled);		
	},
 
	changeButtonState: function(isEnabled) {
		this.view.btnConfirm.setEnabled(isEnabled);
		this.view.btnConfirm.skin = isEnabled ? "sknBtnRnd4pxffffffSSPReg36pxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
	},
  
	btnPickFromContactsOnClick: function() {
		var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
		cardLessModule.presentationController.navigateToContacts();
	},
  
	btnContinueOnClick: function() {
		var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
		cardLessModule.presentationController.setCardlessEmail(this.view.txtEmailId.text, "frmCardLessRecName");
	},
  
	bindGenericError: function (errorMsg) {
		applicationManager.getPresentationUtility().dismissLoadingScreen();
		applicationManager.getDataProcessorUtility().showToastMessageError(this, errorMsg);
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
	}
});