define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_h980a03dbef74691b361f427326a8caa: function AS_FlexContainer_h980a03dbef74691b361f427326a8caa(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmForgotMain");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_f3154b51a48d4dc0b1ebf1131442dbb4: function AS_BarButtonItem_f3154b51a48d4dc0b1ebf1131442dbb4(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** init defined for frmForgotSelectMethod **/
    AS_Form_bbb32a4fc1014614a96803915745ed14: function AS_Form_bbb32a4fc1014614a96803915745ed14(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmForgotSelectMethod **/
    AS_Form_jbf0490456984f77ab0e3a39d7bda84f: function AS_Form_jbf0490456984f77ab0e3a39d7bda84f(eventobject) {
        var self = this;
        this.preShow();
    }
});