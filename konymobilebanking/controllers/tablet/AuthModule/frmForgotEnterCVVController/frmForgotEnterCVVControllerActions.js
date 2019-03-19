define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnOne **/
    AS_Button_e6cf7b3927394268a0394adde3870a87: function AS_Button_e6cf7b3927394268a0394adde3870a87(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    /** onClick defined for btnTwo **/
    AS_Button_a45c66f51eb940cebfc59887c3a7110d: function AS_Button_a45c66f51eb940cebfc59887c3a7110d(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    /** onClick defined for btnThree **/
    AS_Button_e2699d4115c64e0db9fe6dcf22a2e111: function AS_Button_e2699d4115c64e0db9fe6dcf22a2e111(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    /** onClick defined for btnFour **/
    AS_Button_c83d539766754417af1a24c3adda0961: function AS_Button_c83d539766754417af1a24c3adda0961(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    /** onClick defined for btnFive **/
    AS_Button_cec69249bb754558a2a490af2eb105d9: function AS_Button_cec69249bb754558a2a490af2eb105d9(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    /** onClick defined for btnSix **/
    AS_Button_bf28a6e3592445819aae1672dae119fd: function AS_Button_bf28a6e3592445819aae1672dae119fd(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    /** onClick defined for btnSeven **/
    AS_Button_jc3899c00386473ea05ae5abc79d3923: function AS_Button_jc3899c00386473ea05ae5abc79d3923(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    /** onClick defined for btnEight **/
    AS_Button_f7a9a35fe11e471192d82839c48dc769: function AS_Button_f7a9a35fe11e471192d82839c48dc769(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    /** onClick defined for btnNine **/
    AS_Button_ae437f68113f4c60becc90b613c2fd09: function AS_Button_ae437f68113f4c60becc90b613c2fd09(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    /** onClick defined for btnZero **/
    AS_Button_c5db0290e5b24e4aac7098e61a4c5cda: function AS_Button_c5db0290e5b24e4aac7098e61a4c5cda(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    /** onTouchEnd defined for imgClearKeypad **/
    AS_Image_f024775b149f4d379040d05b6918c3d3: function AS_Image_f024775b149f4d379040d05b6918c3d3(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_be3d250cfc354b1a8e743c630c3fb302: function AS_BarButtonItem_be3d250cfc354b1a8e743c630c3fb302(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** init defined for frmForgotEnterCVV **/
    AS_Form_bb880c8c17fd41abbeb1840b02047d9f: function AS_Form_bb880c8c17fd41abbeb1840b02047d9f(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmForgotEnterCVV **/
    AS_Form_efd1b188a11b45a8af265ea17a57204e: function AS_Form_efd1b188a11b45a8af265ea17a57204e(eventobject) {
        var self = this;
        this.callOnPreShow();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_g2226cc7e1924937a3d5e2bb341253c9: function AS_BarButtonItem_g2226cc7e1924937a3d5e2bb341253c9(eventobject) {
        var self = this;
        return self.goBack.call(this);
    }
});