define({
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.flxHeader.setVisibility(!this.isIpad());

        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var index = billPayMod.presentationController.getIndexForDuration();
        this.view.segDurationRange.retainSelection = false;
        if (index !== null && index !== undefined && index !== "") {
            this.view.segDurationRange.retainSelection = true;
            this.view.segDurationRange.selectedRowIndex = [0, index];
        }
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.customHeaderTablet.flxBack.onClick = this.navigateBack;
        this.view.segDurationRange.onRowClick = function() {
            scope.segmentRowClick();
        }
        this.view.customHeaderTablet.btnRight.onClick = function() {
            var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayModule.presentationController.cancelCommon();
        }
        var transManager = applicationManager.getTransactionManager().getTransactionObject();
        this.view.lblDaily.text = transManager.frequencyType;
        this.setRightPaneData();
    },

    navigateBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },

    segmentRowClick: function() {
        var index = this.view.segDurationRange.data[this.view.segDurationRange.selectedIndex[1]].lblFrequency;
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayModule.presentationController.switchDurationType(index);
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
        this.view.RightPane.lblThirdCheckedRowName.text = frmData.accountName;
        this.view.RightPane.lblCheckedRowName.text = transactionData.payeeNickName;
        this.view.RightPane.lblFourthCheckedRowName.text = formatManager.formatAmountandAppendCurrencySymbol(transactionData.amount);
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