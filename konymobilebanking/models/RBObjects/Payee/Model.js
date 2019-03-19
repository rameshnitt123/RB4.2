define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountNumber : function(val, state){
			state['accountNumber'] = val;
		},
		addressLine1 : function(val, state){
			state['addressLine1'] = val;
		},
		addressLine2 : function(val, state){
			state['addressLine2'] = val;
		},
		billDescription : function(val, state){
			state['billDescription'] = val;
		},
		billDueDate : function(val, state){
			state['billDueDate'] = val;
		},
		billerCategory : function(val, state){
			state['billerCategory'] = val;
		},
		billerId : function(val, state){
			state['billerId'] = val;
		},
		billGeneratedDate : function(val, state){
			state['billGeneratedDate'] = val;
		},
		billid : function(val, state){
			state['billid'] = val;
		},
		cityName : function(val, state){
			state['cityName'] = val;
		},
		companyName : function(val, state){
			state['companyName'] = val;
		},
		dueAmount : function(val, state){
			state['dueAmount'] = val;
		},
		EBillEnable : function(val, state){
			state['EBillEnable'] = val;
		},
		eBillStatus : function(val, state){
			state['eBillStatus'] = val;
		},
		eBillSupport : function(val, state){
			state['eBillSupport'] = val;
		},
		ebillURL : function(val, state){
			state['ebillURL'] = val;
		},
		email : function(val, state){
			state['email'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		lastPaidAmount : function(val, state){
			state['lastPaidAmount'] = val;
		},
		lastPaidDate : function(val, state){
			state['lastPaidDate'] = val;
		},
		limit : function(val, state){
			state['limit'] = val;
		},
		nameOnBill : function(val, state){
			state['nameOnBill'] = val;
		},
		notes : function(val, state){
			state['notes'] = val;
		},
		offset : function(val, state){
			state['offset'] = val;
		},
		order : function(val, state){
			state['order'] = val;
		},
		paidAmount : function(val, state){
			state['paidAmount'] = val;
		},
		payeeAccountNumber : function(val, state){
			state['payeeAccountNumber'] = val;
		},
		payeeId : function(val, state){
			state['payeeId'] = val;
		},
		payeeName : function(val, state){
			state['payeeName'] = val;
		},
		payeeNickName : function(val, state){
			state['payeeNickName'] = val;
		},
		phone : function(val, state){
			state['phone'] = val;
		},
		searchString : function(val, state){
			state['searchString'] = val;
		},
		sortBy : function(val, state){
			state['sortBy'] = val;
		},
		state : function(val, state){
			state['state'] = val;
		},
		street : function(val, state){
			state['street'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		zipCode : function(val, state){
			state['zipCode'] = val;
		},
		type : function(val, state){
			state['type'] = val;
		},
		country : function(val, state){
			state['country'] = val;
		},
		swiftCode : function(val, state){
			state['swiftCode'] = val;
		},
		routingCode : function(val, state){
			state['routingCode'] = val;
		},
		bankName : function(val, state){
			state['bankName'] = val;
		},
		bankAddressLine1 : function(val, state){
			state['bankAddressLine1'] = val;
		},
		bankAddressLine2 : function(val, state){
			state['bankAddressLine2'] = val;
		},
		bankCity : function(val, state){
			state['bankCity'] = val;
		},
		bankState : function(val, state){
			state['bankState'] = val;
		},
		bankZip : function(val, state){
			state['bankZip'] = val;
		},
		IBAN : function(val, state){
			state['IBAN'] = val;
		},
		wireAccountType : function(val, state){
			state['wireAccountType'] = val;
		},
		internationalRoutingCode : function(val, state){
			state['internationalRoutingCode'] = val;
		},
		transactionId : function(val, state){
			state['transactionId'] = val;
		},
		isManuallyAdded : function(val, state){
			state['isManuallyAdded'] = val;
		},
		phoneExtension : function(val, state){
			state['phoneExtension'] = val;
		},
		phoneCountryCode : function(val, state){
			state['phoneCountryCode'] = val;
		},
	};
	
	
	//Create the Model Class
	function Payee(defaultValues){
		var privateState = {};
			privateState.accountNumber = defaultValues?(defaultValues["accountNumber"]?defaultValues["accountNumber"]:null):null;
			privateState.addressLine1 = defaultValues?(defaultValues["addressLine1"]?defaultValues["addressLine1"]:null):null;
			privateState.addressLine2 = defaultValues?(defaultValues["addressLine2"]?defaultValues["addressLine2"]:null):null;
			privateState.billDescription = defaultValues?(defaultValues["billDescription"]?defaultValues["billDescription"]:null):null;
			privateState.billDueDate = defaultValues?(defaultValues["billDueDate"]?defaultValues["billDueDate"]:null):null;
			privateState.billerCategory = defaultValues?(defaultValues["billerCategory"]?defaultValues["billerCategory"]:null):null;
			privateState.billerId = defaultValues?(defaultValues["billerId"]?defaultValues["billerId"]:null):null;
			privateState.billGeneratedDate = defaultValues?(defaultValues["billGeneratedDate"]?defaultValues["billGeneratedDate"]:null):null;
			privateState.billid = defaultValues?(defaultValues["billid"]?defaultValues["billid"]:null):null;
			privateState.cityName = defaultValues?(defaultValues["cityName"]?defaultValues["cityName"]:null):null;
			privateState.companyName = defaultValues?(defaultValues["companyName"]?defaultValues["companyName"]:null):null;
			privateState.dueAmount = defaultValues?(defaultValues["dueAmount"]?defaultValues["dueAmount"]:null):null;
			privateState.EBillEnable = defaultValues?(defaultValues["EBillEnable"]?defaultValues["EBillEnable"]:null):null;
			privateState.eBillStatus = defaultValues?(defaultValues["eBillStatus"]?defaultValues["eBillStatus"]:null):null;
			privateState.eBillSupport = defaultValues?(defaultValues["eBillSupport"]?defaultValues["eBillSupport"]:null):null;
			privateState.ebillURL = defaultValues?(defaultValues["ebillURL"]?defaultValues["ebillURL"]:null):null;
			privateState.email = defaultValues?(defaultValues["email"]?defaultValues["email"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.lastPaidAmount = defaultValues?(defaultValues["lastPaidAmount"]?defaultValues["lastPaidAmount"]:null):null;
			privateState.lastPaidDate = defaultValues?(defaultValues["lastPaidDate"]?defaultValues["lastPaidDate"]:null):null;
			privateState.limit = defaultValues?(defaultValues["limit"]?defaultValues["limit"]:null):null;
			privateState.nameOnBill = defaultValues?(defaultValues["nameOnBill"]?defaultValues["nameOnBill"]:null):null;
			privateState.notes = defaultValues?(defaultValues["notes"]?defaultValues["notes"]:null):null;
			privateState.offset = defaultValues?(defaultValues["offset"]?defaultValues["offset"]:null):null;
			privateState.order = defaultValues?(defaultValues["order"]?defaultValues["order"]:null):null;
			privateState.paidAmount = defaultValues?(defaultValues["paidAmount"]?defaultValues["paidAmount"]:null):null;
			privateState.payeeAccountNumber = defaultValues?(defaultValues["payeeAccountNumber"]?defaultValues["payeeAccountNumber"]:null):null;
			privateState.payeeId = defaultValues?(defaultValues["payeeId"]?defaultValues["payeeId"]:null):null;
			privateState.payeeName = defaultValues?(defaultValues["payeeName"]?defaultValues["payeeName"]:null):null;
			privateState.payeeNickName = defaultValues?(defaultValues["payeeNickName"]?defaultValues["payeeNickName"]:null):null;
			privateState.phone = defaultValues?(defaultValues["phone"]?defaultValues["phone"]:null):null;
			privateState.searchString = defaultValues?(defaultValues["searchString"]?defaultValues["searchString"]:null):null;
			privateState.sortBy = defaultValues?(defaultValues["sortBy"]?defaultValues["sortBy"]:null):null;
			privateState.state = defaultValues?(defaultValues["state"]?defaultValues["state"]:null):null;
			privateState.street = defaultValues?(defaultValues["street"]?defaultValues["street"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.zipCode = defaultValues?(defaultValues["zipCode"]?defaultValues["zipCode"]:null):null;
			privateState.type = defaultValues?(defaultValues["type"]?defaultValues["type"]:null):null;
			privateState.country = defaultValues?(defaultValues["country"]?defaultValues["country"]:null):null;
			privateState.swiftCode = defaultValues?(defaultValues["swiftCode"]?defaultValues["swiftCode"]:null):null;
			privateState.routingCode = defaultValues?(defaultValues["routingCode"]?defaultValues["routingCode"]:null):null;
			privateState.bankName = defaultValues?(defaultValues["bankName"]?defaultValues["bankName"]:null):null;
			privateState.bankAddressLine1 = defaultValues?(defaultValues["bankAddressLine1"]?defaultValues["bankAddressLine1"]:null):null;
			privateState.bankAddressLine2 = defaultValues?(defaultValues["bankAddressLine2"]?defaultValues["bankAddressLine2"]:null):null;
			privateState.bankCity = defaultValues?(defaultValues["bankCity"]?defaultValues["bankCity"]:null):null;
			privateState.bankState = defaultValues?(defaultValues["bankState"]?defaultValues["bankState"]:null):null;
			privateState.bankZip = defaultValues?(defaultValues["bankZip"]?defaultValues["bankZip"]:null):null;
			privateState.IBAN = defaultValues?(defaultValues["IBAN"]?defaultValues["IBAN"]:null):null;
			privateState.wireAccountType = defaultValues?(defaultValues["wireAccountType"]?defaultValues["wireAccountType"]:null):null;
			privateState.internationalRoutingCode = defaultValues?(defaultValues["internationalRoutingCode"]?defaultValues["internationalRoutingCode"]:null):null;
			privateState.transactionId = defaultValues?(defaultValues["transactionId"]?defaultValues["transactionId"]:null):null;
			privateState.isManuallyAdded = defaultValues?(defaultValues["isManuallyAdded"]?defaultValues["isManuallyAdded"]:null):null;
			privateState.phoneExtension = defaultValues?(defaultValues["phoneExtension"]?defaultValues["phoneExtension"]:null):null;
			privateState.phoneCountryCode = defaultValues?(defaultValues["phoneCountryCode"]?defaultValues["phoneCountryCode"]:null):null;
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
				"billDescription" : {
					get : function(){return privateState.billDescription},
					set : function(val){
						setterFunctions['billDescription'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billDueDate" : {
					get : function(){return privateState.billDueDate},
					set : function(val){
						setterFunctions['billDueDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billerCategory" : {
					get : function(){return privateState.billerCategory},
					set : function(val){
						setterFunctions['billerCategory'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billerId" : {
					get : function(){return privateState.billerId},
					set : function(val){
						setterFunctions['billerId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billGeneratedDate" : {
					get : function(){return privateState.billGeneratedDate},
					set : function(val){
						setterFunctions['billGeneratedDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billid" : {
					get : function(){return privateState.billid},
					set : function(val){
						setterFunctions['billid'].call(this,val,privateState);
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
				"companyName" : {
					get : function(){return privateState.companyName},
					set : function(val){
						setterFunctions['companyName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dueAmount" : {
					get : function(){return privateState.dueAmount},
					set : function(val){
						setterFunctions['dueAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"EBillEnable" : {
					get : function(){return privateState.EBillEnable},
					set : function(val){
						setterFunctions['EBillEnable'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"eBillStatus" : {
					get : function(){return privateState.eBillStatus},
					set : function(val){
						setterFunctions['eBillStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"eBillSupport" : {
					get : function(){return privateState.eBillSupport},
					set : function(val){
						setterFunctions['eBillSupport'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ebillURL" : {
					get : function(){return privateState.ebillURL},
					set : function(val){
						setterFunctions['ebillURL'].call(this,val,privateState);
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
				"lastPaidAmount" : {
					get : function(){return privateState.lastPaidAmount},
					set : function(val){
						setterFunctions['lastPaidAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastPaidDate" : {
					get : function(){return privateState.lastPaidDate},
					set : function(val){
						setterFunctions['lastPaidDate'].call(this,val,privateState);
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
				"nameOnBill" : {
					get : function(){return privateState.nameOnBill},
					set : function(val){
						setterFunctions['nameOnBill'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"notes" : {
					get : function(){return privateState.notes},
					set : function(val){
						setterFunctions['notes'].call(this,val,privateState);
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
				"order" : {
					get : function(){return privateState.order},
					set : function(val){
						setterFunctions['order'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"paidAmount" : {
					get : function(){return privateState.paidAmount},
					set : function(val){
						setterFunctions['paidAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payeeAccountNumber" : {
					get : function(){return privateState.payeeAccountNumber},
					set : function(val){
						setterFunctions['payeeAccountNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payeeId" : {
					get : function(){return privateState.payeeId},
					set : function(val){
						setterFunctions['payeeId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payeeName" : {
					get : function(){return privateState.payeeName},
					set : function(val){
						setterFunctions['payeeName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payeeNickName" : {
					get : function(){return privateState.payeeNickName},
					set : function(val){
						setterFunctions['payeeNickName'].call(this,val,privateState);
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
				"searchString" : {
					get : function(){return privateState.searchString},
					set : function(val){
						setterFunctions['searchString'].call(this,val,privateState);
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
				"state" : {
					get : function(){return privateState.state},
					set : function(val){
						setterFunctions['state'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"street" : {
					get : function(){return privateState.street},
					set : function(val){
						setterFunctions['street'].call(this,val,privateState);
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
				"zipCode" : {
					get : function(){return privateState.zipCode},
					set : function(val){
						setterFunctions['zipCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"type" : {
					get : function(){return privateState.type},
					set : function(val){
						setterFunctions['type'].call(this,val,privateState);
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
				"swiftCode" : {
					get : function(){return privateState.swiftCode},
					set : function(val){
						setterFunctions['swiftCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"routingCode" : {
					get : function(){return privateState.routingCode},
					set : function(val){
						setterFunctions['routingCode'].call(this,val,privateState);
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
				"bankAddressLine1" : {
					get : function(){return privateState.bankAddressLine1},
					set : function(val){
						setterFunctions['bankAddressLine1'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankAddressLine2" : {
					get : function(){return privateState.bankAddressLine2},
					set : function(val){
						setterFunctions['bankAddressLine2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankCity" : {
					get : function(){return privateState.bankCity},
					set : function(val){
						setterFunctions['bankCity'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankState" : {
					get : function(){return privateState.bankState},
					set : function(val){
						setterFunctions['bankState'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankZip" : {
					get : function(){return privateState.bankZip},
					set : function(val){
						setterFunctions['bankZip'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IBAN" : {
					get : function(){return privateState.IBAN},
					set : function(val){
						setterFunctions['IBAN'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"wireAccountType" : {
					get : function(){return privateState.wireAccountType},
					set : function(val){
						setterFunctions['wireAccountType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"internationalRoutingCode" : {
					get : function(){return privateState.internationalRoutingCode},
					set : function(val){
						setterFunctions['internationalRoutingCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transactionId" : {
					get : function(){return privateState.transactionId},
					set : function(val){
						setterFunctions['transactionId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isManuallyAdded" : {
					get : function(){return privateState.isManuallyAdded},
					set : function(val){
						setterFunctions['isManuallyAdded'].call(this,val,privateState);
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
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Payee);
	
	//Create new class level validator object
	BaseModel.Validator.call(Payee);
	
	var registerValidatorBackup = Payee.registerValidator;
	
	Payee.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Payee.isValid(this, propName, val) ){
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
	//For Operation 'addRecipient' with service id 'addRecipient4934'
	Payee.addRecipient = function(params, onCompletion){
		return Payee.customVerb('addRecipient', params, onCompletion);
	};
	//For Operation 'saveRecipientAfterWireTransfer' with service id 'saveRecipientAfterWireTransfer8598'
	Payee.saveRecipientAfterWireTransfer = function(params, onCompletion){
		return Payee.customVerb('saveRecipientAfterWireTransfer', params, onCompletion);
	};
	//For Operation 'updateRecipient' with service id 'updateRecipient9769'
	Payee.updateRecipient = function(params, onCompletion){
		return Payee.customVerb('updateRecipient', params, onCompletion);
	};
	//For Operation 'getRecentPayee' with service id 'getRecentPayees1821'
	Payee.getRecentPayee = function(params, onCompletion){
		return Payee.customVerb('getRecentPayee', params, onCompletion);
	};
	//For Operation 'getWireTransferRecipient' with service id 'getWireTransferRecipient2530'
	Payee.getWireTransferRecipient = function(params, onCompletion){
		return Payee.customVerb('getWireTransferRecipient', params, onCompletion);
	};
	
	var relations = [
	];
	
	Payee.relations = relations;
	
	Payee.prototype.isValid = function(){
		return Payee.isValid(this);
	};
	
	Payee.prototype.objModelName = "Payee";
	
	return Payee;
});