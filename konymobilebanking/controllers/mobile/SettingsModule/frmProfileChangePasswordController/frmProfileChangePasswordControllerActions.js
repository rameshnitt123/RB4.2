define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_d8dbb4b5cb114269825c215df19140ba: function AS_BarButtonItem_d8dbb4b5cb114269825c215df19140ba(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** init defined for frmProfileChangePassword **/
    AS_Form_aa551331175646db97fc236170a8c44c: function AS_Form_aa551331175646db97fc236170a8c44c(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmProfileChangePassword **/
    AS_Form_h887e5a31486436885548d5189565300: function AS_Form_h887e5a31486436885548d5189565300(eventobject) {
        var self = this;
        this.frmProfileChangePassword();
    }
});