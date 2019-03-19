define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnContinue **/
    AS_Button_fa03b6343e3e4ec4a5bff951d6aa6af8: function AS_Button_fa03b6343e3e4ec4a5bff951d6aa6af8(eventobject) {
        var self = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.commonFunctionForNavigation("frmBillPayConfirmation");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_cd7b01110faa4cbdad23ba82d548e2f7: function AS_BarButtonItem_cd7b01110faa4cbdad23ba82d548e2f7(eventobject) {
        var self = this;
        this.goBackToBillPay();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_i362b0c7c45640bd96a6801cf430ec5f: function AS_BarButtonItem_i362b0c7c45640bd96a6801cf430ec5f(eventobject) {
        var self = this;
        this.handleCancelAction();
    },
    /** init defined for frmBillPayStartDate **/
    AS_Form_gc397addb91b4490a46191fb24f5e05f: function AS_Form_gc397addb91b4490a46191fb24f5e05f(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    /** preShow defined for frmBillPayStartDate **/
    AS_Form_i173ea5685f64485b7de2f8541452327: function AS_Form_i173ea5685f64485b7de2f8541452327(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});