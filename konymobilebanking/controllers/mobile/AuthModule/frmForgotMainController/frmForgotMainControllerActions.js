define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_e0bc99d1d27441c2b6966a1951462ea1: function AS_FlexContainer_e0bc99d1d27441c2b6966a1951462ea1(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_g319e0839beb441083d27d4b6f63453f: function AS_BarButtonItem_g319e0839beb441083d27d4b6f63453f(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** init defined for frmForgotMain **/
    AS_Form_c3bb9f3b2d0c4bcc9c94fef6b64cc1b1: function AS_Form_c3bb9f3b2d0c4bcc9c94fef6b64cc1b1(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmForgotMain **/
    AS_Form_e69bee8d00d0418ca365257a1fa7d2e8: function AS_Form_e69bee8d00d0418ca365257a1fa7d2e8(eventobject) {
        var self = this;
        this.preShow();
    }
});