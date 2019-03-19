define({ 

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES_NUOLANDING", currentForm);
  }, 

  preShow: function() {
    var navManager = applicationManager.getNavigationManager();
    var formdata = navManager.getCustomInfo("frmOBAcknowledgement");
    if (formdata.form === "signature") {
      this.view.flxMain.setVisibility(true);
      this.view.flxSignature.setVisibility(false);
      this.view.lblStatus.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.Congratulations!");
      var productsdata = navManager.getCustomInfo("frmOBSelectProducts");
      var products = productsdata.products;
      this.setSegmentData(products);
      this.view.lblGoToAccounts.onClick = function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var loginData = navManager.getCustomInfo("frmLogin");
        var nuoUserData = navManager.getCustomInfo("frmOBLogin");
        loginData.NUOUsername = nuoUserData.username;
        navManager.setCustomInfo("frmLogin", loginData);
        var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.onLogout();
      };
    } else if (formdata.form === "creditcheck") {
      this.view.imgSign.src = "sign.png";
      this.view.flxMain.setVisibility(false);
      this.view.flxSignature.setVisibility(true);
      this.view.lblStatus.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.CreditCheckSuccessful");
      this.view.flxSignature.onClick=function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmOBSignature", {});
        var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.commonFunctionForNavigation("frmOBSignature");
      };
    }
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  setSegmentData: function(products) {
    var userProducts = products.userProducts;
    var allProducts = products.allProducts;

    var data = userProducts.map(function(userProduct) {
      var product = allProducts.find(function(item) {
        return userProduct.productId === item.productId;
      });
      var productInfo = product.productType === "Credit Card"
                        ? applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.Yourcardwillbedispatched")
                        : applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.YourAccountisActive");
      return {
        lblProductTitle: product.productName,
        lblProductInfo: productInfo,
        imgAcc: {src: "product.png"}
      };
    }); 

    this.view.segSelectedProducts.setData(data);
  }
});