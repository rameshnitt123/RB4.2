
define({ 

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initActions();
    this.initHeaderActions();
    this.setupView();
    this.updateRightPane();
    this.onTextChange();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },

  initActions: function() {
    this.view.btnConfirm.onClick = this.continueOnClick;
    this.view.txtRecipientName.onTextChange = this.onTextChange;
  },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
    }
  },

  setupView: function() {    
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var recipientData = payAPersonModule.presentationController.getP2PPayeeDetails();
    this.view.txtRecipientName.text = (recipientData && recipientData.name) ? recipientData.name : "";
  },  
  
  changeButtonState: function(isEnabled) {
    this.view.btnConfirm.setEnabled(isEnabled);
    this.view.btnConfirm.skin = isEnabled ? "sknBtnBg0A78D1SSP30PxTab" : "sknBtna0a0a0SSPReg26px";
  },

  onTextChange: function() {
    var isEnabled = this.view.txtRecipientName.text.trim() !== "";
    this.changeButtonState(isEnabled);
  },

  backNavigation: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack(); 
  },

  continueOnClick: function() {
    var name = this.view.txtRecipientName.text;      
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payAPersonModule.presentationController.navigateToP2PVerifyDetails("frmP2PVerifyDetails", name); 
  },

  handleCancelAction: function() {
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payAPersonModule.presentationController.navToFormBasedOnEntryPoint("createP2PPayee");
  },
  
  updateRightPane: function() {
    var configurationManager = applicationManager.getConfigurationManager();
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = payeeMod.presentationController.getP2PPayeeDetails();
    var contactType;
    var contactDetails;
    if (payeeMod.presentationController.getContactType() === "phone") {
      contactType = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.p2p.phoneNumber");
      contactDetails = data.phone;
    } else {
      contactType = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.devReg.emailId");
      contactDetails = data.email;
    }
    var rightPane = this.view.RightPane;
    
    rightPane.lblCheckedRowName.text = contactType;
    rightPane.lblSecondCheckedRowName.text = contactDetails;
  }
});