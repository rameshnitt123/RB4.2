define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_bb75c69733284ae78d3c9a875e6aeebf: function AS_BarButtonItem_bb75c69733284ae78d3c9a875e6aeebf(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    },
    /** preShow defined for frmProfileCountry **/
    AS_Form_a9209fa9f99046eb92df436f301c697c: function AS_Form_a9209fa9f99046eb92df436f301c697c(eventobject) {
        var self = this;
        this.preShow();
    }
});