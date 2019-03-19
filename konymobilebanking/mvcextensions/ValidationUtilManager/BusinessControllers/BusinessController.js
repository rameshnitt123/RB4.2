/**
  * ValidationUtilManager is a utility class which provides the function for validations
  */
define([], function() { 
 /**
   * ValidationUtilManager consists of utility methods related to validation
   *@alias module:ValidationUtilManager
   *@class
   */
function ValidationUtilManager(){
  this.phoneNumberRegex = /^([0-9]){7,15}$/; 
  this.passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
  this.invalidChar = "&%<>\/\+'=|\\" ;
	this.zipRegex=/^[0-9a-zA-Z]*$/;
  this.urlRegex=/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
};

inheritsFrom(ValidationUtilManager, kony.mvc.Business.Delegator);

ValidationUtilManager.prototype.initializeBusinessController = function(){};

/**
  * check whether given user name is valid 
  * @param {String} username - A username to validate
  * @returns {Boolean} - true if valid, false if invalid
  */
ValidationUtilManager.prototype.isValidUserName =function(username){
if(username == null || username == undefined || username == "")
      return false;
	else if(username.indexOf(" ") != -1){
		return false;
	}else if(username.length < 8 || username.length > 24){
		return false;
	}else if(!this.isInvalidCharacterPresent(username)){
		return false;
	}
	return true;
};

/**
  * check whether given password is valid 
  * @param {String} password - A password to validate
  * @returns {Boolean} - true if valid, false if invalid
  */
ValidationUtilManager.prototype.isValidPassword = function(password){
  	if(password === null || password === undefined || password === "")
      return false;
	else if(password.indexOf(" ") !=-1){
		return false;
	}else if(password.length<8 || password.length>24){
		return false;
	}else if(!this.isInvalidCharacterPresent(password)){
		return false;
	}else if(!this.passwordExpressionMatch(password)){
    return false;
  }
	return true;
};

/**
  * Helper function to check whether given password has any special characters present
  * @param {String} value - A string to check
  * @returns {Boolean} - true if valid, false if any invalid character present
*/
ValidationUtilManager.prototype.passwordExpressionMatch=function(val)
{
   if(!val.match(this.passwordRegex))
     { 
       return false;
     }
  return true;
}; 


/**
  * Helper function to check whether given string has any invalid characters present
  * @param {String} value - A string to check
  * @returns {Boolean} - true if valid, false if any invalid character present
  */
ValidationUtilManager.prototype.isInvalidCharacterPresent=function(value){
	     var regexp = this.invalidChar;
	    for(var i=0;i<regexp.length;i++){
		if(value.indexOf(regexp[i]) != -1){
			return false;
		}
	}
	return true;
};


/**
  * check whether given ZIP code is valid 
  * @param {String} text - A ZIP code to validate
  * @param {String} alertMessage - An alert message to be logged
  * @returns {Boolean} - true if valid, false if invalid
  */
ValidationUtilManager.prototype.isValidZip = function(text, alertMessage){
	var regex = this.zipRegex;
	if( !(text.match(regex)) ){
		if(alertMessage !=  undefined)
			alert(alertMessage); //To be replaced with logger function
        return false;
	}else if(text.replace(/ /g,'') !== "" && ( text.replace(/ /g,'').length !== 6 && text.replace(/ /g,'').length !== 5 && text.replace(/ /g,'').length !== 10 )){
		if(alertMessage !=  undefined)
			alert(alertMessage); //To be replaced with logger function
        return false;
	}
	return true;
};

/**
  * check whether given email is valid 
  * @param {String} username - An email to validate
  * @returns {Boolean} - true if valid, false if invalid
  */
ValidationUtilManager.prototype.isValidEmail = function(email){
	return kony.string.isValidEmail(email);
};

/**
  * check whether given phone number is valid 
  * @param {String} username - Any phone number to validate
  * @returns {Boolean} - true if valid, false if invalid
  */
ValidationUtilManager.prototype.isValidPhoneNumber = function(phoneNumber){
	var phoneno =  this.phoneNumberRegex;
  if(phoneNumber === null || phoneNumber === undefined || phoneNumber === "" )return false;// no number case
  
  if(phoneNumber.match(phoneno)){  
        return true;  
     }else{    
        return false;  
        }   
};

/**
  * check whether given URL is valid 
  * @param {String} url - Any URL to validate
  * @returns {Boolean} - true if valid, false if invalid
  */
ValidationUtilManager.prototype.isValidURL = function(url){
	if(!(this.urlRegex.test(url)) && url.trim().length > 0){
 		return false;
 	}
 	return true;
};

/**
  * check whether given SSN Number is valid 
  * @param {int} ssnNumber - Any SSN Number to validate
  * @returns {Boolean} - true if valid, false if invalid
  */
ValidationUtilManager.prototype.isValidSSNNumber = function(ssnNumber){
	if(isNaN(ssnNumber) || ssnNumber === null || ssnNumber === undefined ){
    	return false;
    }
  	else {
    	return true;
    }
};

/**
  * check whether given OTP is valid 
  * @param {int} otp - otp to validate
  * @returns {Boolean} - true if valid, false if invalid
  */
ValidationUtilManager.prototype.isValidOTP = function(otp){
	if(isNaN(otp) || otp === null || otp.length!=6 || otp === undefined ){
    	return false;
    }
  	else {
    	return true;
    }
};

/**
  * check whether given Date Of Birth in the format (mm/dd/yyyy) is valid date
  * @param {String} dob - dob to validate
  * @returns {Boolean} - true if valid, false if invalid
  */

ValidationUtilManager.prototype.isDOBValid = function(dob){
	var locale = kony.i18n.getCurrentLocale();
	var mm, yyyy, dd;
  	var dobArray = dob.split('/');
	if (locale == "en_US" || locale == "en") {
    mm = dobArray[0]
    dd = dobArray[1];
    yyyy = dobArray[2];
    }
	else if (locale == "en_GB" || locale === "fr_FR" || locale === "es_ES"){
    mm = dobArray[1]
    dd = dobArray[0];
    yyyy = dobArray[2];
    } 
	else if (locale == "de_DE") {
    mm = dobArray[1]
    dd = dobArray[0];
    yyyy = dobArray[2];
    }
	else if (locale == "sv_SE") {
    mm = dobArray[2]
    dd = dobArray[1];
    yyyy = dobArray[0];
    }
	var userDOB = new Date(yyyy, mm - 1, dd);
  	return (userDOB.getFullYear() == yyyy && (userDOB.getMonth() + 1) == mm && userDOB.getDate() == Number(dd) && this.isDateNotGreaterThanCurrentDate(userDOB));
};

/**
  * check whether given date object is not greater than current date.
  * @param {Object} date - date to be validated.
  * @returns {Boolean} - true if valid, false if invalid
  */
  
ValidationUtilManager.prototype.isDateNotGreaterThanCurrentDate=function(date){
  var currDateValue = new Date();
  var curryear = currDateValue.getFullYear();
  var currMonth = currDateValue.getMonth();
  var currDate = currDateValue.getDate();
  if(date.getFullYear() < curryear)
    {
     return true;
    }
   else if(date.getFullYear() == curryear)
     {
     if(date.getMonth() < currMonth)
        {
        return true;
        }
      else if (date.getMonth() == currMonth)
        {
          if(date.getDate() <= currDate)
            return true;
        }
     }
  return false;
};

/**
  * check whether given age is valid, provided date of birth in the format (mm/dd/yyyy).
  * @param {String} dob - dob to validate
  * @returns {Boolean} - true if valid, false if invalid
  */
ValidationUtilManager.prototype.isAgeValid = function(dob){
    var locale  = kony.i18n.getCurrentLocale();
    var mm, yyyy, dd;
	var currDateValue = new Date();
  	var dobArray = dob.split('/');
    if (locale == "en_US" || locale == "en") {
 	 mm = dobArray[0]
  	dd = dobArray[1];
  	yyyy = dobArray[2];
 	} 
	else if (locale == "en_GB" || locale === "fr_FR" || locale === "es_ES"){
  	mm = dobArray[1]
  	dd = dobArray[0];
  	yyyy = dobArray[2];
 	}
	else if (locale == "de_DE") {
  	mm = dobArray[1]
  	dd = dobArray[0];
  	yyyy = dobArray[2];
 	}
	else if (locale == "sv_SE") {
  	mm = dobArray[2]
  	dd = dobArray[1];
  	yyyy = dobArray[0];
 	}
  	var userDOB = new Date(yyyy, mm - 1, dd);
  	var age = currDateValue.getFullYear() - userDOB.getFullYear();
    var m = currDateValue.getMonth() - userDOB.getMonth();
    if (m < 0 || (m === 0 && currDateValue.getDate() < userDOB.getDate())) {
        age--;
    }    
  	if(age >= 18){
      return true;
    }
  	return false;
};


/**
  * check whether given CVV is valid 
  * @param {int} cvv - cvv to validate
  * @returns {Boolean} - true if valid, false if invalid
  */
ValidationUtilManager.prototype.isValidCVV = function(cvv){
	if(isNaN(cvv) || cvv === null || cvv.length!=3 || cvv === undefined ){
    	return false;
    }
  	else {
    	return true;
    }
};


/**
  * check whether given Security code is valid 
  * @param {Number} code - security code to validate
  * @returns {Boolean} - true if valid, false if invalid
  */
ValidationUtilManager.prototype.isValidSecurityCode = function(code){
  if(isNaN(code) || code === null || code.length!=6 || code === undefined ){
      return false;
    }
    else {
      return true;
    }
};


/**
  * check whether given Account Number is valid 
  * @param {Number} accNumber - Account Number to validate
  * @returns {Boolean} - true if valid, false if invalid
  */
ValidationUtilManager.prototype.isValidAccountNumber = function(accNumber){
  if(isNaN(accNumber) || accNumber === null || accNumber.length<6 || accNumber === undefined || accNumber.length>24 ){
      return false;
    }
    else {
      return true;
    }
};

/**
  * check whether given Swift Code is valid 
  * @param {Number} accNumber - Swift Code to validate
  * @returns {Boolean} - true if valid, false if invalid
  */
ValidationUtilManager.prototype.isValidSwiftCode = function(swiftCode){
  	if(kony.sdk.isNullOrUndefined(swiftCode)){
      	return false;
    }
    else if(swiftCode.length===8 || swiftCode.length===11){
    	return true;
    }
  	else{
    	return false;
  	}
};
  /**
  * check whether given IBAN is valid 
  * @param {String} iban- IBAN to validate
  * @returns {Boolean} - true if valid, false if invalid
  */
  ValidationUtilManager.prototype.isValidIBAN = function(iban) {
	iban = iban.replace(/\s/g, '');
	if (!iban.match(/^[\dA-Z]+$/)) 
      return false;
    var ibanLen = { 
      NO:15, BE:16, DK:18, FI:18, FO:18, GL:18, NL:18, MK:19,
      SI:19, AT:20, BA:20, EE:20, KZ:20, LT:20, LU:20, CR:21,
      CH:21, HR:21, LI:21, LV:21, BG:22, BH:22, DE:22, GB:22,
      GE:22, IE:22, ME:22, RS:22, AE:23, GI:23, IL:23, AD:24,
      CZ:24, ES:24, MD:24, PK:24, RO:24, SA:24, SE:24, SK:24,
      VG:24, TN:24, PT:25, IS:26, TR:26, FR:27, GR:27, IT:27,
      MC:27, MR:27, SM:27, AL:28, AZ:28, CY:28, DO:28, GT:28,
      HU:28, LB:28, PL:28, BR:29, PS:29, KW:30, MU:30, MT:31
    };
	var len = iban.length;
	if (len != ibanLen[iban.substr(0,2)]) 
      return false;
    var ibanNum,ibanMod;
	iban = iban.substr(4) + iban.substr(0,4);
	for (ibanNum='', i=0; i<len; i+=1)
      ibanNum+=parseInt(iban.charAt(i),36);
	for (ibanMod=ibanNum.substr(0,15)%97, ibanNum=ibanNum.substr(15); ibanNum; ibanNum=ibanNum.substr(13))
      ibanMod=(ibanMod+ibanNum.substr(0,13))%97;
	return ibanMod == 1;
};
  
  return ValidationUtilManager;
});