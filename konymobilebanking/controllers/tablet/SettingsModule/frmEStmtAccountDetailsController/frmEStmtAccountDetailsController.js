define({ 
 
	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
  
  	preShow: function() {
		this.initActions(); 
      	this.initHeaderActions();
		this.setAcctDetailsData();
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
	},
  
	initActions: function() {
      	this.view.flxEditNickName.onClick = this.onEditNickName;
      	this.view.flxChangeEmail.onClick = this.onChangeEmail;	
      	this.view.flxUnMask.onTouchEnd = this.showHidePhoneNumber;
      	this.view.btnDisable.onClick = this.navigateToDisableEnableScreens.bind(this, "frmEStmtDisableEStatements"); 
		this.view.btnEnable.onClick = this.navigateToDisableEnableScreens.bind(this, "frmEStmtEnableEStatements");
     	this.view.flxEditOptions.onClick = this.showHideEditOptions.bind(this, true);
		this.view.flxCancel.onClick = this.showHideEditOptions.bind(this, false);
      	this.view.flxDismiss.onClick = this.showHideEditOptions.bind(this, false);
	},
  
  	showHideEditOptions: function(isEnable) {
     	this.view.flxEditOptions.setVisibility(isEnable); 
    },
  
  	initHeaderActions: function() {
    	var isIpad = applicationManager.getDeviceUtilManager().isIpad();
		if (!isIpad) { 	
      		this.view.customHeader.btnRight.onClick = this.onClickEdit;
  			this.view.customHeader.flxBack.onClick = this.backNavigation;
        }  
    },
  
  	navigateToDisableEnableScreens: function(formName) {
    	applicationManager.getPresentationUtility().showLoadingScreen();
		var settingsModule = applicationManager.getModule("SettingsModule"); 
		settingsModule.presentationController.commonFunctionForNavigation(formName);  
    },
  
  	onClickEdit: function() {
		var navManager = applicationManager.getNavigationManager();
		var data = navManager.getCustomInfo("frmEStmtAccountDetails");
		this.view.flxEditOptions.setVisibility(true);
		var userObj = applicationManager.getUserPreferencesManager();
		var email = userObj.getUserEmail();
      	var statement = (data && data.eStatementEnable === "true");
 		this.view.flxChangeEmail.setVisibility(statement);
	},
  
  	showHidePhoneNumber: function() {
      	var navManager = applicationManager.getNavigationManager();
		var data = navManager.getCustomInfo("frmEStmtAccountDetails");
		if (this.view.imgUnMask.src === "viewactive.png") {
			this.view.lblAccountNumberValue.text = (data && data.accountID) ? 
            	applicationManager.getDataProcessorUtility().maskAccountNumber(data.accountID) : "";
			this.view.imgUnMask.src = "view.png";
		} else {
			this.view.lblAccountNumberValue.text = (data && data.accountID) ? data.accountID : "";
			this.view.imgUnMask.src = "viewactive.png";
		}  
    },
  
  	backNavigation: function() {
    	var navManager = applicationManager.getNavigationManager();
		navManager.goBack(); 	
    },
    
  	onEditNickName: function() {
    	applicationManager.getPresentationUtility().showLoadingScreen();
		this.view.flxEditOptions.setVisibility(false);
		var navMan = applicationManager.getNavigationManager();
		var settingsModule = applicationManager.getModule("SettingsModule"); 
		settingsModule.presentationController.commonFunctionForNavigation("frmEStmtEditNickName");  
    },
  
  	onChangeEmail: function() {
    	applicationManager.getPresentationUtility().showLoadingScreen();
		this.view.flxEditOptions.setVisibility(false);
		var navMan = applicationManager.getNavigationManager();
		var settingsModule = applicationManager.getModule("SettingsModule"); 
		settingsModule.presentationController.commonFunctionForNavigation("frmEStmtChangeEmail");  
    },

	setAcctDetailsData: function() {    
		var isIpad = applicationManager.getDeviceUtilManager().isIpad();
      	var navManager = applicationManager.getNavigationManager();
		var data = navManager.getCustomInfo("frmEStmtAccountDetails");
		
      	if (!isIpad) {
        	this.view.customHeader.lblHeaderTitle.text = data.nickName;  
        }
      
      	if (isIpad) {
			this.view.title = data.nickName;
		}
      	
		this.view.lblAccountNumberValue.text = (data && data.accountID) 
        	? applicationManager.getDataProcessorUtility().maskAccountNumber(data.accountID) : "";
		this.view.lblAccountHolderValue.text = (data && data.accountName) ? data.accountName : "";
		this.view.lblAccountNickNameValue.text = (data && data.nickName) ? data.nickName : "";
		this.view.lblReceivingEmailValue.text= (data.email) ? data.email : "";
		if (data.eStatementEnable == 'true') { 	
        	this.changeStatementState("E-Statement", true);         	
		} else {
        	this.changeStatementState("Paper", false);	
		}
	},
  
	changeStatementState: function(statMode, condition) {
    	this.view.flxReceivingEmail.setVisibility(condition);
		this.view.lblStatementModeValue.text = statMode;
		this.view.btnEnable.setVisibility(!condition);
		this.view.btnDisable.setVisibility(condition); 	 
    },
  
	bindGenericSuccess: function() {
      	applicationManager.getPresentationUtility().dismissLoadingScreen();
		var settingsMode = applicationManager.getModule("SettingsModule");
		var condition = settingsMode.presentationController.eStatementPopup ;
      	
      	switch(condition) {
        	case "enable": this.showPopUpMessage(this.getI18ToString("kony.mb.Settings.enabledeStatements",
                                                                   "eStatements has been enabled successfully"));
          	break;
          	case "disable": this.showPopUpMessage(this.getI18ToString("kony.mb.Settings.disabledeStatements",
                                                                    "eStatements has been disabled successfully"));
          	break;
          	case "updateEmail": this.showPopUpMessage(this.getI18ToString("kony.mb.Settings.emailIDChanged",
                                                                        "Email ID has been changed successfully"));
          	break;
          	case "updateName": this.showPopUpMessage(this.getI18ToString("kony.mb.Settings.updatedNickName",
                                                                       "Nickname has been changed successfully"));
          	break;
        }
      		
		this.setDataAfteranOperation();
	},
  
  	showPopUpMessage: function(key) {
    	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, key);  
    },
   
  	getI18ToString: function(key, msg) {
    	return  applicationManager.getPresentationUtility().getStringFromi18n(key, msg);  
    },
  
	setDataAfteranOperation: function() {
      	var settingsMode = applicationManager.getModule("SettingsModule");
		var data = settingsMode.presentationController.estatementData;
      	var condition = settingsMode.presentationController.eStatementPopup;
		switch(condition) {
        	case "enable":  this.changeStatementState("E-Statement", true);
            break;
          	case "disable": this.changeStatementState("Paper", false); 
            break;
          	case "updateEmail": this.view.lblReceivingEmailValue.text = (data && data.email) ? data.email : "";
            break;
          	case "updateName": this.view.lblAccountNickNameValue.text = (data && data.nickName) ? data.nickName : "";
            break;
        }	
	}
 });