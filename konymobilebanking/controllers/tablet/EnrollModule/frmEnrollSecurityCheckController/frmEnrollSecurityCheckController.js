define({ 

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },
  
  preShow: function() {
    this.setupComponents();
    this.initHeaderActions();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  
  setupComponents: function() {
    this.view.CVVCardView.setI18Text("kony.mb.Forgot.RtxSelectCVV");
    this.view.CVVCardView.onSelected = this.getAllCards;

    this.view.SecurityCodeCardView.setI18Text("kony.tab.Enroll.EnterSecurityCode");
    this.view.SecurityCodeCardView.onSelected = this.triggerOTP;
  },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClickCancel;
    }
  },
  
  navBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },
  
  onClickCancel: function() {
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.resetEnrollObj();
  },
  
  navToSecurityCode: function() {
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.commonFunctionForNavigation("frmEnrollSecurity");
  },

  /**
  *Code to fetch all cards for the entered SSN
  */
  getAllCards: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollModule.presentationController.getCardsForEnroll(); 
  },
  
  /**
  * Code to trigger OTP for the Mobile Number
  */
  triggerOTP: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollModule.presentationController.requestOTP();
  },
  
  /*
  *Code to show error message
  */
  bindViewError: function(msg) {
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  }
});