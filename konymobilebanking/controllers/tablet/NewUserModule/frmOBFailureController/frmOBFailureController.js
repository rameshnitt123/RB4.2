define({ 

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    var navManager = applicationManager.getNavigationManager();
    var formdata = navManager.getCustomInfo("frmOBFailure");

    if (formdata.form == "signature") {
      this.view.rtxTitle.text = this.geti18Text("kony.mb.nuo.signatureisnotdone");
      this.view.lblSubTitle.text = this.geti18Text("kony.tab.NewUser.PleaseTryLater");
    } else if (formdata.form == "creditcheck") {
      this.view.rtxTitle.text = this.geti18Text("kony.mb.nuo.CreditCheckError!");
      this.view.lblSubTitle.text = this.geti18Text("kony.mb.nuo.creditcheckfail");
    }

    this.view.flxCallNow.onClick = function() {
      var phoneNumber = "1111111111";
      kony.phone.dial(phoneNumber); 
    };

    this.view.btnContinueResult.onClick = function() {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var  authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");       
      authMod.presentationController.getCurrentState();
    };
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  geti18Text: function(i18text) {
    return applicationManager.getPresentationUtility().getStringFromi18n(i18text);
  }
});