define({
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.flxHeader.setVisibility(!this.isIpad());

        this.populateData();
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        this.view.customHeaderTablet.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
        this.view.customHeaderTablet.btnRight.onClick = function() {
            var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayModule.presentationController.cancelCommon();
        }
        this.view.btnContinue.onClick = this.continueOnClick;
        this.setRightPaneData();
    },
    continueOnClick: function() {
        var description = this.view.txtDescription.text;
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayModule.presentationController.makeATransfer(description);
    },
    populateData: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var transObj = billPayMod.presentationController.getTransObject();
        var forUtility = applicationManager.getFormatUtilManager();
      	var dataobj;
        var amount = forUtility.formatAmountandAppendCurrencySymbol(transObj.amount);
        this.view.lblPaymentAmountValue.text = amount;
        this.view.lblFromAccountValue.text = transObj.fromAccountName;
        this.view.lblBank.text = transObj.fromBankName;
        this.view.lblToPayeeValue.text = transObj.payeeNickName;
        this.view.lblPayeeAddress.text = transObj.payeeAdress;
        this.view.segDetails.widgetDataMap = {
            lblKey: "key",
            lblValue: "value",
        };

        if (transObj.transactionsNotes)
            this.view.txtDescription.text = transObj.transactionsNotes;
        else
            this.view.txtDescription.text = "";
        if (transObj.isScheduled == "0") {
            dataobj = [{
                "key": kony.i18n.getLocalizedString("kony.mb.transaction.frequency"),
                "value": kony.i18n.getLocalizedString("kony.mb.frequency.TransferNow")
            }, {
                "key": kony.i18n.getLocalizedString("kony.mb.Transfers.transfersDate"),
                "value": transObj.scheduledDate
            }]
        } else {
            if (transObj.frequencyType == "Once") {
                dataobj = [{
                    "key": kony.i18n.getLocalizedString("kony.mb.transaction.frequency"),
                    "value": kony.i18n.getLocalizedString("kony.mb.frequency.OneTime")
                }, {
                    "key": kony.i18n.getLocalizedString("kony.mb.Transfers.transfersDate"),
                    "value": transObj.scheduledDate
                }]
            } else if (this.getBillPayModule().presentationController.getDuration() == "Date Range") {
                dataobj = [{
                    "key": kony.i18n.getLocalizedString("kony.mb.transaction.frequency"),
                    "value": transObj.frequencyType
                }, {
                    "key": kony.i18n.getLocalizedString("kony.mb.Transfers.Duration"),
                    "value": kony.i18n.getLocalizedString("kony.mb.frequency.DateRange")
                }, {
                    "key": kony.i18n.getLocalizedString("kony.mb.Transfers.StartDate"),
                    "value": transObj.frequencyStartDate
                }, {
                    "key": kony.i18n.getLocalizedString("kony.mb.Transfers.EndDate"),
                    "value": transObj.frequencyEndDate
                }]
            } else if (this.getBillPayModule().presentationController.getDuration() == "Recurrence Number") {
                dataobj = [{
                    "key": kony.i18n.getLocalizedString("kony.mb.transaction.frequency"),
                    "value": transObj.frequencyType
                }, {
                    "key": kony.i18n.getLocalizedString("kony.mb.Transfers.Duration"),
                    "value": kony.i18n.getLocalizedString("kony.mb.Transfers.RecurrenceNo")
                }, {
                    "key": kony.i18n.getLocalizedString("kony.mb.frequency.NumberofRecurrence"),
                    "value": transObj.numberOfRecurrences
                }, {
                    "key": kony.i18n.getLocalizedString("kony.mb.Transfers.StartDate"),
                    "value": transObj.scheduledDate
                }]
            }

        }
        
      	if(dataobj) {
        	this.view.segDetails.setData(dataobj);  
        }

    },
    handleCancelAction: function() {
        this.getBillPayModule().presentationController.commonFunctionForNavigation("frmBillPay");
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

        this.view.RightPane.lblFourthCheckedRowName.text = transactionData.frequencyType;
    },
    navigateBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    }
});