define({ 

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initHeaderActions();
    this.updateRightPane();
    this.setData();
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

  backNavigation: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack(); 
  },

  handleCancelAction: function() {
    var AuthModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    AuthModule.presentationController.commonFunctionForNavigation("frmLogin");
  },

  setData : function() {
    this.changeContinueBtnState(false);
    this.view.segCriteria.onRowClick = this.onSelection;
    this.view.btnContinue.onClick = this.onSelectionMembershipCriteria;
    var dataMap  = {
      "btnViewList": "btnViewList",
      "flxCheckbox": "flxCheckbox",
      "flxCheckboxMain": "flxCheckboxMain",
      "flxEligibilityCriteria": "flxEligibilityCriteria",
      "flxMain": "flxMain",
      "flxSeparator": "flxSeparator",
      "imgCheckbox": "imgCheckbox",
      "lblCriteriaType": "lblCriteriaType",
      "lbldescription": "lbldescription",
      "tbxCriteria": "tbxCriteria"
    };
    var data = [
      {
        "btnViewList": { isVisible : false },
        "imgCheckbox": {"src": "radiobuttoninactive.png"},
        "lblCriteriaType": "I am related to a current Kony bank  member.",
        "lbldescription": "Eligible relationships include spouse, domestic  partner, parent, grandparent, child, sibling, grandchild, step sibling or adopted children.",
        "tbxCriteria": { isVisible : false },
        "template" : "flxEligibilityCriteria"
      },
      {
        "btnViewList": { isVisible : false },
        "imgCheckbox": {"src": "radiobuttoninactive.png"},
        "lblCriteriaType": "I am an employee, retiree or family  member of an employee of a  company Konybank serves.",
        "lbldescription": { isVisible : false },
        "tbxCriteria": { isVisible : true },
        "template" : "flxEligibilityCriteria"
      },
      {
        "btnViewList": { isVisible : true , "text" : "View list of membership organization we serve " },
        "imgCheckbox": {"src": "radiobuttoninactive.png"},
        "lblCriteriaType": "I am a memeber of a membership  organization Konybank Servers.",
        "lbldescription": { isVisible : false },
        "tbxCriteria": { isVisible : false },
        "template" : "flxEligibilityCriteria"
      },
      {
        "btnViewList": { isVisible : true , "text" : "View list of communities we serve " },
        "imgCheckbox": {"src": "radiobuttoninactive.png"},
        "lblCriteriaType": "I am a memeber of a membership  organization Konybank Servers.",
        "lbldescription": { isVisible : false },
        "tbxCriteria": { isVisible : false },
        "template" : "flxEligibilityCriteria"
      }
    ];
    this.view.segCriteria.widgetDataMap = dataMap;
    this.view.segCriteria.setData(data);
    this.view.forceLayout();
  },
  
  updateSegmentState: function() {
    var segment = this.view.segCriteria;
    var selectedIndex = segment.selectedRowIndex[1];
    var data = segment.data;
    data.forEach(function(item, index) {
      if (selectedIndex === index) {
        item.imgCheckbox.src = "radiobtn.png";
        segment.setDataAt(item, index);
      } else if (item.imgCheckbox.src === "radiobtn.png") {
        item.imgCheckbox.src = "radiobuttoninactive.png";
        segment.setDataAt(item, index);
      }
    });
    this.view.forceLayout();
  },
  
  changeContinueBtnState: function(isEnable) {
    this.view.btnContinue.setEnabled(isEnable);
    this.view.btnContinue.skin = isEnable 
                                 ? "sknBtnRnd4pxffffffSSPReg36pxTab"
                              	 : "sknBtnBGf9f9f9SSPa0a0a036PxTab";
  },

  onSelectionMembershipCriteria : function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var item = this.view.segCriteria.data.find(function(element) {
      return element.imgCheckbox.src === "radiobtn.png";
    });
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("frmOBMembershipEligibility", item.lblCriteriaType);
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBsetUserNamePwd"); 
  },
  
  onSelection: function() {
    this.updateSegmentState();
    this.changeContinueBtnState(true);
  },
  
  updateRightPane: function() {
    var rightPane = this.view.RightPane;
    rightPane.lblCheckedRowName.text = this.getStyledPhoneNumber();
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