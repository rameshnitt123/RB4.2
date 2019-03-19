define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_e73758056d584afdb83c0e305e6a88f7: function AS_BarButtonItem_e73758056d584afdb83c0e305e6a88f7(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** preShow defined for frmPreferencesDeviceRegistration **/
    AS_Form_d40fc79f89714cf5a8c643fa005d1fc0: function AS_Form_d40fc79f89714cf5a8c643fa005d1fc0(eventobject) {
        var self = this;
        this.preShow();
    }
});