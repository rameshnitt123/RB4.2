define([], function() {	      
    function Settings_PresentationController() {
        scope_SettingsPresenter = this;
        var defaultAcc;
        kony.mvc.Presentation.BasePresenter.call(this);
		this.flowType="";
        this.eStatementPopup="";
        this.estatementData={};
		 this.currLatitude ="";
        this.currLongitude ="";
        scope_SettingsPresenter.userAddressFlowtype = null;
       
    }

    inheritsFrom(Settings_PresentationController, kony.mvc.Presentation.BasePresenter);

    Settings_PresentationController.prototype.initializePresentationController = function() {
        
    };
  Settings_PresentationController.prototype.commonFunctionForNavigation = function(formName) {
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo(formName);
  };
   Settings_PresentationController.prototype.updateUserAddressData = function(userData){   
    var userObj = applicationManager.getUserPreferencesManager();
    userObj.setuserAddressAttribute("addressLine1",(userData.addressLine1 && userData.addressLine1 !== "" && userData.addressLine1 !== null) ? userData.addressLine1 : "");
    userObj.setuserAddressAttribute("addressLine2", (userData.addressLine2 && userData.addressLine2 !== "" && userData.addressLine2 !== null) ? userData.addressLine2 : "");
    userObj.setuserAddressAttribute("state", (userData.state && userData.state !== "" && userData.state !== null) ? userData.state : "");
    userObj.setuserAddressAttribute("city",  (userData.city && userData.city !== "" && userData.city !== null) ? userData.city : "");
    userObj.setuserAddressAttribute("country",  (userData.country && userData.country !== "" && userData.country !== null) ? userData.country : "");
    userObj.setuserAddressAttribute("zipcode",  (userData.zipcode && userData.zipcode !== "" && userData.zipcode !== null) ? userData.zipcode : "");
  };
  Settings_PresentationController.prototype.updateUserAddressDataOnEdit = function(userData){    
    var userObj = applicationManager.getUserPreferencesManager();
    userObj.setuserAddressAttribute("addressLine1", (userData.addressLine1 && userData.addressLine1 !== "" && userData.addressLine1 !== null) ? userData.addressLine1 : "");
    userObj.setuserAddressAttribute("addressLine2", (userData.addressLine2 && userData.addressLine2 !== "" && userData.addressLine2 !== null) ? userData.addressLine2 : "");
    userObj.setuserAddressAttribute("state",  (userData.state && userData.state !== "" && userData.state !== null) ? userData.state : "");
    userObj.setuserAddressAttribute("city",  (userData.city && userData.city !== "" && userData.city !== null) ? userData.city : "");
    userObj.setuserAddressAttribute("country",   (userData.country && userData.country !== "" && userData.country !== null) ? userData.country : "");
    userObj.setuserAddressAttribute("zipcode",  (userData.zipcode && userData.zipcode !== "" && userData.zipcode !== null) ? userData.zipcode : "");
    userObj.setuserAddressAttribute("addressType",  (userData.addressType && userData.addressType !== "" && userData.addressType !== null) ? userData.addressType : "");
    userObj.setuserAddressAttribute("isPreferredAddress", (userData.isPreferredAddress && userData.isPreferredAddress !== "" && userData.isPreferredAddress !== null) ? userData.isPreferredAddress : "");
    userObj.setuserAddressAttribute("addressId",  (userData && userData.addressId && userData.addressId !== "" && userData.addressId !== null) ? userData.addressId : "");
  };
  Settings_PresentationController.prototype.clearUserAddressData = function(){    
   var userObj = applicationManager.getUserPreferencesManager();
   userObj.clearUserAddressData();
  };
  Settings_PresentationController.prototype.getUserAddressData = function(){   
    var userObj = applicationManager.getUserPreferencesManager();
    return userObj.getuserAddressObject();
    
  };
  Settings_PresentationController.prototype.updateUserAddressTypeData = function(userData){  
     var userObj = applicationManager.getUserPreferencesManager();
     userObj.setuserAddressAttribute("addressType",  (userData.addressType && userData.addressType !== "" && userData.addressType !== null) ? userData.addressType : "");
	 userObj.setuserAddressAttribute("addressTypeForDisplay",  (userData.addressTypeForDisplay && userData.addressTypeForDisplay !== "" && userData.addressTypeForDisplay !== null) ? userData.addressTypeForDisplay : "");
  };
  Settings_PresentationController.prototype.updateUserPreferredAddressData = function(userData){  
    var userObj = applicationManager.getUserPreferencesManager();
    userObj.setuserAddressAttribute("isPreferredAddress",  (userData.isPreferredAddress && userData.isPreferredAddress !== "" && userData.isPreferredAddress !== null) ? userData.isPreferredAddress : "");
  };
  Settings_PresentationController.prototype.updateUserAddressID = function(userData){    
    var userObj = applicationManager.getUserPreferencesManager();
    userObj.setuserAddressAttribute("addressId",  (userData && userData.addressId && userData.addressId !== "" && userData.addressId !== null) ? userData.addressId : "");
  };

  Settings_PresentationController.prototype.updateUserAddressFlowType = function(userData){    
    scope_SettingsPresenter.userAddressFlowtype =  userData;
  };
  Settings_PresentationController.prototype.getUserAddressFlowType = function(userData){    
    return scope_SettingsPresenter.userAddressFlowtype;
  };
   Settings_PresentationController.prototype.setDataDefaultLogin = function(selectedAcntRow){    
     if(selectedAcntRow === 0){
        var accountManager = applicationManager.getAccountManager();
        accountManager.fetchInternalAccounts(scope_SettingsPresenter.presentationAccountsSucc, scope_SettingsPresenter.presentationAccountsErr);
     }
     else if(selectedAcntRow === 1){
       var data = this.defaultAccounts();
       var navMan = applicationManager.getNavigationManager();
       navMan.setCustomInfo("frmSetDefaultAccount",data);
       navMan.navigateTo("frmSetDefaultAccount");
     }
  };
  Settings_PresentationController.prototype.presentationAccountsSucc = function(successRes){
    	 var navMan = applicationManager.getNavigationManager();
    	 navMan.setCustomInfo("frmEStmtAccountPreferences",successRes);
         navMan.navigateTo("frmEStmtAccountPreferences");
  };
  Settings_PresentationController.prototype.presentationAccountsErr = function(errRes){
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errRes["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errRes);
        }
  };
	Settings_PresentationController.prototype.setDataDefaultAccLogin = function(selectedAcntRow){    	        
            var accountObj = applicationManager.getAccountManager();
            var navManager = applicationManager.getNavigationManager();
            var acctInfo;        
            if(selectedAcntRow === 0){
                acctInfo = accountObj.getFromTransferSupportedAccounts(); 
                scope_SettingsPresenter.defaultAcc = "default_account_transfers"; 
            }
            else if(selectedAcntRow === 1){
                acctInfo = accountObj.getBillPaySupportedAccounts();  
                scope_SettingsPresenter.defaultAcc = "default_account_billPay";
            }
            else if(selectedAcntRow === 2){
                acctInfo = accountObj.getFromTransferSupportedAccounts(); 
                scope_SettingsPresenter.defaultAcc = "default_account_payments"; 
            }
            else if(selectedAcntRow === 3){
                 acctInfo = accountObj.getCardLessWithdrawlSupportedAccounts();
                 scope_SettingsPresenter.defaultAcc = "default_account_cardless";  
            }   
            else if(selectedAcntRow === 4){
                acctInfo = accountObj.getDepositSupportedAccounts(); 
                scope_SettingsPresenter.defaultAcc = "default_account_deposit";
            }
            var tempData = navManager.getCustomInfo("frmPreferencesDefaultAccount");  
            tempData[1] = acctInfo;            
            navManager.setCustomInfo("frmPreferencesDefaultAccount",tempData);           
            navManager.navigateTo("frmPreferencesDefaultAccount");
    };	
          
    Settings_PresentationController.prototype.defaultAccountBack = function(accId){
    	   applicationManager.getPresentationUtility().showLoadingScreen();
            var userObj = applicationManager.getUserPreferencesManager();
            var defaultAccString = scope_SettingsPresenter.defaultAcc;  
            var dataJSON = {};
            dataJSON[scope_SettingsPresenter.defaultAcc] = accId;            
            userObj.updateAccount(dataJSON,scope_SettingsPresenter.updateAccSuccess,scope_SettingsPresenter.updateAccFailure);
    };
    Settings_PresentationController.prototype.updateAccSuccess = function(success) { 
           applicationManager.getPresentationUtility().dismissLoadingScreen();           
            var userObj = applicationManager.getUserPreferencesManager();
              applicationManager.getPresentationUtility().showLoadingScreen();
            userObj.fetchUser(scope_SettingsPresenter.fetchUserSuccess,scope_SettingsPresenter.fetchUserFailure);            
   };
   Settings_PresentationController.prototype.updateAccFailure = function(err) {
   	        applicationManager.getPresentationUtility().dismissLoadingScreen();
			if (err["isServerUnreachable"]){
				applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
			}
   };
   Settings_PresentationController.prototype.fetchUserSuccess = function(success){
            scope_SettingsPresenter.getDevDetails();
            var navManager = applicationManager.getNavigationManager(); 
            var data = scope_SettingsPresenter.defaultAccounts();            
            data.popUpMsg = ("Default Account has been changed successfully");
             navManager.setCustomInfo("frmSetDefaultAccount",data); 
            applicationManager.getPresentationUtility().dismissLoadingScreen();
          	navManager.navigateTo("frmSetDefaultAccount");
   };
   Settings_PresentationController.prototype.fetchUserFailure = function(err) {
   	         applicationManager.getPresentationUtility().dismissLoadingScreen();
			 if (err["isServerUnreachable"]){
				applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
			}
   };
  
   Settings_PresentationController.prototype.navigateToChangeUserName = function(){
            //applicationManager.getPresentationUtility().showLoadingScreen();
            var userObj = applicationManager.getUserPreferencesManager();
            var userName = userObj.getUserName();
            var userFirstName = userObj.getUserFirstName();
            var userLastName = userObj.getUserLastName();
            var fullName = userFirstName+" "+userLastName;
            var navigationManager = applicationManager.getNavigationManager();
            navigationManager.setCustomInfo('frmProfileChangeUsername',fullName);
            navigationManager.setCustomInfo("frmProfileUsername",userName);
            //navigationManager.navigateTo('frmProfileUsername');
            navigationManager.navigateTo('frmProfileChangeUsername');
   };
  
   Settings_PresentationController.prototype.updateUserName = function(newUserName){
            var userObj = applicationManager.getUserPreferencesManager();
            var oldUserName = userObj.getUserName();
            if(oldUserName === newUserName){
              var controller = applicationManager.getPresentationUtility().getController('frmProfileUsername',true);
              var i18nMsg = applicationManager.getPresentationUtility().getStringFromi18n('kony.mb.profile.usernameSame',"New username can't be same as current username");
              controller.bindViewError(i18nMsg);
              return;
            }
            applicationManager.getPresentationUtility().showLoadingScreen();
            userObj.updateUserName(newUserName,scope_SettingsPresenter.updateUserNameSuccess,scope_SettingsPresenter.updateUserNameFailure);
   };
  
   Settings_PresentationController.prototype.updateUserNameSuccess = function(res){
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var navigationManager = applicationManager.getNavigationManager();
            navigationManager.setCustomInfo('frmProfileUsername','usernameUpdated');
            navigationManager.navigateTo('frmSettings');
   };
  
   Settings_PresentationController.prototype.updateUserNameFailure = function(err){
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(err&&err["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
       return;
     }
     var i18n_string = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.usernameUnavailableMsg");
     var controller = applicationManager.getPresentationUtility().getController('frmProfileUsername',true);
     controller.bindViewError(i18n_string);
   };
  
   Settings_PresentationController.prototype.navigateToChangePassword = function(){
            var userObj = applicationManager.getUserPreferencesManager();
            var userName = userObj.getUserName();
            var oldPassword = userObj.getPassword();
            var navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo('frmProfileChangePassword',userName);
            navManager.navigateTo('frmProfileChangePassword');
   };
  Settings_PresentationController.prototype.validatePassword = function(password){
    var validationUtility = applicationManager.getValidationUtilManager();
    if(validationUtility.isValidPassword(password) === false){
      var formController = applicationManager.getPresentationUtility().getController('frmProfileChangeAndUpdatePassword',true);
      formController.showFlxSecurityRequirements();
    }      
  };
   Settings_PresentationController.prototype.checkAndUpdatePassword = function(oldPassword,newPassword,reEnteredPassword){
     var userObj = applicationManager.getUserPreferencesManager();
     var password = userObj.getPassword();
     var formController = applicationManager.getPresentationUtility().getController('frmProfileChangeAndUpdatePassword',true);
     if(password !== oldPassword){
       var i18nV = applicationManager.getPresentationUtility().getStringFromi18n('kony.profile.currentpasswordWrong');
       formController.bindViewError(i18nV);
       return;
     }
     var validationUtility = applicationManager.getValidationUtilManager();
     if(validationUtility.isValidPassword(newPassword) === false){
       var i18nV1 = applicationManager.getPresentationUtility().getStringFromi18n('kony.mb.common.invalidPassword');
       formController.bindViewError(i18nV1);
       return;
     }
     if(newPassword !== reEnteredPassword){
       var i18nP = applicationManager.getPresentationUtility().getStringFromi18n('kony.mb.enroll.passwordNotMatch');
       formController.bindViewError(i18nP);
       return;
     }
     applicationManager.getPresentationUtility().showLoadingScreen();
     var userManager = applicationManager.getUserPreferencesManager();
     userManager.updateUserPassword(newPassword,scope_SettingsPresenter.updatePasswordSuccess,scope_SettingsPresenter.updatePasswordFailure);
   };
  
   Settings_PresentationController.prototype.updatePasswordSuccess = function(res){
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     var nav = applicationManager.getNavigationManager();
     nav.setCustomInfo('frmProfileChangeAndUpdatePassword','passwordUpdated');
     nav.navigateTo('frmSettings');
   };
  
   Settings_PresentationController.prototype.updatePasswordFailure = function(err){
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(err&&err["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
       return;
     }
     var formController = applicationManager.getPresentationUtility().getController('frmProfileChangeAndUpdatePassword',true);
     var i18nStr = applicationManager.getPresentationUtility().getStringFromi18n('kony.mb.enroll.SomethingWrong');
     formController.bindViewError(i18nStr);
   };
  
   Settings_PresentationController.prototype.navigateToProfilePersonalDetails = function(){
     applicationManager.getPresentationUtility().showLoadingScreen();
     var userObj = applicationManager.getUserPreferencesManager();
     var userDetails = userObj.getUserObj();
     scope_SettingsPresenter.getUserAllPhoneNumbers();
   };
   Settings_PresentationController.prototype.navigateToProfileChangeLanguage = function(){
     var navigationManager = applicationManager.getNavigationManager();     
     navigationManager.navigateTo('frmSettingsChangeLanguage');		         
   };
   
   Settings_PresentationController.prototype.getDevDetails = function(){
      var loginData = {};
     var navManager = applicationManager.getNavigationManager();     
     var userObj = applicationManager.getUserPreferencesManager();
     var devManager = applicationManager.getDeviceUtilManager();      
     loginData.accPreview = userObj.isAccountPreviewEnabled();     
     loginData.deviceReg = userObj.isDeviceRegistered();
     loginData.defLoginMode = userObj.getDefaultAuthMode(); 
     loginData.pin = userObj.isPinSet();
     loginData.faceId = userObj.isFacialAuthEnabled();   
	  loginData.isRememberMeOn = userObj.isRememberMeOn();
     loginData.istouchIdAvail = devManager.isTouchIDSupported();
     //loginData.isFaceIdAvail = devManager.isFaceIDSupported();
     navManager.setCustomInfo("frmSettings", loginData);
   };

    Settings_PresentationController.prototype.getAuthModeData = function()
    {
      var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");       
     	return authMode.presentationController.getAuthFlags();
    };
   
   Settings_PresentationController.prototype.acctPreviewBack = function(Status){      
      var userObj = applicationManager.getUserPreferencesManager(); 
      var navManager = applicationManager.getNavigationManager(); 
      var accStatus; 
      if(Status === true){
        accStatus = "On";
      }
      else{
        accStatus = "Off";
      }
      var controller = applicationManager.getPresentationUtility().getController('frmSettings', true);
      userObj.updateAccountPreviewFlag(Status);  	
      controller.updateSegmentData("Account Preview",accStatus);      
      navManager.navigateTo("frmSettings");
   };  
  
   Settings_PresentationController.prototype.getUserAllPhoneNumbers = function(){
     applicationManager.getPresentationUtility().showLoadingScreen();
     var userObj = applicationManager.getUserPreferencesManager();
     userObj.fetchAllPhoneNumbers(scope_SettingsPresenter.getUserAllPhoneNumbersSuccess,scope_SettingsPresenter.getUserAllPhoneNumbersFailure);
   };
  
   Settings_PresentationController.prototype.getUserAllPhoneNumbersSuccess = function(data){
     var result = [];
     for(var i =0;i<data.length;i++){
       var temp = {};
       var name = data[i].type;
       if(data[i].isPrimary === "true"){
         name += ' (Marked as Primary)';
       }
       else if(data[i].countryType && data[i].countryType.toLowerCase() === 'international'){
         name += '(International)';
       }
       temp.lblDetail = name;
       temp.lblDetailValue = data[i].phoneNumber;
       temp.template = 'flxDetails';
       result.push(temp);
     }
     var result1 = [];
     if(result.length > 0){
       var temp1 = {};
       temp1.lblHeader = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.ProfilePersonalDetails.RegisteredPhoneNumbers");
       temp1.template = 'flxDetailsHeader';
       result1.push(temp1);
       result1.push(result);
     }
     
     var dobssn = [];
     var userObj = applicationManager.getUserPreferencesManager();
     var dob = userObj.getUserDOB();
     dob = dob.substring(0,10);
     var forUtility=applicationManager.getFormatUtilManager();
     var dateobj=forUtility.getDateObjectfromString(dob,"YYYY-MM-DD");   
     dob = forUtility.getFormatedDateString(dateobj,forUtility.getApplicationDateFormat());
     var ssn = applicationManager.getDataProcessorUtility().maskAccountNumber(userObj.getSSN());
     var email = userObj.getUserEmail();
     var secondaryEmail = userObj.getUserObj().secondaryemail;
     var secondaryEmail2 = userObj.getUserObj().secondaryemail2;
     var temp2 = {};
     temp2.lblDetail = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.EnrollDOB.Title");
     temp2.lblDetailValue =  dob;
     temp2.template = "flxDetails";
     var temp3 = {
           "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Forgot.EnterSSNTitle"),
           "lblDetailValue": ssn,
           "flxSeparator": {"isVisible" : false},
           "template" : "flxDetails"
         };
     dobssn.push(temp2);
     dobssn.push(temp3);
     
     var answer = [];
     answer.push({});
     answer.push(dobssn);
     
     var segmentData = [];
     segmentData.push(answer);
     if(result1.length > 0)
        segmentData.push(result1);
     
     
     var emails = [];
     var header = {
        "lblHeader": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Profile.RegisteredEmailIDs"),
        "template" : "flxDetailsHeader"
      };
     emails.push(header);
     
     var emailData =[];
     
     var rowData = {
         "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.ProfilePersonalDetails.PrimaryEmailID"),
         "lblDetailValue": email,
         "template" : "flxDetails"
       };
     var rowData1 = {
       "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Profile.SecondaryEmailID"),
        "lblDetailValue": secondaryEmail,
        "template" : "flxDetails"
     };
     var rowData2 = {
          "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Profile.SecondaryEmailID2"),
          "lblDetailValue": secondaryEmail2,
          "flxSeparator": {"isVisible" : false},
          "template" : "flxDetails"
        };
     if(email){
       emailData.push(rowData);
     }
     if(secondaryEmail){
       emailData.push(rowData1);
     }
     if(secondaryEmail2){
       emailData.push(rowData2);
     }   
     emails.push(emailData);
     if(emails.length > 1 && emailData.length > 0)
     segmentData.push(emails);
     
     scope_SettingsPresenter.segmentProfileData = segmentData;
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     scope_SettingsPresenter.getUserAllAddresses();   
   };
  
   Settings_PresentationController.prototype.getUserAllPhoneNumbersFailure = function(err){
     kony.print(JSON.stringify(err));
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(err && err["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
     }
   };
  
   Settings_PresentationController.prototype.getUserAllAddresses = function(){
     applicationManager.getPresentationUtility().showLoadingScreen();
     var userObj = applicationManager.getUserPreferencesManager();
     userObj.fetchUserAllAddresses(scope_SettingsPresenter.getUserAllAddressesSuccess,scope_SettingsPresenter.getUserAllAddressesFailure);
   };
  
   Settings_PresentationController.prototype.getUserAllAddressesSuccess = function(data){
     var addressArray = [];
     var header = {
        "lblHeader": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.ProfilePersonalDetails.RegisteredAddress"),
        "template" : "flxDetailsHeader"
      };
     var addressSegData = [];
     for(var i =0;i<data.length;i++){
       var type = data[i].addressType;
       if(data[i].isPreferredAddress === "1"){
         type = type + "(Marked as communicating address)";
       }
       var addr = data[i].addressLine1+","+data[i].addressLine2+","+data[i].city+","+data[i].country+","+data[i].zipcode;
       var row = {
         "lblDetail": type,
         "lblDetailValue": addr,
         "template" : "flxDetails"
       };
       addressSegData.push(row);
     }
     
     addressArray.push(header);
     addressArray.push(addressSegData);
     
     var segmentData = scope_SettingsPresenter.segmentProfileData;
     if(addressArray.length > 1 && addressSegData.length > 0)
        segmentData.push(addressArray);
     
     
     var navigationManager = applicationManager.getNavigationManager();
     navigationManager.setCustomInfo('frmProfilePersonalDetails',segmentData);
     var userObj = applicationManager.getUserPreferencesManager();
     var userFirstName = userObj.getUserFirstName();
     var userLastName = userObj.getUserLastName();
     navigationManager.setCustomInfo('frmProfilePersonalDetails1',userFirstName+" "+userLastName);
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     navigationManager.navigateTo('frmProfilePersonalDetails');
   };   
  
   Settings_PresentationController.prototype.getUserAllAddressesFailure = function(err){
     kony.print(JSON.stringify(err));
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(err && err["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
     }
   };
  
   Settings_PresentationController.prototype.navigateToAddOrEditEmail = function(flow){
     applicationManager.getPresentationUtility().showLoadingScreen();
     var userObj = applicationManager.getUserPreferencesManager();
     var email = userObj.getUserEmail();
     var secondaryEmail = userObj.getUserObj().secondaryemail;
     var secondaryEmail2 = userObj.getUserObj().secondaryemail2;
     var data = [];
     if(email){
       data.push(
       {
        "lblDetail": "Primary Email ID",
        "lblDetailValue": email,
        "template" : "flxMain"
       }
       );
     }
     if(secondaryEmail){
       data.push(
       {
         "lblDetail": "Secondary Email ID",
        "lblDetailValue": secondaryEmail,
        "template" : "flxMain"
       }
       );
     }
     if(secondaryEmail2){
       data.push({
         "lblDetail": "Secondary Email ID2",
        "lblDetailValue": secondaryEmail2,
        "template" : "flxMain"
       });
     }
     
     var navManager = applicationManager.getNavigationManager();
     navManager.setCustomInfo('frmProfileEditEmails',data);
     navManager.setCustomInfo('frmProfileEnterEmailID',flow);
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     navManager.navigateTo('frmProfileEditEmails');
     
   };
  
   Settings_PresentationController.prototype.navigateToEditPhoneNumber = function(info){
     applicationManager.getPresentationUtility().showLoadingScreen();
     var userObj = applicationManager.getUserPreferencesManager();
     var phoneNumbers = userObj.getUserAllPhoneNumbers();
     var data = [];
     for(var i=0;i<phoneNumbers.length;i++){
       var temp ={};
       var type = phoneNumbers[i].type;
       if(phoneNumbers[i].isPrimary === "true"){
         type = type + " (Marked as Primary)";
       }else if(phoneNumbers[i].countryType && phoneNumbers[i].countryType.toLowerCase() === "international"){
         type = type + "(International)";
       }
       temp.id = phoneNumbers[i].id;
       temp.lblDetail = type;
       temp.lblDetailValue = phoneNumbers[i].phoneNumber;
       temp.template = "flxMain";
       data.push(temp);
     }
     var customData = {};
     customData.data = data;
     if(info !== undefined && info !== null)
     customData.context = info.flow;
     var nav = applicationManager.getNavigationManager();
     nav.setCustomInfo('frmProfileEditPhoneNumbers',customData);
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     nav.setCustomInfo('frmProfileEditPhoneNumberMain',info.flow)
     nav.navigateTo('frmProfileEditPhoneNumbers');
   };
  
   Settings_PresentationController.prototype.navigateToEditOrAddAddress = function(){
     applicationManager.getPresentationUtility().showLoadingScreen();
     var userObj = applicationManager.getUserPreferencesManager();
     var addressObj = userObj.getUserAllAddresses();
     var result = [];
     for(var i =0;i<addressObj.length;i++){
       var type = addressObj[i].addressType;
       if(addressObj[i].isPreferredAddress === "1"){
         type = type + "(Marked as communicating address)";
       }
       var details = addressObj[i].addressLine1+","+addressObj[i].addressLine2+","+addressObj[i].city+","+addressObj[i].country;
       var temp = {
         "imgDelete": {"src" : "deleteicon.png"},
         "lblDelete": "Delete",
         "lblDetail": type,
         "lblDetailValue": details,
         "template" : "flxAddress",
         "addressId" : addressObj[i].addressId
       };
       result.push(temp);
     }
     var navManager = applicationManager.getNavigationManager();
     navManager.setCustomInfo('frmProfileEditAddressList',result);
     navManager.navigateTo('frmProfileEditAddressList');
     applicationManager.getPresentationUtility().dismissLoadingScreen();
   };
  
   Settings_PresentationController.prototype.naviagteToProfileEditPhoneNumber = function(index){
     var userObj = applicationManager.getUserPreferencesManager();
     var phoneNumbers = userObj.getUserAllPhoneNumbers();
     index = parseInt(index[1]);
     var selectedPhone = phoneNumbers[index];
     var navManager = applicationManager.getNavigationManager();
     var jsonV = {};
     jsonV.data = selectedPhone;
     jsonV.flow = "edit";
     navManager.setCustomInfo('frmProfileEditPhoneNumberMain',jsonV);
     navManager.navigateTo('frmProfileEditPhoneNumberMain');
   };
  
   Settings_PresentationController.prototype.updateUserPhoneNumber = function(data){
     applicationManager.getPresentationUtility().showLoadingScreen();
     var userObj = applicationManager.getUserPreferencesManager();
     userObj.updateUserPhoneNumber(data,scope_SettingsPresenter.updateUserPhoneNumberSuccess,scope_SettingsPresenter.updateUserPhoneNumberFailure);
   };
  
   Settings_PresentationController.prototype.updateUserPhoneNumberSuccess = function(data){
     var userObj = applicationManager.getUserPreferencesManager();
     userObj.fetchAllPhoneNumbers(success,failure);
     function success(data){
       applicationManager.getPresentationUtility().dismissLoadingScreen();
       scope_SettingsPresenter.navigateToEditPhoneNumber({"flow":"editsuccess"});
       scope_SettingsPresenter.refreshPersonalDetailsData();
     }
     function failure(err){
       applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(err && err["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
     }
     }
   };
  
   Settings_PresentationController.prototype.updateUserPhoneNumberFailure = function(err){
     kony.print(JSON.stringify(err));
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(err && err["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
     }
   };
  
   Settings_PresentationController.prototype.refreshPersonalDetailsData = function(){
     applicationManager.getPresentationUtility().showLoadingScreen();
     var userObj = applicationManager.getUserPreferencesManager();
     var phoneData = userObj.getUserAllPhoneNumbers();
     var data = phoneData;
     var result = [];
     for(var i =0;i<data.length;i++){
       var temp = {};
       var name = data[i].type;
       if(data[i].isPrimary === "true"){
         name += ' (Marked as Primary)';
       }
       else if(data[i].countryType && data[i].countryType.toLowerCase() === 'international'){
         name += '(International)';
       }
       temp.lblDetail = name;
       temp.lblDetailValue = data[i].phoneNumber;
       temp.template = 'flxDetails';
       result.push(temp);
     }
     var result1 = [];
     if(result.length > 0){
       var temp1 = {};
       temp1.lblHeader = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.ProfilePersonalDetails.RegisteredPhoneNumbers");
       temp1.template = 'flxDetailsHeader';
       result1.push(temp1);
       result1.push(result);
     }
     
     var dobssn = [];
     var dob = userObj.getUserDOB();
     dob = dob.substring(0,10);
     var forUtility=applicationManager.getFormatUtilManager();
     var dateobj=forUtility.getDateObjectfromString(dob,"YYYY-MM-DD");   
     dob = forUtility.getFormatedDateString(dateobj,forUtility.getApplicationDateFormat());
     var ssn = applicationManager.getDataProcessorUtility().maskAccountNumber(userObj.getSSN());
     var email = userObj.getUserEmail();
     var secondaryEmail = userObj.getUserObj().secondaryemail;
     var secondaryEmail2 = userObj.getUserObj().secondaryemail2;
     var temp2 = {};
     temp2.lblDetail = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.EnrollDOB.Title");
     temp2.lblDetailValue =  dob;
     temp2.template = "flxDetails";
     
     var temp3 = {
           "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Forgot.EnterSSNTitle"),
           "lblDetailValue": ssn,
           "flxSeparator": {"isVisible" : false},
           "template" : "flxDetails"
         };
     dobssn.push(temp2);
     dobssn.push(temp3);
     var answer = [];
     answer.push({});
     answer.push(dobssn);
     
     var segmentData = [];
     segmentData.push(answer);
     if(result1.length > 0)
        segmentData.push(result1);
     
     
     var emails = [];
     var header = {
        "lblHeader": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Profile.RegisteredEmailIDs"),
        "template" : "flxDetailsHeader"
      };
     emails.push(header);
     
     var emailData =[];
     
     var rowData = {
         "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.ProfilePersonalDetails.PrimaryEmailID"),
         "lblDetailValue": email,
         "template" : "flxDetails"
       };
     var rowData1 = {
       "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Profile.SecondaryEmailID"),
        "lblDetailValue": secondaryEmail,
        "template" : "flxDetails"
     };
     var rowData2 = {
          "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Profile.SecondaryEmailID2"),
          "lblDetailValue": secondaryEmail2,
          "flxSeparator": {"isVisible" : false},
          "template" : "flxDetails"
        };
     if(email){
       emailData.push(rowData);
     }
     if(secondaryEmail){
       emailData.push(rowData1);
     }
     if(secondaryEmail2){
       emailData.push(rowData2);
     }   
     emails.push(emailData);
     if(emails.length > 1 && emailData.length > 0)
     segmentData.push(emails);
     
     var addressData = userObj.getUserAllAddresses();
     data  = addressData;
     var addressArray = [];
     var header = {
        "lblHeader": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.ProfilePersonalDetails.RegisteredAddress"),
        "template" : "flxDetailsHeader"
      };
     var addressSegData = [];
     for(var i =0;i<data.length;i++){
       var type = data[i].addressType;
       if(data[i].isPreferredAddress === "1"){
         type = type + "(Marked as communicating address)";
       }
       var addr = data[i].addressLine1+","+data[i].addressLine2+","+data[i].city+","+data[i].country+","+data[i].zipcode;
       var row = {
         "lblDetail": type.charAt(0).toUpperCase()+type.slice(1),
         "lblDetailValue": addr,
         "template" : "flxDetails"
       };
       addressSegData.push(row);
     }
     
     addressArray.push(header);
     addressArray.push(addressSegData);
     if(addressArray.length > 1 && addressSegData.length > 0)
        segmentData.push(addressArray);
     var navigationManager = applicationManager.getNavigationManager();
     navigationManager.setCustomInfo('frmProfilePersonalDetails',segmentData);
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     
   };
   Settings_PresentationController.prototype.createOrUpdatePhoneBuilderObject = function(key,value){
     if(scope_SettingsPresenter.phoneBuilderObject === null || scope_SettingsPresenter.phoneBuilderObject === undefined){
       scope_SettingsPresenter.phoneBuilderObject = {};
     }
     scope_SettingsPresenter.phoneBuilderObject[key] = value;
   };
  
   Settings_PresentationController.prototype.getPhoneBuilderObject = function(){
     return scope_SettingsPresenter.phoneBuilderObject;
   };
   Settings_PresentationController.prototype.navigateToProfileContactType = function(){
      var navigationManager = applicationManager.getNavigationManager();
     navigationManager.setCustomInfo("frmProfileContactType","add");
     navigationManager.navigateTo("frmProfileContactType");
   };
  
   Settings_PresentationController.prototype.addUserPhoneNumber = function(){
     applicationManager.getPresentationUtility().showLoadingScreen();
     var obj = scope_SettingsPresenter.getPhoneBuilderObject();
     obj.receivePromotions = "0";
     obj.extension = "";
     
     var userObj = applicationManager.getUserPreferencesManager();
     userObj.createPhoneNumber(obj,scope_SettingsPresenter.addUserPhoneNumberSuccess,scope_SettingsPresenter.addUserPhoneNumberFailure);
   };
  
   Settings_PresentationController.prototype.addUserPhoneNumberSuccess = function(data){
     var userObj = applicationManager.getUserPreferencesManager();
     userObj.fetchAllPhoneNumbers(success,failure);
     function success(data){
       applicationManager.getPresentationUtility().dismissLoadingScreen();
       scope_SettingsPresenter.navigateToEditPhoneNumber({"flow":"addsuccess"});
       scope_SettingsPresenter.refreshPersonalDetailsData();
     }
     function failure(err){
       applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(err && err["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
     }
     }
   };
  
   Settings_PresentationController.prototype.addUserPhoneNumberFailure = function(err){
     kony.print(JSON.stringify(err));
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(err && err["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
     }
   };
  
   Settings_PresentationController.prototype.navigateToAddPhoneNumberConfirmPage = function(){
     var obj = scope_SettingsPresenter.getPhoneBuilderObject();
     var nav = applicationManager.getNavigationManager();
     nav.setCustomInfo('frmProfileConfirmDetails',obj);
     nav.navigateTo('frmProfileConfirmDetails');
   };
      Settings_PresentationController.prototype.updateDeviceRegistration = function(){        
        var registrationManager = applicationManager.getRegistrationManager();
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var record = {
            "deviceId": deviceUtilManager.getDeviceInfo().deviceID
        };
        registrationManager.updateDeviceRegistrationStatus(record, this.presentationDeviceSuccess, this.presentationDeviceError);
   };
  
   Settings_PresentationController.prototype.showSettings = function()
    {
      scope_SettingsPresenter.getDevDetails();
      var navObj = applicationManager.getNavigationManager();
      var keys = navObj.getCustomInfo("frmSettings");
      keys.popUpMsg = "";
      navObj.setCustomInfo("frmSettings",keys);
      navObj.navigateTo("frmSettings");
    };

   Settings_PresentationController.prototype.presentationDeviceSuccess = function(success){
        var userObj = applicationManager.getUserPreferencesManager(); 
        var navManager = applicationManager.getNavigationManager();
        userObj.updateDeviceRegisterFlag(true);
        scope_SettingsPresenter.getDevDetails();
        var keys = navManager.getCustomInfo("frmSettings");
        keys.popUpMsg = kony.i18n.getLocalizedString("kony.mb.Device.Registration.Successful");
       navManager.setCustomInfo("frmSettings",keys);      
       navManager.navigateTo("frmSettings");
   };
  
   Settings_PresentationController.prototype.presentationDeviceError = function(err){
       applicationManager.getPresentationUtility().dismissLoadingScreen();
       alert(err);
   };
  
     Settings_PresentationController.prototype.deRegisterDevice = function(formContext){
     	applicationManager.getPresentationUtility().showLoadingScreen();
        var registrationManager = applicationManager.getRegistrationManager();
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var record = {
            "deviceId": deviceUtilManager.getDeviceInfo().deviceID
        };
        registrationManager.deleteRegisteredDevice(record,this.deleteRegSuccess.bind(this, formContext),this.deleteRegError.bind(this, formContext));
   };
  
   Settings_PresentationController.prototype.deleteRegSuccess = function(formContext, success){
   	applicationManager.getPresentationUtility().dismissLoadingScreen();
     	var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
		var userObj = applicationManager.getUserPreferencesManager(); 
		userObj.updateAccountPreviewFlag(false);
		if(userObj.isFaceEnrolled())
			authMod.presentationController.FaceAuthUnenroll(formContext);
        userObj.setDefaultAuthMode("password");
		authMod.presentationController.onLogout();
   };
  
   Settings_PresentationController.prototype.deleteRegError = function(error){
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     if (error["isServerUnreachable"])
          {
               applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
          }
        else
          alert(error.errorMessage);
   };
  
   Settings_PresentationController.prototype.setPinAsDefault = function(){
      var userObj = applicationManager.getUserPreferencesManager(); 
      var navManager = applicationManager.getNavigationManager(); 
      var defaultAuth = "pin";
      userObj.setDefaultAuthMode(defaultAuth);
      var controller = applicationManager.getPresentationUtility().getController('frmPreferencesPin', true);      
      controller.bindViewSuccess(kony.i18n.getLocalizedString("kony.mb.PIN.has.been.selected.as.default.login"));
      navManager.navigateTo("frmSettings");
   };
   Settings_PresentationController.prototype.verifyCurrPin = function(pin){
       var userObj = applicationManager.getUserPreferencesManager(); 
       userObj.verifyExistingPin(pin,this.verifyPinSuccess,this.verifyPinFailure);
   };
   Settings_PresentationController.prototype.verifyPinSuccess = function(success){
      if(success.result == "true"){
        var navManager = applicationManager.getNavigationManager(); 
        navManager.navigateTo("frmPreferencesResetStep2");  
     }
     else{
		var controller = applicationManager.getPresentationUtility().getController('frmPreferencesResetStep1', true); 
        controller.clearKeyPadString();  
        applicationManager.getPresentationUtility().dismissLoadingScreen(); 
        var controller = applicationManager.getPresentationUtility().getController('frmPreferencesResetStep1', true);
        controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Enter.Correct.Pin"));
     }        
   };
   Settings_PresentationController.prototype.verifyPinFailure = function(error){
        applicationManager.getPresentationUtility().dismissLoadingScreen(); 
     	 if (error["isServerUnreachable"])
          {
               applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
          }
        else
          alert(error.errorMessage);
   };
    Settings_PresentationController.prototype.updatePin = function(pin){
       var userObj = applicationManager.getUserPreferencesManager();  
       userObj.createPin(pin,this.updatePinSuccess,this.updatePinError);
    };
    Settings_PresentationController.prototype.updatePinSuccess= function(success){ 
    //  applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,kony.i18n.getLocalizedString("kony.mb.Please.enter.a.update.pin")); 	
       	var navManager = applicationManager.getNavigationManager();
      	var msgData = {popUpMsg:"Login Pin has been changed successfully."};
     	navManager.setCustomInfo("frmPreferencesPin",msgData) ;      
      	navManager.navigateTo("frmPreferencesPin");
    };
    Settings_PresentationController.prototype.updatePinError= function(error){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
       if (error["isServerUnreachable"])
          {
               applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
          }
        else
          alert(error.errorMessage);
    };

  Settings_PresentationController.prototype.addressSearch = function(searchText){
    var locationManager = applicationManager.getLocationManager();
     if(scope_SettingsPresenter.currLatitude && scope_SettingsPresenter.currLongitude){
          searchText.currLongitude = scope_SettingsPresenter.currLongitude;
           searchText.currLatitude = scope_SettingsPresenter.currLatitude;
         locationManager.fetchAddressSuggestions(searchText,scope_SettingsPresenter.addressSearchPresentationSuccessCallback, scope_SettingsPresenter.addressSearchPresentationErrorCallback);
    
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
        scope_SettingsPresenter.currLatitude = response.coords.latitude;  
      searchText.currLongitude = response.coords.longitude;  
        scope_SettingsPresenter.currLongitude = response.coords.longitude;  
      locationManager.fetchAddressSuggestions(searchText,scope_SettingsPresenter.addressSearchPresentationSuccessCallback, scope_SettingsPresenter.addressSearchPresentationErrorCallback);
        
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
          locationManager.fetchAddressSuggestions(searchText,scope_SettingsPresenter.addressSearchPresentationSuccessCallback, scope_SettingsPresenter.addressSearchPresentationErrorCallback);
        } else {
          LocationSettings.open();
        }
      }
    }
     }
  };
  Settings_PresentationController.prototype.addressSearchPresentationSuccessCallback = function(res) {
    kony.print("Success in addressSearch");
    var controller = applicationManager.getPresentationUtility().getController('frmProfileAddAddress', true);
    controller.setSearchData(res);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  Settings_PresentationController.prototype.addressSearchPresentationErrorCallback = function(err) {
    kony.print("Error in addressSearch");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  Settings_PresentationController.prototype.updateProfileAddress = function() {
    var userPreferencesManager = applicationManager.getUserPreferencesManager();
    userPreferencesManager.updateAddress(scope_SettingsPresenter.getUserAddressData(),scope_SettingsPresenter.updateProfileAddressPresentationSuccessCallback, scope_SettingsPresenter.updateProfileAddressPresentationErrorCallback);
  };
  Settings_PresentationController.prototype.updateProfileAddressPresentationSuccessCallback = function(res) {
    kony.print("Success in updateProfileAddress");
    scope_SettingsPresenter.getUserAllAddressesData();
    
    var navManager = applicationManager.getNavigationManager();
    var data = {
      "message" : "AddressUpdated"
    };
    navManager.setCustomInfo("frmProfileEditAddressList1",data);
   applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  Settings_PresentationController.prototype.updateProfileAddressPresentationErrorCallback = function(err) {
    kony.print("Error in updateProfileAddress");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(err && err["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
     }
  };
  Settings_PresentationController.prototype.createProfileAddress = function(data) {
    var userPreferencesManager = applicationManager.getUserPreferencesManager();
    userPreferencesManager.createAddress(scope_SettingsPresenter.getUserAddressData(),scope_SettingsPresenter.createProfileAddressPresentationSuccessCallback, scope_SettingsPresenter.createProfileAddressPresentationErrorCallback);
  };
  Settings_PresentationController.prototype.createProfileAddressPresentationSuccessCallback = function(res) {
    kony.print("Success in createProfileAddress");
    scope_SettingsPresenter.getUserAllAddressesData();
    var navManager = applicationManager.getNavigationManager();
    var data = {
      "message" : "AdressAdded"
    };
    navManager.setCustomInfo("frmProfileEditAddressList1",data);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  Settings_PresentationController.prototype.createProfileAddressPresentationErrorCallback = function(err) {
    kony.print("Error in createProfileAddress");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(err && err["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
     }
  };
  Settings_PresentationController.prototype.deleteProfileAddress = function(data) {
    var userPreferencesManager = applicationManager.getUserPreferencesManager();
    userPreferencesManager.deleteAddress(data,scope_SettingsPresenter.deleteProfileAddressPresentationSuccessCallback, scope_SettingsPresenter.deleteProfileAddressPresentationErrorCallback);
  };
  Settings_PresentationController.prototype.deleteProfileAddressPresentationSuccessCallback = function(res) {
    kony.print("Success in deleteProfileAddress");
    scope_SettingsPresenter.getUserAllAddressesData();
    var navManager = applicationManager.getNavigationManager();  
    var data = {
      "message" : "AddressDeleted"
    };
    navManager.setCustomInfo("frmProfileEditAddressList1",data);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  Settings_PresentationController.prototype.deleteProfileAddressPresentationErrorCallback = function(err) {
    kony.print("Error in deleteProfileAddress");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(err && err["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
     }
  };
  
   Settings_PresentationController.prototype.navigateToEditEmail = function(index){
     var userObj = applicationManager.getUserPreferencesManager();
     var user  = userObj.getUserObj();
     var email = "";
     var isPrimary = 1;
     if(index === 0){
       email = user.email;
     }
     if(index === 1){
       email = user.secondaryemail;
       isPrimary = 0;
       if(email === null || email === undefined || email === ""){
         email = user.secondaryemail2;
       }
     }
     if(index === 2){
       email = user.secondaryemail2;
       isPrimary = 0;
     }
     var data = {};
     data.index = index;
     data.email = email;
     data.isPrimary = isPrimary;
     var navManager = applicationManager.getNavigationManager();
     navManager.setCustomInfo('frmProfileEnterEmailID',data);
     navManager.setCustomInfo('frmProfileEnterEmailIDFlow',"edit");
     navManager.navigateTo('frmProfileEnterEmailID');
   };
  
   Settings_PresentationController.prototype.updateEmail = function(data){
     var validationManager = applicationManager.getValidationUtilManager();
     
     if(validationManager.isValidEmail(data.email) === false){
       var formController = applicationManager.getPresentationUtility().getController('frmProfileEnterEmailID',true);
       var i18nV = applicationManager.getPresentationUtility().getStringFromi18n('kony.mb.OnBoarding.InvalidEmail');
       formController.bindViewError(i18nV);
       return;
     }
     applicationManager.getPresentationUtility().showLoadingScreen();
     var index = data.index;
     var updateData = {};
     var userObj = applicationManager.getUserPreferencesManager();
     if(index === 0){
       var email = data.email;
       userObj.updatePrimaryEmail(email,successCallback,failureCallback);
     }
     if(index === 1){
       var oldEmail = userObj.getUserObj().secondaryemail;
       var whichEmail = "secondaryemail";
       if(oldEmail === null || oldEmail === undefined || oldEmail === ""){
         oldEmail = userObj.getUserObj().secondaryemail2;
         whichEmail = "secondaryemail2";
       }
       if(data.isPrimary === 1){
         var primaryEmail = userObj.getUserEmail();
         var  updatedEmail = data.email;
         var jsonParams = {};
         jsonParams.email = updatedEmail;
         var oldSecondaryEmail = userObj.getUserObj().secondaryemail;
         if(oldSecondaryEmail !== null && oldSecondaryEmail !== undefined && oldSecondaryEmail !== "")
              jsonParams.secondaryemail = primaryEmail;
         else{
              jsonParams.secondaryemail2 = primaryEmail;
         }
         userObj.partialUpdateOnUserObj(jsonParams,successCallback,failureCallback);
       }
       else{
         userObj.partialUpdateOnUserObj({whichEmail:data.email},successCallback,failureCallback);
       }
     }
     if(index === 2){
       if(data.isPrimary === 1){
         var primaryEmail1 = userObj.getUserEmail();
         var updatedEmail1 = data.email;
         var params = {};
         params.email = updatedEmail1;
         params.secondaryemail2 = primaryEmail1;
         userObj.partialUpdateOnUserObj(params,successCallback,failureCallback);
       }
       else{
         userObj.partialUpdateOnUserObj({"secondaryemail2":data.email},successCallback,failureCallback);
       }
     }
       
       function successCallback(data){
           userObj.fetchUser(success,failure);
		   function success(data){
			   scope_SettingsPresenter.navigateToAddOrEditEmail("updatesuccess");
             applicationManager.getPresentationUtility().dismissLoadingScreen();
		   }
		   function failure(error){
			   applicationManager.getPresentationUtility().dismissLoadingScreen();
		   }
         }
 
       function failureCallback(error){
         applicationManager.getPresentationUtility().dismissLoadingScreen();
         kony.print("error"+JSON.stringify(error));
       }
   };
  
   Settings_PresentationController.prototype.deleteEmail = function(index){
         var userManager = applicationManager.getUserPreferencesManager();
         if(index === 1){
           var whichEmail = "secondaryemail";
           var secondaryEmail = userManager.getUserObj().secondaryemail;
           if(secondaryEmail === "" || secondaryEmail === undefined || secondaryEmail === null){
             whichEmail = "secondaryemail2";
           }
           applicationManager.getPresentationUtility().showLoadingScreen();
           var jsonParams = {};
           jsonParams[whichEmail] = "";
           userManager.partialUpdateOnUserObj(jsonParams,successCallback,failureCallback);
         }
        if(index === 2){
           applicationManager.getPresentationUtility().showLoadingScreen();
           userManager.partialUpdateOnUserObj({"secondaryemail2":""},successCallback,failureCallback);
        }
         
         function successCallback(data){
           userManager.fetchUser(success,failure);
		   function success(data){
			 scope_SettingsPresenter.navigateToAddOrEditEmail("deletesuccess");
             applicationManager.getPresentationUtility().dismissLoadingScreen();
             scope_SettingsPresenter.refreshPersonalDetailsData();
		   }
		   function failure(error){
			   applicationManager.getPresentationUtility().dismissLoadingScreen();
		   }
         }
         function failureCallback(error){
             applicationManager.getPresentationUtility().dismissLoadingScreen();
         }
        
   };
  
   Settings_PresentationController.prototype.addEmail = function(data){
     applicationManager.getPresentationUtility().showLoadingScreen();
     var validationManager = applicationManager.getValidationUtilManager();
     if(validationManager.isValidEmail(data.email) === false){
       applicationManager.getPresentationUtility().dismissLoadingScreen();
       var formController = applicationManager.getPresentationUtility().getController('frmProfileEnterEmailID',true);
       var i18nV = applicationManager.getPresentationUtility().getStringFromi18n('kony.mb.OnBoarding.InvalidEmail');
       formController.bindViewError(i18nV);
       return;
     }
     var userManager = applicationManager.getUserPreferencesManager();
     var userObj = userManager.getUserObj();
     var email = userObj.email;
     var secondaryEmail = userObj.secondaryemail;
     var secondaryEmail2 = userObj.secondaryemail2;
     var jsonParams = {};
     if(data.isPrimary === 1){
       jsonParams.email = data.email;
       if(secondaryEmail === null || secondaryEmail === undefined){
         jsonParams.secondaryemail = email;
       }
       else if(secondaryEmail2 === null || secondaryEmail2 === undefined){
         jsonParams.secondaryemail2 = email;
       }
     }
     else{
       if(secondaryEmail === null || secondaryEmail === undefined){
         jsonParams.secondaryemail = data.email;
       }
       else if(secondaryEmail2 === null || secondaryEmail2 === undefined){
         jsonParams.secondaryemail2 = data.email;
       }
     }
     userManager.partialUpdateOnUserObj(jsonParams,success,failure);
     function success(data){
       userManager.fetchUser(success1,failure1);
		   function success1(data){
			   scope_SettingsPresenter.navigateToAddOrEditEmail("addsuccess");
             applicationManager.getPresentationUtility().dismissLoadingScreen();
             scope_SettingsPresenter.refreshPersonalDetailsData();
		   }
		   function failure1(error){
			   applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(err && err["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
     }
		   }
     }
     function failure(error){
       applicationManager.getPresentationUtility().dismissLoadingScreen();
       kony.print(JSON.stringify(error));
     if(err && err["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
     }
     }
   };
  
   Settings_PresentationController.prototype.uploadProfilePicture = function(base64){
     applicationManager.getPresentationUtility().showLoadingScreen();
     var userObj = applicationManager.getUserPreferencesManager();
     var params = {};
     params.userImage = base64;
     userObj.updateUserDetails(params,scope_SettingsPresenter.uploadProfilePictureSuccess,scope_SettingsPresenter.uploadProfilePictureFailure);
   };
  
   Settings_PresentationController.prototype.uploadProfilePictureSuccess = function(data){
     var formController = applicationManager.getPresentationUtility().getController('frmProfilePersonalDetails',true);
     var i18nStr = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.ProfileManagement.photoUploaded");
     formController.bindViewSuccess(i18nStr);
     formController.bindUploadedImage();
     applicationManager.getPresentationUtility().dismissLoadingScreen();
   };
  
   Settings_PresentationController.prototype.uploadProfilePictureFailure = function(err){
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(err && err["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
       return;
     }
     var formController = applicationManager.getPresentationUtility().getController('frmProfilePersonalDetails',true);
     var i18nStr = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.SomethingWrong");
     formController.bindViewError(i18nStr);
     applicationManager.getPresentationUtility().dismissLoadingScreen();
   };
   
   Settings_PresentationController.prototype.deleteUserPhoneNumber = function(id){
     applicationManager.getPresentationUtility().showLoadingScreen();
     var userObj = applicationManager.getUserPreferencesManager();
     userObj.deleteUserPhoneNumber(id,scope_SettingsPresenter.deleteUserPhoneNumberSuccess,scope_SettingsPresenter.deleteUserPhoneNumberFailure);
   };
  
   Settings_PresentationController.prototype.deleteUserPhoneNumberSuccess = function(data){
     var userObj = applicationManager.getUserPreferencesManager();
     userObj.fetchAllPhoneNumbers(success,failure);
     function success(data){
       applicationManager.getPresentationUtility().dismissLoadingScreen();
       scope_SettingsPresenter.navigateToEditPhoneNumber({"flow":"deletesuccess"});
       scope_SettingsPresenter.refreshPersonalDetailsData();
     }
     function failure(error){
       kony.print("error "+JSON.stringify(error)+error);
       applicationManager.getPresentationUtility().dismissLoadingScreen();
     }
   };
  
   Settings_PresentationController.prototype.deleteUserPhoneNumberFailure = function(error){
     kony.print("error "+JSON.stringify(error));
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(error && error["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
     }
   };
   
     
    Settings_PresentationController.prototype.getUserAllAddressesData = function(){
     applicationManager.getPresentationUtility().showLoadingScreen();
     var userObj = applicationManager.getUserPreferencesManager();
     userObj.fetchUserAllAddresses(scope_SettingsPresenter.getUserAllAddressesDataSuccess,scope_SettingsPresenter.getUserAllAddressesDataFailure);
   };
  
   Settings_PresentationController.prototype.getUserAllAddressesDataSuccess = function(data){
   
     scope_SettingsPresenter.navigateToEditOrAddAddress();
     scope_SettingsPresenter.refreshPersonalDetailsData();
     applicationManager.getPresentationUtility().dismissLoadingScreen();
   };   
  
   Settings_PresentationController.prototype.verifyOTP = function(otp,formName){
     applicationManager.getPresentationUtility().showLoadingScreen();
     var validationUtilManager = applicationManager.getValidationUtilManager();
     if (validationUtilManager.isValidOTP(otp)) {
        var authManager = applicationManager.getAuthManager();
        var params = {"Otp" : otp};
        authManager.verifyOTP(params,verifyOtpSuccess,verifyOtpFailure);
     }else{
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var controller = applicationManager.getPresentationUtility().getController('frmProfileSecurityCode', true);
        var errormsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.enterSecurityCode");
        controller.bindGenericError(errormsg);
     }
     
     function verifyOtpSuccess(response){
       var navManager = applicationManager.getNavigationManager();
       navManager.navigateTo(formName);
     }
     
     function verifyOtpFailure(err){
       applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"])
          {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
          }
        else
          {
            var controller = applicationManager.getPresentationUtility().getController('frmProfileSecurityCode', true);
        	var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.invalidSecurityCode");
        	controller.bindGenericError(errorMsg);
          }
     }
   };
  
   Settings_PresentationController.prototype.getUserAllAddressesDataFailure = function(err){
     applicationManager.getPresentationUtility().dismissLoadingScreen();
     if(err && err["isServerUnreachable"]){
       applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
     }
   };
   
   Settings_PresentationController.prototype.skipNavigation = function(){
     var navigationManager = applicationManager.getNavigationManager();
	 var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
     if(authMode.presentationController.flowType == "login"){
       navigationManager.navigateTo("frmDashboardAggregated");
     }
     else{
       navigationManager.navigateTo("frmSettings");
     }
     this.flowType="";
   };
  Settings_PresentationController.prototype.getAllAccountAlerts = function(successCallback,failureCallback){
        var settingsManager = applicationManager.getSettingsManager();
        settingsManager.getAllAccountAlerts(successCallback,failureCallback);
 
    };
  	Settings_PresentationController.prototype.getDealsAndSecurityAlerts = function(successCallback,failureCallback){
       var settingsManager = applicationManager.getSettingsManager();
       settingsManager.getDealsAndSecurityAlerts(successCallback,failureCallback);
    };
  Settings_PresentationController.prototype.updateUserAccountAlerts = function(inputParams,successCallback,failureCallback){
       var settingsManager = applicationManager.getSettingsManager();
       settingsManager.updateUserAccountAlerts(inputParams,successCallback,failureCallback);
    };
  Settings_PresentationController.prototype.updateUserAlerts = function(inputParams,successCallback,failureCallback){
       var settingsManager = applicationManager.getSettingsManager();
       settingsManager.updateUserAlerts(inputParams,successCallback,failureCallback);
    };
  
  
    Settings_PresentationController.prototype.updateAccountAlertsFlag = function(record,successCallback,failureCallback){
      var userObj = applicationManager.getUserPreferencesManager();
      userObj.updateAccountAlertsFlag(record,successCallback,failureCallback);
    };
  
   Settings_PresentationController.prototype.enrollFaceId_Settings = function(formContext){
            intializeFacialAuth(formContext);
    	    FaceAuth_initializeSettings(formContext);
      };
  
   Settings_PresentationController.prototype.enrollFaceId_OnSuccess = function(){
          var userMan = applicationManager.getUserPreferencesManager();
         userMan.updateUserFlag("isFaceEnrolled",true);
         var navManager = applicationManager.getNavigationManager(); 
         userMan.updateFaceIdFlag(true);	
         var tempData = scope_SettingsPresenter.getAuthModeData();
         navManager.setCustomInfo("frmPreferencesDefaultLogin",tempData);
         var flags = {popUpMsg:kony.i18n.getLocalizedString("kony.mb.devReg.faceIdSucMsg")};
         navManager.setCustomInfo("frmPreferencesFaceIdSetAsDefault", flags);
         navManager.navigateTo("frmPreferencesFaceIdSetAsDefault");
    }; 
   Settings_PresentationController.prototype.defaultAccounts = function(){
          var userObj = applicationManager.getUserPreferencesManager();
          var accountObj = applicationManager.getAccountManager();
          var acctId = userObj.getDefaultAccountforTransfers();
          var defaultTransferAcc = accountObj.getInternalAccountByID(acctId);        
              acctId = userObj.getDefaultAccountforBillPay();    
          var defaultBillPayAcc  = accountObj.getInternalAccountByID(acctId);    
              acctId = userObj.getDefaultAccountforPayments();
          var defaultPaymentsAcc = accountObj.getInternalAccountByID(acctId);    
              acctId = userObj.getDefaultAccountforCardlessPayments();
          var defaultCardlessAcc = accountObj.getInternalAccountByID(acctId);    
              acctId = userObj.getDefaultAccountforDeposit(); 
          var defaultDepositAcc  = accountObj.getInternalAccountByID(acctId);
          var data=[	
                    {"lblTitle":"Transfers","lblValue":defaultTransferAcc.nickName,"imgArrow":"segmentarrow.png","lblAccId":defaultTransferAcc.accountID},
                    {"lblTitle":"Bill Pay","lblValue":defaultBillPayAcc.nickName,"imgArrow":"segmentarrow.png","lblAccId":defaultBillPayAcc.accountID},
                    {"lblTitle":"Pay a person","lblValue":defaultPaymentsAcc.nickName,"imgArrow":"segmentarrow.png","lblAccId":defaultPaymentsAcc.accountID},
                    {"lblTitle":"Cash Withdrawal","lblValue":defaultCardlessAcc.nickName,"imgArrow":"segmentarrow.png","lblAccId":defaultCardlessAcc.accountID},
                    {"lblTitle":"Deposits","lblValue":defaultDepositAcc.nickName,"imgArrow":"segmentarrow.png","lblAccId":defaultDepositAcc.accountID}            
         ];
         return(data);
  };
  Settings_PresentationController.prototype.updateUserAccountSettingsForEstatements = function(params,eStatementPopup){
    var accountObj = applicationManager.getAccountManager();
    this.eStatementPopup=eStatementPopup;
    this.estatementData=params;
    accountObj.updateUserAccountSettingsForEstatements(params,scope_SettingsPresenter.estatementPresentationSuccessCallback,scope_SettingsPresenter.estatementPresentationErrorCallback);
  };
  Settings_PresentationController.prototype.estatementPresentationSuccessCallback = function(resSuccess){
    /*var controller = applicationManager.getPresentationUtility().getController('frmEStmtAccountDetails', true);
    controller.bindGenericSuccess();*/
    scope_SettingsPresenter.updateJsonData();
  };
  Settings_PresentationController.prototype.estatementPresentationErrorCallback = function(reserr){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (reserr["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", reserr);
        }
  };
  Settings_PresentationController.prototype.updateJsonData = function(){
    var navManager = applicationManager.getNavigationManager();
    var accountData = navManager.getCustomInfo("frmEStmtAccountDetails");
    var selectedrow=accountData.selectedRow;
    var accountsPreferenceData=navManager.getCustomInfo("frmEStmtAccountPreferences");
     if(scope_SettingsPresenter.eStatementPopup==="enable"){
       accountsPreferenceData[selectedrow].eStatementEnable="true";
       accountData.eStatementEnable="true";
       accountsPreferenceData[selectedrow].email=this.estatementData.email;
       accountData.email=this.estatementData.email;
       accountsPreferenceData[selectedrow].nickName=this.estatementData.nickName;
      accountData.nickName=this.estatementData.nickName;
     }
    else if(scope_SettingsPresenter.eStatementPopup==="disable"){
      accountsPreferenceData[selectedrow].eStatementEnable="false";
      accountData.eStatementEnable="false";      
      accountsPreferenceData[selectedrow].nickName=this.estatementData.nickName;
      accountData.nickName=this.estatementData.nickName;
    }
    else if(scope_SettingsPresenter.eStatementPopup==="updateEmail"){
      accountsPreferenceData[selectedrow].email=this.estatementData.email;
      accountData.email=this.estatementData.email;
    }
    else if(scope_SettingsPresenter.eStatementPopup==="updateName"){
      accountsPreferenceData[selectedrow].nickName=this.estatementData.nickName;
      accountData.nickName=this.estatementData.nickName;
    }
    navManager.setCustomInfo("frmEStmtAccountDetails",accountData);
    navManager.setCustomInfo("frmEStmtAccountPreferences",accountsPreferenceData);
    navManager.navigateTo("frmEStmtAccountDetails");
  };
  
    return Settings_PresentationController;
});