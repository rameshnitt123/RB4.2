define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountId : function(val, state){
			state['accountId'] = val;
		},
		Action : function(val, state){
			state['Action'] = val;
		},
		cardHolderName : function(val, state){
			state['cardHolderName'] = val;
		},
		cardId : function(val, state){
			state['cardId'] = val;
		},
		cardNumber : function(val, state){
			state['cardNumber'] = val;
		},
		cardStatus : function(val, state){
			state['cardStatus'] = val;
		},
		cardType : function(val, state){
			state['cardType'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		expiryDate : function(val, state){
			state['expiryDate'] = val;
		},
		Reason : function(val, state){
			state['Reason'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		userId : function(val, state){
			state['userId'] = val;
		},
		userName : function(val, state){
			state['userName'] = val;
		},
		creditLimit : function(val, state){
			state['creditLimit'] = val;
		},
		availableCredit : function(val, state){
			state['availableCredit'] = val;
		},
		serviceProvider : function(val, state){
			state['serviceProvider'] = val;
		},
		billingAddress : function(val, state){
			state['billingAddress'] = val;
		},
		cardProductName : function(val, state){
			state['cardProductName'] = val;
		},
		secondaryCardHolder : function(val, state){
			state['secondaryCardHolder'] = val;
		},
		withdrawlLimit : function(val, state){
			state['withdrawlLimit'] = val;
		},
		accountNumber : function(val, state){
			state['accountNumber'] = val;
		},
		accountName : function(val, state){
			state['accountName'] = val;
		},
		maskedAccountNumber : function(val, state){
			state['maskedAccountNumber'] = val;
		},
		maskedCardNumber : function(val, state){
			state['maskedCardNumber'] = val;
		},
		isInternational : function(val, state){
			state['isInternational'] = val;
		},
		ids : function(val, state){
			state['ids'] = val;
		},
		Destinations : function(val, state){
			state['Destinations'] = val;
		},
		Cards : function(val, state){
			state['Cards'] = val;
		},
		Channel_id : function(val, state){
			state['Channel_id'] = val;
		},
		StartDate : function(val, state){
			state['StartDate'] = val;
		},
		EndDate : function(val, state){
			state['EndDate'] = val;
		},
		additionNotes : function(val, state){
			state['additionNotes'] = val;
		},
		phonenumber : function(val, state){
			state['phonenumber'] = val;
		},
		request_id : function(val, state){
			state['request_id'] = val;
		},
		bankName : function(val, state){
			state['bankName'] = val;
		},
		AccountType : function(val, state){
			state['AccountType'] = val;
		},
		RequestCode : function(val, state){
			state['RequestCode'] = val;
		},
		RequestReason : function(val, state){
			state['RequestReason'] = val;
		},
		Channel : function(val, state){
			state['Channel'] = val;
		},
		Address_id : function(val, state){
			state['Address_id'] = val;
		},
		communication_id : function(val, state){
			state['communication_id'] = val;
		},
		CardNumbers : function(val, state){
			state['CardNumbers'] = val;
		},
		lastNinetyDays : function(val, state){
			state['lastNinetyDays'] = val;
		},
	};
	
	
	//Create the Model Class
	function Cards(defaultValues){
		var privateState = {};
			privateState.accountId = defaultValues?(defaultValues["accountId"]?defaultValues["accountId"]:null):null;
			privateState.Action = defaultValues?(defaultValues["Action"]?defaultValues["Action"]:null):null;
			privateState.cardHolderName = defaultValues?(defaultValues["cardHolderName"]?defaultValues["cardHolderName"]:null):null;
			privateState.cardId = defaultValues?(defaultValues["cardId"]?defaultValues["cardId"]:null):null;
			privateState.cardNumber = defaultValues?(defaultValues["cardNumber"]?defaultValues["cardNumber"]:null):null;
			privateState.cardStatus = defaultValues?(defaultValues["cardStatus"]?defaultValues["cardStatus"]:null):null;
			privateState.cardType = defaultValues?(defaultValues["cardType"]?defaultValues["cardType"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.expiryDate = defaultValues?(defaultValues["expiryDate"]?defaultValues["expiryDate"]:null):null;
			privateState.Reason = defaultValues?(defaultValues["Reason"]?defaultValues["Reason"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.userId = defaultValues?(defaultValues["userId"]?defaultValues["userId"]:null):null;
			privateState.userName = defaultValues?(defaultValues["userName"]?defaultValues["userName"]:null):null;
			privateState.creditLimit = defaultValues?(defaultValues["creditLimit"]?defaultValues["creditLimit"]:null):null;
			privateState.availableCredit = defaultValues?(defaultValues["availableCredit"]?defaultValues["availableCredit"]:null):null;
			privateState.serviceProvider = defaultValues?(defaultValues["serviceProvider"]?defaultValues["serviceProvider"]:null):null;
			privateState.billingAddress = defaultValues?(defaultValues["billingAddress"]?defaultValues["billingAddress"]:null):null;
			privateState.cardProductName = defaultValues?(defaultValues["cardProductName"]?defaultValues["cardProductName"]:null):null;
			privateState.secondaryCardHolder = defaultValues?(defaultValues["secondaryCardHolder"]?defaultValues["secondaryCardHolder"]:null):null;
			privateState.withdrawlLimit = defaultValues?(defaultValues["withdrawlLimit"]?defaultValues["withdrawlLimit"]:null):null;
			privateState.accountNumber = defaultValues?(defaultValues["accountNumber"]?defaultValues["accountNumber"]:null):null;
			privateState.accountName = defaultValues?(defaultValues["accountName"]?defaultValues["accountName"]:null):null;
			privateState.maskedAccountNumber = defaultValues?(defaultValues["maskedAccountNumber"]?defaultValues["maskedAccountNumber"]:null):null;
			privateState.maskedCardNumber = defaultValues?(defaultValues["maskedCardNumber"]?defaultValues["maskedCardNumber"]:null):null;
			privateState.isInternational = defaultValues?(defaultValues["isInternational"]?defaultValues["isInternational"]:null):null;
			privateState.ids = defaultValues?(defaultValues["ids"]?defaultValues["ids"]:null):null;
			privateState.Destinations = defaultValues?(defaultValues["Destinations"]?defaultValues["Destinations"]:null):null;
			privateState.Cards = defaultValues?(defaultValues["Cards"]?defaultValues["Cards"]:null):null;
			privateState.Channel_id = defaultValues?(defaultValues["Channel_id"]?defaultValues["Channel_id"]:null):null;
			privateState.StartDate = defaultValues?(defaultValues["StartDate"]?defaultValues["StartDate"]:null):null;
			privateState.EndDate = defaultValues?(defaultValues["EndDate"]?defaultValues["EndDate"]:null):null;
			privateState.additionNotes = defaultValues?(defaultValues["additionNotes"]?defaultValues["additionNotes"]:null):null;
			privateState.phonenumber = defaultValues?(defaultValues["phonenumber"]?defaultValues["phonenumber"]:null):null;
			privateState.request_id = defaultValues?(defaultValues["request_id"]?defaultValues["request_id"]:null):null;
			privateState.bankName = defaultValues?(defaultValues["bankName"]?defaultValues["bankName"]:null):null;
			privateState.AccountType = defaultValues?(defaultValues["AccountType"]?defaultValues["AccountType"]:null):null;
			privateState.RequestCode = defaultValues?(defaultValues["RequestCode"]?defaultValues["RequestCode"]:null):null;
			privateState.RequestReason = defaultValues?(defaultValues["RequestReason"]?defaultValues["RequestReason"]:null):null;
			privateState.Channel = defaultValues?(defaultValues["Channel"]?defaultValues["Channel"]:null):null;
			privateState.Address_id = defaultValues?(defaultValues["Address_id"]?defaultValues["Address_id"]:null):null;
			privateState.communication_id = defaultValues?(defaultValues["communication_id"]?defaultValues["communication_id"]:null):null;
			privateState.CardNumbers = defaultValues?(defaultValues["CardNumbers"]?defaultValues["CardNumbers"]:null):null;
			privateState.lastNinetyDays = defaultValues?(defaultValues["lastNinetyDays"]?defaultValues["lastNinetyDays"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"accountId" : {
					get : function(){return privateState.accountId},
					set : function(val){
						setterFunctions['accountId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Action" : {
					get : function(){return privateState.Action},
					set : function(val){
						setterFunctions['Action'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardHolderName" : {
					get : function(){return privateState.cardHolderName},
					set : function(val){
						setterFunctions['cardHolderName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardId" : {
					get : function(){return privateState.cardId},
					set : function(val){
						setterFunctions['cardId'].call(this,val,privateState);
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
				"cardStatus" : {
					get : function(){return privateState.cardStatus},
					set : function(val){
						setterFunctions['cardStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardType" : {
					get : function(){return privateState.cardType},
					set : function(val){
						setterFunctions['cardType'].call(this,val,privateState);
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
				"expiryDate" : {
					get : function(){return privateState.expiryDate},
					set : function(val){
						setterFunctions['expiryDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Reason" : {
					get : function(){return privateState.Reason},
					set : function(val){
						setterFunctions['Reason'].call(this,val,privateState);
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
				"userId" : {
					get : function(){return privateState.userId},
					set : function(val){
						setterFunctions['userId'].call(this,val,privateState);
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
				"creditLimit" : {
					get : function(){return privateState.creditLimit},
					set : function(val){
						setterFunctions['creditLimit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"availableCredit" : {
					get : function(){return privateState.availableCredit},
					set : function(val){
						setterFunctions['availableCredit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"serviceProvider" : {
					get : function(){return privateState.serviceProvider},
					set : function(val){
						setterFunctions['serviceProvider'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billingAddress" : {
					get : function(){return privateState.billingAddress},
					set : function(val){
						setterFunctions['billingAddress'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cardProductName" : {
					get : function(){return privateState.cardProductName},
					set : function(val){
						setterFunctions['cardProductName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"secondaryCardHolder" : {
					get : function(){return privateState.secondaryCardHolder},
					set : function(val){
						setterFunctions['secondaryCardHolder'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"withdrawlLimit" : {
					get : function(){return privateState.withdrawlLimit},
					set : function(val){
						setterFunctions['withdrawlLimit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountNumber" : {
					get : function(){return privateState.accountNumber},
					set : function(val){
						setterFunctions['accountNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountName" : {
					get : function(){return privateState.accountName},
					set : function(val){
						setterFunctions['accountName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"maskedAccountNumber" : {
					get : function(){return privateState.maskedAccountNumber},
					set : function(val){
						setterFunctions['maskedAccountNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"maskedCardNumber" : {
					get : function(){return privateState.maskedCardNumber},
					set : function(val){
						setterFunctions['maskedCardNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isInternational" : {
					get : function(){return privateState.isInternational},
					set : function(val){
						setterFunctions['isInternational'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ids" : {
					get : function(){return privateState.ids},
					set : function(val){
						setterFunctions['ids'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Destinations" : {
					get : function(){return privateState.Destinations},
					set : function(val){
						setterFunctions['Destinations'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Cards" : {
					get : function(){return privateState.Cards},
					set : function(val){
						setterFunctions['Cards'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Channel_id" : {
					get : function(){return privateState.Channel_id},
					set : function(val){
						setterFunctions['Channel_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"StartDate" : {
					get : function(){return privateState.StartDate},
					set : function(val){
						setterFunctions['StartDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"EndDate" : {
					get : function(){return privateState.EndDate},
					set : function(val){
						setterFunctions['EndDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"additionNotes" : {
					get : function(){return privateState.additionNotes},
					set : function(val){
						setterFunctions['additionNotes'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"phonenumber" : {
					get : function(){return privateState.phonenumber},
					set : function(val){
						setterFunctions['phonenumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"request_id" : {
					get : function(){return privateState.request_id},
					set : function(val){
						setterFunctions['request_id'].call(this,val,privateState);
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
				"AccountType" : {
					get : function(){return privateState.AccountType},
					set : function(val){
						setterFunctions['AccountType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"RequestCode" : {
					get : function(){return privateState.RequestCode},
					set : function(val){
						setterFunctions['RequestCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"RequestReason" : {
					get : function(){return privateState.RequestReason},
					set : function(val){
						setterFunctions['RequestReason'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Channel" : {
					get : function(){return privateState.Channel},
					set : function(val){
						setterFunctions['Channel'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Address_id" : {
					get : function(){return privateState.Address_id},
					set : function(val){
						setterFunctions['Address_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"communication_id" : {
					get : function(){return privateState.communication_id},
					set : function(val){
						setterFunctions['communication_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CardNumbers" : {
					get : function(){return privateState.CardNumbers},
					set : function(val){
						setterFunctions['CardNumbers'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastNinetyDays" : {
					get : function(){return privateState.lastNinetyDays},
					set : function(val){
						setterFunctions['lastNinetyDays'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Cards);
	
	//Create new class level validator object
	BaseModel.Validator.call(Cards);
	
	var registerValidatorBackup = Cards.registerValidator;
	
	Cards.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Cards.isValid(this, propName, val) ){
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
	//For Operation 'cancelCard' with service id 'updateCard7127'
	Cards.cancelCard = function(params, onCompletion){
		return Cards.customVerb('cancelCard', params, onCompletion);
	};
	//For Operation 'getCardsForAdmin' with service id 'GetCardsForAdmin1780'
	Cards.getCardsForAdmin = function(params, onCompletion){
		return Cards.customVerb('getCardsForAdmin', params, onCompletion);
	};
	//For Operation 'reportLost' with service id 'updateCard5113'
	Cards.reportLost = function(params, onCompletion){
		return Cards.customVerb('reportLost', params, onCompletion);
	};
	//For Operation 'deleteTravelNotification' with service id 'deleteTravelNotification6950'
	Cards.deleteTravelNotification = function(params, onCompletion){
		return Cards.customVerb('deleteTravelNotification', params, onCompletion);
	};
	//For Operation 'unlockCard' with service id 'updateCard6945'
	Cards.unlockCard = function(params, onCompletion){
		return Cards.customVerb('unlockCard', params, onCompletion);
	};
	//For Operation 'getTravelNotification' with service id 'getTravelNotification2919'
	Cards.getTravelNotification = function(params, onCompletion){
		return Cards.customVerb('getTravelNotification', params, onCompletion);
	};
	//For Operation 'updateCardForAdmin' with service id 'UpdateCardForAdmin3853'
	Cards.updateCardForAdmin = function(params, onCompletion){
		return Cards.customVerb('updateCardForAdmin', params, onCompletion);
	};
	//For Operation 'getTravelNotificationStatus' with service id 'getTravelNotificationStatus8935'
	Cards.getTravelNotificationStatus = function(params, onCompletion){
		return Cards.customVerb('getTravelNotificationStatus', params, onCompletion);
	};
	//For Operation 'createTravelNotification' with service id 'createTravelNotification6410'
	Cards.createTravelNotification = function(params, onCompletion){
		return Cards.customVerb('createTravelNotification', params, onCompletion);
	};
	//For Operation 'updateTravelNotification' with service id 'updateTravelNotification4123'
	Cards.updateTravelNotification = function(params, onCompletion){
		return Cards.customVerb('updateTravelNotification', params, onCompletion);
	};
	//For Operation 'getCardsByUsername' with service id 'getCardsByUsername7853'
	Cards.getCardsByUsername = function(params, onCompletion){
		return Cards.customVerb('getCardsByUsername', params, onCompletion);
	};
	//For Operation 'getCardListForEnrolment' with service id 'getCardListForEnrolment1875'
	Cards.getCardListForEnrolment = function(params, onCompletion){
		return Cards.customVerb('getCardListForEnrolment', params, onCompletion);
	};
	//For Operation 'replaceCard' with service id 'updateCard3212'
	Cards.replaceCard = function(params, onCompletion){
		return Cards.customVerb('replaceCard', params, onCompletion);
	};
	//For Operation 'changePIN' with service id 'updateCard1565'
	Cards.changePIN = function(params, onCompletion){
		return Cards.customVerb('changePIN', params, onCompletion);
	};
	//For Operation 'createCardRequest' with service id 'createCardRequest1362'
	Cards.createCardRequest = function(params, onCompletion){
		return Cards.customVerb('createCardRequest', params, onCompletion);
	};
	//For Operation 'lockCard' with service id 'deleteTransactionsForLockedCard9350'
	Cards.lockCard = function(params, onCompletion){
		return Cards.customVerb('lockCard', params, onCompletion);
	};
	//For Operation 'getActiveCards' with service id 'getActiveCards8542'
	Cards.getActiveCards = function(params, onCompletion){
		return Cards.customVerb('getActiveCards', params, onCompletion);
	};
	
	var relations = [
	];
	
	Cards.relations = relations;
	
	Cards.prototype.isValid = function(){
		return Cards.isValid(this);
	};
	
	Cards.prototype.objModelName = "Cards";
	
	return Cards;
});