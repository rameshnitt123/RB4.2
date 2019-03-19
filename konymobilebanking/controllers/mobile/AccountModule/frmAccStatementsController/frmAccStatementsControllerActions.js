define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRight **/
    AS_Button_af97396e008646d4ad75cc38f42be800: function AS_Button_af97396e008646d4ad75cc38f42be800(eventobject) {
        var self = this;
        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onTouchStart defined for flxArrow **/
    AS_FlexContainer_h5c9d53e0a6e471abbcf3cb45c4369aa: function AS_FlexContainer_h5c9d53e0a6e471abbcf3cb45c4369aa(eventobject, x, y) {
        var self = this;
        return self.flxArrowOnclick.call(this);
    },
    /** onClick defined for flxAccountInfo **/
    AS_FlexContainer_dbeca30be178441eb16bb308d67e11bd: function AS_FlexContainer_dbeca30be178441eb16bb308d67e11bd(eventobject) {
        var self = this;
        return self.flxArrowOnclick.call(this);
    },
    /** onTouchStart defined for flxSegStatements **/
    AS_FlexScrollContainer_a802cb13639b416e96351b677d3d1c27: function AS_FlexScrollContainer_a802cb13639b416e96351b677d3d1c27(eventobject, x, y) {
        var self = this;
        return self.animateFlxSelectYearBack.call(this);
    },
    /** init defined for frmAccStatements **/
    AS_Form_da6cda809b7d4365bb459548a45fa23d: function AS_Form_da6cda809b7d4365bb459548a45fa23d(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmAccStatements **/
    AS_Form_ecdcfd3b9a8642fdbd8c3e6c243dff4b: function AS_Form_ecdcfd3b9a8642fdbd8c3e6c243dff4b(eventobject) {
        var self = this;
        return self.frmAccountStatementsPreshow.call(this);
    }
});