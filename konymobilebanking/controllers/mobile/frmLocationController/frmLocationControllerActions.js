define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_eb4b13b092f749b1af663731fefe462f: function AS_FlexContainer_eb4b13b092f749b1af663731fefe462f(eventobject) {
        var self = this;
        var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
        locateUsModule.presentationController.commonFunctionForNavigation("frmLogin");
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_d0df04d275b245258b1796e539c49e07: function AS_BarButtonItem_d0df04d275b245258b1796e539c49e07(eventobject) {
        var self = this;
        this.navigateBack();
    },
    /** preShow defined for frmLocation **/
    AS_Form_cd12bb55731748f59cf8c5d1caa6018c: function AS_Form_cd12bb55731748f59cf8c5d1caa6018c(eventobject) {
        var self = this;
        this.frmLocationPreshow();
    }
});