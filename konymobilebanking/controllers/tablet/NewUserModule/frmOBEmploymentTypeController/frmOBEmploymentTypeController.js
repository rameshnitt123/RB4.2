define({ 
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initHeaderActions();
    this.setMasterDataToSegment();
    this.updateRightPane();
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var NUOData = NUOMod.presentationController.getUserData();    
    this.assignDataToForm(NUOData);
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  setMasterDataToSegment: function() {
    var self = this;
    var confManager = applicationManager.getConfigurationManager();
    var employmentType = confManager.getEmployementType();
    var segData = employmentType.map(function(item) {
      return {
        btnOption: {
          text: item,
          skin: "sknBtnOnBoardingOptionsInActive",
          onClick: self.onRowClick
        }
      };
    });
    self.view.segDependents.setData(segData);
  },

  onRowClick: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    this.selectedEmploymentType = this.view.segDependents.selectedIndex[1];
    this.processAndNavigate();
  }, 

  processAndNavigate: function () {
    var self = this;
    var data = {
      employmentInfo: self.view.segDependents.selectedItems[0].btnOption.text
    };
    applicationManager.getPresentationUtility().showLoadingScreen();
    var segData = self.view.segDependents.data;
    segData.forEach(function(item, index) {
      var type = item.btnOption.text;
      item.btnOption.skin = type === data.employmentInfo
        ? "sknBtnOBSegSelected"
      : "sknBtnOnBoardingOptionsInActive";
    }); 
    self.view.segDependents.setData(segData);
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    if (data.employmentInfo.toLowerCase() !== "employed" || data.employmentInfo.toLowerCase() !== "retired") {
      data.company = "";
      data.jobProfile = "";
      data.experience = "0";
    }
    NUOMod.presentationController.updateNewUserModel(data);  
    NUOMod.presentationController.commonFunctionForNavigation("frmOBEmploymentDetails");
  },

  assignDataToForm: function(newUserJSON) {
    var employmentInfo = newUserJSON.employmentInfo ? newUserJSON.employmentInfo : "";
    var segData = this.view.segDependents.data;
    segData.forEach(function(item, index) {
      var type = item.btnOption.text;
      item.btnOption.skin = type === employmentInfo
        ? "sknBtnOBSegSelected"
      : "sknBtnOnBoardingOptionsInActive";
    }); 
    this.view.segDependents.setData(segData);
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