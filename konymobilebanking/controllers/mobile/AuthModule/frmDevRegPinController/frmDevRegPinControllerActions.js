define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRight **/
    AS_Button_a75c17f385f04325b9fbbf6b8aedf8a3: function AS_Button_a75c17f385f04325b9fbbf6b8aedf8a3(eventobject) {
        var self = this;
        this.btnSkipOnClick();
    },
    /** onClick defined for btnNext **/
    AS_Button_c05e5eed34314d15b4e7c55177e7eb20: function AS_Button_c05e5eed34314d15b4e7c55177e7eb20(eventobject) {
        var self = this;
        this.btnNextOnClick();
    },
    /** onClick defined for btnEnable **/
    AS_Button_d057008ae99e444f869efc1a4e927b40: function AS_Button_d057008ae99e444f869efc1a4e927b40(eventobject) {
        var self = this;
        return self.btnEnableOnClick.call(this);
    },
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
    /** onClick defined for btnFive **/
    AS_Button_c29becbf3bf2448faec6815fe47620c2: function AS_Button_c29becbf3bf2448faec6815fe47620c2(eventobject) {
        var self = this;
        this.setKeypadChar(5);
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
    /** onClick defined for undefined **/
    AS_BarButtonItem_df627969401742f59997c6ebedab7e07: function AS_BarButtonItem_df627969401742f59997c6ebedab7e07(eventobject) {
        var self = this;
        this.btnSkipOnClick();
    },
    /** init defined for frmDevRegPin **/
    AS_Form_d57865ac2e0d4b0bba1d116a65a03227: function AS_Form_d57865ac2e0d4b0bba1d116a65a03227(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmDevRegPin **/
    AS_Form_fb730bf3de024b13a6aef94b22930a7f: function AS_Form_fb730bf3de024b13a6aef94b22930a7f(eventobject) {
        var self = this;
        this.showPinCode();
    }
});