define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnOne **/
    AS_Button_f8c6f7940e1a43579e19e675d8a2659f: function AS_Button_f8c6f7940e1a43579e19e675d8a2659f(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    /** onClick defined for btnTwo **/
    AS_Button_e2128d45f5e94fcc85e492ac104c70aa: function AS_Button_e2128d45f5e94fcc85e492ac104c70aa(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    /** onClick defined for btnThree **/
    AS_Button_fe6a7227ee7b4ca9bc2c0f933a0bb351: function AS_Button_fe6a7227ee7b4ca9bc2c0f933a0bb351(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    /** onClick defined for btnFour **/
    AS_Button_g21ccb1e0aa64bada87756e4a335c632: function AS_Button_g21ccb1e0aa64bada87756e4a335c632(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    /** onClick defined for btnFive **/
    AS_Button_df0d1a1eeb6c4e37af20fa89f580ac79: function AS_Button_df0d1a1eeb6c4e37af20fa89f580ac79(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    /** onClick defined for btnSix **/
    AS_Button_e07ad692203d457790a74a821af7c955: function AS_Button_e07ad692203d457790a74a821af7c955(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    /** onClick defined for btnSeven **/
    AS_Button_b82af1cd12644430bc32a22636fbecef: function AS_Button_b82af1cd12644430bc32a22636fbecef(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    /** onClick defined for btnEight **/
    AS_Button_fe17aa3f9c134ceaba4f0b4307809089: function AS_Button_fe17aa3f9c134ceaba4f0b4307809089(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    /** onClick defined for btnNine **/
    AS_Button_jcefc73fc44d4a35ba93da5dedcc1fe3: function AS_Button_jcefc73fc44d4a35ba93da5dedcc1fe3(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    /** onClick defined for btnZero **/
    AS_Button_h067e162fc9345da99585d343d887fc3: function AS_Button_h067e162fc9345da99585d343d887fc3(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    /** onTouchEnd defined for imgClearKeypad **/
    AS_Image_h06747e2dadc4fdb88cc1a43838554aa: function AS_Image_h06747e2dadc4fdb88cc1a43838554aa(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_i3acfb658bd3414787e1798321cda52a: function AS_FlexContainer_i3acfb658bd3414787e1798321cda52a(eventobject) {
        var self = this;
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transMod.presentationController.commonFunctionForNavigation("frmTransfersDuration");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_b07c045408eb4de8b4051b7687bdc3ad: function AS_BarButtonItem_b07c045408eb4de8b4051b7687bdc3ad(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    /** init defined for frmTransfersRecurrence **/
    AS_Form_h548e874513c4bdfad962c23e6346ff1: function AS_Form_h548e874513c4bdfad962c23e6346ff1(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmTransfersRecurrence **/
    AS_Form_eb6bc99b89594eccbdfc7240e04c0e5f: function AS_Form_eb6bc99b89594eccbdfc7240e04c0e5f(eventobject) {
        var self = this;
        this.preShow();
    }
});