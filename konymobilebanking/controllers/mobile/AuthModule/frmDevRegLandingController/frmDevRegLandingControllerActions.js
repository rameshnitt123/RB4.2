define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRegNow **/
    AS_Button_e4c5558cfcbd426daa54c7a7e3a64852: function AS_Button_e4c5558cfcbd426daa54c7a7e3a64852(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmDevRegSecCode");
    },
    /** init defined for frmDevRegLanding **/
    AS_Form_edc932272eae4b4d8b357d4bf53d518f: function AS_Form_edc932272eae4b4d8b357d4bf53d518f(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmDevRegLanding **/
    AS_Form_dcf023c0b2754db8929b53a224e6e948: function AS_Form_dcf023c0b2754db8929b53a224e6e948(eventobject) {
        var self = this;
        this.preShow();
    }
});