define({
	init : function(){
		var navManager = applicationManager.getNavigationManager();
		var currentForm=navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
	},
    preShow: function () {
        if(kony.os.deviceInfo().name==="iPhone"){
            this.view.flxHeader.isVisible = false;
        }else{
            this.view.flxHeader.isVisible = true;
        }
        this.initActions();
        this.setAuthModeOptions();
        var navManager = applicationManager.getNavigationManager();
	  	var currentForm = navManager.getCurrentForm();
	    applicationManager.getPresentationFormUtility().logFormName(currentForm);
	  	applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function () {
        var scope = this;
        this.view.customHeader.flxBack.onClick = this.actionForBtnBack;         
        this.view.flxOption1.onClick=this.imgOnPasswordSelected;
        this.view.flxOption2.onClick=this.navigateToTouchIdFlow;
        this.view.flxOption3.onClick=this.navigateToPinFlow;
        this.view.flxOption4.onClick=this.flxFaceIdNavigation;
    },
  
  
  setTouchId : function(flags)
  {
    if (flags.isTouchIdSupported)
       this.view.flxOption2.isVisible = true;
    else
      this.view.flxOption2.isVisible = false;
    this.view.lblStatus2.text = kony.i18n.getLocalizedString("kony.mb.common.enabled");
  },
  
  setFaceId:function(flags)
  {
     var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
      if(authMod.presentationController.isGemaltoEnabledFlag == false || (flags.isIphone == false))
       {
              this.view.flxOption4.isVisible = false;
              this.setNativeFaceId(flags);
       }              
    else
      {
        if(flags.isFaceIdSupported)
            this.setNativeFaceId(flags);
        else{
        if(flags.isFaceIdEnrolled)
            this.view.lblStatus4.text = kony.i18n.getLocalizedString("kony.mb.common.enabled");
        else
            this.view.lblStatus4.text = "Enable";
        this.view.flxOption4.isVisible = true; 
      }
      }
  },
  
  setNativeFaceId : function(flags)
  {
    if (flags.isFaceIdSupported)
       {       
         if(flags.isFaceIdAvailable){
           this.view.flxOption4.isVisible = true;
           this.view.lblStatus4.text =  kony.i18n.getLocalizedString("kony.mb.common.enabled");
         }
         else
           this.view.flxOption4.isVisible = false;
       } 
  },
  setPinLogin : function(flags)
  {
     if(flags.isPinEnabled)
       this.view.lblStatus3.text = kony.i18n.getLocalizedString("kony.mb.Generated");
     else
       this.view.lblStatus3.text = kony.i18n.getLocalizedString("kony.mb.devReg.generate");
  },
  
  setAuthModeOptions:function()
  {
     var navManager = applicationManager.getNavigationManager();
     var flagData = navManager.getCustomInfo("frmPreferencesDefaultLogin");
     if(flagData.isRememberMeOn == false || flagData.isDeviceregistered == false)
     {
         this.view.lblNote.text=kony.i18n.getLocalizedString("kony.mb.preferences.DefaultLoginError");
         this.view.flxOptions.setVisibility(false);
      }
    else{
      this.view.lblNote.text=kony.i18n.getLocalizedString("kony.mb.preferences.PleaseSelectWhichOneYouWantAsDefaultLoginOption.");
      this.view.flxOptions.setVisibility(true);
     this.setTouchId(flagData);
     this.setFaceId(flagData);
     this.setPinLogin(flagData);
     this.setSelectionAuthMode(flagData.defaultAuthMode);
     if((flagData.popUpMsg!==null)&&(flagData.popUpMsg!==""))
      {
         var scopeObj=this;
         applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj,flagData.popUpMsg);
      }
    }
      flagData.popUpMsg = null;
	 navManager.setCustomInfo("frmPreferencesDefaultLogin",flagData);
     
  },
  setSelectionAuthMode : function(loginMode)
  {
    switch(loginMode){
      case "password":
        this.imgOnPasswordSelected();
        break;
      case "touchid":
         this.imgOnTouchIdSelected();
         break;
      case "pin":
         this.imgOnPinSelected();
         break;
      case "faceid":
          this.imgOnFaceSelected();
          break;
      default:
         this.imgOnPasswordSelected();
        break;
    }
  },
  navigateToTouchIdFlow : function()
  {
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesTouchId");
  },
  navigateToPinFlow : function()
  {
    var navManager = applicationManager.getNavigationManager();
    var flags = navManager.getCustomInfo("frmPreferencesDefaultLogin");
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    if(!(flags.isPinEnabled)){ 
       var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
	   var settingMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");   
        authMod.presentationController.flowType="settings";
		settingMod.presentationController.flowType="settings";
        settingsMod.presentationController.commonFunctionForNavigation("frmDevRegPin");
    }
    else{      
        var msgData = {popUpMsg:""};
       navManager.setCustomInfo("frmPreferencesPin",msgData) ;
       settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesPin");
    }    
  },  
  imgOnPasswordSelected:function()
  {
    this.view.imgStatusAndNav1.src="tickmark_green.png";
    this.view.imgStatusAndNav2.src="chevron.png";
    this.view.imgStatusAndNav3.src="chevron.png";
    this.view.imgStatusAndNav4.src="chevron.png";
    var navManager = applicationManager.getNavigationManager();
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMod.presentationController.setDefaultMode("password");
    var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsModule.presentationController.getDevDetails();
  },
  
   imgOnTouchIdSelected:function()
  {
    this.view.imgStatusAndNav1.src="chevron.png";
    this.view.imgStatusAndNav2.src="tickmark_green.png";
    this.view.imgStatusAndNav3.src="chevron.png";
    this.view.imgStatusAndNav4.src="chevron.png";
    
  },
   imgOnPinSelected:function()
  {
    this.view.imgStatusAndNav1.src="chevron.png";
    this.view.imgStatusAndNav2.src="chevron.png";
    this.view.imgStatusAndNav3.src="tickmark_green.png";
    this.view.imgStatusAndNav4.src="chevron.png";
  
  },
  
  imgOnFaceSelected:function()
  {
    this.view.imgStatusAndNav1.src="chevron.png";
    this.view.imgStatusAndNav2.src="chevron.png";
    this.view.imgStatusAndNav3.src="chevron.png";
    this.view.imgStatusAndNav4.src="tickmark_green.png";
   
  },
  flxFaceIdNavigation:function(){
      	var navManager = applicationManager.getNavigationManager();
        var flagData = navManager.getCustomInfo("frmPreferencesDefaultLogin");        
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        var gemalto = authMode.presentationController.checkGemaltoSupport();                                 
        if(gemalto){   
          if(flagData.isFaceIdSupported && flagData.isFaceIdAvailable)
               this.navigationForFaceIdDefault();
          else{
            if(flagData.isFaceIdEnrolled)              
               this.navigationForFaceIdDefault();
            else{
              applicationManager.getPresentationUtility().showLoadingScreen();
			  settingsModule.presentationController.commonFunctionForNavigation("frmPreferencesFaceId");
            }}
        }
    	else{
           applicationManager.getPresentationUtility().showLoadingScreen();
           var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		   settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesFaceIdSetAsDefault");
        }
  }, 
  navigationForFaceIdDefault : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesFaceIdSetAsDefault");
  },
   actionForBtnBack : function(){
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    }
});