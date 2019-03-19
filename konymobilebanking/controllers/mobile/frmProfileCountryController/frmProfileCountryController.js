define({
  preShow : function () {

    this.initActions();
  },
  initActions: function () {
    var scope = this;
    this.view.segCountry.onRowClick = function () {
      scope.segmentRowClick();
    };
    this.view.customHeader.flxBack.onClick = function () {
      var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsMod.presentationController.commonFunctionForNavigation("frmProfileCountryCode");
    };
    this.view.customHeader.btnRight.onClick = function(){
      var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    };
  },
  segmentRowClick : function () {
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmProfileEnterPhoneNumber");
  },
});