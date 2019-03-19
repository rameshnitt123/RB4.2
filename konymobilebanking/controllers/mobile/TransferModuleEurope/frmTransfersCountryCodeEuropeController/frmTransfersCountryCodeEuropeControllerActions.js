define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_f89ce3215ea94c8c97202c090c2b124f: function AS_BarButtonItem_f89ce3215ea94c8c97202c090c2b124f(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_d898fd7101014edcad7f61313eccd218: function AS_FlexContainer_d898fd7101014edcad7f61313eccd218(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for btnRight **/
    AS_Button_f5a7add65b8843c0aadc6c2de3453848: function AS_Button_f5a7add65b8843c0aadc6c2de3453848(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_e7fb9f3a21204597997dad2d0237663e: function AS_BarButtonItem_e7fb9f3a21204597997dad2d0237663e(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** init defined for frmTransfersCountryCodeEurope **/
    AS_Form_af32467c94bd453aabddfb7b80d25d18: function AS_Form_af32467c94bd453aabddfb7b80d25d18(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmTransfersCountryCodeEurope **/
    AS_Form_c897dbffdb1d418ca87e8ea77af3b5f6: function AS_Form_c897dbffdb1d418ca87e8ea77af3b5f6(eventobject) {
        var self = this;
        this.preShow();
    }
});