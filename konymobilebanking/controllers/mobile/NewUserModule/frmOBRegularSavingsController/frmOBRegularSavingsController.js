define({
  rates:null,
  info:null,
  charges:null,
  productName:null,
   init : function(){
   var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  }, 
  preShow : function(){
    scope_NewUserPresentationController.count=1;
    var scopeObj = this;
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeaderProductDetails.isVisible = true;
      this.view.customHeaderProductDetails.lblLocateUs.text=this.productName;
    }
    else{
      this.view.flxHeaderProductDetails.isVisible = false;
      this.view.title=this.productName;
    }
     scopeObj.view.rtxData.text=scopeObj.info;
      scopeObj.view.flxFeaturesSelected.isVisible=true;
      scopeObj.view.flxChargesSelected.isVisible=false;
      scopeObj.view.flxInfoSelected.isVisible=false;
  
    this.view.customHeaderProductDetails.flxBack.onClick = function(){
      scopeObj.navtoSelectProduct();
    };
    this.view.btnFeatures.onClick=function(){
      scopeObj.view.rtxData.text=scopeObj.info;
      scopeObj.view.flxFeaturesSelected.isVisible=true;
      scopeObj.view.flxChargesSelected.isVisible=false;
      scopeObj.view.flxInfoSelected.isVisible=false;
    };
    this.view.btnCharges.onClick=function(){
      scopeObj.view.rtxData.text=scopeObj.rates;
      scopeObj.view.flxFeaturesSelected.isVisible=false;
      scopeObj.view.flxChargesSelected.isVisible=true;
      scopeObj.view.flxInfoSelected.isVisible=false;
    };
    this.view.btnInfo.onClick=function(){
      scopeObj.view.rtxData.text=scopeObj.charges;
      scopeObj.view.flxFeaturesSelected.isVisible=false;
      scopeObj.view.flxChargesSelected.isVisible=false;
      scopeObj.view.flxInfoSelected.isVisible=true;
    };
     var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  navtoSelectProduct : function(){
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBSelectProducts");  
  },
  showProductDetails: function () {
    var scope = this;
    this.view.flxProductDetails.isVisible = true;
    this.view.flxSelectProducts.isVisible = false;
    this.view.customHeaderProductDetails.flxBack.onClick = function () {
      scope.showSelectProducts();
    }
  },
  onClose:function()
  {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBSelectProducts");
  },
  setHeaderData: function (backAction, cancelAction, cancelTitle, title) {
    this.view.customHeader.lblLocateUs.text = title;
    if(cancelAction!==null){
      this.view.customHeader.btnRight.onClick = cancelAction;
      this.view.customHeader.btnRight.isVisible = true;
      this.view.customHeader.btnRight.text = cancelTitle;
    }else{
      this.view.customHeader.btnRight.isVisible = false;
    }
    if(backAction!==null){
      this.view.customHeader.flxBack.onClick = backAction;
      this.view.customHeader.flxBack.isVisible = true;
    }else{
      this.view.customHeader.flxBack.isVisible = false;
    }
  },
  setDataToOBRegularSavings:function (response1,response2,response3,response4)
  {
    this.info=response1;
    this.charges=response2;
    this.rates=response3;
    this.productName=response4;
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBRegularSavings");
  },
  showLanding: function (showProgress, title, subTitle, btnOneText, btnOneAction, btnTwoText, btnTwoAction) {
    //     this.showView("flxLanding");

    //     if (showProgress) {
    //       this.view.flxProgressLanding.isVisible = true;
    //     } else {
    //       this.view.flxProgressLanding.isVisible = false;
    //     }

    //     this.view.lblLandingTitle.text = title;
    //     if (subTitle === '') {
    //       this.view.lblLandingSubtitle.isVisible = false;
    //     } else {
    //       this.view.lblLandingSubtitle.isVisible = true;
    //       this.view.lblLandingSubtitle.text = subTitle;
    //     }
    //     this.view.btnLandingOne.text = btnOneText;
    //     this.view.btnLandingOne.onClick = btnOneAction;
    //     this.view.btnLandingTwo.text = btnTwoText;
    //     this.view.btnLandingTwo.onClick = btnTwoAction;
  },
});