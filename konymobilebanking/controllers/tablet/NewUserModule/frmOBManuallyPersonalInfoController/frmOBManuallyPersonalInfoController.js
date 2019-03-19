define({ 

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initHeaderActions();
    this.initDateView();
    this.initActions();
    this.initGenderView();
    this.initMaritalView();
    this.initDependedentsView();
    this.updateRightPane();

    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var NUOData = NUOMod.presentationController.getUserData();
    this.assignDOBToView(NUOData);
    this.assingFirstLastNameToView(NUOData);
    this.assignGenderToView(NUOData);
    this.assignMaritalStatusToView(NUOData);
    this.assignSpouseToView(NUOData);

    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.flxHeader.btnRight.onClick = this.handleCancelAction;
    }
  },

  initActions: function() {
    this.view.btnContinue.onClick = this.continueAction;
    this.view.flxDOBEnter.onClick = this.changeDoBViewState;
    this.view.flxGenderType.onClick = this.changeGenderViewState;
    this.view.flxMaritalStatusType.onClick = this.changeMaritalViewState;
    this.view.flxDependentsType.onClick = this.changeDependentsViewState;

    this.view.txtFirstName.onEndEditing = this.changeContinueBtnState;
    this.view.txtLastName.onEndEditing = this.changeContinueBtnState;
    this.view.txtSpouseFirstName.onEndEditing = this.changeContinueBtnState;
    this.view.txtSpouseLastName.onEndEditing = this.changeContinueBtnState;
  },

  initDateView: function() {
    var self = this;
    var dobTitle = this.view.lblTimeRangeTitle;
    var keyPad = this.view.digitkeypad;
    var dateView = this.view.DateView;
    keyPad.onDigitEntered = function(digit) {
      dateView.addChar(digit);
    };

    keyPad.onDigitRemoved = function(digit) {
      dateView.removeChar();
    };

    dateView.onDateEntered = function() {
      dobTitle.text = dateView.getDateString();
      self.changeContinueBtnState();
      self.changeDoBViewState();
    };

    dateView.onDateRemoved = function() {
      dobTitle.text = kony.i18n.getLocalizedString("kony.mb.common.EnterHere");
      self.changeContinueBtnState();
    };
  },

  initGenderView: function() {
    var self = this;
    var confManager = applicationManager.getConfigurationManager();
    var genderData = confManager.getGender();
    var segData = [];
    for (var i = 0; i < genderData.length; i++) {
      var temp = {
        btnOption: {text: genderData[i][0], onClick: self.onGenderChoosen}
      };
      segData.push(temp);
    }

    this.view.segGenderType.data = segData;
  },

  onGenderChoosen: function() {
    var segment = this.view.segGenderType;
    var selectedIndex = segment.selectedIndex[1];
    var item = segment.data[selectedIndex];
    var gender = item.btnOption.text;
    this.view.lblGenderTypeTitle.text = gender;
    this.changeContinueBtnState();
    this.highlightChoosenItem(segment);
    this.changeGenderViewState();
  },

  initMaritalView: function() {
    var self = this;
    var confManager = applicationManager.getConfigurationManager();
    var maritalStatusData = confManager.getMaritalStatus();
    var segData = [];
    for (var i = 0; i < maritalStatusData.length; i++) {
      var temp = {
        btnOption: {text: maritalStatusData[i][0], onClick: self.onMaritalChoosen}
      };
      segData.push(temp);
    }

    this.view.segMaritalStatusType.setData(segData);
  },

  onMaritalChoosen: function() {
    var segment = this.view.segMaritalStatusType;
    var selectedIndex = segment.selectedIndex[1];
    var item = segment.data[selectedIndex];
    var maritalStatus = item.btnOption.text;
    this.view.lblMaritalStatusTypeTitle.text = maritalStatus;
    this.view.flxSpouse.setVisibility(maritalStatus.toLowerCase() === "married");
    this.changeContinueBtnState();
    this.highlightChoosenItem(segment);
    this.changeMaritalViewState();
  },

  initDependedentsView: function() {
    var self = this;
    var confManager = applicationManager.getConfigurationManager();
    var noOfDependentsData = confManager.getNumberOfDependents();
    var segData = [];
    for (var i = 0; i < noOfDependentsData.length; i++) {
      var temp = {
        btnOption: {text: noOfDependentsData[i][0], onClick: self.onDependsChoosen}
      };
      segData.push(temp);
    }

    this.view.segDependentsType.setData(segData);
  },

  onDependsChoosen: function() {
    var segment = this.view.segDependentsType;
    var selectedIndex = segment.selectedIndex[1];
    var item = segment.data[selectedIndex];
    var dependents = item.btnOption.text;
    this.view.lblDependentsTypeTitle.text = dependents;
    this.changeContinueBtnState();
    this.highlightChoosenItem(segment);
    this.changeDependentsViewState();
  },

  backNavigation: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack(); 
  },

  handleCancelAction: function() {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.onClose();
  },

  continueAction: function() {
    var self = this;
    applicationManager.getPresentationUtility().showLoadingScreen();
    var data = {
      userfirstname: self.view.txtFirstName.text,
      userlastname: self.view.txtLastName.text,
      dateOfBirth: self.view.lblTimeRangeTitle.text,
      gender: self.view.lblGenderTypeTitle.text,
      maritalStatus: self.view.lblMaritalStatusTypeTitle.text,
      spouseFirstName: self.view.txtSpouseFirstName.text,
      spouseLastName: self.view.txtSpouseLastName.text,
      noOfDependents: self.view.lblDependentsTypeTitle
    };
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.validateAndSetPersonalInfo(data);
  },

  assignDOBToView: function(newUserJSON) {
    var dob = !this.isStringEmpty(newUserJSON.dateOfBirth) ? newUserJSON.dateOfBirth : "";
    if (dob !== "") {
      dob = dob.substr(0, 10);
      var dateOfBirth = dob.split("-");
      var dobText = dateOfBirth[1] + dateOfBirth[2] + dateOfBirth[0];
      this.view.DateView.setDate(dobText);
    } else {
      this.view.DateView.clear();
    }
  },

  assingFirstLastNameToView: function(newUserJSON) {
    this.view.txtFirstName.text = !this.isStringEmpty(newUserJSON.userfirstname) ? newUserJSON.userfirstname : "";
    this.view.txtLastName.text = !this.isStringEmpty(newUserJSON.userlastname) ? newUserJSON.userlastname : "";
    this.changeContinueBtnState();
  },

  assignGenderToView: function(newUserJSON) {
    var gender = !this.isStringEmpty(newUserJSON.gender) ? newUserJSON.gender : "";
    if (gender !== "") {
      this.view.lblGenderTypeTitle.text = gender;
      this.changeContinueBtnState();
    }
  },

  assignMaritalStatusToView : function(newUserJSON){
    var maritalStatus = !this.isStringEmpty(newUserJSON.maritalStatus) ? newUserJSON.maritalStatus: "";
    if (maritalStatus !== "") {
      this.view.lblMaritalStatusTypeTitle.text = maritalStatus;
      this.view.flxSpouse.setVisibility(maritalStatus.toLowerCase() === "married");
      this.changeContinueBtnState();
    }
  },

  assignSpouseToView: function(newUserJSON) {
    this.view.txtSpouseFirstName.text = !this.isStringEmpty(newUserJSON.spouseFirstName) ? newUserJSON.spouseFirstName : "";
    this.view.txtSpouseLastName.text = !this.isStringEmpty(newUserJSON.spouseLastName) ? newUserJSON.spouseLastName : "";
    this.changeContinueBtnState();
  },

  assignDependentsToView: function(newUserJSON) {
    var noOfDependents = !this.isStringEmpty(newUserJSON.noOfDependents) ? newUserJSON.noOfDependents : "";
    if (noOfDependents !== "") {
      this.view.lblDependentsTypeTitle.text = noOfDependents;
      this.changeContinueBtnState();
    }
  },

  updateRightPane: function() {
    var rightPane = this.view.RightPane;
    rightPane.lblCheckedRowName.text = this.getStyledPhoneNumber();

    var navManager = applicationManager.getNavigationManager();
    var eligibility = navManager.getCustomInfo("frmOBMembershipEligibility");
    var productsCount = navManager.getCustomInfo("selectedUserProduct").productsCount;
    if (eligibility && eligibility.length > 25) {
      eligibility = eligibility.substring(0, 24) + "...";
    }
    rightPane.lblThirdCheckedRowName.text = eligibility;
    rightPane.lblFifthCheckedRowName.text = parseInt(productsCount).toString() + " selected";
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
  },

  changeDoBViewState: function() {
    var isInputDateViewVisible = this.view.flxDOBValue.isVisible;
    this.view.flxDOBValue.setVisibility(!isInputDateViewVisible);
    this.view.flxKeyPad.setVisibility(!isInputDateViewVisible);
    this.view.imgDOBArrow.src = isInputDateViewVisible ? "arrowdown.png" : "arrowup.png";
  },

  changeGenderViewState: function() {
    var isGenderSegmentVisible = this.view.flxGenderTypeValue.isVisible;
    this.view.flxGenderTypeValue.setVisibility(!isGenderSegmentVisible);
    this.view.imgArrowGenderType.src = isGenderSegmentVisible ? "arrowdown.png" : "arrowup.png";
  },

  changeMaritalViewState: function() {
    var isMaritalSegmentVisible = this.view.flxMaritalStatusTypeValue.isVisible;
    this.view.flxMaritalStatusTypeValue.setVisibility(!isMaritalSegmentVisible);
    this.view.imgArrowMaritalStatusType.src = isMaritalSegmentVisible ? "arrowdown.png" : "arrowup.png";
  },

  changeDependentsViewState: function() {
    var isDependentsSegmentVisible = this.view.flxDependentsTypeValue.isVisible;
    this.view.flxDependentsTypeValue.setVisibility(!isDependentsSegmentVisible);
    this.view.imgArrowDependentsType.src = isDependentsSegmentVisible ? "arrowdown.png" : "arrowup.png";
  },

  changeContinueBtnState: function() {
    var isEnable = this.shouldEnableButton();
    this.view.btnContinue.setEnabled(isEnable);
    this.view.btnContinue.skin = isEnable 
      ? "sknBtnRnd4pxffffffSSPReg36pxTab" 
    : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
  },

  bindViewError: function(msg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },
  
  highlightChoosenItem: function(segment) {
    var selectedIndex = segment.selectedIndex[1];
    segment.data.forEach(function(item, index) {
      var isSelected = index === selectedIndex;
      var skin = isSelected ? "sknBtnOBSegSelected" : "sknBtnOnBoardingOptionsInActive";
      item.btnOption.skin = skin;
      segment.setDataAt(item, index);
    });
  },

  shouldEnableButton: function() {
    var firstName = this.view.txtFirstName.text;
    var lastName = this.view.txtLastName.text;
    var dob = this.view.lblTimeRangeTitle.text;
    var gender = this.view.lblGenderTypeTitle.text;
    var maritalStatatus = this.view.lblMaritalStatusTypeTitle.text;
    var spouseFirstName = this.view.txtSpouseFirstName.text;
    var spouseLastName = this.view.txtSpouseLastName.text;
    var dependents = this.view.lblDependentsTypeTitle.text;
    return firstName !== "" && lastName !== ""
      && (!this.isStringEmpty(dob) && dob !== kony.i18n.getLocalizedString("kony.mb.common.EnterHere"))
      && (!this.isStringEmpty(gender) && gender !== kony.i18n.getLocalizedString("kony.mb.common.Select"))
      && (!this.isStringEmpty(maritalStatatus) && maritalStatatus != kony.i18n.getLocalizedString("kony.mb.common.Select"))
      && (maritalStatatus.toLowerCase() !== "married"
          || (maritalStatatus.toLowerCase() === "married" && !this.isStringEmpty(spouseFirstName) && !this.isStringEmpty(spouseLastName)))
      && (!this.isStringEmpty(dependents) && dependents !== kony.i18n.getLocalizedString("kony.mb.common.Select"));
  },

  isStringEmpty: function(string) {
    return string === null || string === undefined || string === "";
  }
});