define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onDownloadComplete defined for imgAd1 **/
    AS_Image_g2c36512c37e4610bef59afc0a78cd50: function AS_Image_g2c36512c37e4610bef59afc0a78cd50(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 1);
    },
    /** onDownloadComplete defined for imgAd2 **/
    AS_Image_ce86e8eb54774bebaf5ea89e0b0bea57: function AS_Image_ce86e8eb54774bebaf5ea89e0b0bea57(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 2);
    },
    /** onDownloadComplete defined for imgAd3 **/
    AS_Image_ad3984ac55ef4cd78140ab7083490db9: function AS_Image_ad3984ac55ef4cd78140ab7083490db9(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 3);
    },
    /** onDownloadComplete defined for imgAd4 **/
    AS_Image_ec4a2481f4a9455891d683e7495b997f: function AS_Image_ec4a2481f4a9455891d683e7495b997f(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 4);
    },
    /** onDownloadComplete defined for imgAd5 **/
    AS_Image_a3139f1a31d2473688010cc4901afd11: function AS_Image_a3139f1a31d2473688010cc4901afd11(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 5);
    },
    /** onTouchStart defined for flxSuggestedOffers **/
    AS_FlexContainer_ac7f304c93094342b88453428ab82e6b: function AS_FlexContainer_ac7f304c93094342b88453428ab82e6b(eventobject, x, y) {
        var self = this;
        this.startY = y;
    },
    /** onTouchMove defined for flxSuggestedOffers **/
    AS_FlexContainer_g196dcb706dd418ebf7935b2c03944bb: function AS_FlexContainer_g196dcb706dd418ebf7935b2c03944bb(eventobject, x, y) {
        var self = this;
        this.adsOnTouchMove(y);
    },
    /** onTouchEnd defined for flxSuggestedOffers **/
    AS_FlexContainer_gf6befb244c84e1d9de3a34c566be762: function AS_FlexContainer_gf6befb244c84e1d9de3a34c566be762(eventobject, x, y) {
        var self = this;
        this.adsOnTouchEnd();
    },
    /** onClick defined for flxTransfer **/
    AS_FlexContainer_hdf99458f8c14c8ba0e8fca7c93e1344: function AS_FlexContainer_hdf99458f8c14c8ba0e8fca7c93e1344(eventobject) {
        var self = this;
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** onClick defined for flxMore **/
    AS_FlexContainer_ha4e475a793b4e79b36a8385185b5d16: function AS_FlexContainer_ha4e475a793b4e79b36a8385185b5d16(eventobject) {
        var self = this;
        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.commonFunctionForNavigation("frmMessages");
    },
    /** init defined for frmDashboardAggregated2 **/
    AS_Form_b98a92ac4cf24ba89acb7948e2cc2ce8: function AS_Form_b98a92ac4cf24ba89acb7948e2cc2ce8(eventobject) {
        var self = this;
        // var date = new Date();
        // this.currentMonth = parseInt(date.getMonth()+1);
        // this.init();
    },
    /** preShow defined for frmDashboardAggregated2 **/
    AS_Form_dbef466938a04865aae65bf24cfa5bf7: function AS_Form_dbef466938a04865aae65bf24cfa5bf7(eventobject) {
        var self = this;
        this.preShow();
    },
    /** postShow defined for frmDashboardAggregated2 **/
    AS_Form_i3a1889bd5ae41a79417bf063d040f27: function AS_Form_i3a1889bd5ae41a79417bf063d040f27(eventobject) {
        var self = this;
        this.postShow();
    }
});