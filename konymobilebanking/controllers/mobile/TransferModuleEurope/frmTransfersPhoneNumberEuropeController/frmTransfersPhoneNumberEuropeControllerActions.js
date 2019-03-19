define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_c322744e8bbb416f95f577fb44a3df56: function AS_BarButtonItem_c322744e8bbb416f95f577fb44a3df56(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_j50a3e1eed30406ab3381b0eac6605a3: function AS_FlexContainer_j50a3e1eed30406ab3381b0eac6605a3(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for btnRight **/
    AS_Button_b9e0c27d740240daabbd24369d8e9fe4: function AS_Button_b9e0c27d740240daabbd24369d8e9fe4(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_f89ce3215ea94c8c97202c090c2b124f: function AS_BarButtonItem_f89ce3215ea94c8c97202c090c2b124f(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** init defined for frmTransfersPhoneNumberEurope **/
    AS_Form_dfa2d6ccf2c34e81b4ccc6d28e81067b: function AS_Form_dfa2d6ccf2c34e81b4ccc6d28e81067b(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmTransfersPhoneNumberEurope **/
    AS_Form_ac12af6576434eb3929c224659cfba92: function AS_Form_ac12af6576434eb3929c224659cfba92(eventobject) {
        var self = this;
        this.preShow();
    }
});