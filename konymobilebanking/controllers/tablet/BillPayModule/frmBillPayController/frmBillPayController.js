define({

    billPayModule: null,
    scheduledbills: null,
    postedbills: null,
    pendingbills: null,
    segmentdata: null,
    popupMsg: '',
    timerCounter: 0,
    textSearch : '',

    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },

    preShow: function() {
        var BillPay = applicationManager.getLoggerManager();
        BillPay.setCustomMetrics(this, false, "Bill Pay");

        this.view.flxHeader.setVisibility(!this.isIpad());
        if (this.popupMsg !== null && this.popupMsg !== '') {
            this.showPopupSuccess();
        }
        this.initActions();
        this.setSegmentData();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.getBillPayModule().presentationController.showFromAccounts();
    },

    onNavigate: function(obj) {
        if (!obj) {
            obj = {
                "popup": "none"
            };
        }
        if (obj.popup === "successAddRecipient") {
            this.popupMsg = kony.i18n.getLocalizedString("kony.mb.p2p.successAddRecipient");
        }
        if (obj.popup === "none") {
            this.popupMsg = '';
        }
    },

    initActions: function() {
        var configManager = applicationManager.getConfigurationManager();
        var MenuHandler = applicationManager.getMenuHandler();
        MenuHandler.setUpHamburgerForForm(this, configManager.constants.MENUBILLPAY);
        this.view.flxPayABill.onClick = this.goToPayABill;
        this.view.flxManage.onClick = this.goToAllPayees;
        //this.view.customHeader.flxBack.onClick = this.backNavigation;
        this.view.tbxSearch.onTouchEnd = this.showSearch;
        this.view.customSearchbox.tbxSearch.onTextChange = this.showHideSearch;
        this.view.customSearchbox.flxSearchMain.btnCancel.onClick = this.cancelSearch;
        //this.view.flxSearchMain.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
        this.view.segBillPay.onRowClick = this.segTransactionsOnRowClick;
    },

    backNavigation: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
	showHideSearch: function() {
    var scope=this;
    this.textSearch =this.view.customSearchbox.tbxSearch.text.toLowerCase();
	//this.textSearch = this.view.flxBox.tbxSearch.text.toLowerCase();
	this.view.customSearchbox.flxSearchMain.tbxSearch.setFocus(true);
	this.view.customSearchbox.flxSearchMain.tbxSearch.text = this.textSearch;
	if (!this.view.flxHeaderSearchbox.isVisible){
	  this.widgetVisibilityToggle(this.view.flxHeaderSearchbox, this.view.flxSearch);
	}
	this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
  },

  cancelSearch: function() {
    this.view.flxMain.top = "0dp";
    if (this.segmentdata.length) {
	  this.view.segBillPay.setData(this.segmentdata);
	  this.widgetVisibilityToggle(this.view.segBillPay, this.view.flxNoTransactions);
	} else {
	  this.widgetVisibilityToggle(this.view.flxNoTransactions, this.view.segBillPay);
	}
	this.textSearch = '';
	this.view.tbxSearch.text = this.getStringFromI18n("kony.tab.common.Search");
	this.view.customSearchbox.flxSearchMain.tbxSearch.placeholder = this.getStringFromI18n("kony.tab.common.Search");
	this.widgetVisibilityToggle(this.view.flxMainSearch, this.view.flxHeaderSearchbox);
  },
  showSearch: function() {
        if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
              	this.view.segAccounts.setData(this.segmentdata);
         	    var deviceUtilManager = applicationManager.getDeviceUtilManager();
	  			var isIpad = deviceUtilManager.isIpad();
        		if (isIpad) {
        			this.view.flxHeader.isVisible = false;
                  	this.view.flxMain.top = "56dp";
      			}
      			else{
        			this.view.flxHeader.isVisible = true;
                    this.view.flxMain.top = "40dp";
      			} 
        		this.view.flxMainSearch.isVisible = true;
                
            } else {
              	this.view.customSearchbox.tbxSearch.text="";
              	this.view.flxMainSearch.isVisible = false;
                this.view.flxHeader.isVisible = false;
                this.view.flxMain.top = "56dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.setFocus(true);
            }
    },
    goToPayABill: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navMan = applicationManager.getNavigationManager();
        navMan.setEntryPoint("payBill", "frmBillPay");
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.fetchToPayees();
        //this.getBillPayModule().presentationController.commonFunctionForNavigation("frmBillPaySelectPayee");
    },

    goToAllPayees: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.fetchAllPayees();
    },

    showPopupSuccess: function() {
        var self = this;
        this.timerCounter = parseInt(this.timerCounter) + 1;
        var timerId = "timerPopupSuccess" + this.timerCounter;
        this.view.flxPopup.skin = "sknFlx43ce6e";
        this.view.customPopup.imgPopup.src = "confirmation.png";
        this.view.customPopup.lblPopup.text = this.popupMsg;
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function() {
            self.view.flxPopup.setVisibility(false);
        }, 3, false);
    },

    setSegmentData: function() {
        var navMan = applicationManager.getNavigationManager();
        var bills = navMan.getCustomInfo("frmBillPay");
        if (bills) {
            if (bills.res) {
                if (bills.type === "error") {
                    this.showSuccessToast(bills.res);
                } else {
                    this.showSuccessToast(bills.res, bills.type);
                }
            }
            bills.res = null;
            var scheduledBills = bills.scheduledBills;
            var postedBills = bills.postedBills;
            var pendingBills = bills.pendingBills;
            this.view.segBillPay.widgetDataMap = {
                lblAccountName: "payeeNickName",
                lblBankName: "fromAccountName",
                lblAccountBalValue: "amount",
                lblAccountBal: "showDate",
                lblHeader: "lblHeader",
                transactionId: "transactionId",
                flxViewBill: "flxViewBill",
                flxBillPay: "flxBillPay",
                lblBillPay: "lblBillPay",
                imgDelete: "imgDelete",
                lblDelete: "lblDelete",
                imgBillPay: "imgBillPay",
                imgEbill: "image",
                lblAccountNumber: ""
            };

            var isScheduledBillsEmpty = scheduledBills.length === 0;
            var isPostedBillsEmpty = postedBills.length === 0;
            var isPendingBillsEmpty = pendingBills.length === 0;

            if (isScheduledBillsEmpty && isPostedBillsEmpty && isPendingBillsEmpty) {
                this.view.segBillPay.setVisibility(false);
                this.view.flxNoTransactions.setVisibility(true);
            } else {
                var data = [];
                this.pendingbills = [];
                if (!isPendingBillsEmpty) {
                    data.push([{
                        lblHeader: this.getString("kony.mb.eBill.upcomingEBill")
                    }, pendingBills]);
                    this.pendingbills = pendingBills;
                }

                if (!isScheduledBillsEmpty) {
                    data.push([{
                        lblHeader: this.getString("kony.mb.transaction.ScheduledPayments")
                    }, scheduledBills]);
                    this.scheduledbills = scheduledBills;
                } else {
                    this.scheduledbills = [];
                }

                if (!isPostedBillsEmpty) {
                    data.push([{
                        lblHeader: this.getString("kony.mb.accdetails.postedTransactions")
                    }, postedBills]);
                    this.postedbills = postedBills;
                } else {
                    this.postedbills = [];
                }

                this.segmentdata = data;

                for (var i = 0; i < this.pendingbills.length; i++) {
                    this.segmentdata[0][1][i].flxViewBill = {};
                    this.segmentdata[0][1][i].flxBillPay = {};
                    this.segmentdata[0][1][i].lblDelete = {
                        text: this.getString("Kony.mb.EBill.ViewBill")
                    };
                    this.segmentdata[0][1][i].lblBillPay = {
                        text: this.getString("Kony.mb.EBill.payBill")
                    };
                    this.segmentdata[0][1][i].imgDelete = {
                        src: "viewbill.png"
                    };
                    this.segmentdata[0][1][i].imgBillPay = {
                        src: "billpayheader.png"
                    };
                    this.segmentdata[0][1][i].flxViewBill.onClick = this.viewBill;
                    this.segmentdata[0][1][i].flxBillPay.onClick = this.payBill;
                }

                this.view.segBillPay.setData(this.segmentdata);
                this.view.flxNoTransactions.setVisibility(false);
                this.view.segBillPay.setVisibility(true);
            }
        }
        navMan.setCustomInfo("frmBillPay", bills);
    },

    viewBill: function() {
        var rowid = this.view.segBillPay.selectedIndex[1];
        var data = this.pendingbills[rowid];
        this.getBillPayModule().presentationController.viewBill(data.ebillURL);
    },

    payBill: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var rowid = this.view.segBillPay.selectedIndex[1];
        var data = this.pendingbills[rowid];
        this.getBillPayModule().presentationController.navAfterSelectPayee(data);
    },

    tbxSearchOnTextChange: function() {
        var searchtext = this.view.customSearchbox.flxSearchMain.tbxSearch.text.toLowerCase();
        var isPendingBillsEmpty = this.pendingbills.length === 0;
        if (searchtext) {
            var data = [];
            var headers = [];
            if (!isPendingBillsEmpty) {
                headers.push(this.getString("kony.mb.eBill.upcomingEBill"));
                data.push(this.pendingbills);
            }
            headers.push(this.getString("kony.mb.transaction.ScheduledPayments"));
            headers.push(this.getString("kony.mb.accdetails.postedTransactions"));
            data.push(this.scheduledbills);
            data.push(this.postedbills);


            this.view.segBillPay.setVisibility(true);
            this.view.flxNoTransactions.setVisibility(false);
            var searchData = applicationManager.getDataProcessorUtility()
                .commonSectionSegmentSearch("payeeNickName", searchtext, data, headers);
            if (searchData && searchData.length > 0) {
                this.view.segBillPay.setData(searchData);
                this.view.segBillPay.setVisibility(true);
                this.view.flxNoTransactions.setVisibility(false);
            } else {
                this.view.segBillPay.setVisibility(false);
                this.view.flxNoTransactions.setVisibility(true);
            }
        } else {
            if (this.segmentdata && this.segmentdata.length > 0) {
                this.view.segBillPay.setData(this.segmentdata);
                this.view.segBillPay.setVisibility(true);
                this.view.flxNoTransactions.setVisibility(false);
            } else {
                this.view.segBillPay.setVisibility(false);
                this.view.flxNoTransactions.setVisibility(true);
            }
        }
    },

    showSuccessToast: function(refID, type) {
        var msg;
        if (type === "delete") {
            msg = "Transaction was Cancelled Successfully with reference ID : " + (refID.transactionId || refID.referenceId);
        } else if (refID.referenceId) {
            msg = "Transaction was done successfully with transaction ID : " + refID.referenceId;
        } else {
            msg = "Transaction was edited successfully with reference ID : " + refID.transactionId;
        }

        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
    },

    setFooter: function() {
        this.view.customFooter.lblAccounts.skin = "sknLblA0A0A0SSP20px";
        this.view.customFooter.flxAccSelect.setVisibility(false);
        this.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
        this.view.customFooter.flxTransferSel.setVisibility(false);
        this.view.customFooter.lblBillPay.skin = "sknLbl424242SSP20px";
        this.view.customFooter.flxBillSelected.setVisibility(true);
        this.view.customFooter.lblMore.skin = "sknLblA0A0A0SSP20px";
        this.view.customFooter.flxMoreSelect.setVisibility(false);
    },

    segTransactionsOnRowClick: function() {
        var navMan = applicationManager.getNavigationManager();
        var selectedSectionIndex = Math.floor(this.view.segBillPay.selectedRowIndex[0]);
        var selectedRowIndex = Math.floor(this.view.segBillPay.selectedRowIndex[1]);
        var transactionData = this.view.segBillPay.data[selectedSectionIndex][1][selectedRowIndex];
        var billPayMod = this.getBillPayModule();
        var header = this.view.segBillPay.data[selectedSectionIndex][0].lblHeader;
        if (header == this.getString("kony.mb.eBill.upcomingEBill") && selectedSectionIndex === 0) {
            navMan.setCustomInfo("frmBillPayDetails", transactionData);
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayDetails");
        } else {
            navMan.setEntryPoint("payBill", "frmBillPay");
            navMan.setCustomInfo("frmTransactionDetails", transactionData);
            navMan.setEntryPoint("frmTransactionDetails", "BillPay");
            billPayMod.presentationController.commonFunctionForNavigation("frmTransactionDetails");
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
   widgetVisibilityToggle: function(visibleElement, invisibleElement) {
	if (visibleElement){
	  visibleElement.setVisibility(true);
	}

	if (invisibleElement){
	  invisibleElement.setVisibility(false);
	}
  },
	getStringFromI18n: function(value) {
	applicationManager.getPresentationUtility().getStringFromi18n(value);
  },
});