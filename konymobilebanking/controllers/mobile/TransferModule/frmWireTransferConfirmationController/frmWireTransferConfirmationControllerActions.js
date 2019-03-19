define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnContinue **/
    AS_Button_b1e0cc59c7a24e299d887552e0c022f9: function AS_Button_b1e0cc59c7a24e299d887552e0c022f9(eventobject) {
        var self = this;
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_ed08cb6bb48a4ea7a0f9c76004ba5755: function AS_BarButtonItem_ed08cb6bb48a4ea7a0f9c76004ba5755(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    /** init defined for frmWireTransferConfirmation **/
    AS_Form_f262a437ea264c089930a51dba485d1c: function AS_Form_f262a437ea264c089930a51dba485d1c(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmWireTransferConfirmation **/
    AS_Form_a5d2a988d28942ca921fc1d290ef6a1a: function AS_Form_a5d2a988d28942ca921fc1d290ef6a1a(eventobject) {
        var self = this;
        this.preShow();
    }
});