define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_e40c0b8491424de98a56208bb80f217a: function AS_BarButtonItem_e40c0b8491424de98a56208bb80f217a(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
    },
    /** init defined for frmP2pFrequency **/
    AS_Form_g3652ebd553b4889a52f34976ab26c31: function AS_Form_g3652ebd553b4889a52f34976ab26c31(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmP2pFrequency **/
    AS_Form_b50edd0ec2354428bb2ab5f756913b92: function AS_Form_b50edd0ec2354428bb2ab5f756913b92(eventobject) {
        var self = this;
        this.preShow();
    }
});