define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** init defined for frmManageRecipientList **/
    AS_Form_cb74415f906844bdbfd0eef106223991: function AS_Form_cb74415f906844bdbfd0eef106223991(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmManageRecipientList **/
    AS_Form_g7556b7a28b84ec6abffeca85f914415: function AS_Form_g7556b7a28b84ec6abffeca85f914415(eventobject) {
        var self = this;
        this.preShow();
    },
    /** postShow defined for frmManageRecipientList **/
    AS_Form_ebb975fa2c0a451e91fe31d8a710bd91: function AS_Form_ebb975fa2c0a451e91fe31d8a710bd91(eventobject) {
        var self = this;
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
});