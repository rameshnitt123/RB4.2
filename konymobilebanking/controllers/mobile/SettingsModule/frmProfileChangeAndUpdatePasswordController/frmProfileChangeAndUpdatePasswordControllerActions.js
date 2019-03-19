define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_g3fcd8181b0b4648801861e99b7772b0: function AS_BarButtonItem_g3fcd8181b0b4648801861e99b7772b0(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
    },
    /** init defined for frmProfileChangeAndUpdatePassword **/
    AS_Form_f961560a878c4b2fa0d1e06a1d78b14d: function AS_Form_f961560a878c4b2fa0d1e06a1d78b14d(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmProfileChangeAndUpdatePassword **/
    AS_Form_e49a045d18cc4c728064ed4eff072799: function AS_Form_e49a045d18cc4c728064ed4eff072799(eventobject) {
        var self = this;
        this.preShow();
    }
});