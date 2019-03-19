define({ 

  init: function() {
    var FormValidator = require("FormValidatorManager");
    this.fv = new FormValidator(1);
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initComponents();
    this.initActions();
    this.initHeaderActions();
    this.setData();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },

  initActions: function() {
    this.view.btnContinue.onClick = this.validateDOBAndNavigate;
  },

  initComponents: function() {
    var btnContinue = this.view.btnContinue;
    btnContinue.setEnabled(false);

    var dateOfBirthView = this.view.dateOfBirthView;
    dateOfBirthView.onDateEntered = function() {
      btnContinue.setEnabled(true);
      btnContinue.skin = "sknBtnRnd4pxffffffSSPReg36pxTab";
    };
    dateOfBirthView.onDateRemoved = function() {
      btnContinue.setEnabled(false);
      btnContinue.skin = "sknBtnBGf9f9f9SSPa0a0a036PxTab";
    };

    var keyPad = this.view.digitkeypad;
    keyPad.onDigitEntered = function(char) {
      dateOfBirthView.addChar(char);
    };
    keyPad.onDigitRemoved = function() {
      dateOfBirthView.removeChar();      
    };
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClickCancel;
    }
  },

  setData: function() {
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    var dateOfBirth = enrollMod.presentationController.getEnrollDOB();
    if (dateOfBirth && dateOfBirth !== "") { 
      this.view.dateOfBirthView.setDate(this.getSanitizedDateString(dateOfBirth));
    } else {
      this.view.dateOfBirthView.clear();
    }
  },

  navBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },

  onClickCancel: function() {
    var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
    enrollMod.presentationController.resetEnrollObj();
  },

  /**
  * validates Date of Birth
  */
  validateDOBAndNavigate: function() {
    var date = this.view.dateOfBirthView.getDateString();
    if (date.length < 10) {
      this.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validDOB"));
    } else {
      var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
      enrollMod.presentationController.validateDOB(date);
    }    
  },

  /**
  * Shows Toast Message with red skin
  */
  bindViewError: function(msg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },

  getSanitizedDateString: function(dateString) {
    var sanitizedDate;
    if (dateString && dateString !== "") {
      var date = new Date(dateString); 
      var month = date.getMonth() + 1;
      if (month <= 9) {
        month = "0" + month;
      }

      var day = date.getDate();
      if (day <= 9) {
        day = "0" + day;
      }
      var year = date.getFullYear();
      sanitizedDate =  month + day + year;
    }
    return sanitizedDate;
  },
});