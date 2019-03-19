define({ 

  preShow: function(){
    if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
      this.view.flxFooter.isVisible = true;
    } else {
      this.view.flxHeader.isVisible = true;
      this.view.flxFooter.isVisible = false;
    }

    this.initActions();
  },
  initActions: function(){
    this.view.segAlerts.onRowClick = function(){
      var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsMod.presentationController.commonFunctionForNavigation("frmAlertsAccountList");
    };
    this.view.customFooter.flxTransfer.onClick = function(){
      var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
    };
  }
});