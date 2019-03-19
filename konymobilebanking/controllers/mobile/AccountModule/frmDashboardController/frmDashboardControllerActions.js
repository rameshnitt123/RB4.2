define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_d05c21da5019437a9492c7add115ff1b: function AS_FlexContainer_d05c21da5019437a9492c7add115ff1b(eventobject) {
        var self = this;
        this.navigateToBack();
    },
    /** onRowClick defined for segAccounts **/
    AS_Segment_f9493e768f104f30a25b2ea81144978c: function AS_Segment_f9493e768f104f30a25b2ea81144978c(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.accountSegmentOnClick();
    },
    /** onDownloadComplete defined for imgAd1 **/
    AS_Image_bf44bd4f8005487c8b068e2991845d72: function AS_Image_bf44bd4f8005487c8b068e2991845d72(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 1);
    },
    /** onDownloadComplete defined for imgAd2 **/
    AS_Image_f1d0bf25b1464cc58e20926e727690b1: function AS_Image_f1d0bf25b1464cc58e20926e727690b1(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 2);
    },
    /** onDownloadComplete defined for imgAd3 **/
    AS_Image_daa17131465b4003ba0bf7ecd919f7d4: function AS_Image_daa17131465b4003ba0bf7ecd919f7d4(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 3);
    },
    /** onDownloadComplete defined for imgAd4 **/
    AS_Image_j41f0085f07c4531a0b3b58c0752006e: function AS_Image_j41f0085f07c4531a0b3b58c0752006e(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 4);
    },
    /** onDownloadComplete defined for imgAd5 **/
    AS_Image_a593a7bc3bfb423abcb7b1db85617148: function AS_Image_a593a7bc3bfb423abcb7b1db85617148(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 5);
    },
    /** init defined for frmDashboard **/
    AS_Form_f0a94f8abeb44cf7a3416fe791b496e7: function AS_Form_f0a94f8abeb44cf7a3416fe791b496e7(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmDashboard **/
    AS_Form_b0639f0b71e641c1b340bf2daf0d0775: function AS_Form_b0639f0b71e641c1b340bf2daf0d0775(eventobject) {
        var self = this;
        this.preshow();
    },
    /** postShow defined for frmDashboard **/
    AS_Form_g4844a89e1844bc19aa03ee0926dba50: function AS_Form_g4844a89e1844bc19aa03ee0926dba50(eventobject) {
        var self = this;
        this.postShow();
    }
});