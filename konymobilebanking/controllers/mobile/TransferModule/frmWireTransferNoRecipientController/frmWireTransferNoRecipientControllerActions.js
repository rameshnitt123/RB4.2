define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnActivate **/
    AS_Button_ec433e71e36548bcac10582eb0fdd07a: function AS_Button_ec433e71e36548bcac10582eb0fdd07a(eventobject) {
        var self = this;
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** onClick defined for btnCancel **/
    AS_Button_h974cabf3df5409b9341c26c127f6926: function AS_Button_h974cabf3df5409b9341c26c127f6926(eventobject) {
        var self = this;
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_af3840e14a5543cc9f1826d7d643ea83: function AS_BarButtonItem_af3840e14a5543cc9f1826d7d643ea83(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    /** init defined for frmWireTransferNoRecipient **/
    AS_Form_c34bdc3ab71c440b8be48f01eb79b11b: function AS_Form_c34bdc3ab71c440b8be48f01eb79b11b(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmWireTransferNoRecipient **/
    AS_Form_fbf31f68f3514304b0a583b56ac1ab57: function AS_Form_fbf31f68f3514304b0a583b56ac1ab57(eventobject) {
        var self = this;
        this.preShow();
    }
});