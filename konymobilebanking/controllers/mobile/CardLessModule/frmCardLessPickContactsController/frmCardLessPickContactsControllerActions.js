define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for segContacts **/
    AS_Segment_ebe5619643734119ad257a99a53f66f9: function AS_Segment_ebe5619643734119ad257a99a53f66f9(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.showPopup();
    },
    /** init defined for frmCardLessPickContacts **/
    AS_Form_ddb0cba5e31a4199afbf463bf64bfbff: function AS_Form_ddb0cba5e31a4199afbf463bf64bfbff(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmCardLessPickContacts **/
    AS_Form_c73fb4a5292347d4808acfa74b271359: function AS_Form_c73fb4a5292347d4808acfa74b271359(eventobject) {
        var self = this;
        this.preShow();
    },
    /** postShow defined for frmCardLessPickContacts **/
    AS_Form_f39a89d404744aa4adf5759bc4089ce8: function AS_Form_f39a89d404744aa4adf5759bc4089ce8(eventobject) {
        var self = this;
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
});