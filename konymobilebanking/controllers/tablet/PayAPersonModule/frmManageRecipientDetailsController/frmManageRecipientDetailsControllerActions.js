define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_c0f1f1046ae145609164b32e36fe5086: function AS_BarButtonItem_c0f1f1046ae145609164b32e36fe5086(eventobject) {
        var self = this;
        return self.navBack.call(this);
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_b12286345bec41e0a76f048bb3638850: function AS_BarButtonItem_b12286345bec41e0a76f048bb3638850(eventobject) {
        var self = this;
        var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transferMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** init defined for frmManageRecipientDetails **/
    AS_Form_i11101f87af242ccad29a2f1c32dc9c9: function AS_Form_i11101f87af242ccad29a2f1c32dc9c9(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmManageRecipientDetails **/
    AS_Form_b581d1501b3944b8bfbce938acea231e: function AS_Form_b581d1501b3944b8bfbce938acea231e(eventobject) {
        var self = this;
        this.preShow();
    }
});