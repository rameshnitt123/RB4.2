define({
  rates:null,
  info:null,
  features:null,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow : function(){
    var scopeObj = this;
    var navMan=applicationManager.getNavigationManager();
    var data = navMan.getCustomInfo("frmNAOProductDetails");
     if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.customHeader.lblLocateUs.text= data.productName;
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.title = data.productName;
    }
    
    this.view.customHeader.imgBack.src="closewhite.png";
    this.rates=data.rates;
    this.info=data.info;
    this.features=data.features;
    this.view.customHeader.flxBack.onClick = function(){
      scopeObj.navtoSelectProduct();
    };
    this.view.btnFeatures.onClick=function(){
      scopeObj.view.rtxData.text=scopeObj.features;
      scopeObj.view.flxFeaturesSelected.isVisible=true;
      scopeObj.view.flxChargesSelected.isVisible=false;
      scopeObj.view.flxInfoSelected.isVisible=false;
      scopeObj.view.segProductDetails.setVisibility(false);
    };
    this.view.btnCharges.onClick=function(){
      scopeObj.view.rtxData.text=scopeObj.rates;
      scopeObj.view.flxFeaturesSelected.isVisible=false;
      scopeObj.view.flxChargesSelected.isVisible=true;
      scopeObj.view.flxInfoSelected.isVisible=false;
      scopeObj.view.segProductDetails.setVisibility(false);

    };
    this.view.btnInfo.onClick=function(){
      scopeObj.view.rtxData.text=scopeObj.info;
      scopeObj.view.flxFeaturesSelected.isVisible=false;
      scopeObj.view.flxChargesSelected.isVisible=false;
      scopeObj.view.flxInfoSelected.isVisible=true;
      scopeObj.view.segProductDetails.setVisibility(false);

    };
      scopeObj.view.rtxData.text=scopeObj.features;
      scopeObj.view.flxFeaturesSelected.isVisible=true;
      scopeObj.view.flxChargesSelected.isVisible=false;
      scopeObj.view.flxInfoSelected.isVisible=false;
      scopeObj.view.segProductDetails.setVisibility(false);
  },
  
  navtoSelectProduct : function(){
      var NAOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
      NAOMod.presentationController.commonFunctionForNavigation("frmNAOSelectProduct");
  }
  
 
  
 
});