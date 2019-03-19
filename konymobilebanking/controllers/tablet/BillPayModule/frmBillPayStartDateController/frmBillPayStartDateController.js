define({
    transObj: {},
    frequencyTypes: {},
    startDateKey: '',
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.flxHeader.setVisibility(!this.isIpad());

		this.view.customCalendarTablet.startDateFlow();
        this.initActions();
        this.view.customCalendarTablet.selectedDate = '';
        this.view.customCalendarTablet.triggerContinueAction = true;
        this.view.customCalendarTablet.isCalendarEndDateFrm = false;
        this.view.customCalendarTablet.updateDateBullets();
        this.view.customCalendarTablet.unHighlightAllDays();
        this.view.customCalendarTablet.setFirstEnabledDate();
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        this.transObj = billPayMod.presentationController.getTransObject();
        this.frequencyTypes = billPayMod.presentationController.getAvailableFrequencyType();
        if (this.transObj.scheduledDate !== null && this.transObj.scheduledDate !== undefined && this.transObj.scheduledDate !== "") {
            this.view.customCalendarTablet.setSelectedDate(this.transObj.scheduledDate);
        }
        if (this.view.customCalendarTablet.selectedDate === '') {
            this.view.btnContinue.setEnabled(false);
        } else {
            this.view.btnContinue.setEnabled(true);
        }

        if (this.transObj.frequencyType == this.frequencyTypes.ONCE) {
            this.view.customHeaderTablet.lblHeaderTitle.text = "SEND DATE";
            this.view.flxLeftPaneSetFrequency.isVisible = false;
            this.view.lblSubTitile.text = "Send Date";
            this.view.flxLeftPaneSetFrequencyDivider.isVisible = false;
            this.view.btnContinue.isVisible = true;
            this.view.customCalendarTablet.triggerContinueAction = false;
        } else {
            this.view.customHeaderTablet.lblHeaderTitle.text = "START DATE";
            this.view.btnContinue.isVisible = false;
            this.view.flxLeftPaneSetFrequency.isVisible = true;
            this.view.lblSubTitile.text = "Select Start Date";
            this.view.flxLeftPaneSetFrequencyDivider.isVisible = true;
            this.view.customCalendarTablet.triggerContinueAction = true;
        }
        this.view.lblLeftPaneSubTtitle.text = this.transObj.frequencyType;
        this.view.flxLeftPaneSetFrequencyValue.text = billPayMod.presentationController.getDuration()
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        this.view.customHeaderTablet.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
        this.view.btnContinue.onClick = this.continueAction;
        this.view.customHeaderTablet.btnRight.onClick = function() {
            var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayModule.presentationController.cancelCommon();
        }
        this.setRightPaneData();
    },
    continueAction: function() {
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");

        if ((this.transObj.frequencyType == this.frequencyTypes.ONCE || this.transObj.numberOfRecurrences)) {
            billPayModule.presentationController.transferScheduledDate(this.view.customCalendarTablet.getSelectedDate());
        } else {
            billPayModule.presentationController.transferScheduledStrtDate(this.view.customCalendarTablet.getSelectedDate());
        }

    },
    isIpad: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        return deviceUtilManager.isIpad();
    },
    goBackToBillPay: function() {
        var navigationManager = applicationManager.getNavigationManager();
        navigationManager.goBack();
    },
    setRightPaneData: function() {
        var formatManager = applicationManager.getFormatUtilManager();
        var transManager = applicationManager.getTransactionManager();
        var transactionData = transManager.getTransactionObject();
        var frmData = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule").presentationController.getTransferObjectById();
        this.view.RightPane.lblSecondCheckedRowName.text = frmData.accountName;
        this.view.RightPane.lblCheckedRowName.text = transactionData.payeeNickName;
        this.view.RightPane.lblThirdCheckedRowName.text = formatManager.formatAmountandAppendCurrencySymbol(transactionData.amount);
    },
    handleCancelAction: function() {
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayModule.presentationController.cancelCommon();
    }
});