define({
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  }, 
  preShow: function () {
    var scopeObj = this;
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }else{
      this.view.flxHeader.isVisible = false;
    }
    this.view.lblEnterPhoneNumberHeader.text = kony.i18n.getLocalizedString("kony.mb.OBSignature.Title");
    var navMan=applicationManager.getNavigationManager();
    var base64str= navMan.getCustomInfo("frmOBSignature");
      if(base64str.base64String)
    {

      this.view.imgSignature.setVisibility(true);
      this.view.imgSignature.base64=base64str.base64String;
      this.view.btnDone.skin="sknBtn0095e4RoundedffffffSSP26px";
      this.view.btnDone.setEnabled(true);
    }
    else
    {
       this.view.btnDone.skin="sknBtnOnBoardingInactive";
      this.view.imgSignature.setVisibility(false);
      this.view.btnDone.setEnabled(false);
    }
    this.view.customHeader.btnRight.onClick = this.onClose;

    //     this.view.flxDone.onClick = function(){
    //       scopeObj.navToSuccess();
    //     }
    //     this.view.flxBack.onClick = function(){
    //       scopeObj.navToCreditCheck();
    //     }
    this.view.flxSignature.onClick = function(){
      scopeObj.signatureFun();
    };
    this.view.btnDone.onClick=function()
    {
      scopeObj.showResult();
    };
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onClose:function()
  {
      var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      NUOMod.presentationController.onClose();
  },
  postShow:function()
  {
    //     // var navMan=applicationManager.getNavigationManager();
    //     if(kony.application.getPreviousForm().id=="Form1")
    //     {
    //       this.view.imgSignature.setVisibility(false);
    //     }
    //     else
    //     {
    //       this.view.imgSignature.setVisibility(true);
    //     }
  },
  navToSuccess : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBSuccess");  
  },
  navToCreditCheck : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBCreditCheck"); 
  },
  signatureFun:function()
  {
    if (kony.os.deviceInfo().name === "iPhone")
    {

      var strokeWidth = "2.0";
      var strokeColor = "#0F00F0";
      var showClearButon = true;
      var shakeToCancelEnabled = true;
      //var callback = sigCaptureCallBack;
      SignatureFFI.getSignatureIphone("Customer Signature", strokeWidth, strokeColor, showClearButon, shakeToCancelEnabled, this.callback1);
    } else {

      SignatureFFI.getSignature(this.callback1);
    }
  },
  callback1:function(base64String)
  {
    //this.view.imgSignature.setVisibility(true);
    // this.view.imgSignature.base64=base64String;
    var navMan=applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmOBSignature",{"base64String":base64String});
    var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    nuoMod.presentationController.commonFunctionForNavigation("frmOBSignature");
  },
  showResult:function()
  {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    nuoMod.presentationController.uploadSignature();
  }

});