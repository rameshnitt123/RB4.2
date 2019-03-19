define({
  count: 0,
  progress: 0,
  segName: ["Products selection", "Personal Info", "Employement Info",
            "Financial Info", "Identity Verification", "Signature Upload"],

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  }, 

  frmPreshow: function() {
    var NewUser = applicationManager.getLoggerManager();      
    NewUser.setCustomMetrics(this, false, "New User Onboarding");
    this.setInitActions();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  setInitActions: function() {
    if (!this.isIpad()) {
    	this.view.btnLogout.onClick = this.logoutOnClick;
    }
    this.setSegmentData();
    this.setProgressFilled();
    this.setUserName();
    this.view.segSteps.onRowClick = this.segStepsOnRowClick;
    this.view.btnStartNewApplication.onClick = this.startNewApplicationOnClick;
  },
  
  isIpad: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    return deviceUtilManager.isIpad();
  },

  setUserName: function() {
    var navMan = applicationManager.getNavigationManager();
    var userdata = navMan.getCustomInfo("frmOBLogin");
    this.view.lblWelcome.text = "Welcome " + userdata.username;
  },

  setSegmentData: function() {
    var segData = [];
    var eachrow; 
    var self = this;
    var navMan = applicationManager.getNavigationManager();
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");       
    var navData = navMan.getCustomInfo("frmOBLandingNew");
    var res = navData.state;
    var data = {};
    if (res.userProducts == "true" && res.userPersonalInfo == "false" 
        && res.userEmploymentInfo == "false" && res.userFinancialInfo == "false" 
        && res.userSecurityQuestions == "false" && res.creditCheck == "false") {
      NUOMod.presentationController.updateUserData(data);
      this.count = 1; 
      this.progress = "25";
    } else if (res.userPersonalInfo == "true" && res.userEmploymentInfo == "false" 
               && res.userFinancialInfo == "false" && res.userSecurityQuestions == "false" 
               && res.creditCheck == "false") {
      NUOMod.presentationController.setNewUserData();
      this.count = 2;
      this.progress = "37.5";
    } else if (res.userEmploymentInfo == "true" && res.userFinancialInfo == "false" 
               && res.userSecurityQuestions == "false" && res.creditCheck == "false") {
      NUOMod.presentationController.setNewUserData();
      this.count = 3;
      this.progress = "50";
    } else if (res.userFinancialInfo == "true" 
               && res.userSecurityQuestions == "false" && res.creditCheck == "false") {
      NUOMod.presentationController.setNewUserData();
      this.count = 4;
      this.progress = "62.5";
    } else if (res.userSecurityQuestions == "true" && res.creditCheck == "false") {
      NUOMod.presentationController.setNewUserData();
      this.count = 5;
      this.progress = "75";
    } else if (res.creditCheck == "true") {
      NUOMod.presentationController.setNewUserData();
      this.count = 5;
      this.progress = "87.5";
    } else {
      NUOMod.presentationController.clearUserData();
      this.count = 0;
      this.progress = "12.5";
    }

    for (var i = 0; i < 6; i++) {
      var val = (i + 1).toString();
      if (this.count > i) {
        eachrow = {
          lblStepName: self.segName[i],
          imgDone: {isVisible: true},
          imgGo: {src: "chevron.png"}
        }; 
      } else if (i === this.count) {
        eachrow = {
          lblStepName: self.segName[i],
          imgDone: {isVisible: false},
          imgGo: {src: "chevron.png"},
          lblNumber: {text: val, skin: "sknlbl1a98ffBgFontffffffBorder100"}
        };
      } else {
        eachrow = {
          lblStepName: self.segName[i],
          imgDone: {isVisible: false},
          imgGo: {src: "chevron.png"},
          lblNumber: {text: val, skin: "sknlble3e3e3Border100px"}
        }; 
      }
      segData.push(eachrow); 
    }
    this.view.segSteps.setData(segData);
  },

  setProgressFilled: function() {
    this.view.flxProgressValueLanding.width = this.progress + "%";
  },

  segStepsOnRowClick: function() {
    var navMan = applicationManager.getNavigationManager();
    var rowIndex = this.view.segSteps.selectedRowIndex[1];
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");

    if (( rowIndex <= this.count && this.count <= 4)
        || (rowIndex <= this.count && rowIndex === this.count)) {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var data = this.view.segSteps.data[rowIndex].lblStepName;
      switch (data) {
        case "Products selection": 
          var prolist = navMan.getCustomInfo("frmOBSelectProducts");
          if (prolist && prolist.products.allProducts) {
            NUOMod.presentationController.commonFunctionForNavigation("frmOBSelectProducts");
          } else {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
          }
          break;
        case "Personal Info":
          NUOMod.presentationController.commonFunctionForNavigation("frmOBAddPersonalInfo");
          break;
        case "Employement Info":
          NUOMod.presentationController.commonFunctionForNavigation("frmOBEmploymentType");
          break;
        case "Financial Info":
          NUOMod.presentationController.commonFunctionForNavigation("frmOBFinancialInfoAnnualIncome");
          break;
        case "Identity Verification":
          NUOMod.presentationController.commonFunctionForNavigation("frmOBSecurityQuestionsNew");
          break;
        case "Signature Upload": navMan.setCustomInfo("frmOBSignature", {});
          NUOMod.presentationController.commonFunctionForNavigation("frmOBSignature");
          break;
      }
    }
  },

  startNewApplicationOnClick: function() {
    var self = this;
    var basicConfig = {
      alertType: constants.ALERT_TYPE_CONFIRMATION,
      alertTitle: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.Thisactionwillresetyourpreviousapplicationdata"),
      yesLabel: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.Continue"),
      noLabel: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.Cancel"),
      message:  applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.Doyouwishtocontinue?"),
      alertHandler: self.resetDataNUO
    };
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig, {});
  },

  resetDataNUO: function(response) {
    if (response) {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var  nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");       
      nuoMod.presentationController.resetData();
    }
  },

  logoutOnClick: function() {
    var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    nuoMod.presentationController.onLogout(); 
    //Logout button in header onClick
  }
});