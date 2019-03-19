define({
  showMoreDetails: function() {
      var onaModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
      onaModule.presentationController.commonFunctionForNavigation("frmNAOProductDetails");
  }
});