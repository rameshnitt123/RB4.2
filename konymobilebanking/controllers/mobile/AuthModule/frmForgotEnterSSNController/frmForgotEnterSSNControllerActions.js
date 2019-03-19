define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_c8f9981c4572412fa03c30f152c7d63e: function AS_FlexContainer_c8f9981c4572412fa03c30f152c7d63e(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for btnRight **/
    AS_Button_b1c723d7333d40f18c346b58d0066d7b: function AS_Button_b1c723d7333d40f18c346b58d0066d7b(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_c322744e8bbb416f95f577fb44a3df56: function AS_BarButtonItem_c322744e8bbb416f95f577fb44a3df56(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** init defined for frmForgotEnterSSN **/
    AS_Form_d44e0690a04a4e72b73051ac557674ef: function AS_Form_d44e0690a04a4e72b73051ac557674ef(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmForgotEnterSSN **/
    AS_Form_j08a833dfea14ad2a5c98aa429f0aa0f: function AS_Form_j08a833dfea14ad2a5c98aa429f0aa0f(eventobject) {
        var self = this;
        this.preShow();
    }
});