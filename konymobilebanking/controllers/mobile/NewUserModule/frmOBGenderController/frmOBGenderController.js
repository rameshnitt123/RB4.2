define({
  selectedGender: -1,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    this.setMasterDataToSegment();
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeaderPersonalInfo.isVisible = true;
    }
    else{
      this.view.flxHeaderPersonalInfo.isVisible = false;
    }
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    var NUOData = NUOMod.presentationController.getUserData();
    this.assignDataToForm(NUOData);
    this.view.customHeaderPersonalInfo.flxBack.onClick = this.onBack;
    this.view.customHeaderPersonalInfo.btnRight.onClick = this.onClose;
	var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onBack : function(){
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  },
  onClose : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.onClose();
  },
  setMasterDataToSegment: function () {
    var scope = this;
    var confManager = applicationManager.getConfigurationManager();
    var genderData = confManager.getGender();
    var segData = [];
    for (var i = 0; i < genderData.length; i++) {
      var temp = {
        "btnOption": {"text": genderData[i][0]}
      };
      segData.push(temp);
    }
    for (var i = 0; i < segData.length; i++) {
      segData[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
      segData[i].btnOption.onClick = function () {
        applicationManager.getPresentationUtility().showLoadingScreen();
        scope.selectedGender = scope.view.segDependents.selectedIndex[1];
        scope.processAndNavigate();
      }
    }
    if (scope.selectedGender !== -1) {
      segData[scope.selectedGender].btnOption.skin = "sknBtnOBSegSelected";
    }
    scope.view.segDependents.data = segData;
  },
  processAndNavigate : function () {
    var scope = this;
    var data = {
      "gender" : scope.view.segDependents.selectedItems[0].btnOption["text"]
    };
    var segData = scope.view.segDependents.data;
    for(var i=0;i<segData.length;i++){
      if(segData[i]["btnOption"]["text"] === data.gender){
        segData[i]["btnOption"].skin="sknBtnOBSegSelected";
      }
      else{
        segData[i]["btnOption"].skin="sknBtnOnBoardingOptionsInActive";
      }
    }
    scope.view.segDependents.setData(segData);
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.updateNewUserModel(data);   
    NUOMod.presentationController.commonFunctionForNavigation("frmOBResidentialAddress");
  },
  assignDataToForm : function(newUserJSON){
    var gender = (newUserJSON.gender && newUserJSON.gender !== "" && newUserJSON.gender !== null)?newUserJSON.gender:"";
    var segData = this.view.segDependents.data;
    for(var i=0;i<segData.length;i++){
      if(segData[i]["btnOption"]["text"] === gender){
        segData[i]["btnOption"].skin="sknBtnOBSegSelected";
      }
      else{
        segData[i]["btnOption"].skin="sknBtnOnBoardingOptionsInActive";
      }
    }
    this.view.segDependents.setData(segData);
  }
});