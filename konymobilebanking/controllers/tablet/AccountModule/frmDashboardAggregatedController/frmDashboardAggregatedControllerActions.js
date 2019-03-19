define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onDownloadComplete defined for imgAd1 **/
    AS_Image_g2e76dc85e4844acb8f6fe72250269dd: function AS_Image_g2e76dc85e4844acb8f6fe72250269dd(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 1);
    },
    /** onDownloadComplete defined for imgAd2 **/
    AS_Image_d86f4b9a33864710b2f61e2d6db0bd64: function AS_Image_d86f4b9a33864710b2f61e2d6db0bd64(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 2);
    },
    /** onDownloadComplete defined for imgAd3 **/
    AS_Image_efff37a325e240e587e82208f8e16961: function AS_Image_efff37a325e240e587e82208f8e16961(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 3);
    },
    /** onDownloadComplete defined for imgAd4 **/
    AS_Image_d86141c279964d0f9e18598f8c81e3bc: function AS_Image_d86141c279964d0f9e18598f8c81e3bc(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 4);
    },
    /** onDownloadComplete defined for imgAd5 **/
    AS_Image_e54b5cd6b374427987806a4cf1d848c1: function AS_Image_e54b5cd6b374427987806a4cf1d848c1(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 5);
    },
    /** init defined for frmDashboardAggregated **/
    AS_Form_gcf2d9ef980f4469b78952cb93b8490a: function AS_Form_gcf2d9ef980f4469b78952cb93b8490a(eventobject) {
        var self = this;
        var date = new Date();
        this.currentMonth = parseInt(date.getMonth() + 1);
        this.init();
    },
    /** preShow defined for frmDashboardAggregated **/
    AS_Form_c64b4119e1174a1db385ad60fcac3ce3: function AS_Form_c64b4119e1174a1db385ad60fcac3ce3(eventobject) {
        var self = this;
        this.preshow();
    },
    /** postShow defined for frmDashboardAggregated **/
    AS_Form_b7b4b824968843668cce5819742c8d25: function AS_Form_b7b4b824968843668cce5819742c8d25(eventobject) {
        var self = this;
        this.postShow();
    }
});