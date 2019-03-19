define({
    keypadString: '0.00',
    isPeriodUsed: false,
  
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
  
    /**
     * Description
     * @method onNavigate
     * @param {} obj
     * @return 
     */
    onNavigate: function(obj) {
      try {
        if (obj === undefined) {
            return;
        }
        var scope = this;
        var setType = {
            /**
             * Description
             * @return 
             */
            "mykony": function() {},
            /**
             * Description
             * @return 
             */
            "myother": function() {},
            /**
             * Description
             * @return 
             */
            "otherkony": function() {},
            /**
             * Description
             * @return 
             */
            "otherbank": function() {},
            /**
             * Description
             * @return 
             */
            "international": function() {},
            /**
             * Description
             * @return 
             */
            "wire": function() {},
        };
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }  
    },
  
    /**
     * Description
     * @method preShow
     * @return 
     */
    preShow: function() {
      try {
      	applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        var navManager = applicationManager.getNavigationManager();
        this.alertData = navManager.getCustomInfo("frmAlertsMinimumBalance");
        this.setKeyPadActions();
        this.keypadString = '0.00';
        this.view.lblAmount.text = this.alertData.selectedField;
        this.initActions();
      	this.setHeaderTitle(this.alertData);
        this.view.lblBodyText.text = "Enter " + this.alertData.text.toLowerCase();
        this.view.tbxAmount.text = parseInt(this.alertData.selectedField);
   		var currentForm=navManager.getCurrentForm();
   		applicationManager.getPresentationFormUtility().logFormName(currentForm);
      }
      catch(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      } 
    },
  
  	setHeaderTitle: function(formData){
      try{
        if(formData.key==="minimumBalance"){
          this.view.title = kony.i18n.getLocalizedString("kony.mb.Alerts.MinimumBalanceTitle");
          this.view.customHeader.lblLocateUs.text =  kony.i18n.getLocalizedString("kony.mb.Alerts.MinimumBalanceTitle");
        }
        else if(formData.key==="debitLimit"){
          this.view.title = kony.i18n.getLocalizedString("kony.mb.Alerts.DebitLimitTitle");
          this.view.customHeader.lblLocateUs.text =  kony.i18n.getLocalizedString("kony.mb.Alerts.DebitLimitTitle");
        }
        else if(formData.key==="creditLimit"){
          this.view.title = kony.i18n.getLocalizedString("kony.mb.Alerts.CreditLimitTitle");
          this.view.customHeader.lblLocateUs.text =  kony.i18n.getLocalizedString("kony.mb.Alerts.CreditLimitTitle");
        }
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      } 
    },
  	
    /**
     * Description
     * @method setKeyPadActions
     * @return 
     */
    setKeyPadActions: function() {
      try {
        var scopeObj = this;
        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.keypad.btnOne.onClick = function() {
            scopeObj.setKeypadChar(1);
        };
        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.keypad.btnTwo.onClick = function() {
            scopeObj.setKeypadChar(2);
        };
        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.keypad.btnThree.onClick = function() {
            scopeObj.setKeypadChar(3);
        };
        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.keypad.btnFour.onClick = function() {
            scopeObj.setKeypadChar(4);
        };
        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.keypad.btnFive.onClick = function() {
            scopeObj.setKeypadChar(5);
        };
        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.keypad.btnSix.onClick = function() {
            scopeObj.setKeypadChar(6);
        };
        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.keypad.btnSeven.onClick = function() {
            scopeObj.setKeypadChar(7);
        };
        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.keypad.btnEight.onClick = function() {
            scopeObj.setKeypadChar(8);
        };
        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.keypad.btnNine.onClick = function() {
            scopeObj.setKeypadChar(9);
        };
        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.keypad.btnZero.onClick = function() {
            scopeObj.setKeypadChar(0);
        };
        /**
         * Description
         * @method onTouchEnd
         * @return 
         */
        this.view.keypad.imgClearKeypad.onTouchEnd = function() {
            scopeObj.clearKeypadChar();
        };
        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.btnDot.onClick = function() {
            scopeObj.setKeypadChar('.');
        };
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }         
    },
  
    /**
     * Description
     * @method initActions
     * @return 
     */
    initActions: function() {
      try {
        var scope = this;
	
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        };
        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.btnContinue.onClick = function() {
          applicationManager.getPresentationUtility().showLoadingScreen();
            scope.updateBalance();
        };
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      } 
    },
  
    /**
     * Description
     * @method updateBalance
     * @return 
     */
    updateBalance: function() {
      try{
        applicationManager.getPresentationUtility().showLoadingScreen();
        var amount = this.view.lblAmount.text;
      	var amountWithoutCommas=amount.replace(/,/g , '');
      	var validAmountString=""+amountWithoutCommas; 
        if (validAmountString.length<=16) {
            var key = this.alertData.key;
            var jsData = {
                "alertId": this.alertData.alertId,
            };
            jsData[key] = validAmountString;
          	var  settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsModule.presentationController.updateUserAccountAlerts(jsData, this.updateBalanceSuccess.bind(this), this.updateBalanceFailure.bind(this));
        } else {
            alert("Please enter the valid amount");
			applicationManager.getPresentationUtility().dismissLoadingScreen();
        }
      }
      catch(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      } 
    },

    decimalPlaces: function(num) {
      try {
        var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        if (!match) {
            return 0;
        }
        return Math.max(
            0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.processingError", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
      }     
    },

    /**
     * Description
     * @method updateBalanceSuccess
     * @param {} response
     * @return 
     */
    updateBalanceSuccess: function(response) {
      try{
        var self = this;
        var key = this.alertData.key;
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var accountsDetails = navManager.getCustomInfo("frmAlertsAccountList");
        var accountsData = navManager.getCustomInfo("frmAlertsAccountDetail");

        accountsDetails.forEach(function(account) {
            if (account.alertId === self.alertData.alertId) {
                account[key] = parseFloat((self.view.lblAmount.text).replace(/,/g , '')).toFixed(2);
            }
        });
        accountsData[key] =parseFloat((self.view.lblAmount.text).replace(/,/g , '')).toFixed(2);
        navManager.setCustomInfo("frmAlertsAccountList", accountsDetails);
        navManager.setCustomInfo("frmAlertsAccountDetail", accountsData);
      	var limitUpdateData=key;
		navManager.setCustomInfo("frmAlertsAccountDetail_LimitUpdate", limitUpdateData);
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		settingsMod.presentationController.commonFunctionForNavigation("frmAlertsAccountDetail");
      }
      catch(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      } 
    },
  
    /**
     * Description
     * @method updateBalanceFailure
     * @param {} response
     * @return 
     */
    updateBalanceFailure: function(response) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    },


    /**
     * Description
     * @method setKeypadChar
     * @param {} char
     * @return 
     */
    setKeypadChar: function(char) {
      try{
        if (char == '.') {
            if (this.isPeriodUsed === false) {
                this.isPeriodUsed = true;
            } else {
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
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.processingError", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
      } 
    },

    clearKeypadChar: function () {
      try{
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
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.processingError", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
      } 
    },

    updateAmountValue: function(){
      try {
        if(this.keypadString==='0.00'){
          this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
          this.view.btnContinue.setEnabled(false);
          this.view.lblAmount.text = '0.00';
        }else{
          var keypadStringCommas = '0.00';
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
          this.view.lblAmount.text = keypadStringCommas;
        }
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }         
    }
});