define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		id : function(val, state){
			state['id'] = val;
		},
		Name : function(val, state){
			state['Name'] = val;
		},
		Description : function(val, state){
			state['Description'] = val;
		},
		Type_Id : function(val, state){
			state['Type_Id'] = val;
		},
		Organization_id : function(val, state){
			state['Organization_id'] = val;
		},
		Taxid : function(val, state){
			state['Taxid'] = val;
		},
		Membership_id : function(val, state){
			state['Membership_id'] = val;
		},
		Sequence : function(val, state){
			state['Sequence'] = val;
		},
		Value : function(val, state){
			state['Value'] = val;
		},
		Extension : function(val, state){
			state['Extension'] = val;
		},
		IsPreferredContactMethod : function(val, state){
			state['IsPreferredContactMethod'] = val;
		},
		PreferredContactTime : function(val, state){
			state['PreferredContactTime'] = val;
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
		DurationOfStay : function(val, state){
			state['DurationOfStay'] = val;
		},
		IsPrimary : function(val, state){
			state['IsPrimary'] = val;
		},
		contactnumber : function(val, state){
			state['contactnumber'] = val;
		},
		emailid : function(val, state){
			state['emailid'] = val;
		},
		addressLine1 : function(val, state){
			state['addressLine1'] = val;
		},
		addressLine2 : function(val, state){
			state['addressLine2'] = val;
		},
		zipCode : function(val, state){
			state['zipCode'] = val;
		},
		cityName : function(val, state){
			state['cityName'] = val;
		},
		country : function(val, state){
			state['country'] = val;
		},
		state : function(val, state){
			state['state'] = val;
		},
		Email : function(val, state){
			state['Email'] = val;
		},
		Tin : function(val, state){
			state['Tin'] = val;
		},
		searchType : function(val, state){
			state['searchType'] = val;
		},
		errorCode : function(val, state){
			state['errorCode'] = val;
		},
		errorMessage : function(val, state){
			state['errorMessage'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		Phone : function(val, state){
			state['Phone'] = val;
		},
		searchString : function(val, state){
			state['searchString'] = val;
		},
		order : function(val, state){
			state['order'] = val;
		},
		sortBy : function(val, state){
			state['sortBy'] = val;
		},
		offset : function(val, state){
			state['offset'] = val;
		},
		limit : function(val, state){
			state['limit'] = val;
		},
		Type : function(val, state){
			state['Type'] = val;
		},
		Communication : function(val, state){
			state['Communication'] = val;
		},
		Address : function(val, state){
			state['Address'] = val;
		},
		Owner : function(val, state){
			state['Owner'] = val;
		},
		Membership : function(val, state){
			state['Membership'] = val;
		},
		AccountsList : function(val, state){
			state['AccountsList'] = val;
		},
		EAgreementRequired : function(val, state){
			state['EAgreementRequired'] = val;
		},
		LastName : function(val, state){
			state['LastName'] = val;
		},
		MiddleName : function(val, state){
			state['MiddleName'] = val;
		},
		FirstName : function(val, state){
			state['FirstName'] = val;
		},
		status : function(val, state){
			state['status'] = val;
		},
		Lastlogintime : function(val, state){
			state['Lastlogintime'] = val;
		},
		role_id : function(val, state){
			state['role_id'] = val;
		},
		DOB : function(val, state){
			state['DOB'] = val;
		},
		Ssn : function(val, state){
			state['Ssn'] = val;
		},
		TypeName : function(val, state){
			state['TypeName'] = val;
		},
		DrivingLicenseNumber : function(val, state){
			state['DrivingLicenseNumber'] = val;
		},
		DateOfBirth : function(val, state){
			state['DateOfBirth'] = val;
		},
		isExists : function(val, state){
			state['isExists'] = val;
		},
		Account_id : function(val, state){
			state['Account_id'] = val;
		},
		accountID : function(val, state){
			state['accountID'] = val;
		},
		addressId : function(val, state){
			state['addressId'] = val;
		},
	};
	
	
	//Create the Model Class
	function Organization(defaultValues){
		var privateState = {};
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.Name = defaultValues?(defaultValues["Name"]?defaultValues["Name"]:null):null;
			privateState.Description = defaultValues?(defaultValues["Description"]?defaultValues["Description"]:null):null;
			privateState.Type_Id = defaultValues?(defaultValues["Type_Id"]?defaultValues["Type_Id"]:null):null;
			privateState.Organization_id = defaultValues?(defaultValues["Organization_id"]?defaultValues["Organization_id"]:null):null;
			privateState.Taxid = defaultValues?(defaultValues["Taxid"]?defaultValues["Taxid"]:null):null;
			privateState.Membership_id = defaultValues?(defaultValues["Membership_id"]?defaultValues["Membership_id"]:null):null;
			privateState.Sequence = defaultValues?(defaultValues["Sequence"]?defaultValues["Sequence"]:null):null;
			privateState.Value = defaultValues?(defaultValues["Value"]?defaultValues["Value"]:null):null;
			privateState.Extension = defaultValues?(defaultValues["Extension"]?defaultValues["Extension"]:null):null;
			privateState.IsPreferredContactMethod = defaultValues?(defaultValues["IsPreferredContactMethod"]?defaultValues["IsPreferredContactMethod"]:null):null;
			privateState.PreferredContactTime = defaultValues?(defaultValues["PreferredContactTime"]?defaultValues["PreferredContactTime"]:null):null;
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.modifiedby = defaultValues?(defaultValues["modifiedby"]?defaultValues["modifiedby"]:null):null;
			privateState.createdts = defaultValues?(defaultValues["createdts"]?defaultValues["createdts"]:null):null;
			privateState.lastmodifiedts = defaultValues?(defaultValues["lastmodifiedts"]?defaultValues["lastmodifiedts"]:null):null;
			privateState.synctimestamp = defaultValues?(defaultValues["synctimestamp"]?defaultValues["synctimestamp"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
			privateState.DurationOfStay = defaultValues?(defaultValues["DurationOfStay"]?defaultValues["DurationOfStay"]:null):null;
			privateState.IsPrimary = defaultValues?(defaultValues["IsPrimary"]?defaultValues["IsPrimary"]:null):null;
			privateState.contactnumber = defaultValues?(defaultValues["contactnumber"]?defaultValues["contactnumber"]:null):null;
			privateState.emailid = defaultValues?(defaultValues["emailid"]?defaultValues["emailid"]:null):null;
			privateState.addressLine1 = defaultValues?(defaultValues["addressLine1"]?defaultValues["addressLine1"]:null):null;
			privateState.addressLine2 = defaultValues?(defaultValues["addressLine2"]?defaultValues["addressLine2"]:null):null;
			privateState.zipCode = defaultValues?(defaultValues["zipCode"]?defaultValues["zipCode"]:null):null;
			privateState.cityName = defaultValues?(defaultValues["cityName"]?defaultValues["cityName"]:null):null;
			privateState.country = defaultValues?(defaultValues["country"]?defaultValues["country"]:null):null;
			privateState.state = defaultValues?(defaultValues["state"]?defaultValues["state"]:null):null;
			privateState.Email = defaultValues?(defaultValues["Email"]?defaultValues["Email"]:null):null;
			privateState.Tin = defaultValues?(defaultValues["Tin"]?defaultValues["Tin"]:null):null;
			privateState.searchType = defaultValues?(defaultValues["searchType"]?defaultValues["searchType"]:null):null;
			privateState.errorCode = defaultValues?(defaultValues["errorCode"]?defaultValues["errorCode"]:null):null;
			privateState.errorMessage = defaultValues?(defaultValues["errorMessage"]?defaultValues["errorMessage"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.Phone = defaultValues?(defaultValues["Phone"]?defaultValues["Phone"]:null):null;
			privateState.searchString = defaultValues?(defaultValues["searchString"]?defaultValues["searchString"]:null):null;
			privateState.order = defaultValues?(defaultValues["order"]?defaultValues["order"]:null):null;
			privateState.sortBy = defaultValues?(defaultValues["sortBy"]?defaultValues["sortBy"]:null):null;
			privateState.offset = defaultValues?(defaultValues["offset"]?defaultValues["offset"]:null):null;
			privateState.limit = defaultValues?(defaultValues["limit"]?defaultValues["limit"]:null):null;
			privateState.Type = defaultValues?(defaultValues["Type"]?defaultValues["Type"]:null):null;
			privateState.Communication = defaultValues?(defaultValues["Communication"]?defaultValues["Communication"]:null):null;
			privateState.Address = defaultValues?(defaultValues["Address"]?defaultValues["Address"]:null):null;
			privateState.Owner = defaultValues?(defaultValues["Owner"]?defaultValues["Owner"]:null):null;
			privateState.Membership = defaultValues?(defaultValues["Membership"]?defaultValues["Membership"]:null):null;
			privateState.AccountsList = defaultValues?(defaultValues["AccountsList"]?defaultValues["AccountsList"]:null):null;
			privateState.EAgreementRequired = defaultValues?(defaultValues["EAgreementRequired"]?defaultValues["EAgreementRequired"]:null):null;
			privateState.LastName = defaultValues?(defaultValues["LastName"]?defaultValues["LastName"]:null):null;
			privateState.MiddleName = defaultValues?(defaultValues["MiddleName"]?defaultValues["MiddleName"]:null):null;
			privateState.FirstName = defaultValues?(defaultValues["FirstName"]?defaultValues["FirstName"]:null):null;
			privateState.status = defaultValues?(defaultValues["status"]?defaultValues["status"]:null):null;
			privateState.Lastlogintime = defaultValues?(defaultValues["Lastlogintime"]?defaultValues["Lastlogintime"]:null):null;
			privateState.role_id = defaultValues?(defaultValues["role_id"]?defaultValues["role_id"]:null):null;
			privateState.DOB = defaultValues?(defaultValues["DOB"]?defaultValues["DOB"]:null):null;
			privateState.Ssn = defaultValues?(defaultValues["Ssn"]?defaultValues["Ssn"]:null):null;
			privateState.TypeName = defaultValues?(defaultValues["TypeName"]?defaultValues["TypeName"]:null):null;
			privateState.DrivingLicenseNumber = defaultValues?(defaultValues["DrivingLicenseNumber"]?defaultValues["DrivingLicenseNumber"]:null):null;
			privateState.DateOfBirth = defaultValues?(defaultValues["DateOfBirth"]?defaultValues["DateOfBirth"]:null):null;
			privateState.isExists = defaultValues?(defaultValues["isExists"]?defaultValues["isExists"]:null):null;
			privateState.Account_id = defaultValues?(defaultValues["Account_id"]?defaultValues["Account_id"]:null):null;
			privateState.accountID = defaultValues?(defaultValues["accountID"]?defaultValues["accountID"]:null):null;
			privateState.addressId = defaultValues?(defaultValues["addressId"]?defaultValues["addressId"]:null):null;
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
				"Name" : {
					get : function(){return privateState.Name},
					set : function(val){
						setterFunctions['Name'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Description" : {
					get : function(){return privateState.Description},
					set : function(val){
						setterFunctions['Description'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Type_Id" : {
					get : function(){return privateState.Type_Id},
					set : function(val){
						setterFunctions['Type_Id'].call(this,val,privateState);
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
				"Taxid" : {
					get : function(){return privateState.Taxid},
					set : function(val){
						setterFunctions['Taxid'].call(this,val,privateState);
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
				"Sequence" : {
					get : function(){return privateState.Sequence},
					set : function(val){
						setterFunctions['Sequence'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Value" : {
					get : function(){return privateState.Value},
					set : function(val){
						setterFunctions['Value'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Extension" : {
					get : function(){return privateState.Extension},
					set : function(val){
						setterFunctions['Extension'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsPreferredContactMethod" : {
					get : function(){return privateState.IsPreferredContactMethod},
					set : function(val){
						setterFunctions['IsPreferredContactMethod'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"PreferredContactTime" : {
					get : function(){return privateState.PreferredContactTime},
					set : function(val){
						setterFunctions['PreferredContactTime'].call(this,val,privateState);
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
				"DurationOfStay" : {
					get : function(){return privateState.DurationOfStay},
					set : function(val){
						setterFunctions['DurationOfStay'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsPrimary" : {
					get : function(){return privateState.IsPrimary},
					set : function(val){
						setterFunctions['IsPrimary'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"contactnumber" : {
					get : function(){return privateState.contactnumber},
					set : function(val){
						setterFunctions['contactnumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"emailid" : {
					get : function(){return privateState.emailid},
					set : function(val){
						setterFunctions['emailid'].call(this,val,privateState);
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
				"zipCode" : {
					get : function(){return privateState.zipCode},
					set : function(val){
						setterFunctions['zipCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cityName" : {
					get : function(){return privateState.cityName},
					set : function(val){
						setterFunctions['cityName'].call(this,val,privateState);
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
				"state" : {
					get : function(){return privateState.state},
					set : function(val){
						setterFunctions['state'].call(this,val,privateState);
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
				"Tin" : {
					get : function(){return privateState.Tin},
					set : function(val){
						setterFunctions['Tin'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"searchType" : {
					get : function(){return privateState.searchType},
					set : function(val){
						setterFunctions['searchType'].call(this,val,privateState);
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
				"errorMessage" : {
					get : function(){return privateState.errorMessage},
					set : function(val){
						setterFunctions['errorMessage'].call(this,val,privateState);
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
				"Phone" : {
					get : function(){return privateState.Phone},
					set : function(val){
						setterFunctions['Phone'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"searchString" : {
					get : function(){return privateState.searchString},
					set : function(val){
						setterFunctions['searchString'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"order" : {
					get : function(){return privateState.order},
					set : function(val){
						setterFunctions['order'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"sortBy" : {
					get : function(){return privateState.sortBy},
					set : function(val){
						setterFunctions['sortBy'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"offset" : {
					get : function(){return privateState.offset},
					set : function(val){
						setterFunctions['offset'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"limit" : {
					get : function(){return privateState.limit},
					set : function(val){
						setterFunctions['limit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Type" : {
					get : function(){return privateState.Type},
					set : function(val){
						setterFunctions['Type'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Communication" : {
					get : function(){return privateState.Communication},
					set : function(val){
						setterFunctions['Communication'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Address" : {
					get : function(){return privateState.Address},
					set : function(val){
						setterFunctions['Address'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Owner" : {
					get : function(){return privateState.Owner},
					set : function(val){
						setterFunctions['Owner'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Membership" : {
					get : function(){return privateState.Membership},
					set : function(val){
						setterFunctions['Membership'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"AccountsList" : {
					get : function(){return privateState.AccountsList},
					set : function(val){
						setterFunctions['AccountsList'].call(this,val,privateState);
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
				"LastName" : {
					get : function(){return privateState.LastName},
					set : function(val){
						setterFunctions['LastName'].call(this,val,privateState);
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
				"FirstName" : {
					get : function(){return privateState.FirstName},
					set : function(val){
						setterFunctions['FirstName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"status" : {
					get : function(){return privateState.status},
					set : function(val){
						setterFunctions['status'].call(this,val,privateState);
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
				"role_id" : {
					get : function(){return privateState.role_id},
					set : function(val){
						setterFunctions['role_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"DOB" : {
					get : function(){return privateState.DOB},
					set : function(val){
						setterFunctions['DOB'].call(this,val,privateState);
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
				"TypeName" : {
					get : function(){return privateState.TypeName},
					set : function(val){
						setterFunctions['TypeName'].call(this,val,privateState);
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
				"DateOfBirth" : {
					get : function(){return privateState.DateOfBirth},
					set : function(val){
						setterFunctions['DateOfBirth'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isExists" : {
					get : function(){return privateState.isExists},
					set : function(val){
						setterFunctions['isExists'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Account_id" : {
					get : function(){return privateState.Account_id},
					set : function(val){
						setterFunctions['Account_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountID" : {
					get : function(){return privateState.accountID},
					set : function(val){
						setterFunctions['accountID'].call(this,val,privateState);
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
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Organization);
	
	//Create new class level validator object
	BaseModel.Validator.call(Organization);
	
	var registerValidatorBackup = Organization.registerValidator;
	
	Organization.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Organization.isValid(this, propName, val) ){
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
	//For Operation 'updateOrganization' with service id 'UpdateOrganisation5850'
	Organization.updateOrganization = function(params, onCompletion){
		return Organization.customVerb('updateOrganization', params, onCompletion);
	};
	//For Operation 'verifyDbxOrganizationUser' with service id 'verifyOraganisationUser3522'
	Organization.verifyDbxOrganizationUser = function(params, onCompletion){
		return Organization.customVerb('verifyDbxOrganizationUser', params, onCompletion);
	};
	//For Operation 'getDbxOrganizationUsers' with service id 'GetOrganisationEmployes9984'
	Organization.getDbxOrganizationUsers = function(params, onCompletion){
		return Organization.customVerb('getDbxOrganizationUsers', params, onCompletion);
	};
	//For Operation 'createDbxOrganization' with service id 'CreateOrganisation3104'
	Organization.createDbxOrganization = function(params, onCompletion){
		return Organization.customVerb('createDbxOrganization', params, onCompletion);
	};
	//For Operation 'getDbxOrganizationDetails' with service id 'GetOrganisationDetails4108'
	Organization.getDbxOrganizationDetails = function(params, onCompletion){
		return Organization.customVerb('getDbxOrganizationDetails', params, onCompletion);
	};
	//For Operation 'getOrganizationName' with service id 'getOrganizationName9845'
	Organization.getOrganizationName = function(params, onCompletion){
		return Organization.customVerb('getOrganizationName', params, onCompletion);
	};
	//For Operation 'editDbxOrganization' with service id 'UpdateOrganisation7224'
	Organization.editDbxOrganization = function(params, onCompletion){
		return Organization.customVerb('editDbxOrganization', params, onCompletion);
	};
	//For Operation 'validateTin' with service id 'ValidateTin7223'
	Organization.validateTin = function(params, onCompletion){
		return Organization.customVerb('validateTin', params, onCompletion);
	};
	//For Operation 'createOrganization' with service id 'CreateOrganisation1230'
	Organization.createOrganization = function(params, onCompletion){
		return Organization.customVerb('createOrganization', params, onCompletion);
	};
	
	var relations = [
	];
	
	Organization.relations = relations;
	
	Organization.prototype.isValid = function(){
		return Organization.isValid(this);
	};
	
	Organization.prototype.objModelName = "Organization";
	
	return Organization;
});