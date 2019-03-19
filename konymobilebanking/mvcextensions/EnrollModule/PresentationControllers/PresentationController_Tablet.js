define([], function() {

  function Enroll_PresentationController() {
    kony.mvc.Presentation.BasePresenter.call(this);
    this.logger = applicationManager.getLoggerManager();
    self = this;
  }

  inheritsFrom(Enroll_PresentationController, kony.mvc.Presentation.BasePresenter);

  Enroll_PresentationController.prototype.initializePresentationController = function() {

  };

  /**
  * Common Function For Navigation 
  * @member of Enroll_presentationController
  * @param {String} Contains form name.
  */ 
  Enroll_PresentationController.prototype.commonFunctionForNavigation = function(formName) {
    var navManger = applicationManager.getNavigationManager();
    navManger.navigateTo(formName);
  };
  
  /**
  * Validates if user is already enrolled 
  * @member of Enroll_presentationController
  * @param {json} Contains Lastname, dob and SSN.
  */ 
  Enroll_PresentationController.prototype.checkUserEnrolled = function(params) {
    self.logger.log("#### checkUserEnrolled started ####");
    applicationManager.getPresentationUtility().showLoadingScreen();
    var newUserManager = applicationManager.getNewUserBusinessManager();
    newUserManager.checkUserEnrolled(params, self.checkUserEnrolledSuccess, self.checkUserEnrolledFailure);
  };
  
  /**
  * checkUserEnrolled Success Callback
  */
  Enroll_PresentationController.prototype.checkUserEnrolledSuccess = function(response) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    self.logger.log("#### checkUserEnrolledSuccess in Enroll_PresentationController ####");
    if (response.errmsg && response.errmsg === "User Not Enrolled") {
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSSn', true);
      controller.userNotEnrolled();
    } else{
      var navManger = applicationManager.getNavigationManager();
      navManger.navigateTo("frmAlreadyEnrolled");
    }
  };

  /**
  * checkUserEnrolled Failure Callback
  */
  Enroll_PresentationController.prototype.checkUserEnrolledFailure = function(error) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    self.logger.log("####  checkUserEnrolled failure callback ####");
    if (error.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSSn', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.SomethingWrong");
      controller.bindViewError(errorMsg);
    }
  };

  /**
  * Validates the entered SSN 
  * @member of Enroll_presentationController
  * @param {String} SSN - which contains SSN Ex: 123456789 .
  */ 
  Enroll_PresentationController.prototype.validateEnrollSSN = function(SSN) {
    self.logger.log("#### validation on SSN started ####");
    var validationManager = applicationManager.getValidationUtilManager();
    var isValidSSN = validationManager.isValidSSNNumber(SSN);
    if (isValidSSN) {
      self.logger.log("#### validation on SSN successful ####");
      var navManger = applicationManager.getNavigationManager();
      var newUserManager = applicationManager.getNewUserBusinessManager();
      newUserManager.setEnrollAttribute("ssn", SSN);
      navManger.navigateTo("frmEnrollSecurityCheck");
    } else {
      self.logger.log("#### validation on SSN failed ####");
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSSn', true);
      controller.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.enterSSN"));
    }
  };

  /**
  * Navigates to frmEnrollDOB
  * @member of Enroll_PresentationController
  * @param {String} lastName - which contains the Last Name. Ex: Stark
  */
  Enroll_PresentationController.prototype.navigateToFrmEnrollDOB = function(lastName) {
    self.logger.log("#### navigateToFrmEnrollDOB in Enroll_PresentationController started ####");
    var navManager = applicationManager.getNavigationManager();
    var newUserManager = applicationManager.getNewUserBusinessManager();
    newUserManager.setEnrollAttribute("userlastname", lastName);
    navManager.navigateTo("frmEnrollDOB");
    self.logger.log("#### navigateToFrmEnrollDOB in Enroll_PresentationController completed ####");
  };

  /**
  * Validate the Date Of Birth
  * @member of Enroll_PresentationController
  * @param {String} dob - which contains Date Of Birth. Ex: 09-08-1995
  */
  Enroll_PresentationController.prototype.validateDOB = function(date) {
    self.logger.log("#### validateDOB in Enroll_PresentationController started ####");
    var validationManager=applicationManager.getValidationUtilManager();   
    var utilManager = applicationManager.getValidationUtilManager();
    var isDOBValid = utilManager.isDOBValid(date);
    if (isDOBValid) {
      var dob = date.split("/");
      dob = dob[2] + "-" + dob[0] + "-" + dob[1];
      self.logger.log("#### validateDOB in Enroll_PresentationController: Navigating to frmEnrollSSn####");
      var navManager = applicationManager.getNavigationManager();
      var newUserManager = applicationManager.getNewUserBusinessManager();
      newUserManager.setEnrollAttribute("dateOfBirth", dob);
      navManager.navigateTo("frmEnrollSSn");
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollDOB', true);
      controller.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validDOB"));
    }
    self.logger.log("#### validateDOB in Enroll_PresentationController completed ####");
  };

  /**
  * Checks Availability of UserName
  * @member of Enroll_PresentationController
  * @param {String} userName - which contains UserName. Ex: TonyStark
  */
  Enroll_PresentationController.prototype.checkAvailabilityOfUserName = function(userName) {
    var newUserManager = applicationManager.getNewUserBusinessManager();
    var params = {};
    params.userName = userName;
    newUserManager.checkUserName(params, self.checkAvailabilityOfUserNameSuccess, self.checkAvailabilityOfUserNameFailure);
  };

  /**
  * CheckUserName Success Callback
  */
  Enroll_PresentationController.prototype.checkAvailabilityOfUserNameSuccess = function(response) {
    self.logger.log("#### checkAvailabilityOfUserNameSuccess in Enroll_PresentationController ####");
    var controller = applicationManager.getPresentationUtility().getController('frmEnrollSignUp', true);
    if (response.errmsg && response.errmsg === "User already exists") {
      controller.bindUserNameIsNotAvailable();
    } else {
      controller.bindUserNameIsAvailable();
    }
  };

  /**
  * CheckUserName Failure Callback
  */
  Enroll_PresentationController.prototype.checkAvailabilityOfUserNameFailure = function() {
    self.logger.log("#### checkAvailabilityOfUserNameFailure in Enroll_PresentationController ####");
    var controller = applicationManager.getPresentationUtility().getController('frmEnrollSignUp', true);
    controller.bindUserNameIsNotAvailable();
  };

  /**
  * Checks if Password has required characters
  * @member of Enroll_PresentationController
  * @param {String} password - which contains Password. Ex: Kony@123
  */
  Enroll_PresentationController.prototype.validatePassword = function(password) {
    self.logger.log("#### validatePassword in Enroll_PresentationController started ####");
    var validationUtilManager = applicationManager.getValidationUtilManager();
    var controller = applicationManager.getPresentationUtility().getController('frmEnrollSignUp', true);
    if (validationUtilManager.isValidPassword(password)) {
      self.logger.log("#### validatePassword in Enroll_PresentationController: Password is valid ####");
      controller.bindValidPassword();
    } else {
      self.logger.log("#### validatePassword in Enroll_PresentationController: Password is invalid ####");
      controller.showInvalidPassword();
    }
    self.logger.log("#### validatePassword in Enroll_PresentationController completed ####");
  };

  /**
  * Checks if Password has required characters
  * @member of Enroll_PresentationController
  * @param {String} password - which contains Password. Ex: Kony@123
  * @return Boolean
  */
  Enroll_PresentationController.prototype.isValidPassword = function(password) {
    self.logger.log("#### isValidPassword in Enroll_PresentationController ####");
    return applicationManager.getValidationUtilManager().isValidPassword(password);
  };

  /**
  * Code to request OTP
  * @member of Enroll_presentationController
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */ 
  Enroll_PresentationController.prototype.requestOTP = function() {
    self.logger.log("#### request OTP Code started ####");
    var newUserManager = applicationManager.getNewUserBusinessManager();
    var userlastname = newUserManager.getEnrollObject().userlastname;
    var dateOfBirth = newUserManager.getEnrollObject().dateOfBirth;
    var ssn =  newUserManager.getEnrollObject().ssn;
    var username = "";
    var requestOTPJSON = {
      "ssn": ssn,
      "userlastname": userlastname,
      "dateOfBirth": dateOfBirth,
      "userName": username
    };
    var authManager = applicationManager.getAuthManager();
    authManager.fetchOTP(requestOTPJSON, self.requestOTPSuccess, self.requestOTPFailure);
  };

  Enroll_PresentationController.prototype.requestOTPSuccess = function(response) {
    self.logger.log("#### request OTP service call success ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    self.logger.log("#### request OTP service call success navigating to frmEnrollSecurity ####");
    navManager.navigateTo("frmEnrollSecurity");
  };

  Enroll_PresentationController.prototype.requestOTPFailure = function(error) {
    self.logger.log("#### request OTP service call failed ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurityCheck', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.SomethingWrong");
      controller.bindViewError(errorMsg);  
    }
  };
  /**
  * Code to validate OTP
  * @member of Enroll_presentationController
  * @param {String}  EX: 123456
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */
  Enroll_PresentationController.prototype.validateOTP = function(otp) {
    self.logger.log("#### validate OTP Code started ####");
    var validationUtilManager = applicationManager.getValidationUtilManager();
    if (validationUtilManager.isValidOTP(otp)) {
      self.logger.log("####  OTP is valid ####");
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
      authManager.verifyOTP(verifyOTPJSON, self.validateOTPSuccess, self.validateOTPFailure);
    } else {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurity', true);
      var errormsg =  applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.enterSecurityCode");
      controller.bindGenericError(errormsg);
    } 
  };

  Enroll_PresentationController.prototype.validateOTPSuccess = function(response) {
    self.logger.log("####  OTP validation success call back ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmEnrollSignUp");
  };

  Enroll_PresentationController.prototype.validateOTPFailure = function(error) {
    self.logger.log("####  OTP validation error call back ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    } else {
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
  Enroll_PresentationController.prototype.getCardsForEnroll = function() {
    self.logger.log("#### code for getting cards for enroll started  ####");
    var newUserManager = applicationManager.getNewUserBusinessManager();
    var userlastname = newUserManager.getEnrollObject().userlastname;
    var dateOfBirth = newUserManager.getEnrollObject().dateOfBirth;
    var ssn = newUserManager.getEnrollObject().ssn;
    var cardsManager = applicationManager.getCardsManager();
    cardsManager.fetchCardsForEnroll(userlastname, dateOfBirth, ssn, self.getCardsForEnrollSuccess, self.getCardsForEnrollFailure);
  };
  
  Enroll_PresentationController.prototype.getCardsForEnrollSuccess = function(response) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    self.logger.log("####  getting cards for enroll success call back ####");
    var data = [];
    for (var i in response) {
      var item = response[i];
      data.push({ 
        cardType: item.cardType,
        cardNumber: item.cardNumber,
      });
    }
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("frmEnrollCVV", data);
    if (data.length > 0) {     
      self.logger.log("#### code for validation of CVV success navigating to frmEnrollSignUp  ####");
      navManager.navigateTo("frmEnrollCVV");
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurityCheck', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.noCardsToShow");
      controller.bindViewError(errorMsg);
    }
  };
  
  Enroll_PresentationController.prototype.getCardsForEnrollFailure = function(error) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    self.logger.log("####  getting cards for enroll failure callback ####");
    if (error.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    } else {
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
  Enroll_PresentationController.prototype.validateCVV = function(cardNumber, cvv) {
    self.logger.log("#### code for validation of CVV started  ####");
    var validationUtilManager = applicationManager.getValidationUtilManager();
    if (validationUtilManager.isValidCVV(cvv)) {
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
      authManager.verifyCVV(verifyCVVJSon, self.validateCVVSuccess, self.validateCVVFailure);
    } else {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollCVV', true);
      var errormsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.enterCVV");
      controller.bindGenericError(errormsg);
    }
  };

  Enroll_PresentationController.prototype.validateCVVSuccess = function(response) {
    self.logger.log("#### code for validation of CVV success  ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    self.logger.log("#### code for validatgion of CVV success navigating to frmEnrollSignUp  ####");
    navManager.navigateTo("frmEnrollSignUp");
  };

  Enroll_PresentationController.prototype.validateCVVFailure = function(error) {
    self.logger.log("#### code for validation of CVV failed  ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    } else {
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
  Enroll_PresentationController.prototype.createUser = function(userName, password) {
    self.logger.log("#### createUser in Enroll_PresentationController ####");
    self.UserName = userName;
    this.UserName = userName;
    var newUserManager = applicationManager.getNewUserBusinessManager();
    newUserManager.setPrimarykeyAttribute({"UserName": userName});
    newUserManager.setEnrollAttribute("Password", password);
    newUserManager.createUserForEnroll(self.createUserSuccess.bind(this), self.createUserFailure.bind(this));
  };

  /**
  * createUserForEnroll Success callback
  * @member of Enroll_PresentationController
  */
  Enroll_PresentationController.prototype.createUserSuccess = function(response) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (response.errmsg && response.errmsg.startsWith("This username already being used by another user")) {
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSignUp', true);
      controller.bindUserNameIsNotAvailable();
    } else {
      self.resetEnrollObj();
      var navManager = applicationManager.getNavigationManager();
      navManager.setCustomInfo("frmEnrollSignUp", {
        "userName": this.UserName,
        "isEnrollSuccess": true
      });
      navManager.navigateTo("frmLogin");
    }   
  };

  /**
  * createUserForEnroll Failure callback
  * @member of Enroll_PresentationController
  */
  Enroll_PresentationController.prototype.createUserFailure = function(error) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    } else {
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
  Enroll_PresentationController.prototype.resendOTP = function() {
    self.logger.log("#### code for resend OTP started  ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var newUserManager = applicationManager.getNewUserBusinessManager();
    var userlastname = newUserManager.getEnrollObject().userlastname;
    var dateOfBirth = newUserManager.getEnrollObject().dateOfBirth;
    var ssn =  newUserManager.getEnrollObject().ssn;
    var username = "";
    var requestOTPJSON = {
      "ssn": ssn,
      "userlastname": userlastname,
      "dateOfBirth": dateOfBirth,
      "userName": username
    };
    var authManager = applicationManager.getAuthManager();
    authManager.fetchOTP(requestOTPJSON, self.resendOTPSuccess, self.resendOTPFailure);
  };

  Enroll_PresentationController.prototype.resendOTPSuccess = function() {
    self.logger.log("#### code for resend OTP success  ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  
  Enroll_PresentationController.prototype.resendOTPFailure = function() {
    self.logger.log("#### code for resend OTP failure  ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };

  Enroll_PresentationController.prototype.getEnrollLastName = function() {
    var newUserManager = applicationManager.getNewUserBusinessManager();
    return newUserManager.getEnrollObject().userlastname;
  };

  Enroll_PresentationController.prototype.getEnrollDOB = function() {
    var newUserManager = applicationManager.getNewUserBusinessManager();
    return newUserManager.getEnrollObject().dateOfBirth;
  };

  Enroll_PresentationController.prototype.resetEnrollObj = function() {
    var newUserManager = applicationManager.getNewUserBusinessManager();
    newUserManager.resetEnrollObj();
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmLogin");
  };

  return Enroll_PresentationController;
});