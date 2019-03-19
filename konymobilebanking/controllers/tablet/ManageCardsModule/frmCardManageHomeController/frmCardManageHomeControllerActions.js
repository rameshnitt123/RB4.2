define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnOne **/
    AS_Button_d08d421b4ec641b189457ac656e1e717: function AS_Button_d08d421b4ec641b189457ac656e1e717(eventobject) {
        var self = this;
        this.setKeypadChar('1');
    },
    /** onClick defined for btnTwo **/
    AS_Button_dc360d6640914ad8829b1ae24b1c29ab: function AS_Button_dc360d6640914ad8829b1ae24b1c29ab(eventobject) {
        var self = this;
        this.setKeypadChar('2');
    },
    /** onClick defined for btnThree **/
    AS_Button_j221b9be114347e0accdbb66db78ca30: function AS_Button_j221b9be114347e0accdbb66db78ca30(eventobject) {
        var self = this;
        this.setKeypadChar('3');
    },
    /** onClick defined for btnFour **/
    AS_Button_f4367375b74846dc9b8d5753944065d3: function AS_Button_f4367375b74846dc9b8d5753944065d3(eventobject) {
        var self = this;
        this.setKeypadChar('4');
    },
    /** onClick defined for btnFive **/
    AS_Button_a2a1f007bdea4674bb000976ffeb7bba: function AS_Button_a2a1f007bdea4674bb000976ffeb7bba(eventobject) {
        var self = this;
        this.setKeypadChar('5');
    },
    /** onClick defined for btnSix **/
    AS_Button_a1d8caa121074a488fac1b808241d83e: function AS_Button_a1d8caa121074a488fac1b808241d83e(eventobject) {
        var self = this;
        this.setKeypadChar('6');
    },
    /** onClick defined for btnSeven **/
    AS_Button_d40a54522019459385de2b1dbb41f2ea: function AS_Button_d40a54522019459385de2b1dbb41f2ea(eventobject) {
        var self = this;
        this.setKeypadChar('7');
    },
    /** onClick defined for btnEight **/
    AS_Button_de75af7bcc8e477d8076bf09e23d9d76: function AS_Button_de75af7bcc8e477d8076bf09e23d9d76(eventobject) {
        var self = this;
        this.setKeypadChar('8');
    },
    /** onClick defined for btnNine **/
    AS_Button_d6ae9d38ebf6463f8a5895367f60d63e: function AS_Button_d6ae9d38ebf6463f8a5895367f60d63e(eventobject) {
        var self = this;
        this.setKeypadChar('9');
    },
    /** onClick defined for btnZero **/
    AS_Button_f7ac3860cdde417f913bb874906b7d73: function AS_Button_f7ac3860cdde417f913bb874906b7d73(eventobject) {
        var self = this;
        this.setKeypadChar('0');
    },
    /** onTouchEnd defined for imgClearKeypad **/
    AS_Image_gbfd60a34ab747b5b0d42b72adf82233: function AS_Image_gbfd60a34ab747b5b0d42b72adf82233(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_c6ba1a677c6b4b29b223af81bb130c10: function AS_BarButtonItem_c6ba1a677c6b4b29b223af81bb130c10(eventobject) {
        var self = this;
        this.showEditOptions();
    },
    /** init defined for frmCardManageHome **/
    AS_Form_f6fc8df381dc452e9e398eae1a91f4b1: function AS_Form_f6fc8df381dc452e9e398eae1a91f4b1(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmCardManageHome **/
    AS_Form_de057c3ab4eb4c27b0dc4164b3b062cc: function AS_Form_de057c3ab4eb4c27b0dc4164b3b062cc(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
    /** postShow defined for frmCardManageHome **/
    AS_Form_d592911ce86d4d14ad65c3a36772a32b: function AS_Form_d592911ce86d4d14ad65c3a36772a32b(eventobject) {
        var self = this;
        this.postShow();
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_g6aaa7e548394870830f48eef285d6aa: function AS_BarButtonItem_g6aaa7e548394870830f48eef285d6aa(eventobject) {
        var self = this;
        this.navigateBack();
    }
});