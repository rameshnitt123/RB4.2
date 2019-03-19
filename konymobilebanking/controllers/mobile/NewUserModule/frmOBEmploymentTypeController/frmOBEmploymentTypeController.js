define({
  selectedEmploymentType: -1,
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
    var employmentType = confManager.getEmployementType();
    var segData = [];
    for (var i = 0; i < employmentType.length; i++) {
      var temp = {
        "btnOption": {"text": employmentType[i]}
      };
      segData.push(temp);
    }
    for (var i = 0; i < segData.length; i++) {
      segData[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
      segData[i].btnOption.onClick = function () {
        applicationManager.getPresentationUtility().showLoadingScreen();
        scope.selectedEmploymentType = scope.view.segDependents.selectedIndex[1];
        scope.processAndNavigate();
      }
    }
    if (scope.selectedEmploymentType !== -1) {
      segData[scope.selectedEmploymentType].btnOption.skin = "sknBtnOBSegSelected";
    }
    scope.view.segDependents.data = segData;
  },
  processAndNavigate : function () {
    var scope = this;
    var data = {
      "employmentInfo" : scope.view.segDependents.selectedItems[0].btnOption["text"]
     };
    applicationManager.getPresentationUtility().showLoadingScreen();
    var segData = scope.view.segDependents.data;
    for(var i=0;i<segData.length;i++){
      if(segData[i]["btnOption"]["text"] === data.employmentInfo){
        segData[i]["btnOption"].skin="sknBtnOBSegSelected";
      }
      else{
        segData[i]["btnOption"].skin="sknBtnOnBoardingOptionsInActive";
      }
    }
    scope.view.segDependents.setData(segData);
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    if(data.employmentInfo.toLowerCase() === "employed" || data.employmentInfo.toLowerCase() === "retired"){
      NUOMod.presentationController.updateNewUserModel(data);  
      NUOMod.presentationController.commonFunctionForNavigation("frmOBEmploymentDetails");
    }
    else
    {
      data["company"]= "";
	  data["jobProfile"] = "";
	  data["experience"] = "0";
      NUOMod.presentationController.updateNewUserModel(data);  
	  NUOMod.presentationController.commonFunctionForNavigation("frmOBEmploymentCurrentPosition");
//       NUOMod.presentationController.userNavigation = data.informationType;
//       NUOMod.presentationController.createPersonalInfo();  
    }
  },
  assignDataToForm : function(newUserJSON){
    var employmentInfo = (newUserJSON.employmentInfo && newUserJSON.employmentInfo !== "" && newUserJSON.employmentInfo !== null)?newUserJSON.employmentInfo:"";
    var segData = this.view.segDependents.data;
    for(var i=0;i<segData.length;i++){
      if(segData[i]["btnOption"]["text"] === employmentInfo){
        segData[i]["btnOption"].skin="sknBtnOBSegSelected";
      }
      else{
        segData[i]["btnOption"].skin="sknBtnOnBoardingOptionsInActive";
      }
    }
    this.view.segDependents.setData(segData);
  }
});