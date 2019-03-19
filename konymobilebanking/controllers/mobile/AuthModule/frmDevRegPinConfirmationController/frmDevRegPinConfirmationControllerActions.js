define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRight **/
    AS_Button_f944d9524f59433c88eae0bb6e738dd6: function AS_Button_f944d9524f59433c88eae0bb6e738dd6(eventobject) {
        var self = this;
        this.skipAction();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_f6153e8b70ab49bfbb8745464d42c03b: function AS_BarButtonItem_f6153e8b70ab49bfbb8745464d42c03b(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** init defined for frmDevRegPinConfirmation **/
    AS_Form_f4be0bb2efd246b883fd611c6e4ea1f6: function AS_Form_f4be0bb2efd246b883fd611c6e4ea1f6(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmDevRegPinConfirmation **/
    AS_Form_c6d13dfa91a04513b30dfbd26e1482ef: function AS_Form_c6d13dfa91a04513b30dfbd26e1482ef(eventobject) {
        var self = this;
        this.preShow();
    }
});