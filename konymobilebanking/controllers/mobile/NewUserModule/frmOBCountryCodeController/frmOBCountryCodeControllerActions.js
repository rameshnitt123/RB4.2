define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_ee1087ac7e7c4efaaab7be5f1bfe2188: function AS_FlexContainer_ee1087ac7e7c4efaaab7be5f1bfe2188(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for btnRight **/
    AS_Button_gd5d8d89e91f4211aba2977d64880051: function AS_Button_gd5d8d89e91f4211aba2977d64880051(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_d6c29f5332284f669feb143bbed5e800: function AS_BarButtonItem_d6c29f5332284f669feb143bbed5e800(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** init defined for frmOBCountryCode **/
    AS_Form_abf943adea774626bfdaed048faf1c11: function AS_Form_abf943adea774626bfdaed048faf1c11(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmOBCountryCode **/
    AS_Form_b32dbfbe90144b78b89aab2e524d21f3: function AS_Form_b32dbfbe90144b78b89aab2e524d21f3(eventobject) {
        var self = this;
        this.preShow();
    }
});