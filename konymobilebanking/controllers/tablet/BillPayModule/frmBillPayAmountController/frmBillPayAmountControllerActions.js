define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnOne **/
    AS_Button_d08d421b4ec641b189457ac656e1e717: function AS_Button_d08d421b4ec641b189457ac656e1e717(eventobject) {
        var self = this;
        this.setKeypadChar('1');
    },
    /** onClick defined for btnTwo **/
    AS_Button_dc360d6640914ad8829b1ae24b1c29ab: function AS_Button_dc360d6640914ad8829b1ae24b1c29ab(eventobject) {
        var self = this;
        this.setKeypadChar('2');
    },
    /** onClick defined for btnThree **/
    AS_Button_j221b9be114347e0accdbb66db78ca30: function AS_Button_j221b9be114347e0accdbb66db78ca30(eventobject) {
        var self = this;
        this.setKeypadChar('3');
    },
    /** onClick defined for btnFour **/
    AS_Button_f4367375b74846dc9b8d5753944065d3: function AS_Button_f4367375b74846dc9b8d5753944065d3(eventobject) {
        var self = this;
        this.setKeypadChar('4');
    },
    /** onClick defined for btnFive **/
    AS_Button_a2a1f007bdea4674bb000976ffeb7bba: function AS_Button_a2a1f007bdea4674bb000976ffeb7bba(eventobject) {
        var self = this;
        this.setKeypadChar('5');
    },
    /** onClick defined for btnSix **/
    AS_Button_a1d8caa121074a488fac1b808241d83e: function AS_Button_a1d8caa121074a488fac1b808241d83e(eventobject) {
        var self = this;
        this.setKeypadChar('6');
    },
    /** onClick defined for btnSeven **/
    AS_Button_d40a54522019459385de2b1dbb41f2ea: function AS_Button_d40a54522019459385de2b1dbb41f2ea(eventobject) {
        var self = this;
        this.setKeypadChar('7');
    },
    /** onClick defined for btnEight **/
    AS_Button_de75af7bcc8e477d8076bf09e23d9d76: function AS_Button_de75af7bcc8e477d8076bf09e23d9d76(eventobject) {
        var self = this;
        this.setKeypadChar('8');
    },
    /** onClick defined for btnNine **/
    AS_Button_d6ae9d38ebf6463f8a5895367f60d63e: function AS_Button_d6ae9d38ebf6463f8a5895367f60d63e(eventobject) {
        var self = this;
        this.setKeypadChar('9');
    },
    /** onClick defined for btnZero **/
    AS_Button_f7ac3860cdde417f913bb874906b7d73: function AS_Button_f7ac3860cdde417f913bb874906b7d73(eventobject) {
        var self = this;
        this.setKeypadChar('0');
    },
    /** onTouchEnd defined for imgClearKeypad **/
    AS_Image_gbfd60a34ab747b5b0d42b72adf82233: function AS_Image_gbfd60a34ab747b5b0d42b72adf82233(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    },
    /** onClick defined for btnDot **/
    AS_Button_g87ef8c8ec014af7b6576a697b7b1d98: function AS_Button_g87ef8c8ec014af7b6576a697b7b1d98(eventobject) {
        var self = this;
        this.setKeypadChar('.');
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_f624815019ed475eac60822190a7396e: function AS_BarButtonItem_f624815019ed475eac60822190a7396e(eventobject) {
        var self = this;
        this.navigateBack();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_b7eb602c42cb457bb2ea9540f3d1f847: function AS_BarButtonItem_b7eb602c42cb457bb2ea9540f3d1f847(eventobject) {
        var self = this;
        return self.handleCancelAction.call(this);
    },
    /** init defined for frmBillPayAmount **/
    AS_Form_b2dbd99a8bed4928b736ca79643c55b8: function AS_Form_b2dbd99a8bed4928b736ca79643c55b8(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    /** preShow defined for frmBillPayAmount **/
    AS_Form_ff2730088464487ea277d72f0b05ad5e: function AS_Form_ff2730088464487ea277d72f0b05ad5e(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});