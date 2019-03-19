define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_e07bb32aa59e465d9b70924b310a0211: function AS_FlexContainer_e07bb32aa59e465d9b70924b310a0211(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for btnRight **/
    AS_Button_cfa169f9a4554ffe95e1d60adb4f2c4c: function AS_Button_cfa169f9a4554ffe95e1d60adb4f2c4c(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_f9e23803e9ac44eaafc26ba873ce2b46: function AS_BarButtonItem_f9e23803e9ac44eaafc26ba873ce2b46(eventobject) {
        var self = this;
        return self.readCountryCodeFromForm.call(this);
    },
    /** init defined for frmManageTravelCountryCode **/
    AS_Form_gb86e2e0bd5e4609ad9c40c3614417ab: function AS_Form_gb86e2e0bd5e4609ad9c40c3614417ab(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    /** preShow defined for frmManageTravelCountryCode **/
    AS_Form_c16be9d07d6a4e2ea4ddbeaf3910d4f0: function AS_Form_c16be9d07d6a4e2ea4ddbeaf3910d4f0(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});