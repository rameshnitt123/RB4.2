define({
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  }, 
  preShow : function(){
    this.setPreshowData();
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onClose:function()
  {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmLogin"); 
  },
  setPreshowData : function(){
    this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
    this.view.btnContinue.setEnabled(false);
    this.view.customHeader.flxBack.onClick = this.onBack;
    this.view.customHeader.btnRight.onClick = this.onClose;
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
        "imgCheckbox": {"src": "radiobuttonactive.png"},
        "lblCriteriaType": {"text": kony.i18n.getLocalizedString("kony.mb.OB.EligibilityCriteria1")},
        "lbldescription": {"text": kony.i18n.getLocalizedString("kony.mb.OB.EligibilityCriteriaDesc")},
        "tbxCriteria": { isVisible : false },
        "template" : "flxEligibilityCriteria"
      },
      {
        "btnViewList": { isVisible : false },
        "imgCheckbox": {"src": "radiobuttoninactive.png"},
        "lblCriteriaType": {"text": kony.i18n.getLocalizedString("kony.mb.OB.EligibilityCriteria2")},
        "lbldescription": { isVisible : false },
        "tbxCriteria": { isVisible : true },
        "template" : "flxEligibilityCriteria"
      },
      {
       // "btnViewList": { isVisible : true , "text" : "View list of membership organization we serve " },
        "imgCheckbox": {"src": "radiobuttoninactive.png"},
        "lblCriteriaType": {"text": kony.i18n.getLocalizedString("kony.mb.OB.EligibilityCriteria3")},
        "lbldescription": { isVisible : false },
        "tbxCriteria": { isVisible : false },
        "template" : "flxEligibilityCriteria"
      },
      {
        //"btnViewList": { isVisible : true , "text" : "View list of communities we serve " },
        "imgCheckbox": {"src": "radiobuttoninactive.png"},
        "lblCriteriaType": {"text": kony.i18n.getLocalizedString("kony.mb.OB.EligibilityCriteria4")},
        "lbldescription": { isVisible : false },
        "tbxCriteria": { isVisible : false },
        "template" : "flxEligibilityCriteria"
      }
    ];
    this.view.segCriteria.widgetDataMap = dataMap;
    this.view.segCriteria.setData(data);
    this.view.forceLayout();
  },
  onBack : function(){
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack(); 
  },
  onSelectionMembershipCriteria : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBEmail"); 
  },
  onSelection : function(){
    if(this.view.segCriteria.selectedIndices[0][1].length > 0)
    {
      this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
      this.view.btnContinue.setEnabled(true);
    }
  }
});