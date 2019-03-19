define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_b6edbc45eae343f984a06310395afc7c: function AS_FlexContainer_b6edbc45eae343f984a06310395afc7c(eventobject) {
        var self = this;
        this.imgbackAction();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_e5dcd0ea0a6248e586c76aa0902a57ec: function AS_BarButtonItem_e5dcd0ea0a6248e586c76aa0902a57ec(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** init defined for frmPreferencesFaceId **/
    AS_Form_f9df0bd8b1c2441eba83431c13d51cd3: function AS_Form_f9df0bd8b1c2441eba83431c13d51cd3(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmPreferencesFaceId **/
    AS_Form_dd7bbc2eded0463eb4ecc411ad850af3: function AS_Form_dd7bbc2eded0463eb4ecc411ad850af3(eventobject) {
        var self = this;
        this.preShow();
    }
});