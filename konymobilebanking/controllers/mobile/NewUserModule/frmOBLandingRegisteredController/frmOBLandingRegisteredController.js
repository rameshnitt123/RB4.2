define({
  init : function(){
   var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  }, 
  preShow : function(){
    var scope = this;
    this.initActions();
    var navManager = applicationManager.getNavigationManager();
    var phoneNum = navManager.getCustomInfo("frmOBSignInWithPhoneNumber");
    this.view.lblPhoneNumber.text = phoneNum;
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  showLanding : function(){
    this.view.flxLanding.isVisible = true;
    this.view.flxPopupFillingComplete.isVisible = false;
  },
  initActions : function(){
    var scope = this;
    var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    scope.view.btnChangePhoneNumber.onClick = function(){
     nuoMod.presentationController.commonFunctionForNavigation("frmOBSignInWithPhoneNumber"); 
    };
    scope.view.btnChangeEmail.onClick = function(){
     nuoMod.presentationController.commonFunctionForNavigation("frmOBEmail"); 
    };
    scope.view.btnLandingOne.onClick = function(){
       nuoMod.presentationController.commonFunctionForNavigation("frmOBLogin"); 
    };
  },
  enableBtnPhone : function(){
    this.view.btnChangePhoneNumber.setVisibility(true);
    this.view.btnChangeEmail.setVisibility(false);
  },
  enableBtnEmail : function(){
   this.view.btnChangePhoneNumber.setVisibility(false);
    this.view.btnChangeEmail.setVisibility(true);
  }
});