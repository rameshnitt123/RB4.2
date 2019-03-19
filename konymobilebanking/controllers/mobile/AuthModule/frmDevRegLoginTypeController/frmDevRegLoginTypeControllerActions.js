define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRight **/
    AS_Button_f646377db2444d75b2f23087620046e6: function AS_Button_f646377db2444d75b2f23087620046e6(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for btnContinue **/
    AS_Button_ca77482e34f94223856a7804afbaa823: function AS_Button_ca77482e34f94223856a7804afbaa823(eventobject) {
        var self = this;
        return self.btnContinueOnClick.call(this);
    },
    /** onTouchEnd defined for imgSelectUser **/
    AS_Image_e9f89299fd9847a1aa0724611b165426: function AS_Image_e9f89299fd9847a1aa0724611b165426(eventobject, x, y) {
        var self = this;
        return self.imgSelectUserOnTouchEnd.call(this);
    },
    /** onClick defined for flxLoginUserNPass **/
    AS_FlexContainer_db346561f9894d04b1d3c25183e6597e: function AS_FlexContainer_db346561f9894d04b1d3c25183e6597e(eventobject) {
        var self = this;
        return self.imgSelectUserOnTouchEnd.call(this);
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_f8ba76af6bcd4db5bb12e98f7cfc5e2a: function AS_BarButtonItem_f8ba76af6bcd4db5bb12e98f7cfc5e2a(eventobject) {
        var self = this;
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.defaultLoginToAccounts();
    },
    /** init defined for frmDevRegLoginType **/
    AS_Form_ibef816b79794444b35c68fc7e026aec: function AS_Form_ibef816b79794444b35c68fc7e026aec(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmDevRegLoginType **/
    AS_Form_j0a7ccc98cc44ac8a40cde4796eba76d: function AS_Form_j0a7ccc98cc44ac8a40cde4796eba76d(eventobject) {
        var self = this;
        this.frmPreShow();
    }
});