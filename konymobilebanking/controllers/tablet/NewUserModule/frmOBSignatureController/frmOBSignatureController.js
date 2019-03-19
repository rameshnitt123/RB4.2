define({ 

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    var scopeObj = this;
    var navManager = applicationManager.getNavigationManager();
    var base64str = navManager.getCustomInfo("frmOBSignature");
    if (base64str.base64String) {
      this.view.imgSignature.setVisibility(true);
      this.view.imgSignature.base64 = base64str.base64String;
      this.view.btnDone.skin = "sknBtn0095e4RoundedffffffSSP26px";
      this.view.btnDone.setEnabled(true);
    } else {
      this.view.btnDone.skin = "sknBtnOnBoardingInactive";
      this.view.imgSignature.setVisibility(false);
      this.view.btnDone.setEnabled(false);
    }
    
    this.view.btnCancel.onClick = this.onClose; 
    this.view.flxSignature.onClick = this.signatureFun;
    this.view.btnDone.onClick = this.showResult;
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  onClose: function() {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.onClose();
  },
  
  signatureFun: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (isIpad) {
      var strokeWidth = "2.0";
      var strokeColor = "#0F00F0";
      var showClearButon = true;
      var shakeToCancelEnabled = true;
      SignatureFFI.getSignatureIphone("Customer Signature", strokeWidth, strokeColor, showClearButon, 
                                      shakeToCancelEnabled, this.signatureCallback);
    } else {
      SignatureFFI.getSignature(this.signatureCallback);
    }
  },
  
  signatureCallback: function(base64String) {
    var navMan = applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmOBSignature", {"base64String": base64String});
    var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    nuoMod.presentationController.commonFunctionForNavigation("frmOBSignature");
  },
  
  showResult: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    nuoMod.presentationController.uploadSignature();
  }
 });