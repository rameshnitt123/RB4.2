define({
    keypadString: '0.00',
    isPeriodUsed: false,
    timerCounter: 0,
    billPayModule: null,

    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
//        this.view.customPopup.flxPopupWrapper.lblPopup.doLayout =  function(){   //calling anonymous function as binding function does not works for doLayout
//          var labelWidth = this.frame.width;
//          var totallength =  parseInt(labelWidth)+25;         				   //20 - width of image and 5 padding
//          var screenWidth = kony.os.deviceInfo().screenWidth;
//          var screenHeight = kony.os.deviceInfo().screenHeight;
//
//          if(screenWidth>screenHeight){
//            screenWidth = screenHeight;        								    //as orientation of app is fixed so taking minimum width as screen width
//          }
//          var remainingSpace = parseInt(screenWidth) - parseInt(totallength);
//          var leftInDP = parseInt(remainingSpace/2);
//          this.parent.imgPopup.left=leftInDP+"dp";
//          this.parent.forceLayout();  
//        };
    },

    preShow: function() {
        this.view.flxHeader.setVisibility(!this.isIpad());

        var transObj = this.getBillPayModule().presentationController.getTransObject();
        if (transObj.amount && transObj.amount !== "") {
            this.isPeriodUsed = transObj.amount.indexOf(".") === -1;
        } else {
            this.keypadString = '0.00';
        }

        var configManager = applicationManager.getConfigurationManager();
        this.view.lblDollar.text = configManager.getCurrencyCode();
        this.updateAmountValue();
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var toast = navManager.getCustomInfo("frmBillPayAmount");
        if (toast) {
            if (toast.acountUpdated && toast.status === "success") {
                this.showSuccessPopup(toast.res, toast.status);
            } else if (toast.status === "error") {
                this.showErrorPopup(JSON.stringify(toast.err));
            }
            navManager.setCustomInfo("frmBillPayAmount", "");
        }
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },

    initActions: function() {
        var self = this;
        this.setFromAccountData();
        this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
        this.view.customHeaderTablet.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        };
        this.view.btnContinue.onClick = this.onContinueClick.bind(this);
        this.view.btnChange.onClick = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            self.getBillPayModule().presentationController.navFromAccountsPage();
        };
        this.setRightPaneData();
    },
	onContinueClick: function() {
        var amount = this.keypadString;
        var configManager = applicationManager.getConfigurationManager();

        if (Number(amount) >= Number(configManager.getConfigurationValue("minBillPayLimit")) && Number(amount) <= Number(configManager.getConfigurationValue("maxBillPayLimit"))) {
            var fromAvlBal = this.view.lblBalanceValue.text;
            var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayModule.presentationController.evaluateAmount(amount, fromAvlBal);
        } else if (Number(amount) < Number(configManager.getConfigurationValue("minBillPayLimit"))) {
            this.showErrorPopup(kony.i18n.getLocalizedString("kony.tab.entitlements.minTransactionLimitUnreached") + " " + String(configManager.getCurrencyCode()) + " " + Number(configManager.getConfigurationValue("minBillPayLimit")));
        } else if (Number(amount) > Number(configManager.getConfigurationValue("maxBillPayLimit"))) {
            this.showErrorPopup(kony.i18n.getLocalizedString("kony.tab.entitlements.maxTransactionLimitExceeded") + " " + String(configManager.getCurrencyCode()) + " " + Number(configManager.getConfigurationValue("maxBillPayLimit")));
        }
    },
    setFromAccountData: function() {
        var formatUtilManager = applicationManager.getFormatUtilManager();
        var frmdata = this.getBillPayModule().presentationController.getTransferObjectById();
        this.view.lblFromAccountValue.text = frmdata.accountName;
        this.view.lblBalanceValue.text = formatUtilManager.formatAmountandAppendCurrencySymbol(frmdata.availableBalance);
        this.view.lblBank.text = frmdata.bankName;
        this.view.lblavailableBalance.text = frmdata.accountBalanceType;
    },

    setKeypadChar: function(char) {
        if (char === '.') {
            if (this.isPeriodUsed === false) {
                this.isPeriodUsed = true;
            } else {
                return;
            }
        }
        this.keypadString = this.keypadString + char;
        var firstChar = this.keypadString[0];
        this.keypadString = this.keypadString.split("");
        for (var i = 1; i < this.keypadString.length; i++) {
            if (this.keypadString[i] == '.') {
                this.keypadString[i - 1] = this.keypadString[i + 1];
                i++;
            } else {
                this.keypadString[i - 1] = this.keypadString[i];
            }
        }
        this.keypadString = this.keypadString.join("");
        this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
        if (firstChar !== '0') {
            this.keypadString = firstChar + this.keypadString;
        }
        this.updateAmountValue();
    },

    clearKeypadChar: function() {
        if (this.keypadString === '0.00') {
            return;
        }

        this.keypadString = this.keypadString.split("");
        for (var i = this.keypadString.length - 2; i >= 0; i--) {
            if (this.keypadString[i] == '.') {
                this.keypadString[i + 1] = this.keypadString[i - 1];
                i--;
            } else {
                this.keypadString[i + 1] = this.keypadString[i];
            }
        }
        this.keypadString = this.keypadString.join("");
        this.keypadString = this.keypadString.substr(1);
        if (this.keypadString[0] === '.') {
            this.keypadString = '0' + this.keypadString;
        }
        this.updateAmountValue();
    },

    updateAmountValue: function() {
        if (this.keypadString === '0.00') {
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.setEnabled(false);
            this.view.lblAmount.text = '0.00';
        } else {
            var keypadStringCommas = '';
            var beforeDecimal = this.keypadString.split('.')[0];
            var afterDecimal = this.keypadString.split('.')[1];
            if (beforeDecimal.length > 3) {
                var withoutCommas = beforeDecimal.length % 3;
                var temp = '';
                if (withoutCommas !== 0) {
                    temp = beforeDecimal.substr(0, withoutCommas) + ',';
                }
                for (var i = withoutCommas; i < beforeDecimal.length; i += 3) {
                    temp += beforeDecimal.substr(i, 3) + ',';
                }
                beforeDecimal = temp.substr(0, temp.length - 1);
            }
            keypadStringCommas = beforeDecimal + '.' + afterDecimal;
            this.view.btnContinue.skin = "sknBtnBg0A78D1SSP30PxTab";
            this.view.btnContinue.setEnabled(true);
            this.view.lblAmount.text = keypadStringCommas;
        }
    },

    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },

    showSuccessPopup: function(refID, type) {
        var msg = applicationManager.getPresentationUtility().getStringFromi18n(refID);
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
    },

    showErrorPopup: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },

    handleCancelAction: function() {
        this.getBillPayModule().presentationController.cancelCommon();
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
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },

    setRightPaneData: function() {
        var transManager = applicationManager.getTransactionManager();
        var transactionData = transManager.getTransactionObject();
        var frmData = this.getBillPayModule().presentationController.getTransferObjectById();
        this.view.RightPane.lblSecondCheckedRowName.text = frmData.accountName;
        this.view.RightPane.lblCheckedRowName.text = transactionData.payeeNickName;

    }
});