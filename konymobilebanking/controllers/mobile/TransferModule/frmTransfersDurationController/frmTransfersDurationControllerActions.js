define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_jc5a9d1d3d2e4db4a60d52e2e6bf0f36: function AS_FlexContainer_jc5a9d1d3d2e4db4a60d52e2e6bf0f36(eventobject) {
        var self = this;
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transMod.presentationController.commonFunctionForNavigation("frmTransferFrequency");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_g14b340a503b425791f538816c74fda2: function AS_BarButtonItem_g14b340a503b425791f538816c74fda2(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    /** init defined for frmTransfersDuration **/
    AS_Form_fbc38f2b3fc64c27b644bea6738128f5: function AS_Form_fbc38f2b3fc64c27b644bea6738128f5(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmTransfersDuration **/
    AS_Form_e965c73e2e3340f88d5fd38dbea418d9: function AS_Form_e965c73e2e3340f88d5fd38dbea418d9(eventobject) {
        var self = this;
        this.preShow();
    }
});