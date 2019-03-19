define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_c60d9b7973e247c58e94c00e9beae4f4: function AS_BarButtonItem_c60d9b7973e247c58e94c00e9beae4f4(eventobject) {
        var self = this;
        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.commonFunctionForNavigation("frmPFMTransactionDetails");
    },
    /** preShow defined for frmPFMNote **/
    AS_Form_f1620dd876674d358e726f8ac2021b9e: function AS_Form_f1620dd876674d358e726f8ac2021b9e(eventobject) {
        var self = this;
        this.preshow();
    }
});