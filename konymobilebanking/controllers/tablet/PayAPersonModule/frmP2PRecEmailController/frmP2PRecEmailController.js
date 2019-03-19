define({ 

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.view.txtEmailId.setFocus(true);
    this.putDataToInput();
    this.initActions();
    this.initHeaderActions();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },

  initActions: function() {
    this.view.txtEmailId.onTextChange = this.txtEmailIdOnTextChange;
    this.view.btnConfirm.onClick = this.continueOnClick;	
    this.view.btnPickFromContacts.onClick = this.pickFromContactsOnClick;
  },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
    }
  },

  putDataToInput:function() {
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var recipientData = payAPersonModule.presentationController.getP2PPayeeDetails();
    var data = (recipientData && recipientData.email) ? recipientData.email : "";
    this.view.txtEmailId.text = data;
    var isEnabled = data !== "";
    this.changeButtonState(isEnabled);
  },

  backNavigation: function() {
    var navManager = applicationManager.getNavigationManager();	
    navManager.goBack();
  },

  handleCancelAction: function() {
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payAPersonModule.presentationController.navToFormBasedOnEntryPoint("createP2PPayee");
  },  

  txtEmailIdOnTextChange: function() {
    var isEnabled = this.view.txtEmailId.text.length > 0;
    this.changeButtonState(isEnabled);
  },
  
  changeButtonState: function(isEnabled) {
    this.view.btnConfirm.setEnabled(isEnabled);
    this.view.btnConfirm.skin = isEnabled ? "sknBtnBg0A78D1SSP30PxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
  },

  continueOnClick: function() {
    if (this.view.txtEmailId.text) {
      var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      payAPersonModule.presentationController.navigateToP2PRecipientNamefromEmail("frmP2PRecipientName",this.view.txtEmailId.text); 
    }
  },  

  pickFromContactsOnClick: function() {
    try {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var array = kony.contact.find("*", true);
      
      if(array === null) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        alert(applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.P2PAddRecipient.NoEmailsInContact"));
        return;
      }
      else{
        var count = 0;
        array.forEach(function(entry) {
          if(entry.email && entry.email.length !== 0){
            count++;
            return;
           }
        });
        if(count === 0){
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          alert(applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.P2PAddRecipient.NoEmailsInContact"));
          return;
        }
      }
      
      var navManager = applicationManager.getNavigationManager();
      navManager.setCustomInfo("frmP2PPickContact", array);
      var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      p2pMod.presentationController.commonFunctionForNavigation("frmP2PPickContact");
    } catch(err) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardless.permissionContacts"));
    }
  },

  bindGenericError: function(msg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  } 
});