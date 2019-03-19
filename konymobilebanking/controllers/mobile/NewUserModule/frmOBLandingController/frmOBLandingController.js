define({
    init : function(){
   var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  }, 
  preShow: function() {
    var scope = this;
    this.view.flxProgressValueLanding.width = "10%";
    // this.postShow();
    // this.view.flxProgressValueLanding.width="10%";
    var navMan=applicationManager.getNavigationManager();
    var username=navMan.getCustomInfo("frmLogin");
    this.view.flxPopupFillingComplete.isVisible = false;
    this.view.flxProgressLanding.isVisible = true;
    if(username.username)
    {
      this.view.lblLandingTitle.text = "Welcome "+username.username;
    }
    else
    {
      this.view.lblLandingTitle.text = "Welcome John Bruce";
    }
    this.view.lblLandingSubtitle.isVisible = false;
    this.view.btnLandingOne.isVisible = true;
    this.view.btnLandingOne.text = "CONTINUE";
    this.view.btnLandingTwo.isVisible = true;
    this.view.btnLandingTwo.text = "START NEW APPLICATION";
    //this.showLanding();
    this.postShow();

    this.view.btnCompleteCancel.onClick = function() {
      scope.view.flxPopupFillingComplete.setVisibility(false);
    };
    this.view.btnCompleteContinue.onClick = function() {
      scope.view.flxPopupFillingComplete.setVisibility(false);
      var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      NUOMod.presentationController.commonFunctionForNavigation("frmOBSelectProducts");  
    };
    this.view.customHeader.btnRight.onClick = function() {
       var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
	   authMod.presentationController.onLogout(); 
    };
    this.view.btnLandingTwo.onClick = function() {
      scope.view.flxPopupFillingComplete.isVisible = true;
    };
    this.view.btnCompleteCancel.onClick = function() {
      scope.view.flxPopupFillingComplete.isVisible = false;
    };
    this.view.btnCompleteContinue.onClick = function() {
      var  nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");       
      nuoMod.presentationController.resetData();
    };
    this.view.btnLogoutLanding.onClick = function() {
      var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      NUOMod.presentationController.commonFunctionForNavigation("frmLogin");  
    };
    this.view.btnLandingOne.onClick = this.onClickOnContinue;
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  showLanding: function() {
    this.view.flxLanding.isVisible = true;
    this.view.flxPopupFillingComplete.isVisible = false;
  },
  onClickOnContinue: function() {
    var navMan = applicationManager.getNavigationManager();
    var data = navMan.getCustomInfo("frmOBLanding");
    navMan.navigateTo(data.formname);   
  },
  postShow: function() {
    var navMan = applicationManager.getNavigationManager();
    var nav = navMan.getCustomInfo("frmOBLanding");
    var width = nav.width;
    this.view.flxProgressValueLanding.width = width + "%";

  },
  //onNavigate : function(showProgress, title, subTitle, btnOneText, btnOneAction, btnTwoText, btnTwoAction) {
  //    if (showProgress) {
  //             this.view.flxProgressLanding.isVisible = true;
  //         } else {
  //             this.view.flxProgressLanding.isVisible = false;
  //         }

  //         this.view.lblLandingTitle.text = title;
  //         if (subTitle == '') {
  //             this.view.lblLandingSubtitle.isVisible = false;
  //         } else {
  //             this.view.lblLandingSubtitle.isVisible = true;
  //             this.view.lblLandingSubtitle.text = subTitle;
  //         }
  //         this.view.btnLandingOne.text = btnOneText;
  //         this.view.btnLandingOne.onClick = btnOneAction;
  //         this.view.btnLandingTwo.text = btnTwoText;
  //         this.view.btnLandingTwo.onClick = btnTwoAction;
  // },
  //   onNavigate : function(par){
  //     var self = this;
  //     if(par === "2"){
  //       this.view.flxProgressLanding.isVisible = true;
  //       this.view.lblLandingTitle.text = "Welcome John Bruce";
  //       this.view.lblLandingSubtitle.isVisible = false;
  //       this.view.btnLandingOne.text = "CONTINUE";
  //       this.view.btnLandingOne.onClick = function(){
  //	   var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
  //	   NUOMod.presentationController.commonFunctionForNavigation("frmOBSelectProducts");  
  //       };
  //       this.view.btnLandingTwo.text = "START NEW APPLICATION";
  //       this.view.btnLandingTwo.onClick = function(){
  //         self.showPopUp();
  //       }
  //     }
  //   },
  showPopUp: function() {
  this.view.flxPopupFillingComplete.setVisibility(true);
}

       });