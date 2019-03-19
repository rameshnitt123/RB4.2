define({
    onNavigate: function(obj) {
        if (obj === undefined) {
            return;
        }
        if (obj == "view") {
            this.view.btnPayBill.isVisible = false;
            this.view.btnDeletePayee.isVisible = false;
        }
    },
    init: function() {
        this.view.btnActivateEBill.onClick = this.activateEBilling;
        this.view.btnDeactivateEBill.onClick = this.deactivateEBilling;
        this.view.btnPayBill.onClick = this.payBill;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getDeviceUtilManager().isIpad()) {
            this.view.flxHeader.isVisible = false;
        }
        this.view.flxPopEdit.isVisible = false;
        this.setDataToForm();
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        var navMan = applicationManager.getNavigationManager();
        var rowId = navMan.getCustomInfo("frmBillPayPayeeDetailsEdit");
        if (rowId === null || rowId === undefined) {
            this.view.flxPopEdit.isVisible = false;
        } else {
            this.view.flxPopEdit.isVisible = true;
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    payBill: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.setEntryPoint("payBill", "frmBillPayPayeeDetails");

        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var payeeData = billPayMod.presentationController.getPayeeDetails();
        billPayMod.presentationController.navAfterSelectPayee(payeeData);
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            scope.navigateBack();
        };

        this.view.btnEditPayee.onClick = function() {
            scope.view.flxPopEdit.isVisible = true;
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("frmBillPayPayeeDetailsEdit", null);
        };
        this.view.flxPopSureDelete.onClick = function() {
            scope.view.flxPopSureDelete.isVisible = false;
        };
        this.view.btnEditPayeeAddress.onClick = function() {
            scope.view.flxPopEdit.isVisible = false;
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            var navManger = applicationManager.getNavigationManager();
            navManger.setEntryPoint("editBillPayPayee", "frmBillPayPayeeDetails");
            billPayMod.presentationController.setFlowType("editBillPay");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayEditPayAddress");
        };
        this.view.btnCancel.onClick = function() {
            scope.view.flxPopEdit.isVisible = false;
        };
        this.view.flxPopEdit.onClick = function() {
            scope.view.flxPopEdit.isVisible = false;
        };
        this.view.btnEditNickName.onClick = function() {
            scope.view.flxPopEdit.isVisible = false;
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            var navManger = applicationManager.getNavigationManager();
            navManger.setEntryPoint("editBillPayPayee", "frmBillPayPayeeDetails");
            billPayMod.presentationController.setFlowType("editBillPay");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayEditPayName");
        };
        this.view.btnDeletePayee.onClick = function() {
            var basicConfig = {
                "alertType": constants.ALERT_TYPE_CONFIRMATION,
                "alertTitle": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertTitle"),
                "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
                "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
                "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.deleteRecipient", "Do you want to delete the recipient"),
                "alertHandler": scope.confirmDelete
            };
            applicationManager.getPresentationUtility().showAlertMessage(basicConfig, {});
        };
        this.view.btnPayBill.onClick = function() {
            scope.view.flxPopEdit.isVisible = false;
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            var navMan = applicationManager.getNavigationManager();
            navMan.setEntryPoint("payBill", "frmBillPayPayeeDetails");
            var payeeData = billPayMod.presentationController.getPayeeDetails();
            billPayMod.presentationController.navAfterSelectPayee(payeeData);
        };
    },
    navigateBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    activateEBilling: function() {
        var basicConfig = {
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Areyousuredoyouwanttoactivatee-bill"),
            "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
            "alertHandler": this.activeBill
        };
        applicationManager.getPresentationUtility().showAlertMessage(basicConfig, {});
    },

    deactivateEBilling: function() {
        var basicConfig = {
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Areyousuredoyouwanttode-activatee-bill"),
            "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
            "alertHandler": this.deactiveBill
        };
        applicationManager.getPresentationUtility().showAlertMessage(basicConfig, {});
    },
    activeBill: function(response) {
        if (response === true) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            var payeeData = billPayMod.presentationController.getPayeeDetails();
            payeeData.EBillEnable = "1";
          	payeeData.eBillStatus = "1";
            billPayMod.presentationController.updateEBillStatus(payeeData, true);

        } else {
            kony.print("don't delete");
        }
    },
    activeEbillStatus: function() {
        var scope = this;
        var navMan = applicationManager.getNavigationManager();
        var billPayeeData = navMan.getCustomInfo("frmBillPayPayeeDetails");
        if (billPayeeData && billPayeeData.length !== 0) {} else {
            scope.view.btnPayBill.setVisibility(true);
        }
        scope.view.imgebill.src = "ebill.png";
        scope.view.lbleBillStatusValue.text = kony.i18n.getLocalizedString("kony.tab.Ebill.Active");
        scope.view.btnActivateEBill.setVisibility(false);
        scope.view.btnDeactivateEBill.setVisibility(true);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.showEBillToastMessage(true);


    },
    deactiveBill: function(response) {
        if (response === true) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            var payeeData = billPayMod.presentationController.getPayeeDetails();
            payeeData.EBillEnable = "0";
            payeeData.eBillStatus = "0";
            billPayMod.presentationController.updateEBillStatus(payeeData, false);

        } else {
            kony.print("don't delete");
        }

    },
    deactiveEbillStatus: function() {
        var scope = this;
        scope.view.imgebill.src = "ebillinactive.png";
        scope.view.lbleBillStatusValue.text = kony.i18n.getLocalizedString("kony.tab.Ebill.Deactive");
        scope.view.btnActivateEBill.setVisibility(true);
        scope.view.btnDeactivateEBill.setVisibility(false);
        //scope.view.flxUpcommingBillDetails.setVisibility(false);
        scope.view.btnPayBill.setVisibility(true);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.showEBillToastMessage(false);
    },
    showEBillToastMessage: function(res) {
        if (res === true) {
            applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.ebill.EBillActivatedSuccessfully"));
        } else {
            applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.ebill.EBillDe-activatedSuccessfully"));
        }
    },

    setDataToForm: function() {
        var scope = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var payeeData = billPayMod.presentationController.getPayeeDetails();
        if (payeeData.payeeName) {
            scope.view.lblPayeeFullNameValue.text = payeeData.payeeName;
        }
        if (payeeData.accountNumber) {
            var accnum = payeeData.accountNumber;
            scope.view.lblPayeeNumberValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(accnum);
        } else if (payeeData.accountNumber === "" || payeeData.accountNumber === null || payeeData.accountNumber === undefined) {
            scope.view.lblPayeeNumberValue.text = "Not Available";
        }
        if (payeeData.nameOnBill) {
            scope.view.lblNameOnBillValue.text = payeeData.nameOnBill;
        }
        if (payeeData.payeeNickName) {
            scope.view.lblNickNameValue.text = payeeData.payeeNickName;
        }
        if (payeeData.street || payeeData.addressLine2 || payeeData.cityName || payeeData.zipCode || payeeData.state) {
            var address = "";
            if (payeeData.addressLine1) {
                address = address + payeeData.addressLine1 + ",";
            }
            if (payeeData.street) {
                address = address + payeeData.street + ",";
            }
            if (payeeData.addressLine2) {
                address = address + payeeData.addressLine2 + ",";
            }
            if (payeeData.cityName) {
                address = address + payeeData.cityName + ",";
            }
            if (payeeData.state) {
                address = address + payeeData.state + ",";
            }
            if (payeeData.zipCode) {
                address = address + payeeData.zipCode;
            }
            scope.view.lblPayeeAddressValue.text = address;
        }
        if (payeeData.eBillSupport == "true" && payeeData.isManuallyAdded != "true") {
          	scope.view.imgebill.isVisible = true;
            if (payeeData.eBillStatus === null || payeeData.eBillStatus == "0") {
                scope.view.imgebill.src = "ebillinactive.png";
                scope.view.lbleBillStatusValue.text = kony.i18n.getLocalizedString("kony.tab.Ebill.Deactive");
                scope.view.btnActivateEBill.setVisibility(true);
                scope.view.btnPayBill.setVisibility(true);
                scope.view.btnDeactivateEBill.setVisibility(false);
            } else {
                var navMan = applicationManager.getNavigationManager();
                var billPayeeData = navMan.getCustomInfo("frmBillPayPayeeDetails");
                if (billPayeeData && billPayeeData.length !== 0) {
                } else {
                    scope.view.btnPayBill.setVisibility(true);
                }
                scope.view.imgebill.src = "ebill.png";
                scope.view.lbleBillStatusValue.text = kony.i18n.getLocalizedString("kony.tab.Ebill.Active");
                scope.view.btnActivateEBill.setVisibility(false);
                scope.view.btnDeactivateEBill.setVisibility(true);
            }
        } else {
            scope.view.lbleBillStatusValue.text = kony.i18n.getLocalizedString("kony.tab.billpay.notAvailable");
         	scope.view.imgebill.isVisible = false;
            scope.view.btnPayBill.setVisibility(true);
            scope.view.btnDeactivateEBill.setVisibility(false);
            scope.view.btnActivateEBill.setVisibility(false);
        }
    },
    confirmDelete: function(response) {
        if (response === true) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.deleteBillPayPayee();
        } else {
            kony.print("don't delete");
        }
    },
    bindGenericError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
    handleCancelClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    }
});