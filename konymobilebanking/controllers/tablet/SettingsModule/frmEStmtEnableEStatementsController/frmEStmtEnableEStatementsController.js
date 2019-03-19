define({ 
  
	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
  
	preShow: function() {
		this.initActions();
      	this.initHeaderActions();
		this.setDataToForm();
      	this.setDefaultEmail();
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
      	applicationManager.getPresentationUtility().dismissLoadingScreen();
	},
  
	initActions: function() {
      	
  		this.view.btnTAndC.onClick = this.goToTermsAndConditions;
  		this.view.btnEnable.onClick = this.enableStatements;
      	this.view.segSelectEmailId.onRowClick = this.toggleRadioBtn;
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
  
  	goToTermsAndConditions: function() {
    	var settingsModule = applicationManager.getModule("SettingsModule"); 
		settingsModule.presentationController.commonFunctionForNavigation("frmEStmtTermsAndConditions");  
    },
  
  	enableStatements: function() {
    	applicationManager.getPresentationUtility().showLoadingScreen();
		var settingsMode = applicationManager.getModule("SettingsModule");
		var navManager = applicationManager.getNavigationManager();
		var data = navManager.getCustomInfo("frmEStmtAccountDetails");
		var accountID = (data && data.accountID ) ? data.accountID : "";
			
       	var updatedSettings = {
           	nickName: data.nickName,
          	accountID: accountID,
           	eStatementEnable: true,
           	email: this.getRowData().lblValue
        };
          
		settingsMode.presentationController.updateUserAccountSettingsForEstatements(updatedSettings, "enable");  
    },
  
	setDataToForm: function() {
		var userObj = applicationManager.getUserPreferencesManager();
		var email = userObj.getUserEmail();
		var secondaryEmailOne = userObj.getUserObj().secondaryemail;
		var secondaryEmailTwo = userObj.getUserObj().secondaryemail2;      
		var emailData =[];

		this.view.segSelectEmailId.widgetDataMap = {
			lblKey: "lblKey",
			lblValue: "lblValue",
			imgRadio:"imgRadio",
			template : "template",       
			flxSeparator: "flxSeparator"
		};
       
		if (email) {
			emailData.push(this.setEmailToRow("Primary Email ID", email));
		}

		if (secondaryEmailOne) {
			emailData.push(this.setEmailToRow("Secondary Email ID", secondaryEmailOne));
		}

		if (secondaryEmailTwo) {
			emailData.push(this.setEmailToRow("Secondary Email ID2", secondaryEmailTwo));
		}

		if (emailData.length > 0) {
			this.view.segSelectEmailId.setData(emailData);
		}
	},
  
	setEmailToRow: function(msg, email) {
		var rowData = {
			lblKey: msg,
			lblValue: email,
			imgRadio: "radiobuttoninactive.png",
			template: "flxEStmtEmail"
		};  
	
		return rowData;
	},
  
	setDefaultEmail: function() {  
      	var navManager = applicationManager.getNavigationManager();
		var data = navManager.getCustomInfo("frmEStmtAccountDetails");
		var emailData = this.view.segSelectEmailId.data;
		var self = this;	
      
      	emailData.forEach(function(item, index) {
        	if (data && data.email && item.lblValue === data.email) {
            	self.view.segSelectEmailId.selectedRowIndex = [0, index];
				item.imgRadio = "radiobtn.png";
            }	
        });
      		
		applicationManager.getPresentationUtility().dismissLoadingScreen();
      	this.view.segSelectEmailId.setData(emailData);
	},
  
  	getRowData: function() {
    	var segmentData = this.view.segSelectEmailId.data;
      	var rowIndex = segmentData.findIndex(function(item) {
        	return item.imgRadio == "radiobtn.png";   
        });	
        
      	return  segmentData[rowIndex];
    },
  	
	toggleRadioBtn: function() {
		var selectedAcntRow = this.view.segSelectEmailId.selectedIndex[1];
		var data = this.view.segSelectEmailId.data;
      
      	data.forEach(function(item, index) {
        	item.imgRadio = (selectedAcntRow == index && item.imgRadio == "radiobuttoninactive.png") ?
             "radiobtn.png" : "radiobuttoninactive.png";
        });
    	
      	this.view.segSelectEmailId.setData(data); 
	}
});