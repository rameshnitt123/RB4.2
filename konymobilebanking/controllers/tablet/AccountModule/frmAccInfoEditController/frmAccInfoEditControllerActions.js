define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_f527e4a03ab4434cb57faaf0d3daf0e9: function AS_BarButtonItem_f527e4a03ab4434cb57faaf0d3daf0e9(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        this.accDetails = navMan.goBack();
    },
    /** init defined for frmAccInfoEdit **/
    AS_Form_a88422d19307427fa73757c4efdd5d33: function AS_Form_a88422d19307427fa73757c4efdd5d33(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmAccInfoEdit **/
    AS_Form_e957105f219444a984d0062b33ae69e9: function AS_Form_e957105f219444a984d0062b33ae69e9(eventobject) {
        var self = this;
        this.frmEditNickNamePreShow();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_fa6954e938544da8906c916dfaaebad1: function AS_BarButtonItem_fa6954e938544da8906c916dfaaebad1(eventobject) {
        var self = this;
        this.flxBackOnClick();
    }
});