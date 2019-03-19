define({
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.defaultModeSelection();
        this.initActions();
        this.initHeaderActions();
        this.updateRightPane();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        this.view.btnICollect.onClick = this.chooseCashMode.bind(this, "Self");
        this.view.btnSomeoneCollect.onClick = this.chooseCashMode.bind(this, "others");
    },
    initHeaderActions: function() {
        var isIpad = applicationManager.getDeviceUtilManager().isIpad();
        if (!isIpad) {
            this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
            this.view.customHeaderTablet.btnRight.onClick = this.cancelHandleAction;
        }
    },
    cancelHandleAction: function() {
        var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cardLessModule.presentationController.cancelCommon();
    },
    backNavigation: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
	defaultModeSelection: function(){
		var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
		var mode = cardLessModule.presentationController.getcashlessMode();
      	
		if (mode === "Self") {
			this.view.btnICollect.skin = "sknBtnBgD8D8D8SSP30pxBrd24pxTab";
			this.view.btnSomeoneCollect.skin = "sknBtn424242SSPReg30pxTab";
		} else if (mode === "others") {
			this.view.btnICollect.skin = "sknBtn424242SSPReg30pxTab";
			this.view.btnSomeoneCollect.skin = "sknBtnBgD8D8D8SSP30pxBrd24pxTab";
		} else {
			this.view.btnICollect.skin = "sknBtn424242SSPReg30pxTab";
			this.view.btnSomeoneCollect.skin = "sknBtn424242SSPReg30pxTab";
		}
	},
  	chooseCashMode: function(cashMode) {
    	applicationManager.getPresentationUtility().showLoadingScreen();
		var cardLessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
		cardLessModule.presentationController.setCashLessMode(cashMode);
		cardLessModule.presentationController.clearAmount(); 
    },
    updateRightPane: function() {
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo("selectedAccountDataForCardLessCashWithdrawal");
        if (kony.sdk.isNullOrUndefined(data) || data === {})
            data = navManager.getCustomInfo("frmCardLessWithdraw");
        var rightPane = this.view.RightPane;
        if (data) {
            rightPane.lblSecondCheckedRowName.text = this.constructAccountName(data);
        }
    },
    constructAccountName: function(data) {
        var fromAccountName = data.fromAccountName;
        var fromAccountNumber = data.fromAccountNumber;
        return (fromAccountName + "..." + fromAccountNumber.substr(fromAccountNumber.length - 5));
    }
});