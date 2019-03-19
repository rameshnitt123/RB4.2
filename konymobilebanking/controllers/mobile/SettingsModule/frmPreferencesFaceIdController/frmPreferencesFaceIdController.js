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
        this.view.btnContinue.onClick = this.btnContinueOnClick;
    },
    btnContinueOnClick:function()
  	{    
      applicationManager.getPresentationUtility().showLoadingScreen();
      var settingMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");   
      settingMod.presentationController.enrollFaceId_Settings(this);           
    			
    },
    imgbackAction : function(){
  		  var navManager = applicationManager.getNavigationManager();
           navManager.goBack(); 
   }
});