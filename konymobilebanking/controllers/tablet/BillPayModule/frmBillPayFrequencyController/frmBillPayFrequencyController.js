define({

    billPayModule: null,

    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },

    preShow: function() {
        this.view.flxHeader.setVisibility(!this.isIpad());
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },

    initActions: function() {
        this.view.customHeaderTablet.flxBack.onClick = this.navigateBack;
        this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
        this.view.segFrequency.onRowClick = this.segmentRowClick;
        this.setRightPaneData();
    },

    navigateBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },

    handleCancelAction: function() {
        this.getBillPayModule().presentationController.commonFunctionForNavigation("frmBillPay");
    },

    segmentRowClick: function() {
        var type = this.view.segFrequency.data[this.view.segFrequency.selectedIndex[1]].lblFrequency;
        this.getBillPayModule().presentationController.switchFrequencyType(type);
    },

    isIpad: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        return deviceUtilManager.isIpad();
    },

    getBillPayModule: function() {
        if (!this.billPayModule) {
            this.billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        }

        return this.billPayModule;
    },
    setRightPaneData: function() {
        var formatManager = applicationManager.getFormatUtilManager();
        var transManager = applicationManager.getTransactionManager();
        var transactionData = transManager.getTransactionObject();
        var frmData = this.getBillPayModule().presentationController.getTransferObjectById();
        this.view.RightPane.lblSecondCheckedRowName.text = frmData.accountName;
        this.view.RightPane.lblCheckedRowName.text = transactionData.payeeNickName;
        this.view.RightPane.lblThirdCheckedRowName.text = formatManager.formatAmountandAppendCurrencySymbol(transactionData.amount);
    }
});