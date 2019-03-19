define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_f9886a92de124ad68a3d5a328fdd93a6: function AS_BarButtonItem_f9886a92de124ad68a3d5a328fdd93a6(eventobject) {
        var self = this;
        return self.navBack.call(this);
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_b697205fa1d7422a94748b40df03f90a: function AS_BarButtonItem_b697205fa1d7422a94748b40df03f90a(eventobject) {
        var self = this;
        var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transferMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** init defined for frmManageEditNickName **/
    AS_Form_c3b18cfd67e04d019a42559a5cbf513c: function AS_Form_c3b18cfd67e04d019a42559a5cbf513c(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmManageEditNickName **/
    AS_Form_e353f113b5084d1db0f6ec09b12ffc29: function AS_Form_e353f113b5084d1db0f6ec09b12ffc29(eventobject) {
        var self = this;
        this.preShow();
    }
});