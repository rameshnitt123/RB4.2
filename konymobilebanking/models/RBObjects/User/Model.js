define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountNumber : function(val, state){
			state['accountNumber'] = val;
		},
		accountType : function(val, state){
			state['accountType'] = val;
		},
		addressId : function(val, state){
			state['addressId'] = val;
		},
		addressLine1 : function(val, state){
			state['addressLine1'] = val;
		},
		addressLine2 : function(val, state){
			state['addressLine2'] = val;
		},
		addressType : function(val, state){
			state['addressType'] = val;
		},
		alertsTurnedOn : function(val, state){
			state['alertsTurnedOn'] = val;
		},
		areAccountStatementTermsAccepted : function(val, state){
			state['areAccountStatementTermsAccepted'] = val;
		},
		areDepositTermsAccepted : function(val, state){
			state['areDepositTermsAccepted'] = val;
		},
		bankName : function(val, state){
			state['bankName'] = val;
		},
		cardNumber : function(val, state){
			state['cardNumber'] = val;
		},
		city : function(val, state){
			state['city'] = val;
		},
		country : function(val, state){
			state['country'] = val;
		},
		currencyCode : function(val, state){
			state['currencyCode'] = val;
		},
		cvv : function(val, state){
			state['cvv'] = val;
		},
		dateOfBirth : function(val, state){
			state['dateOfBirth'] = val;
		},
		default_account_billPay : function(val, state){
			state['default_account_billPay'] = val;
		},
		default_account_cardless : function(val, state){
			state['default_account_cardless'] = val;
		},
		default_account_deposit : function(val, state){
			state['default_account_deposit'] = val;
		},
		default_account_payments : function(val, state){
			state['default_account_payments'] = val;
		},
		default_account_transfers : function(val, state){
			state['default_account_transfers'] = val;
		},
		default_from_account_p2p : function(val, state){
			state['default_from_account_p2p'] = val;
		},
		default_to_account_p2p : function(val, state){
			state['default_to_account_p2p'] = val;
		},
		email : function(val, state){
			state['email'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		isEmailEnabled : function(val, state){
			state['isEmailEnabled'] = val;
		},
		isPhoneEnabled : function(val, state){
			state['isPhoneEnabled'] = val;
		},
		isPinSet : function(val, state){
			state['isPinSet'] = val;
		},
		isPreferredAddress : function(val, state){
			state['isPreferredAddress'] = val;
		},
		lastlogintime : function(val, state){
			state['lastlogintime'] = val;
		},
		oldpassword : function(val, state){
			state['oldpassword'] = val;
		},
		otp : function(val, state){
			state['otp'] = val;
		},
		password : function(val, state){
			state['password'] = val;
		},
		phone : function(val, state){
			state['phone'] = val;
		},
		pin : function(val, state){
			state['pin'] = val;
		},
		result : function(val, state){
			state['result'] = val;
		},
		role : function(val, state){
			state['role'] = val;
		},
		secondaryemail : function(val, state){
			state['secondaryemail'] = val;
		},
		secondaryemail2 : function(val, state){
			state['secondaryemail2'] = val;
		},
		secondaryphone : function(val, state){
			state['secondaryphone'] = val;
		},
		secondaryphone2 : function(val, state){
			state['secondaryphone2'] = val;
		},
		ssn : function(val, state){
			state['ssn'] = val;
		},
		state : function(val, state){
			state['state'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		userfirstname : function(val, state){
			state['userfirstname'] = val;
		},
		userId : function(val, state){
			state['userId'] = val;
		},
		userImage : function(val, state){
			state['userImage'] = val;
		},
		userlastname : function(val, state){
			state['userlastname'] = val;
		},
		userName : function(val, state){
			state['userName'] = val;
		},
		zipcode : function(val, state){
			state['zipcode'] = val;
		},
		rating : function(val, state){
			state['rating'] = val;
		},
		featureRequest : function(val, state){
			state['featureRequest'] = val;
		},
		description : function(val, state){
			state['description'] = val;
		},
		default_account_wire : function(val, state){
			state['default_account_wire'] = val;
		},
		isWireTransferActivated : function(val, state){
			state['isWireTransferActivated'] = val;
		},
		isWireTransferEligible : function(val, state){
			state['isWireTransferEligible'] = val;
		},
		userImageURL : function(val, state){
			state['userImageURL'] = val;
		},
		modifiedByName : function(val, state){
			state['modifiedByName'] = val;
		},
		addresses : function(val, state){
			state['addresses'] = val;
		},
		emailIds : function(val, state){
			state['emailIds'] = val;
		},
		phoneNumbers : function(val, state){
			state['phoneNumbers'] = val;
		},
		preferredContactMethod : function(val, state){
			state['preferredContactMethod'] = val;
		},
		preferredContactTime : function(val, state){
			state['preferredContactTime'] = val;
		},
		deleteAddressID : function(val, state){
			state['deleteAddressID'] = val;
		},
		deleteCommunicationID : function(val, state){
			state['deleteCommunicationID'] = val;
		},
		maritalStatus : function(val, state){
			state['maritalStatus'] = val;
		},
		noOfDependents : function(val, state){
			state['noOfDependents'] = val;
		},
		spouseFirstName : function(val, state){
			state['spouseFirstName'] = val;
		},
		spouseLastName : function(val, state){
			state['spouseLastName'] = val;
		},
		gender : function(val, state){
			state['gender'] = val;
		},
		showBillPayFromAccPopup : function(val, state){
			state['showBillPayFromAccPopup'] = val;
		},
		isP2PActivated : function(val, state){
			state['isP2PActivated'] = val;
		},
		isP2PSupported : function(val, state){
			state['isP2PSupported'] = val;
		},
		isBillPaySupported : function(val, state){
			state['isBillPaySupported'] = val;
		},
		isBillPayActivated : function(val, state){
			state['isBillPayActivated'] = val;
		},
		securityKey : function(val, state){
			state['securityKey'] = val;
		},
		phoneExtension : function(val, state){
			state['phoneExtension'] = val;
		},
		phoneCountryCode : function(val, state){
			state['phoneCountryCode'] = val;
		},
		idmConfig : function(val, state){
			state['idmConfig'] = val;
		},
		errCode : function(val, state){
			state['errCode'] = val;
		},
		errorMessage : function(val, state){
			state['errorMessage'] = val;
		},
		errorCode : function(val, state){
			state['errorCode'] = val;
		},
		Id : function(val, state){
			state['Id'] = val;
		},
	};
	
	
	//Create the Model Class
	function User(defaultValues){
		var privateState = {};
			privateState.accountNumber = defaultValues?(defaultValues["accountNumber"]?defaultValues["accountNumber"]:null):null;
			privateState.accountType = defaultValues?(defaultValues["accountType"]?defaultValues["accountType"]:null):null;
			privateState.addressId = defaultValues?(defaultValues["addressId"]?defaultValues["addressId"]:null):null;
			privateState.addressLine1 = defaultValues?(defaultValues["addressLine1"]?defaultValues["addressLine1"]:null):null;
			privateState.addressLine2 = defaultValues?(defaultValues["addressLine2"]?defaultValues["addressLine2"]:null):null;
			privateState.addressType = defaultValues?(defaultValues["addressType"]?defaultValues["addressType"]:null):null;
			privateState.alertsTurnedOn = defaultValues?(defaultValues["alertsTurnedOn"]?defaultValues["alertsTurnedOn"]:null):null;
			privateState.areAccountStatementTermsAccepted = defaultValues?(defaultValues["areAccountStatementTermsAccepted"]?defaultValues["areAccountStatementTermsAccepted"]:null):null;
			privateState.areDepositTermsAccepted = defaultValues?(defaultValues["areDepositTermsAccepted"]?defaultValues["areDepositTermsAccepted"]:null):null;
			privateState.bankName = defaultValues?(defaultValues["bankName"]?defaultValues["bankName"]:null):null;
			privateState.cardNumber = defaultValues?(defaultValues["cardNumber"]?defaultValues["cardNumber"]:null):null;
			privateState.city = defaultValues?(defaultValues["city"]?defaultValues["city"]:null):null;
			privateState.country = defaultValues?(defaultValues["country"]?defaultValues["country"]:null):null;
			privateState.currencyCode = defaultValues?(defaultValues["currencyCode"]?defaultValues["currencyCode"]:null):null;
			privateState.cvv = defaultValues?(defaultValues["cvv"]?defaultValues["cvv"]:null):null;
			privateState.dateOfBirth = defaultValues?(defaultValues["dateOfBirth"]?defaultValues["dateOfBirth"]:null):null;
			privateState.default_account_billPay = defaultValues?(defaultValues["default_account_billPay"]?defaultValues["default_account_billPay"]:null):null;
			privateState.default_account_cardless = defaultValues?(defaultValues["default_account_cardless"]?defaultValues["default_account_cardless"]:null):null;
			privateState.default_account_deposit = defaultValues?(defaultValues["default_account_deposit"]?defaultValues["default_account_deposit"]:null):null;
			privateState.default_account_payments = defaultValues?(defaultValues["default_account_payments"]?defaultValues["default_account_payments"]:null):null;
			privateState.default_account_transfers = defaultValues?(defaultValues["default_account_transfers"]?defaultValues["default_account_transfers"]:null):null;
			privateState.default_from_account_p2p = defaultValues?(defaultValues["default_from_account_p2p"]?defaultValues["default_from_account_p2p"]:null):null;
			privateState.default_to_account_p2p = defaultValues?(defaultValues["default_to_account_p2p"]?defaultValues["default_to_account_p2p"]:null):null;
			privateState.email = defaultValues?(defaultValues["email"]?defaultValues["email"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.isEmailEnabled = defaultValues?(defaultValues["isEmailEnabled"]?defaultValues["isEmailEnabled"]:null):null;
			privateState.isPhoneEnabled = defaultValues?(defaultValues["isPhoneEnabled"]?defaultValues["isPhoneEnabled"]:null):null;
			privateState.isPinSet = defaultValues?(defaultValues["isPinSet"]?defaultValues["isPinSet"]:null):null;
			privateState.isPreferredAddress = defaultValues?(defaultValues["isPreferredAddress"]?defaultValues["isPreferredAddress"]:null):null;
			privateState.lastlogintime = defaultValues?(defaultValues["lastlogintime"]?defaultValues["lastlogintime"]:null):null;
			privateState.oldpassword = defaultValues?(defaultValues["oldpassword"]?defaultValues["oldpassword"]:null):null;
			privateState.otp = defaultValues?(defaultValues["otp"]?defaultValues["otp"]:null):null;
			privateState.password = defaultValues?(defaultValues["password"]?defaultValues["password"]:null):null;
			privateState.phone = defaultValues?(defaultValues["phone"]?defaultValues["phone"]:null):null;
			privateState.pin = defaultValues?(defaultValues["pin"]?defaultValues["pin"]:null):null;
			privateState.result = defaultValues?(defaultValues["result"]?defaultValues["result"]:null):null;
			privateState.role = defaultValues?(defaultValues["role"]?defaultValues["role"]:null):null;
			privateState.secondaryemail = defaultValues?(defaultValues["secondaryemail"]?defaultValues["secondaryemail"]:null):null;
			privateState.secondaryemail2 = defaultValues?(defaultValues["secondaryemail2"]?defaultValues["secondaryemail2"]:null):null;
			privateState.secondaryphone = defaultValues?(defaultValues["secondaryphone"]?defaultValues["secondaryphone"]:null):null;
			privateState.secondaryphone2 = defaultValues?(defaultValues["secondaryphone2"]?defaultValues["secondaryphone2"]:null):null;
			privateState.ssn = defaultValues?(defaultValues["ssn"]?defaultValues["ssn"]:null):null;
			privateState.state = defaultValues?(defaultValues["state"]?defaultValues["state"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.userfirstname = defaultValues?(defaultValues["userfirstname"]?defaultValues["userfirstname"]:null):null;
			privateState.userId = defaultValues?(defaultValues["userId"]?defaultValues["userId"]:null):null;
			privateState.userImage = defaultValues?(defaultValues["userImage"]?defaultValues["userImage"]:null):null;
			privateState.userlastname = defaultValues?(defaultValues["userlastname"]?defaultValues["userlastname"]:null):null;
			privateState.userName = defaultValues?(defaultValues["userName"]?defaultValues["userName"]:null):null;
			privateState.zipcode = defaultValues?(defaultValues["zipcode"]?defaultValues["zipcode"]:null):null;
			privateState.rating = defaultValues?(defaultValues["rating"]?defaultValues["rating"]:null):null;
			privateState.featureRequest = defaultValues?(defaultValues["featureRequest"]?defaultValues["featureRequest"]:null):null;
			privateState.description = defaultValues?(defaultValues["description"]?defaultValues["description"]:null):null;
			privateState.default_account_wire = defaultValues?(defaultValues["default_account_wire"]?defaultValues["default_account_wire"]:null):null;
			privateState.isWireTransferActivated = defaultValues?(defaultValues["isWireTransferActivated"]?defaultValues["isWireTransferActivated"]:null):null;
			privateState.isWireTransferEligible = defaultValues?(defaultValues["isWireTransferEligible"]?defaultValues["isWireTransferEligible"]:null):null;
			privateState.userImageURL = defaultValues?(defaultValues["userImageURL"]?defaultValues["userImageURL"]:null):null;
			privateState.modifiedByName = defaultValues?(defaultValues["modifiedByName"]?defaultValues["modifiedByName"]:null):null;
			privateState.addresses = defaultValues?(defaultValues["addresses"]?defaultValues["addresses"]:null):null;
			privateState.emailIds = defaultValues?(defaultValues["emailIds"]?defaultValues["emailIds"]:null):null;
			privateState.phoneNumbers = defaultValues?(defaultValues["phoneNumbers"]?defaultValues["phoneNumbers"]:null):null;
			privateState.preferredContactMethod = defaultValues?(defaultValues["preferredContactMethod"]?defaultValues["preferredContactMethod"]:null):null;
			privateState.preferredContactTime = defaultValues?(defaultValues["preferredContactTime"]?defaultValues["preferredContactTime"]:null):null;
			privateState.deleteAddressID = defaultValues?(defaultValues["deleteAddressID"]?defaultValues["deleteAddressID"]:null):null;
			privateState.deleteCommunicationID = defaultValues?(defaultValues["deleteCommunicationID"]?defaultValues["deleteCommunicationID"]:null):null;
			privateState.maritalStatus = defaultValues?(defaultValues["maritalStatus"]?defaultValues["maritalStatus"]:null):null;
			privateState.noOfDependents = defaultValues?(defaultValues["noOfDependents"]?defaultValues["noOfDependents"]:null):null;
			privateState.spouseFirstName = defaultValues?(defaultValues["spouseFirstName"]?defaultValues["spouseFirstName"]:null):null;
			privateState.spouseLastName = defaultValues?(defaultValues["spouseLastName"]?defaultValues["spouseLastName"]:null):null;
			privateState.gender = defaultValues?(defaultValues["gender"]?defaultValues["gender"]:null):null;
			privateState.showBillPayFromAccPopup = defaultValues?(defaultValues["showBillPayFromAccPopup"]?defaultValues["showBillPayFromAccPopup"]:null):null;
			privateState.isP2PActivated = defaultValues?(defaultValues["isP2PActivated"]?defaultValues["isP2PActivated"]:null):null;
			privateState.isP2PSupported = defaultValues?(defaultValues["isP2PSupported"]?defaultValues["isP2PSupported"]:null):null;
			privateState.isBillPaySupported = defaultValues?(defaultValues["isBillPaySupported"]?defaultValues["isBillPaySupported"]:null):null;
			privateState.isBillPayActivated = defaultValues?(defaultValues["isBillPayActivated"]?defaultValues["isBillPayActivated"]:null):null;
			privateState.securityKey = defaultValues?(defaultValues["securityKey"]?defaultValues["securityKey"]:null):null;
			privateState.phoneExtension = defaultValues?(defaultValues["phoneExtension"]?defaultValues["phoneExtension"]:null):null;
			privateState.phoneCountryCode = defaultValues?(defaultValues["phoneCountryCode"]?defaultValues["phoneCountryCode"]:null):null;
			privateState.idmConfig = defaultValues?(defaultValues["idmConfig"]?defaultValues["idmConfig"]:null):null;
			privateState.errCode = defaultValues?(defaultValues["errCode"]?defaultValues["errCode"]:null):null;
			privateState.errorMessage = defaultValues?(defaultValues["errorMessage"]?defaultValues["errorMessage"]:null):null;
			privateState.errorCode = defaultValues?(defaultValues["errorCode"]?defaultValues["errorCode"]:null):null;
			privateState.Id = defaultValues?(defaultValues["Id"]?defaultValues["Id"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"accountNumber" : {
					get : function(){return privateState.accountNumber},
					set : function(val){
						setterFunctions['accountNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountType" : {
					get : function(){return privateState.accountType},
					set : function(val){
						setterFunctions['accountType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"addressId" : {
					get : function(){return privateState.addressId},
					set : function(val){
						setterFunctions['addressId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"addressLine1" : {
					get : function(){return privateState.addressLine1},
					set : function(val){
						setterFunctions['addressLine1'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"addressLine2" : {
					get : function(){return privateState.addressLine2},
					set : function(val){
						setterFunctions['addressLine2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"addressType" : {
					get : function(){return privateState.addressType},
					set : function(val){
						setterFunctions['addressType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"alertsTurnedOn" : {
					get : function(){return privateState.alertsTurnedOn},
					set : function(val){
						setterFunctions['alertsTurnedOn'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"areAccountStatementTermsAccepted" : {
					get : function(){return privateState.areAccountStatementTermsAccepted},
					set : function(val){
						setterFunctions['areAccountStatementTermsAccepted'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"areDepositTermsAccepted" : {
					get : function(){return privateState.areDepositTermsAccepted},
					set : function(val){
						setterFunctions['areDepositTermsAccepted'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankName" : {
					get : function(){return privateState.bankName},
					set : function(val){
						setterFunctions['bankName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardNumber" : {
					get : function(){return privateState.cardNumber},
					set : function(val){
						setterFunctions['cardNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"city" : {
					get : function(){return privateState.city},
					set : function(val){
						setterFunctions['city'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"country" : {
					get : function(){return privateState.country},
					set : function(val){
						setterFunctions['country'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"currencyCode" : {
					get : function(){return privateState.currencyCode},
					set : function(val){
						setterFunctions['currencyCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cvv" : {
					get : function(){return privateState.cvv},
					set : function(val){
						setterFunctions['cvv'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dateOfBirth" : {
					get : function(){return privateState.dateOfBirth},
					set : function(val){
						setterFunctions['dateOfBirth'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"default_account_billPay" : {
					get : function(){return privateState.default_account_billPay},
					set : function(val){
						setterFunctions['default_account_billPay'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"default_account_cardless" : {
					get : function(){return privateState.default_account_cardless},
					set : function(val){
						setterFunctions['default_account_cardless'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"default_account_deposit" : {
					get : function(){return privateState.default_account_deposit},
					set : function(val){
						setterFunctions['default_account_deposit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"default_account_payments" : {
					get : function(){return privateState.default_account_payments},
					set : function(val){
						setterFunctions['default_account_payments'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"default_account_transfers" : {
					get : function(){return privateState.default_account_transfers},
					set : function(val){
						setterFunctions['default_account_transfers'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"default_from_account_p2p" : {
					get : function(){return privateState.default_from_account_p2p},
					set : function(val){
						setterFunctions['default_from_account_p2p'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"default_to_account_p2p" : {
					get : function(){return privateState.default_to_account_p2p},
					set : function(val){
						setterFunctions['default_to_account_p2p'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"email" : {
					get : function(){return privateState.email},
					set : function(val){
						setterFunctions['email'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errmsg" : {
					get : function(){return privateState.errmsg},
					set : function(val){
						setterFunctions['errmsg'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isEmailEnabled" : {
					get : function(){return privateState.isEmailEnabled},
					set : function(val){
						setterFunctions['isEmailEnabled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isPhoneEnabled" : {
					get : function(){return privateState.isPhoneEnabled},
					set : function(val){
						setterFunctions['isPhoneEnabled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isPinSet" : {
					get : function(){return privateState.isPinSet},
					set : function(val){
						setterFunctions['isPinSet'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isPreferredAddress" : {
					get : function(){return privateState.isPreferredAddress},
					set : function(val){
						setterFunctions['isPreferredAddress'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastlogintime" : {
					get : function(){return privateState.lastlogintime},
					set : function(val){
						setterFunctions['lastlogintime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"oldpassword" : {
					get : function(){return privateState.oldpassword},
					set : function(val){
						setterFunctions['oldpassword'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"otp" : {
					get : function(){return privateState.otp},
					set : function(val){
						setterFunctions['otp'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"password" : {
					get : function(){return privateState.password},
					set : function(val){
						setterFunctions['password'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"phone" : {
					get : function(){return privateState.phone},
					set : function(val){
						setterFunctions['phone'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"pin" : {
					get : function(){return privateState.pin},
					set : function(val){
						setterFunctions['pin'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"result" : {
					get : function(){return privateState.result},
					set : function(val){
						setterFunctions['result'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"role" : {
					get : function(){return privateState.role},
					set : function(val){
						setterFunctions['role'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"secondaryemail" : {
					get : function(){return privateState.secondaryemail},
					set : function(val){
						setterFunctions['secondaryemail'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"secondaryemail2" : {
					get : function(){return privateState.secondaryemail2},
					set : function(val){
						setterFunctions['secondaryemail2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"secondaryphone" : {
					get : function(){return privateState.secondaryphone},
					set : function(val){
						setterFunctions['secondaryphone'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"secondaryphone2" : {
					get : function(){return privateState.secondaryphone2},
					set : function(val){
						setterFunctions['secondaryphone2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ssn" : {
					get : function(){return privateState.ssn},
					set : function(val){
						setterFunctions['ssn'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"state" : {
					get : function(){return privateState.state},
					set : function(val){
						setterFunctions['state'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"success" : {
					get : function(){return privateState.success},
					set : function(val){
						setterFunctions['success'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userfirstname" : {
					get : function(){return privateState.userfirstname},
					set : function(val){
						setterFunctions['userfirstname'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userId" : {
					get : function(){return privateState.userId},
					set : function(val){
						setterFunctions['userId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userImage" : {
					get : function(){return privateState.userImage},
					set : function(val){
						setterFunctions['userImage'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userlastname" : {
					get : function(){return privateState.userlastname},
					set : function(val){
						setterFunctions['userlastname'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userName" : {
					get : function(){return privateState.userName},
					set : function(val){
						setterFunctions['userName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"zipcode" : {
					get : function(){return privateState.zipcode},
					set : function(val){
						setterFunctions['zipcode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"rating" : {
					get : function(){return privateState.rating},
					set : function(val){
						setterFunctions['rating'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"featureRequest" : {
					get : function(){return privateState.featureRequest},
					set : function(val){
						setterFunctions['featureRequest'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"description" : {
					get : function(){return privateState.description},
					set : function(val){
						setterFunctions['description'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"default_account_wire" : {
					get : function(){return privateState.default_account_wire},
					set : function(val){
						setterFunctions['default_account_wire'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isWireTransferActivated" : {
					get : function(){return privateState.isWireTransferActivated},
					set : function(val){
						setterFunctions['isWireTransferActivated'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isWireTransferEligible" : {
					get : function(){return privateState.isWireTransferEligible},
					set : function(val){
						setterFunctions['isWireTransferEligible'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userImageURL" : {
					get : function(){return privateState.userImageURL},
					set : function(val){
						setterFunctions['userImageURL'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"modifiedByName" : {
					get : function(){return privateState.modifiedByName},
					set : function(val){
						setterFunctions['modifiedByName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"addresses" : {
					get : function(){return privateState.addresses},
					set : function(val){
						setterFunctions['addresses'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"emailIds" : {
					get : function(){return privateState.emailIds},
					set : function(val){
						setterFunctions['emailIds'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"phoneNumbers" : {
					get : function(){return privateState.phoneNumbers},
					set : function(val){
						setterFunctions['phoneNumbers'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"preferredContactMethod" : {
					get : function(){return privateState.preferredContactMethod},
					set : function(val){
						setterFunctions['preferredContactMethod'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"preferredContactTime" : {
					get : function(){return privateState.preferredContactTime},
					set : function(val){
						setterFunctions['preferredContactTime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"deleteAddressID" : {
					get : function(){return privateState.deleteAddressID},
					set : function(val){
						setterFunctions['deleteAddressID'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"deleteCommunicationID" : {
					get : function(){return privateState.deleteCommunicationID},
					set : function(val){
						setterFunctions['deleteCommunicationID'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"maritalStatus" : {
					get : function(){return privateState.maritalStatus},
					set : function(val){
						setterFunctions['maritalStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"noOfDependents" : {
					get : function(){return privateState.noOfDependents},
					set : function(val){
						setterFunctions['noOfDependents'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"spouseFirstName" : {
					get : function(){return privateState.spouseFirstName},
					set : function(val){
						setterFunctions['spouseFirstName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"spouseLastName" : {
					get : function(){return privateState.spouseLastName},
					set : function(val){
						setterFunctions['spouseLastName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"gender" : {
					get : function(){return privateState.gender},
					set : function(val){
						setterFunctions['gender'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"showBillPayFromAccPopup" : {
					get : function(){return privateState.showBillPayFromAccPopup},
					set : function(val){
						setterFunctions['showBillPayFromAccPopup'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isP2PActivated" : {
					get : function(){return privateState.isP2PActivated},
					set : function(val){
						setterFunctions['isP2PActivated'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isP2PSupported" : {
					get : function(){return privateState.isP2PSupported},
					set : function(val){
						setterFunctions['isP2PSupported'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isBillPaySupported" : {
					get : function(){return privateState.isBillPaySupported},
					set : function(val){
						setterFunctions['isBillPaySupported'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isBillPayActivated" : {
					get : function(){return privateState.isBillPayActivated},
					set : function(val){
						setterFunctions['isBillPayActivated'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"securityKey" : {
					get : function(){return privateState.securityKey},
					set : function(val){
						setterFunctions['securityKey'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"phoneExtension" : {
					get : function(){return privateState.phoneExtension},
					set : function(val){
						setterFunctions['phoneExtension'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"phoneCountryCode" : {
					get : function(){return privateState.phoneCountryCode},
					set : function(val){
						setterFunctions['phoneCountryCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"idmConfig" : {
					get : function(){return privateState.idmConfig},
					set : function(val){
						setterFunctions['idmConfig'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errCode" : {
					get : function(){return privateState.errCode},
					set : function(val){
						setterFunctions['errCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errorMessage" : {
					get : function(){return privateState.errorMessage},
					set : function(val){
						setterFunctions['errorMessage'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errorCode" : {
					get : function(){return privateState.errorCode},
					set : function(val){
						setterFunctions['errorCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Id" : {
					get : function(){return privateState.Id},
					set : function(val){
						setterFunctions['Id'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(User);
	
	//Create new class level validator object
	BaseModel.Validator.call(User);
	
	var registerValidatorBackup = User.registerValidator;
	
	User.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( User.isValid(this, propName, val) ){
					return setterBackup.apply(null, arguments);
				}else{
					throw Error("Validation failed for "+ propName +" : "+val);
				}
			}
			setterFunctions[arguments[0]].changed = true;
		}
		return registerValidatorBackup.apply(null, arguments);
	}
	
	//Extending Model for custom operations
	//For Operation 'verifyCVV' with service id 'verifyCVV3773'
	User.verifyCVV = function(params, onCompletion){
		return User.customVerb('verifyCVV', params, onCompletion);
	};
	//For Operation 'resetPassword' with service id 'resetUserPassword4032'
	User.resetPassword = function(params, onCompletion){
		return User.customVerb('resetPassword', params, onCompletion);
	};
	//For Operation 'updatePreferredBillPayAccount' with service id 'updatePreferredBillPayAccount3351'
	User.updatePreferredBillPayAccount = function(params, onCompletion){
		return User.customVerb('updatePreferredBillPayAccount', params, onCompletion);
	};
	//For Operation 'updateCustomerDetails' with service id 'updateCustomerDetails2685'
	User.updateCustomerDetails = function(params, onCompletion){
		return User.customVerb('updateCustomerDetails', params, onCompletion);
	};
	//For Operation 'createOLBUser' with service id 'createOLBUser1398'
	User.createOLBUser = function(params, onCompletion){
		return User.customVerb('createOLBUser', params, onCompletion);
	};
	//For Operation 'checkP2PEligibilityForUser' with service id 'checkP2PEligibilityForUser6229'
	User.checkP2PEligibilityForUser = function(params, onCompletion){
		return User.customVerb('checkP2PEligibilityForUser', params, onCompletion);
	};
	//For Operation 'createCoreUser' with service id 'createCoreUser7817'
	User.createCoreUser = function(params, onCompletion){
		return User.customVerb('createCoreUser', params, onCompletion);
	};
	//For Operation 'verifyExternalBankAccount' with service id 'verifyExternalBankAccount1508'
	User.verifyExternalBankAccount = function(params, onCompletion){
		return User.customVerb('verifyExternalBankAccount', params, onCompletion);
	};
	//For Operation 'updateAddress' with service id 'updateAddress5488'
	User.updateAddress = function(params, onCompletion){
		return User.customVerb('updateAddress', params, onCompletion);
	};
	//For Operation 'verifyDbxPin' with service id 'verifyDbxPin1445'
	User.verifyDbxPin = function(params, onCompletion){
		return User.customVerb('verifyDbxPin', params, onCompletion);
	};
	//For Operation 'createUserFeedback' with service id 'createUserFeedback3505'
	User.createUserFeedback = function(params, onCompletion){
		return User.customVerb('createUserFeedback', params, onCompletion);
	};
	//For Operation 'getNewBrowserCheck' with service id 'getNewBrowserCheck6663'
	User.getNewBrowserCheck = function(params, onCompletion){
		return User.customVerb('getNewBrowserCheck', params, onCompletion);
	};
	//For Operation 'getAllAddress' with service id 'getAllAddress7266'
	User.getAllAddress = function(params, onCompletion){
		return User.customVerb('getAllAddress', params, onCompletion);
	};
	//For Operation 'getUserStatus' with service id 'GetUserStatus2324'
	User.getUserStatus = function(params, onCompletion){
		return User.customVerb('getUserStatus', params, onCompletion);
	};
	//For Operation 'lockUnlockDbxUser' with service id 'LockUnlockDbxUser8249'
	User.lockUnlockDbxUser = function(params, onCompletion){
		return User.customVerb('lockUnlockDbxUser', params, onCompletion);
	};
	//For Operation 'getUsername' with service id 'fetchUserName1477'
	User.getUsername = function(params, onCompletion){
		return User.customVerb('getUsername', params, onCompletion);
	};
	//For Operation 'verifyCoreUser' with service id 'verifyCoreUser5797'
	User.verifyCoreUser = function(params, onCompletion){
		return User.customVerb('verifyCoreUser', params, onCompletion);
	};
	//For Operation 'deactivateP2P' with service id 'deactivateP2P9743'
	User.deactivateP2P = function(params, onCompletion){
		return User.customVerb('deactivateP2P', params, onCompletion);
	};
	//For Operation 'activateBillPaymentForUser' with service id 'activateBillPaymentForUser1097'
	User.activateBillPaymentForUser = function(params, onCompletion){
		return User.customVerb('activateBillPaymentForUser', params, onCompletion);
	};
	//For Operation 'verifyOTP' with service id 'verifyOTP4487'
	User.verifyOTP = function(params, onCompletion){
		return User.customVerb('verifyOTP', params, onCompletion);
	};
	//For Operation 'checkSecurityQuestionStatus' with service id 'checkSecurityQuestionStatus9412'
	User.checkSecurityQuestionStatus = function(params, onCompletion){
		return User.customVerb('checkSecurityQuestionStatus', params, onCompletion);
	};
	//For Operation 'customUpdate' with service id 'updateUserDetails2403'
	User.customUpdate = function(params, onCompletion){
		return User.customVerb('customUpdate', params, onCompletion);
	};
	//For Operation 'verifyCoreUserName' with service id 'verifyCoreUserName4736'
	User.verifyCoreUserName = function(params, onCompletion){
		return User.customVerb('verifyCoreUserName', params, onCompletion);
	};
	//For Operation 'updatePreferredDbxP2PAccounts' with service id 'updatePreferredDbxP2PAccounts3913'
	User.updatePreferredDbxP2PAccounts = function(params, onCompletion){
		return User.customVerb('updatePreferredDbxP2PAccounts', params, onCompletion);
	};
	//For Operation 'checkDbxUserEnrolled' with service id 'checkDbxUserEnrolled1882'
	User.checkDbxUserEnrolled = function(params, onCompletion){
		return User.customVerb('checkDbxUserEnrolled', params, onCompletion);
	};
	//For Operation 'checkBillPayEligibilityForUser' with service id 'checkBillPayEligibilityForUser8305'
	User.checkBillPayEligibilityForUser = function(params, onCompletion){
		return User.customVerb('checkBillPayEligibilityForUser', params, onCompletion);
	};
	//For Operation 'createAddress' with service id 'createAddress3655'
	User.createAddress = function(params, onCompletion){
		return User.customVerb('createAddress', params, onCompletion);
	};
	//For Operation 'verifyDbxExistingPassword' with service id 'verifyDbxExistingPassword3533'
	User.verifyDbxExistingPassword = function(params, onCompletion){
		return User.customVerb('verifyDbxExistingPassword', params, onCompletion);
	};
	//For Operation 'requestOTP' with service id 'requestOTP4500'
	User.requestOTP = function(params, onCompletion){
		return User.customVerb('requestOTP', params, onCompletion);
	};
	//For Operation 'deleteAddress' with service id 'deleteAddress5130'
	User.deleteAddress = function(params, onCompletion){
		return User.customVerb('deleteAddress', params, onCompletion);
	};
	//For Operation 'checkSecureAccessCode' with service id 'checkSecureAccessCode2931'
	User.checkSecureAccessCode = function(params, onCompletion){
		return User.customVerb('checkSecureAccessCode', params, onCompletion);
	};
	//For Operation 'getUserDetailsToAdmin' with service id 'GetUserDetailsToAdmin7711'
	User.getUserDetailsToAdmin = function(params, onCompletion){
		return User.customVerb('getUserDetailsToAdmin', params, onCompletion);
	};
	//For Operation 'getPasswordPolicies' with service id 'getPasswordPolicies3837'
	User.getPasswordPolicies = function(params, onCompletion){
		return User.customVerb('getPasswordPolicies', params, onCompletion);
	};
	//For Operation 'updateSecureAccessCode' with service id 'updateSecureAccessCode2626'
	User.updateSecureAccessCode = function(params, onCompletion){
		return User.customVerb('updateSecureAccessCode', params, onCompletion);
	};
	//For Operation 'getCustomerContact' with service id 'getCustomerContact1391'
	User.getCustomerContact = function(params, onCompletion){
		return User.customVerb('getCustomerContact', params, onCompletion);
	};
	//For Operation 'checkUserEnrolled' with service id 'checkUserEnrolled9245'
	User.checkUserEnrolled = function(params, onCompletion){
		return User.customVerb('checkUserEnrolled', params, onCompletion);
	};
	//For Operation 'verifyPin' with service id 'verifyPin2016'
	User.verifyPin = function(params, onCompletion){
		return User.customVerb('verifyPin', params, onCompletion);
	};
	//For Operation 'lockUnlockUser' with service id 'LockUnlockUser9042'
	User.lockUnlockUser = function(params, onCompletion){
		return User.customVerb('lockUnlockUser', params, onCompletion);
	};
	//For Operation 'activateDbxP2PForUser' with service id 'activateDbxP2PForUser9552'
	User.activateDbxP2PForUser = function(params, onCompletion){
		return User.customVerb('activateDbxP2PForUser', params, onCompletion);
	};
	//For Operation 'activateP2PForUser' with service id 'activateP2PForUser8370'
	User.activateP2PForUser = function(params, onCompletion){
		return User.customVerb('activateP2PForUser', params, onCompletion);
	};
	//For Operation 'updatePreferredP2PAccounts' with service id 'updatePreferredP2PAccounts7402'
	User.updatePreferredP2PAccounts = function(params, onCompletion){
		return User.customVerb('updatePreferredP2PAccounts', params, onCompletion);
	};
	//For Operation 'verifyExistingPassword' with service id 'verifyExistingPassword1245'
	User.verifyExistingPassword = function(params, onCompletion){
		return User.customVerb('verifyExistingPassword', params, onCompletion);
	};
	//For Operation 'getAllEntitlements' with service id 'getAllEntitlements1392'
	User.getAllEntitlements = function(params, onCompletion){
		return User.customVerb('getAllEntitlements', params, onCompletion);
	};
	
	var relations = [
	];
	
	User.relations = relations;
	
	User.prototype.isValid = function(){
		return User.isValid(this);
	};
	
	User.prototype.objModelName = "User";
	
	return User;
});