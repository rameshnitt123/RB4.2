define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_g7a4ac510d724900962ab8a7a740cd6d: function AS_FlexContainer_g7a4ac510d724900962ab8a7a740cd6d(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmForgotMain");
    },
    /** onClick defined for btnVerify **/
    AS_Button_df499898d2f9402c9710088a9d563164: function AS_Button_df499898d2f9402c9710088a9d563164(eventobject) {
        var self = this;
        this.showCreatePassword();
    },
    /** onClick defined for btnOne **/
    AS_Button_da85512aae1946ab9688fa755a1a2eac: function AS_Button_da85512aae1946ab9688fa755a1a2eac(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    /** onClick defined for btnTwo **/
    AS_Button_bd4616ab9c574cafb4880155a497c120: function AS_Button_bd4616ab9c574cafb4880155a497c120(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    /** onClick defined for btnThree **/
    AS_Button_f8dd5f33727d433eac544aaf34c67921: function AS_Button_f8dd5f33727d433eac544aaf34c67921(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    /** onClick defined for btnFour **/
    AS_Button_dd060757283f46f286a7e3cbf0809323: function AS_Button_dd060757283f46f286a7e3cbf0809323(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    /** onClick defined for btnSix **/
    AS_Button_db2cfa52c55b4832adb14ca9970210d3: function AS_Button_db2cfa52c55b4832adb14ca9970210d3(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    /** onClick defined for btnSeven **/
    AS_Button_e88a653f77bc477da4b10a6d9112a219: function AS_Button_e88a653f77bc477da4b10a6d9112a219(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    /** onClick defined for btnEight **/
    AS_Button_b3e6f07f5fd94af9936d40a4296b3d84: function AS_Button_b3e6f07f5fd94af9936d40a4296b3d84(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    /** onClick defined for btnNine **/
    AS_Button_h764c0886ec04401893d7e1513782888: function AS_Button_h764c0886ec04401893d7e1513782888(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    /** onClick defined for btnZero **/
    AS_Button_i9f4738f679e46ada9a41a0d560981f8: function AS_Button_i9f4738f679e46ada9a41a0d560981f8(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    /** onTouchEnd defined for imgClearKeypad **/
    AS_Image_ab0be93e0f864bd6a58d9525f5194cec: function AS_Image_ab0be93e0f864bd6a58d9525f5194cec(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_c0eea92597a5415bb3c805dfd283f208: function AS_BarButtonItem_c0eea92597a5415bb3c805dfd283f208(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** init defined for frmForgotEnterSecurityCode **/
    AS_Form_a1f66ff33ff94e1ca6a5cff4db952d02: function AS_Form_a1f66ff33ff94e1ca6a5cff4db952d02(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmForgotEnterSecurityCode **/
    AS_Form_c603c682f08e48db816333019842c835: function AS_Form_c603c682f08e48db816333019842c835(eventobject) {
        var self = this;
        this.preShow();
    }
});