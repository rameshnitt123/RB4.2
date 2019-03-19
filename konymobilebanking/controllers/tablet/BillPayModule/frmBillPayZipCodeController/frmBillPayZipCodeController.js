define({

    billPayModule: null,

    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },

    preShow: function() {
        this.view.flxHeader.setVisibility(!this.isIpad());
        this.setDataToForm();
        this.view.txtZipCode.onTextChange = this.updateAmountValue;
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },

    initActions: function() {
        var self = this;
        var billPayMod = self.getBillPayModule();
        this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
        this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
        this.view.flxBottom.onClick = function() {
            billPayMod.presentationController.clearBillPayPayeeData();
            billPayMod.presentationController.setManuallyAddedFlag("true");
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayEditName");
        };
        this.view.btnContinue.onClick = function() {
            billPayMod.presentationController.setBillPayZipCode(self.view.txtZipCode.text);
            var billerCategoryName = billPayMod.presentationController.getBillPayBillerCategory();

            if (billerCategoryName === "Phone") {
                billPayMod.presentationController.navToRelationNumber("frmBillPayRelationNumber");
            } else {
                billPayMod.presentationController.navToBillPayAccNumberSearchFlow("frmBillPayEnterAccNo");
            }

        };
        this.setRightPaneData();
    },

    setDataToForm: function() {
        var self = this;
        var billPayMod = self.getBillPayModule();
        var zipCode = billPayMod.presentationController.getBillPayZipCode();

        if (zipCode) {
            this.view.txtZipCode.text = zipCode;
            this.updateAmountValue();
        } else {
            this.view.txtZipCode.text = "";
            this.updateAmountValue();
        }
    },

    updateAmountValue: function() {
        if (this.view.txtZipCode.text === "") {
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.setEnabled(false);
        } else {
            this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnContinue.setEnabled(true);
        }
    },

    getBillPayModule: function() {
        if (!this.billPayModule) {
            this.billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        }

        return this.billPayModule;
    },

    isIpad: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        return deviceUtilManager.isIpad();
    },

    backNavigation: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },

    handleCancelAction: function() {
        this.getBillPayModule().presentationController.commonFunctionForNavigation("frmBillPay");
    },

    setRightPaneData: function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        var payeeName = recipientsManager.getBillPayPayeeData().payeeName;
        this.view.RightPane.lblCheckedRowName.text = payeeName;
    }

});