define({

    billPayModule: null,
    segmentData: null,
    recentPayees: null,
    allPayees: null,

    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },

    preShow: function() {
        this.resetSearch();
        this.view.flxHeader.setVisibility(!this.isIpad());
        this.initActions();
        this.setSegmentData();
        this.showPopUpSuccess();

        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },

    initActions: function() {
        var self = this;
        this.view.customHeaderTablet.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        };
        this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
        this.view.btnAddPayee.onClick = function() {
            var navManger = applicationManager.getNavigationManager();
            navManger.setEntryPoint("createBillPayPayee", "frmBillPaySelectPayee");
            var billPayMod = self.getBillPayModule();
            billPayMod.presentationController.setFlowType("createBillPayPayee");
            billPayMod.presentationController.clearBillPayPayeeData();
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPaySearchPayee");
        };
        this.view.segAccounts.onRowClick = this.selectPayee;
        this.view.flxSearchMain.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
    },

    handleCancelAction: function() {
        this.getBillPayModule().presentationController.commonFunctionForNavigation("frmBillPay");
    },

    setSegmentData: function() {
        var billPayMod = this.getBillPayModule();
        var allPayees = billPayMod.presentationController.getAllBillPayPayees();
        var recentPayees = billPayMod.presentationController.getRecentBillPayees();
        var segmentData = [];
        this.view.segAccounts.widgetDataMap = {
            lblHeader: "lblHeader",
            lblPayeeName: "payeeNickName",
            lblAccountBal: "",
            lblPayeeInfo: "addressLine1",
            lblAccountBalValue: "",
            imgInfo: "flxAccountsNoImage",
            imgebill: "imgebill",
            lblAccountNumber: ""
        };

        this.setupPayeeImage(allPayees);
        this.setupPayeeImage(recentPayees);

        var isAllPayeeEmpty = allPayees.length === 0;
        var isRecentPayeeEmpty = recentPayees.length === 0;
        this.view.flxNoTransactions.isVisible = isAllPayeeEmpty;
        this.view.segAccounts.isVisible = !isAllPayeeEmpty;
        if (!isRecentPayeeEmpty) {
            var headerTitle = applicationManager.getPresentationUtility()
                .getStringFromi18n("kony.mb.Transfers.recentpayees", "Recent Payees");
            segmentData.push([{
                lblHeader: headerTitle
            }, recentPayees]);
        }

        if (!isAllPayeeEmpty) {
            var headerTitle = applicationManager.getPresentationUtility()
                .getStringFromi18n("kony.mb.Transfers.allpayees");
            segmentData.push([{
                lblHeader: headerTitle
            }, allPayees]);
        }

        this.view.segAccounts.setData(segmentData);

        this.recentPayees = recentPayees;
        this.allPayees = allPayees;
        this.segmentData = segmentData;
    },

    setupPayeeImage: function(payees) {
        payees.forEach(function(payee) {
            var imageSrc = payee.eBillSupport ?
                (payee.eBillEnable === "1" ? "ebill.png" : "ebillinactive.png") :
                "";
            var isImageVisible = payee.eBillSupport;
            payee.image = {
                src: imageSrc,
                isVisible: isImageVisible
            };
        });
    },

    selectPayee: function() {
        var selectedSectionIndex = Math.floor(this.view.segAccounts.selectedRowIndex[0]);
        var selectedRowIndex = Math.floor(this.view.segAccounts.selectedRowIndex[1]);
        var selectedPayee = this.view.segAccounts.data[selectedSectionIndex][1][selectedRowIndex];

        this.getBillPayModule().presentationController.navAfterSelectPayee(selectedPayee);
    },

    showPopUpSuccess: function() {
        var billPayMod = this.getBillPayModule();
        if (billPayMod.presentationController.isPayeeAdded) {
            this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.addedBillPayPayeeAddressSuccess"));
            billPayMod.presentationController.isPayeeAdded = false;
        }
    },

    bindGenericSuccess: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
    },

    tbxSearchOnTextChange: function() {
        var searchtext = this.view.flxSearchMain.tbxSearch.text.toLowerCase();
        if (searchtext) {
            var data = [],
                headers = [];
            headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.recentpayees"));
            headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.allpayees"));
            data.push(this.recentPayees);
            data.push(this.allPayees);
            this.view.segAccounts.isVisible = true;
            this.view.flxNoTransactions.isVisible = false;
            var searchData = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("payeeNickName", searchtext, data, headers);
            if (searchData && searchData.length > 0) {
                this.view.segAccounts.setData(searchData);
            } else {
                this.view.segAccounts.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
            }
        } else if (this.segmentData && this.segmentData.length > 0) {
            this.view.segAccounts.setData(this.segmentData);
            this.view.segAccounts.isVisible = true;
            this.view.flxNoTransactions.isVisible = false;
        } else {
            this.view.segAccounts.isVisible = false;
            this.view.flxNoTransactions.isVisible = true;
        }
    },

    resetSearch: function() {
        this.view.flxSearchMain.tbxSearch.text = "";
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
    navigateBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    }
});