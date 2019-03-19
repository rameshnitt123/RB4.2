define({
  selectedYearsCurrentPosition:-1,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    var self = this;
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.setMasterDataToSegment();
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var NUOData = NUOMod.presentationController.getUserData();
    this.assignDataToForm(NUOData);
    this.view.customHeader.flxBack.onClick = this.onBack;
    this.view.customHeader.btnRight.onClick = this.onClose;
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onBack : function () {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  },
  onClose : function () {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.onClose();
  },
  setMasterDataToSegment: function () {
    var scope = this;
    var confManager = applicationManager.getConfigurationManager();
    var experience = confManager.getEmploymentExperience();
    var segData = [];
    for (var i = 0; i < experience.length; i++) {
      var temp = {"flxMain" : {"skin" : "slFbox"},
                  "lblHyphen" : {"text" : "-"},
                  "lblOption1" : {"text": experience[i][0]},
                  "lblOption2" : {"text": experience[i][1]},
                  "selectedValue" : experience[i][2]
                 };
      segData.push(temp);
    }
    for (var i = 0; i < segData.length; i++) {
      segData[i].flxMain.skin = "slFbox";
      segData[i].flxMain.onClick = function () {
        applicationManager.getPresentationUtility().showLoadingScreen();
        scope.selectedYearsCurrentPosition = scope.view.segDependents.selectedIndex[1];
        scope.processAndNavigate();
      }
    }
    if (scope.selectedYearsCurrentPosition !== -1) {
      segData[scope.selectedYearsCurrentPosition].flxMain.skin = "sknFlxF4F4F4Radius100";
    }
    scope.view.segDependents.data = segData;
  },
  processAndNavigate : function () {
    var scope = this;
    applicationManager.getPresentationUtility().showLoadingScreen();
    var data = {
      "experience" : scope.view.segDependents.selectedItems[0].selectedValue,
      "informationType" : "EmploymentInfo"
    };
    var segData = scope.view.segDependents.data;
    for(var i=0;i<segData.length;i++){
      if(segData[i].selectedValue === data.experience){
        segData[i]["flxMain"].skin="sknFlxF4F4F4Radius100";
      }
      else{
        segData[i]["flxMain"].skin="slFbox";
      }
    }
    scope.view.segDependents.setData(segData);
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.updateNewUserModel(data);  
    NUOMod.presentationController.userNavigation = data.informationType;
    NUOMod.presentationController.createPersonalInfo();  
  },
  assignDataToForm : function(newUserJSON){
    var experience = (newUserJSON.experience && newUserJSON.experience !== "" && newUserJSON.experience !== null)?newUserJSON.experience:"";
    var segData = this.view.segDependents.data;
    for(var i=0;i<segData.length;i++){
      if(segData[i].selectedValue.toString() === experience.toString()){
        segData[i]["flxMain"].skin="sknFlxF4F4F4Radius100";
      }
      else{
        segData[i]["flxMain"].skin="slFbox";
      }
    }
    this.view.segDependents.setData(segData);
  }
});