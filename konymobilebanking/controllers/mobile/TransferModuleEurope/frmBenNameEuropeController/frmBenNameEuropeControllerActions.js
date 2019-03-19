define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_fbc93cc166c2404c92d8630a3408b8ed: function AS_BarButtonItem_fbc93cc166c2404c92d8630a3408b8ed(eventobject) {
        var self = this;
        this.onClickCancel();
    },
    /** preShow defined for frmBenNameEurope **/
    AS_Form_g19cf8f53a0043f28a7710e521a8d929: function AS_Form_g19cf8f53a0043f28a7710e521a8d929(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    /** onClick defined for btnContinue **/
    AS_Button_ea6c7432e1f14920b1b2b11c30c8e5f0: function AS_Button_ea6c7432e1f14920b1b2b11c30c8e5f0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("TransferModuleEurope/frmTransferAmountEurope");
        ntf.navigate();
    }
});