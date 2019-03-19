define({ 
  	
	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
	},

	preShow: function() {
		this.initActions();
      	this.initHeaderActions();
		this.setAuthModeOptions();
    	this.getSelectedIndex();
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
	},
      
	initActions: function() {
		var self = this;
		var rowIndex;
		this.view.loginMethod.segLogin.onRowClick  = function() {
          var segment = self.view.loginMethod.segLogin;
          rowIndex = segment.selectedIndex[1];
          self.toggleImgChevron(rowIndex);
		};
      
      	this.view.loginMethod.btnContinue.onClick = function() {
          var segment = self.view.loginMethod.segLogin;
          if(rowIndex) {
          	self.setLoginMethod(segment.data[rowIndex].lblLoginType);
          } else{
            self.setLoginMethod(segment.data[self.getSelectedIndex()].lblLoginType);
          }
        };
	},
  
  	getSelectedIndex: function() {
      	var segment = this.view.loginMethod.segLogin;
      	var activeRowIndex;
      	segment.data.forEach(function(element, index) {
       		if (element.imgChevronIcon === "tickmark_green.png") {
            	activeRowIndex = index;
            }
        });
      
      	return activeRowIndex;
    },	
  
	initHeaderActions: function() {
		var isIpad = applicationManager.getDeviceUtilManager().isIpad();
		if (!isIpad) {
			this.view.customHeader.flxBack.onClick = this.backNavigation;
		}
	},	
   
    initLoginMethods: function() {
		var data = [];

		var loginMethod = {
        	imgLogo: "",
        	lblLoginType: "",
        	lblLoginStatus: "",
        	imgChevronIcon: "transparentbox.png"
      	};   

        var navManager = applicationManager.getNavigationManager();
    	var flagData = navManager.getCustomInfo("frmPreferencesDefaultLogin");
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");   
      	var userNameChevron = flagData.defaultAuthMode === "password" ? "tickmark_green.png" : "transparentbox.png";
      	var touchIdChevron = flagData.defaultAuthMode === "touchid" ? "tickmark_green.png" : "transparentbox.png";
      	var pinChevron = flagData.defaultAuthMode === "pin" ? "tickmark_green.png" : "transparentbox.png";
      	var faceIdChevron = flagData.defaultAuthMode === "faceid" ? "tickmark_green.png" : "transparentbox.png";
      	var userNamePass = this.getLoginMethodParams("username.png", "Username & Password",
        				   kony.i18n.getLocalizedString("kony.mb.devReg.defaultLogin"), userNameChevron);
      	var imgSrc;
      	var type;
      	var status;
      	data.push(userNamePass);
      
        if (flagData.isTouchIdSupported) {
          	imgSrc = "touch.png";
      		type = "Touch ID";
      		status = kony.i18n.getLocalizedString("kony.mb.common.enabled");
        	data.push(this.getLoginMethodParams(imgSrc, type, status, touchIdChevron));
        } 
      
      	if (flagData.isPinEnabled) {
          	imgSrc = "pin.png";
      		type = "Pin";
      		status = kony.i18n.getLocalizedString("kony.mb.Generated");
        	data.push(this.getLoginMethodParams(imgSrc, type, status, pinChevron));
        } else {
          	imgSrc = "pin.png";
      		type = "Pin";
      		status = kony.i18n.getLocalizedString("kony.mb.devReg.generate");
        	data.push(this.getLoginMethodParams(imgSrc, type, status, pinChevron));
        }
        
		if (!authMod.presentationController.isGemaltoEnabledFlag
   			|| flagData.isFaceIdSupported
   			|| flagData.isFaceIdEnrolled) {
      		
          	status = kony.i18n.getLocalizedString("kony.mb.common.enabled");
		} else {
      		status = "Enable";
		}
		status = "Disable";
		//data.push(this.getLoginMethodParams("face.png",  "Face", status, faceIdChevron));     
        this.view.loginMethod.segLogin.setData(data);
    },
   
	getLoginMethodParams: function(imgLogo, loginType, loginStatus, imgChevron) {
      var navManager = applicationManager.getNavigationManager();
      var flagData = navManager.getCustomInfo("frmPreferencesDefaultLogin"); 
      	
      var loginMethod = {
			imgLogo: "",
			lblLoginType: "",
			lblLoginStatus: "",
			imgChevronIcon: "transparentbox.png"
		}; 

		loginMethod.imgLogo = imgLogo;
		loginMethod.lblLoginType = loginType;
		loginMethod.lblLoginStatus = loginStatus;
      	loginMethod.imgChevronIcon = imgChevron;

		return loginMethod;
    },
  
	toggleImgChevron: function(index) {
		var segment = this.view.loginMethod.segLogin;
		var rowInfo = segment.data[index];

		var checkedLoginMethod = {
			imgLogo: rowInfo.imgLogo,
			lblLoginType: rowInfo.lblLoginType,
			lblLoginStatus: rowInfo.lblLoginStatus,
			imgChevronIcon: "tickmark_green.png"
		};

		if (rowInfo.imgChevronIcon === "transparentbox.png") {
			segment.setDataAt(checkedLoginMethod, index); 
			segment.data.forEach(function(element, pos) {

			var uncheckedLoginMethod = {
				imgLogo: element.imgLogo,
				lblLoginType: element.lblLoginType,
				lblLoginStatus: element.lblLoginStatus,
				imgChevronIcon: "transparentbox.png"
			};          

			if (element.imgChevronIcon === "tickmark_green.png" && pos !== index) {
				segment.setDataAt(uncheckedLoginMethod, pos);   
			}
			});
		}
	},
  
  	setLoginMethod: function(loginMethod) {
    	 	switch(loginMethod) {
				case "Username & Password": 
                	this.onPasswordSelected();
				break;
				case "Touch ID": 
                	this.navigateToTouchIdFlow();
				break;
				case "Pin": 
                	this.navigateToPinFlow();
				break;
				case "Face": 
                	this.faceIdNavigation();
				break;
				default: 
                	this.onPasswordSelected();
				break;
		}	
    },
   
  	onPasswordSelected: function() {
		var navManager = applicationManager.getNavigationManager();
		var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
		authMod.presentationController.setDefaultMode("password");
		var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		settingsModule.presentationController.getDevDetails();
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, kony.i18n.getLocalizedString("kony.tab.Username.Password.is.set.as.Default.Login"));
	},
  
	navigateToPinFlow: function() {
		var navManager = applicationManager.getNavigationManager();
		var flags = navManager.getCustomInfo("frmPreferencesDefaultLogin");
		var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		
		if (!flags.isPinEnabled) { 
			var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
			var settingMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");   
			authMod.presentationController.flowType = "settings";
			settingMod.presentationController.flowType = "settings";
			settingsMod.presentationController.commonFunctionForNavigation("frmDevRegPin");
		} else {      
			var msgData = {popUpMsg: ""};
			navManager.setCustomInfo("frmPreferencesPin", msgData) ;
			settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesPin");
		}    
	},
  
  	navigateToTouchIdFlow: function() {
		var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesTouchId");
	},
  
	faceIdNavigation: function() {
		var navManager = applicationManager.getNavigationManager();
		var flagData = navManager.getCustomInfo("frmPreferencesDefaultLogin");        
		var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
		var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		var gemalto = authMode.presentationController.checkGemaltoSupport();                                 
      	if (!gemalto) {   
        	if (flagData.isFaceIdSupported && flagData.isFaceIdAvailable && flagData.isFaceIdEnrolled ) {
        		this.navigationForFaceIdDefault();
       		} else {
         		applicationManager.getPresentationUtility().showLoadingScreen();
         		settingsModule.presentationController.commonFunctionForNavigation("frmPreferencesFaceId");
       		}
		} else {
			applicationManager.getPresentationUtility().showLoadingScreen();
			var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
			settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesFaceIdSetAsDefault");
		}
	}, 
  
	navigationForFaceIdDefault: function() {
		applicationManager.getPresentationUtility().showLoadingScreen();
		var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesFaceIdSetAsDefault");
	},
  
	setAuthModeOptions: function() {
		var navManager = applicationManager.getNavigationManager();
		var flagData = navManager.getCustomInfo("frmPreferencesDefaultLogin");
		
		if (!flagData.isRememberMeOn || !flagData.isDeviceregistered) {
			this.view.loginMethod.lblSelLogin.text = kony.i18n.getLocalizedString("kony.mb.preferences.DefaultLoginError");
			this.view.loginMethod.segLogin.setVisibility(false);
		} else {
			this.view.loginMethod.lblSelLogin.text = kony.i18n.getLocalizedString("kony.mb.preferences.PleaseSelectWhichOneYouWantAsDefaultLoginOption.");
			this.view.loginMethod.segLogin.setVisibility(true);
			this.initLoginMethods();
		
        	if (flagData.popUpMsg) {
				applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, flagData.popUpMsg);
			}
		}
		flagData.popUpMsg = null;
		navManager.setCustomInfo("frmPreferencesDefaultLogin", flagData);
	},
  
	backNavigation: function() {
		var navMan = applicationManager.getNavigationManager();
		navMan.goBack(); 
	}
});