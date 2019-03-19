define({
	init:function(){
	     var navManager = applicationManager.getNavigationManager();
		var currentForm=navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    touchIdpreShow : function()
  {
     if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
     this.view.btnEnable.onClick = this.goToDefaultLogin;
     this.view.customHeader.flxBack.onClick = function () {
            var navMan=applicationManager.getNavigationManager();    
           navMan.goBack();   
      };
  },
   goToDefaultLogin : function()
  {
     var navManager = applicationManager.getNavigationManager();
     var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
     authMod.presentationController.setTouchIdflag(true);
     authMod.presentationController.setDefaultMode("touchid");
     var data = {loginMode:"touchid"};
     navManager.setCustomInfo("frmDefaultLogin",data);
     authMod.presentationController.commonFunctionForNavigation("frmDefaultLogin");
  },
  skipAction : function(){
  	applicationManager.getPresentationUtility().showLoadingScreen();
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
	authMode.presentationController.defaultLoginToAccounts();
  }
});