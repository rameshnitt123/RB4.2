define({
    segmentData: {},
    deletesegData: [],
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.showPreshowSearch();
        if (applicationManager.getDeviceUtilManager().isIpad()) {
            this.view.flxHeader.isVisible = false;
        }
        this.deletesegData = [];
        this.initActions();
        this.setSegData();
        this.showPopUpSuccess();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPay");
        }
        this.view.segAccounts.onRowClick = function() {
          var navManager = applicationManager.getNavigationManager();	
          var swipeFlag = navManager.getCustomInfo("frmBillPayAllPayeesSwipeFlag");
          if(swipeFlag===true){
              navManager.setCustomInfo("frmBillPayAllPayeesSwipeFlag",false);
              return;
          }
            scope.segmentRowClick();
        }
        this.view.tbxSearch.onTouchEnd = this.showSearch;
        this.view.customSearchbox.btnCancel.onClick = this.showSearch;
        this.view.customHeader.btnRight.onClick = function() {
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPay");

        }
        this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
        this.view.btnAddPayee.onClick = function() {
            var navManger = applicationManager.getNavigationManager();
            navManger.setEntryPoint("createBillPayPayee", "frmBillPayAllPayees");
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.setFlowType("createBillPayPayee");
            billPayMod.presentationController.clearBillPayPayeeData();
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPaySearchPayee");
        }
    },
    navigateBack: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.commonFunctionForNavigation("frmBillPay");
    },
    segmentRowClick: function() {
        var rowid = this.view.segAccounts.selectedRowIndex[1];
        var selectedPayeeDetails = this.view.segAccounts.data[rowid];
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmBillPayPayeeDetailsEdit", null);
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.navToPayeeDetails(selectedPayeeDetails, "frmBillPayPayeeDetails");
    },
    tbxSearchOnTextChange: function() {
        var scope = this;
        var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
        var data = this.segmentData;
        var searchSegmentData = applicationManager.getDataProcessorUtility().commonSegmentSearch("payeeNickName", searchtext, data);
        this.deletesegData = searchSegmentData;
        for (var i = 0; i < searchSegmentData.length; i++) {
            searchSegmentData[i].flxDelete = {};
        }
        for (var i = 0; i < searchSegmentData.length; i++) {
            searchSegmentData[i].flxDelete.onClick = scope.deleteCallback;
        }
        if (searchSegmentData.length === 0) {
            this.view.flxNoTransactions.isVisible = true;
            this.view.segAccounts.isVisible = false;
        } else {
            this.view.flxNoTransactions.isVisible = false;
            this.view.segAccounts.isVisible = true;
            this.view.segAccounts.setData(searchSegmentData);
        }
    },
    showSearch: function() {
        if (this.view.flxHeaderSearchbox.isVisible == true) {
            this.view.flxHeaderSearchbox.isVisible = false;
            this.view.segAccounts.setData(this.segmentData);
            if (kony.os.deviceInfo().name === "iPad") {
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "-5dp";
            } else {
                this.view.flxHeader.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
            }
            if (this.segmentData.length === 0) {
                this.view.flxNoTransactions.isVisible = true;
                this.view.segAccounts.isVisible = false;
            } else {
                this.view.flxNoTransactions.isVisible = false;
                this.view.segAccounts.isVisible = true;
                this.deletesegData = this.segmentData;
            }
            this.view.flxSearch.isVisible = true;

        } else {
            this.view.customSearchbox.tbxSearch.text = "";
            this.view.flxSearch.isVisible = false;
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "56dp";
            this.view.flxHeaderSearchbox.isVisible = true;
            this.view.customSearchbox.tbxSearch.setFocus(true);
        }
    },
    setSegData: function() {
        var scope = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var segmentData = [];
        this.view.segAccounts.widgetDataMap = {
            "lblAccountName": "payeeNickName",
            "lblAccountBal": "",
            "lblBankName": "addressLine1",
            "lblAccountBalValue": "",
            "template": "flxAccountsNoImageBillPayList",
            "type": "type",
            "flxDelete": "flxDelete",
            "flxEdit": "flxEdit",
            "flxPayBill": "flxPayBill",
            "flxDeleteEditPay": "flxDeleteEditPay",
            "flxMain": "flxMain",
            "imgEbill": "imgebill",
        };
        segmentData = billPayMod.presentationController.getAllBillPayPayees();
        for (var i = 0; i < segmentData.length; i++) {
            segmentData[i].OnlastPaidDate = "";
            segmentData[i].flxDelete = {};
            segmentData[i].flxEdit = {};
            segmentData[i].flxPayBill = {};
            segmentData[i].flxDelete.onClick = scope.deleteCallback;
            segmentData[i].flxEdit.onClick = scope.editCallback;
            segmentData[i].flxPayBill.onClick = scope.payBillCallback;
            if (segmentData[i]["eBillSupport"] == "true" && segmentData[i]["isManuallyAdded"] != "true") {
                if (segmentData[i]["eBillStatus"] == "1") {
                    segmentData[i]["imgebill"] = {
                        "src": "ebill.png",
                        "isVisible": true
                    };

                } else
                    segmentData[i]["imgebill"] = {
                        "src": "ebillinactive.png",
                        "isVisible": true
                    };
            } else {
                segmentData[i]["imgebill"] = {
                    //"src":"ebillinactive.png",
                    "isVisible": false
                };
            }
        }

        if (segmentData.length === 0) {
            this.view.flxNoTransactions.isVisible = true;
            this.view.segAccounts.isVisible = false;
        } else {
            this.view.flxNoTransactions.isVisible = false;
            this.view.segAccounts.isVisible = true;
            this.view.segAccounts.setData(segmentData);
        }
        this.deletesegData = segmentData;
        this.segmentData = segmentData;
    },
    showPreshowSearch: function() {
        if (this.view.flxHeaderSearchbox.isVisible == true) {
            this.view.flxHeaderSearchbox.isVisible = false;
            this.view.flxSearch.isVisible = true;
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "-5dp";
        }
    },
    showPopUpSuccess: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        if (billPayMod.presentationController.isDeleteSuccess) {
            this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.deleteBillPayPayeeSuccess"));
            billPayMod.presentationController.isDeleteSuccess = false;
        }
        if (billPayMod.presentationController.isUpdateNickNameSuccess) {
            this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.updateBillPayPayeeNickNameSuccess"));
            billPayMod.presentationController.isUpdateNickNameSuccess = false;
        }
        if (billPayMod.presentationController.isUpdateAddressSuccess) {
            this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.updateBillPayPayeeAddressSuccess"));
            billPayMod.presentationController.isUpdateAddressSuccess = false;
        }
        if (billPayMod.presentationController.isPayeeAdded) {
            this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.addedBillPayPayeeAddressSuccess"));
            billPayMod.presentationController.isPayeeAdded = false;
        }
    },
    bindGenericSuccess: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
    },
    deleteCallback: function() {
        var scope = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var rowid = scope.view.segAccounts.selectedIndex[1];
        var selectedPayeeDetails = scope.deletesegData[rowid];
        billPayMod.presentationController.setBillPayPayeeData(selectedPayeeDetails);
        var basicConfig = {
            message: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.deleteRecipient", "Do you want to delete the recipient"),
            alertIcon: null,
            alertType: constants.ALERT_TYPE_CONFIRMATION,
            alertTitle: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertTitle"),
            yesLabel: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            noLabel: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
            alertHandler: scope.deleteHandler
        };
        var pspConfig = {};
        applicationManager.getPresentationUtility().showAlertMessage(basicConfig, pspConfig);
    },
    deleteHandler: function(response) {
        if (response === true) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.deleteBillPayPayee();
        }
    },
    formatToDate: function(timeStamp) {
        if (timeStamp < 10) {
            return null;
        }
        var date = "";
        var year = timeStamp.substring(0, 4);
        var month = timeStamp.substring(5, 7);
        var day = timeStamp.substring(8, 10);

        date = kony.i18n.getLocalizedString("kony.mb.BillPay.LastPayment") + ": " +
            day + "/" + month + "/" + year;
        return date;
    },

    editCallback: function() {
        var scope = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var rowid = scope.view.segAccounts.selectedIndex[1];
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmBillPayPayeeDetailsEdit", rowid);
        var selectedPayeeDetails = this.view.segAccounts.data[rowid];
        billPayMod.presentationController.navToPayeeDetails(selectedPayeeDetails, "frmBillPayPayeeDetails");
    }
});