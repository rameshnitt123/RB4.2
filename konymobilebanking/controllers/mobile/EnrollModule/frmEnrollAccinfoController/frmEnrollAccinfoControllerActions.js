define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRight **/
    AS_Button_af97396e008646d4ad75cc38f42be800: function AS_Button_af97396e008646d4ad75cc38f42be800(eventobject) {
        var self = this;
        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onTouchEnd defined for imgCheck **/
    AS_Image_aa2e6873a24a4784b4adc289b3a1938b: function AS_Image_aa2e6873a24a4784b4adc289b3a1938b(eventobject, x, y) {
        var self = this;
        return self.imgCheckOnClick.call(this);
    },
    /** onClick defined for btnContinueAccountInfo **/
    AS_Button_b5e4b22c81e947139f56a896008a0015: function AS_Button_b5e4b22c81e947139f56a896008a0015(eventobject) {
        var self = this;
        var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmEnrollSignUp");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_ce4a7103147243539244cca95a8b0f03: function AS_BarButtonItem_ce4a7103147243539244cca95a8b0f03(eventobject) {
        var self = this;
        var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmLogin");
    }
});