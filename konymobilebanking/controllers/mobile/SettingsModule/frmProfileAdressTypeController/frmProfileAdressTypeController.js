define({
  selectedprofileAddressType: -1,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    this.setPreshowData();
    this.initActions();
    this.setMasterDataToSegment();
    this.assignDataToForm();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  setPreshowData : function(){
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.flxTransactionFrequency.top = "56dp";
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.flxTransactionFrequency.top = "0dp";
    } 
  },
  initActions: function () {
    var scope = this;
    this.view.customHeader.btnRight.onClick = this.onCancel;
    this.view.customHeader.flxBack.onClick = this.onBack;
  },
  onCancel : function(){
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
  },
  onBack : function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  setMasterDataToSegment: function () {
    var scope = this;
    var profileAddressType = ['Home','Office'];
	var profileAddressValue = ['ADR_TYPE_HOME','ADR_TYPE_WORK'];
    var segData = [];
    for (var i = 0; i < profileAddressType.length; i++) {
      var temp = {
        "btnOption": 
		{
			"text": profileAddressType[i],
			"value": profileAddressValue[i]
		}
      };
      segData.push(temp);
    }
    for (var i = 0; i < segData.length; i++) {
      segData[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
      segData[i].btnOption.onClick = function () {
        scope.selectedprofileAddressType = scope.view.segAddressType.selectedIndex[1];
        scope.processAndNavigate();
      }
    }
    if (scope.selectedprofileAddressType !== -1) {
      segData[scope.selectedprofileAddressType].btnOption.skin = "sknBtnOnBoardingOptionsActive";
    }
    scope.view.segAddressType.data = segData;
  },
  processAndNavigate : function () {
    var scope = this;
    var data = {
      "addressType" : scope.view.segAddressType.selectedItems[0].btnOption["value"],
	  "addressTypeForDisplay": scope.view.segAddressType.selectedItems[0].btnOption["text"]
    };
    var segData = scope.view.segAddressType.data;
    for(var i=0;i<segData.length;i++){
      if(segData[i]["btnOption"]["text"] === data.addressType){
        segData[i]["btnOption"].skin="sknBtnOnBoardingOptionsActive";
      }
      else{
        segData[i]["btnOption"].skin="sknBtnOnBoardingOptionsInActive";
      }
    }
    scope.view.segAddressType.setData(segData);
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.updateUserAddressTypeData(data);
    settingsMod.presentationController.commonFunctionForNavigation("frmProfileConfirmAddressDetails");
  },
  assignDataToForm : function(){
    var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    var addressTypeData = settingsMode.presentationController.getUserAddressData();
    if(addressTypeData){
      var addressType = (addressTypeData.addressType && addressTypeData.addressType !== "" && addressTypeData.addressType !== null)?addressTypeData.addressType:"";
      var segData = this.view.segAddressType.data;
      for(var i=0;i<segData.length;i++){
        if(segData[i]["btnOption"]["text"].toLowerCase() === addressType.toLowerCase()){
          segData[i]["btnOption"].skin="sknBtnOnBoardingOptionsActive";
        }
        else{
          segData[i]["btnOption"].skin="sknBtnOnBoardingOptionsInActive";
        }
      }
      this.view.segAddressType.setData(segData);
    }
  }
});