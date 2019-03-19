define([], function() {

  function NewUser_PresentationController() {
    scope_NewUserPresentationController = this;
    kony.mvc.Presentation.BasePresenter.call(this);
    scope_NewUserPresentationController.count=0;
    scope_NewUserPresentationController.isLoggedIn = false;
    scope_NewUserPresentationController.userNavigation = null;
    scope_NewUserPresentationController.previousFormCheck = "";
    var modelDefinition=kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("NewUser");
    this.userData=new modelDefinition();
    scope_NewUserPresentationController.isOCRScanSelected="";
    scope_NewUserPresentationController.userAvailable = null;
    scope_NewUserPresentationController.products = {};
    scope_NewUserPresentationController.userPersonalInfo="";
    scope_NewUserPresentationController.userState=[];
    scope_NewUserPresentationController.fieldscCountFromJumio=0;
    scope_NewUserPresentationController.currentAddress={};
    scope_NewUserPresentationController.isSignatureDone=false;
	scope_NewUserPresentationController.currLatitude="";
	scope_NewUserPresentationController.currLongitude="";
  }

  inheritsFrom(NewUser_PresentationController, kony.mvc.Presentation.BasePresenter);

  NewUser_PresentationController.prototype.initializePresentationController = function() {};
 
  NewUser_PresentationController.prototype.isNewUserSignatureDone = function(){
    return scope_NewUserPresentationController.isSignatureDone;
  };
  
  NewUser_PresentationController.prototype.isNewUserLoggedIn = function(){
    return scope_NewUserPresentationController.isLoggedIn===true ? true:false;
  };

  NewUser_PresentationController.prototype.resetNewUserPresentationController = function() {
    scope_NewUserPresentationController.userNavigation = null;
    var modelDefinition=kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("NewUser");
    this.userData=new modelDefinition();
    scope_NewUserPresentationController.userAvailable = null;
    scope_NewUserPresentationController.products = {};
  };

  NewUser_PresentationController.prototype.clearNewUserData = function() {
    scope_NewUserPresentationController.resetNewUserPresentationController();
    var newUserBM = applicationManager.getNewUserBusinessManager();
    newUserBM.resetNewUserBusinessManager();
  };

  NewUser_PresentationController.prototype.verifyPhoneNo = function(phoneNo) {
    var newUserBM = applicationManager.getNewUserBusinessManager();
    var validationUtility = applicationManager.getValidationUtilManager();
    if (validationUtility.isValidPhoneNumber(phoneNo)) {
      scope_NewUserPresentationController.userData.phone = phoneNo;
      newUserBM.customGetExistingUserPhone(scope_NewUserPresentationController.userData, scope_NewUserPresentationController.verifyPhoneNoPresentationSuccessCallback, scope_NewUserPresentationController.verifyPhoneNoPresentationErrorCallback);
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmOBSignInWithPhoneNumber', true);
      controller.bindError("invalidphoneno");
    }
  };
  NewUser_PresentationController.prototype.verifyPhoneNoPresentationSuccessCallback = function(res) {
    var navManager = applicationManager.getNavigationManager();
    if(res.success!=="")
    {
      navManager.navigateTo("frmOBSecurityCode");
    }
    else
    {
      var controller = applicationManager.getPresentationUtility().getController('frmOBLandingRegistered', true);
      controller.enableBtnPhone();
      navManager.navigateTo("frmOBLandingRegistered");
    }
    // applicationManager.getPresentationUtility().dismissLoadingScreen();
  };

  NewUser_PresentationController.prototype.verifyPhoneNoPresentationErrorCallback = function(err) {
    kony.print("Error in verifyPhoneNo");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
	  else if(Number(err["serverErrorRes"]["opstatus"]) == 403) {
	    var navManager = applicationManager.getNavigationManager();
	    var controller = applicationManager.getPresentationUtility().getController('frmOBLandingRegistered', true);
      controller.enableBtnPhone();
      navManager.navigateTo("frmOBLandingRegistered");
	  }
	  else{
      var Controller = applicationManager.getPresentationUtility().getController('frmOBSignInWithPhoneNumber', true);      
	    Controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.error.StandardErrorMessage"));
    }
  };
  NewUser_PresentationController.prototype.verifyEmail = function(email) {
    var newUserBM = applicationManager.getNewUserBusinessManager();
    var validationUtility = applicationManager.getValidationUtilManager();
    if (validationUtility.isValidEmail(email)) {
      scope_NewUserPresentationController.commonFunctionForNavigation("frmOBsetUserNamePwd"); 
      scope_NewUserPresentationController.userData.email = email;
      //newUserBM.customGetExistingUserEmail(scope_NewUserPresentationController.userData, scope_NewUserPresentationController.verifyEmailPresentationSuccessCallback, scope_NewUserPresentationController.verifyEmailPresentationErrorCallback);
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmOBEmail', true);
      controller.bindError('invalidemail');
    }
  };
  NewUser_PresentationController.prototype.verifyEmailPresentationSuccessCallback = function(res) {
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmOBSecurityCode");
    // applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  NewUser_PresentationController.prototype.verifyEmailPresentationErrorCallback = function(err) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
    else
    {
      var navManager = applicationManager.getNavigationManager();
      var controller = applicationManager.getPresentationUtility().getController('frmOBLandingRegistered', true);
      controller.enableBtnEmail();
      navManager.navigateTo("frmOBLandingRegistered");
    }
  };
  NewUser_PresentationController.prototype.verifyResendOTP = function() {
    var navManager = applicationManager.getNavigationManager();
    var newUserBM = applicationManager.getNewUserBusinessManager();
    newUserBM.customRequestOTP(scope_NewUserPresentationController.verifyResendOTPPresentationSuccessCallback, scope_NewUserPresentationController.verifyResendOTPPresentationErrorCallback);
  };
  NewUser_PresentationController.prototype.verifyResendOTPPresentationSuccessCallback = function(res) {
    kony.print("success");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  NewUser_PresentationController.prototype.verifyResendOTPPresentationErrorCallback = function(err) {
    kony.print("error");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
  };
  NewUser_PresentationController.prototype.checkUserAvailability = function(userName) {
    var navManager = applicationManager.getNavigationManager();
    var newUserBM = applicationManager.getNewUserBusinessManager();
    var validationUtility = applicationManager.getValidationUtilManager();
    if (validationUtility.isValidUserName(userName)) {
      scope_NewUserPresentationController.userData.UserName = userName;
      scope_NewUserPresentationController.userData.userName = userName;
      newUserBM.checkUserName(scope_NewUserPresentationController.userData, scope_NewUserPresentationController.checkUserAvailabilityPresentationSuccessCallback, scope_NewUserPresentationController.checkUserAvailabilityPresentationErrorCallback);
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmOBsetUserNamePwd', true);
      controller.bindError("invalidusername");
	   controller.showFlxSecurityRequirementsUsername();
    }
  };
  NewUser_PresentationController.prototype.checkUserAvailabilityPresentationSuccessCallback = function(res) {
    if(res.success!=="")
    {
      scope_NewUserPresentationController.userAvailable = true;
    }
    else
    {
      scope_NewUserPresentationController.userAvailable = false;
      var controller = applicationManager.getPresentationUtility().getController('frmOBsetUserNamePwd', true);
      controller.bindError("username");
    }
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  NewUser_PresentationController.prototype.checkUserAvailabilityPresentationErrorCallback = function(err) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
	var controller = applicationManager.getPresentationUtility().getController('frmOBsetUserNamePwd', true);
    controller.bindError("username");
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
  };
   NewUser_PresentationController.prototype.checkUsersAvailability = function(userName,successcallback,errorcallback) {
    var navManager = applicationManager.getNavigationManager();
    var newUserBM = applicationManager.getNewUserBusinessManager();
    var validationUtility = applicationManager.getValidationUtilManager();
    if (validationUtility.isValidUserName(userName)) {
      scope_NewUserPresentationController.userData.UserName = userName;
      scope_NewUserPresentationController.userData.userName = userName;
      newUserBM.checkUserName(scope_NewUserPresentationController.userData, successcallback,errorcallback);
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmOBsetUserNamePwd', true);
      controller.bindError("invalidusername");
	   controller.showFlxSecurityRequirementsUsername();
    }
  };
  NewUser_PresentationController.prototype.validatePassword = function(password) {
    var validationUtilManager = applicationManager.getValidationUtilManager();
    var controller = applicationManager.getPresentationUtility().getController('frmOBsetUserNamePwd', true);
    if (!validationUtilManager.isValidPassword(password)) {
      controller.showFlxSecurityRequirements();
      return false;
    }
    else
    {
      return true;
    }
  };
  NewUser_PresentationController.prototype.createNewUser = function(userName, password, reenter, formContext) {
    var validationUtility = applicationManager.getValidationUtilManager();
    var newUserBM = applicationManager.getNewUserBusinessManager();
    var controller = applicationManager.getPresentationUtility().getController('frmOBsetUserNamePwd', true);
    var isValidUserName = validationUtility.isValidUserName(userName);
    var isValidPassword = validationUtility.isValidPassword(password);
    scope_NewUserPresentationController.userNamePasswordJson = {
      "username": userName,
      "password": password
    };
    if (!isValidUserName) {
      controller.bindError("invalidusername");
	  controller.showFlxSecurityRequirementsUsername();
    }
    if (!isValidPassword) {
      controller.bindError("invalidpassword");
	  controller.showFlxSecurityRequirements();
    }
    if (!scope_NewUserPresentationController.userAvailable) {
      controller.bindError("username");
    }
    if (isValidUserName && isValidPassword && scope_NewUserPresentationController.userAvailable) {
      scope_NewUserPresentationController.userData.password = password;
      newUserBM.createCredentialsForNewUser(scope_NewUserPresentationController.userData, scope_NewUserPresentationController.createNewUserPresentationSuccessCallback.bind(formContext), scope_NewUserPresentationController.createNewUserPresentationErrorCallback);
    }
  };
  NewUser_PresentationController.prototype.createNewUserPresentationSuccessCallback = function(res) {
    scope_NewUserPresentationController.NUOLogin(scope_NewUserPresentationController.userNamePasswordJson, this);
  };
  NewUser_PresentationController.prototype.createNewUserPresentationErrorCallback = function(err) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    kony.print("Error in createCredentials");
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
    else {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var controller = applicationManager.getPresentationUtility().getController('frmOBsetUserNamePwd', true);
      controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.error.StandardErrorMessage"));
    }  
  };
  NewUser_PresentationController.prototype.commonFunctionForNavigation = function(formName) {
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo(formName);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };

  NewUser_PresentationController.prototype.getAllUserProducts=function()
  {
    var selProBC = applicationManager.getProductManager();
    selProBC.getUserProductsList(scope_NewUserPresentationController.getUserProductsListPresentationSuccessCallback, scope_NewUserPresentationController.getUserProductsListPresentationErrorCallback);
  };

  NewUser_PresentationController.prototype.getUserProductsListPresentationSuccessCallback=function(res)
  {
    var response=[];
    var navMan=applicationManager.getNavigationManager();
    var selPro= navMan.getCustomInfo("frmOBSelectProducts");
    for(var i=0;i<res.length;i++)
    {
      response.push(JSON.parse(res[i].products));
    }
    if(selPro&&selPro!==""&&selPro!==null)
    {
      selPro.products.userProducts=response;
      navMan.setCustomInfo("frmOBSelectProducts",selPro);
    }

  };
  NewUser_PresentationController.prototype.getUserProductsListPresentationErrorCallback=function(err)
  {
    kony.print("error in getUserProductsListPresentationErrorCallback"); 
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
  };
  NewUser_PresentationController.prototype.createUserSelectProducts = function(userproducts,productslist) {
    var list = [];
    for (var i = 0; i < userproducts.length; i++) {
      var index=productslist.findIndex(x => x.productId === userproducts[i]);
      var l = {
        productTypeId: productslist[index]["productTypeId"],
        productName: productslist[index]["lblProductTitle"],
        productType:productslist[index]["lblProductSubTitle"],
        productId:productslist[index]["productId"]

      };
      l={product:JSON.stringify(l)};
      list.push(l);
    }
    list=JSON.stringify(list);

    var parms = {
      //    productLi: JSON.stringify(list).replace(/\"/g, "'").replace(/\\\"/g, "\"").replace(/\\'/g, "\"")
      "productLi": list.replace(/\"/g,"'").replace(/\\'/g,"\\\"")
    };
    var selProBC = applicationManager.getProductManager();
    selProBC.createSelectedProductsList(parms, scope_NewUserPresentationController.createProductsPresentationSuccessCallback, scope_NewUserPresentationController.createProductsPresentationErrorCallback);
  };

  NewUser_PresentationController.prototype.createProductsPresentationSuccessCallback=function(res) {
    scope_NewUserPresentationController.getAllUserProducts();
    scope_NewUserPresentationController.navigateFromProductsBasedOnState();
  };

  NewUser_PresentationController.prototype.createProductsPresentationErrorCallback=function(err) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    kony.print("Error in createproducts");
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
  };

  NewUser_PresentationController.prototype.getAllProducts=function()
  {
    var products={};
    var BC=applicationManager.getProductManager();
    var navMan=applicationManager.getNavigationManager();
    products.allProducts=BC.getProductsList();
    navMan.setCustomInfo("frmOBSelectProducts",{"products":products});
  };
  NewUser_PresentationController.prototype.getState = function() {
    scope_NewUserPresentationController.getAllProducts();
    var BC = applicationManager.getNewUserBusinessManager();
    BC.customRequestState(scope_NewUserPresentationController.getStatePresentationSuccessCallback, scope_NewUserPresentationController.getStatePresentationErrorCallback);
  };
  NewUser_PresentationController.prototype.getStatePresentationSuccessCallback = function(res) {
    var formname, width;
    var BC = applicationManager.getNewUserBusinessManager();
    var sp = applicationManager.getNavigationManager();
    var data = {};    
    scope_NewUserPresentationController.userPersonalInfo=res[0].userPersonalInfo;
    if(res[0].userProducts == "true")
    {
      scope_NewUserPresentationController.getAllUserProducts();
    }
    if (kony.application.getCurrentForm().id == "frmOBsetUserNamePwd") {
      sp.navigateTo("frmOBSelectProducts");
    } else {
      if (res[0].userProducts == "true" && res[0].userPersonalInfo == "false" && res[0].userEmploymentInfo == "false" && res[0].userFinancialInfo == "false" && res[0].userSecurityQuestions == "false" && res[0].creditCheck == "false") {
        scope_NewUserPresentationController.updateUserData(data);
        formname = "frmOBAddPersonalInfo";
        width = "20";

      } else if (res[0].userPersonalInfo == "true" && res[0].userEmploymentInfo == "false" && res[0].userFinancialInfo == "false" && res[0].userSecurityQuestions == "false" && res[0].creditCheck == "false") {
        scope_NewUserPresentationController.setNewUserData();
        formname = "frmOBEmploymentType";
        width = "30";

      } else if (res[0].userEmploymentInfo == "true" && res[0].userFinancialInfo == "false" && res[0].userSecurityQuestions == "false" && res[0].creditCheck == "false") {
        scope_NewUserPresentationController.setNewUserData();
        formname = "frmOBFinancialInfoAnnualIncome";
        width = "40";

      } else if (res[0].userFinancialInfo == "true" && res[0].userSecurityQuestions == "false" && res[0].creditCheck == "false") {
        scope_NewUserPresentationController.setNewUserData();
        formname = "frmOBDocumentsNew";
        width = "50";

      } else if (res[0].userSecurityQuestions == "true" && res[0].creditCheck == "false") {
        formname = "frmOBCreditCheck";
        width = "60";

      } else if (res[0].creditCheck == "true") {
        formname = "frmOBCreditCheck";
        width = "70";

      } else {

        formname = "frmOBSelectProducts";
        width = "10";

      }
      scope_NewUserPresentationController.updateUserData(data);
      BC.updateNewUserInfo(data);
      var navMan = applicationManager.getNavigationManager();
      navMan.setCustomInfo("frmOBLanding", {
        "width": width,"formname":formname
      });
      sp.navigateTo("frmOBLanding");
    }
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  NewUser_PresentationController.prototype.getStatePresentationErrorCallback = function(err) {
    kony.print("Error in getState");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
  };

  NewUser_PresentationController.prototype.clearUserData = function() {
    var data = {};
    var BC = applicationManager.getNewUserBusinessManager();
    scope_NewUserPresentationController.updateUserData(data);
    BC.updateNewUserInfo(data);
  };

  NewUser_PresentationController.prototype.resetData = function() {
    var resetData = applicationManager.getNewUserBusinessManager();
    resetData.resetNewUserData(scope_NewUserPresentationController.resetDataPresentationSuccessCallback, scope_NewUserPresentationController.resetDataPresentationErrorCallback);
  };

  NewUser_PresentationController.prototype.resetDataPresentationSuccessCallback = function(res) {
    // scope_NewUserPresentationController.getSelectProducts();
    scope_NewUserPresentationController.clearNewUserData();
    var navMan=applicationManager.getNavigationManager();
    scope_NewUserPresentationController.getAllProducts();
    var prolist=navMan.getCustomInfo("frmOBSelectProducts");
    if(prolist&&prolist.products.allProducts)
    {
      navMan.navigateTo("frmOBSelectProducts");
    }
    else
    {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
  };

  NewUser_PresentationController.prototype.resetDataPresentationErrorCallback = function(err) {
    kony.print("Error in resetData");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
  };
  NewUser_PresentationController.prototype.updateNewUserInfo = function(data) {
    var NUOManger = applicationManager.getNewUserBusinessManager();
    NUOManger.updateNewUserInfo(data);
  };

  NewUser_PresentationController.prototype.createPersonalInfo = function() {
    var NUOManger = applicationManager.getNewUserBusinessManager();
    scope_NewUserPresentationController.userData = scope_NewUserPresentationController.getUserData();
    NUOManger.customCreatePersonalInfo(scope_NewUserPresentationController.userData, scope_NewUserPresentationController.createPersonalInfoPresentationSuccessCallback, scope_NewUserPresentationController.createPersonalInfoPresentationErrorCallbac);
  };
  NewUser_PresentationController.prototype.createPersonalInfoPresentationSuccessCallback = function(res) {
    scope_NewUserPresentationController.updateUserData(scope_NewUserPresentationController.userData);
    scope_NewUserPresentationController.navigateBasedOnUserInfoType();
    // applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  NewUser_PresentationController.prototype.createPersonalInfoPresentationErrorCallbac = function(err) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
  };
  NewUser_PresentationController.prototype.navigateBasedOnUserInfoType = function() {
    if(scope_NewUserPresentationController.userNavigation == "PersonalInfo")
    {
      scope_NewUserPresentationController.userPersonalInfo="true";
      scope_NewUserPresentationController.commonFunctionForNavigation("frmOBEmploymentType");
    }
    else if (scope_NewUserPresentationController.userNavigation == "EmploymentInfo")
    {
      scope_NewUserPresentationController.commonFunctionForNavigation("frmOBFinancialInfoAnnualIncome");
    }
    else if(scope_NewUserPresentationController.userNavigation == "FinancialInfo")
    {
      scope_NewUserPresentationController.commonFunctionForNavigation("frmOBSecurityQuestionsNew");
    }
    else if(scope_NewUserPresentationController.userNavigation == "SecurityQuestions")
    {
      scope_NewUserPresentationController.acceptCreditCheck(scope_NewUserPresentationController.userData.ssn);
    }
    //applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  NewUser_PresentationController.prototype.getPersonalInfo = function() {
    var NUOManger = applicationManager.getNewUserBusinessManager();
    NUOManger.customGetUserPersonalInfo(scope_NewUserPresentationController.getPersonalInfoPresentationSuccessCallback, scope_NewUserPresentationController.getPersonalInfoPresentationErrorCallback);
  };
  NewUser_PresentationController.prototype.getPersonalInfoPresentationSuccessCallback = function(res) {
    scope_NewUserPresentationController.updateUserData(res[0]);
    scope_NewUserPresentationController.commonFunctionForNavigation("frmOBEditFirstLastName");
    //applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  NewUser_PresentationController.prototype.getPersonalInfoPresentationErrorCallback = function(err) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
  };
  NewUser_PresentationController.prototype.updateUserData = function(newUserJSON) {
    var keysLength = Object.keys(newUserJSON).length;
    if(keysLength > 0){
      for(var key in newUserJSON){
        if(key!=="userId"){
          scope_NewUserPresentationController.userData[key]=(newUserJSON[key] && newUserJSON[key] !== "" && newUserJSON[key] !== null) ? newUserJSON[key] : "";
        }
      }
    }
    else
    {
      var modelDefinition=kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("NewUser");
      scope_NewUserPresentationController.userData=new modelDefinition();

    }
  };

  NewUser_PresentationController.prototype.updateNewUserModel=function(newUserJSON){
    for(var key in newUserJSON){
      if(key!=="userId"){
        scope_NewUserPresentationController.userData[key]=(newUserJSON[key] && newUserJSON[key] !== "" && newUserJSON[key] !== null) ? newUserJSON[key] : "";
      }
    }
  };

  //   NewUser_PresentationController.prototype.updateUserName = function(newUserJSON) {
  //     scope_NewUserPresentationController.userData.userfirstname = newUserJSON.userfirstname;
  //     scope_NewUserPresentationController.userData.userlastname = newUserJSON.userlastname;
  //   };

  //   NewUser_PresentationController.prototype.updateGender = function(newUserJSON) {
  //     scope_NewUserPresentationController.userData.gender = (newUserJSON.gender && newUserJSON.gender !== "" && newUserJSON.gender !== null) ? newUserJSON.gender : "";
  //   };

  //   NewUser_PresentationController.prototype.updateMaritalStatus = function(newUserJSON) {
  //     scope_NewUserPresentationController.userData.maritalStatus = (newUserJSON.maritalStatus && newUserJSON.maritalStatus !== "" && newUserJSON.maritalStatus !== null) ? newUserJSON.maritalStatus : "";
  //   };

  //   NewUser_PresentationController.prototype.updateDateOfBirth = function(newUserJSON) {
  //     scope_NewUserPresentationController.userData.dateOfBirth = (newUserJSON.dateOfBirth && newUserJSON.dateOfBirth !== "" && newUserJSON.dateOfBirth !== null) ? newUserJSON.dateOfBirth : "";
  //   };

  //   NewUser_PresentationController.prototype.updateSpouseName = function(newUserJSON) {
  //     scope_NewUserPresentationController.userData.spouseFirstName = (newUserJSON.spouseFirstName && newUserJSON.spouseFirstName !== "" && newUserJSON.spouseFirstName !== null) ? newUserJSON.spouseFirstName : "";
  //     scope_NewUserPresentationController.userData.spouseLastName = (newUserJSON.spouseLastName && newUserJSON.spouseLastName !== "" && newUserJSON.spouseLastName !== null) ? newUserJSON.spouseLastName : "";
  //   };

  //   NewUser_PresentationController.prototype.updateAddress = function(newUserJSON) {
  //     scope_NewUserPresentationController.userData.addressLine1 = (newUserJSON.addressLine1 && newUserJSON.addressLine1 !== "" && newUserJSON.addressLine1 !== null) ? newUserJSON.addressLine1 : "";
  //     scope_NewUserPresentationController.userData.addressLine2 = (newUserJSON.addressLine2 && newUserJSON.addressLine2 !== "" && newUserJSON.addressLine2 !== null) ? newUserJSON.addressLine2 : "";
  //     scope_NewUserPresentationController.userData.country = (newUserJSON.country && newUserJSON.country !== "" && newUserJSON.country !== null) ? newUserJSON.country : "";
  //     scope_NewUserPresentationController.userData.state = (newUserJSON.state && newUserJSON.state !== "" && newUserJSON.state !== null) ? newUserJSON.state : "";
  //     scope_NewUserPresentationController.userData.zipcode = (newUserJSON.zipcode && newUserJSON.zipcode !== "" && newUserJSON.zipcode !== null) ? newUserJSON.zipcode : "";
  //     scope_NewUserPresentationController.userData.city = (newUserJSON.city && newUserJSON.city !== "" && newUserJSON.city !== null) ? newUserJSON.city : "";
  //   };

  //   NewUser_PresentationController.prototype.updateNoOfDependents = function(newUserJSON) {
  //     scope_NewUserPresentationController.userData.noOfDependents = (newUserJSON.noOfDependents && newUserJSON.noOfDependents !== "" && newUserJSON.noOfDependents !== null) ? newUserJSON.noOfDependents : "";
  //   };

  //   NewUser_PresentationController.prototype.updateEmploymentInfo = function(newUserJSON) {
  //     scope_NewUserPresentationController.userData.employmentInfo = (newUserJSON.employmentInfo && newUserJSON.employmentInfo !== "" && newUserJSON.employmentInfo !== null) ? newUserJSON.employmentInfo : "";
  //   };

  //   NewUser_PresentationController.prototype.updateCompanyAndJobProfile = function(newUserJSON) {
  //     scope_NewUserPresentationController.userData.company = (newUserJSON.company && newUserJSON.company !== "" && newUserJSON.company !== null) ? newUserJSON.company : "";
  //     scope_NewUserPresentationController.userData.jobProfile = (newUserJSON.jobProfile && newUserJSON.jobProfile !== "" && newUserJSON.jobProfile !== null) ? newUserJSON.jobProfile : "";
  //   };

  //   NewUser_PresentationController.prototype.updateExperience = function(newUserJSON) {
  //     scope_NewUserPresentationController.userData.experience = (newUserJSON.experience && newUserJSON.experience !== "" && newUserJSON.experience !== null) ? newUserJSON.experience : "";
  //     scope_NewUserPresentationController.userData.informationType = (newUserJSON.informationType && newUserJSON.informationType !== "" && newUserJSON.informationType !== null) ? newUserJSON.informationType : "";
  //   };

  //   NewUser_PresentationController.prototype.updateFinancialInfoAnnualIncome = function(newUserJSON) {
  //     scope_NewUserPresentationController.userData.annualIncome = (newUserJSON.annualIncome && newUserJSON.annualIncome !== "" && newUserJSON.annualIncome !== null) ? newUserJSON.annualIncome : "";
  //   };

  //   NewUser_PresentationController.prototype.updateFinancialInfoAssets = function(newUserJSON) {
  //     scope_NewUserPresentationController.userData.assets = (newUserJSON.assets && newUserJSON.assets !== "" && newUserJSON.assets !== null) ? newUserJSON.assets : "";
  //   };

  //   NewUser_PresentationController.prototype.updateFinancialInfoExpenditure = function(newUserJSON) {
  //     scope_NewUserPresentationController.userData.montlyExpenditure = (newUserJSON.montlyExpenditure && newUserJSON.montlyExpenditure !== "" && newUserJSON.montlyExpenditure !== null) ? newUserJSON.montlyExpenditure : "";
  //     scope_NewUserPresentationController.userData.informationType = (newUserJSON.informationType && newUserJSON.informationType !== "" && newUserJSON.informationType !== null) ? newUserJSON.informationType : "";
  //   };

  NewUser_PresentationController.prototype.getUserPersonalInfo = function(newUserJSON) {
    var NUOManger = applicationManager.getNewUserBusinessManager();
    NUOManger.customGetUserPersonalInfo(data);
  };

  NewUser_PresentationController.prototype.getUserData = function() {
    return scope_NewUserPresentationController.userData;
  };

  NewUser_PresentationController.prototype.getMaritalStatus = function() {
    return scope_NewUserPresentationController.userData.maritalStatus;
  };

  //   NewUser_PresentationController.prototype.updateSSNAndInformationType = function(newUserJSON) {
  //     scope_NewUserPresentationController.userData.ssn = (newUserJSON.ssn && newUserJSON.ssn !== "" && newUserJSON.ssn !== null) ? newUserJSON.ssn : "";
  //     scope_NewUserPresentationController.userData.informationType = (newUserJSON.informationType && newUserJSON.informationType !== "" && newUserJSON.informationType !== null) ? newUserJSON.informationType : "";
  //   };

  NewUser_PresentationController.prototype.getSSN = function() {
    return scope_NewUserPresentationController.userData.ssn;
  };

  NewUser_PresentationController.prototype.getUserPhoneNumber = function() {
    return scope_NewUserPresentationController.userData.phone;
  };

  NewUser_PresentationController.prototype.getUserEmail = function() {
    return scope_NewUserPresentationController.userData.email;
  };

  NewUser_PresentationController.prototype.validateDOBAndNavigate = function(date) {
    var utilManager = applicationManager.getValidationUtilManager();
    var isDOBValid = utilManager.isDOBValid(date);
    var isAgeValid = utilManager.isAgeValid(date);
    if (isDOBValid && isAgeValid) {
      var dob = date.split("/");
      var data = {
        "dateOfBirth": dob[2] + "-" + dob[0] + "-" + dob[1]
      };
      scope_NewUserPresentationController.updateNewUserModel(data);
      scope_NewUserPresentationController.commonFunctionForNavigation("frmOBGender");
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmOBDOB', true);
      controller.bindViewError("Enter valid DOB");
    }
  };

  NewUser_PresentationController.prototype.navigateBasedOnMaritalStatus = function(data) {
    if (data.maritalStatus.toLowerCase() === "married") {
      scope_NewUserPresentationController.commonFunctionForNavigation("frmOBSpouseName");
    } else {
      var spouseData = {
        "spouseFirstName" : "",
        "spouseLastName" : ""
      };
      scope_NewUserPresentationController.updateNewUserModel(spouseData);
      scope_NewUserPresentationController.commonFunctionForNavigation("frmOBDependents");
    }
  };

  NewUser_PresentationController.prototype.navigateFromDependentsBasedOnSelectedMaritalStatus = function() {
    if (scope_NewUserPresentationController.getMaritalStatus().toLowerCase() === "married")
      scope_NewUserPresentationController.commonFunctionForNavigation("frmOBSpouseName");
    else
      scope_NewUserPresentationController.commonFunctionForNavigation("frmOBMaritialStatus");
  };

  NewUser_PresentationController.prototype.navigateFromProductsBasedOnState = function() {
    var BC = applicationManager.getNewUserBusinessManager();
    BC.customRequestState(scope_NewUserPresentationController.navigateFromProductsBasedOnStatePresentationSuccessCallback, scope_NewUserPresentationController.navigateFromProductsBasedOnStatePresentationErrorCallback);
  };

  NewUser_PresentationController.prototype.navigateFromProductsBasedOnStatePresentationSuccessCallback = function(res) {
    var data = {};
    var BC = applicationManager.getNewUserBusinessManager();
    if (res[0].userPersonalInfo == "true") {
      scope_NewUserPresentationController.getPersonalInfo();
    } else {
      scope_NewUserPresentationController.updateUserData(data);
      BC.updateNewUserInfo(data);
      var navMan = applicationManager.getNavigationManager();
      navMan.navigateTo("frmOBAddPersonalInfo");
      //  applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
  };
  NewUser_PresentationController.prototype.navigateFromProductsBasedOnStatePresentationErrorCallback = function(res) {
    kony.print("Error in navigateFromProductsBasedOnState");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  NewUser_PresentationController.prototype.setNewUserData = function() {
    var NUOManger = applicationManager.getNewUserBusinessManager();
    NUOManger.customGetUserPersonalInfo(scope_NewUserPresentationController.setNewUserDataPresentationSuccessCallback, scope_NewUserPresentationController.setNewUserDataPresentationErrorCallback);
  };
  NewUser_PresentationController.prototype.setNewUserDataPresentationSuccessCallback = function(res) {
    if (res[0]) {
      scope_NewUserPresentationController.updateUserData(res[0]);
    }
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  NewUser_PresentationController.prototype.setNewUserDataPresentationErrorCallback = function(err) {
    kony.print("Error in presentationErrorCallback of setNewUserData");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
   NewUser_PresentationController.prototype.addressSearch = function(searchText){
	 var locationManager = applicationManager.getLocationManager();
     if(scope_NewUserPresentationController.currLatitude && scope_NewUserPresentationController.currLongitude){
          searchText.currLongitude = scope_NewUserPresentationController.currLongitude;
           searchText.currLatitude = scope_NewUserPresentationController.currLatitude;
         locationManager.fetchAddressSuggestions(searchText,scope_NewUserPresentationController.addressSearchPresentationSuccessCallback, scope_NewUserPresentationController.addressSearchPresentationErrorCallback);
    
     }   
	else{   
    var positionoptions = {
      timeout: 64000,
      fastestInterval: 0,
      minimumTime: 0
    };
    applicationManager.getPresentationUtility().showLoadingScreen();
    kony.location.getCurrentPosition(geoLocationSuccessCallBack,geoLocationErrorCallBack, positionoptions);
    function geoLocationSuccessCallBack(response) {
      try {
        searchText.currLatitude = response.coords.latitude;  
		scope_NewUserPresentationController.currLatitude = response.coords.latitude;  
      searchText.currLongitude = response.coords.longitude;    
	 scope_NewUserPresentationController.currLongitude = response.coords.longitude;  
      locationManager.fetchAddressSuggestions(searchText,scope_NewUserPresentationController.addressSearchPresentationSuccessCallback, scope_NewUserPresentationController.addressSearchPresentationErrorCallback);
        
      } catch (err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      }
    }
    function geoLocationErrorCallBack(err) {
      var deviceUtilManager = applicationManager.getDeviceUtilManager();
      var isIphone = deviceUtilManager.isIPhone();
      applicationManager.getPresentationUtility().dismissLoadingScreen();

      if (err.code == 1) {
        var i18nKey = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationPermissionDenied");
        applicationManager.getDataProcessorUtility().showToastMessageError(scope,i18nKey);
      }
      if (err.code == 3 && !isIphone) {
        var i18n_timeOut = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationTimeOut");
        applicationManager.getDataProcessorUtility().showToastMessageError(scope,i18n_timeOut);
      }
      if (err.code == 2 && !isIphone) {
        var i18n_turnOnLocationAlert = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.turnOnLocationAlert");
        kony.ui.Alert(i18n_turnOnLocationAlert, onClickSettingsOrCancelHandler, constants.ALERT_TYPE_CONFIRMATION, "Cancel", "Settings", "");
      }
      function onClickSettingsOrCancelHandler(response){
        if (response === true) {
          kony.print("User not willing to on GPS");
          locationManager.fetchAddressSuggestions(searchText,scope_NewUserPresentationController.addressSearchPresentationSuccessCallback, scope_NewUserPresentationController.addressSearchPresentationErrorCallback);
        } else {
          LocationSettings.open();
        }
      }
    }
    }
  };
  NewUser_PresentationController.prototype.addressSearchPresentationSuccessCallback = function(res) {
    kony.print("Success in addressSearch");
    var controller = applicationManager.getPresentationUtility().getController('frmOBResidentialAddress', true);
    controller.setSearchData(res);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  NewUser_PresentationController.prototype.addressSearchPresentationErrorCallback = function(err) {
    kony.print("Error in addressSearch");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
  };
  NewUser_PresentationController.prototype.getSecurityQuestions=function()
  {
    var nuoBMan=applicationManager.getNewUserBusinessManager();
    nuoBMan.getAllSecurityQuestions(scope_NewUserPresentationController.getSecurityQuestionsPresentationSuccessController,scope_NewUserPresentationController.getSecurityQuestionsPresentationErrorController);
  };
  NewUser_PresentationController.prototype.getSecurityQuestionsPresentationSuccessController=function(res)
  {
    var navMan=applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmOBSecurityQuestions",{"questions":res});
    navMan.navigateTo("frmOBSecurityQuestions");
  };
  NewUser_PresentationController.prototype.getSecurityQuestionsPresentationErrorController=function(err)
  {  
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
  };
  NewUser_PresentationController.prototype.verifySecurityQuestions=function(parms)
  {
    var nuoBMan=applicationManager.getNewUserBusinessManager();
    nuoBMan.verifySecurityQuestions(parms,scope_NewUserPresentationController.verifySecurityQuestionsPresentationSuccessController,scope_NewUserPresentationController.verifySecurityQuestionsPresentationErrorController);
  };
  NewUser_PresentationController.prototype.verifySecurityQuestionsPresentationSuccessController=function(res)
  {
    var navMan=applicationManager.getNavigationManager();
    navMan.navigateTo("frmOBCreditCheck");
  };
  NewUser_PresentationController.prototype.verifySecurityQuestionsPresentationErrorController=function(err)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    else
    {
      var controller = applicationManager.getPresentationUtility().getController('frmOBSecurityQuestions', true);
      controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.pleaseentervalidanswers"));
    }
  };
  NewUser_PresentationController.prototype.acceptCreditCheck=function(ssn)
  {
    var params = {
      "ssn": ssn
    };
    var nuoMan=applicationManager.getNewUserBusinessManager();
    nuoMan.userCreditCheck(params,scope_NewUserPresentationController.acceptCreditCheckServiceCallSuccessCallback,scope_NewUserPresentationController.acceptCreditCheckServiceCallErrorCallback);

  };

  NewUser_PresentationController.prototype.acceptCreditCheckServiceCallSuccessCallback=function(res)
  {
    var navMan=applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmOBAcknowledgement",{"form":"creditcheck"});
    navMan.navigateTo("frmOBAcknowledgement");

  };
  NewUser_PresentationController.prototype.acceptCreditCheckServiceCallErrorCallback=function(err)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    else
    {
      var navMan=applicationManager.getNavigationManager();
      navMan.setCustomInfo("frmOBFailure",{"form":"creditcheck"});
      navMan.navigateTo("frmOBFailure");
    }
  }; 
  NewUser_PresentationController.prototype.uploadDocument = function(data) {
    var NUOManger = applicationManager.getNewUserBusinessManager();
    NUOManger.uploadDocumentForNewUser(data, scope_NewUserPresentationController.uploadDocumentPresentationSuccess, scope_NewUserPresentationController.uploadDocumentPresentationError);
  };
  NewUser_PresentationController.prototype.uploadDocumentPresentationSuccess=function(res){
    kony.print("Success in uploadDocument");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  NewUser_PresentationController.prototype.uploadDocumentPresentationError=function(err){
    kony.print("Error in uploadDocument");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
  };
  NewUser_PresentationController.prototype.uploadSignature=function()
  {
    var navMan=applicationManager.getNavigationManager();
    var base64String=navMan.getCustomInfo("frmOBSignature");
    var params = {
      "signatureImage": base64String.base64String
    };
    var nuoMan=applicationManager.getNewUserBusinessManager();
    nuoMan.signatureUpload(params,scope_NewUserPresentationController.uploadSignatureSuccessCallback,scope_NewUserPresentationController.uploadSignatureErrorCallback);
  };
  NewUser_PresentationController.prototype.uploadSignatureSuccessCallback=function(res)
  {
    scope_NewUserPresentationController.isSignatureDone=true;
    var navMan=applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmOBAcknowledgement",{"form":"signature"});
    navMan.navigateTo("frmOBAcknowledgement");

  };
  NewUser_PresentationController.prototype.uploadSignatureErrorCallback=function(err)
  {
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    else
    {

      var navMan=applicationManager.getNavigationManager();
      navMan.setCustomInfo("frmOBFailure",{"form":"signature"});
      navMan.navigateTo("frmOBFailure");
    }
  };
  NewUser_PresentationController.prototype.NUOLogin=function(newUserJSON, formContext)
  {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var validationManager = applicationManager.getValidationUtilManager();
    scope_NewUserPresentationController.UsernamePasswordJSON = newUserJSON;
    if (validationManager.isValidUserName(newUserJSON.username) && validationManager.isValidUserName(newUserJSON.password)) 
    {
      var userPreferencesManager = applicationManager.getUserPreferencesManager();
      if (userPreferencesManager.isNewUser(newUserJSON.username))
        userPreferencesManager.clearUserData(formContext);
      var nuoMan=applicationManager.getNewUserBusinessManager();
      nuoMan.login(newUserJSON,scope_NewUserPresentationController.NUOLoginPresentationSuccess,scope_NewUserPresentationController.NUOLoginPresentationError);
    }
    else {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var controller;
      if(kony.application.getCurrentForm().id === "frmOBLogin")
        controller = applicationManager.getPresentationUtility().getController('frmOBLogin', true);
      else
        controller = applicationManager.getPresentationUtility().getController('frmOBsetUserNamePwd', true);
      controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Invalid.Username.or.Password"));
    }
  };
  NewUser_PresentationController.prototype.NUOLoginPresentationSuccess=function(res)
  {
    scope_NewUserPresentationController.isLoggedIn = true;
    scope_NewUserPresentationController.isSignatureDone=false;
    var navMan = applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmOBLogin", {
      "username": scope_NewUserPresentationController.UsernamePasswordJSON.username
    });
    scope_NewUserPresentationController.clearNewUserData();
    // applicationManager.fetchAllProducts();
    scope_NewUserPresentationController.getCurrentState();
    //applicationManager.getPresentationUtility().dismissLoadingScreen();
  };

  NewUser_PresentationController.prototype.NUOLoginPresentationError=function(err)
  {
    kony.print("Error in NUOLogin");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", err);
    else
    {
      var controller;
      if(kony.application.getCurrentForm().id === "frmOBLogin")
        controller = applicationManager.getPresentationUtility().getController('frmOBLogin', true);
      else
        controller = applicationManager.getPresentationUtility().getController('frmOBsetUserNamePwd', true);      controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Invalid.Username.or.Password"));
    }
  };
  NewUser_PresentationController.prototype.getCurrentState=function()
  {
    scope_NewUserPresentationController.getAllProducts();
    var BC = applicationManager.getNewUserBusinessManager();
    BC.customRequestState(scope_NewUserPresentationController.getCurrentStatePresentationSuccessCallback, scope_NewUserPresentationController.getCurrentStatePresentationErrorCallback);
  };
  NewUser_PresentationController.prototype.getCurrentStatePresentationSuccessCallback = function(res) { 

    //var BC = applicationManager.getNewUserBusinessManager();
    var navMan = applicationManager.getNavigationManager();

    if(res[0].userProducts == "true")
    {
      scope_NewUserPresentationController.getAllUserProducts();
    }
    scope_NewUserPresentationController.userPersonalInfo = res[0].userPersonalInfo;
    navMan.setCustomInfo("frmOBLandingNew",{"state":res[0]});
    if (kony.application.getCurrentForm().id == "frmOBsetUserNamePwd") {
      var prolist=navMan.getCustomInfo("frmOBSelectProducts");
      if(prolist&&prolist.products.allProducts)
      {
        navMan.navigateTo("frmOBSelectProducts");
      }
      else
      {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      }
    } else {
      navMan.navigateTo("frmOBLandingNew");
    }
  };
  NewUser_PresentationController.prototype.getCurrentStatePresentationErrorCallback=function(err)
  {

  };
  NewUser_PresentationController.prototype.onClose=function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    scope_NewUserPresentationController.getCurrentState();
    //scope_NewUserPresentationController.commonFunctionForNavigation("frmOBLandingNew");    
  };
  NewUser_PresentationController.prototype.updateJumioCapturedData=function(documentData)
  {
    scope_NewUserPresentationController.updateJumioCapturedDOB(documentData);    
    scope_NewUserPresentationController.updateJumioCapturedGender(documentData);
    scope_NewUserPresentationController.updateJumioCapturedUserName(documentData);
    scope_NewUserPresentationController.updateJumioCapturedAddress(documentData);
    if(scope_NewUserPresentationController.fieldscCountFromJumio===11){
      scope_NewUserPresentationController.commonFunctionForNavigation("frmOBPersonalInfo");
    }
    else{
      scope_NewUserPresentationController.commonFunctionForNavigation("frmOBEditFirstLastName");
    }
  };
  NewUser_PresentationController.prototype.updateJumioCapturedUserName=function(documentData)
  {
    if(documentData.firstName){
      documentData["userfirstname"]=documentData.firstName;
      scope_NewUserPresentationController.fieldscCountFromJumio++;
    }
    if(documentData.lastName){
      documentData["userlastname"]=documentData.lastName;
      scope_NewUserPresentationController.fieldscCountFromJumio++;
    }
    scope_NewUserPresentationController.updateNewUserModel(documentData);
  };
  NewUser_PresentationController.prototype.updateJumioCapturedDOB=function(documentData)
  {
    if(documentData.dob && documentData.dob.date && documentData.dob.month && documentData.dob.year)
    {
      if(documentData.dob.month.length == 1)
      {
        documentData.dob.month = "0"+documentData.dob.month;
      }
            if(documentData.dob.date.length == 1)
      {
        documentData.dob.date = "0"+documentData.dob.date;
      }    
      documentData["dateOfBirth"]=documentData.dob.year+"-"+documentData.dob.month+"-"+documentData.dob.date;
      //documentData["dateOfBirth"]="33-12-2019";
      scope_NewUserPresentationController.fieldscCountFromJumio=3;
    }
    scope_NewUserPresentationController.updateNewUserModel(documentData);
  };
  NewUser_PresentationController.prototype.updateJumioCapturedGender=function(documentData)
  {
    if(documentData.gender)
    {
      if(documentData.gender == "M")
        documentData.gender = "Male";
      else if(documentData.gender == "F")
        documentData.gender = "Female";
      scope_NewUserPresentationController.fieldscCountFromJumio++;
    }    
    scope_NewUserPresentationController.updateNewUserModel(documentData);
  };
  NewUser_PresentationController.prototype.updateJumioCapturedAddress= function(documentData){
    if(documentData.addressLine || documentData.issuingCountry || documentData.postCode || documentData.subdivision || documentData.city ){
      if(documentData.addressLine)
      {
        var arr=documentData.addressLine.split(",");
        if(arr.length>1)
        {
          var addresslane1="";
          var addresslane2="";
          var mid=Math.round((arr.length)/2);
          for(var i=0;i<mid;i++)
          {
            addresslane1=addresslane1+arr[i]+",";
          }
          documentData["addressLine1"]=addresslane1.substring(0,addresslane1.length-1).trim();
          for(var j=mid;j<=arr.length-3;j++){
            addresslane2=addresslane2+arr[j]+",";
          }
          documentData["addressLine2"]=addresslane2.substring(0,addresslane2.length-1).trim();
        }
        else
        {
          documentData["addressLine2"]=documentData.addressLine;
        }
        scope_NewUserPresentationController.fieldscCountFromJumio++;
      }
      if(documentData.issuingCountry)
      {
        documentData["country"]=documentData.issuingCountry;
        scope_NewUserPresentationController.fieldscCountFromJumio++;
      }
      if(documentData.postCode)
      {
        documentData["zipcode"]=documentData.postCode;
        scope_NewUserPresentationController.fieldscCountFromJumio++;
      }
      if(documentData.subdivision)
      {
        documentData["state"]=documentData.subdivision;
        scope_NewUserPresentationController.fieldscCountFromJumio++;
      }
      if(documentData.city)
      {
        documentData["city"]=documentData.city;
        scope_NewUserPresentationController.fieldscCountFromJumio++;
      }
      scope_NewUserPresentationController.updateNewUserModel(documentData);
    }
    else{
      scope_NewUserPresentationController.setUserAddress();
    }
  };
  NewUser_PresentationController.prototype.setUserAddress = function ()
  {
    if(scope_NewUserPresentationController.userPersonalInfo!=="true"){
      scope_NewUserPresentationController.updateNewUserModel(scope_NewUserPresentationController.currentAddress);
    }
    else{
      kony.print("user already entered his address need not to prepopulate address");
    }
  };
  NewUser_PresentationController.prototype.getUserCurrentAddress = function ()
  {
    //kony.location.getCurrentPosition(scope_NewUserPresentationController.getUserCurrentAddressSuccesscallback,scope_NewUserPresentationController.getUserCurrentAddressErrorcallback);
    kony.location.getCurrentPosition(successcallback, errorcallback);

    function successcallback(position) {
      if (position.coords.latitude && position.coords.longitude) {
        var location={"latitude":position.coords.latitude,"longitude":position.coords.longitude};
        applicationManager.getPresentationUtility().showLoadingScreen();
        var locationManager = applicationManager.getLocationManager();
        locationManager.fetchAddressWithLatLong(location,scope_NewUserPresentationController.fetchAddressWithLatLongSuccess,scope_NewUserPresentationController.fetchAddressWithLatLongError);
      }
    }

    function errorcallback(positionerror) {
      if(positionerror.code==1){
        //scope_NewUserPresentationController.initializeSDK();
        scope_NewUserPresentationController.verifyJumioExistanceAndInitialize();
      }
      if (positionerror.code == 2) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        kony.ui.Alert("Turn On Location services to determine current location", androidgeoLocCallBack, constants.ALERT_TYPE_CONFIRMATION, "Cancel", "Settings", "");
      }
      function androidgeoLocCallBack(response) {
        if (response === true) {
          kony.print("User not willing to on GPS");
          //scope_NewUserPresentationController.initializeSDK();
          scope_NewUserPresentationController.verifyJumioExistanceAndInitialize();
        } else {
          LocationSettings.open();
        }
      }
    }
  };
  /*NewUser_PresentationController.prototype.getUserCurrentAddressSuccesscallback = function(position) {
    if (position.coords.latitude && position.coords.longitude) {
      var location={"latitude":position.coords.latitude,"longitude":position.coords.longitude};
      applicationManager.getPresentationUtility().showLoadingScreen();
      var locationManager = applicationManager.getLocationManager();
      locationManager.fetchAddressWithLatLong(location,scope_NewUserPresentationController.fetchAddressWithLatLongSuccess,scope_NewUserPresentationController.fetchAddressWithLatLongError);
    }
  };
  NewUser_PresentationController.prototype.getUserCurrentAddressErrorcallback = function(positionerror) {
    if (positionerror.code == 2) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      kony.ui.Alert("Turn On Location services to determine current location", scope_NewUserPresentationController.androidgeoLocCallBack, constants.ALERT_TYPE_CONFIRMATION, "Cancel", "Settings", "");
    }
  };
  NewUser_PresentationController.prototype.androidgeoLocCallBack = function(response) {
    if (response === true) {
      kony.print("User not willing to on GPS");
    } else {
      LocationSettings.open();
    }
  };*/
  NewUser_PresentationController.prototype.verifyJumioExistanceAndInitialize = function(){
    if (com.kony.IdVerification.isAvailable("JUMIO")) {
      scope_NewUserPresentationController.initializeSDK();
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmOBAddPersonalInfo', true);
      controller.bindGenericError(e);
    }
  };
  NewUser_PresentationController.prototype.fetchAddressWithLatLongSuccess = function(res){
    scope_NewUserPresentationController.currentAddress=res;
    if(scope_NewUserPresentationController.isOCRScanSelected=="true"){     
      scope_NewUserPresentationController.verifyJumioExistanceAndInitialize();
    }
    /*else{
        scope_NewUserPresentationController.commonFunctionForNavigation("frmOBEditFirstLastName");
        scope_NewUserPresentationController.setUserAddress();
      }*/
  };
  NewUser_PresentationController.prototype.fetchAddressWithLatLongError = function(res){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  NewUser_PresentationController.prototype.initializeSDK = function ()
  {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var config = applicationManager.getConfigurationManager();
    var serviceConfig = {
      "initParams":{
        "apiToken": config.configurations.getItem("OCRAPIKEY"),
        "apiSecret": config.configurations.getItem("OCRSECRETKEY"),
        "datacenter":"US"
      },
      "configuration":{
        "requireVerification":false,
        "requireFacematch":false,
        "dataExtractionOnMobileOnly":true
      },
      "customization":{
        "setStatusBarStyleWhite":true,
        "setTintColor":[255,255,255,1],
        "setBackgroundColor":[47,65,167,0.8],
        "setTitleTextAttributes":[255,255,255,1],
        "setForegroundColor":[255,255,255,1],

        "setBackgroundColorPositiveButton":[255,255,255,1],
        "setBorderColorPositiveButton":[255,255,255,1],
        "setTitleColorPositiveButton":[47,65,167,1],

        //"setBackgroundColorNegativeButton":[47,65,167,0.8],
        "setBorderColorNegativeButton":[255,255,255,1],
        "setTitleColorNegativeButton":[255,255,255,1],

        "setBackgroundColorFallbackButton":[255,255,255,1],
        "setBorderColorFallbackButton":[255,255,255,1],
        "setTitleColorFallbackButton":[47,65,167,0.8],

        "setColorOverlayStandard":[255,165,0,1],
        "setColorOverlayValid":[32,209,207,1],
        "setColorOverlayInvalid":[255,131,89,1],
      },
    };
    instance = com.kony.IdVerification.getInstance(
      com.kony.IdVerificationServiceProviders.JUMIO,serviceConfig);

    function onError(e){
      kony.print("Error Message : "+e);
      var controller = applicationManager.getPresentationUtility().getController('frmOBAddPersonalInfo', true);
      controller.bindGenericError(e);
    }

    function onSuccess(){
      kony.print("Initiate Success");
      scope_NewUserPresentationController.startVerification();
    }

    var initCallbacks = {
      "onError":onError,
      "onSuccess":onSuccess
    };

    instance.initialize(initCallbacks);
  };

  NewUser_PresentationController.prototype.startVerification = function ()
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    function onSuccess(documentData){
      scope_NewUserPresentationController.updateJumioCapturedData(documentData);
    }

    function onError(e){
      kony.print(e);
      // toastMsg.showToastMsg(e,7000);
      var controller = applicationManager.getPresentationUtility().getController('frmOBAddPersonalInfo', true);
      controller.bindGenericError(e);
    }

    var startCallbacks = {
      "onSuccess":onSuccess,
      "onError":onError
    };
    instance.startVerification(startCallbacks);
  };
  NewUser_PresentationController.prototype.navOnClickManuallySelected = function(){
    if(scope_NewUserPresentationController.userPersonalInfo!=="true"){
      scope_NewUserPresentationController.updateNewUserModel({"addressLine1":"","addressLine2":"","country":"","state":"","zipcode":"","city":""});
      scope_NewUserPresentationController.updateNewUserModel({"dateOfBirth":""});
      scope_NewUserPresentationController.updateNewUserModel({"gender":""});
      scope_NewUserPresentationController.updateNewUserModel({"userfirstname":"","userlastname":""});
    }
    else{
      kony.print("user already entered  his details need not to prepopulate address");
    }
    scope_NewUserPresentationController.commonFunctionForNavigation("frmOBEditFirstLastName");
  };

  NewUser_PresentationController.prototype.onLogout=function()
  {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var nuoMan=applicationManager.getNewUserBusinessManager();
    nuoMan.logout(scope_NewUserPresentationController.onLogoutPresentationSuccess,scope_NewUserPresentationController.onLogoutPresentationError);
  };
  NewUser_PresentationController.prototype.onLogoutPresentationSuccess=function(res)
  {
    scope_NewUserPresentationController.isLoggedIn = false;
    applicationManager.clearBusinessDataMemebers();
    applicationManager.getDataforLogin();
    var navMan = applicationManager.getNavigationManager();
    navMan.navigateTo("frmLogin");
    navMan.clearStack();
    navMan.clearEntryPointTable();
    scope_NewUserPresentationController.clearNewUserData();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };

  NewUser_PresentationController.prototype.onLogoutPresentationError=function(err)
  {
    scope_NewUserPresentationController.isLoggedIn = false;
    applicationManager.clearBusinessDataMemebers();
    applicationManager.getDataforLogin();
    var navMan = applicationManager.getNavigationManager();
    navMan.navigateTo("frmLogin");
    navMan.clearStack();
    navMan.clearEntryPointTable();
    scope_NewUserPresentationController.clearNewUserData();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
NewUser_PresentationController.prototype.newUserDone=function()
{
   applicationManager.getPresentationUtility().showLoadingScreen();
          var navManager = applicationManager.getNavigationManager();
          var loginData=navManager.getCustomInfo("frmLogin");
          var nuoUserData=navManager.getCustomInfo("frmOBLogin");
          loginData.NUOUsername=nuoUserData.username;
          navManager.setCustomInfo("frmLogin",loginData);
          var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
          NUOMod.presentationController.onLogout();
};
  return NewUser_PresentationController;
});
