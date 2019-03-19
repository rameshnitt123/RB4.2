define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnOne **/
    AS_Button_d365b24c3e8e4859bd6d888338f7c6e3: function AS_Button_d365b24c3e8e4859bd6d888338f7c6e3(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    /** onClick defined for btnTwo **/
    AS_Button_e94cf1dbc4114ab6b337cf3793c55ad1: function AS_Button_e94cf1dbc4114ab6b337cf3793c55ad1(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    /** onClick defined for btnThree **/
    AS_Button_ff692473f32d4bff8eeffb8a1496f4bd: function AS_Button_ff692473f32d4bff8eeffb8a1496f4bd(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    /** onClick defined for btnFour **/
    AS_Button_fe6ffb5d1a534f94811ec5df93e8971e: function AS_Button_fe6ffb5d1a534f94811ec5df93e8971e(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    /** onClick defined for btnFive **/
    AS_Button_e3ccd88beccb4fa99b6419fd37f43c58: function AS_Button_e3ccd88beccb4fa99b6419fd37f43c58(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    /** onClick defined for btnSix **/
    AS_Button_ee2dcffa72f34eec9da8ec582cc167b8: function AS_Button_ee2dcffa72f34eec9da8ec582cc167b8(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    /** onClick defined for btnSeven **/
    AS_Button_e158bf44166b42da9bfe811ab4c3ab58: function AS_Button_e158bf44166b42da9bfe811ab4c3ab58(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    /** onClick defined for btnEight **/
    AS_Button_abe2b0b1cb6d4ce7984ee66fac82585f: function AS_Button_abe2b0b1cb6d4ce7984ee66fac82585f(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    /** onClick defined for btnNine **/
    AS_Button_cf7df958813f4036a93cb7b7fda05933: function AS_Button_cf7df958813f4036a93cb7b7fda05933(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    /** onClick defined for btnZero **/
    AS_Button_e8b2d03196ea4777a2836b5af707770d: function AS_Button_e8b2d03196ea4777a2836b5af707770d(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    /** onTouchEnd defined for imgClearKeypad **/
    AS_Image_fa1a31303f9341638faf98b51f0853de: function AS_Image_fa1a31303f9341638faf98b51f0853de(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_j88395090e5845d98e1cd9712afb8464: function AS_BarButtonItem_j88395090e5845d98e1cd9712afb8464(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
    },
    /** preShow defined for frmPreferencesDeviceRegSecCode **/
    AS_Form_afd2ee5992794bb4879f51bf17368b53: function AS_Form_afd2ee5992794bb4879f51bf17368b53(eventobject) {
        var self = this;
        this.preShow();
    }
});