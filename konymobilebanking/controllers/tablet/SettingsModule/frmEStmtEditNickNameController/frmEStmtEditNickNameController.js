define({  
    
	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},

	preShow: function() {
 		this.populateNickName();
		this.initHeaderActions();
		this.initActions();
      	var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
	},
    
	initActions: function () {		
      	this.view.tbxNickname.onTextChange = this.nickNameOnTextChange;
		this.view.btnSave.onClick = this.btnSaveOnClick; 
	},
  
  	initHeaderActions: function() {
    	var isIpad = applicationManager.getDeviceUtilManager().isIpad();
	
    	if (!isIpad) { 
    		this.view.customHeader.flxBack.onClick = this.backNavigation; 
    		this.view.customHeader.btnRight.onClick = this.backNavigation;
      	}
    },

	backNavigation: function() {
		var navManager = applicationManager.getNavigationManager();
		navManager.goBack(); 
	},

	populateNickName: function() {
		var navManager = applicationManager.getNavigationManager();
		var data = navManager.getCustomInfo("frmEStmtAccountDetails");
		var nickName = (data && data.nickName) ? data.nickName : "";
		this.view.tbxNickname.text = nickName;
		this.changeBtnSaveState(nickName);
	},
    
	nickNameOnTextChange: function() {
		var nickName = this.view.tbxNickname.text;
		this.changeBtnSaveState(nickName);
	},
  
  	changeBtnSaveState: function(nickName) {
    	var isEnable = (nickName.length === 0);
      	this.view.btnSave.skin = (nickName.length === 0) ? "sknBtna0a0a0SSPReg26px" : "sknBtn0095e4RoundedffffffSSP26px";
      	this.view.btnSave.setEnabled(!isEnable); 	
    },
    
	btnSaveOnClick: function() {
		applicationManager.getPresentationUtility().showLoadingScreen();
		var settingsMode = applicationManager.getModule("SettingsModule");
		var navManager = applicationManager.getNavigationManager();
		var nickName = this.view.tbxNickname.text;
		var data = navManager.getCustomInfo("frmEStmtAccountDetails");
		var accountID = (data && data.accountID) ? data.accountID : "";			 
		var eStatementEnable = (data && data.eStatementEnable) ? data.eStatementEnable : "";
		var email = (data && data.email) ? data.email : "";
		
      	var updatedSettings = {
        	nickName: nickName,
          	accountID: accountID,
          	eStatementEnable: eStatementEnable, 
          	email: email
        };
      
		settingsMode.presentationController.updateUserAccountSettingsForEstatements(updatedSettings, "updateName");
	}
});