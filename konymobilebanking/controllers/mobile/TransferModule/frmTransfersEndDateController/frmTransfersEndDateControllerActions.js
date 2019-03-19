define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnContinue **/
    AS_Button_ebf2806e210d4206ab5ec3a7d6859b5d: function AS_Button_ebf2806e210d4206ab5ec3a7d6859b5d(eventobject) {
        var self = this;
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transMod.presentationController.commonFunctionForNavigation("frmTransferConfirmation");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_d27a47509d6c47e2a5d401f557d74c88: function AS_BarButtonItem_d27a47509d6c47e2a5d401f557d74c88(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    /** init defined for frmTransfersEndDate **/
    AS_Form_jdffaabd6454467b9dfa318600496092: function AS_Form_jdffaabd6454467b9dfa318600496092(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmTransfersEndDate **/
    AS_Form_ib2f771f2e6344f99b50fe84f9b16250: function AS_Form_ib2f771f2e6344f99b50fe84f9b16250(eventobject) {
        var self = this;
        this.preShow();
    }
});