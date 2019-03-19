define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_ff1526e9693f4d208c083bd109877a96: function AS_BarButtonItem_ff1526e9693f4d208c083bd109877a96(eventobject) {
        var self = this;
        this.goBack();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_c89b7d8f4bd349a6a4349149729b53fe: function AS_BarButtonItem_c89b7d8f4bd349a6a4349149729b53fe(eventobject) {
        var self = this;
        var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
        messagesMod.presentationController.commonFunctionForNavigation("frmMessages");
    },
    /** init defined for frmNewMessageCategory **/
    AS_Form_c6f51c93c8a74f7d81299b23583c4ba7: function AS_Form_c6f51c93c8a74f7d81299b23583c4ba7(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmNewMessageCategory **/
    AS_Form_bf88de0f493a4ddfb98ff2fc8d9da465: function AS_Form_bf88de0f493a4ddfb98ff2fc8d9da465(eventobject) {
        var self = this;
        this.frmMessagesCategoryPreShow();
    }
});