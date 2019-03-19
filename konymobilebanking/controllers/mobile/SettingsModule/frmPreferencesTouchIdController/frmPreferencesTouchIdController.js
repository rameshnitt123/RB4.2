define({
    init : function(){
		var navManager = applicationManager.getNavigationManager();
		var currentForm=navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
	},
    preShow: function () {
        if(kony.os.deviceInfo().name==="iPhone"){
            this.view.flxHeader.isVisible = false;
        }
        else{
            this.view.flxHeader.isVisible = true;
        }
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
	  	var currentForm = navManager.getCurrentForm();
	    applicationManager.getPresentationFormUtility().logFormName(currentForm);
	  	applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function () {
        var scope = this;
        this.view.customHeader.flxBack.onClick=function(){
          var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        };
        this.view.btnSetAsDefault.onClick = this.setTouchIdDefaultMode;
    },
  
  setTouchIdDefaultMode : function ()
  {
    applicationManager.getPresentationUtility().showLoadingScreen(); 
    var navManager = applicationManager.getNavigationManager();
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMod.presentationController.setTouchIdflag(true);
    authMod.presentationController.setDefaultMode("touchid");
    var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
	settingsModule.presentationController.getDevDetails();
    var tempData = settingsModule.presentationController.getAuthModeData();
    tempData.popUpMsg = kony.i18n.getLocalizedString("kony.mb.Touch.Id.is.set.a.Default.Login");
    navManager.setCustomInfo("frmPreferencesDefaultLogin",tempData);
    settingsModule.presentationController.commonFunctionForNavigation("frmPreferencesDefaultLogin");        
   }
});