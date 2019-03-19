define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTextChange defined for tbxUsername **/
    AS_TextField_e33be38c6e854e89b8c32ba251be81d2: function AS_TextField_e33be38c6e854e89b8c32ba251be81d2(eventobject, changedtext) {
        var self = this;
        self.resetSkinsOfUsernameAndPwd.call(this);
        self.enableLoginButton.call(this);
    },
    /** onTextChange defined for tbxPassword **/
    AS_TextField_d2e6e0034be24311964b18622704078b: function AS_TextField_d2e6e0034be24311964b18622704078b(eventobject, changedtext) {
        var self = this;
        self.resetSkinsOfUsernameAndPwd.call(this);
        self.enableLoginButton.call(this);
    },
    /** onClick defined for btnLogIn **/
    AS_Button_h017d5e37a7a4482a1b1217d0ac22bed: function AS_Button_h017d5e37a7a4482a1b1217d0ac22bed(eventobject) {
        var self = this;
        return self.btnLoginOnClick.call(this);
    },
    /** onClick defined for flxOpenNewAccount **/
    AS_FlexContainer_g4eafa9b97c74a1c81c2eed992281565: function AS_FlexContainer_g4eafa9b97c74a1c81c2eed992281565(eventobject) {
        var self = this;
        this.navToNUOPhone();
    },
    /** onClick defined for btnPinId **/
    AS_Button_e0f04d6a261043a1a7493133a6fa29b7: function AS_Button_e0f04d6a261043a1a7493133a6fa29b7(eventobject) {
        var self = this;
        return self.showPinScreen.call(this);
    },
    /** onClick defined for btnLocate **/
    AS_Button_e871bfd24cd74f03b0880c9f934f9980: function AS_Button_e871bfd24cd74f03b0880c9f934f9980(eventobject) {
        var self = this;
        this.onLocateUSClick();
    },
    /** onClick defined for btnEnroll **/
    AS_Button_f7fa01f6196a476bab10b8b1a1f46fd6: function AS_Button_f7fa01f6196a476bab10b8b1a1f46fd6(eventobject) {
        var self = this;
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.checkAppinit = true;
        authMode.presentationController.commonFunctionForNavigation("frmEnrollLastName");
    },
    /** onClick defined for btnSupport **/
    AS_Button_ddca20b68415486faf31bad9fd1fa798: function AS_Button_ddca20b68415486faf31bad9fd1fa798(eventobject) {
        var self = this;
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.checkAppinit = true;
        authMode.presentationController.commonFunctionForNavigation("frmSupport");
    },
    /** onClick defined for flxCross **/
    AS_FlexContainer_a14c96d2494746beb07ead9f0659ba4b: function AS_FlexContainer_a14c96d2494746beb07ead9f0659ba4b(eventobject) {
        var self = this;
        return self.flxCancelDialPadOnClick.call(this);
    },
    /** onClick defined for flxCancelFI **/
    AS_FlexContainer_i7194816b12f4520875b01c6e37f415c: function AS_FlexContainer_i7194816b12f4520875b01c6e37f415c(eventobject) {
        var self = this;
        return self.flxCancelFIOnClick.call(this);
    },
    /** onClick defined for flxFaceIdPopUp **/
    AS_FlexContainer_j9cafb45b32c434a85967261553fd46a: function AS_FlexContainer_j9cafb45b32c434a85967261553fd46a(eventobject) {
        var self = this;
        //this.view.flxFaceIdPopUp.setVisibility(false);
        //this.view.forceLayout();
    },
    /** onClick defined for flxCancel **/
    AS_FlexContainer_e8059ee060174b45b4f31a06f675663c: function AS_FlexContainer_e8059ee060174b45b4f31a06f675663c(eventobject) {
        var self = this;
        this.customAlertPopUpFlxCancelOnClick();
        //to enable the screen
        this.view.flxWelcome.setEnabled(true);
        this.view.flxContent.setEnabled(true);
        this.view.flxFooter.setEnabled(true);
    },
    /** onDownloadComplete defined for imgAd1 **/
    AS_Image_jd291611a9c34167af6f8b4970001df9: function AS_Image_jd291611a9c34167af6f8b4970001df9(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 1);
    },
    /** onDownloadComplete defined for imgAd2 **/
    AS_Image_c3d9c988cf0d49bd8945b5190c359853: function AS_Image_c3d9c988cf0d49bd8945b5190c359853(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 2);
    },
    /** onDownloadComplete defined for imgAd3 **/
    AS_Image_caf642f394ec4dc6ac32e850b6890c91: function AS_Image_caf642f394ec4dc6ac32e850b6890c91(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 3);
    },
    /** onDownloadComplete defined for imgAd4 **/
    AS_Image_h2eb335453f64e20b873e1581f6ca411: function AS_Image_h2eb335453f64e20b873e1581f6ca411(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 4);
    },
    /** onDownloadComplete defined for imgAd5 **/
    AS_Image_b6447e350f804c3198447f6ef626956c: function AS_Image_b6447e350f804c3198447f6ef626956c(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 5);
    },
    /** init defined for frmLogin **/
    AS_Form_i93d45a3a71a4e18b4c0123ddd1ff557: function AS_Form_i93d45a3a71a4e18b4c0123ddd1ff557(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmLogin **/
    AS_Form_eb9b89592ac242958770cc625d8d058b: function AS_Form_eb9b89592ac242958770cc625d8d058b(eventobject) {
        var self = this;
        return self.frmLoginPreShow.call(this);
    }
});