define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_i0a80ddb8cd74cfbb459e49d59a35ea8: function AS_BarButtonItem_i0a80ddb8cd74cfbb459e49d59a35ea8(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    },
    /** init defined for frmProfileContactType **/
    AS_Form_d1243bee5f5743e3a793334ad954e8e2: function AS_Form_d1243bee5f5743e3a793334ad954e8e2(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmProfileContactType **/
    AS_Form_a380f1a7ac3d4fc5bca017a6ed16a15c: function AS_Form_a380f1a7ac3d4fc5bca017a6ed16a15c(eventobject) {
        var self = this;
        this.preShow();
    }
});