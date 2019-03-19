define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_f509d93cdef04dc39b1c75b704de6171: function AS_BarButtonItem_f509d93cdef04dc39b1c75b704de6171(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** preShow defined for frmPreferencesAccountPreview **/
    AS_Form_d2c819a87694474d8440a0cf2c455b80: function AS_Form_d2c819a87694474d8440a0cf2c455b80(eventobject) {
        var self = this;
        this.preShow();
    }
});