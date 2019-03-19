define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxMakeTransfer **/
    AS_FlexContainer_b4b6ab790dd34ffe84e2191e284e68a7: function AS_FlexContainer_b4b6ab790dd34ffe84e2191e284e68a7(eventobject) {
        var self = this;
        //this.maketransferOnclick();
        // var nav = new kony.mvc.Navigation("frmTransactionModeEurope");
        //     nav.navigate();
        var ntf = new kony.mvc.Navigation("TransferModuleEurope/frmTransactionModeEurope");
        ntf.navigate();
    },
    /** preShow defined for frmTransfersEurope **/
    AS_Form_d6cb32780475421d88701c19dafa45ff: function AS_Form_d6cb32780475421d88701c19dafa45ff(eventobject) {
        var self = this;
        this.preShow();
    },
    /** postShow defined for frmTransfersEurope **/
    AS_Form_eac7310c89cf436eb3373ee9ea84ce87: function AS_Form_eac7310c89cf436eb3373ee9ea84ce87(eventobject) {
        var self = this;
        kony.application.dismissLoadingScreen();
    }
});