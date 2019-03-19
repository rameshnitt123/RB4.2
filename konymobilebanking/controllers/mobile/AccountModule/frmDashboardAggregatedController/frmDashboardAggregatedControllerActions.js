define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onDownloadComplete defined for imgAd1 **/
    AS_Image_a95b84fd97e243f8a7c2ca2f6de31c6e: function AS_Image_a95b84fd97e243f8a7c2ca2f6de31c6e(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 1);
    },
    /** onDownloadComplete defined for imgAd2 **/
    AS_Image_i21f36e9fa654d1bb39a7ed7ff8fa693: function AS_Image_i21f36e9fa654d1bb39a7ed7ff8fa693(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 2);
    },
    /** onDownloadComplete defined for imgAd3 **/
    AS_Image_a6d8f076520d49378cb8a8110684ca26: function AS_Image_a6d8f076520d49378cb8a8110684ca26(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 3);
    },
    /** onDownloadComplete defined for imgAd4 **/
    AS_Image_fdc5f3b545bd42bf9022b93014afa2d6: function AS_Image_fdc5f3b545bd42bf9022b93014afa2d6(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 4);
    },
    /** onDownloadComplete defined for imgAd5 **/
    AS_Image_ec2b62be31ea456a98d6ebd4e4b51e29: function AS_Image_ec2b62be31ea456a98d6ebd4e4b51e29(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 5);
    },
    /** onClick defined for flxTransfer **/
    AS_FlexContainer_ffa9b06e930f4dca9bf7ea3176053cc4: function AS_FlexContainer_ffa9b06e930f4dca9bf7ea3176053cc4(eventobject) {
        var self = this;
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** onClick defined for flxMore **/
    AS_FlexContainer_h8f1601135884cbb9bae6c06f5cd660a: function AS_FlexContainer_h8f1601135884cbb9bae6c06f5cd660a(eventobject) {
        var self = this;
        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.commonFunctionForNavigation("frmMessages");
    },
    /** init defined for frmDashboardAggregated **/
    AS_Form_e6a18daf1b8144d3acc7536ddd145c3f: function AS_Form_e6a18daf1b8144d3acc7536ddd145c3f(eventobject) {
        var self = this;
        var date = new Date();
        this.currentMonth = parseInt(date.getMonth() + 1);
        this.init();
    },
    /** preShow defined for frmDashboardAggregated **/
    AS_Form_f28ffde4c99c4fa28c50b0c77468d050: function AS_Form_f28ffde4c99c4fa28c50b0c77468d050(eventobject) {
        var self = this;
        this.preshow();
    },
    /** postShow defined for frmDashboardAggregated **/
    AS_Form_g208abf3af014acab62d649059b9d665: function AS_Form_g208abf3af014acab62d649059b9d665(eventobject) {
        var self = this;
        this.postShow();
    }
});