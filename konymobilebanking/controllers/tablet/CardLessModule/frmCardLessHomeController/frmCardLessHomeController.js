define({

	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
  
	preShow: function() {	 
		this.initActions();
		this.clearSearch();
		var configManager = applicationManager.getConfigurationManager();
		var MenuHandler =  applicationManager.getMenuHandler();
		MenuHandler.setUpHamburgerForForm(this, configManager.constants.MENUCARDLESS);
		var CardLess = applicationManager.getLoggerManager();          
		CardLess.setCustomMetrics(this, false, "Cardless Cash Withdrawal");
		var navManager = applicationManager.getNavigationManager();
		navManager.setEntryPoint("cancelCardlessTransaction", "frmCardLessHome");
		this.setTransactions(this.getTransactionDetails().pendingTransactions, this.getTransactionDetails().postedTransactions);
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
		applicationManager.getPresentationUtility().dismissLoadingScreen();	
	},
  	
	clearSearch: function() {
		var isIpad = applicationManager.getDeviceUtilManager().isIpad();
      	this.view.customSearchbox.tbxSearch.text = "";
		this.view.tbxSearch.text = "";		
		this.view.flxSearch.setVisibility(true);
		this.view.flxHeaderSearchbox.setVisibility(false);		
		this.view.flxWithdrawCash.setVisibility(true); 
		if (!isIpad) {
      		this.view.flxHeader.setVisibility(true);
        }
		this.showDeletedToast();
	},
  
	getTransactionDetails: function() {
		var transactions = {};
		var navManager = applicationManager.getNavigationManager();
		var transactionDetails = navManager.getCustomInfo("frmCardLessHome");
		transactions.pendingTransactions = transactionDetails.pendingTransactions;
		transactions.postedTransactions = transactionDetails.postedTransaction;
		return transactions;
	},  
      
	initActions: function() {
		this.view.flxWithdrawCash.onClick = this.chooseWithdrawCash;
		this.view.flxSearchMain.tbxSearch.onTouchEnd = this.showHideSearch;
		this.view.flxMainContainer.segDepositFrom.onRowClick = this.chooseTransaction;
		this.view.customSearchbox.tbxSearch.onTextChange = this.searchTransactions;
      	this.view.customSearchbox.btnCancel.onClick = this.cancelHandlerAction;
	    this.view.btnChatbot.onClick = function() {
			var chatBotMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
			chatBotMode.presentationController.handleFirstTimeOpen();
	   };
	},
  
  	initHeaderActions: function() {
		var isIpad = applicationManager.getDeviceUtilManager().isIpad();
		if (!isIpad) {
			this.view.flxHeader.customHeader.flxBack.onClick = this.cancelHandlerAction ;
		}
	},
  	  
  	backNavigation: function() {
    	var navManager = applicationManager.getNavigationManager();
		navManager.goBack();
    },
      
	chooseWithdrawCash: function() {
		var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
		var navMan = applicationManager.getNavigationManager();
      	navMan.setCustomInfo("frmCardlessPhoneNumberNewTRNflag", true);
      	navMan.setCustomInfo("frmCardlessEmailNewTRNflag", true);
      	navMan.setCustomInfo("frmCardlessFullNameNewTRNflag", true);
        navMan.setCustomInfo("frmCardlessSecureCodeNewTRNflag", true);
		navMan.setEntryPoint("cardlessEntry", "frmCardLessHome"); 
      	cardlessModule.presentationController.setCashLessMode();
		cardlessModule.presentationController.commonFunctionForNavigation("frmCardLessCashRec");	
	},

	chooseTransaction: function() {
		var navMan = applicationManager.getNavigationManager();
		var selectedSectionIndex = Math.floor(this.view.segDepositFrom.selectedRowIndex[0]);
		var selectedRowIndex = Math.floor(this.view.segDepositFrom.selectedRowIndex[1]);
		var transactionData = this.view.segDepositFrom.data[selectedSectionIndex][1][selectedRowIndex];
		navMan.setCustomInfo("frmTransactionDetails", transactionData);
		navMan.setEntryPoint("frmTransactionDetails", "CardLess");
		var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
		cardlessModule.presentationController.commonFunctionForNavigation("frmTransactionDetails");
	},
      
	setTransactions: function(pendingTransactions, postedTransactions) {
		var dataMap = this.getDataMap();
		var data;
		var postedTransaction = postedTransactions;
		var pendingTransaction = pendingTransactions;
		this.view.segDepositFrom.widgetDataMap = dataMap;
		this.view.segDepositFrom.setVisibility(true);
		this.view.flxNoTransactions.setVisibility(false);

		if (pendingTransaction.length > 0 && postedTransaction.length > 0) {
			data =  [
				[
					{"lblHeader": "Pending Transactions"},
					pendingTransaction
				],
				[
					{"lblHeader": "Posted Transactions" },
					postedTransaction
				]
			];
			this.view.segDepositFrom.setData(data);
			this.view.flxMainContainer.forceLayout();
		} else if (pendingTransaction.length > 0) {
			data =  [
				[
					{"lblHeader": "Pending Transactions"},
					pendingTransaction
				]
			];
			this.view.segDepositFrom.setData(data);
			this.view.flxMainContainer.forceLayout();
		} else if (postedTransaction.length > 0) {
			data =  [
				[
					{ "lblHeader": "Posted Transactions"},
					postedTransaction
				]
			];
			this.view.segDepositFrom.setData(data);
			this.view.flxMainContainer.forceLayout();
		} else {
			this.view.segDepositFrom.setVisibility(false);
			this.view.flxNoTransactions.setVisibility(true);
			this.view.flxMainContainer.forceLayout();
		}
  		applicationManager.getPresentationUtility().dismissLoadingScreen();
	},
  
	searchTransactions: function() {
		var navObj = applicationManager.getNavigationManager();
		var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
		var segmentData  = this.view.segDepositFrom.data ? this.view.segDepositFrom.data : []; 
		if (searchtext) { 
			var data = [];
			var headers = [];
			headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.pendingTransactions"));
			headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.postedTransactions"));
			data.push(this.getTransactionDetails().pendingTransactions);
			data.push(this.getTransactionDetails().postedTransactions);
			this.view.segDepositFrom.setVisibility(true);
			this.view.flxNoTransactions.setVisibility(false);
			this.view.flxWithdrawCash.setVisibility(false);
			this.view.segDepositFrom.removeAll();
			var searchobj = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("description", searchtext, data, headers);
			if (searchobj.length > 0) { 
				this.view.segDepositFrom.setData(searchobj);
			} else {
				this.view.segDepositFrom.setVisibility(false);
				this.view.flxNoTransactions.setVisibility(true);
			}
		} else {
			if (segmentData.length > 0) {
				this.view.segDepositFrom.setData(segmentData);
				this.view.segDepositFrom.setVisibility(true);
				this.view.flxNoTransactions.setVisibility(false);
				this.view.flxWithdrawCash.setVisibility(true);
			} else {
				this.view.flxWithdrawCash.setVisibility(true);
				this.view.segDepositFrom.setVisibility(false);
				this.view.flxNoTransactions.setVisibility(true);
			}
		} 	
	},
    
	getDataMap: function() {
		var dataMap = {};
		dataMap = {
			lblAccountName: "description",
			lblAccountBal: "scheduledDate",
			lblAccountBalValue: "amount",
			lblHeader: "lblHeader"
		};
		return dataMap;
	},
      
	showHideSearch: function() {
      	var isIpad = applicationManager.getDeviceUtilManager().isIpad();
		if (!isIpad) {
        	this.view.flxHeader.setVisibility(false);  
        }
		this.view.customSearchbox.tbxSearch.text = "";
		this.view.flxHeaderSearchbox.setVisibility(true);
		this.view.flxSearch.setVisibility(false);
		this.view.flxWithdrawCash.setVisibility(false);
	}, 
      
	cancelHandlerAction: function() {
		var navManager = applicationManager.getNavigationManager();
      	var isIpad = applicationManager.getDeviceUtilManager().isIpad();
		if (!isIpad) {
        	this.view.flxHeader.setVisibility(true);  
        }
		this.view.customSearchbox.tbxSearch.text = "";
		this.view.flxSearchMain.tbxSearch.text = "";
		var transactionDetails = navManager.getCustomInfo("frmCardLessHome");
		var pendingTransactions = transactionDetails.pendingTransactions;
		var postedTransactions = transactionDetails.postedTransaction;
		this.view.flxNoTransactions.setVisibility(false);    	
		this.setTransactions(pendingTransactions, postedTransactions);
		this.view.flxHeaderSearchbox.setVisibility(false);
		this.view.flxSearch.setVisibility(true);
		this.view.flxWithdrawCash.setVisibility(true);
		this.view.flxSearchMain.setFocus(true);
	},
      
	showDeletedToast: function() {
		if (scope_cardlessPresentationController.deletedTransactionFlag) {
			applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, (applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardless.cancelTransaction") 
                                                                                        + "with reference id: "+scope_cardlessPresentationController.transactionId));
			scope_cardlessPresentationController.deletedTransactionFlag = false;
		}
		
		if (scope_cardlessPresentationController.deletedTransactionErrorFlag) {
			applicationManager.getDataProcessorUtility().showToastMessageError(this, scope_cardlessPresentationController.deletedTransactionErrorMessage);
			scope_cardlessPresentationController.deletedTransactionErrorFlag = false;
		}
	}
});