define({
  uploadCheckImagesInit :function(){
    var FormValidator = require("FormValidatorManager")
	this.fv = new FormValidator(2);
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },

  preShow: function() {
    this.fv.submissionView(this.view.btnContinue);
    this.setCameraProperties();
    this.setInitialUI();
    this.view.CamFront.zIndex=10;
    this.view.CamBack.zIndex=10;
    this.view.CamFront.onCapture = this.onFrontCamCapture;
    this.view.CamBack.onCapture = this.onBackCamCapture;
    this.view.btnReTakeFront.onClick = this.onReTakeFrontClick;
    this.view.btnReTakeBack.onClick = this.onReTakeBackClick;
    this.view.btnContinue.onClick = this.btnContinueOnClick;
    this.view.btnContinue.zIndex=10;
    this.view.flxBack.onClick = this.flxBackOnClick;
    this.view.customHeader.btnRight.onClick = this.onCancelClick;
    this.view.customHeader.flxBack.onClick = this.flxBackHeaderOnClick;
    this.renderTitleBar();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  
  setInitialUI : function(){
    this.fv.checkAndUpdateStatusForNull(0, "");
    this.fv.checkAndUpdateStatusForNull(1, "");
    this.view.flxFrontUploaded.setVisibility(false);
    this.view.flxBackUploaded.setVisibility(false);
    this.view.flxFront.setVisibility(true);
    this.view.flxBack.setVisibility(true);
    var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    var depObj = checkDepositModule.presentationController.getDepositObjInView();
    if(depObj)
    {
      if(depObj.checkImage){
        this.fv.checkAndUpdateStatusForNull(0, "captured");
        this.view.flxFrontUploaded.setVisibility(true);
        this.view.flxFront.setVisibility(false);
      }
      if(depObj.checkImageBack) {
      	this.fv.checkAndUpdateStatusForNull(1, "captured");  
      	this.view.flxBackUploaded.setVisibility(true);
        this.view.flxBack.setVisibility(false);
      }
    } 
  },
  
  renderTitleBar: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if (isIphone) {
      this.view.flxHeader.setVisibility(false);
    }
  },
  
  afterImageCapture: function(orientation) {
    if(orientation === "front"){
      this.view.flxFront.setVisibility(false);
      this.view.flxFrontUploaded.setVisibility(true);
      this.fv.checkAndUpdateStatusForNull(0, "captured");
    }
    else{
      this.view.flxBack.setVisibility(false);
      this.view.flxBackUploaded.setVisibility(true);
      this.fv.checkAndUpdateStatusForNull(1, "captured");
    }
   applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  onFrontCamCapture: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    checkDepositModule.presentationController.commonFunctionForNavigation("frmUploadCheckImages");  
    
    applicationManager.getPresentationUtility().showLoadingScreen();
    var rawBytes = this.view.CamFront.rawBytes;
    var base64Str = kony.convertToBase64(rawBytes);
    this.view.imgCheckFront.base64 = base64Str;
    checkDepositModule.presentationController.captureCheckImage(base64Str, "front");
  },

  onBackCamCapture: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    checkDepositModule.presentationController.commonFunctionForNavigation("frmUploadCheckImages");  
    
    applicationManager.getPresentationUtility().showLoadingScreen();
    var rawBytes = this.view.CamBack.rawBytes;
    var base64Str = kony.convertToBase64(rawBytes);
    this.view.imgCheckBack.base64 = base64Str;
    checkDepositModule.presentationController.captureCheckImage(base64Str, "back");
  },

  btnContinueOnClick: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    checkDepositModule.presentationController.navigateToConfirmTransfer();
  },
  
  flxBackHeaderOnClick: function() {
    var navManager = applicationManager.getNavigationManager();	
    navManager.goBack();
  },

  onCancelClick: function() {
    var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    checkDepositModule.presentationController.cancelDeposit();
  },	

   onReTakeFrontClick: function(){
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if(isIphone)
      this.view.CamFront.takePicture();
    else
      this.view.CamFront.openCamera();
     //custom metric API to generate Reports
        KNYMetricsService.sendCustomMetrics("frmUploadCheckImages", {"Check Retake":"Check Image Retake"});
  },

  onReTakeBackClick: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if(isIphone)
      this.view.CamBack.takePicture();
    else
      this.view.CamBack.openCamera();
    //custom metric API to generate Reports
        KNYMetricsService.sendCustomMetrics("frmUploadCheckImages", {"Check Retake":"Check Image Retake"});
  },
  
   setCameraProperties: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if(!isIphone){
      this.view.CamFront.cameraOptions = {
          hideControlBar: true
      };
      this.view.CamBack.cameraOptions = {
          hideControlBar: true
      };
    }
  }

});