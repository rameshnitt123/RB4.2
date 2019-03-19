define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_b6a38b969b7941d09eb9dfeada81baf1: function AS_BarButtonItem_b6a38b969b7941d09eb9dfeada81baf1(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** preShow defined for frmPreferencesTouchId **/
    AS_Form_cba77b2ee45b4ed0a03f30d88de63afd: function AS_Form_cba77b2ee45b4ed0a03f30d88de63afd(eventobject) {
        var self = this;
        this.preShow();
    }
});