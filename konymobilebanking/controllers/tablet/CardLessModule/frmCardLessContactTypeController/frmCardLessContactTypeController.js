define({ 

	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
  
	preShow: function() {
      	this.initActions();
      	this.initHeaderActions();
      	this.updateRightPane();
      	applicationManager.getPresentationUtility().dismissLoadingScreen();
		var navManager = applicationManager.getNavigationManager();
      	var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
	},

	initActions: function() {
      	this.view.btnEmail.onClick = this.chooseContactType.bind(this, "email");      
      	this.view.btnPhoneNumber.onClick = this.chooseContactType.bind(this, "phone");
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
  
  	chooseContactType: function(contactType) {
    	var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
		cardLessModule.presentationController.setCardlessContactType(contactType);  
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