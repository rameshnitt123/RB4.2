define({
    timerCounter : 0,
	acctPreviewStatus : "",
    devRegStatus : "",
    defLoginStatus : "",
    pinStatus : "",
    faceIdStatus : "",
    touchIdStatus : "",
    isTouchIdAva : "",
    isFaceIdAva : "",
    selectedAcntRow: "",
    alertStatus:"",
    
    frmSettingsPreShow: function() {
        this.setFlowActions();
        this.setPreshowData();
		this.frmPreShow();
        this.checkForToastMessage();
        this.showPopUpMessage();
		var configManager = applicationManager.getConfigurationManager();
		var MenuHandler =  applicationManager.getMenuHandler();
        MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENUSETTINGS); 
        var navManager = applicationManager.getNavigationManager();
	  	var currentForm = navManager.getCurrentForm();
	    applicationManager.getPresentationFormUtility().logFormName(currentForm);
	  	applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setFlowActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            scope.navToMenu();
        };
	    this.view.segSettingsDefaultAccount.onRowClick = this.segDefaultAccountOnClick;
		this.view.segSettingsLogin.onRowClick = this.segloginOnClick;
		this.view.segSettingsProfile.onRowClick = function(){
          scope.onRowClickOfProfile();
        }; 
      this.view.segSettingsAlerts.onRowClick= this.segAlertsOnClick;
    },
    navToMenu: function() {
      var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsMod.presentationController.commonFunctionForNavigation("frmMenu");
    },
    setPreshowData: function() {
        if (kony.os.deviceInfo().name !== "iPhone") {
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "56dp";
          	this.view.flxMainContainer.bottom = "0dp";
            this.view.flxFooter.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = false;
            this.view.flxFooter.isVisible = true;
          	this.view.flxMainContainer.bottom = "60dp";
            this.view.flxMainContainer.top = "0dp";
        }
    },
    showPopUpMessage : function(){
     var navManager = applicationManager.getNavigationManager(); 
      var msgData = navManager.getCustomInfo("frmSettings");
      if((msgData.popUpMsg!==null)&&(msgData.popUpMsg!=="")&&(msgData.popUpMsg !== undefined))
      {
         var scopeObj=this;
         applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj,msgData.popUpMsg);
         
      }
     msgData.popUpMsg="";
	 navManager.setCustomInfo("frmSettings",msgData);
   },
    showPwdUpdatedSuccess: function() {
        var scopeObj = this;
        this.timerCounter = parseInt(this.timerCounter) + 1;
        var timerId = "timerPopupError" + this.timerCounter;
        this.view.flxPopup.skin = "sknFlx43ce6e";
        this.view.customPopup.imgPopup.src = "confirmation.png";
        this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.Profile.changePassword");
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function() {
            scopeObj.view.flxPopup.setVisibility(false);
        }, 1.5, false);
    },
    showUsernameUpdatedSuccess: function() {
        var scopeObj = this;
        this.timerCounter = parseInt(this.timerCounter) + 1;
        var timerId = "timerPopupError" + this.timerCounter;
        this.view.flxPopup.skin = "sknFlx43ce6e";
        this.view.customPopup.imgPopup.src = "confirmation.png";
        this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.Profile.changeUsername");
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function() {
            scopeObj.view.flxPopup.setVisibility(false);
        }, 1.5, false);
    },
	segDefaultAccountOnClick :function(){
        applicationManager.getPresentationUtility().showLoadingScreen(); 
        var navManager = applicationManager.getNavigationManager();  
		var selectedAcntRow = this.view.segSettingsDefaultAccount.selectedIndex[1];
		var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		var selectedRecord = this.view.segSettingsDefaultAccount.data[0][1][selectedAcntRow];   
		var data = [];
		data[0]=selectedRecord;
		navManager.setCustomInfo("frmPreferencesDefaultAccount",data); 
		settingsMode.presentationController.setDataDefaultLogin(selectedAcntRow);              
  },
  frmPreShow : function(){
  	this.setSegLoginData();
    this.setSegSettingsProfile();
    this.setSegAlertsData();
    this.setAccountSettings();
  },
  
  	setSegAlertsData: function() {
    	var userPrefManager = applicationManager.getUserPreferencesManager();
    	var alertsTurnedOn = userPrefManager.getAlertsInfo();
        var data=[        
        [
              {"lblProfileHeading":kony.i18n.getLocalizedString("kony.mb.Settings.Alerts")},
            [	
                  {"lblTitle":kony.i18n.getLocalizedString("kony.mb.AlertsAccountList.Title"),"lblValue":this.alertStatus,"imgArrow":"chevron.png"},
                  {"lblTitle":kony.i18n.getLocalizedString("kony.mb.Alerts.SecurityAlerts"),"lblValue":"","imgArrow":"chevron.png"},
                  {"lblTitle":kony.i18n.getLocalizedString("kony.mb.Alerts.DealsAlerts"),"lblValue":"","imgArrow":"chevron.png"}              
            ]
       ]];
    	this.view.segSettingsAlerts.setData(data);
      	this.view.forceLayout();
  },
  
 /* segAccountsData : function(){
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    var data = settingsMode.presentationController.defaultAccounts();
    this.view.segSettingsDefaultAccount.setData(data);    
  },*/
  
  onRowClickOfProfile : function(){
    var selectedIndex = this.view.segSettingsProfile.selectedRowIndex;
    selectedIndex = parseInt(selectedIndex[1]);
    if(selectedIndex === 0){
      var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsMode.presentationController.navigateToChangeUserName();
    }
//     if(selectedIndex === 1){
//       var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
//       settingsMode.presentationController.navigateToChangePassword();
//     }
    if(selectedIndex === 1){
      var settings = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settings.presentationController.navigateToProfilePersonalDetails();
    }
    if(selectedIndex === 2){
      var settingsLanguage = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsLanguage.presentationController.navigateToProfileChangeLanguage();
    }
  },  
  getSettingsStatus : function(){
    var navManager = applicationManager.getNavigationManager();
    var loginData = navManager.getCustomInfo("frmSettings");
    var tempLoginMode = loginData.defLoginMode;
    var userPrefManager = applicationManager.getUserPreferencesManager();
    var alertsTurnedOn = userPrefManager.getAlertsInfo();
    this.isTouchIdAva = loginData.istouchIdAvail;
   // this.isFaceIdAva = loginData.isFaceIdAvail;  
    
     if (tempLoginMode == "password")
          this.defLoginStatus = kony.i18n.getLocalizedString("kony.mb.login.password");
    else if (tempLoginMode == "pin")
          this.defLoginStatus = kony.i18n.getLocalizedString("kony.mb.devReg.pin");
    else if (tempLoginMode == "touchid")
          this.defLoginStatus = kony.i18n.getLocalizedString("kony.mb.devReg.touchidTitle");
    else if (tempLoginMode == "faceid")
          this.defLoginStatus = kony.i18n.getLocalizedString("kony.mb.common.FaceCaps");
      
    if(loginData.accPreview === true){
       this.acctPreviewStatus = kony.i18n.getLocalizedString("kony.mb.On");
    }
    else{
       this.acctPreviewStatus = kony.i18n.getLocalizedString("kony.mb.Off");
    }
    if(loginData.deviceReg === true){
       this.devRegStatus = kony.i18n.getLocalizedString("kony.mb.On"); 
    }
    else{
       this.devRegStatus = kony.i18n.getLocalizedString("kony.mb.Off");
    }   
    if(alertsTurnedOn === "true"){
       this.alertStatus = kony.i18n.getLocalizedString("kony.mb.On");
    }  
    else{
       this.alertStatus = kony.i18n.getLocalizedString("kony.mb.Off"); 
    }   
    
    
 }, 
  
  setSegLoginData : function(){      
    this.getSettingsStatus();
    var data=[        
      		[
                {"lblProfileHeading":kony.i18n.getLocalizedString("kony.mb.login.logIn")},
              [	
                    {"lblTitle":kony.i18n.getLocalizedString("kony.mb.login.accountPreview"),"lblValue":this.acctPreviewStatus,"imgArrow":"chevron.png"},
                    {"lblTitle":kony.i18n.getLocalizedString("kony.mb.devReg.title"),"lblValue":this.devRegStatus,"imgArrow":"chevron.png"},
                    {"lblTitle":kony.i18n.getLocalizedString("kony.mb.devReg.defaultLogin"),"lblValue":this.defLoginStatus,"imgArrow":"chevron.png"}              
              ]
         ]];
    this.view.segSettingsLogin.setData(data);      
    
    /*if(!this.isFaceIdAva){
      this.view.segSettingsLogin.removeAt(4,0);
    }*/
  },
  
  segloginOnClick : function(){
    this.selectedAcntRow = this.view.segSettingsLogin.selectedIndex[1];
    var navManager = applicationManager.getNavigationManager();    
    switch(this.selectedAcntRow ){
      case 0:
         	this.gotoAcctPreview();
        	break;
      case 1:
        	this.gotoDevRegistration();
        	break;
      case 2:
        	this.gotoDefaultLogin();
            break;
      /*case 3:
        	this.goToPinSettings();
            break;
      case 4:
          /* if(this.isFaceIdAva)
            	gotoFaceIdSettings();
          else if(!hasFaceId && hasTouchId)
            	this.goToTouchIdSettings();
        	break;*/                 
    }
  },
  gotoAcctPreview : function(){  
    applicationManager.getPresentationUtility().showLoadingScreen(); 
	var navManager = applicationManager.getNavigationManager();   
    var loginData = navManager.getCustomInfo("frmSettings");
    navManager.setCustomInfo("frmPreferencesAccountPreview",loginData);   
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesAccountPreview");
  },
  updateSegmentData : function(feature,status)
  {
    var record = {"lblTitle":feature,"lblValue":status,"imgArrow":"segmentarrow.png"};
    this.view.segSettingsLogin.setDataAt(record,this.selectedAcntRow);
  },
  //Navigate to DevReg flow
  gotoDevRegistration : function(){  
     applicationManager.getPresentationUtility().showLoadingScreen(); 
     var navManager = applicationManager.getNavigationManager();
     var loginData = navManager.getCustomInfo("frmSettings");   
     var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
     if(loginData.deviceReg){      
        settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesDeviceDeRegistration");
     }
     else{
   		navManager.setCustomInfo("frmPreferencesDeviceRegistration",loginData);  
        settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesDeviceRegistration");
     }
  },
  //Navigate to Default login
   gotoDefaultLogin : function(){
     applicationManager.getPresentationUtility().showLoadingScreen();
     var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
     var navManager = applicationManager.getNavigationManager();
     var flagData = authMod.presentationController.getAuthFlags();
     flagData.popUpMsg="";
     navManager.setCustomInfo("frmPreferencesDefaultLogin",flagData);
     var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
     settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesDefaultLogin");
  },
  //Navigate to Pin Login flow
  goToPinSettings : function(){
      	 var navManager = applicationManager.getNavigationManager();      		 
         var userPreferencesManager = applicationManager.getUserPreferencesManager();
         var loginData = navManager.getCustomInfo("frmSettings");  
         var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
         if(loginData.pin){
            settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesPin");
         }
    	 else{
            settingsMod.presentationController.commonFunctionForNavigation("frmDevRegPin");
          }
    },
  
   checkForToastMessage : function(){
      var navigationManager = applicationManager.getNavigationManager();
      var data = navigationManager.getCustomInfo('frmProfileUsername');
      if(data ==='usernameUpdated'){
        var i18n_string = applicationManager.getPresentationUtility().getStringFromi18n('kony.mb.Profile.changeUsername');
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,i18n_string);
        navigationManager.setCustomInfo('frmProfileUsername',null);
      }
     var data1 = navigationManager.getCustomInfo('frmProfileChangeAndUpdatePassword');
     if(data1 === "passwordUpdated"){
       var i18n_str = applicationManager.getPresentationUtility().getStringFromi18n('kony.mb.Profile.changePassword');
       applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,i18n_str);
       navigationManager.setCustomInfo('frmProfileChangeAndUpdatePassword',null);
     }
   },
  
  
  segAlertsOnClick : function(){
     alertType = this.view.segSettingsAlerts.selectedIndex[1];
    var navManager = applicationManager.getNavigationManager();    
    switch(alertType){
      case 0:
         	this.gotoAccountAlerts();
        	break;
      case 1:
        	//alert("gotoDealsAndSecurityAlerts");
        	this.gotoDealsAndSecurityAlerts();
        	break;
      case 2:
        	this.gotoDealsAndSecurityAlerts();
            break;                
    }
  },
  
  
  gotoAccountAlerts : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    
    try{
       	var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");  
      	settingsModule.presentationController.getAllAccountAlerts(this.getAllAccountAlertsSuccess.bind(this), this.getAllAccountAlertsFailure.bind(this));   
        }
      catch(exception){
      }
  },
  
  getAllAccountAlertsSuccess: function(response){
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("frmAlertsAccountList", response);
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmAlertsAccountList");
  },
  
  getAllAccountAlertsFailure : function(response){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
  
  
  gotoDealsAndSecurityAlerts : function(){    
    applicationManager.getPresentationUtility().showLoadingScreen();
    try{
      	var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");  
      	settingsModule.presentationController.getDealsAndSecurityAlerts(this.getDealsAndSecurityAlertsSuccess.bind(this),this.getDealsAndSecurityAlertsFailure.bind(this));
      }
      catch(exception){
      }
  },
  
  getDealsAndSecurityAlertsSuccess: function(response){
    var navManager = applicationManager.getNavigationManager();
    response.push(alertType);
    navManager.setCustomInfo("frmAlertsDealsAndSecurity", response);
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmAlertsDealsAndSecurity");
  },
  
  getDealsAndSecurityAlertsFailure : function(response){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
  setAccountSettings :function(){  	           
    var data=[        
      		[
                {"lblProfileHeading":kony.i18n.getLocalizedString("kony.mb.Settings.AccountSettings")},
              [	
                    {"lblTitle":kony.i18n.getLocalizedString("kony.mb.EStmt.AccountPreferences"),"lblValue":"","imgArrow":"chevron.png"},
                    {"lblTitle":kony.i18n.getLocalizedString("kony.mb.settings.SetDefaultAccount"),"lblValue":"","imgArrow":"chevron.png"},                               
              ]
         ]];
    this.view.segSettingsDefaultAccount.setData(data);       
  },
  setSegSettingsProfile : function(){
    var data = [
      [
                {"lblProfileHeading":kony.i18n.getLocalizedString("kony.mb.Settings.Profile")},
              [
                    {"lblTitle":kony.i18n.getLocalizedString("kony.mb.ProfileChangeUsername.Title"),"lblValue":"","imgArrow":"chevron.png"},
                  //  {"lblTitle":kony.i18n.getLocalizedString("kony.mb.ProfileChangeAndUpdatePassword.Title"),"lblValue":"","imgArrow":"chevron.png"},
                    {"lblTitle":kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.Title"),"lblValue":"","imgArrow":"chevron.png"},
                    {"lblTitle":kony.i18n.getLocalizedString("kony.mb.Login.ChangeLanguage"),"lblValue":"","imgArrow":"chevron.png"},
              ]
          ]];
    this.view.segSettingsProfile.setData(data);   
  }
  
  
  
});