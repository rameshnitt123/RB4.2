define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnContinue **/
    AS_Button_c1c43725c0a94e619fd05968713eca0e: function AS_Button_c1c43725c0a94e619fd05968713eca0e(eventobject) {
        var self = this;
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transMod.presentationController.commonFunctionForNavigation("frmTransferConfirmation");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_c31fa734fdee40129534f89de3f5a0f4: function AS_BarButtonItem_c31fa734fdee40129534f89de3f5a0f4(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    /** init defined for frmTransfersEndDateEurope **/
    AS_Form_i619b43ed99c4f50952c447759d7e7f7: function AS_Form_i619b43ed99c4f50952c447759d7e7f7(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmTransfersEndDateEurope **/
    AS_Form_ee086ccf0f7b49249bf1d37f3970e8bf: function AS_Form_ee086ccf0f7b49249bf1d37f3970e8bf(eventobject) {
        var self = this;
        this.preShow();
    }
});