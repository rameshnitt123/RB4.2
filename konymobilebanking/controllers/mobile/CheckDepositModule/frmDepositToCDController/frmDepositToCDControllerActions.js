define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_fdcfc70f9b4847238077f8bb729ab3ee: function AS_FlexContainer_fdcfc70f9b4847238077f8bb729ab3ee(eventobject) {
        var self = this;
        this.backNavigation();
    },
    /** onRowClick defined for segTransactionMode **/
    AS_Segment_i62943b595dc419bbfe50f82aec5df2f: function AS_Segment_i62943b595dc419bbfe50f82aec5df2f(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.segTransactionModeRowClick();
    },
    /** init defined for frmDepositToCD **/
    AS_Form_dc30a8fdecb943ee9695212405868f6d: function AS_Form_dc30a8fdecb943ee9695212405868f6d(eventobject) {
        var self = this;
        this.depositToCDInit();
    },
    /** preShow defined for frmDepositToCD **/
    AS_Form_b23b960ee3584ea2bd7b9af9e91d710f: function AS_Form_b23b960ee3584ea2bd7b9af9e91d710f(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});