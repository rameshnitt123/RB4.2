define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnOne **/
    AS_Button_i344da2ace4f4efc849cf050d6194439: function AS_Button_i344da2ace4f4efc849cf050d6194439(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    /** onClick defined for btnTwo **/
    AS_Button_ce6039f3d25848b58ad94ab79e36e485: function AS_Button_ce6039f3d25848b58ad94ab79e36e485(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    /** onClick defined for btnThree **/
    AS_Button_gee0aaaa5cd342f5bad22526e42dcb7b: function AS_Button_gee0aaaa5cd342f5bad22526e42dcb7b(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    /** onClick defined for btnFour **/
    AS_Button_ac5b796669e645ad8d3d3dce483eed8b: function AS_Button_ac5b796669e645ad8d3d3dce483eed8b(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    /** onClick defined for btnFive **/
    AS_Button_fb89972d2aa74401a351e90020f4aa5d: function AS_Button_fb89972d2aa74401a351e90020f4aa5d(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    /** onClick defined for btnSix **/
    AS_Button_b1b1f08c9fb8486b8e14dde8a86dfe2c: function AS_Button_b1b1f08c9fb8486b8e14dde8a86dfe2c(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    /** onClick defined for btnSeven **/
    AS_Button_ee454c8d4a744e25a39dc387d30d9fa7: function AS_Button_ee454c8d4a744e25a39dc387d30d9fa7(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    /** onClick defined for btnEight **/
    AS_Button_d554736f080d4fe7875cbe20fcc4707c: function AS_Button_d554736f080d4fe7875cbe20fcc4707c(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    /** onClick defined for btnNine **/
    AS_Button_j919d3ded6db4f4f8fa89c1cfef4e8fc: function AS_Button_j919d3ded6db4f4f8fa89c1cfef4e8fc(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    /** onClick defined for btnZero **/
    AS_Button_b9d828499e9d4d5691e1088276efb760: function AS_Button_b9d828499e9d4d5691e1088276efb760(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_e24821181ce94b42b22f8084570ae293: function AS_BarButtonItem_e24821181ce94b42b22f8084570ae293(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    },
    /** preShow defined for frmProfileCountryCode **/
    AS_Form_c2a36d3fc53e47b6be96291a397866e3: function AS_Form_c2a36d3fc53e47b6be96291a397866e3(eventobject) {
        var self = this;
        this.frmSecurityCheckPreShow();
    }
});