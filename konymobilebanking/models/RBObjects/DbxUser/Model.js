define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		id : function(val, state){
			state['id'] = val;
		},
		IDValue : function(val, state){
			state['IDValue'] = val;
		},
		IDType_id : function(val, state){
			state['IDType_id'] = val;
		},
		UserName : function(val, state){
			state['UserName'] = val;
		},
		Password : function(val, state){
			state['Password'] = val;
		},
		IsCoreIdentityScope : function(val, state){
			state['IsCoreIdentityScope'] = val;
		},
		Salutation : function(val, state){
			state['Salutation'] = val;
		},
		FirstName : function(val, state){
			state['FirstName'] = val;
		},
		MiddleName : function(val, state){
			state['MiddleName'] = val;
		},
		LastName : function(val, state){
			state['LastName'] = val;
		},
		FullName : function(val, state){
			state['FullName'] = val;
		},
		Gender : function(val, state){
			state['Gender'] = val;
		},
		DateOfBirth : function(val, state){
			state['DateOfBirth'] = val;
		},
		Ssn : function(val, state){
			state['Ssn'] = val;
		},
		CustomerType_id : function(val, state){
			state['CustomerType_id'] = val;
		},
		CustomerType : function(val, state){
			state['CustomerType'] = val;
		},
		Status_id : function(val, state){
			state['Status_id'] = val;
		},
		Status : function(val, state){
			state['Status'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		IsPhoneEnabled : function(val, state){
			state['IsPhoneEnabled'] = val;
		},
		IsEmailEnabled : function(val, state){
			state['IsEmailEnabled'] = val;
		},
		IsStaffMember : function(val, state){
			state['IsStaffMember'] = val;
		},
		isSuperAdmin : function(val, state){
			state['isSuperAdmin'] = val;
		},
		Role : function(val, state){
			state['Role'] = val;
		},
		SecurityImage_id : function(val, state){
			state['SecurityImage_id'] = val;
		},
		IsPinSet : function(val, state){
			state['IsPinSet'] = val;
		},
		Pin : function(val, state){
			state['Pin'] = val;
		},
		Token : function(val, state){
			state['Token'] = val;
		},
		Otp : function(val, state){
			state['Otp'] = val;
		},
		OtpGenaratedts : function(val, state){
			state['OtpGenaratedts'] = val;
		},
		ValidDate : function(val, state){
			state['ValidDate'] = val;
		},
		unsuccessfulLoginAttempts : function(val, state){
			state['unsuccessfulLoginAttempts'] = val;
		},
		isUserAccountLocked : function(val, state){
			state['isUserAccountLocked'] = val;
		},
		UserImage : function(val, state){
			state['UserImage'] = val;
		},
		UserImageURL : function(val, state){
			state['UserImageURL'] = val;
		},
		CountryCode : function(val, state){
			state['CountryCode'] = val;
		},
		Location_id : function(val, state){
			state['Location_id'] = val;
		},
		IsOlbAllowed : function(val, state){
			state['IsOlbAllowed'] = val;
		},
		OlbEnrolmentStatus_id : function(val, state){
			state['OlbEnrolmentStatus_id'] = val;
		},
		isEnrolled : function(val, state){
			state['isEnrolled'] = val;
		},
		Is_MemberEligibile : function(val, state){
			state['Is_MemberEligibile'] = val;
		},
		MemberEligibilityData : function(val, state){
			state['MemberEligibilityData'] = val;
		},
		Is_BBOA : function(val, state){
			state['Is_BBOA'] = val;
		},
		MaritalStatus_id : function(val, state){
			state['MaritalStatus_id'] = val;
		},
		SpouseName : function(val, state){
			state['SpouseName'] = val;
		},
		NoOfDependents : function(val, state){
			state['NoOfDependents'] = val;
		},
		EmployementStatus_id : function(val, state){
			state['EmployementStatus_id'] = val;
		},
		CurrentLoginTime : function(val, state){
			state['CurrentLoginTime'] = val;
		},
		Lastlogintime : function(val, state){
			state['Lastlogintime'] = val;
		},
		CreditUnionMemberSince : function(val, state){
			state['CreditUnionMemberSince'] = val;
		},
		AtionProfile_id : function(val, state){
			state['AtionProfile_id'] = val;
		},
		RegistrationLink : function(val, state){
			state['RegistrationLink'] = val;
		},
		RegLinkResendCount : function(val, state){
			state['RegLinkResendCount'] = val;
		},
		RegLinkValidity : function(val, state){
			state['RegLinkValidity'] = val;
		},
		IsAssistConsented : function(val, state){
			state['IsAssistConsented'] = val;
		},
		areDepositTermsAccepted : function(val, state){
			state['areDepositTermsAccepted'] = val;
		},
		areAccountStatementTermsAccepted : function(val, state){
			state['areAccountStatementTermsAccepted'] = val;
		},
		areUserAlertsTurnedOn : function(val, state){
			state['areUserAlertsTurnedOn'] = val;
		},
		isBillPaySupported : function(val, state){
			state['isBillPaySupported'] = val;
		},
		isBillPayActivated : function(val, state){
			state['isBillPayActivated'] = val;
		},
		isP2PSupported : function(val, state){
			state['isP2PSupported'] = val;
		},
		isP2PActivated : function(val, state){
			state['isP2PActivated'] = val;
		},
		isWireTransferEligible : function(val, state){
			state['isWireTransferEligible'] = val;
		},
		isWireTransferActivated : function(val, state){
			state['isWireTransferActivated'] = val;
		},
		createdby : function(val, state){
			state['createdby'] = val;
		},
		modifiedby : function(val, state){
			state['modifiedby'] = val;
		},
		createdts : function(val, state){
			state['createdts'] = val;
		},
		lastmodifiedts : function(val, state){
			state['lastmodifiedts'] = val;
		},
		synctimestamp : function(val, state){
			state['synctimestamp'] = val;
		},
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
		securityKey : function(val, state){
			state['securityKey'] = val;
		},
		Phone : function(val, state){
			state['Phone'] = val;
		},
		Email : function(val, state){
			state['Email'] = val;
		},
		Result : function(val, state){
			state['Result'] = val;
		},
		errMessage : function(val, state){
			state['errMessage'] = val;
		},
		errCode : function(val, state){
			state['errCode'] = val;
		},
		message : function(val, state){
			state['message'] = val;
		},
		error : function(val, state){
			state['error'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		MemberId : function(val, state){
			state['MemberId'] = val;
		},
		IDMidentifier : function(val, state){
			state['IDMidentifier'] = val;
		},
		errorMessage : function(val, state){
			state['errorMessage'] = val;
		},
		errorCode : function(val, state){
			state['errorCode'] = val;
		},
		lockedOn : function(val, state){
			state['lockedOn'] = val;
		},
		Subscribe : function(val, state){
			state['Subscribe'] = val;
		},
		Membership_id : function(val, state){
			state['Membership_id'] = val;
		},
		Taxid : function(val, state){
			state['Taxid'] = val;
		},
		Customer_id : function(val, state){
			state['Customer_id'] = val;
		},
		accounts : function(val, state){
			state['accounts'] = val;
		},
		services : function(val, state){
			state['services'] = val;
		},
		Role_id : function(val, state){
			state['Role_id'] = val;
		},
		customeraccounts : function(val, state){
			state['customeraccounts'] = val;
		},
		DrivingLicenseNumber : function(val, state){
			state['DrivingLicenseNumber'] = val;
		},
		EAgreementRequired : function(val, state){
			state['EAgreementRequired'] = val;
		},
		doNotSendOTP : function(val, state){
			state['doNotSendOTP'] = val;
		},
		redirectLink : function(val, state){
			state['redirectLink'] = val;
		},
		Organization_id : function(val, state){
			state['Organization_id'] = val;
		},
		isEAgreementRequired : function(val, state){
			state['isEAgreementRequired'] = val;
		},
		isEagreementSigned : function(val, state){
			state['isEagreementSigned'] = val;
		},
		opCode : function(val, state){
			state['opCode'] = val;
		},
		opMessage : function(val, state){
			state['opMessage'] = val;
		},
		MessageType : function(val, state){
			state['MessageType'] = val;
		},
		SendToMobiles : function(val, state){
			state['SendToMobiles'] = val;
		},
		membershipID : function(val, state){
			state['membershipID'] = val;
		},
	};
	
	
	//Create the Model Class
	function DbxUser(defaultValues){
		var privateState = {};
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.IDValue = defaultValues?(defaultValues["IDValue"]?defaultValues["IDValue"]:null):null;
			privateState.IDType_id = defaultValues?(defaultValues["IDType_id"]?defaultValues["IDType_id"]:null):null;
			privateState.UserName = defaultValues?(defaultValues["UserName"]?defaultValues["UserName"]:null):null;
			privateState.Password = defaultValues?(defaultValues["Password"]?defaultValues["Password"]:null):null;
			privateState.IsCoreIdentityScope = defaultValues?(defaultValues["IsCoreIdentityScope"]?defaultValues["IsCoreIdentityScope"]:null):null;
			privateState.Salutation = defaultValues?(defaultValues["Salutation"]?defaultValues["Salutation"]:null):null;
			privateState.FirstName = defaultValues?(defaultValues["FirstName"]?defaultValues["FirstName"]:null):null;
			privateState.MiddleName = defaultValues?(defaultValues["MiddleName"]?defaultValues["MiddleName"]:null):null;
			privateState.LastName = defaultValues?(defaultValues["LastName"]?defaultValues["LastName"]:null):null;
			privateState.FullName = defaultValues?(defaultValues["FullName"]?defaultValues["FullName"]:null):null;
			privateState.Gender = defaultValues?(defaultValues["Gender"]?defaultValues["Gender"]:null):null;
			privateState.DateOfBirth = defaultValues?(defaultValues["DateOfBirth"]?defaultValues["DateOfBirth"]:null):null;
			privateState.Ssn = defaultValues?(defaultValues["Ssn"]?defaultValues["Ssn"]:null):null;
			privateState.CustomerType_id = defaultValues?(defaultValues["CustomerType_id"]?defaultValues["CustomerType_id"]:null):null;
			privateState.CustomerType = defaultValues?(defaultValues["CustomerType"]?defaultValues["CustomerType"]:null):null;
			privateState.Status_id = defaultValues?(defaultValues["Status_id"]?defaultValues["Status_id"]:null):null;
			privateState.Status = defaultValues?(defaultValues["Status"]?defaultValues["Status"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.IsPhoneEnabled = defaultValues?(defaultValues["IsPhoneEnabled"]?defaultValues["IsPhoneEnabled"]:null):null;
			privateState.IsEmailEnabled = defaultValues?(defaultValues["IsEmailEnabled"]?defaultValues["IsEmailEnabled"]:null):null;
			privateState.IsStaffMember = defaultValues?(defaultValues["IsStaffMember"]?defaultValues["IsStaffMember"]:null):null;
			privateState.isSuperAdmin = defaultValues?(defaultValues["isSuperAdmin"]?defaultValues["isSuperAdmin"]:null):null;
			privateState.Role = defaultValues?(defaultValues["Role"]?defaultValues["Role"]:null):null;
			privateState.SecurityImage_id = defaultValues?(defaultValues["SecurityImage_id"]?defaultValues["SecurityImage_id"]:null):null;
			privateState.IsPinSet = defaultValues?(defaultValues["IsPinSet"]?defaultValues["IsPinSet"]:null):null;
			privateState.Pin = defaultValues?(defaultValues["Pin"]?defaultValues["Pin"]:null):null;
			privateState.Token = defaultValues?(defaultValues["Token"]?defaultValues["Token"]:null):null;
			privateState.Otp = defaultValues?(defaultValues["Otp"]?defaultValues["Otp"]:null):null;
			privateState.OtpGenaratedts = defaultValues?(defaultValues["OtpGenaratedts"]?defaultValues["OtpGenaratedts"]:null):null;
			privateState.ValidDate = defaultValues?(defaultValues["ValidDate"]?defaultValues["ValidDate"]:null):null;
			privateState.unsuccessfulLoginAttempts = defaultValues?(defaultValues["unsuccessfulLoginAttempts"]?defaultValues["unsuccessfulLoginAttempts"]:null):null;
			privateState.isUserAccountLocked = defaultValues?(defaultValues["isUserAccountLocked"]?defaultValues["isUserAccountLocked"]:null):null;
			privateState.UserImage = defaultValues?(defaultValues["UserImage"]?defaultValues["UserImage"]:null):null;
			privateState.UserImageURL = defaultValues?(defaultValues["UserImageURL"]?defaultValues["UserImageURL"]:null):null;
			privateState.CountryCode = defaultValues?(defaultValues["CountryCode"]?defaultValues["CountryCode"]:null):null;
			privateState.Location_id = defaultValues?(defaultValues["Location_id"]?defaultValues["Location_id"]:null):null;
			privateState.IsOlbAllowed = defaultValues?(defaultValues["IsOlbAllowed"]?defaultValues["IsOlbAllowed"]:null):null;
			privateState.OlbEnrolmentStatus_id = defaultValues?(defaultValues["OlbEnrolmentStatus_id"]?defaultValues["OlbEnrolmentStatus_id"]:null):null;
			privateState.isEnrolled = defaultValues?(defaultValues["isEnrolled"]?defaultValues["isEnrolled"]:null):null;
			privateState.Is_MemberEligibile = defaultValues?(defaultValues["Is_MemberEligibile"]?defaultValues["Is_MemberEligibile"]:null):null;
			privateState.MemberEligibilityData = defaultValues?(defaultValues["MemberEligibilityData"]?defaultValues["MemberEligibilityData"]:null):null;
			privateState.Is_BBOA = defaultValues?(defaultValues["Is_BBOA"]?defaultValues["Is_BBOA"]:null):null;
			privateState.MaritalStatus_id = defaultValues?(defaultValues["MaritalStatus_id"]?defaultValues["MaritalStatus_id"]:null):null;
			privateState.SpouseName = defaultValues?(defaultValues["SpouseName"]?defaultValues["SpouseName"]:null):null;
			privateState.NoOfDependents = defaultValues?(defaultValues["NoOfDependents"]?defaultValues["NoOfDependents"]:null):null;
			privateState.EmployementStatus_id = defaultValues?(defaultValues["EmployementStatus_id"]?defaultValues["EmployementStatus_id"]:null):null;
			privateState.CurrentLoginTime = defaultValues?(defaultValues["CurrentLoginTime"]?defaultValues["CurrentLoginTime"]:null):null;
			privateState.Lastlogintime = defaultValues?(defaultValues["Lastlogintime"]?defaultValues["Lastlogintime"]:null):null;
			privateState.CreditUnionMemberSince = defaultValues?(defaultValues["CreditUnionMemberSince"]?defaultValues["CreditUnionMemberSince"]:null):null;
			privateState.AtionProfile_id = defaultValues?(defaultValues["AtionProfile_id"]?defaultValues["AtionProfile_id"]:null):null;
			privateState.RegistrationLink = defaultValues?(defaultValues["RegistrationLink"]?defaultValues["RegistrationLink"]:null):null;
			privateState.RegLinkResendCount = defaultValues?(defaultValues["RegLinkResendCount"]?defaultValues["RegLinkResendCount"]:null):null;
			privateState.RegLinkValidity = defaultValues?(defaultValues["RegLinkValidity"]?defaultValues["RegLinkValidity"]:null):null;
			privateState.IsAssistConsented = defaultValues?(defaultValues["IsAssistConsented"]?defaultValues["IsAssistConsented"]:null):null;
			privateState.areDepositTermsAccepted = defaultValues?(defaultValues["areDepositTermsAccepted"]?defaultValues["areDepositTermsAccepted"]:null):null;
			privateState.areAccountStatementTermsAccepted = defaultValues?(defaultValues["areAccountStatementTermsAccepted"]?defaultValues["areAccountStatementTermsAccepted"]:null):null;
			privateState.areUserAlertsTurnedOn = defaultValues?(defaultValues["areUserAlertsTurnedOn"]?defaultValues["areUserAlertsTurnedOn"]:null):null;
			privateState.isBillPaySupported = defaultValues?(defaultValues["isBillPaySupported"]?defaultValues["isBillPaySupported"]:null):null;
			privateState.isBillPayActivated = defaultValues?(defaultValues["isBillPayActivated"]?defaultValues["isBillPayActivated"]:null):null;
			privateState.isP2PSupported = defaultValues?(defaultValues["isP2PSupported"]?defaultValues["isP2PSupported"]:null):null;
			privateState.isP2PActivated = defaultValues?(defaultValues["isP2PActivated"]?defaultValues["isP2PActivated"]:null):null;
			privateState.isWireTransferEligible = defaultValues?(defaultValues["isWireTransferEligible"]?defaultValues["isWireTransferEligible"]:null):null;
			privateState.isWireTransferActivated = defaultValues?(defaultValues["isWireTransferActivated"]?defaultValues["isWireTransferActivated"]:null):null;
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.modifiedby = defaultValues?(defaultValues["modifiedby"]?defaultValues["modifiedby"]:null):null;
			privateState.createdts = defaultValues?(defaultValues["createdts"]?defaultValues["createdts"]:null):null;
			privateState.lastmodifiedts = defaultValues?(defaultValues["lastmodifiedts"]?defaultValues["lastmodifiedts"]:null):null;
			privateState.synctimestamp = defaultValues?(defaultValues["synctimestamp"]?defaultValues["synctimestamp"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
			privateState.securityKey = defaultValues?(defaultValues["securityKey"]?defaultValues["securityKey"]:null):null;
			privateState.Phone = defaultValues?(defaultValues["Phone"]?defaultValues["Phone"]:null):null;
			privateState.Email = defaultValues?(defaultValues["Email"]?defaultValues["Email"]:null):null;
			privateState.Result = defaultValues?(defaultValues["Result"]?defaultValues["Result"]:null):null;
			privateState.errMessage = defaultValues?(defaultValues["errMessage"]?defaultValues["errMessage"]:null):null;
			privateState.errCode = defaultValues?(defaultValues["errCode"]?defaultValues["errCode"]:null):null;
			privateState.message = defaultValues?(defaultValues["message"]?defaultValues["message"]:null):null;
			privateState.error = defaultValues?(defaultValues["error"]?defaultValues["error"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.MemberId = defaultValues?(defaultValues["MemberId"]?defaultValues["MemberId"]:null):null;
			privateState.IDMidentifier = defaultValues?(defaultValues["IDMidentifier"]?defaultValues["IDMidentifier"]:null):null;
			privateState.errorMessage = defaultValues?(defaultValues["errorMessage"]?defaultValues["errorMessage"]:null):null;
			privateState.errorCode = defaultValues?(defaultValues["errorCode"]?defaultValues["errorCode"]:null):null;
			privateState.lockedOn = defaultValues?(defaultValues["lockedOn"]?defaultValues["lockedOn"]:null):null;
			privateState.Subscribe = defaultValues?(defaultValues["Subscribe"]?defaultValues["Subscribe"]:null):null;
			privateState.Membership_id = defaultValues?(defaultValues["Membership_id"]?defaultValues["Membership_id"]:null):null;
			privateState.Taxid = defaultValues?(defaultValues["Taxid"]?defaultValues["Taxid"]:null):null;
			privateState.Customer_id = defaultValues?(defaultValues["Customer_id"]?defaultValues["Customer_id"]:null):null;
			privateState.accounts = defaultValues?(defaultValues["accounts"]?defaultValues["accounts"]:null):null;
			privateState.services = defaultValues?(defaultValues["services"]?defaultValues["services"]:null):null;
			privateState.Role_id = defaultValues?(defaultValues["Role_id"]?defaultValues["Role_id"]:null):null;
			privateState.customeraccounts = defaultValues?(defaultValues["customeraccounts"]?defaultValues["customeraccounts"]:null):null;
			privateState.DrivingLicenseNumber = defaultValues?(defaultValues["DrivingLicenseNumber"]?defaultValues["DrivingLicenseNumber"]:null):null;
			privateState.EAgreementRequired = defaultValues?(defaultValues["EAgreementRequired"]?defaultValues["EAgreementRequired"]:null):null;
			privateState.doNotSendOTP = defaultValues?(defaultValues["doNotSendOTP"]?defaultValues["doNotSendOTP"]:null):null;
			privateState.redirectLink = defaultValues?(defaultValues["redirectLink"]?defaultValues["redirectLink"]:null):null;
			privateState.Organization_id = defaultValues?(defaultValues["Organization_id"]?defaultValues["Organization_id"]:null):null;
			privateState.isEAgreementRequired = defaultValues?(defaultValues["isEAgreementRequired"]?defaultValues["isEAgreementRequired"]:null):null;
			privateState.isEagreementSigned = defaultValues?(defaultValues["isEagreementSigned"]?defaultValues["isEagreementSigned"]:null):null;
			privateState.opCode = defaultValues?(defaultValues["opCode"]?defaultValues["opCode"]:null):null;
			privateState.opMessage = defaultValues?(defaultValues["opMessage"]?defaultValues["opMessage"]:null):null;
			privateState.MessageType = defaultValues?(defaultValues["MessageType"]?defaultValues["MessageType"]:null):null;
			privateState.SendToMobiles = defaultValues?(defaultValues["SendToMobiles"]?defaultValues["SendToMobiles"]:null):null;
			privateState.membershipID = defaultValues?(defaultValues["membershipID"]?defaultValues["membershipID"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"id" : {
					get : function(){return privateState.id},
					set : function(val){
						setterFunctions['id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IDValue" : {
					get : function(){return privateState.IDValue},
					set : function(val){
						setterFunctions['IDValue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IDType_id" : {
					get : function(){return privateState.IDType_id},
					set : function(val){
						setterFunctions['IDType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"UserName" : {
					get : function(){return privateState.UserName},
					set : function(val){
						setterFunctions['UserName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Password" : {
					get : function(){return privateState.Password},
					set : function(val){
						setterFunctions['Password'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsCoreIdentityScope" : {
					get : function(){return privateState.IsCoreIdentityScope},
					set : function(val){
						setterFunctions['IsCoreIdentityScope'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Salutation" : {
					get : function(){return privateState.Salutation},
					set : function(val){
						setterFunctions['Salutation'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FirstName" : {
					get : function(){return privateState.FirstName},
					set : function(val){
						setterFunctions['FirstName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MiddleName" : {
					get : function(){return privateState.MiddleName},
					set : function(val){
						setterFunctions['MiddleName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"LastName" : {
					get : function(){return privateState.LastName},
					set : function(val){
						setterFunctions['LastName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FullName" : {
					get : function(){return privateState.FullName},
					set : function(val){
						setterFunctions['FullName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Gender" : {
					get : function(){return privateState.Gender},
					set : function(val){
						setterFunctions['Gender'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"DateOfBirth" : {
					get : function(){return privateState.DateOfBirth},
					set : function(val){
						setterFunctions['DateOfBirth'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Ssn" : {
					get : function(){return privateState.Ssn},
					set : function(val){
						setterFunctions['Ssn'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CustomerType_id" : {
					get : function(){return privateState.CustomerType_id},
					set : function(val){
						setterFunctions['CustomerType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CustomerType" : {
					get : function(){return privateState.CustomerType},
					set : function(val){
						setterFunctions['CustomerType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Status_id" : {
					get : function(){return privateState.Status_id},
					set : function(val){
						setterFunctions['Status_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Status" : {
					get : function(){return privateState.Status},
					set : function(val){
						setterFunctions['Status'].call(this,val,privateState);
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
				"IsPhoneEnabled" : {
					get : function(){return privateState.IsPhoneEnabled},
					set : function(val){
						setterFunctions['IsPhoneEnabled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsEmailEnabled" : {
					get : function(){return privateState.IsEmailEnabled},
					set : function(val){
						setterFunctions['IsEmailEnabled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsStaffMember" : {
					get : function(){return privateState.IsStaffMember},
					set : function(val){
						setterFunctions['IsStaffMember'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isSuperAdmin" : {
					get : function(){return privateState.isSuperAdmin},
					set : function(val){
						setterFunctions['isSuperAdmin'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Role" : {
					get : function(){return privateState.Role},
					set : function(val){
						setterFunctions['Role'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"SecurityImage_id" : {
					get : function(){return privateState.SecurityImage_id},
					set : function(val){
						setterFunctions['SecurityImage_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsPinSet" : {
					get : function(){return privateState.IsPinSet},
					set : function(val){
						setterFunctions['IsPinSet'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Pin" : {
					get : function(){return privateState.Pin},
					set : function(val){
						setterFunctions['Pin'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Token" : {
					get : function(){return privateState.Token},
					set : function(val){
						setterFunctions['Token'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Otp" : {
					get : function(){return privateState.Otp},
					set : function(val){
						setterFunctions['Otp'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"OtpGenaratedts" : {
					get : function(){return privateState.OtpGenaratedts},
					set : function(val){
						setterFunctions['OtpGenaratedts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ValidDate" : {
					get : function(){return privateState.ValidDate},
					set : function(val){
						setterFunctions['ValidDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"unsuccessfulLoginAttempts" : {
					get : function(){return privateState.unsuccessfulLoginAttempts},
					set : function(val){
						setterFunctions['unsuccessfulLoginAttempts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isUserAccountLocked" : {
					get : function(){return privateState.isUserAccountLocked},
					set : function(val){
						setterFunctions['isUserAccountLocked'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"UserImage" : {
					get : function(){return privateState.UserImage},
					set : function(val){
						setterFunctions['UserImage'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"UserImageURL" : {
					get : function(){return privateState.UserImageURL},
					set : function(val){
						setterFunctions['UserImageURL'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CountryCode" : {
					get : function(){return privateState.CountryCode},
					set : function(val){
						setterFunctions['CountryCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Location_id" : {
					get : function(){return privateState.Location_id},
					set : function(val){
						setterFunctions['Location_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsOlbAllowed" : {
					get : function(){return privateState.IsOlbAllowed},
					set : function(val){
						setterFunctions['IsOlbAllowed'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"OlbEnrolmentStatus_id" : {
					get : function(){return privateState.OlbEnrolmentStatus_id},
					set : function(val){
						setterFunctions['OlbEnrolmentStatus_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isEnrolled" : {
					get : function(){return privateState.isEnrolled},
					set : function(val){
						setterFunctions['isEnrolled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Is_MemberEligibile" : {
					get : function(){return privateState.Is_MemberEligibile},
					set : function(val){
						setterFunctions['Is_MemberEligibile'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MemberEligibilityData" : {
					get : function(){return privateState.MemberEligibilityData},
					set : function(val){
						setterFunctions['MemberEligibilityData'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Is_BBOA" : {
					get : function(){return privateState.Is_BBOA},
					set : function(val){
						setterFunctions['Is_BBOA'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MaritalStatus_id" : {
					get : function(){return privateState.MaritalStatus_id},
					set : function(val){
						setterFunctions['MaritalStatus_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"SpouseName" : {
					get : function(){return privateState.SpouseName},
					set : function(val){
						setterFunctions['SpouseName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NoOfDependents" : {
					get : function(){return privateState.NoOfDependents},
					set : function(val){
						setterFunctions['NoOfDependents'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"EmployementStatus_id" : {
					get : function(){return privateState.EmployementStatus_id},
					set : function(val){
						setterFunctions['EmployementStatus_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CurrentLoginTime" : {
					get : function(){return privateState.CurrentLoginTime},
					set : function(val){
						setterFunctions['CurrentLoginTime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Lastlogintime" : {
					get : function(){return privateState.Lastlogintime},
					set : function(val){
						setterFunctions['Lastlogintime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CreditUnionMemberSince" : {
					get : function(){return privateState.CreditUnionMemberSince},
					set : function(val){
						setterFunctions['CreditUnionMemberSince'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"AtionProfile_id" : {
					get : function(){return privateState.AtionProfile_id},
					set : function(val){
						setterFunctions['AtionProfile_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"RegistrationLink" : {
					get : function(){return privateState.RegistrationLink},
					set : function(val){
						setterFunctions['RegistrationLink'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"RegLinkResendCount" : {
					get : function(){return privateState.RegLinkResendCount},
					set : function(val){
						setterFunctions['RegLinkResendCount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"RegLinkValidity" : {
					get : function(){return privateState.RegLinkValidity},
					set : function(val){
						setterFunctions['RegLinkValidity'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsAssistConsented" : {
					get : function(){return privateState.IsAssistConsented},
					set : function(val){
						setterFunctions['IsAssistConsented'].call(this,val,privateState);
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
				"areAccountStatementTermsAccepted" : {
					get : function(){return privateState.areAccountStatementTermsAccepted},
					set : function(val){
						setterFunctions['areAccountStatementTermsAccepted'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"areUserAlertsTurnedOn" : {
					get : function(){return privateState.areUserAlertsTurnedOn},
					set : function(val){
						setterFunctions['areUserAlertsTurnedOn'].call(this,val,privateState);
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
				"isP2PSupported" : {
					get : function(){return privateState.isP2PSupported},
					set : function(val){
						setterFunctions['isP2PSupported'].call(this,val,privateState);
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
				"isWireTransferEligible" : {
					get : function(){return privateState.isWireTransferEligible},
					set : function(val){
						setterFunctions['isWireTransferEligible'].call(this,val,privateState);
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
				"createdby" : {
					get : function(){return privateState.createdby},
					set : function(val){
						setterFunctions['createdby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"modifiedby" : {
					get : function(){return privateState.modifiedby},
					set : function(val){
						setterFunctions['modifiedby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"createdts" : {
					get : function(){return privateState.createdts},
					set : function(val){
						setterFunctions['createdts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastmodifiedts" : {
					get : function(){return privateState.lastmodifiedts},
					set : function(val){
						setterFunctions['lastmodifiedts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"synctimestamp" : {
					get : function(){return privateState.synctimestamp},
					set : function(val){
						setterFunctions['synctimestamp'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"softdeleteflag" : {
					get : function(){return privateState.softdeleteflag},
					set : function(val){
						setterFunctions['softdeleteflag'].call(this,val,privateState);
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
				"Phone" : {
					get : function(){return privateState.Phone},
					set : function(val){
						setterFunctions['Phone'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Email" : {
					get : function(){return privateState.Email},
					set : function(val){
						setterFunctions['Email'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Result" : {
					get : function(){return privateState.Result},
					set : function(val){
						setterFunctions['Result'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errMessage" : {
					get : function(){return privateState.errMessage},
					set : function(val){
						setterFunctions['errMessage'].call(this,val,privateState);
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
				"message" : {
					get : function(){return privateState.message},
					set : function(val){
						setterFunctions['message'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"error" : {
					get : function(){return privateState.error},
					set : function(val){
						setterFunctions['error'].call(this,val,privateState);
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
				"MemberId" : {
					get : function(){return privateState.MemberId},
					set : function(val){
						setterFunctions['MemberId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IDMidentifier" : {
					get : function(){return privateState.IDMidentifier},
					set : function(val){
						setterFunctions['IDMidentifier'].call(this,val,privateState);
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
				"lockedOn" : {
					get : function(){return privateState.lockedOn},
					set : function(val){
						setterFunctions['lockedOn'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Subscribe" : {
					get : function(){return privateState.Subscribe},
					set : function(val){
						setterFunctions['Subscribe'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Membership_id" : {
					get : function(){return privateState.Membership_id},
					set : function(val){
						setterFunctions['Membership_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Taxid" : {
					get : function(){return privateState.Taxid},
					set : function(val){
						setterFunctions['Taxid'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Customer_id" : {
					get : function(){return privateState.Customer_id},
					set : function(val){
						setterFunctions['Customer_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accounts" : {
					get : function(){return privateState.accounts},
					set : function(val){
						setterFunctions['accounts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"services" : {
					get : function(){return privateState.services},
					set : function(val){
						setterFunctions['services'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Role_id" : {
					get : function(){return privateState.Role_id},
					set : function(val){
						setterFunctions['Role_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"customeraccounts" : {
					get : function(){return privateState.customeraccounts},
					set : function(val){
						setterFunctions['customeraccounts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"DrivingLicenseNumber" : {
					get : function(){return privateState.DrivingLicenseNumber},
					set : function(val){
						setterFunctions['DrivingLicenseNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"EAgreementRequired" : {
					get : function(){return privateState.EAgreementRequired},
					set : function(val){
						setterFunctions['EAgreementRequired'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"doNotSendOTP" : {
					get : function(){return privateState.doNotSendOTP},
					set : function(val){
						setterFunctions['doNotSendOTP'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"redirectLink" : {
					get : function(){return privateState.redirectLink},
					set : function(val){
						setterFunctions['redirectLink'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Organization_id" : {
					get : function(){return privateState.Organization_id},
					set : function(val){
						setterFunctions['Organization_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isEAgreementRequired" : {
					get : function(){return privateState.isEAgreementRequired},
					set : function(val){
						setterFunctions['isEAgreementRequired'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isEagreementSigned" : {
					get : function(){return privateState.isEagreementSigned},
					set : function(val){
						setterFunctions['isEagreementSigned'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"opCode" : {
					get : function(){return privateState.opCode},
					set : function(val){
						setterFunctions['opCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"opMessage" : {
					get : function(){return privateState.opMessage},
					set : function(val){
						setterFunctions['opMessage'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MessageType" : {
					get : function(){return privateState.MessageType},
					set : function(val){
						setterFunctions['MessageType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"SendToMobiles" : {
					get : function(){return privateState.SendToMobiles},
					set : function(val){
						setterFunctions['SendToMobiles'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"membershipID" : {
					get : function(){return privateState.membershipID},
					set : function(val){
						setterFunctions['membershipID'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(DbxUser);
	
	//Create new class level validator object
	BaseModel.Validator.call(DbxUser);
	
	var registerValidatorBackup = DbxUser.registerValidator;
	
	DbxUser.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( DbxUser.isValid(this, propName, val) ){
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
	//For Operation 'verifyDbxUserName' with service id 'verifyDbxUserName2953'
	DbxUser.verifyDbxUserName = function(params, onCompletion){
		return DbxUser.customVerb('verifyDbxUserName', params, onCompletion);
	};
	//For Operation 'CreateMicroOrganizationEmployee' with service id 'CreateMicroOrganizationEmployee8363'
	DbxUser.CreateMicroOrganizationEmployee = function(params, onCompletion){
		return DbxUser.customVerb('CreateMicroOrganizationEmployee', params, onCompletion);
	};
	//For Operation 'getCustomerTypes' with service id 'getCustomerTypes3510'
	DbxUser.getCustomerTypes = function(params, onCompletion){
		return DbxUser.customVerb('getCustomerTypes', params, onCompletion);
	};
	//For Operation 'verifyOrganisationUser' with service id 'verifyOraganisationUser1693'
	DbxUser.verifyOrganisationUser = function(params, onCompletion){
		return DbxUser.customVerb('verifyOrganisationUser', params, onCompletion);
	};
	//For Operation 'IsEmailLinkActive' with service id 'IsEmailLinkActive2056'
	DbxUser.IsEmailLinkActive = function(params, onCompletion){
		return DbxUser.customVerb('IsEmailLinkActive', params, onCompletion);
	};
	//For Operation 'createCustomerMock' with service id 'createCustomer6642'
	DbxUser.createCustomerMock = function(params, onCompletion){
		return DbxUser.customVerb('createCustomerMock', params, onCompletion);
	};
	//For Operation 'resetDbxUserPassword' with service id 'resetDbxUserPassword2912'
	DbxUser.resetDbxUserPassword = function(params, onCompletion){
		return DbxUser.customVerb('resetDbxUserPassword', params, onCompletion);
	};
	//For Operation 'updateDBXUserStatus' with service id 'UpdateDBXUserStatus7858'
	DbxUser.updateDBXUserStatus = function(params, onCompletion){
		return DbxUser.customVerb('updateDBXUserStatus', params, onCompletion);
	};
	//For Operation 'getGroupEntitlements' with service id 'getGroupEntitlements3846'
	DbxUser.getGroupEntitlements = function(params, onCompletion){
		return DbxUser.customVerb('getGroupEntitlements', params, onCompletion);
	};
	//For Operation 'ResendActivationLink' with service id 'ResendOrgEmployeeActivationLink3557'
	DbxUser.ResendActivationLink = function(params, onCompletion){
		return DbxUser.customVerb('ResendActivationLink', params, onCompletion);
	};
	//For Operation 'getCustomerCommunication' with service id 'getCustomerCommunication7155'
	DbxUser.getCustomerCommunication = function(params, onCompletion){
		return DbxUser.customVerb('getCustomerCommunication', params, onCompletion);
	};
	//For Operation 'checkIfOrgMemberExists' with service id 'checkIfOrgMemberExists8908'
	DbxUser.checkIfOrgMemberExists = function(params, onCompletion){
		return DbxUser.customVerb('checkIfOrgMemberExists', params, onCompletion);
	};
	//For Operation 'CreateDbxMicroBusinessUser' with service id 'CreateDbxMicroBusinessUser7923'
	DbxUser.CreateDbxMicroBusinessUser = function(params, onCompletion){
		return DbxUser.customVerb('CreateDbxMicroBusinessUser', params, onCompletion);
	};
	//For Operation 'updateCustomerProfile' with service id 'updateCustomerProfile6713'
	DbxUser.updateCustomerProfile = function(params, onCompletion){
		return DbxUser.customVerb('updateCustomerProfile', params, onCompletion);
	};
	//For Operation 'updateOrganizationEmployee' with service id 'EditOrganizationEmployee1317'
	DbxUser.updateOrganizationEmployee = function(params, onCompletion){
		return DbxUser.customVerb('updateOrganizationEmployee', params, onCompletion);
	};
	//For Operation 'lockUnlockCustomer' with service id 'lockUnlockCustomer8209'
	DbxUser.lockUnlockCustomer = function(params, onCompletion){
		return DbxUser.customVerb('lockUnlockCustomer', params, onCompletion);
	};
	//For Operation 'CreateOrganizationEmployee' with service id 'CreateOrganizationEmployee1324'
	DbxUser.CreateOrganizationEmployee = function(params, onCompletion){
		return DbxUser.customVerb('CreateOrganizationEmployee', params, onCompletion);
	};
	//For Operation 'fetchCustomerDetailsForOlb' with service id 'fetchCustomerDetailsForOlb9099'
	DbxUser.fetchCustomerDetailsForOlb = function(params, onCompletion){
		return DbxUser.customVerb('fetchCustomerDetailsForOlb', params, onCompletion);
	};
	//For Operation 'updateDbxCustomerNew' with service id 'updateDbxCustomerNew6883'
	DbxUser.updateDbxCustomerNew = function(params, onCompletion){
		return DbxUser.customVerb('updateDbxCustomerNew', params, onCompletion);
	};
	//For Operation 'sendKMSEmail' with service id 'sendEmail6324'
	DbxUser.sendKMSEmail = function(params, onCompletion){
		return DbxUser.customVerb('sendKMSEmail', params, onCompletion);
	};
	//For Operation 'sendDbxResetPasswordEmail' with service id 'sendDbxResetPasswordLink9649'
	DbxUser.sendDbxResetPasswordEmail = function(params, onCompletion){
		return DbxUser.customVerb('sendDbxResetPasswordEmail', params, onCompletion);
	};
	//For Operation 'dbxRequestOTP' with service id 'dbxrequestOTP9343'
	DbxUser.dbxRequestOTP = function(params, onCompletion){
		return DbxUser.customVerb('dbxRequestOTP', params, onCompletion);
	};
	//For Operation 'getGroups' with service id 'getGroups6746'
	DbxUser.getGroups = function(params, onCompletion){
		return DbxUser.customVerb('getGroups', params, onCompletion);
	};
	//For Operation 'smsOTP' with service id 'smsOTP7625'
	DbxUser.smsOTP = function(params, onCompletion){
		return DbxUser.customVerb('smsOTP', params, onCompletion);
	};
	//For Operation 'createDbxCorporateUser' with service id 'createDbxCorporateUser4168'
	DbxUser.createDbxCorporateUser = function(params, onCompletion){
		return DbxUser.customVerb('createDbxCorporateUser', params, onCompletion);
	};
	//For Operation 'getEmpDetails' with service id 'getEmpDetails7471'
	DbxUser.getEmpDetails = function(params, onCompletion){
		return DbxUser.customVerb('getEmpDetails', params, onCompletion);
	};
	//For Operation 'createGroup' with service id 'createGroup8217'
	DbxUser.createGroup = function(params, onCompletion){
		return DbxUser.customVerb('createGroup', params, onCompletion);
	};
	//For Operation 'dbxVerifyOTP' with service id 'dbxverifyOTP9512'
	DbxUser.dbxVerifyOTP = function(params, onCompletion){
		return DbxUser.customVerb('dbxVerifyOTP', params, onCompletion);
	};
	//For Operation 'getBBCustomerServiceLimit' with service id 'getBBCustomerServiceLimit8755'
	DbxUser.getBBCustomerServiceLimit = function(params, onCompletion){
		return DbxUser.customVerb('getBBCustomerServiceLimit', params, onCompletion);
	};
	//For Operation 'verifyDbxUser' with service id 'verifyDbxUser5509'
	DbxUser.verifyDbxUser = function(params, onCompletion){
		return DbxUser.customVerb('verifyDbxUser', params, onCompletion);
	};
	//For Operation 'OFACAndCIPChecks' with service id 'OFACAndCIPChecks2550'
	DbxUser.OFACAndCIPChecks = function(params, onCompletion){
		return DbxUser.customVerb('OFACAndCIPChecks', params, onCompletion);
	};
	//For Operation 'RegisterMBOwner' with service id 'RegisterMBOwner1331'
	DbxUser.RegisterMBOwner = function(params, onCompletion){
		return DbxUser.customVerb('RegisterMBOwner', params, onCompletion);
	};
	//For Operation 'getDbxUserStatus' with service id 'GetDBXUserStatus1869'
	DbxUser.getDbxUserStatus = function(params, onCompletion){
		return DbxUser.customVerb('getDbxUserStatus', params, onCompletion);
	};
	//For Operation 'CoreUpdateUser' with service id 'CoreUpdateUser8697'
	DbxUser.CoreUpdateUser = function(params, onCompletion){
		return DbxUser.customVerb('CoreUpdateUser', params, onCompletion);
	};
	//For Operation 'getOrganizationUserDetails' with service id 'getOrganizationUserDetails6383'
	DbxUser.getOrganizationUserDetails = function(params, onCompletion){
		return DbxUser.customVerb('getOrganizationUserDetails', params, onCompletion);
	};
	//For Operation 'GetOrgEmployeeDetails' with service id 'GetOrganizationEmployeeDetails9544'
	DbxUser.GetOrgEmployeeDetails = function(params, onCompletion){
		return DbxUser.customVerb('GetOrgEmployeeDetails', params, onCompletion);
	};
	//For Operation 'createDbxProspect' with service id 'createDbxProspect7200'
	DbxUser.createDbxProspect = function(params, onCompletion){
		return DbxUser.customVerb('createDbxProspect', params, onCompletion);
	};
	//For Operation 'CreateDbxMicroBusinessOwner' with service id 'createMicroBusinessOwner4821'
	DbxUser.CreateDbxMicroBusinessOwner = function(params, onCompletion){
		return DbxUser.customVerb('CreateDbxMicroBusinessOwner', params, onCompletion);
	};
	//For Operation 'downloadEAgreementPdf' with service id 'GetEAgreementPdfDownloaded2866'
	DbxUser.downloadEAgreementPdf = function(params, onCompletion){
		return DbxUser.customVerb('downloadEAgreementPdf', params, onCompletion);
	};
	//For Operation 'createBBCustomerServiceLimit' with service id 'createBBCustomerServiceLimit1793'
	DbxUser.createBBCustomerServiceLimit = function(params, onCompletion){
		return DbxUser.customVerb('createBBCustomerServiceLimit', params, onCompletion);
	};
	//For Operation 'updateDbxCustomer' with service id 'updateDbxCustomer6546'
	DbxUser.updateDbxCustomer = function(params, onCompletion){
		return DbxUser.customVerb('updateDbxCustomer', params, onCompletion);
	};
	//For Operation 'getEAgreementPdfDownloaded' with service id 'GetEAgreementPdfDownloaded1446'
	DbxUser.getEAgreementPdfDownloaded = function(params, onCompletion){
		return DbxUser.customVerb('getEAgreementPdfDownloaded', params, onCompletion);
	};
	//For Operation 'editBBCustomerServiceLimit' with service id 'editBBCustomerServiceLimit8796'
	DbxUser.editBBCustomerServiceLimit = function(params, onCompletion){
		return DbxUser.customVerb('editBBCustomerServiceLimit', params, onCompletion);
	};
	//For Operation 'createDbxCustomer' with service id 'CreateDbxUserNew5961'
	DbxUser.createDbxCustomer = function(params, onCompletion){
		return DbxUser.customVerb('createDbxCustomer', params, onCompletion);
	};
	//For Operation 'sendKMSSMS' with service id 'sendSMS1387'
	DbxUser.sendKMSSMS = function(params, onCompletion){
		return DbxUser.customVerb('sendKMSSMS', params, onCompletion);
	};
	//For Operation 'SetOrgEmployeePassword' with service id 'SetOrgEmployeePassword8673'
	DbxUser.SetOrgEmployeePassword = function(params, onCompletion){
		return DbxUser.customVerb('SetOrgEmployeePassword', params, onCompletion);
	};
	//For Operation 'getApplicantInfo' with service id 'getApplicantInfo3967'
	DbxUser.getApplicantInfo = function(params, onCompletion){
		return DbxUser.customVerb('getApplicantInfo', params, onCompletion);
	};
	
	var relations = [
	];
	
	DbxUser.relations = relations;
	
	DbxUser.prototype.isValid = function(){
		return DbxUser.isValid(this);
	};
	
	DbxUser.prototype.objModelName = "DbxUser";
	
	return DbxUser;
});