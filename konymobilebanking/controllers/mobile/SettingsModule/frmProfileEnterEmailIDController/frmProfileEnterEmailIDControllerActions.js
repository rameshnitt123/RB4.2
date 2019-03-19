define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_d5a6d961a59b48929a9228c1ea1ce532: function AS_BarButtonItem_d5a6d961a59b48929a9228c1ea1ce532(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    },
    /** init defined for frmProfileEnterEmailID **/
    AS_Form_f5d6a75c72214cb4b8bd11b0b45d0ea0: function AS_Form_f5d6a75c72214cb4b8bd11b0b45d0ea0(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmProfileEnterEmailID **/
    AS_Form_fb12776f37484c739844e1fe1098cb22: function AS_Form_fb12776f37484c739844e1fe1098cb22(eventobject) {
        var self = this;
        this.frmEnrollLAstNamePreShow();
    }
});