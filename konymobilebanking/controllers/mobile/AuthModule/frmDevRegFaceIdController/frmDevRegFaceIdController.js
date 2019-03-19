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
    	this.view.customHeader.btnRight.setVisibility(true); 
    	if(kony.os.deviceInfo().name !== "iPhone"){
      		this.view.flxHeader.isVisible = true;
    	}
    	else{
      		this.view.flxHeader.isVisible = false;
   		 }
     	this.view.btnContinue.onClick = this.btnContinueOnClick;
        var navManager = applicationManager.getNavigationManager();
	  	var currentForm = navManager.getCurrentForm();
	    applicationManager.getPresentationFormUtility().logFormName(currentForm);
	  	applicationManager.getPresentationUtility().dismissLoadingScreen();
	},
  	btnContinueOnClick:function()
  	{
    	var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
      applicationManager.getPresentationUtility().showLoadingScreen();
      authMod.presentationController.FaceAuthEnroll(this);

    },
    btnSkipOnClick:function()
  	{
  		 applicationManager.getPresentationUtility().showLoadingScreen(); 
    	 var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
     	authMode.presentationController.defaultLoginToAccounts();
  	},
    imgbackAction : function(){
  		  var navManager = applicationManager.getNavigationManager();
           navManager.goBack(); 
   }
 });