define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_b16fdcc3af0c4b9083bc8f9403d95613: function AS_BarButtonItem_b16fdcc3af0c4b9083bc8f9403d95613(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** preShow defined for frmPreferencesDefaultLogin **/
    AS_Form_b8803554ba3d482a8ded66ba4945fbf9: function AS_Form_b8803554ba3d482a8ded66ba4945fbf9(eventobject) {
        var self = this;
        this.preShow();
    }
});