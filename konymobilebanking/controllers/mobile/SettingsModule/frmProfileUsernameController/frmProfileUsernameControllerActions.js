define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_h8046b831e4340c3b185e4dd7e6455f9: function AS_BarButtonItem_h8046b831e4340c3b185e4dd7e6455f9(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
    },
    /** init defined for frmProfileUsername **/
    AS_Form_e3c18c660402470786e9e884bc504ad5: function AS_Form_e3c18c660402470786e9e884bc504ad5(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmProfileUsername **/
    AS_Form_ba50b00b7a7441c4b1ef72c5ff21ffad: function AS_Form_ba50b00b7a7441c4b1ef72c5ff21ffad(eventobject) {
        var self = this;
        this.frmEnrollLAstNamePreShow();
    }
});