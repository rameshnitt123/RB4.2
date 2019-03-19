define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_ca1f2b8ea9c54c959d8014f672e0834e: function AS_BarButtonItem_ca1f2b8ea9c54c959d8014f672e0834e(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
    },
    /** init defined for frmP2pSelectRecipient **/
    AS_Form_fdd83db3f76b455fafaf0a0764970164: function AS_Form_fdd83db3f76b455fafaf0a0764970164(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmP2pSelectRecipient **/
    AS_Form_b5290ee6406a4712a781b4588fd46a8d: function AS_Form_b5290ee6406a4712a781b4588fd46a8d(eventobject) {
        var self = this;
        this.preShow();
    }
});