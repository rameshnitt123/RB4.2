define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_de113e8df31c4efb8e755a2b3a2a65a1: function AS_BarButtonItem_de113e8df31c4efb8e755a2b3a2a65a1(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
    },
    /** init defined for frmProfileChangeUsername **/
    AS_Form_e86c71fa24894f359d56099abc697d18: function AS_Form_e86c71fa24894f359d56099abc697d18(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmProfileChangeUsername **/
    AS_Form_i1902f3db3994f53afc8df1ff6e81309: function AS_Form_i1902f3db3994f53afc8df1ff6e81309(eventobject) {
        var self = this;
        this.frmProfileChangePassword();
    }
});