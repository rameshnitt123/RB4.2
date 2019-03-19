define({ 

  //Type your controller code here 
    init : function(){
		var navManager = applicationManager.getNavigationManager();
		var currentForm=navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
	},
  frmPreshow : function(){
    if(kony.os.deviceInfo().name==="iPhone"){
      this.view.flxHeader.isVisible = false;
    }else{
      this.view.flxHeader.isVisible = true;
    }
    this.initAction();
     var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  initAction : function(){
    var scope=this;
    this.view.customHeader.flxBack.onClick=function(){
      var navManager = applicationManager.getNavigationManager();
      navManager.goBack(); 
    };
    this.view.customHeader.btnRight.onClick=function(){
     scope.onClickCancel();
    };
    this.view.btnTAndC.onClick=function(){
      var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule"); 
	  settingsModule.presentationController.commonFunctionForNavigation("frmEStmtTermsAndConditions");
    };
    this.view.btnDisable.onClick =function(){
       applicationManager.getPresentationUtility().showLoadingScreen();
      var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      var navManager = applicationManager.getNavigationManager();
      var data = navManager.getCustomInfo("frmEStmtAccountDetails");
      var accountID = (data && data.accountID && data.accountID!== "" &&data.accountID!== null)?data.accountID:"";
      var updatedSettings={"nickName":data.nickName,"accountID":accountID,"eStatementEnable":"false","email":""};
      settingsMode.presentationController.updateUserAccountSettingsForEstatements(updatedSettings,"disable");
    };
  },  
  onClickCancel:function(){
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },
});