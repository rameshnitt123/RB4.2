define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRight **/
    AS_Button_a5cc95c82dd84759898c0f08d28de5a5: function AS_Button_a5cc95c82dd84759898c0f08d28de5a5(eventobject) {
        var self = this;
        var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_gfa217e064aa4de7883e8fbe38f25cc6: function AS_BarButtonItem_gfa217e064aa4de7883e8fbe38f25cc6(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    /** init defined for frmOBsetUserNamePwd **/
    AS_Form_d44d9df7a46042edb891a00df8dc7d7a: function AS_Form_d44d9df7a46042edb891a00df8dc7d7a(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmOBsetUserNamePwd **/
    AS_Form_d318f7744f5748ec824f0bdf0e9a97b1: function AS_Form_d318f7744f5748ec824f0bdf0e9a97b1(eventobject) {
        var self = this;
        this.preShow();
    }
});