define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnOne **/
    AS_Button_b600ad00331a44adad502fe1f21a821e: function AS_Button_b600ad00331a44adad502fe1f21a821e(eventobject) {
        var self = this;
    },
    /** onClick defined for btnTwo **/
    AS_Button_e5930f70c45143c3a6f5df643220ac49: function AS_Button_e5930f70c45143c3a6f5df643220ac49(eventobject) {
        var self = this;
        this.setChar(2);
    },
    /** onClick defined for btnThree **/
    AS_Button_a5d6ad3993b143bcab0b68f04055971e: function AS_Button_a5d6ad3993b143bcab0b68f04055971e(eventobject) {
        var self = this;
        this.setChar(3);
    },
    /** onClick defined for btnFour **/
    AS_Button_j17cc5ddc7d64209a500109135dbafb1: function AS_Button_j17cc5ddc7d64209a500109135dbafb1(eventobject) {
        var self = this;
        this.setChar(4);
    },
    /** onClick defined for btnFive **/
    AS_Button_b81f10d76b9c49b489f80447d90eaf59: function AS_Button_b81f10d76b9c49b489f80447d90eaf59(eventobject) {
        var self = this;
        this.setChar(5);
    },
    /** onClick defined for btnSix **/
    AS_Button_fb3682f759a6453a816a59ab285ee2f5: function AS_Button_fb3682f759a6453a816a59ab285ee2f5(eventobject) {
        var self = this;
        this.setChar(6);
    },
    /** onClick defined for btnSeven **/
    AS_Button_h8875e2b7c9547c7a74675abc0b59396: function AS_Button_h8875e2b7c9547c7a74675abc0b59396(eventobject) {
        var self = this;
        this.setChar(7);
    },
    /** onClick defined for btnEight **/
    AS_Button_c095a38b7a464014af0b22bb663e72d0: function AS_Button_c095a38b7a464014af0b22bb663e72d0(eventobject) {
        var self = this;
        this.setChar(8);
    },
    /** onClick defined for btnNine **/
    AS_Button_cfdb950230e04132a3b710a756627684: function AS_Button_cfdb950230e04132a3b710a756627684(eventobject) {
        var self = this;
        this.setChar(9);
    },
    /** onClick defined for btnZero **/
    AS_Button_a33fcaf49c4742deb085f317be8e8db5: function AS_Button_a33fcaf49c4742deb085f317be8e8db5(eventobject) {
        var self = this;
        this.setChar(0);
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_i3e856b61534448e810c1a27477d2b7a: function AS_BarButtonItem_i3e856b61534448e810c1a27477d2b7a(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    },
    /** init defined for frmProfileEditPhoneNumberMain **/
    AS_Form_b6e0cbe80fb942d484f3b30a6a3686be: function AS_Form_b6e0cbe80fb942d484f3b30a6a3686be(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmProfileEditPhoneNumberMain **/
    AS_Form_de72fc54f6484408848879f4aeb90ca3: function AS_Form_de72fc54f6484408848879f4aeb90ca3(eventobject) {
        var self = this;
        this.preShow();
    }
});