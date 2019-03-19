define({
   	
	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
  
	preShow: function() {
		this.initActions();
      	var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
      	var fullName=cLMod.presentationController.getCashlessFirstName();
      	//var lastName=cLMod.presentationController.getCashlessLastName();
      	if(fullName!=="" ){
      		//this.view.txtFirstName.text=firstName;
      		//this.view.txtLastName.text=lastName;
          	this.view.txtRecipientName.text = fullName;
          	var navMan = applicationManager.getNavigationManager();
			navMan.setCustomInfo("frmCardlessFullNameNewTRNflag", false);
          	
      	}
      	this.initHeaderActions(); 
		this.setupView();
      	this.updateRightPane();
		applicationManager.getPresentationUtility().dismissLoadingScreen();
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
	},
  
  	initActions: function() {
		this.view.txtRecipientName.onTextChange = this.changeName;
 		this.view.btnConfirm.onClick = this.continueOnClick;
    },

  	initHeaderActions: function() {
      	var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    	if (!isIpad) {
      		this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
	 		this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
        }
	},	
  
    handleCancelAction: function() {
        var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cardLessModule.presentationController.cancelCommon();
    },
  
	backNavigation: function() {
		var navMan = applicationManager.getNavigationManager();
		navMan.goBack();
	},
  
	setupView: function() {
      	var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
      	var navManager = applicationManager.getNavigationManager(); 
 		var data = navManager.getCustomInfo("frmCardLessRecName");
 		var firstName = cardLessModule.presentationController.getCashlessFirstName();
      	this.view.txtRecipientName.skin= "sknTbx424242SSP28pxTab";
      	this.view.txtRecipientName.text = firstName ? firstName : "";
      	var navMan = applicationManager.getNavigationManager();
      	var newTRNflag = navMan.getCustomInfo("frmCardlessFullNameNewTRNflag");
      	if(newTRNflag === true){
          this.view.txtRecipientName.text = "";
          navMan.setCustomInfo("frmCardlessFullNameNewTRNflag", false);
        }
      	this.changeName();
    },
  
	changeName: function() {
	    var isEnabled = this.view.txtRecipientName.text !== "";
	    this.changeButtonState(isEnabled);
	},
  
	changeButtonState: function(isEnabled) {
		this.view.btnConfirm.setEnabled(isEnabled);
		this.view.btnConfirm.skin = isEnabled ? "sknBtnBg0A78D1SSP30PxTab" : "sknBtna0a0a0SSPReg26px";
	},
  
    continueOnClick: function() {
      	applicationManager.getPresentationUtility().showLoadingScreen();
        var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
      	var fullName = this.view.txtRecipientName.text;
      	var names = fullName.split(" ");
        cardLessModule.presentationController.setCardlessPersonName(names);
        cardLessModule.presentationController.commonFunctionForNavigation("frmCardLessWithdraw");
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