define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnContinue **/
    AS_Button_c15d259c814d426ba2df819692d9f154: function AS_Button_c15d259c814d426ba2df819692d9f154(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.commonFunctionForNavigation("frmtransfers");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_ee1c73692d734f07bded3f5e2495e69f: function AS_BarButtonItem_ee1c73692d734f07bded3f5e2495e69f(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
    },
    /** init defined for frmP2pConfirmation **/
    AS_Form_h3b6c0ff8ae4438a8fc59e211f91e8ee: function AS_Form_h3b6c0ff8ae4438a8fc59e211f91e8ee(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmP2pConfirmation **/
    AS_Form_h90f6ed8a41341c0b3b46b2d87234d19: function AS_Form_h90f6ed8a41341c0b3b46b2d87234d19(eventobject) {
        var self = this;
        this.preShow();
    }
});