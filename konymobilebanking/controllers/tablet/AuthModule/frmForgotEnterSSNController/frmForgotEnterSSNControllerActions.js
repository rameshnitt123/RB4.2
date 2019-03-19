define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnOne **/
    AS_Button_f401730a938b492fbb7decf37a96d517: function AS_Button_f401730a938b492fbb7decf37a96d517(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    /** onClick defined for btnTwo **/
    AS_Button_d8f0da2237014e86bd999b0d70b6eac6: function AS_Button_d8f0da2237014e86bd999b0d70b6eac6(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    /** onClick defined for btnThree **/
    AS_Button_e92f863d07104dabadca9f63dc646960: function AS_Button_e92f863d07104dabadca9f63dc646960(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    /** onClick defined for btnFour **/
    AS_Button_be7a8bf35b7c419fb012ae1f0c1b94bc: function AS_Button_be7a8bf35b7c419fb012ae1f0c1b94bc(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    /** onClick defined for btnFive **/
    AS_Button_f32bb029b0c248c4a8183d13d19063f4: function AS_Button_f32bb029b0c248c4a8183d13d19063f4(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    /** onClick defined for btnSix **/
    AS_Button_adbb5413912c43fd96a55b05134cd191: function AS_Button_adbb5413912c43fd96a55b05134cd191(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    /** onClick defined for btnSeven **/
    AS_Button_dfeda88dcb7044058c5069e2c9a445e8: function AS_Button_dfeda88dcb7044058c5069e2c9a445e8(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    /** onClick defined for btnEight **/
    AS_Button_b679a866637c463fbf08ad434db82336: function AS_Button_b679a866637c463fbf08ad434db82336(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    /** onClick defined for btnNine **/
    AS_Button_h48ee9ab8f994a829bace8545a42fa36: function AS_Button_h48ee9ab8f994a829bace8545a42fa36(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    /** onClick defined for btnZero **/
    AS_Button_d04413ed309b42f9ab6dbeb97f66f61f: function AS_Button_d04413ed309b42f9ab6dbeb97f66f61f(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    /** onTouchEnd defined for imgClearKeypad **/
    AS_Image_bbf73b0708c64847873af88a6ad51195: function AS_Image_bbf73b0708c64847873af88a6ad51195(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_a7b154a580d7498eb758a684d13e1fd5: function AS_BarButtonItem_a7b154a580d7498eb758a684d13e1fd5(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** init defined for frmForgotEnterSSN **/
    AS_Form_c59454e8e2d04689b29718c864b46a92: function AS_Form_c59454e8e2d04689b29718c864b46a92(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmForgotEnterSSN **/
    AS_Form_d83609e23eb14394b1c72d1465682ea6: function AS_Form_d83609e23eb14394b1c72d1465682ea6(eventobject) {
        var self = this;
        this.callOnPreShow();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_e7bedfb6d1124b77aea86299a4250118: function AS_BarButtonItem_e7bedfb6d1124b77aea86299a4250118(eventobject) {
        var self = this;
        return self.goBack.call(this);
    }
});