define({ 

  selectedAnnualIncome: -1,

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function () {
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

  setMasterDataToSegment: function () {
    var self = this;
    var confManager = applicationManager.getConfigurationManager();
    var annualIncome = confManager.getAnnualIncome();
    var segData = annualIncome.map(function(item){
      return {
        "flxMain": {"skin": "slFbox", "onClick": self.onRowClick},
        "lblOption1": {"text": confManager.getCurrencyCode() + "" + item[0]},
        "lblHyphen": {"text": "-"},
        "lblOption2": {"text": confManager.getCurrencyCode() + "" + item[1]},
        "selectedValue": item[2]
      };      
    });

    if (self.selectedAnnualIncome !== -1) {
      segData[self.selectedAnnualIncome].flxMain.skin = "sknFlxF4F4F4Radius100";
    }
    self.view.segDependents.setData(segData);
    self.view.forceLayout();
  },

  onRowClick: function() {
    var self = this;
    applicationManager.getPresentationUtility().showLoadingScreen();
    self.selectedAnnualIncome = self.view.segDependents.selectedIndex[1];
    self.processAndNavigate();
  },

  processAndNavigate: function() {
    var self = this;
    var data = {
      "annualIncome": self.view.segDependents.selectedItems[0].selectedValue
    };
    var segData = self.view.segDependents.data;
    segData.forEach(function(item, index) {
      var type = item.selectedValue;
      item.flxMain.skin = type === data.annualIncome ? "sknFlxF4F4F4Radius100" : "slFbox";
    });
    self.view.segDependents.setData(segData);
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.updateNewUserModel(data); 
    NUOMod.presentationController.commonFunctionForNavigation("frmOBFinancialInfoAssets");    
  },

  assignDataToForm: function(newUserJSON) {
    var self = this;
    var annualIncome = newUserJSON.annualIncome ? newUserJSON.annualIncome : "";
    var segData = this.view.segDependents.data;
    segData.forEach(function(item, index) {
      var type = item.selectedValue;
      item.flxMain.skin = type === annualIncome ? "sknFlxF4F4F4Radius100" : "slFbox";
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
    var AuthModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    AuthModule.presentationController.commonFunctionForNavigation("frmLogin");
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