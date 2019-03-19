define({
    data: null,
    //Type your controller code here 
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.btnBillPay.onClick = this.payBill;
        this.view.btnBillView.onClick = this.viewBill;


    },
    frmPreshow: function() {
        var self = this;
        this.view.flxHeader.setVisibility(!this.isIpad());
        this.view.customHeaderTablet.flxBack.onClick = function() {
            self.navigateBack();
        };
        this.bindData();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.view.btnBillView.text = applicationManager.getPresentationUtility().getStringFromi18n("Kony.mb.EBill.ViewBill");
    },

    bindData: function() {
        var navMan = applicationManager.getNavigationManager();
        this.data = navMan.getCustomInfo("frmBillPayDetails");
        this.view.lblPayeeValue2.text = this.data.payeeName;
        this.view.lblAddress.text = this.data.payeeAddressLine1;
        var formatUtil = applicationManager.getFormatUtilManager();
        var billdateobj = formatUtil.getDateObjectfromString(this.data.billDueDate, "YYYY-MM-DD");
        this.data.transactionDate = formatUtil.getFormatedDateString(billdateobj, formatUtil.APPLICATION_DATE_FORMAT);
        this.view.lblTransactionDateValue.text = this.data.transactionDate;
        this.view.lblDueAmountValue.text = formatUtil.formatAmountandAppendCurrencySymbol(this.data.dueAmount);
        this.view.lblDueAmountValue.text = this.data.dueAmount;

        var billGDate = formatUtil.getDateObjectfromString(this.data.billGeneratedDate, "YYYY-MM-DD");
        this.data.billGenDate = formatUtil.getFormatedDateString(billGDate, formatUtil.APPLICATION_DATE_FORMAT);
        this.view.lblBillGenerationDateValue.text = this.data.billGenDate;
        this.view.lblAccountNumberValue.text = this.data.fromAccountNumber;

        var billPDate = formatUtil.getDateObjectfromString(this.data.paidDate, "YYYY-MM-DD");
        this.data.billPdate = formatUtil.getFormatedDateString(billPDate, formatUtil.APPLICATION_DATE_FORMAT);
        this.view.lblLastPaymentValue.text = this.data.billPdate;
    },
    viewBill: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.viewBill(this.data.ebillURL);
    },
    payBill: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.navAfterSelectPayee(this.data);
    },
    navigateBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
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


});