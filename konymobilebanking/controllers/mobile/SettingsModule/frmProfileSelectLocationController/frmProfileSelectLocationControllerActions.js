define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_b560938c6c834369874066972cb8074a: function AS_BarButtonItem_b560938c6c834369874066972cb8074a(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    },
    /** init defined for frmProfileSelectLocation **/
    AS_Form_i6dc48673b114d1cbf0dbc4e3dececa7: function AS_Form_i6dc48673b114d1cbf0dbc4e3dececa7(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmProfileSelectLocation **/
    AS_Form_d1a85d2d1cf84c298ce66bfc409ef097: function AS_Form_d1a85d2d1cf84c298ce66bfc409ef097(eventobject) {
        var self = this;
        this.preShow();
    }
});