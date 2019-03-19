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
    /** onClick defined for btnRight **/
    AS_Button_d18a4b2c7e9d46d1907cc356015b1a67: function AS_Button_d18a4b2c7e9d46d1907cc356015b1a67(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for btnVerifySecCode **/
    AS_Button_bc5d5f43b2bd42a09468a7bcd8aa3aab: function AS_Button_bc5d5f43b2bd42a09468a7bcd8aa3aab(eventobject) {
        var self = this;
        return self.btnVerifyOnClick.call(this);
    },
    /** onClick defined for btnResend **/
    AS_Button_efc40018843848a7ac66eeb30d09a5ae: function AS_Button_efc40018843848a7ac66eeb30d09a5ae(eventobject) {
        var self = this;
        return self.btnResendOnClick.call(this);
    },
    /** onClick defined for flxCheckBox **/
    AS_FlexContainer_db6fb60014a34da8b9ca5177ebc3823e: function AS_FlexContainer_db6fb60014a34da8b9ca5177ebc3823e(eventobject) {
        var self = this;
        return self.flxCheckBoxOnClick.call(this);
    },
    /** onClick defined for btnFive **/
    AS_Button_b3daf730cd9c49bfb4641b44cf12a029: function AS_Button_b3daf730cd9c49bfb4641b44cf12a029(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_a1513db1dafc4e5a86fe742987cca779: function AS_BarButtonItem_a1513db1dafc4e5a86fe742987cca779(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** init defined for frmDevRegSecCode **/
    AS_Form_i124194315294873952f7f093677bbc2: function AS_Form_i124194315294873952f7f093677bbc2(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmDevRegSecCode **/
    AS_Form_g2663c104ed24ff4b82082382db6395d: function AS_Form_g2663c104ed24ff4b82082382db6395d(eventobject) {
        var self = this;
        this.showSecurityCode();
    },
    /** onHide defined for frmDevRegSecCode **/
    AS_Form_a6ab5e0036ee46beb04cff67c1db9e69: function AS_Form_a6ab5e0036ee46beb04cff67c1db9e69(eventobject) {
        var self = this;
        this.onHide();
    }

});