define({ 

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var NUOData = NUOMod.presentationController.getUserData();
    this.initHeaderActions();
    this.assignDataToForm(NUOData);
    this.setValidationBasedOnEmploymentType(NUOData);
    this.updateRightPane();
    this.view.btnContinueEmploymentInfo.onClick = this.onSubmitEmploymentInfo;
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  setValidationBasedOnEmploymentType: function(NUOData) {
    if (NUOData.employmentInfo.toLowerCase() === "employed") {
      var FormValidator = require("FormValidatorManager")
      this.fv = new FormValidator(2);
      this.view.txtCompany.onTextChange = this.validateCompany;
      this.view.txtJobTitle.onTextChange = this.validateJobTitle;
      this.validateFormUI();
    } else {
      this.view.txtCompany.onTextChange = this.nullFunction;
      this.view.txtJobTitle.onTextChange = this.nullFunction;
      this.view.btnContinueEmploymentInfo.skin = "sknBtnBgf9f9f9SSP36Pxa0a0a0Tab";
      this.view.btnContinueEmploymentInfo.setEnabled(true);
    }
  },

  nullFunction: function() {},

  validateJobTitle: function() {
    var text = this.view.txtJobTitle.text;
    this.fv.checkAndUpdateStatusForNull(1, text);
  },

  validateCompany: function() {
    var text = this.view.txtCompany.text;
    this.fv.checkAndUpdateStatusForNull(0, text);
  },

  validateFormUI: function() {
    var formValues = [];
    formValues.push(this.view.txtCompany.text);
    formValues.push(this.view.txtJobTitle.text);
    this.fv.submissionView(this.view.btnContinueEmploymentInfo);
    this.fv.preshowCheck(formValues);
  },

  onSubmitEmploymentInfo: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var data = {
      "company": this.view.txtCompany.text,
      "jobProfile": this.view.txtJobTitle.text,
      "years": this.view.txtYears.text
    };
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.updateNewUserModel(data);
    NUOMod.presentationController.commonFunctionForNavigation("frmOBFinancialInfoAnnualIncome");
  },

  assignDataToForm : function(newUserJSON) {
    this.view.txtCompany.text = newUserJSON.company ? newUserJSON.company : "";
    this.view.txtJobTitle.text = newUserJSON.jobProfile ? newUserJSON.jobProfile : "";
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.flxHeader.btnRight.onClick = this.handleCancelAction;
    }
  },

  backNavigation: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack(); 
  },

  handleCancelAction: function() {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.onClose();
  },

  updateRightPane: function() {
    var navManager = applicationManager.getNavigationManager();
    var eligibility = navManager.getCustomInfo("frmOBMembershipEligibility");
    var productsCount = navManager.getCustomInfo("selectedUserProduct").productsCount;
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var ssn = NUOMod.presentationController.getUserData().ssn;
    var ssnLength = ssn.length;
    if (eligibility && eligibility.length > 25) {
      eligibility = eligibility.substring(0, 24) + "...";
    }
    var rightPane = this.view.RightPane;
    rightPane.lblCheckedRowName.text = this.getStyledPhoneNumber();
    rightPane.lblThirdCheckedRowName.text = eligibility;
    rightPane.lblFifthCheckedRowName.text = parseInt(productsCount).toString() + " selected";
    rightPane.lblSeventhCheckedRowName.text = "XXX-XX-" + ssn.substr(ssnLength - 4);
  },

  getStyledPhoneNumber: function() {
    var navManager = applicationManager.getNavigationManager();
    var phoneNumber = navManager.getCustomInfo("frmOBSignInWithPhoneNumber");
    var text = "(   )   -    ";
    var delta = 1;
    for (var i = 0; i < text.length; i++) {
      if (i === 3 || i === 6) {
        delta++;
      }

      if (i < phoneNumber.length) {
        var index = i + delta;
        var replacement = phoneNumber.charAt(i);
        text = text.substr(0, index) + replacement + text.substr(index + 1);
      }
    }
    return text;
  }
});