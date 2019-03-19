define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_b06950baee564179acc312dc1c56e2ac: function AS_BarButtonItem_b06950baee564179acc312dc1c56e2ac(eventobject) {
        var self = this;
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        transferModule.presentationController.cancelCommon();
    },
    /** init defined for frmBillPayStartDate **/
    AS_Form_gdfd9d2a7a604398bf92dbc0e2b08b34: function AS_Form_gdfd9d2a7a604398bf92dbc0e2b08b34(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmBillPayStartDate **/
    AS_Form_c76a20820f7443c39ee99673c949d340: function AS_Form_c76a20820f7443c39ee99673c949d340(eventobject) {
        var self = this;
        this.preShow();
    }
});