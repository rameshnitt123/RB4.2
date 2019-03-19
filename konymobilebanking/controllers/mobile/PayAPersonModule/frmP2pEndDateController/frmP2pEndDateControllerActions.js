define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_f75d0820638c424b8f79a6657a25866e: function AS_BarButtonItem_f75d0820638c424b8f79a6657a25866e(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
    },
    /** init defined for frmP2pEndDate **/
    AS_Form_a1a41b6ef36b44d0a8f2c0b21a8d9608: function AS_Form_a1a41b6ef36b44d0a8f2c0b21a8d9608(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmP2pEndDate **/
    AS_Form_i0eaf662b4644a01b6dd7e9156a7d60f: function AS_Form_i0eaf662b4644a01b6dd7e9156a7d60f(eventobject) {
        var self = this;
        this.preShow();
    }
});