define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_c190f3ecf6be4cfd8301956db38dc03a: function AS_BarButtonItem_c190f3ecf6be4cfd8301956db38dc03a(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** preShow defined for frmPreferencesPin **/
    AS_Form_gf52ca5c722d41fe88f14b4b47d48f36: function AS_Form_gf52ca5c722d41fe88f14b4b47d48f36(eventobject) {
        var self = this;
        this.preShow();
    }
});