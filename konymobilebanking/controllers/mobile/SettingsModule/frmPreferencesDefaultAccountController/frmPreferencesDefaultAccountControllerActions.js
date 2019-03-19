define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for undefined **/
    AS_BarButtonItem_c7e550fbc19c44f79d5a3738a80d569a: function AS_BarButtonItem_c7e550fbc19c44f79d5a3738a80d569a(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
    },
    /** preShow defined for frmPreferencesDefaultAccount **/
    AS_Form_ccdc08c2afb14807a4e7c1debfb91cb9: function AS_Form_ccdc08c2afb14807a4e7c1debfb91cb9(eventobject) {
        var self = this;
        this.preShow();
    }
});