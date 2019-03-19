define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_de82b28f307e4c9983cc6034d4c3dcde: function AS_BarButtonItem_de82b28f307e4c9983cc6034d4c3dcde(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    },
    /** init defined for frmProfileEditEmails **/
    AS_Form_g7b585ac58064fc4b296330eb8d3fcbc: function AS_Form_g7b585ac58064fc4b296330eb8d3fcbc(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmProfileEditEmails **/
    AS_Form_ifd6db70de3e4756bc7e9bf564846041: function AS_Form_ifd6db70de3e4756bc7e9bf564846041(eventobject) {
        var self = this;
        this.frmPreShow();
    }
});