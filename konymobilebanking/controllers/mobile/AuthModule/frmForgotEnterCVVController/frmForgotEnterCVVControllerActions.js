define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_af08ad13aadf45fe88e03af544bdda7a: function AS_FlexContainer_af08ad13aadf45fe88e03af544bdda7a(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmForgot");
    },
    /** onClick defined for btnVerify **/
    AS_Button_c9516f568c5441eaa673de7a216e10e6: function AS_Button_c9516f568c5441eaa673de7a216e10e6(eventobject) {
        var self = this;
        this.showCreatePassword();
    },
    /** onClick defined for btnOne **/
    AS_Button_dbc67333e66f45d89c3049ac85e98f97: function AS_Button_dbc67333e66f45d89c3049ac85e98f97(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    /** onClick defined for btnTwo **/
    AS_Button_d39dcb857a864c7985698776a7804f71: function AS_Button_d39dcb857a864c7985698776a7804f71(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    /** onClick defined for btnThree **/
    AS_Button_c1eaab752ed349a1a78506cfd14a2f86: function AS_Button_c1eaab752ed349a1a78506cfd14a2f86(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    /** onClick defined for btnFour **/
    AS_Button_acb704c8e0e446348baace83f281b28c: function AS_Button_acb704c8e0e446348baace83f281b28c(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    /** onClick defined for btnSix **/
    AS_Button_e072961820894efcb500f617a9b10830: function AS_Button_e072961820894efcb500f617a9b10830(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    /** onClick defined for btnSeven **/
    AS_Button_e3de559a67e94091bf39b6ca95034ed4: function AS_Button_e3de559a67e94091bf39b6ca95034ed4(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    /** onClick defined for btnEight **/
    AS_Button_e91678f1e43a41e2bfe58a001515bd8f: function AS_Button_e91678f1e43a41e2bfe58a001515bd8f(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    /** onClick defined for btnNine **/
    AS_Button_e5d6e53b58a74342bd244381a3945e3c: function AS_Button_e5d6e53b58a74342bd244381a3945e3c(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    /** onClick defined for btnZero **/
    AS_Button_gd47a2c8bacd4e809f9c289a7d560d69: function AS_Button_gd47a2c8bacd4e809f9c289a7d560d69(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    /** onTouchEnd defined for imgClearKeypad **/
    AS_Image_abf10fcff57f4c6da212d36355e3d3f2: function AS_Image_abf10fcff57f4c6da212d36355e3d3f2(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_cb3ef535752e44c4ba228d1a72d67d97: function AS_BarButtonItem_cb3ef535752e44c4ba228d1a72d67d97(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** init defined for frmForgotEnterCVV **/
    AS_Form_b2d8a5f195e34b368821ebc0e8ca83fc: function AS_Form_b2d8a5f195e34b368821ebc0e8ca83fc(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmForgotEnterCVV **/
    AS_Form_d2c7f4009a29481c87789db6c3e95eb4: function AS_Form_d2c7f4009a29481c87789db6c3e95eb4(eventobject) {
        var self = this;
        this.preShow();
    }
});