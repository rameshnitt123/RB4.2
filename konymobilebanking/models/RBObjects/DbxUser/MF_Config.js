define([],function(){
	var mappings = {
		"id" : "id",
		"IDValue" : "IDValue",
		"IDType_id" : "IDType_id",
		"UserName" : "UserName",
		"Password" : "Password",
		"IsCoreIdentityScope" : "IsCoreIdentityScope",
		"Salutation" : "Salutation",
		"FirstName" : "FirstName",
		"MiddleName" : "MiddleName",
		"LastName" : "LastName",
		"FullName" : "FullName",
		"Gender" : "Gender",
		"DateOfBirth" : "DateOfBirth",
		"Ssn" : "Ssn",
		"CustomerType_id" : "CustomerType_id",
		"CustomerType" : "CustomerType",
		"Status_id" : "Status_id",
		"Status" : "Status",
		"success" : "success",
		"IsPhoneEnabled" : "IsPhoneEnabled",
		"IsEmailEnabled" : "IsEmailEnabled",
		"IsStaffMember" : "IsStaffMember",
		"isSuperAdmin" : "isSuperAdmin",
		"Role" : "Role",
		"SecurityImage_id" : "SecurityImage_id",
		"IsPinSet" : "IsPinSet",
		"Pin" : "Pin",
		"Token" : "Token",
		"Otp" : "Otp",
		"OtpGenaratedts" : "OtpGenaratedts",
		"ValidDate" : "ValidDate",
		"unsuccessfulLoginAttempts" : "unsuccessfulLoginAttempts",
		"isUserAccountLocked" : "isUserAccountLocked",
		"UserImage" : "UserImage",
		"UserImageURL" : "UserImageURL",
		"CountryCode" : "CountryCode",
		"Location_id" : "Location_id",
		"IsOlbAllowed" : "IsOlbAllowed",
		"OlbEnrolmentStatus_id" : "OlbEnrolmentStatus_id",
		"isEnrolled" : "isEnrolled",
		"Is_MemberEligibile" : "Is_MemberEligibile",
		"MemberEligibilityData" : "MemberEligibilityData",
		"Is_BBOA" : "Is_BBOA",
		"MaritalStatus_id" : "MaritalStatus_id",
		"SpouseName" : "SpouseName",
		"NoOfDependents" : "NoOfDependents",
		"EmployementStatus_id" : "EmployementStatus_id",
		"CurrentLoginTime" : "CurrentLoginTime",
		"Lastlogintime" : "Lastlogintime",
		"CreditUnionMemberSince" : "CreditUnionMemberSince",
		"AtionProfile_id" : "AtionProfile_id",
		"RegistrationLink" : "RegistrationLink",
		"RegLinkResendCount" : "RegLinkResendCount",
		"RegLinkValidity" : "RegLinkValidity",
		"IsAssistConsented" : "IsAssistConsented",
		"areDepositTermsAccepted" : "areDepositTermsAccepted",
		"areAccountStatementTermsAccepted" : "areAccountStatementTermsAccepted",
		"areUserAlertsTurnedOn" : "areUserAlertsTurnedOn",
		"isBillPaySupported" : "isBillPaySupported",
		"isBillPayActivated" : "isBillPayActivated",
		"isP2PSupported" : "isP2PSupported",
		"isP2PActivated" : "isP2PActivated",
		"isWireTransferEligible" : "isWireTransferEligible",
		"isWireTransferActivated" : "isWireTransferActivated",
		"createdby" : "createdby",
		"modifiedby" : "modifiedby",
		"createdts" : "createdts",
		"lastmodifiedts" : "lastmodifiedts",
		"synctimestamp" : "synctimestamp",
		"softdeleteflag" : "softdeleteflag",
		"securityKey" : "securityKey",
		"Phone" : "Phone",
		"Email" : "Email",
		"Result" : "Result",
		"errMessage" : "errMessage",
		"errCode" : "errCode",
		"message" : "message",
		"error" : "error",
		"errmsg" : "errmsg",
		"MemberId" : "MemberId",
		"IDMidentifier" : "IDMidentifier",
		"errorMessage" : "errorMessage",
		"errorCode" : "errorCode",
		"lockedOn" : "lockedOn",
		"Subscribe" : "Subscribe",
		"Membership_id" : "Membership_id",
		"Taxid" : "Taxid",
		"Customer_id" : "Customer_id",
		"accounts" : "accounts",
		"services" : "services",
		"Role_id" : "Role_id",
		"customeraccounts" : "customeraccounts",
		"DrivingLicenseNumber" : "DrivingLicenseNumber",
		"EAgreementRequired" : "EAgreementRequired",
		"doNotSendOTP" : "doNotSendOTP",
		"redirectLink" : "redirectLink",
		"Organization_id" : "Organization_id",
		"isEAgreementRequired" : "isEAgreementRequired",
		"isEagreementSigned" : "isEagreementSigned",
		"opCode" : "opCode",
		"opMessage" : "opMessage",
		"MessageType" : "MessageType",
		"SendToMobiles" : "SendToMobiles",
		"membershipID" : "membershipID",
	};
	Object.freeze(mappings);
	
	var typings = {
		"id" : "string",
		"IDValue" : "string",
		"IDType_id" : "string",
		"UserName" : "string",
		"Password" : "string",
		"IsCoreIdentityScope" : "string",
		"Salutation" : "string",
		"FirstName" : "string",
		"MiddleName" : "string",
		"LastName" : "string",
		"FullName" : "string",
		"Gender" : "string",
		"DateOfBirth" : "string",
		"Ssn" : "string",
		"CustomerType_id" : "string",
		"CustomerType" : "string",
		"Status_id" : "string",
		"Status" : "string",
		"success" : "string",
		"IsPhoneEnabled" : "string",
		"IsEmailEnabled" : "string",
		"IsStaffMember" : "string",
		"isSuperAdmin" : "string",
		"Role" : "string",
		"SecurityImage_id" : "string",
		"IsPinSet" : "string",
		"Pin" : "string",
		"Token" : "string",
		"Otp" : "string",
		"OtpGenaratedts" : "string",
		"ValidDate" : "string",
		"unsuccessfulLoginAttempts" : "string",
		"isUserAccountLocked" : "string",
		"UserImage" : "string",
		"UserImageURL" : "string",
		"CountryCode" : "string",
		"Location_id" : "string",
		"IsOlbAllowed" : "string",
		"OlbEnrolmentStatus_id" : "string",
		"isEnrolled" : "string",
		"Is_MemberEligibile" : "string",
		"MemberEligibilityData" : "string",
		"Is_BBOA" : "string",
		"MaritalStatus_id" : "string",
		"SpouseName" : "string",
		"NoOfDependents" : "string",
		"EmployementStatus_id" : "string",
		"CurrentLoginTime" : "string",
		"Lastlogintime" : "string",
		"CreditUnionMemberSince" : "string",
		"AtionProfile_id" : "string",
		"RegistrationLink" : "string",
		"RegLinkResendCount" : "string",
		"RegLinkValidity" : "string",
		"IsAssistConsented" : "string",
		"areDepositTermsAccepted" : "string",
		"areAccountStatementTermsAccepted" : "string",
		"areUserAlertsTurnedOn" : "string",
		"isBillPaySupported" : "string",
		"isBillPayActivated" : "string",
		"isP2PSupported" : "string",
		"isP2PActivated" : "string",
		"isWireTransferEligible" : "string",
		"isWireTransferActivated" : "string",
		"createdby" : "string",
		"modifiedby" : "string",
		"createdts" : "string",
		"lastmodifiedts" : "string",
		"synctimestamp" : "string",
		"softdeleteflag" : "string",
		"securityKey" : "string",
		"Phone" : "string",
		"Email" : "string",
		"Result" : "string",
		"errMessage" : "string",
		"errCode" : "string",
		"message" : "string",
		"error" : "string",
		"errmsg" : "string",
		"MemberId" : "string",
		"IDMidentifier" : "string",
		"errorMessage" : "string",
		"errorCode" : "string",
		"lockedOn" : "string",
		"Subscribe" : "string",
		"Membership_id" : "string",
		"Taxid" : "string",
		"Customer_id" : "string",
		"accounts" : "string",
		"services" : "string",
		"Role_id" : "string",
		"customeraccounts" : "string",
		"DrivingLicenseNumber" : "string",
		"EAgreementRequired" : "string",
		"doNotSendOTP" : "string",
		"redirectLink" : "string",
		"Organization_id" : "string",
		"isEAgreementRequired" : "string",
		"isEagreementSigned" : "string",
		"opCode" : "string",
		"opMessage" : "string",
		"MessageType" : "string",
		"SendToMobiles" : "string",
		"membershipID" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "DbxUser"
	};
	Object.freeze(config);
	
	return config;
})
