define([], function() {

  function Enroll_PresentationController() {
    kony.mvc.Presentation.BasePresenter.call(this);
    this.logger = applicationManager.getLoggerManager();
    enrollPresentationScope = this;
  }

  inheritsFrom(Enroll_PresentationController, kony.mvc.Presentation.BasePresenter);

  Enroll_PresentationController.prototype.initializePresentationController = function() {

  };

   /**
  * Common Function For Navigation 
  * @member of Enroll_presentationController
  * @param {String} Contains form name.
  */ 
  Enroll_PresentationController.prototype.commonFunctionForNavigation = function(formName){
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo(formName);
  };
  /**
  * Validates if user is already enrolled 
  * @member of Enroll_presentationController
  * @param {json} Contains Lastname, dob and SSN.
  */ 
  Enroll_PresentationController.prototype.checkUserEnrolled = function(params){
    enrollPresentationScope.logger.log("#### checkUserEnrolled started ####");
    var newUserManager = applicationManager.getNewUserBusinessManager();
    newUserManager.checkUserEnrolled(params,enrollPresentationScope.checkUserEnrolledSuccess,enrollPresentationScope.checkUserEnrolledFailure);
  };
  /**
  * checkUserEnrolled Success Callback
  */
  Enroll_PresentationController.prototype.checkUserEnrolledSuccess = function(response){
    enrollPresentationScope.logger.log("#### checkUserEnrolledSuccess in Enroll_PresentationController ####");
    if(response.errmsg && response.errmsg === "User Not Enrolled"){
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSSn', true);
      controller.userNotEnrolled();
    }
    else{
      var navManager = applicationManager.getNavigationManager();
      navManager.navigateTo("frmAlreadyEnrolled");
    }
  };

  /**
  * checkUserEnrolled Failure Callback
  */
  Enroll_PresentationController.prototype.checkUserEnrolledFailure = function(error){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    enrollPresentationScope.logger.log("####  checkUserEnrolled failure callback ####");
    if (error["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    else{
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSSn', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.SomethingWrong");
      controller.bindViewError(errorMsg);}
  };

  
  /**
* Validates the entered SSN 
* @member of Enroll_presentationController
* @param {String} SSN - which contains SSN Ex: 123456789 .
*/ 
  Enroll_PresentationController.prototype.validateEnrollSSN = function(SSN){
    enrollPresentationScope.logger.log("#### validation on SSN started ####");
    var validationManager = applicationManager.getValidationUtilManager();
    var isValidSSN = validationManager.isValidSSNNumber(SSN);
    if (isValidSSN === true) {
      enrollPresentationScope.logger.log("#### validation on SSN successful ####");
      var navManager = applicationManager.getNavigationManager();
      //navManager.setCustomInfo("frmEnrollSSn", SSN);
      var newUserManager = applicationManager.getNewUserBusinessManager();
      newUserManager.setEnrollAttribute("ssn",SSN);
      navManager.navigateTo("frmEnrollSecurityCheck");
    } else {
      enrollPresentationScope.logger.log("#### validation on SSN failed ####");
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSSn', true);
      controller.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.enterSSN"));
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }

  };

  /**
  * Navigates to frmEnrollDOB
  * @member of Enroll_PresentationController
  * @param {String} lastName - which contains the Last Name. Ex: Stark
  */
  Enroll_PresentationController.prototype.navigateToFrmEnrollDOB = function(lastName){
    enrollPresentationScope.logger.log("#### navigateToFrmEnrollDOB in Enroll_PresentationController started ####");
    var navManager = applicationManager.getNavigationManager();
    //navManager.setCustomInfo("frmEnrollLastName",lastName);
    var newUserManager = applicationManager.getNewUserBusinessManager();
    newUserManager.setEnrollAttribute("userlastname",lastName);
    navManager.navigateTo("frmEnrollDOB");
    enrollPresentationScope.logger.log("#### navigateToFrmEnrollDOB in Enroll_PresentationController completed ####");
  };

  /**
  * Validate the Date Of Birth
  * @member of Enroll_PresentationController
  * @param {String} dob - which contains Date Of Birth. Ex: 09-08-1995
  */
  Enroll_PresentationController.prototype.validateDOB = function(dob){
    enrollPresentationScope.logger.log("#### validateDOB in Enroll_PresentationController started ####");
    var validationManager=applicationManager.getValidationUtilManager(); 
    var forUtility = applicationManager.getFormatUtilManager();  
    var isValidDOB= validationManager.isDOBValid(dob);
    if(isValidDOB===true)
    {
      enrollPresentationScope.logger.log("#### validateDOB in Enroll_PresentationController: Navigating to frmEnrollSSn####");
      var navManager = applicationManager.getNavigationManager();
      //navManager.setCustomInfo("frmEnrollDOB",dob);
      var newUserManager = applicationManager.getNewUserBusinessManager();
      var dateOfBirth = forUtility.getFormatedDateString(new Date(dob),forUtility.getBackendDateFormat());
      newUserManager.setEnrollAttribute("dateOfBirth",dateOfBirth);
      navManager.navigateTo("frmEnrollSSn");
    }
    else
    {
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollDOB', true);
      controller.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validDOB"));
    }
    enrollPresentationScope.logger.log("#### validateDOB in Enroll_PresentationController completed ####");
  };

  /**
  * Checks Availability of UserName
  * @member of Enroll_PresentationController
  * @param {String} userName - which contains UserName. Ex: TonyStark
  */
  Enroll_PresentationController.prototype.checkAvailabilityOfUserName = function(userName){
    var newUserManager = applicationManager.getNewUserBusinessManager();
    var params = {};
    params.UserName = userName;
    newUserManager.checkUserName(params,enrollPresentationScope.checkAvailabilityOfUserNameSuccess,enrollPresentationScope.checkAvailabilityOfUserNameFailure);
  };

  /**
  * CheckUserName Success Callback
  */
  Enroll_PresentationController.prototype.checkAvailabilityOfUserNameSuccess = function(response){
    enrollPresentationScope.logger.log("#### checkAvailabilityOfUserNameSuccess in Enroll_PresentationController ####");
    var controller = applicationManager.getPresentationUtility().getController('frmEnrollSignUp', true);
    if(response.errmsg && response.errmsg === "User already exists")
      controller.bindUserNameIsNotAvailable();
    else
      controller.bindUserNameIsAvailable();

  };

  /**
  * CheckUserName Failure Callback
  */
  Enroll_PresentationController.prototype.checkAvailabilityOfUserNameFailure = function(){
    enrollPresentationScope.logger.log("#### checkAvailabilityOfUserNameFailure in Enroll_PresentationController ####");
    var controller = applicationManager.getPresentationUtility().getController('frmEnrollSignUp', true);
    controller.bindUserNameIsNotAvailable();
  };

  /**
  * Checks if Password has required characters
  * @member of Enroll_PresentationController
  * @param {String} password - which contains Password. Ex: Kony@123
  */
  Enroll_PresentationController.prototype.validatePassword = function(password){
    enrollPresentationScope.logger.log("#### validatePassword in Enroll_PresentationController started ####");
    var validationUtilManager = applicationManager.getValidationUtilManager();
    var controller = applicationManager.getPresentationUtility().getController('frmEnrollSignUp', true);
    if(validationUtilManager.isValidPassword(password))
    {
      enrollPresentationScope.logger.log("#### validatePassword in Enroll_PresentationController: Password is valid ####");
      controller.bindValidPassword();
    }
    else{
      enrollPresentationScope.logger.log("#### validatePassword in Enroll_PresentationController: Password is invalid ####");
      controller.showFlxSecurityRequirements();
    }
    enrollPresentationScope.logger.log("#### validatePassword in Enroll_PresentationController completed ####");
  };

  /**
  * Checks if Password has required characters
  * @member of Enroll_PresentationController
  * @param {String} password - which contains Password. Ex: Kony@123
  * @return Boolean
  */
  Enroll_PresentationController.prototype.isValidPassword = function(password){
    enrollPresentationScope.logger.log("#### isValidPassword in Enroll_PresentationController ####");
    return applicationManager.getValidationUtilManager().isValidPassword(password);
  };

  /**
* Code to request OTP
* @member of Enroll_presentationController
* @param {callBack} presentationSuccessCallback - invoke the call back with success response.
* @param {callBack} presentationErrorCallback - invoke the call back with error response.
*/ 
  Enroll_PresentationController.prototype.requestOTP = function(){
    enrollPresentationScope.logger.log("#### request OTP Code started ####");
    //     var navManager = applicationManager.getNavigationManager();
    //     var ssn =  navManager.getCustomInfo("frmEnrollSSn");
    //     var dateOfBirth = navManager.getCustomInfo("frmEnrollDOB"); 
    //     var userlastname = navManager.getCustomInfo("frmEnrollLastName");
    var newUserManager = applicationManager.getNewUserBusinessManager();
    var userlastname = newUserManager.getEnrollObject().userlastname;
    var dateOfBirth = newUserManager.getEnrollObject().dateOfBirth;
    var ssn =  newUserManager.getEnrollObject().ssn;
    var username = "";
    var requestOTPJSON = {
      "ssn":ssn,
      "userlastname":userlastname,
      "dateOfBirth":dateOfBirth,
      "userName": username
    };
    var authManager = applicationManager.getAuthManager();
    authManager.fetchOTP(requestOTPJSON,enrollPresentationScope.requestOTPSuccess,enrollPresentationScope.requestOTPFailure);


  };

  Enroll_PresentationController.prototype.requestOTPSuccess = function(response){
    enrollPresentationScope.logger.log("#### request OTP service call success ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    enrollPresentationScope.logger.log("#### request OTP service call success navigating to frmEnrollSecurity ####");
    navManager.navigateTo("frmEnrollSecurity");
  };

  Enroll_PresentationController.prototype.requestOTPFailure = function(error){
    enrollPresentationScope.logger.log("#### request OTP service call failed ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    else{
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurityCheck', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.SomethingWrong");
      controller.bindViewError(errorMsg);  
      //generic error callback
    }
  };
  /**
* Code to validate OTP
* @member of Enroll_presentationController
* @param {String}  EX: 123456
* @param {callBack} presentationSuccessCallback - invoke the call back with success response.
* @param {callBack} presentationErrorCallback - invoke the call back with error response.
*/
  Enroll_PresentationController.prototype.validateOTP = function(otp){
    enrollPresentationScope.logger.log("#### validate OTP Code started ####");
    var validationUtilManager = applicationManager.getValidationUtilManager();
    if(validationUtilManager.isValidOTP(otp))
    {
      enrollPresentationScope.logger.log("####  OTP is valid ####");
      //       var navManager = applicationManager.getNavigationManager();
      //       var ssn =  navManager.getCustomInfo("frmEnrollSSn");
      //       var dateOfBirth = navManager.getCustomInfo("frmEnrollDOB"); 
      //       var userlastname = navManager.getCustomInfo("frmEnrollLastName");
      var newUserManager = applicationManager.getNewUserBusinessManager();
      var userlastname = newUserManager.getEnrollObject().userlastname;
      var dateOfBirth = newUserManager.getEnrollObject().dateOfBirth;
      var ssn =  newUserManager.getEnrollObject().ssn;
      var username = "";
      var verifyOTPJSON = {
        "Otp":otp,
        "Ssn":ssn,
        "LastName":userlastname,
        "DateOfBirth":dateOfBirth,
        "UserName": username
      };
      var authManager = applicationManager.getAuthManager();
      authManager.verifyOTP(verifyOTPJSON,enrollPresentationScope.validateOTPSuccess,enrollPresentationScope.validateOTPFailure);
    }
    else
    {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurity', true);
      var errormsg =  applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.enterSecurityCode");
      controller.bindGenericError(errormsg);
    } 

  };

  Enroll_PresentationController.prototype.validateOTPSuccess = function(response){
    enrollPresentationScope.logger.log("####  OTP validation success call back ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmEnrollSignUp");
  };

  Enroll_PresentationController.prototype.validateOTPFailure = function(error){
    enrollPresentationScope.logger.log("####  OTP validation error call back ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    else{
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurity', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.enterValidOTP");
      controller.bindGenericError(errorMsg);
    }
  };
  /**
* Code to get cards
* @member of Enroll_presentationController
* @param {callBack} presentationSuccessCallback - invoke the call back with success response.
* @param {callBack} presentationErrorCallback - invoke the call back with error response.
*/ 
  Enroll_PresentationController.prototype.getCardsForEnroll = function(){
    enrollPresentationScope.logger.log("#### code for getting cards for enroll started  ####");
    //     var navManager = applicationManager.getNavigationManager();
    //     var ssn =  navManager.getCustomInfo("frmEnrollSSn");
    //     var dateOfBirth = navManager.getCustomInfo("frmEnrollDOB"); 
    //     var userlastname = navManager.getCustomInfo("frmEnrollLastName");
    var newUserManager = applicationManager.getNewUserBusinessManager();
    var userlastname = newUserManager.getEnrollObject().userlastname;
    var dateOfBirth = newUserManager.getEnrollObject().dateOfBirth;
    var ssn =  newUserManager.getEnrollObject().ssn;

    var cardsManager = applicationManager.getCardsManager();
    cardsManager.fetchCardsForEnroll(userlastname,dateOfBirth,ssn,enrollPresentationScope.getCardsForEnrollSuccess,enrollPresentationScope.getCardsForEnrollFailure);


  };
  Enroll_PresentationController.prototype.getCardsForEnrollSuccess = function(response){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    enrollPresentationScope.logger.log("####  getting cards for enroll success call back ####");
    var data = [];
    for(var i in response){
      var item = response[i];

      data.push({ 
        "cardType"    : item.cardType,
        "cardNumber"  : item.cardNumber,
      });
    }
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("frmEnrollCVV",data);
    //navManager.navigateTo("frmEnrollCVV");
    if(data.length>0){     
      var navManager = applicationManager.getNavigationManager();
      enrollPresentationScope.logger.log("#### code for validation of CVV success navigating to frmEnrollSignUp  ####");
      navManager.navigateTo("frmEnrollCVV");
    }
    else{
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurityCheck', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.noCardsToShow");
      controller.bindViewError(errorMsg);

    }
  };
  Enroll_PresentationController.prototype.getCardsForEnrollFailure = function(error){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    enrollPresentationScope.logger.log("####  getting cards for enroll failure callback ####");
    if (error["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    else{
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurityCheck', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.unableToFetchCards");
      controller.bindViewError(errorMsg);}

  };
  /**
* Code to validate CVV
* @member of Enroll_presentationController
* @param {String} cardNumber Ex: 123456789123456
* @param {String} CVV Ex: 123
* @param {callBack} presentationSuccessCallback - invoke the call back with success response.
* @param {callBack} presentationErrorCallback - invoke the call back with error response.
*/
  Enroll_PresentationController.prototype.validateCVV = function(cardNumber,cvv){
    enrollPresentationScope.logger.log("#### code for validation of CVV started  ####");
    var validationUtilManager = applicationManager.getValidationUtilManager();
    if (validationUtilManager.isValidCVV(cvv)) {
      //       var navManager = applicationManager.getNavigationManager();
      //       var ssn = navManager.getCustomInfo("frmEnrollSSn");
      //       var dateOfBirth = navManager.getCustomInfo("frmEnrollDOB");
      //       var userlastname = navManager.getCustomInfo("frmEnrollLastName");
      var newUserManager = applicationManager.getNewUserBusinessManager();
      var userlastname = newUserManager.getEnrollObject().userlastname;
      var dateOfBirth = newUserManager.getEnrollObject().dateOfBirth;
      var ssn =  newUserManager.getEnrollObject().ssn;
      var username = "";
      var verifyCVVJSon = {
        "ssn": ssn,
        "userlastname": userlastname,
        "dateOfBirth": dateOfBirth,
        "cvv": cvv,
        "cardNumber": cardNumber,
        "userName": username
      };
      var authManager = applicationManager.getAuthManager();
      authManager.verifyCVV(verifyCVVJSon, enrollPresentationScope.validateCVVSuccess, enrollPresentationScope.validateCVVFailure);
    } else {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollCVV', true);
      var errormsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.enterCVV");
      controller.bindGenericError(errormsg);
    }

  };

  Enroll_PresentationController.prototype.validateCVVSuccess = function(response){
    enrollPresentationScope.logger.log("#### code for validation of CVV success  ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    enrollPresentationScope.logger.log("#### code for validatgion of CVV success navigating to frmEnrollSignUp  ####");
    navManager.navigateTo("frmEnrollSignUp");

  };

  Enroll_PresentationController.prototype.validateCVVFailure = function(error){
    enrollPresentationScope.logger.log("#### code for validation of CVV failed  ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    else{
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollCVV', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.unableToVerifyCVV");
      controller.bindGenericError(errorMsg);}

  };

  /**
  * Creates New User by invoking createUserForEnroll of NewUserBusinessManager
  * @member of Enroll_PresentationController
  * @param {String} userName - which contains User Name. Ex: TonyStark
  * @param {String} password - which contains Password. Ex: Kony@123
  */
  Enroll_PresentationController.prototype.createUser = function(userName,password){
    enrollPresentationScope.logger.log("#### createUser in Enroll_PresentationController ####");
    //     var navManager = applicationManager.getNavigationManager();
    //     var enrollUserObj = {};
    //     enrollUserObj.ssn = navManager.getCustomInfo("frmEnrollSSn");
    //     enrollUserObj.userLastName = navManager.getCustomInfo("frmEnrollLastName");
    //     enrollUserObj.dob = navManager.getCustomInfo("frmEnrollDOB");
    //     enrollUserObj.password = password;
    //     enrollUserObj.userName = userName;
    enrollPresentationScope.UserName = userName;
    var newUserManager = applicationManager.getNewUserBusinessManager();
    newUserManager.setPrimarykeyAttribute({"UserName":userName});
    newUserManager.setEnrollAttribute("Password", password);
    newUserManager.createUserForEnroll(enrollPresentationScope.createUserSuccess, enrollPresentationScope.createUserFailure);

  };


  /**
  * createUserForEnroll Success callback
  * @member of Enroll_PresentationController
  */
  Enroll_PresentationController.prototype.createUserSuccess = function(response){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(response.errmsg && response.errmsg.startsWith("This username already being used by another user")){
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSignUp', true);
      controller.bindUserNameIsNotAvailable();
    }
    else{
      enrollPresentationScope.resetEnrollObj();
      var navManager = applicationManager.getNavigationManager();
      navManager.setCustomInfo("frmEnrollSignUp",{
        "userName" : enrollPresentationScope.UserName,
        "isEnrollSuccess" : true
      });
      navManager.navigateTo("frmLogin");
    }   
  };

  /**
  * createUserForEnroll Failure callback
  * @member of Enroll_PresentationController
  */
  Enroll_PresentationController.prototype.createUserFailure = function(error){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage(handleMode, err);
    else{
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSignUp', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.enrollFailed");
      controller.bindViewError(errorMsg);
    }
  };
  /**
* Code to resend OTP
* @member of Enroll_presentationController
* @param {callBack} presentationSuccessCallback - invoke the call back with success response.
* @param {callBack} presentationErrorCallback - invoke the call back with error response.
*/ 
  Enroll_PresentationController.prototype.resendOTP = function(){
    enrollPresentationScope.logger.log("#### code for resend OTP started  ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    //     var navManager = applicationManager.getNavigationManager();
    //     var ssn =  navManager.getCustomInfo("frmEnrollSSn");
    //     var dateOfBirth = navManager.getCustomInfo("frmEnrollDOB"); 
    //     var userlastname = navManager.getCustomInfo("frmEnrollLastName");
    var newUserManager = applicationManager.getNewUserBusinessManager();
    var userlastname = newUserManager.getEnrollObject().userlastname;
    var dateOfBirth = newUserManager.getEnrollObject().dateOfBirth;
    var ssn =  newUserManager.getEnrollObject().ssn;
    var username = "";
    var requestOTPJSON = {
      "ssn":ssn,
      "userlastname":userlastname,
      "dateOfBirth":dateOfBirth,
      "userName": username
    };
    var authManager = applicationManager.getAuthManager();
    authManager.fetchOTP(requestOTPJSON,enrollPresentationScope.resendOTPSuccess,enrollPresentationScope.resendOTPFailure);

  };

  Enroll_PresentationController.prototype.resendOTPSuccess = function(){
    enrollPresentationScope.logger.log("#### code for resend OTP success  ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();

  };
  Enroll_PresentationController.prototype.resendOTPFailure = function(){
    enrollPresentationScope.logger.log("#### code for resend OTP failure  ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();

  };

  Enroll_PresentationController.prototype.getEnrollLastName = function(){
    var newUserManager = applicationManager.getNewUserBusinessManager();
    return newUserManager.getEnrollObject().userlastname;
  };

  Enroll_PresentationController.prototype.getEnrollDOB = function(){
    var newUserManager = applicationManager.getNewUserBusinessManager();
    return newUserManager.getEnrollObject().dateOfBirth;
  };

  Enroll_PresentationController.prototype.resetEnrollObj = function(){
    var newUserManager = applicationManager.getNewUserBusinessManager();
    newUserManager.resetEnrollObj();
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmLogin");
  };

  return Enroll_PresentationController;
});