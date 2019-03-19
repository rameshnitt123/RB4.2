define({

  init: function() { 
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initActions();
    this.initHeaderActions();
    this.setDefaultNumber();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },

  initActions: function() {
    this.view.btnPickFromContacts.onClick = this.pickFromContactsOnClick;
    this.view.btnContinue.onClick = this.continueOnClick;
    this.view.digitkeypad.onDigitEntered = this.addDigit;
    this.view.digitkeypad.onDigitRemoved = this.removeDigit;
    this.view.inputPhoneNumber.onPhoneNumberEntered = this.changeContinueBtnState.bind(this, true);
    this.view.inputPhoneNumber.onPhoneNumberRemoved = this.changeContinueBtnState.bind(this, false);
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
    }
  },

  addDigit: function(char) {
    var inputPhoneNumber = this.view.inputPhoneNumber;
    inputPhoneNumber.addDigit(char);
  }, 

  removeDigit: function() {
    var inputPhoneNumber = this.view.inputPhoneNumber; 
    inputPhoneNumber.removeDigits();
  },

  backNavigation: function() {
    var navManager = applicationManager.getNavigationManager();	
    navManager.goBack();
  },

  handleCancelAction: function() {     
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payAPersonModule.presentationController.navToFormBasedOnEntryPoint("createP2PPayee");
  },

  pickFromContactsOnClick: function() {
    try {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var array = kony.contact.find("*", true);   
      if(array === null) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        alert(applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.P2PAddRecipient.NoPhoneNumbersInContact"));
        return;
      }
      else{
        var count = 0;
        array.forEach(function(entry) {
          if(entry.phone && entry.phone.length !== 0){
            count++;
            return;
           }
        });
        if(count === 0){
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          alert(applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.P2PAddRecipient.NoPhoneNumbersInContact"));
          return;
        }
      }
      var navManager = applicationManager.getNavigationManager();
      navManager.setCustomInfo("frmP2PPickContact", array);
      var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      payAPersonModule.presentationController.commonFunctionForNavigation("frmP2PPickContact");
    } catch(err) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardLess.permissionContacts"));
    }
  },

  continueOnClick: function() {
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payAPersonModule.presentationController.navigateToP2PRecipientNamefromPhoneNo("frmP2PRecipientName", this.view.inputPhoneNumber.getPhoneNumber()); 
  },

  changeContinueBtnState: function(isEnable) {
    this.view.btnContinue.setEnabled(isEnable);
    this.view.btnContinue.skin = isEnable ? "sknBtnBg0A78D1SSP30PxTab" : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
  },

  setDefaultNumber: function() {
    var inputPhoneNumber = this.view.inputPhoneNumber;
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var recipientData = payAPersonModule.presentationController.getP2PPayeeDetails();
    var phoneNum = recipientData.phone; 
    if (phoneNum) {
      inputPhoneNumber.setPhoneNumber(phoneNum); 
	  if(phoneNum.length >= 10){
        this.changeContinueBtnState(true);
      }
      else{
        this.changeContinueBtnState(false);
      }
    } else {
      inputPhoneNumber.clearPhoneNumber();
    }
  },

  bindGenericError: function(msg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  }
});