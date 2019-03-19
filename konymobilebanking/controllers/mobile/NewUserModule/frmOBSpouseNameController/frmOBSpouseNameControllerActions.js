define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRight **/
    AS_Button_cdb195ff78524a01b23a129b706a0be3: function AS_Button_cdb195ff78524a01b23a129b706a0be3(eventobject) {
        var self = this;
        var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_e1ddd60168a848d48163b767e76868f1: function AS_BarButtonItem_e1ddd60168a848d48163b767e76868f1(eventobject) {
        var self = this;
        this.onClose();
    },
    /** init defined for frmOBSpouseName **/
    AS_Form_i91da114ad5c4b769df75f4719ae7109: function AS_Form_i91da114ad5c4b769df75f4719ae7109(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmOBSpouseName **/
    AS_Form_j9156833848442a3ba23768f29f1c694: function AS_Form_j9156833848442a3ba23768f29f1c694(eventobject) {
        var self = this;
        this.preShow();
    }
});