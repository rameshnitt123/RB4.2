define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_c2cc5e4858a64f8d94779441551409bd: function AS_FlexContainer_c2cc5e4858a64f8d94779441551409bd(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for btnRight **/
    AS_Button_jc1a9a82b4d5440893826f6c5e7a7273: function AS_Button_jc1a9a82b4d5440893826f6c5e7a7273(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_d4fef23923cd45b28784f57fb3aa88bb: function AS_BarButtonItem_d4fef23923cd45b28784f57fb3aa88bb(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** init defined for frmSettingsCountryCode **/
    AS_Form_f17f3d85b47c44589217da6c0929bc1c: function AS_Form_f17f3d85b47c44589217da6c0929bc1c(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmSettingsCountryCode **/
    AS_Form_e83b25a4b907412cb99e8bdab708c040: function AS_Form_e83b25a4b907412cb99e8bdab708c040(eventobject) {
        var self = this;
        this.preShow();
    }
});