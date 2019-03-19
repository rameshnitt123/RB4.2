define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_b8d6c1a8b4954b819f49d9364dd7c248: function AS_BarButtonItem_b8d6c1a8b4954b819f49d9364dd7c248(eventobject) {
        var self = this;
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_dc7c4348dac048ffb1f7226b38547901: function AS_BarButtonItem_dc7c4348dac048ffb1f7226b38547901(eventobject) {
        var self = this;
        this.onClose();
    },
    /** init defined for frmLocationMap **/
    AS_Form_f874647b49a846cd935713722a1123bd: function AS_Form_f874647b49a846cd935713722a1123bd(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmLocationMap **/
    AS_Form_f3926b75c32a4ef4bc18419bfcdaea6e: function AS_Form_f3926b75c32a4ef4bc18419bfcdaea6e(eventobject) {
        var self = this;
        this.frmLocationPreshow();
    }
});