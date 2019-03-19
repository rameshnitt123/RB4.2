define([], function() {

    function NewAccountOpening_PresentationController() {
        scope_NewAccountOpeningPresentationController=this;
        kony.mvc.Presentation.BasePresenter.call(this);
        stringifiedProducts={};
    }

    inheritsFrom(NewAccountOpening_PresentationController, kony.mvc.Presentation.BasePresenter);

    NewAccountOpening_PresentationController.prototype.initializePresentationController = function() {
        
    };
  NewAccountOpening_PresentationController.prototype.commonFunctionForNavigation = function(formName) {
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo(formName);
  };
  NewAccountOpening_PresentationController.prototype.showAllProducts=function()
  {
    var BC=applicationManager.getProductManager();
    var navMan=applicationManager.getNavigationManager();
    var allProducts=BC.getProductsList();
    navMan.setCustomInfo("frmNAOSelectProduct",{"allproducts":allProducts});
    var controller = applicationManager.getPresentationUtility().getController('frmNAOSelectProduct', true);
    controller.clearData();
    navMan.navigateTo("frmNAOSelectProduct");
    
  };
  
  NewAccountOpening_PresentationController.prototype.reviewProducts=function(userproducts,productslist)
  {
    var userMan=applicationManager.getUserPreferencesManager();
    var navMan=applicationManager.getNavigationManager();
    var userData={}
    userData.firstName = userMan.getUserFirstName();
    userData.lastName = userMan.getUserLastName();
    var formatUtil=applicationManager.getFormatUtilManager();
    var dateobj=formatUtil.getDateObjectfromString(userMan.getUserDOB(),"YYYY-MM-DD");    
    var formattedDate = formatUtil.getFormatedDateString(dateobj,formatUtil.getApplicationDateFormat());
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
      var index=productslist.findIndex(x => x.productId.text === userproducts[i]);
      var l = {
        productTypeId: productslist[index]["productTypeId"].text,
        productName: productslist[index]["lblProductTitle"],
        productType:productslist[index]["lblProductSubTitle"].text,
        productId:productslist[index]["productId"].text

      };
      l={product:JSON.stringify(l)};
      list.push(l);
      list2.push(productslist[index]);
    }
    list=JSON.stringify(list);
    scope_NewAccountOpeningPresentationController.stringifiedProducts = {
      "productLi": list.replace(/\"/g,"'").replace(/\\'/g,"\\\"")
    };
    navMan.setCustomInfo("frmNAOReviewProduct",{selectedProducts:list2, user:userData});
    navMan.navigateTo("frmNAOReviewProduct");
  };
  
  NewAccountOpening_PresentationController.prototype.createUserSelectProducts = function() {
    var accountBC = applicationManager.getAccountManager();
    accountBC.newAccountOpening(scope_NewAccountOpeningPresentationController.stringifiedProducts, presentationSuccessCallback, presentationErrorCallback);

    function presentationSuccessCallback(res) {
      var navMan=applicationManager.getNavigationManager();
      //navMan.setCustomInfo("frmNAOAck",{selectedProducts:list2});
      navMan.navigateTo("frmNAOAck");
    }
      function presentationErrorCallback(res) {
     applicationManager.getPresentationUtility().dismissLoadingScreen();
      if (res["isServerUnreachable"])
        applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", res);
      else
         kony.print("Error in createUserSelectProducts");     
    }
  };
 
  
    return NewAccountOpening_PresentationController;
});