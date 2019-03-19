define({
  popupMsg: '',
  timerCounter: 0,
  textSearch: '',
  onNavigate: function(obj) {
	if (obj === undefined) {
	  var newObj = {
		"popup": "none"
	  };
	  obj = newObj;
	}
	if (obj.popup === "successAddRecipient") {
	  this.popupMsg = kony.i18n.getLocalizedString("kony.mb.p2p.successAddRecipient");
	}
	if (obj.popup === "none") {
	  this.popupMsg = '';
	}
  },

  init: function() {
	try{
	  var navManager = applicationManager.getNavigationManager();
	  var currentForm = navManager.getCurrentForm();
	  applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	} catch (exception) {

	}
  },

  preShow: function() {
	try{
      this.showPreshowSearch();
	  var deviceUtilManager = applicationManager.getDeviceUtilManager();
	  var isIpad = deviceUtilManager.isIpad();
      if(!isIpad){
	  this.view.flxHeader.setVisibility(true);
      }
	  this.setSegmentData();
	  this.initActions();

	  if (this.popupMsg) {
		this.showPopupSuccess();
	  }
	  applicationManager.getPresentationUtility().dismissLoadingScreen();
	  var navManager = applicationManager.getNavigationManager();
	  var currentForm = navManager.getCurrentForm();
	  applicationManager.getPresentationFormUtility().logFormName(currentForm);
	} catch (exception){

	}
  },

  initActions: function() {
	try{
	  var scope = this;
	  var configManager = applicationManager.getConfigurationManager();
	  var MenuHandler = applicationManager.getMenuHandler();
	  MenuHandler.setUpHamburgerForForm(scope, configManager.constants.MENUTRANSFERS);
      this.view.tbxSearch.onTouchEnd = this.showSearch;
	  this.view.customSearchbox.tbxSearch.onTextChange = this.showHideSearch;
	  this.view.customSearchbox.flxSearchMain.btnCancel.onClick = this.cancelSearch;
	  this.view.segTransactions.onRowClick = this.segTransactionsOnRowClick;
	  this.view.flxManage.onClick = function() {
		var payAPersonMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
		payAPersonMode.presentationController.commonFunctionForNavigation("frmManageRecipientType"); 
	  };
	  this.view.flxMakeTransfer.onClick = this.maketransferOnclick;
    this.view.flxPayAPerson.onClick = this.flxPayAPersonOnClick;
	} catch (exception) {

	}

	var navManager = applicationManager.getNavigationManager();
	previousForm = navManager.getPreviousForm();
	this.showHideWidgets(previousForm);
  },

  showHideWidgets: function(form) {
	switch(form) {
	  case "frmTransferConfirmation":
		this.view.flxPopup.setVisibility(true);
		this.view.flxPopup.customPopup.lblPopup.text = 'Transaction was done successfully with tarnsaction ID: 773992HGV839';
		this.view.flxPopup.customPopup.imgPopup.text = "confirmation.png";
		break;
	}
  },

  segTransactionsOnRowClick: function() {
	try {
	  var navMan = applicationManager.getNavigationManager();
	  var transactionData = this.view.segTransactions.selectedRowItems[0];
	  var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
	  transMod.presentationController.setEntryPoints(transactionData.transactionType);
	  navMan.setCustomInfo("frmTransactionDetails", transactionData);
	  navMan.setEntryPoint("frmTransactionDetails", "Transfers");
	  transMod.presentationController.commonFunctionForNavigation("frmTransactionDetails");
	} catch (exception) {

	}
  },

  setSegmentData: function() {
	try{
	  var pendingaccounts = [],
		  pendingaccounts = [];
	  var navMan = applicationManager.getNavigationManager();
	  var forUtility = applicationManager.getFormatUtilManager();
	  var transactions = navMan.getCustomInfo("frmTransfers");
	  if (transactions) {
	
		if (transactions.res) {
		  if (transactions.type == "error"){
			this.showErrorPopup(transactions.res.errorMessage);
          }
		  else
			this.showSuccessPopup(transactions.res, transactions.typeOfTransaction);
		}
		transactions.res = null;
		navMan.setCustomInfo("frmTransfers", transactions);
		var postedTransaction = transactions.postedTransaction;
		var scheduledTransactions = transactions.scheduledTransactions;
        postedTransaction.sort(function(a,b){
          var c = new Date(a.scheduledDate);
		  var d = new Date(b.scheduledDate);
          return d-c;
		});
        
        scheduledTransactions.sort(function(a,b){
          var c = new Date(a.scheduledDate);
		  var d = new Date(b.scheduledDate);
          return d-c;
		});
		this.view.segTransactions.widgetDataMap = {
		  lblTransaction: "description",
		  lblDate: "scheduledDate",
		  lblAmount: "amount",
		  transactionId: "transactionId",
		  lblAccount: "fromAccountName",
		  lblHeader: "lblHeader",
		  imgAccount: "image"
		};
		
		if (postedTransaction.length && scheduledTransactions.length) {
		  var data = [
			[{
			  "lblHeader": "Scheduled Transactions"
			}, scheduledTransactions],
			[{
			  "lblHeader": "Posted Transactions"
			}, postedTransaction]
		  ];
		  this.segmentData = data;
		  this.view.segTransactions.setData(data);
		  this.pendingaccounts = this.view.segTransactions.data[0][1];
		  this.postedaccounts = this.view.segTransactions.data[1][1];
		  this.widgetVisibilityToggle(this.view.segTransactions, this.view.flxNoTransactions);
		} else if (scheduledTransactions.length) {
		  var data = [
			[{
			  "lblHeader": "Scheduled Transactions"
			}, scheduledTransactions]
		  ];

		  this.segmentData = data;
		  this.view.segTransactions.setData(data);
		  this.pendingaccounts = this.view.segTransactions.data[0][1];
		  this.postedaccounts = [];
		  this.widgetVisibilityToggle(this.view.segTransactions, this.view.flxNoTransactions);
		} else if (postedTransaction.length) {
		  var data = [
			[{
			  "lblHeader": "Posted Transactions"
			}, postedTransaction]
		  ];
		  this.segmentData = data;
		  this.view.segTransactions.setData(data);
		  this.postedaccounts = this.view.segTransactions.data[0][1];
		  this.pendingaccounts = [];
		  this.widgetVisibilityToggle(this.view.segTransactions, this.view.flxNoTransactions);
		} else {
		  this.segmentData = [];
		  this.pendingaccounts = [];
		  this.postedaccounts = [];
		  this.widgetVisibilityToggle(this.view.flxNoTransactions, this.view.segTransactions);
		}
	  }
	} catch (exception) {

	}
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
    this.view.flxMainContainer.top = "0dp";
    if (this.segmentData.length) {
	  this.view.segTransactions.setData(this.segmentData);
	  this.widgetVisibilityToggle(this.view.segTransactions, this.view.flxNoTransactions);
	} else {
	  this.widgetVisibilityToggle(this.view.flxNoTransactions, this.view.segTransactions);
	}
	this.textSearch = '';
	this.view.flxBox.tbxSearch.text = this.getStringFromI18n("kony.tab.common.Search");
	this.view.customSearchbox.flxSearchMain.tbxSearch.placeholder = this.getStringFromI18n("kony.tab.common.Search");
	this.widgetVisibilityToggle(this.view.flxSearch, this.view.flxHeaderSearchbox);
  },

  flxPayAPersonOnClick: function() {
	try{
	  var navMan = applicationManager.getNavigationManager();
	  navMan.setEntryPoint("payaperson", "frmTransfers");
	  var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
	  payeeMod.presentationController.getAllPayees();

	  var P2P = applicationManager.getLoggerManager();
	  P2P.setCustomMetrics(this, false, "P2P");
	} catch(exception) {

	}
  },

  showPopupSuccess: function() {
	try{
	  var scopeObj = this;
	  this.timerCounter = parseInt(this.timerCounter) + 1;
	  var timerId = "timerPopupSuccess" + this.timerCounter;
	  this.view.flxPopup.skin = "sknFlx43ce6e";
	  this.view.customPopup.imgPopup.src = "confirmation.png";
	  this.view.customPopup.lblPopup.text = this.popupMsg;
	  this.view.flxPopup.setVisibility(true);
	  kony.timer.schedule(timerId, function() {
		scopeObj.view.flxPopup.setVisibility(false);
	  }, 3, false);
	} catch (exception) {

	}
  },

  maketransferOnclick: function() {
	try{
	  var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
	  transMod.presentationController.transfersModule();
	  var Transfers = applicationManager.getLoggerManager();
	  Transfers.setCustomMetrics(this, false, "Transfers");
	} catch (exception) {

	}

  },

  showSuccessPopup: function(refID, type) {
	try{
	  // TO DO i18n's
	  var msg;
	  if (type === "delete") {
		msg = "Transaction was cancelled successfully with reference ID : " + (refID.transactionId || refID.refernceId);
	  } else {
		if (refID.referenceId) {
		  msg = "Transaction was done successfully with transaction ID : " + refID.referenceId;
		} else {
		  msg = "Transaction was edited successfully with reference ID : " + refID.transactionId;
		}

	  }
	  applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
	} catch (exception) {

	}
  },

  showErrorPopup: function(err) {
	try{
	  applicationManager.getDataProcessorUtility().showToastMessageError(this, JSON.stringify(err));
	} catch (exception) {

	}
  },

  tbxSearchOnTextChange: function() {
	try{
	  var navObj = applicationManager.getNavigationManager();
	  this.textSearch = this.view.customSearchbox.flxSearchMain.tbxSearch.text.toLowerCase();

	  if (this.textSearch) {
		var data = [],
			headers = [];
		var lblPendingTranHeader = this.getStringFromI18n("kony.mb.accdetails.pendingTransactions");
		var lblPostedTranHeader = this.getStringFromI18n("kony.mb.accdetails.postedTransactions");
		headers.push(lblPendingTranHeader);
		headers.push(lblPostedTranHeader);
		data.push(this.pendingaccounts);
		data.push(this.postedaccounts);
		this.widgetVisibilityToggle(this.view.segTransactions, this.view.flxNoTransactions);
		this.view.segTransactions.removeAll();
		var searchobj = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("description", this.textSearch, data, headers);

		if (searchobj.length) {
		  if (searchobj[0][0].lblHeader === "Pending Transactions") {
			searchobj[0][0].lblHeader = this.getStringFromI18n("kony.mb.accdetails.scheduledTransactions");
		  }
		  this.view.segTransactions.setData(searchobj);
		} else {
		  this.widgetVisibilityToggle(this.view.flxNoTransactions, this.view.segTransactions);
		}
	  } else {
		if (this.segmentData.length) {
		  this.view.segTransactions.setData(this.segmentData);
		  this.widgetVisibilityToggle(this.view.segTransactions, this.view.flxNoTransactions);
		} else {
		  this.widgetVisibilityToggle(this.view.flxNoTransactions, this.view.segTransactions);
		}
	  }
	} catch (exception) {

	}
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
  
  showPreshowSearch:function(){
  		if (this.view.flxHeaderSearchbox.isVisible === true) {
             this.view.flxHeaderSearchbox.isVisible = false;
             this.view.flxSearch.isVisible = true;
          	 this.view.tbxSearch.text="";
        }
  },
  showSearch: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
	var isIpad = deviceUtilManager.isIpad();
        if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
              	this.view.segAccounts.setData(this.segmentData);
        		if (isIpad) {
        			//this.view.flxHeader.isVisible = false;
                  	this.view.flxMainContainer.top = "56dp";
      			}
      			else{
        			this.view.flxHeader.isVisible = true;
                    this.view.flxMainContainer.top = "40dp";
      			} 
        		this.view.flxSearch.isVisible = true;
                
            } else {
              	this.view.customSearchbox.tbxSearch.text="";
              	this.view.flxSearch.isVisible = false;
              	if(!isIpad){
                this.view.flxHeader.isVisible = false;
                }
                this.view.flxMainContainer.top = "56dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.setFocus(true);
            }
    },

});