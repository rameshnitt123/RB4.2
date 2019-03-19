define({
  timerCounter: 0,
  init : function(){
    var FormValidator = require("FormValidatorManager")
	this.fv = new FormValidator(1);
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    var scope = this;
    this.fv.submissionView(this.view.btnContinueEmail);
    this.initActions();
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.view.txtEnterEmail.setFocus(true);
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
//     this.setHeaderData(null, function(){
//       NUOMod.presentationController.commonFunctionForNavigation("frmLogin");  
//     }, 'CANCEL', 'SIGN UP');
    this.assignDataToForm();
    this.validateFormUI();
    this.view.customHeader.btnRight.onClick=scope.cancelOnClick;
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  cancelOnClick:function()
  {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
	NUOMod.presentationController.commonFunctionForNavigation("frmLogin");
  },
  assignDataToForm : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var userEmail = NUOMod.presentationController.getUserEmail(); 
    if(userEmail && userEmail!=="" && userEmail!==null)
      this.view.txtEnterEmail.text = userEmail;
    else
      this.view.txtEnterEmail.text = "";
  },
  validateFormUI : function(){
    var formValues =[];
    formValues.push(this.view.txtEnterEmail.text);
    this.fv.preshowCheck(formValues);
  },
  initActions : function(){
    this.view.txtEnterEmail.onTextChange = this.validateEmail;
    this.view.btnContinueEmail.onClick = this.submitEmail;
    //this.view.rtxAgreeTermsConditions.onTouchEnd = this.onTermsAndConditionsClick;
    //this.view.imgCheckbox.onTouchEnd = this.onTermsAndConditionsSelect;
  },
  onTermsAndConditionsSelect : function(){
    this.toggleCheckbox();
  },
  onTermsAndConditionsClick :function(){
    this.showTermsAndConditions();
  },
  validateEmail : function(){
    var text = this.view.txtEnterEmail.text;
    this.fv.checkAndUpdateStatusForNull(0, text);
  },
  submitEmail : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    authMod.presentationController.verifyEmail(this.view.txtEnterEmail.text); 
  },
//   setHeaderData: function (backAction, cancelAction, cancelTitle, title) {
//     this.view.customHeader.lblLocateUs.text = title;
//     if(cancelAction!==null){
//       this.view.customHeader.btnRight.onClick = cancelAction;
//       this.view.customHeader.btnRight.isVisible = true;
//       this.view.customHeader.btnRight.text = cancelTitle;
//     }else{
//       this.view.customHeader.btnRight.isVisible = false;
//     }
//     if(backAction!==null){
//       this.view.customHeader.flxBack.onClick = backAction;
//       this.view.customHeader.flxBack.isVisible = true;
//     }else{
//       this.view.customHeader.flxBack.isVisible = false;
//     }
//   },
  
  showTermsAndConditions: function () {
    var scope = this;
    this.view.flxMainContainer.isVisible = false;
    this.view.flxTermsConditions.isVisible = true;
    this.view.customHeaderTermsConditions.flxBack.onClick = function () {
      scope.closeTermsAndCondition();
    };
  },
  closeTermsAndCondition : function(){
    this.view.flxMainContainer.isVisible = true;
    this.view.flxTermsConditions.isVisible = false;
  },
  toggleCheckbox : function(){
    if(this.view.imgCheckbox.src === "remeberme.png")
      this.view.imgCheckbox.src = "remembermetick.png";
    else
      this.view.imgCheckbox.src = "remeberme.png";
  },
  showPopupIncorrectCredentials: function (par) {
    var scopeObj = this;
    if (par === "AccepTnC") {
      this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.OnBoarding.AcceptTnc");
    }
    if (par === "invalidemail") {
      this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.OnBoarding.InvalidEmail");
    }
    this.timerCounter = parseInt(this.timerCounter) + 1;
    var timerId = "timerPopupError" + this.timerCounter;
    this.view.flxPopup.skin = "sknFlxf54b5e";
    this.view.customPopup.imgPopup.src = "errormessage.png";
    this.view.flxPopup.setVisibility(true);
    kony.timer.schedule(timerId, function () {
      scopeObj.view.flxPopup.setVisibility(false);
    }, 1.5, false);
  },
  bindError : function (par){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (par === "AccepTnC") {
      applicationManager.getDataProcessorUtility().showToastMessageError(this,kony.i18n.getLocalizedString("kony.mb.OnBoarding.AcceptTnc"));
    }
    if (par === "invalidemail") {
      applicationManager.getDataProcessorUtility().showToastMessageError(this,kony.i18n.getLocalizedString("kony.mb.OnBoarding.InvalidEmail"));
    }
  }
});