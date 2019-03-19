define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_c517a825eadb4d838da5c367f3a93ee1: function AS_FlexContainer_c517a825eadb4d838da5c367f3a93ee1(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for btnOne **/
    AS_Button_a12285c762cf412d9f6102a988611213: function AS_Button_a12285c762cf412d9f6102a988611213(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    /** onClick defined for btnTwo **/
    AS_Button_j1452105f35d4dd4bcfe9c63743aedf9: function AS_Button_j1452105f35d4dd4bcfe9c63743aedf9(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    /** onClick defined for btnThree **/
    AS_Button_f1d09ef398934f4bbb8845ad69b59fce: function AS_Button_f1d09ef398934f4bbb8845ad69b59fce(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    /** onClick defined for btnFour **/
    AS_Button_c923dc19a9774630809dbf1eac84ef77: function AS_Button_c923dc19a9774630809dbf1eac84ef77(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    /** onClick defined for btnFive **/
    AS_Button_e1f1c41fe7d44867a920c07a950f3919: function AS_Button_e1f1c41fe7d44867a920c07a950f3919(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    /** onClick defined for btnSix **/
    AS_Button_a1023abf0b4c4cb0a3ef0dc077d5beac: function AS_Button_a1023abf0b4c4cb0a3ef0dc077d5beac(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    /** onClick defined for btnSeven **/
    AS_Button_d8b909fa79c44a4091cf79223208f2ec: function AS_Button_d8b909fa79c44a4091cf79223208f2ec(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    /** onClick defined for btnEight **/
    AS_Button_aab545f81a1c4f47affe37a4cdc55bee: function AS_Button_aab545f81a1c4f47affe37a4cdc55bee(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    /** onClick defined for btnNine **/
    AS_Button_iefb8edcfed943aca43b48792841ff2f: function AS_Button_iefb8edcfed943aca43b48792841ff2f(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    /** onClick defined for btnZero **/
    AS_Button_c5e7351752814e16b831be1813834fb1: function AS_Button_c5e7351752814e16b831be1813834fb1(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    /** onTouchEnd defined for imgMaskUnmask **/
    AS_Image_c27ce138468443439c3ff0be229242d0: function AS_Image_c27ce138468443439c3ff0be229242d0(eventobject, x, y) {
        var self = this;
        this.maskUnmaskPassword();
    },
    /** onTextChange defined for txtReEnterPassword **/
    AS_TextField_cd739bc8adc341698cd73d7ffa2d3773: function AS_TextField_cd739bc8adc341698cd73d7ffa2d3773(eventobject, changedtext) {
        var self = this;
        this.matchPasswords();
    },
    /** onClick defined for btnUpdatePassword **/
    AS_Button_c1d6d18914744401b3b59984194f25f6: function AS_Button_c1d6d18914744401b3b59984194f25f6(eventobject) {
        var self = this;
        this.updatePasswordAction();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_j8bf0d4c0a9c411ab014bb76eef85901: function AS_BarButtonItem_j8bf0d4c0a9c411ab014bb76eef85901(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** preShow defined for frmForgot **/
    AS_Form_d5fb87ad5e294c5bbdf2cf31bc616005: function AS_Form_d5fb87ad5e294c5bbdf2cf31bc616005(eventobject) {
        var self = this;
        this.preShow();
    }
});