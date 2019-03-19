define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_fe5f601db62545dda4ec64a24c9318e6: function AS_BarButtonItem_fe5f601db62545dda4ec64a24c9318e6(eventobject) {
        var self = this;
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        transferModule.presentationController.cancelCommon();
    },
    /** init defined for frmWireTransferCurrency **/
    AS_Form_cb8af18e98b7464e94126fe38538862f: function AS_Form_cb8af18e98b7464e94126fe38538862f(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmWireTransferCurrency **/
    AS_Form_d93ef22042924fa2865aa4d0b5c9bd63: function AS_Form_d93ef22042924fa2865aa4d0b5c9bd63(eventobject) {
        var self = this;
        this.preShow();
    }
});