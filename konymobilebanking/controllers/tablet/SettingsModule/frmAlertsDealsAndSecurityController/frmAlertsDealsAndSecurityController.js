	define({
        init : function(){
          try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm=navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
          }
          catch(err){
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
	            this.setFlowActions();
	            this.setPreshowData();
	            this.frmPreShow();
	            this.initActions();
              	var navManager = applicationManager.getNavigationManager();
   				var currentForm=navManager.getCurrentForm();
   				applicationManager.getPresentationFormUtility().logFormName(currentForm);
          }
          catch(err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
          } 
        },
      
	    /**
	     * Description
	     * @method setFlowActions
	     * @return 
	     */
	    setFlowActions: function() {
          
        },
      
	    /**
	     * Description
	     * @method setPreshowData
	     * @return 
	     */
	    setPreshowData: function() {
          try {
            var deviceUtilManager = applicationManager.getDeviceUtilManager();
    		var isIpad = deviceUtilManager.isIpad();
    		if(!isIpad){
      			this.view.flxHeader.isVisible = true;
   			 }
    		else{
      			this.view.flxHeader.isVisible = false;
   			 }
          }
          catch(err){
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
          } 
	    },
      
	    /**
	     * Description
	     * @method frmPreShow
	     * @return 
	     */
	    frmPreShow: function() {
	        try {
	            var navManager = applicationManager.getNavigationManager();
	            dealsAndSecurityAlertsList = navManager.getCustomInfo("frmAlertsDealsAndSecurity");
                var deviceUtilManager = applicationManager.getDeviceUtilManager();
    			var isIpad = deviceUtilManager.isIpad();
	            if(dealsAndSecurityAlertsList[1] === 1) {
                  if(!isIpad){
                    this.view.customHeader.lblHeaderTitle.text = kony.i18n.getLocalizedString("kony.mb.Alerts.SecurityAlerts");
                  }
                  else{
                    this.view.title = kony.i18n.getLocalizedString("kony.mb.Alerts.SecurityAlerts");
                  }
                  this.view.lblBodyTxt.text = kony.i18n.getLocalizedString("kony.tab.alerts.SecurityAlertsInfo");
                  this.view.flxBankIDChange.isVisible = true;
                  this.view.flxPasswordChange.isVisible = true;
                  this.view.flxPasswordExpired.isVisible = true;
                  this.view.flxAddressOrPhoneChange.isVisible = true;
                  this.view.flxNewPayeeAdded.isVisible = true;
                  this.view.flxPayeeDetailsUpdated.isVisible = true;
                  this.view.flxNewDealsAvailable.isVisible = false;
                  this.view.flxDealsExpiringInOneday.isVisible = false;
                  this.setSecurityAlertsList();
	            }
              	else if(dealsAndSecurityAlertsList[1] === 2) {
                  if(!isIpad){
                    this.view.customHeader.lblHeaderTitle.text = kony.i18n.getLocalizedString("kony.mb.Alerts.DealsAlerts");
                  }else{
                    this.view.title = kony.i18n.getLocalizedString("kony.mb.Alerts.DealsAlerts");
                  }
                  this.view.lblBodyTxt.text = kony.i18n.getLocalizedString("kony.tab.alerts.DealsAlertsInfo");
                  this.view.flxBankIDChange.isVisible = false;
                  this.view.flxPasswordChange.isVisible = false;
                  this.view.flxPasswordExpired.isVisible = false;
                  this.view.flxAddressOrPhoneChange.isVisible = false;
                  this.view.flxNewPayeeAdded.isVisible = false;
                  this.view.flxPayeeDetailsUpdated.isVisible = false;
                  this.view.flxNewDealsAvailable.isVisible = true;
                  this.view.flxDealsExpiringInOneday.isVisible = true;
                  this.setDealsAlertsList();
	            }
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
              	this.view.customHeader.flxBack.onClick = function(){
          			 var navMan=applicationManager.getNavigationManager();    
          			 navMan.goBack();   
       			 };
	            var scopeObj = this;
	            this.view.flxToggleBankIDChange.onClick = this.toggleBtnActionBankIDChange;
	            this.view.flxTogglePasswordChange.onClick = this.toggleBtnActionPasswordChange;
	            this.view.flxTogglePasswordExpired.onClick = this.toggleBtnActionPasswordExpired;
	            this.view.flxToggleAddressOrPhoneChange.onClick = this.toggleBtnActionAddressOrPhoneChange;
	            this.view.flxToggleNewPayeeAdded.onClick = this.toggleBtnActionNewPayeeAdded;
	            this.view.flxTogglePayeeDetailsUpdated.onClick = this.toggleBtnActionPayeeDetailsUpdated;
	            this.view.flxToggleNewDealsAvailable.onClick = this.toggleBtnActionNewDealsAvailable;
	            this.view.flxDealsExpiringInOneday.onClick = this.toggleBtnActionDealsExpiringInOneDay;
            }
            catch(err) {
              throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
            } 
	    },
      
	    /**
	     * Description
	     * @method setSecurityAlertsList
	     * @return 
	     */
	    setSecurityAlertsList: function() {
	        try {
	            this.view.lblBankIDChange.text = kony.i18n.getLocalizedString("kony.mb.Alerts.BankingIDChange");
	            this.view.lblPasswordChange.text = kony.i18n.getLocalizedString("kony.mb.Alerts.PasswordChange");
	            this.view.lblPasswordExpired.text = kony.i18n.getLocalizedString("kony.mb.Alerts.PasswordExpired");
	            this.view.lblAddressOrPhoneChange.text = kony.i18n.getLocalizedString("kony.mb.Alerts.AddressOrPhoneChange");
	            this.view.lblNewPayeeAdded.text = kony.i18n.getLocalizedString("kony.mb.Alerts.NewPayeeAdded");
	            this.view.lblPayeeDetailsUpdated.text = kony.i18n.getLocalizedString("kony.mb.Alerts.PayeeDetailsUpdated");
	            //alert(JSON.stringify(dealsAndSecurityAlertsList));
	            if (dealsAndSecurityAlertsList[0].bankingIDChange === "true") {
	                this.view.imgSwitchBankIDChange.src = "active.png";
	            } else {
	                this.view.imgSwitchBankIDChange.src = "inactive.png";
	            }
	            if (dealsAndSecurityAlertsList[0].passwordChange === "true") {
	                this.view.imgSwitchPasswordChange.src = "active.png";
	            } else {
	                this.view.imgSwitchPasswordChange.src = "inactive.png";
	            }
	            if (dealsAndSecurityAlertsList[0].passwordExpired === "true") {
	                this.view.imgSwitchPasswordExpired.src = "active.png";
	            } else {
	                this.view.imgSwitchPasswordExpired.src = "inactive.png";
	            }
	            if (dealsAndSecurityAlertsList[0].communicationChange === "true") {
	                this.view.imgSwitchAddressOrPhoneChange.src = "active.png";
	            } else {
	                this.view.imgSwitchAddressOrPhoneChange.src = "inactive.png";
	            }
	            if (dealsAndSecurityAlertsList[0].newPayeeAdded === "true") {
	                this.view.imgSwitchNewPayeeAdded.src = "active.png";
	            } else {
	                this.view.imgSwitchNewPayeeAdded.src = "inactive.png";
	            }
	            if (dealsAndSecurityAlertsList[0].payeeDetailsUpdated === "true") {
	                this.view.imgSwitchPayeeDetailsUpdated.src = "active.png";
	            } else {
	                this.view.imgSwitchPayeeDetailsUpdated.src = "inactive.png";
	            }
            }
            catch(err) {
              throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
            } 
	    },
	    /**
	     * Description
	     * @method setDealsAlertsList
	     * @return 
	     */
	    setDealsAlertsList: function() {
	        try {
	            this.view.lblNewDealsAvailable.text = kony.i18n.getLocalizedString("kony.mb.Alerts.NewDealsAvailable");
	            this.view.lblDealsExpiringInOneDay.text = kony.i18n.getLocalizedString("kony.mb.Alerts.DealsExpiringInOneDay");
	            if (dealsAndSecurityAlertsList[0].newDealsAvailable === "true") {
	                this.view.imgSwitchNewDealsAvailable.src = "active.png";
	            } else {
	                this.view.imgSwitchNewDealsAvailable.src = "inactive.png";
	            }
	            if (dealsAndSecurityAlertsList[0].dealsExpiring === "true") {
	                this.view.imgSwitchDealsExpiringInOneday.src = "active.png";
	            } else {
	                this.view.imgSwitchDealsExpiringInOneday.src = "inactive.png";
	            }
            }
            catch(err) {
              throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
            } 
	    },



	    /**
	     * Description
	     * @method toggleBtnActionBankIDChange
	     * @return 
	     */
	    toggleBtnActionBankIDChange: function() {
	        try {
	            applicationManager.getPresentationUtility().showLoadingScreen();
	            var toggle = "true";
	            if (this.view.imgSwitchBankIDChange.src === "active.png") {
	                toggle = "false";
	            } else if (this.view.imgSwitchBankIDChange.src === "inactive.png") {
	                toggle = "true";
	            }

	            var inputParams = {
	                "alertid": dealsAndSecurityAlertsList[0].alertid,
	                "bankingIDChange": toggle

	            }
                var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");  
      			settingsModule.presentationController.updateUserAlerts(inputParams, this.updateBankingIDChangeFlagSuccess.bind(this), this.updateBankingIDChangeFlagFailure.bind(this));
            }
            catch(err) {
              applicationManager.getPresentationUtility().dismissLoadingScreen();
              throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
            } 
	    },

	    /**
	     * Description
	     * @method updateBankingIDChangeFlagSuccess
	     * @param {} response
	     * @return 
	     */
	    updateBankingIDChangeFlagSuccess: function(response) {
	        try {
	            applicationManager.getPresentationUtility().dismissLoadingScreen();
	            if(this.view.imgSwitchBankIDChange.src === "active.png"){
	                this.view.imgSwitchBankIDChange.src = "inactive.png";
	            } 
              	else {
	                this.view.imgSwitchBankIDChange.src = "active.png";
	            }
            }
            catch(err) {
              applicationManager.getPresentationUtility().dismissLoadingScreen();
              throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
            } 
	    },

	    /**
	     * Description
	     * @method updateBankingIDChangeFlagFailure
	     * @param {} response
	     * @return 
	     */
	    updateBankingIDChangeFlagFailure: function(response) {
	        applicationManager.getPresentationUtility().dismissLoadingScreen();
	    },

	    /**
	     * Description
	     * @method toggleBtnActionPasswordChange
	     * @return 
	     */
	    toggleBtnActionPasswordChange: function() {
	        try {
	            applicationManager.getPresentationUtility().showLoadingScreen();
	            var toggle = "true";
	            if (this.view.imgSwitchPasswordChange.src === "active.png") {
	                toggle = "false";
	            } else if (this.view.imgSwitchPasswordChange.src === "inactive.png") {
	                toggle = "true";
	            }

	            var inputParams = {
	                "alertid": dealsAndSecurityAlertsList[0].alertid,
	                "passwordChange": toggle

	            }
              	var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");  
      			settingsModule.presentationController.updateUserAlerts(inputParams, this.updatePasswordChangeFlagSuccess.bind(this), this.updateupdatePasswordChangeFlagFailure.bind(this));
            }
            catch(err) {
              applicationManager.getPresentationUtility().dismissLoadingScreen();
              throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
            } 
	    },

	    /**
	     * Description
	     * @method updatePasswordChangeFlagSuccess
	     * @param {} response
	     * @return 
	     */
	    updatePasswordChangeFlagSuccess: function(response) {
	        try {
	            applicationManager.getPresentationUtility().dismissLoadingScreen();
	            if (this.view.imgSwitchPasswordChange.src === "active.png") {
	                this.view.imgSwitchPasswordChange.src = "inactive.png";

	            } else {
	                this.view.imgSwitchPasswordChange.src = "active.png";

	            }
            }
            catch(err) {
              applicationManager.getPresentationUtility().dismissLoadingScreen();
              throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
            } 
	    },

      /**
	     * Description
	     * @method updateupdatePasswordChangeFlagFailure
	     * @param {} response
	     * @return 
	     */
	    updateupdatePasswordChangeFlagFailure: function(response) {
	        applicationManager.getPresentationUtility().dismissLoadingScreen();
	    },

	    /**
	     * Description
	     * @method toggleBtnActionPasswordExpired
	     * @return 
	     */
	    toggleBtnActionPasswordExpired: function() {
	        try {
	            applicationManager.getPresentationUtility().showLoadingScreen();
	            var toggle = "true";
	            if (this.view.imgSwitchPasswordExpired.src === "active.png") {
	                toggle = "false";
	            } else if (this.view.imgSwitchPasswordExpired.src === "inactive.png") {
	                toggle = "true";
	            }

	            var inputParams = {
	                "alertid": dealsAndSecurityAlertsList[0].alertid,
	                "passwordExpired": toggle
	            }
                var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");  
      			settingsModule.presentationController.updateUserAlerts(inputParams, this.updatePasswordExpiredFlagSuccess.bind(this), this.updatePasswordExpiredFlagFailure.bind(this));
            }
            catch(err) {
              applicationManager.getPresentationUtility().dismissLoadingScreen();
              throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
            } 
	    },

	    /**
	     * Description
	     * @method updatePasswordExpiredFlagSuccess
	     * @param {} response
	     * @return 
	     */
	    updatePasswordExpiredFlagSuccess: function(response) {
          try {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            if (this.view.imgSwitchPasswordExpired.src === "active.png") {
              this.view.imgSwitchPasswordExpired.src = "inactive.png";

            } else {
              this.view.imgSwitchPasswordExpired.src = "active.png";
            }
          }
          catch(err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
          }             
	    },


	    /**
	     * Description
	     * @method updatePasswordExpiredFlagFailure
	     * @param {} response
	     * @return 
	     */
	    updatePasswordExpiredFlagFailure: function(response) {
	        applicationManager.getPresentationUtility().dismissLoadingScreen();
	    },



	    /**
	     * Description
	     * @method toggleBtnActionAddressOrPhoneChange
	     * @return 
	     */
	    toggleBtnActionAddressOrPhoneChange: function() {
	        try {
	            applicationManager.getPresentationUtility().showLoadingScreen();
	            var toggle = "true";
	            if (this.view.imgSwitchAddressOrPhoneChange.src === "active.png") {
	                toggle = "false";
	            } else if (this.view.imgSwitchAddressOrPhoneChange.src === "inactive.png") {
	                toggle = "true";
	            }

	            var inputParams = {
	                "alertid": dealsAndSecurityAlertsList[0].alertid,
	                "communicationChange": toggle
	            }
               	var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");  
   			   	settingsModule.presentationController.updateUserAlerts(inputParams, this.updateAddressOrPhoneChangeFlagSuccess.bind(this), this.updateAddressOrPhoneChangeFlagFailure.bind(this));
            }
            catch(err) {
              applicationManager.getPresentationUtility().dismissLoadingScreen();
              throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
            } 
	    },

	    /**
	     * Description
	     * @method updateAddressOrPhoneChangeFlagSuccess
	     * @param {} response
	     * @return 
	     */
	    updateAddressOrPhoneChangeFlagSuccess: function(response) {
          try {
	        applicationManager.getPresentationUtility().dismissLoadingScreen();
	        if (this.view.imgSwitchAddressOrPhoneChange.src === "active.png") {
	            this.view.imgSwitchAddressOrPhoneChange.src = "inactive.png";

	        } else {
	            this.view.imgSwitchAddressOrPhoneChange.src = "active.png";
	        }
          }
          catch(err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
          }             
	    },


	    /**
	     * Description
	     * @method updateAddressOrPhoneChangeFlagFailure
	     * @param {} response
	     * @return 
	     */
	    updateAddressOrPhoneChangeFlagFailure: function(response) {
	        applicationManager.getPresentationUtility().dismissLoadingScreen();
	    },

	    /**
	     * Description
	     * @method toggleBtnActionNewPayeeAdded
	     * @return 
	     */
	    toggleBtnActionNewPayeeAdded: function() {
	        try {
              applicationManager.getPresentationUtility().showLoadingScreen();
              var toggle = "true";
              
              if(this.view.imgSwitchNewPayeeAdded.src === "active.png") {
                toggle = "false";
              }
              else if(this.view.imgSwitchNewPayeeAdded.src === "inactive.png") {
                toggle = "true";
              }

              var inputParams = {
                "alertid": dealsAndSecurityAlertsList[0].alertid,
                "newPayeeAdded": toggle
              }
              var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");  
              settingsModule.presentationController.updateUserAlerts(inputParams, this.updateNewPayeeAddedFlagSuccess.bind(this), this.updateNewPayeeAddedFlagFailure.bind(this));
            }
            catch(err) {
              applicationManager.getPresentationUtility().dismissLoadingScreen();
              throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
            } 
	    },

	    /**
	     * Description
	     * @method updateNewPayeeAddedFlagSuccess
	     * @param {} response
	     * @return 
	     */
	    updateNewPayeeAddedFlagSuccess: function(response) {
          try {
	        applicationManager.getPresentationUtility().dismissLoadingScreen();
	        if (this.view.imgSwitchNewPayeeAdded.src === "active.png") {
	            this.view.imgSwitchNewPayeeAdded.src = "inactive.png";

	        } else {
	            this.view.imgSwitchNewPayeeAdded.src = "active.png";
	        }
          }
          catch(err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
          }             
	    },


	    /**
	     * Description
	     * @method updateNewPayeeAddedFlagFailure
	     * @param {} response
	     * @return 
	     */
	    updateNewPayeeAddedFlagFailure: function(response) {
	        applicationManager.getPresentationUtility().dismissLoadingScreen();
	    },

	    /**
	     * Description
	     * @method toggleBtnActionPayeeDetailsUpdated
	     * @return 
	     */
	    toggleBtnActionPayeeDetailsUpdated: function() {
	        try {
	            applicationManager.getPresentationUtility().showLoadingScreen();
	            var toggle = "true";
	            if (this.view.imgSwitchPayeeDetailsUpdated.src === "active.png") {
	                toggle = "false";
	            } else if (this.view.imgSwitchPayeeDetailsUpdated.src === "inactive.png") {
	                toggle = "true";
	            }

	            var inputParams = {
	                "alertid": dealsAndSecurityAlertsList[0].alertid,
	                "payeeDetailsUpdated": toggle
	            }
				var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");  
      			settingsModule.presentationController.updateUserAlerts(inputParams, this.updatePayeeDetailsUpdatedFlagSuccess.bind(this), this.updatePayeeDetailsUpdatedFlagFailure.bind(this));
            }
            catch(err) {
              applicationManager.getPresentationUtility().dismissLoadingScreen();
              throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
            } 
	    },

	    /**
	     * Description
	     * @method updatePayeeDetailsUpdatedFlagSuccess
	     * @param {} response
	     * @return 
	     */
	    updatePayeeDetailsUpdatedFlagSuccess: function(response) {
          try {
	        applicationManager.getPresentationUtility().dismissLoadingScreen();
	        if (this.view.imgSwitchPayeeDetailsUpdated.src === "active.png") {
	            this.view.imgSwitchPayeeDetailsUpdated.src = "inactive.png";

	        } else {
	            this.view.imgSwitchPayeeDetailsUpdated.src = "active.png";
	        }
          }
          catch(err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
          }             
	    },


	    /**
	     * Description
	     * @method updatePayeeDetailsUpdatedFlagFailure
	     * @param {} response
	     * @return 
	     */
	    updatePayeeDetailsUpdatedFlagFailure: function(response) {
	        applicationManager.getPresentationUtility().dismissLoadingScreen();
	    },


	    /**
	     * Description
	     * @method toggleBtnActionNewDealsAvailable
	     * @return 
	     */
	    toggleBtnActionNewDealsAvailable: function() {
	        try {
	            applicationManager.getPresentationUtility().showLoadingScreen();
	            var toggle = "true";
	            if (this.view.imgSwitchNewDealsAvailable.src === "active.png") {
	                toggle = "false";
	            } else if (this.view.imgSwitchNewDealsAvailable.src === "inactive.png") {
	                toggle = "true";
	            }

	            var inputParams = {
	                "alertid": dealsAndSecurityAlertsList[0].alertid,
	                "newDealsAvailable": toggle
	            };
              
              	var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");  
      			settingsModule.presentationController.updateUserAlerts(inputParams, this.updateUserAlertsSuccess.bind(this), this.updateUserAlertsFailure.bind(this));
            }
            catch(err) {
              applicationManager.getPresentationUtility().dismissLoadingScreen();
              throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
            } 
	    },

	    /**
	     * Description
	     * @method updateUserAlertsSuccess
	     * @param {} response
	     * @return 
	     */
	    updateUserAlertsSuccess: function(response) {
          try {
	        applicationManager.getPresentationUtility().dismissLoadingScreen();
	        if(this.view.imgSwitchNewDealsAvailable.src === "active.png") {
	            this.view.imgSwitchNewDealsAvailable.src = "inactive.png";
	        } 
            else {
	            this.view.imgSwitchNewDealsAvailable.src = "active.png";
	        }
          }
          catch(err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
          }             
	    },


	    /**
	     * Description
	     * @method updateUserAlertsFailure
	     * @param {} response
	     * @return 
	     */
	    updateUserAlertsFailure: function(response) {
	        applicationManager.getPresentationUtility().dismissLoadingScreen();
	    },


	    /**
	     * Description
	     * @method toggleBtnActionDealsExpiringInOneDay
	     * @return 
	     */
	    toggleBtnActionDealsExpiringInOneDay: function() {
	        try {
	            applicationManager.getPresentationUtility().showLoadingScreen();
	            var toggle = "true";
	            if (this.view.imgSwitchDealsExpiringInOneday.src === "active.png") {
	                toggle = "false";
	            } else if (this.view.imgSwitchDealsExpiringInOneday.src === "inactive.png") {
	                toggle = "true";
	            }

	            var inputParams = {
	                "alertid": dealsAndSecurityAlertsList[0].alertid,
	                "dealsExpiring": toggle

	            };
              	var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");  
      			settingsModule.presentationController.updateUserAlerts(inputParams, this.updateDealsExpiringInOneDayFlagSuccess.bind(this), this.updateDealsExpiringInOneDayFlagFailure.bind(this));
            }
            catch(err) {
              applicationManager.getPresentationUtility().dismissLoadingScreen();
              throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
            } 
	    },

	    /**
	     * Description
	     * @method updateDealsExpiringInOneDayFlagSuccess
	     * @param {} response
	     * @return 
	     */
	    updateDealsExpiringInOneDayFlagSuccess: function(response) {
          try {
	        applicationManager.getPresentationUtility().dismissLoadingScreen();
            if (this.view.imgSwitchDealsExpiringInOneday.src === "active.png") {
              this.view.imgSwitchDealsExpiringInOneday.src = "inactive.png";
            } 
            else {
              this.view.imgSwitchDealsExpiringInOneday.src = "active.png";
            }
          }
          catch(err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.FailedToUpdateAlertSettings", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
          }             
	    },

	    /**
	     * Description
	     * @method updateDealsExpiringInOneDayFlagFailure
	     * @param {} response
	     * @return 
	     */
	    updateDealsExpiringInOneDayFlagFailure: function(response) {
	        applicationManager.getPresentationUtility().dismissLoadingScreen();
	    },
      
	    /**
	     * Description
	     * @method imgbackAction
	     * @return 
	     */
	    imgbackAction: function() {
          try {
	        var navManager = applicationManager.getNavigationManager();
	        navManager.goBack();
          }
          catch(err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
          }             
	    },
      
   backNavigation: function(){
    var navMan=applicationManager.getNavigationManager();    
    navMan.goBack();
  },

	});