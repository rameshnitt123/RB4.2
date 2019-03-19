/**
*@module AuthManager
 */
define([], function() {
/**
 * This is class named AuthManager which handles all functions related to Authentication module in the application
 * @alias module:AuthManager 
 * @class
*/
 function AuthManager(){   
    this.authManagerInstance = null;
    var modelDefinition=kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("User");
    /**@member {object} - object which resembles the MF object "User"*/
    this.forgotObject=new modelDefinition();
    this.securityKey =""; 
}

inheritsFrom(AuthManager, kony.mvc.Business.Delegator);

AuthManager.prototype.initializeBusinessController = function(){};
  
/**
  * Function to login into the application with username and password.
  * @param {object} UsernamePasswordJSON - json object used to send the entered userName and Password.
  * @param {function} presentationSuccessCallback - invoke the call back with success response.
  * @param {function} presentationErrorCallback - invoke the call back with error response.  
  */
AuthManager.prototype.login = function(UsernamePasswordJSON,presentationSuccess,presentationError){
    var authParams = {
                      "UserName": UsernamePasswordJSON.username,
                      "Password": UsernamePasswordJSON.password,
                      "loginOptions": {
                          "isOfflineEnabled": false
                      }
                  };
   var configManager = applicationManager.getConfigurationManager();
   authClient = KNYMobileFabric.getIdentityService(configManager.constants.IDENTITYSERVICENAME);
   authClient.login(authParams,successCallback,errorCallback);
  
  function successCallback(resSuccess){
          presentationSuccess(resSuccess);
   }
  function errorCallback(resError){
         presentationError(resError);
  }
};

/**
  * Function to logout from the application.
  * @param {function} presentationSuccessCallback - invoke the call back with success response.
  * @param {function} presentationErrorCallback - invoke the call back with error response.  
  */  
AuthManager.prototype.logout = function(presentationSuccess,presentationError){
   var self = this;
        var authParams = {
            "loginOptions": {
                "isOfflineEnabled": false
            }
        };
        
        try {
            authClient.logout(logoutSuccessCallback,logoutErrorCallback, authParams);
        } catch (err) {
            kony.print(err);
        } 

  function logoutSuccessCallback(resSuccess){
          presentationSuccess(resSuccess);
   }
  function logoutErrorCallback(resError){
         presentationError(resError);
  } 
};
  
/**
  * Function to login into the application with registered pin for the perticular user.
  * @param {object} authParams - json used to send the entered userName, pin and deviceId.
  * @param {function} presentationSuccessCallback - invoke the call back with success response.
  * @param {function} presentationErrorCallback - invoke the call back with error response.  
*/

AuthManager.prototype.pinLogin = function(authParams,presentationSuccess,presentationError){
   var configManager = applicationManager.getConfigurationManager();
   authClient = KNYMobileFabric.getIdentityService(configManager.constants.IDENTITYSERVICENAME);
   authClient.login(authParams,successCallback,errorCallback);
  
  function successCallback(resSuccess){
          presentationSuccess(resSuccess);
   }
  function errorCallback(resError){
         presentationError(resError);
  }
};

/**
  * fetches the username based on user details
  * @param {object} - UserSSNDobLastNameJSON -  a json consisting of 3 keys
  *                 ssn - ssn of the user 
  *                 userlastname - last name of the user
  *                 dateOfBirth - date of birth of the user
  * @param {function} presentationSuccessCallback will be called when call is successfull
  * @param {function} presentationErrorCallback will be called when call is not successfull
  */
AuthManager.prototype.fetchUserName=function(UserSSNDobLastNameJSON,presentationSuccessCallback,presentationErrorCallback){
  var accountsRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("User");
  var params = UserSSNDobLastNameJSON;
  accountsRepo.customVerb('getUsername',params,getUserCompletionCallback);  
  function  getUserCompletionCallback(status,  data,  error) {
     var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error);
    if(obj["status"] === true){
    presentationSuccessCallback(obj["data"]);
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
  }  
};

/**
  * fetch/request OTP for the user based on user details by making a service call
  * @param {object} - requestOTPJSON -  a json consisting of 4 keys
  *               ssn - ssn of the user 
  *               userlastname - last name of the user
  *               dateOfBirth - date of birth of the user
  *               username -  username of the user
  * @param {function} presentationSuccessCallback will be called when call is successfull
  * @param {function} presentationErrorCallback will be called when call is not successfull
 */
AuthManager.prototype.fetchOTP = function(requestOTPJSON,presentationSuccessCallback,presentationErrorCallback){
  var self = this;
 var userRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("DbxUser");
  var params = requestOTPJSON;
  userRepo.customVerb('dbxRequestOTP',params,getAllCompletionCallback);
  function  getAllCompletionCallback(status,  data,  error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error,presentationSuccessCallback,presentationErrorCallback);
    if(obj["status"] === true){
    self.setSecurityKey(obj["data"].securityKey);  
		presentationSuccessCallback(obj["data"]);
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
	} 
};

/**
  * Verifies the given CVV for the user based on user details and the card number for which the cvv is to be validated
  * @param {object} - requestOTPJSON -  a json consisting of 6 keys
  *               cvv - cvv to be validated 
  *               cardNumber - cardNumber for which cvv is to be 
  *               ssn - ssn of the user 
  *               userlastname - last name of the user
  *               dateOfBirth - date of birth of the user
  *               username -  username of the user
  * @param {function} presentationSuccessCallback will be called when call is successfull
  * @param {function} presentationErrorCallback will be called when call is not successfull
 */
AuthManager.prototype.verifyCVV = function(verifyCVVJSon,presentationSuccessCallback,presentationErrorCallback){
  var userRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("User");
  var params = verifyCVVJSon;
  userRepo.customVerb('verifyCVV',params,getAllCompletionCallback);
  function  getAllCompletionCallback(status,  data,  error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error,presentationSuccessCallback,presentationErrorCallback);
    if(obj["status"] === true){
		presentationSuccessCallback(obj["data"]);
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
	} 
};

/**
  * Verifies the given OTP for the user based on user details 
  * @param {object} -  requestOTPJSON -  a json consisting of 5 keys
  *               otp - otp to be validated 
  *               ssn - ssn of the user 
  *               userlastname - last name of the user
  *               dateOfBirth - date of birth of the user
  *               username -  username of the user
  * @param {function} presentationSuccessCallback will be called when call is successfull
  * @param {function} presentationErrorCallback will be called when call is not successfull
 */
AuthManager.prototype.verifyOTP = function(verifyOTPJSON,presentationSuccessCallback,presentationErrorCallback){
  var self = this;
  var userRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("DbxUser");
  var params = verifyOTPJSON;
  //params['securityKey'] = this.getSecurityKey();
  userRepo.customVerb('dbxVerifyOTP',params,getAllCompletionCallback);
  function  getAllCompletionCallback(status,  data,  error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error,presentationSuccessCallback,presentationErrorCallback);
    if(obj["status"] === true){
        self.clearSecurityKey();  
		if(data.errorCode && data.errorCode === "3402"){
          presentationErrorCallback(obj["data"]);
      }else{
          presentationSuccessCallback(obj["data"]);
      }
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
	} 
};
/**
  * Updates the password for a user
  * @param {object} - resetPasswordJSON - a json consisting of 2 keys
  *               username - The username of the user
  *               password - The password to be updated 
  * @param {function} presentationSuccessCallback will be called when call is successfull
  * @param {function} presentationErrorCallback will be called when call is not successfull
  */
AuthManager.prototype.resetPassword = function(resetPasswordJSON,presentationSuccessCallback,presentationErrorCallback){
 var userRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("DbxUser");
 var params = resetPasswordJSON;
  userRepo.customVerb('resetDbxUserPassword',params,getAllCompletionCallback);
  function  getAllCompletionCallback(status,  data,  error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error,presentationSuccessCallback,presentationErrorCallback);
    if(obj["status"] === true){
		presentationSuccessCallback(obj["data"]);
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
	} 
};
  /**
    * checks if user is already enrolled or not
    * @member of AuthManager
    * @param {object} verifyUserJSON
    */
   AuthManager.prototype.VerifyUserisalreadyEnrolled = function(verifyUserJSON,presentationSuccessCallback,presentationErrorCallback){
    var userRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("User");
    var params = verifyUserJSON;
     userRepo.customVerb('checkUserEnrolled',params,getAllCompletionCallback);
     function getAllCompletionCallback(status, data, error) {
       var srh = applicationManager.getServiceResponseHandler();
       var obj =  srh.manageResponse(status, data, error,presentationSuccessCallback,presentationErrorCallback);
       if(obj["status"] === true){
       presentationSuccessCallback(obj["data"]);
       }
       else {
         presentationErrorCallback(obj["errmsg"]);
       }
     } 
   };

   /**
    * Fetches security questions for user
    */
   AuthManager.prototype.fetchSecurityQuestionsForEnroll = function(presentationSuccessCallback,presentationErrorCallback){
    var securityRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecurityQuestions");
    
    securityRepo.customVerb('getSecurityQuestions',{},getAllCompletionCallback);
     function getAllCompletionCallback(status, data, error) {
       var srh = applicationManager.getServiceResponseHandler();
       var obj =  srh.manageResponse(status, data, error,presentationSuccessCallback,presentationErrorCallback);
       if(obj["status"] === true){
       presentationSuccessCallback(obj["data"]);
       }
       else {
        presentationErrorCallback(obj["errmsg"]);
       }
     } 
   };

   /**
    * Saves answers for security questions for user
    * @param {object} params 
    */
   AuthManager.prototype.saveSecurityQuestionsForEnroll = function(params, presentationSuccessCallback,presentationErrorCallback){
    var securityRepo  = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecurityQuestions");
    
    securityRepo.customVerb('createCustomerSecurityQuestions',params,getAllCompletionCallback);
     function getAllCompletionCallback(status, data,  error) {
       var srh = applicationManager.getServiceResponseHandler();
       var obj =  srh.manageResponse(status,  data,  error,presentationSuccessCallback,presentationErrorCallback);
       if(obj["status"] === true){
       presentationSuccessCallback(obj["data"]);
       }
       else {
        presentationErrorCallback(obj["errmsg"]);
       }
     } 
   };
    /**
    * Method to fetch user name policies for user
    */
   AuthManager.prototype.getUserNamePoliciesForEnroll = function(presentationSuccessCallback,presentationErrorCallback){
    var userRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("User");
    
    userRepo.customVerb('getPasswordPolicies',{},getAllCompletionCallback);
     function  getAllCompletionCallback(status, data, error) {
       var srh = applicationManager.getServiceResponseHandler();
       var obj =  srh.manageResponse(status, data, error,presentationSuccessCallback,presentationErrorCallback);
       if(obj["status"] === true){
       presentationSuccessCallback(obj["data"]);
       }
       else {
        presentationErrorCallback(obj["errmsg"]);
       }
     } 
   };
AuthManager.prototype.loginExternalBank = function(UserInfoJSON, successCallback, errorCallback){
    var authParams = {
                      "username": UserInfoJSON.username,
                      "password": UserInfoJSON.password,
                      "loginOptions": {
                          "isOfflineEnabled": false
                      }
                  };
    authClient = KNYMobileFabric.getIdentityService(UserInfoJSON.identityProvider);
    authClient.login(authParams,loginExternalBankSuccessCallback, errorCallback);
    function loginExternalBankSuccessCallback(){
        authClient.getBackendToken(true, {
                "IdentityServiceName": UserInfoJSON.identityProvider,
                "AuthParams": {
                    "loginOptions": {
                        "isOfflineEnabled": false
                    }
                }
        }, successCallback, errorCallback);
    }
};

AuthManager.prototype.addExternalBankCredentials = function(username, password, sessionToken, mainUser, bankId, sucessCallback, errorCallback) {
    var loggerManager = applicationManager.getLoggerManager();
    loggerManager.log("----Start AuthManager.prototype.addExternalBankCredentials----");
    function callback(status, response, error) {
        if(status === kony.mvc.constants.STATUS_SUCCESS){
            sucessCallback(response);
        } else{
            errorCallback(error);
        }
    }
    try {
        var model = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("ExternalBankIdentity");
      	var obj = new model({
            "username": username,
            "password": password,
            "SessionToken": sessionToken,
            "main_user": mainUser,
            "bank_id": bankId
        });
        obj.save(callback.bind(this));
    } catch(err) {
        loggerManager.log("Error caught in AuthManager.prototype.addExternalBankCredentials----");
    }
    loggerManager.log("----End AuthManager.prototype.addExternalBankCredentials----");
};

/**
  * Set a particular key of forgot object("User") field stored in the object in the class.
  * @param {String} key - key of the forgot object which has to be set
  * @param {String} value - value which has to be set
  */
AuthManager.prototype.setForgotAttribute = function(key,value)
{
  this.forgotObject[key]=value;
};

/**
  * Method to get Security Key for OTP.
  * @returns {String}   Security Key for OTP flow
  */
 AuthManager.prototype.getSecurityKey = function()
 {
     return this.securityKey;
 };
 
 /**
   * Method to set security key for OTP flow
   * @param {String} securityKey - Security Key for OTP flow
   */
 AuthManager.prototype.setSecurityKey = function(securityKey)
 {
   this.securityKey= securityKey;
 };
 
 /**
   * Method to clear securityKey
   */
 AuthManager.prototype.clearSecurityKey = function(securityKey)
 {
   this.securityKey= "";
 };
   

/**
  * Set primary key Attribute for the object("User")
  * Since it is a primary key, a new model has to be created with primary key value as parameter
  * and all the data obtained uptil now has to be set again to this new definition
  * @param {object} - data - a json consisting of 2 keys
  *                 userName - primary key for "User" object
  */
AuthManager.prototype.setPrimarykeyAttribute = function(data)
{
  var modelDefinition=kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("DbxUser");
  this.forgotprimarykeyObj = new modelDefinition(data);
  this.forgotprimarykeyObj.userlastname = this.forgotObject.userlastname;
  this.forgotprimarykeyObj.dateOfBirth = this.forgotObject.dateOfBirth;
  this.forgotprimarykeyObj.ssn = this.forgotObject.ssn; 
  this.forgotObject = this.forgotprimarykeyObj;
};

  /**
  * Get the forgot object field stored in the object in the class.
  * @returns {object} - forgot object of the user who forgot username/password
  */
 AuthManager.prototype.getForgotObject = function()
{
  return this.forgotObject;
};

/**
  * Reset's all the forgotObject variables to their default values 
  */
 AuthManager.prototype.clearForgotObject = function(){
   var modelDefinition=kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("User");
   this.forgotObject=new modelDefinition(); 
 };
 
 /**
  * Method to fetch Password policies 
  * @param {function} presentationSuccessCallback - will be called when call is successful
  * @param {function} presentationErrorCallback  - will be called when call is not successful
  */
  AuthManager.prototype.fetchPasswordPolicies = function (presentationSuccessCallback,presentationErrorCallback) {

    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }

    try {
      var userModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("User");
      userModel.customVerb("getPasswordPolicies", {}, getAllCompletionCallback);
    } catch (error) {
      kony.print("Something went wrong");
    }
  };
  
  /**
  * Function to login into the application with CSR (Session for user).
  * @param {object} authParams - json used to login in CSR Mode.
  * @param {object} authParams.session_token - session token
  * @param {function} presentationSuccessCallback - invoke the call back with success response.
  * @param {function} presentationErrorCallback - invoke the call back with error response. 
  */
  AuthManager.prototype.CSRLogin = function(authParams,presentationSuccess,presentationError){
	var configManager = applicationManager.getConfigurationManager();
	authClient = KNYMobileFabric.getIdentityService(configManager.constants.IDENTITYSERVICENAME);
	authClient.login(authParams,successCallback,errorCallback);
 
	function successCallback(resSuccess){
         presentationSuccess(resSuccess);
	}
	function errorCallback(resError){
        presentationError(resError);
	}
  };

return AuthManager;
});