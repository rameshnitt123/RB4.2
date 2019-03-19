define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_f49789b9788e41b59043bb4fce5e5b0a: function AS_FlexContainer_f49789b9788e41b59043bb4fce5e5b0a(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for btnRight **/
    AS_Button_cdb8887bf8344e46b7af2b803d4873d1: function AS_Button_cdb8887bf8344e46b7af2b803d4873d1(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_g2fb45a18f944a30bc00d6dc07ed64be: function AS_BarButtonItem_g2fb45a18f944a30bc00d6dc07ed64be(eventobject) {
        var self = this;
        this.onCancel();
    },
    /** init defined for frmCardLessCountryCode **/
    AS_Form_f31ff03bf28147dc83ecd7528d09bfce: function AS_Form_f31ff03bf28147dc83ecd7528d09bfce(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmCardLessCountryCode **/
    AS_Form_jdaa42e26b4b4d1b97909812a8a96c5f: function AS_Form_jdaa42e26b4b4d1b97909812a8a96c5f(eventobject) {
        var self = this;
        this.preShow();
    }
});