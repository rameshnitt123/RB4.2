define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRight **/
    AS_Button_ccf48cffa1be4bacaa56198bedb538f1: function AS_Button_ccf48cffa1be4bacaa56198bedb538f1(eventobject) {
        var self = this;
        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onTouchStart defined for flxArrow **/
    AS_FlexContainer_j1c17a69da6e42168151a30f1f5b10bd: function AS_FlexContainer_j1c17a69da6e42168151a30f1f5b10bd(eventobject, x, y) {
        var self = this;
        return self.flxArrowOnclick.call(this);
    },
    /** onClick defined for flxAccountInfo **/
    AS_FlexContainer_fd8e879365354e7e94201ec003666d6e: function AS_FlexContainer_fd8e879365354e7e94201ec003666d6e(eventobject) {
        var self = this;
        return self.flxArrowOnclick.call(this);
    },
    /** onTouchStart defined for flxSegStatements **/
    AS_FlexScrollContainer_e8eb3997247c41a7b2dd07fa9bad7132: function AS_FlexScrollContainer_e8eb3997247c41a7b2dd07fa9bad7132(eventobject, x, y) {
        var self = this;
        return self.animateFlxSelectYearBack.call(this);
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_b038dca088b048a98a421629a1878de3: function AS_BarButtonItem_b038dca088b048a98a421629a1878de3(eventobject) {
        var self = this;
        this.flxBackOnClick();
    },
    /** init defined for frmAccStatements **/
    AS_Form_jccb55cf92e44924979001c48d9d7be3: function AS_Form_jccb55cf92e44924979001c48d9d7be3(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmAccStatements **/
    AS_Form_fcc891e754e64821b0da5793f5acb6eb: function AS_Form_fcc891e754e64821b0da5793f5acb6eb(eventobject) {
        var self = this;
        return self.frmAccountStatementsPreshow.call(this);
    }
});