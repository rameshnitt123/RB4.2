define({
  timerCounter: 0,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.view.flxEnter.onClick = this.onSelectManually;
    this.view.customHeader.flxBack.onClick = this.onBack;
    this.view.customHeader.btnRight.onClick = this.onClose;
    this.view.flxScan.onClick=this.onClickScanCard;
  var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onBack : function(){
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();   
  },
  onClose : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.onClose();
      },
  onClickScanCard:function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    //this.getCurrentAddress();
    NUOMod.presentationController.getUserCurrentAddress();
    NUOMod.presentationController.isOCRScanSelected="true";
  },
  onSelectManually : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    //this.getCurrentAddress();
    NUOMod.presentationController.isOCRScanSelected="false";
    NUOMod.presentationController.navOnClickManuallySelected();
    //NUOMod.presentationController.commonFunctionForNavigation("frmOBEditFirstLastName"); 
  },  
  bindGenericError : function(msg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },
  getCurrentAddress:function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    if(NUOMod.presentationController.userPersonalInfo!=="true"){
      NUOMod.presentationController.getUserCurrentAddress();
    }
    else{
     kony.print("user already entered address"); 
    }
  }
});