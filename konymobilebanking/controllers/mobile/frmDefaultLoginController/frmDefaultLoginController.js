define({ 

  timerCounter: 0,
  defaultLoginPreshow:function(){
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.view.btnChange.onClick = this.navigateToDevRegType;
    var navManager = applicationManager.getNavigationManager();
    var defaultPage = navManager.getCustomInfo("frmDefaultLogin");  
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");  
    applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,kony.i18n.getLocalizedString("kony.mb.devReg.defLoginSetMsg"));  
    if(defaultPage.loginMode == "password"){
      this.view.lblTitle.text = kony.i18n.getLocalizedString("kony.mb.devReg.user&pass");
      this.view.lblSubTitle.text = kony.i18n.getLocalizedString("kony.mb.devReg.defaultLogin");
      this.view.imgIcon.src = "username.png";
      authMode.presentationController.setDefaultMode("password"); 
    }
    else if(defaultPage.loginMode == "touchid"){
      this.view.lblTitle.text = kony.i18n.getLocalizedString("kony.mb.devReg.touchidTitle");
      this.view.lblSubTitle.text = kony.i18n.getLocalizedString("kony.mb.common.enabled");
      this.view.imgIcon.src = "touch.png";
      authMode.presentationController.setDefaultMode("touchid");
    }
    else if(defaultPage.loginMode == "pin"){
      this.view.lblTitle.text = kony.i18n.getLocalizedString("kony.mb.preferences.PinLogin");
      this.view.lblSubTitle.text = kony.i18n.getLocalizedString("kony.mb.GENRATED");
      this.view.imgIcon.src = "pin.png";
      authMode.presentationController.setDefaultMode("pin");
    }  
    else if(defaultPage.loginMode == "faceid"){
      this.view.lblTitle.text =  kony.i18n.getLocalizedString("kony.mb.common.FaceCaps");
      this.view.lblSubTitle.text = kony.i18n.getLocalizedString("kony.mb.common.enabled");
      this.view.imgIcon.src = "face.png";
      authMode.presentationController.setDefaultMode("faceid");
    }  
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen(); 
  },
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  }, 
  defaultLoginInit:function(){
    this.view.preShow = this.defaultLoginPreshow;
  },
  navigateToDashboard:function(){
    var controller = applicationManager.getPresentationUtility().getController('frmDevRegLoginType', true);
    controller.tempLoginMode = "password";
    applicationManager.getPresentationUtility().showLoadingScreen(); 
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.defaultLoginToAccounts();
  },
  navigateToDevRegType:function(){
   var navManager = applicationManager.getNavigationManager();
    var keys = scope_AuthPresenter.getAuthFlags();
    keys.popUpMsg = null;
    navManager.setCustomInfo("frmDevRegLoginType", keys);
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authModule.presentationController.commonFunctionForNavigation("frmDevRegLoginType");
  }

});