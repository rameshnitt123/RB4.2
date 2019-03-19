define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_gc1ff8a4ab114bd3b4dffe3316a3c550: function AS_FlexContainer_gc1ff8a4ab114bd3b4dffe3316a3c550(eventobject) {
        var self = this;
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transMod.presentationController.commonFunctionForNavigation("frmTransactionMode");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_g619cb229dd843fca9b09dae0fb9d662: function AS_BarButtonItem_g619cb229dd843fca9b09dae0fb9d662(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    /** init defined for frmTransfersToAccount **/
    AS_Form_gc42f9fc3d704fbc87ae30831d0d76bf: function AS_Form_gc42f9fc3d704fbc87ae30831d0d76bf(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmTransfersToAccount **/
    AS_Form_b238148e2057494aa77e863fde7dbc08: function AS_Form_b238148e2057494aa77e863fde7dbc08(eventobject) {
        var self = this;
        this.preShow();
    }
});