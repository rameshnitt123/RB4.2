define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_e43bfa1f23624addb70732b551aaebcf: function AS_BarButtonItem_e43bfa1f23624addb70732b551aaebcf(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** init defined for frmP2pStartDate **/
    AS_Form_bfe3dd5789184e1c918189148880f2e3: function AS_Form_bfe3dd5789184e1c918189148880f2e3(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmP2pStartDate **/
    AS_Form_a73e6b9370a34ad1ac6e8fc9a34b0f10: function AS_Form_a73e6b9370a34ad1ac6e8fc9a34b0f10(eventobject) {
        var self = this;
        this.preShow();
    }
});