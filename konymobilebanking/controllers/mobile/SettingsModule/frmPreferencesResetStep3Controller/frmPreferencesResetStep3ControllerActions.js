define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnNext **/
    AS_Button_cbca7fa4ea4c482da52da00d7d8d00b0: function AS_Button_cbca7fa4ea4c482da52da00d7d8d00b0(eventobject) {
        var self = this;
        this.btnNextOnClick();
    },
    /** onClick defined for btnOne **/
    AS_Button_c37de76dc9184fd3a72bf0a7ea263c16: function AS_Button_c37de76dc9184fd3a72bf0a7ea263c16(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    /** onClick defined for btnTwo **/
    AS_Button_ebbafb3c5f6645cea0c08b363f7cce6e: function AS_Button_ebbafb3c5f6645cea0c08b363f7cce6e(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    /** onClick defined for btnThree **/
    AS_Button_b9f5f3a84e2f489d93e29380a386f801: function AS_Button_b9f5f3a84e2f489d93e29380a386f801(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    /** onClick defined for btnFour **/
    AS_Button_da11392a141140f79141bbc2b0d257d9: function AS_Button_da11392a141140f79141bbc2b0d257d9(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    /** onClick defined for btnFive **/
    AS_Button_b36985193eb64bfb9694fa7754d839a4: function AS_Button_b36985193eb64bfb9694fa7754d839a4(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    /** onClick defined for btnSix **/
    AS_Button_cb235bf59bac4167b1a58772ec25f71a: function AS_Button_cb235bf59bac4167b1a58772ec25f71a(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    /** onClick defined for btnSeven **/
    AS_Button_fca8ad19565547099a9dc695e03da722: function AS_Button_fca8ad19565547099a9dc695e03da722(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    /** onClick defined for btnEight **/
    AS_Button_d90c231c96274431bcb3c308285cf472: function AS_Button_d90c231c96274431bcb3c308285cf472(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    /** onClick defined for btnNine **/
    AS_Button_g065faad1d21471f8584f80eff44d653: function AS_Button_g065faad1d21471f8584f80eff44d653(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    /** onClick defined for btnZero **/
    AS_Button_de09c4c286284462be18b2891399c49a: function AS_Button_de09c4c286284462be18b2891399c49a(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    /** onTouchEnd defined for imgClearKeypad **/
    AS_Image_bb468d28339b40e7a22887a2bb780ac8: function AS_Image_bb468d28339b40e7a22887a2bb780ac8(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_if9c3b449fe2450389d732cfc7e69a88: function AS_BarButtonItem_if9c3b449fe2450389d732cfc7e69a88(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesPin");
    },
    /** preShow defined for frmPreferencesResetStep3 **/
    AS_Form_ca0b4da517394083a6988240361274b7: function AS_Form_ca0b4da517394083a6988240361274b7(eventobject) {
        var self = this;
        this.showPinCode();
    }
});