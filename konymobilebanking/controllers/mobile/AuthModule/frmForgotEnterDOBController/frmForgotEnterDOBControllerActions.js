define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnOne **/
    AS_Button_i7f9f5abb3664e5fb694af8feb4212a6: function AS_Button_i7f9f5abb3664e5fb694af8feb4212a6(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    /** onClick defined for btnTwo **/
    AS_Button_h3ea77cf91fc4f4d9ff45deb3685f828: function AS_Button_h3ea77cf91fc4f4d9ff45deb3685f828(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    /** onClick defined for btnThree **/
    AS_Button_i93a76d23b8647f791038f00a879241a: function AS_Button_i93a76d23b8647f791038f00a879241a(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    /** onClick defined for btnFour **/
    AS_Button_f1671d383324483c86104e017fa68a98: function AS_Button_f1671d383324483c86104e017fa68a98(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    /** onClick defined for btnSix **/
    AS_Button_a0158c26af96430caa4ed3bfd9e600dd: function AS_Button_a0158c26af96430caa4ed3bfd9e600dd(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    /** onClick defined for btnSeven **/
    AS_Button_ie3bcc135a944dd8baa8de8a0961937b: function AS_Button_ie3bcc135a944dd8baa8de8a0961937b(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    /** onClick defined for btnEight **/
    AS_Button_d995428196c94d1992d34e7680ead2d7: function AS_Button_d995428196c94d1992d34e7680ead2d7(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    /** onClick defined for btnNine **/
    AS_Button_ee1f4c4192904e4f934349eb25ff3430: function AS_Button_ee1f4c4192904e4f934349eb25ff3430(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    /** onClick defined for btnZero **/
    AS_Button_jd2f9ffdd6924b03bb0175998407e8d3: function AS_Button_jd2f9ffdd6924b03bb0175998407e8d3(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    /** onTouchEnd defined for imgClearKeypad **/
    AS_Image_b8275a188bb543bda67ceee35f4a8969: function AS_Image_b8275a188bb543bda67ceee35f4a8969(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_f392eaa783094c9386e76dffed39a3e1: function AS_FlexContainer_f392eaa783094c9386e76dffed39a3e1(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmForgotEnterSSN");
    },
    /** onClick defined for btnFive **/
    AS_Button_jeaf1c244412436086fe88aca660028c: function AS_Button_jeaf1c244412436086fe88aca660028c(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_f9d5801cb8764b678861b34f27658253: function AS_BarButtonItem_f9d5801cb8764b678861b34f27658253(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** init defined for frmForgotEnterDOB **/
    AS_Form_f400c071ec4e44898268b8d4bb73f98d: function AS_Form_f400c071ec4e44898268b8d4bb73f98d(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmForgotEnterDOB **/
    AS_Form_i727c94db9924ff1910384bdcd323404: function AS_Form_i727c94db9924ff1910384bdcd323404(eventobject) {
        var self = this;
        this.preShow();
    }
});