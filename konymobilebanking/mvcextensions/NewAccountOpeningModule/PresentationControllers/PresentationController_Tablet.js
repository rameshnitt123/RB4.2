define([], function() {

  function PresentationController_Tablet() {
    self = this;
    self.stringifiedProducts = {};
    kony.mvc.Presentation.BasePresenter.call(this);
  }

  inheritsFrom(PresentationController_Tablet, kony.mvc.Presentation.BasePresenter);

  PresentationController_Tablet.prototype.initializePresentationController = function() {

  };

  PresentationController_Tablet.prototype.commonFunctionForNavigation = function(formName) {
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo(formName);
  };

  PresentationController_Tablet.prototype.showAllProducts = function() {
    var productManager = applicationManager.getProductManager();
    var navMan = applicationManager.getNavigationManager();
    var allProducts = productManager.getProductsList();
    navMan.setCustomInfo("frmNAOSelectProduct", {allproducts: allProducts});
    var controller = applicationManager.getPresentationUtility().getController("frmNAOSelectProduct", true);
    controller.clearData();
    navMan.navigateTo("frmNAOSelectProduct");
  };

  PresentationController_Tablet.prototype.reviewProducts=function(userproducts,productslist)
  {
    var userMan=applicationManager.getUserPreferencesManager();
    var navMan=applicationManager.getNavigationManager();
    var userData={}
    userData.firstName = userMan.getUserFirstName();
    userData.lastName = userMan.getUserLastName();
    var formatUtil=applicationManager.getFormatUtilManager();
    var dateobj=formatUtil.getDateObjectfromString(userMan.getUserDOB(),"YYYY-MM-DD");    
    var formattedDate = formatUtil.getFormatedDateString(dateobj,formatUtil.APPLICATION_DATE_FORMAT);
    userData.dob = formattedDate;
    userData.martialStatus = userMan.getmaritalStatus();
    userData.spouseName =userMan.getspouseName();
    userData.dependents = userMan.getnoOfDependants();
    userData.gender = userMan.getUserGender();
    userData.address= userMan.getUserAddressLine1() + userMan.getUserAddressLine2();
    userData.ssn= userMan.getSSN();
    
    
    var list = [];
    var list2= [];
    for (var i = 0; i < userproducts.length; i++) {
      var index = productslist.findIndex(function(product){
        return product.productId.text === userproducts[i];
      });
      var l = {
        productTypeId: productslist[index]["productTypeId"].text,
        productName: productslist[index]["lblAccountStatus"].text,
        productType:productslist[index]["productType"].text,
        productId:productslist[index]["productId"].text

      };
      l={product:JSON.stringify(l)};
      list.push(l);
      list2.push(productslist[index]);
    }
    list=JSON.stringify(list);
    self.stringifiedProducts = {
      "productLi": list.replace(/\"/g,"'").replace(/\\'/g,"\\\"")
    };
    navMan.setCustomInfo("frmNAOReviewProduct",{selectedProducts:list2, user:userData});
    navMan.navigateTo("frmNAOReviewProduct");
  };

  PresentationController_Tablet.prototype.createUserSelectProducts = function() {
    const presentationSuccessCallback = function(res) {
      var navMan = applicationManager.getNavigationManager();
      navMan.navigateTo("frmNAOAck");
    };

    const presentationErrorCallback = function(error) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      if (error.isServerUnreachable) {
        applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
      } else {
        kony.print("Error in createUserSelectProducts");
      }
    };
    var accountManager = applicationManager.getAccountManager();
    accountManager.newAccountOpening(self.stringifiedProducts, presentationSuccessCallback, presentationErrorCallback);
  };

  return PresentationController_Tablet;
});