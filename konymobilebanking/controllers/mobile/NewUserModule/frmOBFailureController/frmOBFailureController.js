define({
   init : function(){
   var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  }, 

    preShow: function () {
      this.view.btnCancelResult.setVisibility(false);
      this.view.btnContinueResult.onClick=function()
      {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var  authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");       
      authMod.presentationController.getCurrentState();
      };
       var navManager = applicationManager.getNavigationManager();
       var formdata=navManager.getCustomInfo("frmOBFailure");
      if(formdata.form=="signature")
      {
        this.view.rtxTitle.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.signatureisnotdone");
        this.view.lblSubTitle.text="Please Try Later";
      }
      else if(formdata.form=="creditcheck")
      {
        
        this.view.rtxTitle.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.CreditCheckError!");
        this.view.lblSubTitle.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.creditcheckfail");
      }
         this.view.flxCallNow.onClick=function()
      {
        var phoneNumber="1111111111";
         kony.phone.dial(phoneNumber); 
      };
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
   
});