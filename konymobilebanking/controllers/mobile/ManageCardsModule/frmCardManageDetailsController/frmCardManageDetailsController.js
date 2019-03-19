define({
    preShow: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageDetailsController : preShow ####");
            this.hidePopUp();  
          	this.resetVisibilityOfDetails();
            this.addDataIntoSegment(this.getCardData());
            this.view.customHeader.btnRight.onClick = this.btnRightOnClick;
            //this.view.btnAddNickname.onClick = this.btnAddNicknameOnClick;
            //this.view.btnEditBillingAddtess.onClick = this.btnEditBillingAddressOnClick;
            //this.view.btnEditNickName.onClick = this.btnAddNicknameOnClick;
            this.view.flxCardNoToggle.onClick = this.flxCardNoToggleOnClick;
            this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
          	this.view.title = applicationManager.getUserPreferencesManager().getBankName();
          	this.view.customHeader.lblLocateUs.text = this.view.title = applicationManager.getUserPreferencesManager().getBankName();
            this.renderTitleBar(); 
          	var navManager = applicationManager.getNavigationManager();
          	var frmData = {
            	"isMainScreen": false
        	};
        	navManager.setCustomInfo("frmCardManageHome", frmData);
          	var currentForm=navManager.getCurrentForm();
          	applicationManager.getPresentationFormUtility().logFormName(currentForm);
        }
        catch(err) {
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    resetVisibilityOfDetails: function(){
      try {
      	this.view.flxAvailableBal.setVisibility(true);
      	this.view.flxSeperator5.setVisibility(true);
      	this.view.flxValidThrough.setVisibility(true);
      	this.view.flxSeperator4.setVisibility(true);
      	this.view.flxBillingAddress.setVisibility(true);
      	this.view.flxSeperator8.setVisibility(true);
      	this.view.imgCardNoToggle.src = "view.png";
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }        
    },
  	init : function(){
      try {
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }        
    },
    getCardData: function() {
        try {
            var loggerManager = applicationManager.getLoggerManager();
            loggerManager.log("#### start frmExternalBankLoginController : getCardData ####");

            var navManager = applicationManager.getNavigationManager();
            var cardDetails = navManager.getCustomInfo("frmCardManageDetails");
            return cardDetails;
        }
        catch(err) {
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    addDataIntoSegment: function(cardDetails) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageDetailsController : addDataIntoSegment ####");
          	var formatUtil = applicationManager.getFormatUtilManager();
            this.view.lblCardNoValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(cardDetails['cardNumber']);   //1234 5678 9123 XXXX
            this.view.lblAccHolderValue.text = cardDetails['cardHolderName'];
            this.view.lblCardTypeValue.text = cardDetails['cardType'];
            this.view.lblIssuingBankValue.text = applicationManager.getUserPreferencesManager().getBankName();
            this.view.lblBillingAddressValue.text = cardDetails['billingAddress'];
          	var expiryDate = cardDetails['expiryDate'];
            var cardType = cardDetails['cardType'];
            if (cardType === 'Credit') {
              	var availableCredit = cardDetails['creditLimit'];
                this.view.lblAvailBalance.text = kony.i18n.getLocalizedString("kony.mb.accdetails.creditLimit");           	
            	this.view.lblAvailBalanceValue.text = ((availableCredit!=null)?(formatUtil.formatAmountandAppendCurrencySymbol(availableCredit)):"$0.00");
              	if (availableCredit === null || availableCredit === undefined || availableCredit === "") {
                  this.view.flxAvailableBal.setVisibility(false);
                  this.view.flxSeperator5.setVisibility(false);
                }
            } else {
                if (cardType === "Debit")
                  	var withdrawalLimit = cardDetails['withdrawlLimit'];
                    this.view.lblAvailBalance.text = kony.i18n.getLocalizedString("kony.mb.cardManage.withdrawlLimit");              		
            		this.view.lblAvailBalanceValue.text = ((withdrawalLimit!=null)?(formatUtil.formatAmountandAppendCurrencySymbol(withdrawalLimit)):"$0.00");
              		if (withdrawalLimit === null || withdrawalLimit === undefined || withdrawalLimit === "") {
                      this.view.flxAvailableBal.setVisibility(false);
                      this.view.flxSeperator5.setVisibility(false);
                    }
            }
            if (expiryDate === null || expiryDate === undefined || expiryDate === "") {
                this.view.flxValidThrough.setVisibility(false);
                this.view.flxSeperator4.setVisibility(false);
            }else{
              var dateFormat = new Date(expiryDate);
              var formatedDate = formatUtil.getFormatedDateString(dateFormat,formatUtil.getApplicationDateFormat());
              this.view.lblValidThroughVal.text = formatedDate.slice(0,2)+"/"+formatedDate.slice(-4);
            }
            
            var billingAddress = cardDetails['billingAddress'];
            if (billingAddress === null || billingAddress === undefined || billingAddress === "") {
                this.view.flxBillingAddress.setVisibility(false);
                this.view.flxSeperator8.setVisibility(false);
            }
        }
        catch(err) {
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    flxCardNoToggleOnClick: function() {
        try {
            var loggerManager = applicationManager.getLoggerManager();
            loggerManager.log("#### start frmExternalBankLoginController : flxCardNoToggleOnClick ####");
            var cardData = this.getCardData();
            var navigationManager = applicationManager.getNavigationManager();
            var IsMaskedNumberEnabled = navigationManager.getCustomInfo("frmCardManageDetailsController_IsMaskedNumberEnabled");
            if (IsMaskedNumberEnabled === true) {
                this.view.imgCardNoToggle.src = "viewactive.png";
                this.view.lblCardNoValue.text = cardData["cardNumber"];
                navigationManager.setCustomInfo("frmCardManageDetailsController_IsMaskedNumberEnabled", false);
                this.view.flxMainContainer.forceLayout();
            } else {
                this.view.imgCardNoToggle.src = "view.png";
                this.view.lblCardNoValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(cardData['cardNumber']);   //1234 5678 9123 XXXX
                navigationManager.setCustomInfo("frmCardManageDetailsController_IsMaskedNumberEnabled", true);
                this.view.flxMainContainer.forceLayout();
            }
        }
        catch(err) {
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    btnRightOnClick: function() {
      if(applicationManager.getDeviceUtilManager().isIPhone()) {
        var actionSheetObject = new kony.ui.ActionSheet(
          {
            "title":null,
            "message":null,
            "showCompletionCallback": null
          }
        );
        var actionBillingAddress = new kony.ui.ActionItem(
          {
            "title":"Edit Billing Address",
            "style":constants.ACTION_STYLE_DEFAULT,
            "action": this.btnEditBillingAddressOnClick
          }
        );
        var actionEditNickName = new kony.ui.ActionItem(
          {
            "title":"Edit Card Nickname",
            "style":constants.ACTION_STYLE_DEFAULT,
            "action": this.btnAddNicknameOnClick
          }
        );

        var actionCancel = new kony.ui.ActionItem(
          {
            "title":"Cancel",
            "style":constants.ACTION_ITEM_STYLE_CANCEL,
            "action": null
          }
        );
        actionSheetObject.addAction(actionBillingAddress);
        actionSheetObject.addAction(actionEditNickName);
        actionSheetObject.addAction(actionCancel);
        actionSheetObject.show();
      }else{

        this.view.flxPopupNickName.setVisibility(true);
        this.view.btnAddNickname.setEnabled(false);
        this.view.flxMainContainer.setEnabled(false);
        this.view.flxHeader.setEnabled(false);
      }
    },
    hidePopUp: function() {
        this.view.flxPopupNickName.setVisibility(false);
        this.view.btnAddNickname.setEnabled(true);
        this.view.flxMainContainer.setEnabled(true);
        this.view.flxHeader.setEnabled(true);
    },
    btnAddNicknameOnClick: function() {
        try {
            var loggerManager = applicationManager.getLoggerManager();
            loggerManager.log("#### start frmExternalBankLoginController : btnAddNicknameOnClick ####");

            var navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo("frmCardMngNickName", this.getCardData());
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
    		manageCardsModule.presentationController.commonFunctionForNavigation("frmCardMngNickName");
        }
        catch(err) {
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    btnEditBillingAddressOnClick: function() {
        try {
            var loggerManager = applicationManager.getLoggerManager();
            loggerManager.log("#### start frmExternalBankLoginController : btnEditBillingAddressOnClick ####");

            var navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo("frmCardMngBillAddress", this.getCardData());
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
    		manageCardsModule.presentationController.commonFunctionForNavigation("frmCardMngBillAddress");
        }
        catch(err) {
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    flxBackOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
		navManager.setCustomInfo("frmCardManageHome",{"isMainScreen": false});
    	manageCardsModule.presentationController.showCardsHome();
    }

});