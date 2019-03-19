define({

  secureAnswers: {
    "Question1": "",
    "Question2": "",
    "Question3": ""
  },

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initHeaderActions();
    this.initBtnContinueState();
    this.initRowClickActions();
    this.updateRightPane();
    this.view.flxQuestions.setVisibility(true);
    this.view.btnContinuePersonalInfo.onClick = this.btnContinueNavigate;
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initRowClickActions: function() {
    this.view.segQuestion1.onRowClick = this.handleSegClick.bind(this, this.view.segQuestion1, this.view.lblQuestion1.text);
    this.view.segQuestion2.onRowClick = this.handleSegClick.bind(this, this.view.segQuestion2, this.view.lblQuestion2.text);
    this.view.segQuestion3.onRowClick = this.handleSegClick.bind(this, this.view.segQuestion3, this.view.lblQuestion3.text);
  },

  handleSegClick: function(seg, lblText) {
    var selectedIndex = seg.selectedRowIndex[1];
    var data = seg.data;
    switch(lblText) {
      case this.view.lblQuestion1.text: 
        this.secureAnswers.Question1 = "";
        this.secureAnswers.Question1 = seg.selectedRowItems[0].lblOption;
        this.updateSegmentState(seg, data, selectedIndex);
        this.view.forceLayout();
        break;
      case this.view.lblQuestion2.text: 
        this.secureAnswers.Question2 = "";
        this.secureAnswers.Question2 = seg.selectedRowItems[0].lblOption;
        this.updateSegmentState(seg, data, selectedIndex);
        break;
      case this.view.lblQuestion3.text: 
        this.secureAnswers.Question3 = "";
        this.secureAnswers.Question3 = seg.selectedRowItems[0].lblOption;
        this.updateSegmentState(seg, data, selectedIndex);
        break;
    }
    this.setBtnContinueState();
  },

  updateSegmentState: function(segment, data, selectedIndex) {
    data.forEach(function(item, index) {
      if (selectedIndex === index) {
        item.imgCheckbox = "radiobtn.png";
        segment.setDataAt(item, index);
      } else if (item.imgCheckbox === "radiobtn.png") {
        item.imgCheckbox = "radiobuttoninactive.png";
        segment.setDataAt(item, index);
      }
    });
  },

  initBtnContinueState: function() {
    this.view.btnContinuePersonalInfo.skin = "sknBtnOnBoardingInactive";
    this.view.btnContinuePersonalInfo.setEnabled(false);
  },

  setBtnContinueState: function() {
    this.view.btnContinuePersonalInfo.skin = "sknBtnBg0A78D1BorderE9FontFFSSPR36pxTab";
    this.view.btnContinuePersonalInfo.setEnabled(true);
  },

  btnContinueNavigate: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navMan = applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmOBAcknowledgement", this.secureAnswers);
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var ssn = NUOMod.presentationController.getSSN();
    if (ssn) {
      NUOMod.presentationController.userNavigation = "SecurityQuestions";
      NUOMod.presentationController.createPersonalInfo(); 
    }
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