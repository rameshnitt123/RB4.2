define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_jee98f26a98548b8be7d8f589d73a0cf: function AS_BarButtonItem_jee98f26a98548b8be7d8f589d73a0cf(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
    },
    /** init defined for frmP2pDuration **/
    AS_Form_gfdf6088538544468780c7d804b03316: function AS_Form_gfdf6088538544468780c7d804b03316(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmP2pDuration **/
    AS_Form_e1bfac682ef14e79bc7c89438b700d5e: function AS_Form_e1bfac682ef14e79bc7c89438b700d5e(eventobject) {
        var self = this;
        this.preShow();
    }
});