define({
    keypadString: '0.00',
    isPeriodUsed: false,
	timerCounter: 0,
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.keypadString = '0.00';
        this.view.lblAmount.text = "0.00";
      	var configurationManager = applicationManager.getConfigurationManager();
      	this.view.lblDollar.text = configurationManager.getCurrencyCode();
        var controller = applicationManager.getPresentationUtility().getController('frmP2pFromAccount', true);
        this.updateDetails(); 
        this.updateAmountValue();
        this.initActions();
		var navManager = applicationManager.getNavigationManager();
    	var currentForm=navManager.getCurrentForm();
    	applicationManager.getPresentationFormUtility().logFormName(currentForm);
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        this.view.btnContinue.onClick = this.continueOnClick;					       
        this.view.btnChange.onClick = function() {
            var accMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            accMode.presentationController.getAccounts();
        };
        this.view.customHeader.flxBack.onClick = function() {
          var navMan=applicationManager.getNavigationManager();    
           navMan.goBack();
        };
        this.view.customHeader.btnRight.onClick = function() {
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
        };
    }, 
	continueOnClick: function() {
		var configManager = applicationManager.getConfigurationManager();
		var amountEntered = this.keypadString;
		if(Number(amountEntered) >= Number(configManager.getConfigurationValue("minP2PLimit")) && Number(amountEntered) <= Number(configManager.getConfigurationValue("maxP2PLimit")))
		{
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var fromaccountdata = payeeMod.presentationController.getP2PObject();
        var data = {};
    	data.fromAccountName = this.view.lblFromAccountValue.text;
        data.amount = this.keypadString;
        data.fromAvlBal = fromaccountdata.fromAccountAvailableBalance;
        payeeMod.presentationController.evaluateAmount(data.amount,data.fromAvlBal,data);  
     }
    else if(Number(amountEntered)<Number(configManager.getConfigurationValue("minP2PLimit"))){
      this.bindGenericError(kony.i18n.getLocalizedString("kony.mb.entitlements.minTransactionLimitUnreached") + " "+configManager.getCurrencyCode()+Number(configManager.getConfigurationValue("minP2PLimit"))); 
    }
	else if(Number(amountEntered)>Number(configManager.getConfigurationValue("maxP2PLimit")) ){
	  this.bindGenericError(kony.i18n.getLocalizedString("kony.mb.entitlements.maxTransactionLimitExceeded") + " "+configManager.getCurrencyCode()+Number(configManager.getConfigurationValue("maxP2PLimit")));
	 
	}
  },
    setKeypadChar: function(char) {
        if(char=='.'){
          if(this.isPeriodUsed==false){
            this.isPeriodUsed = true;
          }else{
            return;
          }
        }
        this.keypadString = this.keypadString + char;
        var firstChar = this.keypadString[0];
        this.keypadString = this.keypadString.split("");
        for(var i=1; i<this.keypadString.length; i++){
          if(this.keypadString[i]=='.'){
            this.keypadString[i-1] = this.keypadString[i+1];
            i++;
          }else{
            this.keypadString[i-1]=this.keypadString[i];
          }
        }
        this.keypadString = this.keypadString.join("");
        this.keypadString = this.keypadString.substr(0, this.keypadString.length-1);
        if(firstChar!=='0'){
          this.keypadString = firstChar + this.keypadString;
        }
        this.updateAmountValue();
    },
    clearKeypadChar: function() {
        if(this.keypadString ==='0.00') return;

        this.keypadString = this.keypadString.split("");
        for(var i=this.keypadString.length-2; i>=0; i--){
          if(this.keypadString[i]=='.'){
            this.keypadString[i+1] = this.keypadString[i-1];
            i--;
          }else{
            this.keypadString[i+1] = this.keypadString[i];
          }
        } 
        this.keypadString = this.keypadString.join("");
        this.keypadString = this.keypadString.substr(1);
        if(this.keypadString[0]=='.'){
          this.keypadString = '0'+ this.keypadString;
        }
        this.updateAmountValue();
    },
    updateAmountValue: function() {
      if(this.keypadString==='0.00'){
        this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
        this.view.btnContinue.setEnabled(false);
        this.view.lblAmount.text = this.view.keypad.formatAmount(this.keypadString);
      }else{
        var keypadStringCommas = '';
        var beforeDecimal = this.keypadString.split('.')[0];
        var afterDecimal = this.keypadString.split('.')[1];
        if(beforeDecimal.length>3){
          var withCommas = (beforeDecimal.length)/3;
          var withoutCommas = (beforeDecimal.length)%3;
          var temp = '';
          if(withoutCommas!=0){
            temp = beforeDecimal.substr(0, withoutCommas)+',';
          }
          for(var i = withoutCommas; i<beforeDecimal.length; i+=3){
            temp+=beforeDecimal.substr(i, 3)+',';
          }
          beforeDecimal = temp.substr(0, temp.length-1);
        }
        keypadStringCommas = beforeDecimal + '.'+afterDecimal;
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
        this.view.btnContinue.setEnabled(true);
        this.view.lblAmount.text = this.view.keypad.formatAmount(keypadStringCommas);
      } 
    },
	updateDetails: function(){
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var data = payeeMod.presentationController.getP2PObject();
      	if(data.amount!==undefined && data.amount!== null && data.amount !== "")
        {
      		this.view.lblAmount.text = data.amount;
      		this.keypadString = data.amount;
              if(data.amount.indexOf(".")==-1)
              {
                this.isPeriodUsed = false;
              }
            else
              {
                this.isPeriodUsed = true;
              }
    	}
        this.view.lblFromAccountValue.text= data.fromAccountNickName;
        this.view.lblBalanceValue.text = data.fromAccountBalance;
        this.view.lblBank.text = data.fromBankName;
        this.view.lblavailableBalance.text=data.accountBalanceType;
    },  
    bindGenericError: function (errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});