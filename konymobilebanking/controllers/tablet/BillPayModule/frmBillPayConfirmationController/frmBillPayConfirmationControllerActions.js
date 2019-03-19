define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnContinue **/
    AS_Button_ge0deae6ffe946f8b1f9b46982de8892: function AS_Button_ge0deae6ffe946f8b1f9b46982de8892(eventobject) {
        var self = this;
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.commonFunctionForNavigation("frmBillPay");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_e2aa5ba356a84fe08f8f7ceb58890333: function AS_BarButtonItem_e2aa5ba356a84fe08f8f7ceb58890333(eventobject) {
        var self = this;
        this.navigateBack();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_jb03afb69af14284b160960799d429b3: function AS_BarButtonItem_jb03afb69af14284b160960799d429b3(eventobject) {
        var self = this;
        return self.handleCancelAction.call(this);
    },
    /** init defined for frmBillPayConfirmation **/
    AS_Form_e43074e0d9b44f48b97d59814c18887e: function AS_Form_e43074e0d9b44f48b97d59814c18887e(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    /** preShow defined for frmBillPayConfirmation **/
    AS_Form_f01f320e19bf4d5eb717be5de03fadd8: function AS_Form_f01f320e19bf4d5eb717be5de03fadd8(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});