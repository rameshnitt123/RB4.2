define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_c73fa95c3da54a32a572a37427684690: function AS_BarButtonItem_c73fa95c3da54a32a572a37427684690(eventobject) {
        var self = this;
        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.commonFunctionForNavigation("frmPFMTransactionDetails");
    },
    /** preShow defined for frmPFMEditCategory **/
    AS_Form_d56c50318e3546a2b119cc86b14497e9: function AS_Form_d56c50318e3546a2b119cc86b14497e9(eventobject) {
        var self = this;
        this.preshow();
    }
});