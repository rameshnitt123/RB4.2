define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnContinue **/
    AS_Button_f597585ec2d54832bebfc81a57520747: function AS_Button_f597585ec2d54832bebfc81a57520747(eventobject) {
        var self = this;
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_h3f9d8a546f24d98b2f06ce9c57bd0ef: function AS_BarButtonItem_h3f9d8a546f24d98b2f06ce9c57bd0ef(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    /** init defined for frmTransferConfirmationEurope **/
    AS_Form_h0b105caa8104d6689dcaa229888b3ee: function AS_Form_h0b105caa8104d6689dcaa229888b3ee(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmTransferConfirmationEurope **/
    AS_Form_e51fe63d83eb47ff878274210b81e45e: function AS_Form_e51fe63d83eb47ff878274210b81e45e(eventobject) {
        var self = this;
        this.preShow();
    }
});