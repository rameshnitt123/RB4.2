define({ 
//  timerCounter:0,
    init : function(){
		var navManager = applicationManager.getNavigationManager();
		var currentForm=navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
	},
   faceIdPreShow:function(){
//     this.view.btnEnable.setVisibility(false);
//     this.view.flxBottomContainer.setVisibility(true);
//     this.view.flxSeperator.setVisibility(true);
//     	this.view.customHeader.btnRight.setVisibility(true); 
    	if(kony.os.deviceInfo().name !== "iPhone"){
      		this.view.flxHeader.isVisible = true;
    	}
    	else{
      		this.view.flxHeader.isVisible = false;
   		 }
     	this.view.btnSetAsDefault.onClick = this.btnSetAsDefaultOnClick;
        var navManager = applicationManager.getNavigationManager();
		var flags = navManager.getCustomInfo("frmPreferencesFaceIdSetAsDefault");
		if(flags){
          if((flags.popUpMsg!==null)&&(flags.popUpMsg!==""))
         {
             var scopeObj=this;
             applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj,flags.popUpMsg);
        }
	    flags.popUpMsg=null;
         navManager.setCustomInfo("frmPreferencesFaceIdSetAsDefault",flags);}
	  	var currentForm = navManager.getCurrentForm();
	    applicationManager.getPresentationFormUtility().logFormName(currentForm);
	  	applicationManager.getPresentationUtility().dismissLoadingScreen();
	},
  	btnSetAsDefaultOnClick:function()
  	{
			 var navManager = applicationManager.getNavigationManager();
             var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");                    
             authMod.presentationController.setDefaultMode("faceid");             
           	 var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
	         settingsModule.presentationController.getDevDetails();
             var tempData = settingsModule.presentationController.getAuthModeData();
             tempData.popUpMsg ="Face Id is set as Default Login";
             navManager.setCustomInfo("frmPreferencesDefaultLogin",tempData);
      	     var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
			 settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesDefaultLogin");
    },
    imgbackAction : function(){
  		  var navManager = applicationManager.getNavigationManager();
           navManager.goBack(); 
   }
 });