define({

  timerCounter: 0,
  init: function() {
    var FormValidator = require("FormValidatorManager");
    this.fv = new FormValidator(2);
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.setFlowAction();
    this.setPreShowData();
    this.initHeaderActions();
    this.updateRightPane();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  setPreShowData: function() {
    this.fv.submissionView(this.view.btnContinue);
    this.view.txtSecureCode.maxTextLength = 4;
    this.view.txtReenterCode.maxTextLength = 4;
    var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    var data = cLMod.presentationController.getTransactionObject();
    var securityCode = data.cashlessSecurityCode;
    if (securityCode) {
      this.populateDetails(securityCode);
    }
    var navMan = applicationManager.getNavigationManager();
    var newTRNflag = navMan.getCustomInfo("frmCardlessSecureCodeNewTRNflag");
    if(newTRNflag === true){
        this.view.txtSecureCode.text = '';
    	this.view.txtReenterCode.text = '';
        navMan.setCustomInfo("frmCardlessSecureCodeNewTRNflag", false);
    }
    this.validateFormUI();
  },

  setFlowAction: function() {
    this.view.btnContinue.onClick = this.btnContinueOnClick;
    this.view.txtSecureCode.onTextChange = this.onTextChangeAction;
    this.view.txtReenterCode.onTextChange = this.onTextChangeAction;
  },

  btnContinueOnClick: function() {
    var valid = this.validateSecureCode();
    if (valid) {
      var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
      cLMod.presentationController.setCardlessSecurityCode(this.view.txtSecureCode.text);
    }
  },

  bindGenericError: function (errorMsg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var self = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(self, errorMsg);
  },

  validateSecureCode: function() {
    if (this.view.txtSecureCode.text.length !==4 || this.view.txtReenterCode.text.length !==4 ) {
      this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardLess.entervalidsecurecode"));
      return false;
    } else {
      if (this.view.txtSecureCode.text === this.view.txtReenterCode.text) {
        return true;
      } else {
        this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardLess.securecodematch"));
        return false;
      }
    }
  },

  onTextChangeAction: function() {
    this.validateFormUI(); 
  },
  
  populateDetails: function(securityCode) {
    this.view.txtSecureCode.text = securityCode;
    this.view.txtReenterCode.text = securityCode;
  },
  
  validateFormUI: function() {
    var formValues = [];
    formValues.push(this.view.txtSecureCode.text);
    formValues.push(this.view.txtReenterCode.text); 
    this.fv.preshowCheck(formValues);
  },

  updateRightPane: function() {
    var navMan = applicationManager.getNavigationManager();
    var data = navMan.getCustomInfo("frmCardLessWithdraw");
    var rightPane = this.view.RightPane;
    rightPane.flxFirstRow.flxCheckedRow.lblCheckedRowName.text = this.constructAccountName(data);
    rightPane.flxSecondRow.flxSecondCheckedRow.lblSecondCheckedRowName.text = data.cashlessMode;
  },

  constructAccountName: function(data) {
    var fromAccountName = data.fromAccountName;
    var fromAccountNumber = data.fromAccountNumber;
    return fromAccountName + "..." + fromAccountNumber.slice(-4);
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
    var cardLessMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
    cardLessMod.presentationController.cancelCommon();
  },

});