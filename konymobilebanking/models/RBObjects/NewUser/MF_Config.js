define([],function(){
	var mappings = {
		"addressLine1" : "addressLine1",
		"addressLine2" : "addressLine2",
		"annualIncome" : "annualIncome",
		"assets" : "assets",
		"city" : "city",
		"company" : "company",
		"country" : "country",
		"countryCode" : "countryCode",
		"creditCheck" : "creditCheck",
		"dateOfBirth" : "dateOfBirth",
		"email" : "email",
		"employmentInfo" : "employmentInfo",
		"errmsg" : "errmsg",
		"experience" : "experience",
		"gender" : "gender",
		"informationType" : "informationType",
		"jobProfile" : "jobProfile",
		"maritalStatus" : "maritalStatus",
		"montlyExpenditure" : "montlyExpenditure",
		"noOfDependents" : "noOfDependents",
		"password" : "password",
		"phone" : "phone",
		"signatureImage" : "signatureImage",
		"spouseFirstName" : "spouseFirstName",
		"spouseLastName" : "spouseLastName",
		"ssn" : "ssn",
		"state" : "state",
		"success" : "success",
		"userEmploymentInfo" : "userEmploymentInfo",
		"userFinancialInfo" : "userFinancialInfo",
		"userfirstname" : "userfirstname",
		"userId" : "userId",
		"userlastname" : "userlastname",
		"userName" : "userName",
		"userPersonalInfo" : "userPersonalInfo",
		"userProducts" : "userProducts",
		"userSecurityQuestions" : "userSecurityQuestions",
		"zipcode" : "zipcode",
	};
	Object.freeze(mappings);
	
	var typings = {
		"addressLine1" : "string",
		"addressLine2" : "string",
		"annualIncome" : "string",
		"assets" : "string",
		"city" : "string",
		"company" : "string",
		"country" : "string",
		"countryCode" : "string",
		"creditCheck" : "string",
		"dateOfBirth" : "string",
		"email" : "string",
		"employmentInfo" : "string",
		"errmsg" : "string",
		"experience" : "string",
		"gender" : "string",
		"informationType" : "string",
		"jobProfile" : "string",
		"maritalStatus" : "string",
		"montlyExpenditure" : "string",
		"noOfDependents" : "string",
		"password" : "string",
		"phone" : "string",
		"signatureImage" : "string",
		"spouseFirstName" : "string",
		"spouseLastName" : "string",
		"ssn" : "string",
		"state" : "string",
		"success" : "string",
		"userEmploymentInfo" : "string",
		"userFinancialInfo" : "string",
		"userfirstname" : "string",
		"userId" : "string",
		"userlastname" : "string",
		"userName" : "string",
		"userPersonalInfo" : "string",
		"userProducts" : "string",
		"userSecurityQuestions" : "string",
		"zipcode" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"userId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "NewUser"
	};
	Object.freeze(config);
	
	return config;
})
