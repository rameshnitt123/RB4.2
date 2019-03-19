define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_i5861f732f804a89b4535d13638a4043: function AS_BarButtonItem_i5861f732f804a89b4535d13638a4043(eventobject) {
        var self = this;
        var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transferMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** init defined for frmManageRecipientType **/
    AS_Form_a6f1e492672e4fa0955dababe42b3820: function AS_Form_a6f1e492672e4fa0955dababe42b3820(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmManageRecipientType **/
    AS_Form_e8d715779c7d425da7bcfc89d7b0716e: function AS_Form_e8d715779c7d425da7bcfc89d7b0716e(eventobject) {
        var self = this;
        this.preShow();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_bc4a56a9c6ca4c8f9dc996860c8f122c: function AS_BarButtonItem_bc4a56a9c6ca4c8f9dc996860c8f122c(eventobject) {
        var self = this;
        return self.navigateBack.call(this);
    }
});