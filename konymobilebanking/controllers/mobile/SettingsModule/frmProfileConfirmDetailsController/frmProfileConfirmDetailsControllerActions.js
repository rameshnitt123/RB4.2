define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_f22a9ea3c19c4330bdf5b7e333e2a886: function AS_BarButtonItem_f22a9ea3c19c4330bdf5b7e333e2a886(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    },
    /** init defined for frmProfileConfirmDetails **/
    AS_Form_id0439c2d044414cb546bb1d29f1725e: function AS_Form_id0439c2d044414cb546bb1d29f1725e(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmProfileConfirmDetails **/
    AS_Form_feeb946510a64b318acb262bb4490168: function AS_Form_feeb946510a64b318acb262bb4490168(eventobject) {
        var self = this;
        this.frmPreShow();
    }
});