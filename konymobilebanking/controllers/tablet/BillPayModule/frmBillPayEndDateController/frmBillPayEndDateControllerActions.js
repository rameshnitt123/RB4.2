define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnContinue **/
    AS_Button_a4386fd49e334920a4800a78bcb34d37: function AS_Button_a4386fd49e334920a4800a78bcb34d37(eventobject) {
        var self = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.commonFunctionForNavigation("frmBillPayConfirmation");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_f7f3a50de49143bf91b38288048d666a: function AS_BarButtonItem_f7f3a50de49143bf91b38288048d666a(eventobject) {
        var self = this;
        this.navigateBack();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_h12caaa7372849489db14217d4701fed: function AS_BarButtonItem_h12caaa7372849489db14217d4701fed(eventobject) {
        var self = this;
        this.handleCancelAction();
    },
    /** init defined for frmBillPayEndDate **/
    AS_Form_j0949c5efd2a416d9f351d072caed9cd: function AS_Form_j0949c5efd2a416d9f351d072caed9cd(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    /** preShow defined for frmBillPayEndDate **/
    AS_Form_ee56095bd6b84a7aade460127e267c70: function AS_Form_ee56095bd6b84a7aade460127e267c70(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});