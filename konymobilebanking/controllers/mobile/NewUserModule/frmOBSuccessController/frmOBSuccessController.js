define({
  timerCounter: 0,
   init : function(){
   var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  }, 
//   onNavigate: function (par) {
//     var scope = this;
//     if (par === undefined) {

//     }
//     if (par === "signature") {
//       scope.navToSignature();
//     }
//     if (par === "SuccessAndActive") {
//       scope.showSuccessAndActive();
//     }
//     if (par === "Success") {
//       scope.showSuccess();
//     }
//   },

  preShow: function () {
    var self = this;
    this.view.flxResult.setVisibility(false);
    this.view.flxJustAMoment.setVisibility(true);
    //this.view.btnSample.onClick = this.showPopupJustAMoment;
    this.showPopupJustAMoment();
 //   this.showResult();
    this.view.btnContinueResult.onClick = function () {
      //End of OnBoarding
    }
     var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  postShow:function()
  {
    var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
     nuoMod.presentationController.acceptCreditCheckServiceCall();
  },
 
  navToSignature: function () {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBSignature");
  },
  showSuccessAndActive: function () {
    this.view.rtxTitle.text = "Congratulations John!<br>Your account is now active.";
    this.view.flxResult.setVisibility(true);
  },
  showSuccess: function () {
    this.view.flxJustAMoment.setVisibility(false);
    this.view.btnContinueResult.setVisibility(true);
    this.view.rtxTitle.text = "Congratulations John!<br>Your account is now active.";
    this.view.flxResult.setVisibility(true);
    this.view.imgResult.src="confirmation.png";
    this.view.btnContinueResult.onClick = function () {
    var navMan=applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmOBSignature",{});
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBSignature");
    };
  },
  showError:function()
  {
    this.view.btnContinueResult.setVisibility(true);
    this.view.flxJustAMoment.setVisibility(false);
    this.view.rtxTitle.text = "Unable to process the request as your<br> credit check was not successful.<br>Please contact our branch.";
    this.view.flxResult.setVisibility(true);
    this.view.imgResult.src="error.png";
    this.view.btnContinueResult.onClick = function () {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBLanding");
    };
  },
  showPopupJustAMoment: function () {
    var scopeObj = this;
    this.timerCounter = parseInt(this.timerCounter) + 1;
    var timerId = "timerPopupError" + this.timerCounter;
    this.view.flxJustAMoment.setVisibility(true);
    this.view.flxResult.setVisibility(false);
    kony.timer.schedule(timerId, this.postShow,2, false);
  },
});