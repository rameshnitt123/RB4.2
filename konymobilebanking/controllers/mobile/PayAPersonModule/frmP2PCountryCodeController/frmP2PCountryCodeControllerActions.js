define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_b215bf9b26784d75b8f81af736413d83: function AS_FlexContainer_b215bf9b26784d75b8f81af736413d83(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for btnRight **/
    AS_Button_c70db0fe67a34a31b574fabe559fd0f8: function AS_Button_c70db0fe67a34a31b574fabe559fd0f8(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_cb307a445d0e4106b176baad7baf5b15: function AS_BarButtonItem_cb307a445d0e4106b176baad7baf5b15(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** init defined for frmP2PCountryCode **/
    AS_Form_i50e74e27b4443518a6fa1a6042f44d9: function AS_Form_i50e74e27b4443518a6fa1a6042f44d9(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmP2PCountryCode **/
    AS_Form_a90950dd1e75460aaf86c14b0db2e74f: function AS_Form_a90950dd1e75460aaf86c14b0db2e74f(eventobject) {
        var self = this;
        this.preShow();
    }
});