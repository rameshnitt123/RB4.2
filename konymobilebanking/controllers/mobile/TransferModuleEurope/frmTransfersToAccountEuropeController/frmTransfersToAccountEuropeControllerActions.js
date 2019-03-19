define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_c4b25eb5d2f9417198a943f3da548521: function AS_FlexContainer_c4b25eb5d2f9417198a943f3da548521(eventobject) {
        var self = this;
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transMod.presentationController.commonFunctionForNavigation("frmTransactionMode");
    },
    /** onRowClick defined for segAccounts **/
    AS_Segment_b900b6c14d074c85a9759a46aac8f5bc: function AS_Segment_b900b6c14d074c85a9759a46aac8f5bc(eventobject, sectionNumber, rowNumber) {
        var self = this;
        var ntf = new kony.mvc.Navigation("TransferModuleEurope/frmTransferAmountEurope");
        ntf.navigate();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_c5f2fd79d433482fb530200ddb09e3dc: function AS_BarButtonItem_c5f2fd79d433482fb530200ddb09e3dc(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    /** preShow defined for frmTransfersToAccountEurope **/
    AS_Form_h9341b312f3f4fedbc0857b76b7167cd: function AS_Form_h9341b312f3f4fedbc0857b76b7167cd(eventobject) {
        var self = this;
        this.preShow();
    }
});