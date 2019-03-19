define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRight **/
    AS_Button_gf3ed60b012241e891cfa9369d7cc22c: function AS_Button_gf3ed60b012241e891cfa9369d7cc22c(eventobject) {
        var self = this;
        var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_f71234a8c5f74627a08fdec29b396260: function AS_BarButtonItem_f71234a8c5f74627a08fdec29b396260(eventobject) {
        var self = this;
        this.onClickCancel();
    },
    /** init defined for frmEnrollSecurityCheck **/
    AS_Form_a6c2f11db0e24c63930bec97a7a957fe: function AS_Form_a6c2f11db0e24c63930bec97a7a957fe(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmEnrollSecurityCheck **/
    AS_Form_d3e22f232a4447c8aad8b7ddd9de3b15: function AS_Form_d3e22f232a4447c8aad8b7ddd9de3b15(eventobject) {
        var self = this;
        this.frmSecurityCheckPreShow();
    }
});