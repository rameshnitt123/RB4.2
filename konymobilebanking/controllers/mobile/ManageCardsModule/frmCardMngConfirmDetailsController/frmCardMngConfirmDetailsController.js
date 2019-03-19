define({
    titleText: '',
    objReturn: null,
  	init : function() {
      try {
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }
    },
    preShow: function() {
      try{ 
        this.view.btnSubmit.onClick = this.btnSubmitOnClick.bind(this);
        this.view.imgCardNoToggle.onTouchEnd = this.imgCardNumberToggle;
      	this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
      	this.view.btnCallCustomerCare.onClick = this.callCustomerCare;
      	var navManager = applicationManager.getNavigationManager();
		var cardData = navManager.getCustomInfo("frmCardMngConfirmDetails");
      	this.cardData = cardData;
      	if (cardData === undefined) {
            var newObj = {
                "view": "none"
            };
            cardData = newObj;
        }
        if (cardData.view === "replaceCard") {
            this.titleText = kony.i18n.getLocalizedString("kony.mb.cardManage.replacingCard");
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.cardManage.replacingCard");
            this.renderViewForReplaceCard(cardData);
        }
        if (cardData.view === "lostCard") {
            this.titleText = kony.i18n.getLocalizedString("kony.mb.cardManage.stolenCreditCard");
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.cardManage.stolenCreditCard");
            this.renderViewForStolenCard(cardData);
        }
        if (cardData.view === "cancelCard") {
            this.titleText = kony.i18n.getLocalizedString("kony.mb.cardManage.cancelCardTitle");
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.cardManage.cancelCardTitle");
            this.renderViewForChangeCard(cardData);
        }
        if (cardData.view === "none") {
        }
		this.view.imgCardNoToggle.src="view.png";
        this.objReturn = cardData;
      	this.view.txtReason.text = this.cardData.Reason;
      	this.view.lblAccHolderValue.text = this.cardData.cardHolderName;
      	this.view.lblCardNoValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(this.cardData.cardNumber);
      	this.view.lblCardTypeValue.text = this.cardData.cardType;
      	this.view.lblIssuingBankValue.text = this.cardData.issuerName;
      	var expiryDate = new Date(this.cardData.expiryDate);
      	var formatUtil = applicationManager.getFormatUtilManager();
        var formatedDate = formatUtil.getFormatedDateString(expiryDate,formatUtil.getApplicationDateFormat());
        this.view.lblValidThroughVal.text = formatedDate.slice(0,2)+"/"+formatedDate.slice(-4);
      	this.renderTitleBar();
      	var currentForm=navManager.getCurrentForm();
      	applicationManager.getPresentationFormUtility().logFormName(currentForm);
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }
    },
    cancelOnClick: function(){
      try {
        var navManager = applicationManager.getNavigationManager();
      	var frmData = { 
          "isMainScreen": false 
        };
      	navManager.setCustomInfo("frmCardManageHome",frmData);
        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
    	manageCardsModule.presentationController.showCardsHome();
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }
    },
  	callCustomerCare: function(){
      applicationManager.getPresentationUtility().showLoadingScreen(); 
            var infoCall = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
            infoCall.presentationController.onClickCallUs();       
    }, 
  
     showDial: function (phoneNumber) {     
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      kony.phone.dial(phoneNumber);         
    },
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
            if ((this.titleText !== null) && (this.titleText !== '')) {
                this.view.title = this.titleText;
            }
        }
    },
    btnSubmitOnClick: function() {
      	applicationManager.getPresentationUtility().showLoadingScreen();
      	this.updateCurrentCard();
    },
  
  	updateCurrentCard : function(){
      try{
        delete this.cardData.view;
        var updateCardDetails = {
          "cardId": this.cardData.cardId,
          "Action":this.cardData.Action,
          "Reason":this.view.txtReason.text
        };

        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
        manageCardsModule.presentationController.updateCardData(updateCardDetails,this.updateCardSuccess.bind(this),this.updateCardFailure.bind(this));
      }
      catch(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }
    },
  	updateCardSuccess : function(response){
      var navManager = applicationManager.getNavigationManager();
      var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
      manageCardsModule.presentationController.showCardsHome();
    },
	updateCardFailure : function(response){
      try{
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if(response["isServerUnreachable"])
                    applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
        else{
          applicationManager.getDataProcessorUtility().showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.cardManage.failUpdateCard"));
        }
      }
      catch(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }        
    },  	
    renderViewForReplaceCard:function(){
        this.view.flxCallCusCare.setVisibility(false);
        this.view.flxSeperator1.setVisibility(false);
    },
    renderViewForStolenCard:function(){
        this.view.flxCallCusCare.setVisibility(true);
        this.view.flxSeperator1.setVisibility(true);
    },
    renderViewForChangeCard:function(){
        this.view.flxCallCusCare.setVisibility(true);
        this.view.flxSeperator1.setVisibility(true);
    },
    flxBackOnClick:function(){
        var navManager = applicationManager.getNavigationManager();
      	navManager.goBack();
    },
      
    imgCardNumberToggle: function() {
    if (this.view.imgCardNoToggle.src === "view.png") {
      this.view.imgCardNoToggle.src = "viewactive.png";
      this.view.lblCardNoValue.text = this.cardData.cardNumber;//"1122  3424  6273  2390";     
    } else {
      this.view.imgCardNoToggle.src = "view.png";
      this.view.lblCardNoValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(this.cardData.cardNumber);//"XXXX  XXXX  XXXX  2390";  
    }
      
  },

});