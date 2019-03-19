define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_c066403f9cb44f5098af477f3048fcc1: function AS_BarButtonItem_c066403f9cb44f5098af477f3048fcc1(eventobject) {
        var self = this;
        this.onClickCancel();
    },
    /** init defined for frmP2PPickContact **/
    AS_Form_i662c7bc24aa4031b9430fd3aea229cf: function AS_Form_i662c7bc24aa4031b9430fd3aea229cf(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmP2PPickContact **/
    AS_Form_aa0406a9a8e74e9fba64d76ad1849863: function AS_Form_aa0406a9a8e74e9fba64d76ad1849863(eventobject) {
        var self = this;
        this.frmPreShow();
    },
    /** postShow defined for frmP2PPickContact **/
    AS_Form_icd8f53b5ac8473197f5e1783afa302f: function AS_Form_icd8f53b5ac8473197f5e1783afa302f(eventobject) {
        var self = this;
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
});