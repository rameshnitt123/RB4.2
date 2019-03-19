define({
    isEditMode: false,
    timerCounter: 0,

    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        var FormValidator = require("FormValidatorManager")
        this.fv = new FormValidator(1);
    },
    preShow: function() {
        this.fv.submissionView(this.view.btnSave);
        this.view.flxHeader.setVisibility(!this.isIpad());

        this.initActions();
        this.setFormDataBasedOnEntryPoint();
        this.view.txtName.setFocus(true);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        };
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var flowType = billPayMod.presentationController.getFlowType();
        this.view.btnSave.onClick = function() {
            var nickname = {};
            if (flowType === "editBillPay") {
                applicationManager.getPresentationUtility().showLoadingScreen();
                var payeeDetails = billPayMod.presentationController.getPayeeDetails();
                nickname.payeeId = payeeDetails.payeeId;
                nickname.payeeNickName = scope.view.txtName.text;
                billPayMod.presentationController.updatePayeeNickName(nickname);
            } else if (flowType == "createBillPayPayee") {
                billPayMod.presentationController.navToPayeeAddressDetails(scope.view.txtName.text, "frmBillPayEditAddress");
            }
        };
        this.view.customHeader.btnRight.onClick = function() {
            scope.onClickCancel();
        };
        this.view.txtName.onTextChange = function() {
            var text = scope.view.txtName.text;
            scope.fv.checkAndUpdateStatusForNull(0, text);
        };
    },
    validateFormUI: function() {
        var formValues = [];
        formValues.push(this.view.txtName.text);
        this.fv.preshowCheck(formValues);
    },
    setFormDataBasedOnEntryPoint: function() {
        var scope = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var flowType = billPayMod.presentationController.getFlowType();
        if (flowType === "editBillPay") {
            if (this.isIpad()) {
                this.view.title = applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.PayAPerson.EditNickName");
            }
            scope.view.customHeader.lblHeaderTitle.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.PayAPerson.EditNickName");
            scope.view.lblNameTitle.text = applicationManager.getPresentationUtility().getStringFromi18n("Kony.mb.EBill.PayeeNickName");
            scope.view.title = applicationManager.getPresentationUtility().getStringFromi18n("Kony.mb.EBill.PayeeNickName");
            scope.view.btnSave.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.save");
            var payeeData = billPayMod.presentationController.getPayeeDetails();
            if (payeeData.payeeNickName) {
                scope.view.txtName.text = payeeData.payeeNickName;
            }
        } else if (flowType == "createBillPayPayee") {
            if (this.isIpad()) {
                this.view.title = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.PayeeName");
            }
            scope.view.customHeader.lblHeaderTitle.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.PayeeName");
            scope.view.lblNameTitle.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.PayeeName");
            scope.view.btnSave.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.continue");
            var payeeName = billPayMod.presentationController.getBillPayPayeeName();
            scope.view.txtName.text = (payeeName && payeeName !== null && payeeName !== "") ? payeeName : "";
        }
        scope.validateFormUI();
    },
    prePopulateData: function(payeeData) {
        var scope = this;
        if (payeeData.payeeNickName) {
            scope.view.txtName.text = payeeData.payeeNickName;
        }
    },
    onClickCancel: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var flowType = billPayMod.presentationController.getFlowType();
        if (flowType === "editBillPay") {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        } else if (flowType == "createBillPayPayee") {
            billPayMod.presentationController.navToFormBasedOnEntryPoint("createBillPayPayee");
        }
    },
    bindGenericError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
    isIpad: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        return deviceUtilManager.isIpad();
    },

});