define({
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.flxHeader.setVisibility(!this.isIpad());
		this.view.customCalendarTablet.endDateFlow();
        if (this.view.customCalendarTablet.selectedDate === '') {
            this.view.btnContinue.setEnabled(false);
        } else {
            this.view.btnContinue.setEnabled(true);
        }
        this.view.customCalendarTablet.selectedDate = '';
        this.view.customCalendarTablet.triggerContinueAction = false;
        this.view.customCalendarTablet.isCalendarEndDateFrm = true;
        this.view.customCalendarTablet.updateDateBullets();
        this.view.customCalendarTablet.unHighlightAllDays();
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var startdate = billPayMod.presentationController.getTransObject();
        var transManager = applicationManager.getTransactionManager();
        var transactionData = transManager.getTransactionObject();
        this.view.lblLeftPaneSubTtitle.text = transactionData.frequencyType;
        if (startdate.frequencyEndDate !== null && startdate.frequencyEndDate !== undefined && startdate.frequencyEndDate !== "")
            this.view.customCalendarTablet.setSelectedDate(startdate.frequencyEndDate);
        this.view.customCalendarTablet.setFirstEnabledDate(startdate.scheduledDate);
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        this.view.btnContinue.onClick = this.continueAction;
        this.view.customHeaderTablet.btnRight.onClick = function() {
            var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayModule.presentationController.cancelCommon();
        }
        this.view.customHeaderTablet.flxBack.onClick = function() {
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayStartDate");
        }
        this.setRightPaneData();
    },
    continueAction: function() {
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayModule.presentationController.transferScheduledEndDate(this.view.customCalendarTablet.getSelectedDate());
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
    getBillPayModule: function() {
        if (!this.billPayModule) {
            this.billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        }

        return this.billPayModule;
    },
    navigateBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    handleCancelAction: function() {
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayModule.presentationController.cancelCommon();
    }
});