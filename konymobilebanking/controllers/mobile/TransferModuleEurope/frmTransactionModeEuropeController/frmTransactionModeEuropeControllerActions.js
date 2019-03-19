define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_j05c9146211c45b3bf63d742f121760a: function AS_FlexContainer_j05c9146211c45b3bf63d742f121760a(eventobject) {
        var self = this;
        this.backNavigation();
    },
    /** onRowClick defined for segTransactionMode **/
    AS_Segment_e624688ec7ef4618bddc87551d8385b4: function AS_Segment_e624688ec7ef4618bddc87551d8385b4(eventobject, sectionNumber, rowNumber) {
        var self = this;
        var ntf = new kony.mvc.Navigation("TransferModuleEurope/frmTransfersToAccountEurope");
        ntf.navigate();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_bb2890906d7c4be9ae87fc1a5a9f240a: function AS_BarButtonItem_bb2890906d7c4be9ae87fc1a5a9f240a(eventobject) {
        var self = this;
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
        transMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** init defined for frmTransactionModeEurope **/
    AS_Form_a07e70f22993402cba34dc65df3d3299: function AS_Form_a07e70f22993402cba34dc65df3d3299(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmTransactionModeEurope **/
    AS_Form_g62903915d1c4fde9c243f5a7d89ec97: function AS_Form_g62903915d1c4fde9c243f5a7d89ec97(eventobject) {
        var self = this;
        this.preShow();
    }
});