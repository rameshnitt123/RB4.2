define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRight **/
    AS_Button_bccdd148f545430ba4f819367c5fa246: function AS_Button_bccdd148f545430ba4f819367c5fa246(eventobject) {
        var self = this;
        var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_iff1de0bf545418a947ed1fb9ab9e26f: function AS_BarButtonItem_iff1de0bf545418a947ed1fb9ab9e26f(eventobject) {
        var self = this;
        this.navBack();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_e50e60e2483d468a84c3a8be1e6cb356: function AS_BarButtonItem_e50e60e2483d468a84c3a8be1e6cb356(eventobject) {
        var self = this;
        this.onClickCancel();
    },
    /** init defined for frmEnrollLastName **/
    AS_Form_c1409f1302c94460bbb3413525c66bda: function AS_Form_c1409f1302c94460bbb3413525c66bda(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmEnrollLastName **/
    AS_Form_i0b75f9e426f421d82b8a81fa81340bd: function AS_Form_i0b75f9e426f421d82b8a81fa81340bd(eventobject) {
        var self = this;
        this.frmEnrollLAstNamePreShow();
    }
});