define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_dc7ce749473447aeb72359eb5a6ef7cc: function AS_BarButtonItem_dc7ce749473447aeb72359eb5a6ef7cc(eventobject) {
        var self = this;
        var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
        messagesMod.presentationController.commonFunctionForNavigation("frmMessages");
    },
    /** init defined for frmNewMessageCategory **/
    AS_Form_eb337b13e4394beb9f1cafb93d677608: function AS_Form_eb337b13e4394beb9f1cafb93d677608(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmNewMessageCategory **/
    AS_Form_cbea953f9e90436c894e6b25de7c4ea6: function AS_Form_cbea953f9e90436c894e6b25de7c4ea6(eventobject) {
        var self = this;
        this.frmMessagesCategoryPreShow();
    }
});