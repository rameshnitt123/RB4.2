define({

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initActions();
    this.initHeaderActions();
    this.setupData();
    this.updateRightPane();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },

  initActions: function() {
    this.view.btnConfirm.onClick = this.continueOnClick;  
  }, 
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
    }
  },

  backNavigation: function() {
    var navManager = applicationManager.getNavigationManager();	
    navManager.goBack();
  },

  handleCancelAction: function() {
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payAPersonModule.presentationController.navToFormBasedOnEntryPoint("createP2PPayee");
  },

  continueOnClick: function() {
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    applicationManager.getPresentationUtility().showLoadingScreen();   
    payAPersonModule.presentationController.addP2PRecipient(this.view.txtareaDescription.text);         
  },

  setupData: function() {
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var recipientDetails = payAPersonModule.presentationController.getP2PPayeeDetails();
    this.view.lblRecipientNameValue.text = recipientDetails.name ? recipientDetails.name : "";
    this.view.txtareaDescription.text = recipientDetails.nickName ? recipientDetails.nickName : recipientDetails.name; 	

    var label;
    var value;
    if (payAPersonModule.presentationController.getContactType() === "phone") {
      label = this.getLocalizedString("kony.mb.p2p.phoneNumber");
      value = recipientDetails.phone;
    } else {
      label = this.getLocalizedString("kony.tab.p2p.Email");
      value = recipientDetails.email;
    }
    this.view.lblPhoneNo.text = label;
    this.view.lblPhoneValue.text = value;
  },

  getLocalizedString: function(i18Key) {
    return applicationManager.getPresentationUtility().getStringFromi18n(i18Key);
  },

  updateRightPane: function() {
    var configurationManager = applicationManager.getConfigurationManager();
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var recipientDetails = payeeMod.presentationController.getP2PPayeeDetails();
    var data = payeeMod.presentationController.getP2PPayeeDetails();
    var contactType;
    var contactDetails;
    if (payeeMod.presentationController.getContactType() === "phone") {
      contactType = this.getLocalizedString("kony.mb.p2p.phoneNumber");
      contactDetails = data.phone;
    } else {
      contactType = this.getLocalizedString("kony.mb.devReg.emailId");
      contactDetails = data.email;
    }
    var rightPane = this.view.RightPane;

    rightPane.lblCheckedRowName.text = contactType;
    rightPane.lblSecondCheckedRowName.text = contactDetails;
    rightPane.flxThirdCheckedRow.lblThirdCheckedRowName.text = recipientDetails.name;
  },
});