define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_faa2444f91804584885fc8c7405c70bb: function AS_BarButtonItem_faa2444f91804584885fc8c7405c70bb(eventobject) {
        var self = this;
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        transferModule.presentationController.cancelCommon();
    },
    /** init defined for frmAlertFrequency **/
    AS_Form_hf7a73e8dc454f2b86e60c78a6be97ff: function AS_Form_hf7a73e8dc454f2b86e60c78a6be97ff(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmAlertFrequency **/
    AS_Form_e5910503c6b8421ab45846123556e640: function AS_Form_e5910503c6b8421ab45846123556e640(eventobject) {
        var self = this;
        this.preShow();
    }
});