define({
    keypadString: '',
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.flxHeader.setVisibility(!this.isIpad());
        this.keypadString = '';
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var recur = billPayMod.presentationController.getTransObject();
        if (recur.numberOfRecurrences !== null && recur.numberOfRecurrences !== "" && recur.numberOfRecurrences !== undefined) {
            this.keypadString = recur.numberOfRecurrences;
        }
        this.updateInputBullets();
        this.initActions();
        var transManager = applicationManager.getTransactionManager();
        var transactionData = transManager.getTransactionObject();
        this.view.lblLeftPaneSubTtitle.text = transactionData.frequencyType;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        this.view.btnContinue.onClick = this.clickOnContinue;
        this.view.customHeaderTablet.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
        this.view.customHeaderTablet.btnRight.onClick = function() {
            var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayModule.presentationController.cancelCommon();
        }
        this.setRightPaneData();
    },
    clickOnContinue: function() {
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayModule.presentationController.transferSetRecurrence(this.keypadString);

    },
    updateInputBullets: function() {
        var widgets = this.view["flxInputRecurrenceNumber"].widgets();
        var dummyString = "__";
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].text = this.keypadString[i];
            widgets[i].skin = "sknLbl979797SSP60px";
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            widgets[i].text = dummyString[i];
            widgets[i].skin = "sknLble3e3e3SSP60px";
        }

        if (this.keypadString.length !== 0) {
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtnBg0A78D1SSP30PxTab";
            this.view.btnContinue.focusSkin = "sknBtnBg0A78D1SSP30PxTab";
        } else {
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.focusSkin = "sknBtnOnBoardingInactive";
        }

        this.view.forceLayout();
    },
    setKeypadChar: function(char) {
        if (this.keypadString.length === 2) return;

        this.keypadString = this.keypadString + char;
        this.updateInputBullets();
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets();
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            this.updateInputBullets();
        }
    },
    isIpad: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        return deviceUtilManager.isIpad();
    },
    setRightPaneData: function() {
        var formatManager = applicationManager.getFormatUtilManager();
        var transManager = applicationManager.getTransactionManager();
        var transactionData = transManager.getTransactionObject();
        var frmData = this.getBillPayModule().presentationController.getTransferObjectById();
        this.view.RightPane.lblSecondCheckedRowName.text = frmData.accountName;
        this.view.RightPane.lblCheckedRowName.text = transactionData.payeeNickName;
        this.view.RightPane.lblThirdCheckedRowName.text = formatManager.formatAmountandAppendCurrencySymbol(transactionData.amount);
    },
    navigateBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    getBillPayModule: function() {
        if (!this.billPayModule) {
            this.billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        }
        return this.billPayModule;
    },
    handleCancelAction: function() {
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayModule.presentationController.cancelCommon();
    }
});