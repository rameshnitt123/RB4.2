define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_ba06cfbee77d4a578599947b9150b4f4: function AS_FlexContainer_ba06cfbee77d4a578599947b9150b4f4(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmDevRegLoginType");
    },
    /** onClick defined for btnRight **/
    AS_Button_ed971cf614f646859c8d485cda1371f0: function AS_Button_ed971cf614f646859c8d485cda1371f0(eventobject) {
        var self = this;
        this.skipAction();
    },
    /** onClick defined for btnEnable **/
    AS_Button_e8f44906a7c6487c97cceafdb2b6f468: function AS_Button_e8f44906a7c6487c97cceafdb2b6f468(eventobject) {
        var self = this;
        return self.showPopupRegSuccessful.call(this);
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_e4becf5457e34c0cacf55ea973981824: function AS_BarButtonItem_e4becf5457e34c0cacf55ea973981824(eventobject) {
        var self = this;
        this.skipAction();
    },
    /** init defined for frmDevRegTouchId **/
    AS_Form_b02ca0e08b2b4aca851d587816bb6fbb: function AS_Form_b02ca0e08b2b4aca851d587816bb6fbb(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmDevRegTouchId **/
    AS_Form_b86356179e7a475f82297139e960f819: function AS_Form_b86356179e7a475f82297139e960f819(eventobject) {
        var self = this;
        this.touchIdpreShow();
    }
});