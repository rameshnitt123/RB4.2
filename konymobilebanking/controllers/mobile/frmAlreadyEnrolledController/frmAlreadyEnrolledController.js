define({
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  frmAlreadyEnrolledPreShow : function(){
    this.setFlowActions();
    this.setPreshowData();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  setPreshowData : function(){
  },
  setFlowActions : function(){
    var scopeObj = this;
    this.view.btnLoginHere.onClick = function(){
      scopeObj.navToLogin();
    };
    this.view.btnChangeDetails.onClick = function(){
      scopeObj.navToChangeDetails();
    };
  },
  navToLogin : function(){
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.resetEnrollObj();
  },
  navToChangeDetails : function(){
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.commonFunctionForNavigation("frmEnrollLastName");
  },
});