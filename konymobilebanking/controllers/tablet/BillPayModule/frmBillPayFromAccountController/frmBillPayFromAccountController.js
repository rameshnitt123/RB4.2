define({
    billPayModule: null,
    segmentData: null,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },

    preShow: function() {
        this.view.flxHeader.setVisibility(!this.isIpad());
        this.setSegmentData();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },

    postShow: function() {
        var navManager = applicationManager.getNavigationManager();
        var previousForm = navManager.getPreviousForm();
        if (previousForm === "frmBillPaySelectPayee") {
            this.selectDefaultAccount();
            this.getBillPayModule().presentationController.commonFunctionForNavigation("frmBillPayAmount");
        } else {
            this.initActions();
            this.view.flxLoading.setVisibility(false);
        }
        this.setRightPaneData();
    },
    selectDefaultAccount: function() {
        var dataJSON = {};
        var bPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var isFromAcc = bPayModule.presentationController.isDefaultFromAccount();
        if (!isFromAcc) {
            dataJSON.default_account_billPay = this.view.segAccounts.data[0].accountID;
            dataJSON.showBillPayFromAccPopup = false;
            bPayModule.presentationController.setFromAccountsForTransactions(this.view.segAccounts.data[0]);
            this.getBillPayModule().presentationController.updateBillPayFromAcc(dataJSON);
        } else {
            bPayModule.presentationController.commonFunctionForNavigation("frmBillPayAmount");
        }
    },
    initActions: function() {
        this.view.customHeaderTablet.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        };
        this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
        this.view.segAccounts.onRowClick = this.segmentRowClick;
        this.view.flxSearchMain.tbxSearch.onTextChange = this.searchdata;
    },

    handleCancelAction: function() {
        this.getBillPayModule().presentationController.commonFunctionForNavigation("frmBillPay");
    },

    setDefaultAcc: function(response) {
        var dataJSON = {};
        if (response) {
            var selectedAcntRow = this.view.segAccounts.selectedItems[0];
            this.selAccountId = selectedAcntRow.accountID;
            dataJSON.default_account_billPay = this.selAccountId;
        }
        dataJSON.showBillPayFromAccPopup = false;
        this.getBillPayModule().presentationController.updateBillPayFromAcc(dataJSON);
    },

    setSegmentData: function() {
        var frmaccdata = [];
        var navMan = applicationManager.getNavigationManager();
        var accdata = navMan.getCustomInfo("frmBillPayFromAccount");
        var accountsData = accdata.fromaccounts;
        frmaccdata = accountsData;

        var processedData = this.getBillPayModule().presentationController.processAccountsData(frmaccdata);
        if (processedData.length > 0) {
            this.view.flxNoTransactions.isVisible = false;
            this.view.segAccounts.isVisible = true;
            this.view.segAccounts.widgetDataMap = {
                lblAccountName: "accountName",
                lblBankName: "bankName",
                lblAccountBalValue: "availableBalance",
                lblAccountBal: "accountBalanceType",
                accountNumber: "accountNumber"
            };
            this.view.segAccounts.setData(processedData);
            this.segmentData = this.view.segAccounts.data;
        } else {
            this.segmentData = [];
            this.view.flxNoTransactions.isVisible = true;
            this.view.segAccounts.isVisible = false;
        }
    },

    segmentRowClick: function() {
        var self = this;
        var selaccdata = [];
        var rowindex = this.view.segAccounts.selectedRowIndex[1];
        var frmaccdata = this.view.segAccounts.data[rowindex];
        selaccdata.push(frmaccdata);
        var bPayModule = this.getBillPayModule();
        bPayModule.presentationController.setFromAccountsForTransactions(selaccdata[0]);
        var isFromAcc = bPayModule.presentationController.isDefaultFromAccount();
        var showPopup = bPayModule.presentationController.isSetAccountPopupEnabled();
        if (!isFromAcc && showPopup) {
            var basicConfig = {
                alertType: constants.ALERT_TYPE_CONFIRMATION,
                alertTitle: self.getString("kony.mb.BillPay.setDefaultAccountTitle"),
                yesLabel: self.getString("kony.mb.common.yesSetAsDefault"),
                noLabel: self.getString("kony.mb.common.notnow"),
                message: self.getString("kony.mb.BillPay.setDefaultAccountMessage"),
                alertHandler: self.setDefaultAcc
            };
            applicationManager.getPresentationUtility().showAlertMessage(basicConfig, {});
        } else {
            bPayModule.presentationController.commonFunctionForNavigation("frmBillPayAmount");
        }
    },

    searchdata: function() {
        var searchData;
        var searchtext = this.view.flxSearchMain.tbxSearch.text.toLowerCase();
        if (searchtext) {
            this.view.segAccounts.removeAll();
            var data = this.segmentData;
            searchData = applicationManager.getDataProcessorUtility().commonSegmentSearch("accountName", searchtext, data);
            if (searchData && searchData.length > 0) {
                this.view.segAccounts.setData(searchData);
                this.view.flxNoTransactions.isVisible = false;
                this.view.segAccounts.isVisible = true;
            } else {
                this.view.segAccounts.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
            }
        } else {
            if (this.segmentData && this.segmentData.length > 0) {
                this.view.segAccounts.setData(this.segmentData);
                this.view.flxNoTransactions.isVisible = false;
                this.view.segAccounts.isVisible = true;
            } else {
                this.view.flxNoTransactions.isVisible = true;
                this.view.segAccounts.isVisible = false;
            }
        }
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

    getString: function(key) {
        return applicationManager.getPresentationUtility().getStringFromi18n(key);
    },
    setRightPaneData: function() {
        var transManager = applicationManager.getTransactionManager();
        var transactionData = transManager.getTransactionObject();
        this.view.RightPane.lblCheckedRowName.text = transactionData.payeeNickName;
    }
});