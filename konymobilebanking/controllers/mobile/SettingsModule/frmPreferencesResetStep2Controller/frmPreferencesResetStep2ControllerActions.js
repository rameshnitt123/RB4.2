define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnNext **/
    AS_Button_ea261b2d40ef4a1f82fb3f58177ca228: function AS_Button_ea261b2d40ef4a1f82fb3f58177ca228(eventobject) {
        var self = this;
        this.btnNextOnClick();
    },
    /** onClick defined for btnOne **/
    AS_Button_da3a79755ba44d378153825bf5d8728b: function AS_Button_da3a79755ba44d378153825bf5d8728b(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    /** onClick defined for btnTwo **/
    AS_Button_eeab40a081e94822bf7ec792907b8e7b: function AS_Button_eeab40a081e94822bf7ec792907b8e7b(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    /** onClick defined for btnThree **/
    AS_Button_ad898d858cf44248a9c71331238c2df0: function AS_Button_ad898d858cf44248a9c71331238c2df0(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    /** onClick defined for btnFour **/
    AS_Button_if8581fab94e4d7f9edea87f88f2e0ae: function AS_Button_if8581fab94e4d7f9edea87f88f2e0ae(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    /** onClick defined for btnFive **/
    AS_Button_c137df008714404a8bc4bdb949ede750: function AS_Button_c137df008714404a8bc4bdb949ede750(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    /** onClick defined for btnSix **/
    AS_Button_fadc24d90357421895bec4e7685a9609: function AS_Button_fadc24d90357421895bec4e7685a9609(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    /** onClick defined for btnSeven **/
    AS_Button_gff2505325ff4f8da1f9eec700e18911: function AS_Button_gff2505325ff4f8da1f9eec700e18911(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    /** onClick defined for btnEight **/
    AS_Button_d100ad8d7eb34d909e18c1a448d96f87: function AS_Button_d100ad8d7eb34d909e18c1a448d96f87(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    /** onClick defined for btnNine **/
    AS_Button_b011d6b0d0c148ccb1826ac1a23648b5: function AS_Button_b011d6b0d0c148ccb1826ac1a23648b5(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    /** onClick defined for btnZero **/
    AS_Button_j3beb9d26e9840a6bdc0ec8e80b4385e: function AS_Button_j3beb9d26e9840a6bdc0ec8e80b4385e(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    /** onTouchEnd defined for imgClearKeypad **/
    AS_Image_j422b864fc5a4eaa9e7c6df81bfcab6b: function AS_Image_j422b864fc5a4eaa9e7c6df81bfcab6b(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_i182dedbedd9461b896555f66ba54aec: function AS_BarButtonItem_i182dedbedd9461b896555f66ba54aec(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesPin");
    },
    /** preShow defined for frmPreferencesResetStep2 **/
    AS_Form_e338cb1e514842cdae26c46e86970efc: function AS_Form_e338cb1e514842cdae26c46e86970efc(eventobject) {
        var self = this;
        this.showPinCode();
    }
});