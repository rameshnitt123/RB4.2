define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		addressLine1 : function(val, state){
			state['addressLine1'] = val;
		},
		addressLine2 : function(val, state){
			state['addressLine2'] = val;
		},
		annualIncome : function(val, state){
			state['annualIncome'] = val;
		},
		assets : function(val, state){
			state['assets'] = val;
		},
		city : function(val, state){
			state['city'] = val;
		},
		company : function(val, state){
			state['company'] = val;
		},
		country : function(val, state){
			state['country'] = val;
		},
		countryCode : function(val, state){
			state['countryCode'] = val;
		},
		creditCheck : function(val, state){
			state['creditCheck'] = val;
		},
		dateOfBirth : function(val, state){
			state['dateOfBirth'] = val;
		},
		email : function(val, state){
			state['email'] = val;
		},
		employmentInfo : function(val, state){
			state['employmentInfo'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		experience : function(val, state){
			state['experience'] = val;
		},
		gender : function(val, state){
			state['gender'] = val;
		},
		informationType : function(val, state){
			state['informationType'] = val;
		},
		jobProfile : function(val, state){
			state['jobProfile'] = val;
		},
		maritalStatus : function(val, state){
			state['maritalStatus'] = val;
		},
		montlyExpenditure : function(val, state){
			state['montlyExpenditure'] = val;
		},
		noOfDependents : function(val, state){
			state['noOfDependents'] = val;
		},
		password : function(val, state){
			state['password'] = val;
		},
		phone : function(val, state){
			state['phone'] = val;
		},
		signatureImage : function(val, state){
			state['signatureImage'] = val;
		},
		spouseFirstName : function(val, state){
			state['spouseFirstName'] = val;
		},
		spouseLastName : function(val, state){
			state['spouseLastName'] = val;
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
		userEmploymentInfo : function(val, state){
			state['userEmploymentInfo'] = val;
		},
		userFinancialInfo : function(val, state){
			state['userFinancialInfo'] = val;
		},
		userfirstname : function(val, state){
			state['userfirstname'] = val;
		},
		userId : function(val, state){
			state['userId'] = val;
		},
		userlastname : function(val, state){
			state['userlastname'] = val;
		},
		userName : function(val, state){
			state['userName'] = val;
		},
		userPersonalInfo : function(val, state){
			state['userPersonalInfo'] = val;
		},
		userProducts : function(val, state){
			state['userProducts'] = val;
		},
		userSecurityQuestions : function(val, state){
			state['userSecurityQuestions'] = val;
		},
		zipcode : function(val, state){
			state['zipcode'] = val;
		},
	};
	
	
	//Create the Model Class
	function NewUser(defaultValues){
		var privateState = {};
			privateState.addressLine1 = defaultValues?(defaultValues["addressLine1"]?defaultValues["addressLine1"]:null):null;
			privateState.addressLine2 = defaultValues?(defaultValues["addressLine2"]?defaultValues["addressLine2"]:null):null;
			privateState.annualIncome = defaultValues?(defaultValues["annualIncome"]?defaultValues["annualIncome"]:null):null;
			privateState.assets = defaultValues?(defaultValues["assets"]?defaultValues["assets"]:null):null;
			privateState.city = defaultValues?(defaultValues["city"]?defaultValues["city"]:null):null;
			privateState.company = defaultValues?(defaultValues["company"]?defaultValues["company"]:null):null;
			privateState.country = defaultValues?(defaultValues["country"]?defaultValues["country"]:null):null;
			privateState.countryCode = defaultValues?(defaultValues["countryCode"]?defaultValues["countryCode"]:null):null;
			privateState.creditCheck = defaultValues?(defaultValues["creditCheck"]?defaultValues["creditCheck"]:null):null;
			privateState.dateOfBirth = defaultValues?(defaultValues["dateOfBirth"]?defaultValues["dateOfBirth"]:null):null;
			privateState.email = defaultValues?(defaultValues["email"]?defaultValues["email"]:null):null;
			privateState.employmentInfo = defaultValues?(defaultValues["employmentInfo"]?defaultValues["employmentInfo"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.experience = defaultValues?(defaultValues["experience"]?defaultValues["experience"]:null):null;
			privateState.gender = defaultValues?(defaultValues["gender"]?defaultValues["gender"]:null):null;
			privateState.informationType = defaultValues?(defaultValues["informationType"]?defaultValues["informationType"]:null):null;
			privateState.jobProfile = defaultValues?(defaultValues["jobProfile"]?defaultValues["jobProfile"]:null):null;
			privateState.maritalStatus = defaultValues?(defaultValues["maritalStatus"]?defaultValues["maritalStatus"]:null):null;
			privateState.montlyExpenditure = defaultValues?(defaultValues["montlyExpenditure"]?defaultValues["montlyExpenditure"]:null):null;
			privateState.noOfDependents = defaultValues?(defaultValues["noOfDependents"]?defaultValues["noOfDependents"]:null):null;
			privateState.password = defaultValues?(defaultValues["password"]?defaultValues["password"]:null):null;
			privateState.phone = defaultValues?(defaultValues["phone"]?defaultValues["phone"]:null):null;
			privateState.signatureImage = defaultValues?(defaultValues["signatureImage"]?defaultValues["signatureImage"]:null):null;
			privateState.spouseFirstName = defaultValues?(defaultValues["spouseFirstName"]?defaultValues["spouseFirstName"]:null):null;
			privateState.spouseLastName = defaultValues?(defaultValues["spouseLastName"]?defaultValues["spouseLastName"]:null):null;
			privateState.ssn = defaultValues?(defaultValues["ssn"]?defaultValues["ssn"]:null):null;
			privateState.state = defaultValues?(defaultValues["state"]?defaultValues["state"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.userEmploymentInfo = defaultValues?(defaultValues["userEmploymentInfo"]?defaultValues["userEmploymentInfo"]:null):null;
			privateState.userFinancialInfo = defaultValues?(defaultValues["userFinancialInfo"]?defaultValues["userFinancialInfo"]:null):null;
			privateState.userfirstname = defaultValues?(defaultValues["userfirstname"]?defaultValues["userfirstname"]:null):null;
			privateState.userId = defaultValues?(defaultValues["userId"]?defaultValues["userId"]:null):null;
			privateState.userlastname = defaultValues?(defaultValues["userlastname"]?defaultValues["userlastname"]:null):null;
			privateState.userName = defaultValues?(defaultValues["userName"]?defaultValues["userName"]:null):null;
			privateState.userPersonalInfo = defaultValues?(defaultValues["userPersonalInfo"]?defaultValues["userPersonalInfo"]:null):null;
			privateState.userProducts = defaultValues?(defaultValues["userProducts"]?defaultValues["userProducts"]:null):null;
			privateState.userSecurityQuestions = defaultValues?(defaultValues["userSecurityQuestions"]?defaultValues["userSecurityQuestions"]:null):null;
			privateState.zipcode = defaultValues?(defaultValues["zipcode"]?defaultValues["zipcode"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
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
				"annualIncome" : {
					get : function(){return privateState.annualIncome},
					set : function(val){
						setterFunctions['annualIncome'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"assets" : {
					get : function(){return privateState.assets},
					set : function(val){
						setterFunctions['assets'].call(this,val,privateState);
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
				"company" : {
					get : function(){return privateState.company},
					set : function(val){
						setterFunctions['company'].call(this,val,privateState);
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
				"countryCode" : {
					get : function(){return privateState.countryCode},
					set : function(val){
						setterFunctions['countryCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditCheck" : {
					get : function(){return privateState.creditCheck},
					set : function(val){
						setterFunctions['creditCheck'].call(this,val,privateState);
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
				"email" : {
					get : function(){return privateState.email},
					set : function(val){
						setterFunctions['email'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"employmentInfo" : {
					get : function(){return privateState.employmentInfo},
					set : function(val){
						setterFunctions['employmentInfo'].call(this,val,privateState);
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
				"experience" : {
					get : function(){return privateState.experience},
					set : function(val){
						setterFunctions['experience'].call(this,val,privateState);
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
				"informationType" : {
					get : function(){return privateState.informationType},
					set : function(val){
						setterFunctions['informationType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"jobProfile" : {
					get : function(){return privateState.jobProfile},
					set : function(val){
						setterFunctions['jobProfile'].call(this,val,privateState);
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
				"montlyExpenditure" : {
					get : function(){return privateState.montlyExpenditure},
					set : function(val){
						setterFunctions['montlyExpenditure'].call(this,val,privateState);
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
				"signatureImage" : {
					get : function(){return privateState.signatureImage},
					set : function(val){
						setterFunctions['signatureImage'].call(this,val,privateState);
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
				"userEmploymentInfo" : {
					get : function(){return privateState.userEmploymentInfo},
					set : function(val){
						setterFunctions['userEmploymentInfo'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userFinancialInfo" : {
					get : function(){return privateState.userFinancialInfo},
					set : function(val){
						setterFunctions['userFinancialInfo'].call(this,val,privateState);
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
				"userPersonalInfo" : {
					get : function(){return privateState.userPersonalInfo},
					set : function(val){
						setterFunctions['userPersonalInfo'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userProducts" : {
					get : function(){return privateState.userProducts},
					set : function(val){
						setterFunctions['userProducts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userSecurityQuestions" : {
					get : function(){return privateState.userSecurityQuestions},
					set : function(val){
						setterFunctions['userSecurityQuestions'].call(this,val,privateState);
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
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(NewUser);
	
	//Create new class level validator object
	BaseModel.Validator.call(NewUser);
	
	var registerValidatorBackup = NewUser.registerValidator;
	
	NewUser.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( NewUser.isValid(this, propName, val) ){
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
	//For Operation 'getUserState' with service id 'getUserState5852'
	NewUser.getUserState = function(params, onCompletion){
		return NewUser.customVerb('getUserState', params, onCompletion);
	};
	//For Operation 'createPersonalInfo' with service id 'createUserPersonalInfo5087'
	NewUser.createPersonalInfo = function(params, onCompletion){
		return NewUser.customVerb('createPersonalInfo', params, onCompletion);
	};
	//For Operation 'uploadDocuments' with service id 'uploadDocuments7315'
	NewUser.uploadDocuments = function(params, onCompletion){
		return NewUser.customVerb('uploadDocuments', params, onCompletion);
	};
	//For Operation 'verifyExistingUserByPhone' with service id 'verifyExistingUserByPhone4515'
	NewUser.verifyExistingUserByPhone = function(params, onCompletion){
		return NewUser.customVerb('verifyExistingUserByPhone', params, onCompletion);
	};
	//For Operation 'verifyExistingUserByEmail' with service id 'verifyExistingUserByEmail3522'
	NewUser.verifyExistingUserByEmail = function(params, onCompletion){
		return NewUser.customVerb('verifyExistingUserByEmail', params, onCompletion);
	};
	//For Operation 'resetNewUserData' with service id 'deleteNewUserPerosnalInfo3542'
	NewUser.resetNewUserData = function(params, onCompletion){
		return NewUser.customVerb('resetNewUserData', params, onCompletion);
	};
	//For Operation 'signatureUpload' with service id 'userSignatureUpload9795'
	NewUser.signatureUpload = function(params, onCompletion){
		return NewUser.customVerb('signatureUpload', params, onCompletion);
	};
	//For Operation 'getUserPersonalInfo' with service id 'getUserPersonalInfo8753'
	NewUser.getUserPersonalInfo = function(params, onCompletion){
		return NewUser.customVerb('getUserPersonalInfo', params, onCompletion);
	};
	//For Operation 'userCreditCheck' with service id 'userCreditCheck2828'
	NewUser.userCreditCheck = function(params, onCompletion){
		return NewUser.customVerb('userCreditCheck', params, onCompletion);
	};
	//For Operation 'verifyExistingUserName' with service id 'verifyExistingUserName7692'
	NewUser.verifyExistingUserName = function(params, onCompletion){
		return NewUser.customVerb('verifyExistingUserName', params, onCompletion);
	};
	
	var relations = [
	];
	
	NewUser.relations = relations;
	
	NewUser.prototype.isValid = function(){
		return NewUser.isValid(this);
	};
	
	NewUser.prototype.objModelName = "NewUser";
	
	return NewUser;
});