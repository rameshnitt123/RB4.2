define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRight **/
    AS_Button_j4fd09b548f54d51bb0108e43eae39be: function AS_Button_j4fd09b548f54d51bb0108e43eae39be(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for btnUpdatePassword **/
    AS_Button_ce03fcc04c4d4378a355dcbaa4497ee0: function AS_Button_ce03fcc04c4d4378a355dcbaa4497ee0(eventobject) {
        var self = this;
        this.updatePasswordAction();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_if1523b5f2dd440e8d6c0d66124f79ef: function AS_BarButtonItem_if1523b5f2dd440e8d6c0d66124f79ef(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** init defined for frmForgotCreatePassword **/
    AS_Form_c2cf6abb111947c08cea3c53589f48c4: function AS_Form_c2cf6abb111947c08cea3c53589f48c4(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmForgotCreatePassword **/
    AS_Form_bf368211a1ed42dda4007a81fa285b1f: function AS_Form_bf368211a1ed42dda4007a81fa285b1f(eventobject) {
        var self = this;
        this.preShow();
    }
});