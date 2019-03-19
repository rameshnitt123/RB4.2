define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_g0464c76621343e2ab2b3491ce7814ea: function AS_BarButtonItem_g0464c76621343e2ab2b3491ce7814ea(eventobject) {
        var self = this;
        applicationManager.getPresentationUtility().showLoadingScreen();
        var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
        messagesMod.presentationController.getCategories();
    },
    /** init defined for frmMessages **/
    AS_Form_c12dbfcc91844856a06897d220e1c278: function AS_Form_c12dbfcc91844856a06897d220e1c278(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmMessages **/
    AS_Form_ae59b9269e85435fb894ea6dd42103cf: function AS_Form_ae59b9269e85435fb894ea6dd42103cf(eventobject) {
        var self = this;
        this.frmMessagesPreShow();
    }
});