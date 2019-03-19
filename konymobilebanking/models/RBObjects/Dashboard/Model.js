define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountHolder : function(val, state){
			state['accountHolder'] = val;
		},
		accountID : function(val, state){
			state['accountID'] = val;
		},
		accountli : function(val, state){
			state['accountli'] = val;
		},
		accountName : function(val, state){
			state['accountName'] = val;
		},
		accountPreference : function(val, state){
			state['accountPreference'] = val;
		},
		accountType : function(val, state){
			state['accountType'] = val;
		},
		availableBalance : function(val, state){
			state['availableBalance'] = val;
		},
		availableCredit : function(val, state){
			state['availableCredit'] = val;
		},
		availablePoints : function(val, state){
			state['availablePoints'] = val;
		},
		bankName : function(val, state){
			state['bankName'] = val;
		},
		bondInterest : function(val, state){
			state['bondInterest'] = val;
		},
		bondInterestLastYear : function(val, state){
			state['bondInterestLastYear'] = val;
		},
		bsbNum : function(val, state){
			state['bsbNum'] = val;
		},
		closingDate : function(val, state){
			state['closingDate'] = val;
		},
		creditCardNumber : function(val, state){
			state['creditCardNumber'] = val;
		},
		creditLimit : function(val, state){
			state['creditLimit'] = val;
		},
		currencyCode : function(val, state){
			state['currencyCode'] = val;
		},
		currentAmountDue : function(val, state){
			state['currentAmountDue'] = val;
		},
		currentBalance : function(val, state){
			state['currentBalance'] = val;
		},
		deviceID : function(val, state){
			state['deviceID'] = val;
		},
		dividendLastPaidAmount : function(val, state){
			state['dividendLastPaidAmount'] = val;
		},
		dividendLastPaidDate : function(val, state){
			state['dividendLastPaidDate'] = val;
		},
		dividendPaidYTD : function(val, state){
			state['dividendPaidYTD'] = val;
		},
		dividendRate : function(val, state){
			state['dividendRate'] = val;
		},
		dividendYTD : function(val, state){
			state['dividendYTD'] = val;
		},
		dueDate : function(val, state){
			state['dueDate'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		eStatementEnable : function(val, state){
			state['eStatementEnable'] = val;
		},
		favouriteStatus : function(val, state){
			state['favouriteStatus'] = val;
		},
		interestEarned : function(val, state){
			state['interestEarned'] = val;
		},
		interestPaidLastYear : function(val, state){
			state['interestPaidLastYear'] = val;
		},
		interestPaidPreviousYTD : function(val, state){
			state['interestPaidPreviousYTD'] = val;
		},
		interestPaidYTD : function(val, state){
			state['interestPaidYTD'] = val;
		},
		interestRate : function(val, state){
			state['interestRate'] = val;
		},
		isInternationalAccount : function(val, state){
			state['isInternationalAccount'] = val;
		},
		isPFM : function(val, state){
			state['isPFM'] = val;
		},
		jointHolders : function(val, state){
			state['jointHolders'] = val;
		},
		lastDividendPaidAmount : function(val, state){
			state['lastDividendPaidAmount'] = val;
		},
		lastDividendPaidDate : function(val, state){
			state['lastDividendPaidDate'] = val;
		},
		lastPaymentAmount : function(val, state){
			state['lastPaymentAmount'] = val;
		},
		lastPaymentDate : function(val, state){
			state['lastPaymentDate'] = val;
		},
		lastStatementBalance : function(val, state){
			state['lastStatementBalance'] = val;
		},
		lateFeesDue : function(val, state){
			state['lateFeesDue'] = val;
		},
		maturityAmount : function(val, state){
			state['maturityAmount'] = val;
		},
		maturityDate : function(val, state){
			state['maturityDate'] = val;
		},
		maturityOption : function(val, state){
			state['maturityOption'] = val;
		},
		minimumDue : function(val, state){
			state['minimumDue'] = val;
		},
		nickName : function(val, state){
			state['nickName'] = val;
		},
		openingDate : function(val, state){
			state['openingDate'] = val;
		},
		originalAmount : function(val, state){
			state['originalAmount'] = val;
		},
		outstandingBalance : function(val, state){
			state['outstandingBalance'] = val;
		},
		paymentDue : function(val, state){
			state['paymentDue'] = val;
		},
		paymentMethod : function(val, state){
			state['paymentMethod'] = val;
		},
		paymentTerm : function(val, state){
			state['paymentTerm'] = val;
		},
		payoffAmount : function(val, state){
			state['payoffAmount'] = val;
		},
		payOffCharge : function(val, state){
			state['payOffCharge'] = val;
		},
		pendingDeposit : function(val, state){
			state['pendingDeposit'] = val;
		},
		pendingWithdrawal : function(val, state){
			state['pendingWithdrawal'] = val;
		},
		phoneId : function(val, state){
			state['phoneId'] = val;
		},
		previousYearDividend : function(val, state){
			state['previousYearDividend'] = val;
		},
		previousYearsDividends : function(val, state){
			state['previousYearsDividends'] = val;
		},
		principalBalance : function(val, state){
			state['principalBalance'] = val;
		},
		principalValue : function(val, state){
			state['principalValue'] = val;
		},
		regularPaymentAmount : function(val, state){
			state['regularPaymentAmount'] = val;
		},
		routingNumber : function(val, state){
			state['routingNumber'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		supportBillPay : function(val, state){
			state['supportBillPay'] = val;
		},
		supportCardlessCash : function(val, state){
			state['supportCardlessCash'] = val;
		},
		supportDeposit : function(val, state){
			state['supportDeposit'] = val;
		},
		supportTransferFrom : function(val, state){
			state['supportTransferFrom'] = val;
		},
		supportTransferTo : function(val, state){
			state['supportTransferTo'] = val;
		},
		swiftCode : function(val, state){
			state['swiftCode'] = val;
		},
		totalCreditMonths : function(val, state){
			state['totalCreditMonths'] = val;
		},
		totalDebitsMonth : function(val, state){
			state['totalDebitsMonth'] = val;
		},
		transactionLimit : function(val, state){
			state['transactionLimit'] = val;
		},
		transferLimit : function(val, state){
			state['transferLimit'] = val;
		},
		unpaidInterest : function(val, state){
			state['unpaidInterest'] = val;
		},
		userName : function(val, state){
			state['userName'] = val;
		},
		email : function(val, state){
			state['email'] = val;
		},
		jointAccountHolder1 : function(val, state){
			state['jointAccountHolder1'] = val;
		},
		jointAccountHolder2 : function(val, state){
			state['jointAccountHolder2'] = val;
		},
		bankAddress : function(val, state){
			state['bankAddress'] = val;
		},
		intermediaryBankName : function(val, state){
			state['intermediaryBankName'] = val;
		},
		intermediaryBankAddress : function(val, state){
			state['intermediaryBankAddress'] = val;
		},
		intermediaryBankSwiftCode : function(val, state){
			state['intermediaryBankSwiftCode'] = val;
		},
		statusDesc : function(val, state){
			state['statusDesc'] = val;
		},
		supportChecks : function(val, state){
			state['supportChecks'] = val;
		},
		accountNumber : function(val, state){
			state['accountNumber'] = val;
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
		cardNumber : function(val, state){
			state['cardNumber'] = val;
		},
		city : function(val, state){
			state['city'] = val;
		},
		country : function(val, state){
			state['country'] = val;
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
		countryType : function(val, state){
			state['countryType'] = val;
		},
		error : function(val, state){
			state['error'] = val;
		},
		extension : function(val, state){
			state['extension'] = val;
		},
		id : function(val, state){
			state['id'] = val;
		},
		isPrimary : function(val, state){
			state['isPrimary'] = val;
		},
		phoneNumber : function(val, state){
			state['phoneNumber'] = val;
		},
		receivePromotions : function(val, state){
			state['receivePromotions'] = val;
		},
		type : function(val, state){
			state['type'] = val;
		},
	};
	
	
	//Create the Model Class
	function Dashboard(defaultValues){
		var privateState = {};
			privateState.accountHolder = defaultValues?(defaultValues["accountHolder"]?defaultValues["accountHolder"]:null):null;
			privateState.accountID = defaultValues?(defaultValues["accountID"]?defaultValues["accountID"]:null):null;
			privateState.accountli = defaultValues?(defaultValues["accountli"]?defaultValues["accountli"]:null):null;
			privateState.accountName = defaultValues?(defaultValues["accountName"]?defaultValues["accountName"]:null):null;
			privateState.accountPreference = defaultValues?(defaultValues["accountPreference"]?defaultValues["accountPreference"]:null):null;
			privateState.accountType = defaultValues?(defaultValues["accountType"]?defaultValues["accountType"]:null):null;
			privateState.availableBalance = defaultValues?(defaultValues["availableBalance"]?defaultValues["availableBalance"]:null):null;
			privateState.availableCredit = defaultValues?(defaultValues["availableCredit"]?defaultValues["availableCredit"]:null):null;
			privateState.availablePoints = defaultValues?(defaultValues["availablePoints"]?defaultValues["availablePoints"]:null):null;
			privateState.bankName = defaultValues?(defaultValues["bankName"]?defaultValues["bankName"]:null):null;
			privateState.bondInterest = defaultValues?(defaultValues["bondInterest"]?defaultValues["bondInterest"]:null):null;
			privateState.bondInterestLastYear = defaultValues?(defaultValues["bondInterestLastYear"]?defaultValues["bondInterestLastYear"]:null):null;
			privateState.bsbNum = defaultValues?(defaultValues["bsbNum"]?defaultValues["bsbNum"]:null):null;
			privateState.closingDate = defaultValues?(defaultValues["closingDate"]?defaultValues["closingDate"]:null):null;
			privateState.creditCardNumber = defaultValues?(defaultValues["creditCardNumber"]?defaultValues["creditCardNumber"]:null):null;
			privateState.creditLimit = defaultValues?(defaultValues["creditLimit"]?defaultValues["creditLimit"]:null):null;
			privateState.currencyCode = defaultValues?(defaultValues["currencyCode"]?defaultValues["currencyCode"]:null):null;
			privateState.currentAmountDue = defaultValues?(defaultValues["currentAmountDue"]?defaultValues["currentAmountDue"]:null):null;
			privateState.currentBalance = defaultValues?(defaultValues["currentBalance"]?defaultValues["currentBalance"]:null):null;
			privateState.deviceID = defaultValues?(defaultValues["deviceID"]?defaultValues["deviceID"]:null):null;
			privateState.dividendLastPaidAmount = defaultValues?(defaultValues["dividendLastPaidAmount"]?defaultValues["dividendLastPaidAmount"]:null):null;
			privateState.dividendLastPaidDate = defaultValues?(defaultValues["dividendLastPaidDate"]?defaultValues["dividendLastPaidDate"]:null):null;
			privateState.dividendPaidYTD = defaultValues?(defaultValues["dividendPaidYTD"]?defaultValues["dividendPaidYTD"]:null):null;
			privateState.dividendRate = defaultValues?(defaultValues["dividendRate"]?defaultValues["dividendRate"]:null):null;
			privateState.dividendYTD = defaultValues?(defaultValues["dividendYTD"]?defaultValues["dividendYTD"]:null):null;
			privateState.dueDate = defaultValues?(defaultValues["dueDate"]?defaultValues["dueDate"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.eStatementEnable = defaultValues?(defaultValues["eStatementEnable"]?defaultValues["eStatementEnable"]:null):null;
			privateState.favouriteStatus = defaultValues?(defaultValues["favouriteStatus"]?defaultValues["favouriteStatus"]:null):null;
			privateState.interestEarned = defaultValues?(defaultValues["interestEarned"]?defaultValues["interestEarned"]:null):null;
			privateState.interestPaidLastYear = defaultValues?(defaultValues["interestPaidLastYear"]?defaultValues["interestPaidLastYear"]:null):null;
			privateState.interestPaidPreviousYTD = defaultValues?(defaultValues["interestPaidPreviousYTD"]?defaultValues["interestPaidPreviousYTD"]:null):null;
			privateState.interestPaidYTD = defaultValues?(defaultValues["interestPaidYTD"]?defaultValues["interestPaidYTD"]:null):null;
			privateState.interestRate = defaultValues?(defaultValues["interestRate"]?defaultValues["interestRate"]:null):null;
			privateState.isInternationalAccount = defaultValues?(defaultValues["isInternationalAccount"]?defaultValues["isInternationalAccount"]:null):null;
			privateState.isPFM = defaultValues?(defaultValues["isPFM"]?defaultValues["isPFM"]:null):null;
			privateState.jointHolders = defaultValues?(defaultValues["jointHolders"]?defaultValues["jointHolders"]:null):null;
			privateState.lastDividendPaidAmount = defaultValues?(defaultValues["lastDividendPaidAmount"]?defaultValues["lastDividendPaidAmount"]:null):null;
			privateState.lastDividendPaidDate = defaultValues?(defaultValues["lastDividendPaidDate"]?defaultValues["lastDividendPaidDate"]:null):null;
			privateState.lastPaymentAmount = defaultValues?(defaultValues["lastPaymentAmount"]?defaultValues["lastPaymentAmount"]:null):null;
			privateState.lastPaymentDate = defaultValues?(defaultValues["lastPaymentDate"]?defaultValues["lastPaymentDate"]:null):null;
			privateState.lastStatementBalance = defaultValues?(defaultValues["lastStatementBalance"]?defaultValues["lastStatementBalance"]:null):null;
			privateState.lateFeesDue = defaultValues?(defaultValues["lateFeesDue"]?defaultValues["lateFeesDue"]:null):null;
			privateState.maturityAmount = defaultValues?(defaultValues["maturityAmount"]?defaultValues["maturityAmount"]:null):null;
			privateState.maturityDate = defaultValues?(defaultValues["maturityDate"]?defaultValues["maturityDate"]:null):null;
			privateState.maturityOption = defaultValues?(defaultValues["maturityOption"]?defaultValues["maturityOption"]:null):null;
			privateState.minimumDue = defaultValues?(defaultValues["minimumDue"]?defaultValues["minimumDue"]:null):null;
			privateState.nickName = defaultValues?(defaultValues["nickName"]?defaultValues["nickName"]:null):null;
			privateState.openingDate = defaultValues?(defaultValues["openingDate"]?defaultValues["openingDate"]:null):null;
			privateState.originalAmount = defaultValues?(defaultValues["originalAmount"]?defaultValues["originalAmount"]:null):null;
			privateState.outstandingBalance = defaultValues?(defaultValues["outstandingBalance"]?defaultValues["outstandingBalance"]:null):null;
			privateState.paymentDue = defaultValues?(defaultValues["paymentDue"]?defaultValues["paymentDue"]:null):null;
			privateState.paymentMethod = defaultValues?(defaultValues["paymentMethod"]?defaultValues["paymentMethod"]:null):null;
			privateState.paymentTerm = defaultValues?(defaultValues["paymentTerm"]?defaultValues["paymentTerm"]:null):null;
			privateState.payoffAmount = defaultValues?(defaultValues["payoffAmount"]?defaultValues["payoffAmount"]:null):null;
			privateState.payOffCharge = defaultValues?(defaultValues["payOffCharge"]?defaultValues["payOffCharge"]:null):null;
			privateState.pendingDeposit = defaultValues?(defaultValues["pendingDeposit"]?defaultValues["pendingDeposit"]:null):null;
			privateState.pendingWithdrawal = defaultValues?(defaultValues["pendingWithdrawal"]?defaultValues["pendingWithdrawal"]:null):null;
			privateState.phoneId = defaultValues?(defaultValues["phoneId"]?defaultValues["phoneId"]:null):null;
			privateState.previousYearDividend = defaultValues?(defaultValues["previousYearDividend"]?defaultValues["previousYearDividend"]:null):null;
			privateState.previousYearsDividends = defaultValues?(defaultValues["previousYearsDividends"]?defaultValues["previousYearsDividends"]:null):null;
			privateState.principalBalance = defaultValues?(defaultValues["principalBalance"]?defaultValues["principalBalance"]:null):null;
			privateState.principalValue = defaultValues?(defaultValues["principalValue"]?defaultValues["principalValue"]:null):null;
			privateState.regularPaymentAmount = defaultValues?(defaultValues["regularPaymentAmount"]?defaultValues["regularPaymentAmount"]:null):null;
			privateState.routingNumber = defaultValues?(defaultValues["routingNumber"]?defaultValues["routingNumber"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.supportBillPay = defaultValues?(defaultValues["supportBillPay"]?defaultValues["supportBillPay"]:null):null;
			privateState.supportCardlessCash = defaultValues?(defaultValues["supportCardlessCash"]?defaultValues["supportCardlessCash"]:null):null;
			privateState.supportDeposit = defaultValues?(defaultValues["supportDeposit"]?defaultValues["supportDeposit"]:null):null;
			privateState.supportTransferFrom = defaultValues?(defaultValues["supportTransferFrom"]?defaultValues["supportTransferFrom"]:null):null;
			privateState.supportTransferTo = defaultValues?(defaultValues["supportTransferTo"]?defaultValues["supportTransferTo"]:null):null;
			privateState.swiftCode = defaultValues?(defaultValues["swiftCode"]?defaultValues["swiftCode"]:null):null;
			privateState.totalCreditMonths = defaultValues?(defaultValues["totalCreditMonths"]?defaultValues["totalCreditMonths"]:null):null;
			privateState.totalDebitsMonth = defaultValues?(defaultValues["totalDebitsMonth"]?defaultValues["totalDebitsMonth"]:null):null;
			privateState.transactionLimit = defaultValues?(defaultValues["transactionLimit"]?defaultValues["transactionLimit"]:null):null;
			privateState.transferLimit = defaultValues?(defaultValues["transferLimit"]?defaultValues["transferLimit"]:null):null;
			privateState.unpaidInterest = defaultValues?(defaultValues["unpaidInterest"]?defaultValues["unpaidInterest"]:null):null;
			privateState.userName = defaultValues?(defaultValues["userName"]?defaultValues["userName"]:null):null;
			privateState.email = defaultValues?(defaultValues["email"]?defaultValues["email"]:null):null;
			privateState.jointAccountHolder1 = defaultValues?(defaultValues["jointAccountHolder1"]?defaultValues["jointAccountHolder1"]:null):null;
			privateState.jointAccountHolder2 = defaultValues?(defaultValues["jointAccountHolder2"]?defaultValues["jointAccountHolder2"]:null):null;
			privateState.bankAddress = defaultValues?(defaultValues["bankAddress"]?defaultValues["bankAddress"]:null):null;
			privateState.intermediaryBankName = defaultValues?(defaultValues["intermediaryBankName"]?defaultValues["intermediaryBankName"]:null):null;
			privateState.intermediaryBankAddress = defaultValues?(defaultValues["intermediaryBankAddress"]?defaultValues["intermediaryBankAddress"]:null):null;
			privateState.intermediaryBankSwiftCode = defaultValues?(defaultValues["intermediaryBankSwiftCode"]?defaultValues["intermediaryBankSwiftCode"]:null):null;
			privateState.statusDesc = defaultValues?(defaultValues["statusDesc"]?defaultValues["statusDesc"]:null):null;
			privateState.supportChecks = defaultValues?(defaultValues["supportChecks"]?defaultValues["supportChecks"]:null):null;
			privateState.accountNumber = defaultValues?(defaultValues["accountNumber"]?defaultValues["accountNumber"]:null):null;
			privateState.addressId = defaultValues?(defaultValues["addressId"]?defaultValues["addressId"]:null):null;
			privateState.addressLine1 = defaultValues?(defaultValues["addressLine1"]?defaultValues["addressLine1"]:null):null;
			privateState.addressLine2 = defaultValues?(defaultValues["addressLine2"]?defaultValues["addressLine2"]:null):null;
			privateState.addressType = defaultValues?(defaultValues["addressType"]?defaultValues["addressType"]:null):null;
			privateState.alertsTurnedOn = defaultValues?(defaultValues["alertsTurnedOn"]?defaultValues["alertsTurnedOn"]:null):null;
			privateState.areAccountStatementTermsAccepted = defaultValues?(defaultValues["areAccountStatementTermsAccepted"]?defaultValues["areAccountStatementTermsAccepted"]:null):null;
			privateState.areDepositTermsAccepted = defaultValues?(defaultValues["areDepositTermsAccepted"]?defaultValues["areDepositTermsAccepted"]:null):null;
			privateState.cardNumber = defaultValues?(defaultValues["cardNumber"]?defaultValues["cardNumber"]:null):null;
			privateState.city = defaultValues?(defaultValues["city"]?defaultValues["city"]:null):null;
			privateState.country = defaultValues?(defaultValues["country"]?defaultValues["country"]:null):null;
			privateState.cvv = defaultValues?(defaultValues["cvv"]?defaultValues["cvv"]:null):null;
			privateState.dateOfBirth = defaultValues?(defaultValues["dateOfBirth"]?defaultValues["dateOfBirth"]:null):null;
			privateState.default_account_billPay = defaultValues?(defaultValues["default_account_billPay"]?defaultValues["default_account_billPay"]:null):null;
			privateState.default_account_cardless = defaultValues?(defaultValues["default_account_cardless"]?defaultValues["default_account_cardless"]:null):null;
			privateState.default_account_deposit = defaultValues?(defaultValues["default_account_deposit"]?defaultValues["default_account_deposit"]:null):null;
			privateState.default_account_payments = defaultValues?(defaultValues["default_account_payments"]?defaultValues["default_account_payments"]:null):null;
			privateState.default_account_transfers = defaultValues?(defaultValues["default_account_transfers"]?defaultValues["default_account_transfers"]:null):null;
			privateState.default_from_account_p2p = defaultValues?(defaultValues["default_from_account_p2p"]?defaultValues["default_from_account_p2p"]:null):null;
			privateState.default_to_account_p2p = defaultValues?(defaultValues["default_to_account_p2p"]?defaultValues["default_to_account_p2p"]:null):null;
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
			privateState.userfirstname = defaultValues?(defaultValues["userfirstname"]?defaultValues["userfirstname"]:null):null;
			privateState.userId = defaultValues?(defaultValues["userId"]?defaultValues["userId"]:null):null;
			privateState.userImage = defaultValues?(defaultValues["userImage"]?defaultValues["userImage"]:null):null;
			privateState.userlastname = defaultValues?(defaultValues["userlastname"]?defaultValues["userlastname"]:null):null;
			privateState.zipcode = defaultValues?(defaultValues["zipcode"]?defaultValues["zipcode"]:null):null;
			privateState.rating = defaultValues?(defaultValues["rating"]?defaultValues["rating"]:null):null;
			privateState.featureRequest = defaultValues?(defaultValues["featureRequest"]?defaultValues["featureRequest"]:null):null;
			privateState.description = defaultValues?(defaultValues["description"]?defaultValues["description"]:null):null;
			privateState.default_account_wire = defaultValues?(defaultValues["default_account_wire"]?defaultValues["default_account_wire"]:null):null;
			privateState.isWireTransferActivated = defaultValues?(defaultValues["isWireTransferActivated"]?defaultValues["isWireTransferActivated"]:null):null;
			privateState.isWireTransferEligible = defaultValues?(defaultValues["isWireTransferEligible"]?defaultValues["isWireTransferEligible"]:null):null;
			privateState.countryType = defaultValues?(defaultValues["countryType"]?defaultValues["countryType"]:null):null;
			privateState.error = defaultValues?(defaultValues["error"]?defaultValues["error"]:null):null;
			privateState.extension = defaultValues?(defaultValues["extension"]?defaultValues["extension"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.isPrimary = defaultValues?(defaultValues["isPrimary"]?defaultValues["isPrimary"]:null):null;
			privateState.phoneNumber = defaultValues?(defaultValues["phoneNumber"]?defaultValues["phoneNumber"]:null):null;
			privateState.receivePromotions = defaultValues?(defaultValues["receivePromotions"]?defaultValues["receivePromotions"]:null):null;
			privateState.type = defaultValues?(defaultValues["type"]?defaultValues["type"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"accountHolder" : {
					get : function(){return privateState.accountHolder},
					set : function(val){
						setterFunctions['accountHolder'].call(this,val,privateState);
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
				"accountli" : {
					get : function(){return privateState.accountli},
					set : function(val){
						setterFunctions['accountli'].call(this,val,privateState);
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
				"accountPreference" : {
					get : function(){return privateState.accountPreference},
					set : function(val){
						setterFunctions['accountPreference'].call(this,val,privateState);
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
				"availableBalance" : {
					get : function(){return privateState.availableBalance},
					set : function(val){
						setterFunctions['availableBalance'].call(this,val,privateState);
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
				"availablePoints" : {
					get : function(){return privateState.availablePoints},
					set : function(val){
						setterFunctions['availablePoints'].call(this,val,privateState);
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
				"bondInterest" : {
					get : function(){return privateState.bondInterest},
					set : function(val){
						setterFunctions['bondInterest'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bondInterestLastYear" : {
					get : function(){return privateState.bondInterestLastYear},
					set : function(val){
						setterFunctions['bondInterestLastYear'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bsbNum" : {
					get : function(){return privateState.bsbNum},
					set : function(val){
						setterFunctions['bsbNum'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"closingDate" : {
					get : function(){return privateState.closingDate},
					set : function(val){
						setterFunctions['closingDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"creditCardNumber" : {
					get : function(){return privateState.creditCardNumber},
					set : function(val){
						setterFunctions['creditCardNumber'].call(this,val,privateState);
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
				"currencyCode" : {
					get : function(){return privateState.currencyCode},
					set : function(val){
						setterFunctions['currencyCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"currentAmountDue" : {
					get : function(){return privateState.currentAmountDue},
					set : function(val){
						setterFunctions['currentAmountDue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"currentBalance" : {
					get : function(){return privateState.currentBalance},
					set : function(val){
						setterFunctions['currentBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"deviceID" : {
					get : function(){return privateState.deviceID},
					set : function(val){
						setterFunctions['deviceID'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dividendLastPaidAmount" : {
					get : function(){return privateState.dividendLastPaidAmount},
					set : function(val){
						setterFunctions['dividendLastPaidAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dividendLastPaidDate" : {
					get : function(){return privateState.dividendLastPaidDate},
					set : function(val){
						setterFunctions['dividendLastPaidDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dividendPaidYTD" : {
					get : function(){return privateState.dividendPaidYTD},
					set : function(val){
						setterFunctions['dividendPaidYTD'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dividendRate" : {
					get : function(){return privateState.dividendRate},
					set : function(val){
						setterFunctions['dividendRate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dividendYTD" : {
					get : function(){return privateState.dividendYTD},
					set : function(val){
						setterFunctions['dividendYTD'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"dueDate" : {
					get : function(){return privateState.dueDate},
					set : function(val){
						setterFunctions['dueDate'].call(this,val,privateState);
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
				"eStatementEnable" : {
					get : function(){return privateState.eStatementEnable},
					set : function(val){
						setterFunctions['eStatementEnable'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"favouriteStatus" : {
					get : function(){return privateState.favouriteStatus},
					set : function(val){
						setterFunctions['favouriteStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"interestEarned" : {
					get : function(){return privateState.interestEarned},
					set : function(val){
						setterFunctions['interestEarned'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"interestPaidLastYear" : {
					get : function(){return privateState.interestPaidLastYear},
					set : function(val){
						setterFunctions['interestPaidLastYear'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"interestPaidPreviousYTD" : {
					get : function(){return privateState.interestPaidPreviousYTD},
					set : function(val){
						setterFunctions['interestPaidPreviousYTD'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"interestPaidYTD" : {
					get : function(){return privateState.interestPaidYTD},
					set : function(val){
						setterFunctions['interestPaidYTD'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"interestRate" : {
					get : function(){return privateState.interestRate},
					set : function(val){
						setterFunctions['interestRate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isInternationalAccount" : {
					get : function(){return privateState.isInternationalAccount},
					set : function(val){
						setterFunctions['isInternationalAccount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isPFM" : {
					get : function(){return privateState.isPFM},
					set : function(val){
						setterFunctions['isPFM'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"jointHolders" : {
					get : function(){return privateState.jointHolders},
					set : function(val){
						setterFunctions['jointHolders'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastDividendPaidAmount" : {
					get : function(){return privateState.lastDividendPaidAmount},
					set : function(val){
						setterFunctions['lastDividendPaidAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastDividendPaidDate" : {
					get : function(){return privateState.lastDividendPaidDate},
					set : function(val){
						setterFunctions['lastDividendPaidDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastPaymentAmount" : {
					get : function(){return privateState.lastPaymentAmount},
					set : function(val){
						setterFunctions['lastPaymentAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastPaymentDate" : {
					get : function(){return privateState.lastPaymentDate},
					set : function(val){
						setterFunctions['lastPaymentDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastStatementBalance" : {
					get : function(){return privateState.lastStatementBalance},
					set : function(val){
						setterFunctions['lastStatementBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lateFeesDue" : {
					get : function(){return privateState.lateFeesDue},
					set : function(val){
						setterFunctions['lateFeesDue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"maturityAmount" : {
					get : function(){return privateState.maturityAmount},
					set : function(val){
						setterFunctions['maturityAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"maturityDate" : {
					get : function(){return privateState.maturityDate},
					set : function(val){
						setterFunctions['maturityDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"maturityOption" : {
					get : function(){return privateState.maturityOption},
					set : function(val){
						setterFunctions['maturityOption'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"minimumDue" : {
					get : function(){return privateState.minimumDue},
					set : function(val){
						setterFunctions['minimumDue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"nickName" : {
					get : function(){return privateState.nickName},
					set : function(val){
						setterFunctions['nickName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"openingDate" : {
					get : function(){return privateState.openingDate},
					set : function(val){
						setterFunctions['openingDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"originalAmount" : {
					get : function(){return privateState.originalAmount},
					set : function(val){
						setterFunctions['originalAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"outstandingBalance" : {
					get : function(){return privateState.outstandingBalance},
					set : function(val){
						setterFunctions['outstandingBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"paymentDue" : {
					get : function(){return privateState.paymentDue},
					set : function(val){
						setterFunctions['paymentDue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"paymentMethod" : {
					get : function(){return privateState.paymentMethod},
					set : function(val){
						setterFunctions['paymentMethod'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"paymentTerm" : {
					get : function(){return privateState.paymentTerm},
					set : function(val){
						setterFunctions['paymentTerm'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payoffAmount" : {
					get : function(){return privateState.payoffAmount},
					set : function(val){
						setterFunctions['payoffAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"payOffCharge" : {
					get : function(){return privateState.payOffCharge},
					set : function(val){
						setterFunctions['payOffCharge'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"pendingDeposit" : {
					get : function(){return privateState.pendingDeposit},
					set : function(val){
						setterFunctions['pendingDeposit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"pendingWithdrawal" : {
					get : function(){return privateState.pendingWithdrawal},
					set : function(val){
						setterFunctions['pendingWithdrawal'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"phoneId" : {
					get : function(){return privateState.phoneId},
					set : function(val){
						setterFunctions['phoneId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"previousYearDividend" : {
					get : function(){return privateState.previousYearDividend},
					set : function(val){
						setterFunctions['previousYearDividend'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"previousYearsDividends" : {
					get : function(){return privateState.previousYearsDividends},
					set : function(val){
						setterFunctions['previousYearsDividends'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"principalBalance" : {
					get : function(){return privateState.principalBalance},
					set : function(val){
						setterFunctions['principalBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"principalValue" : {
					get : function(){return privateState.principalValue},
					set : function(val){
						setterFunctions['principalValue'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"regularPaymentAmount" : {
					get : function(){return privateState.regularPaymentAmount},
					set : function(val){
						setterFunctions['regularPaymentAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"routingNumber" : {
					get : function(){return privateState.routingNumber},
					set : function(val){
						setterFunctions['routingNumber'].call(this,val,privateState);
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
				"supportBillPay" : {
					get : function(){return privateState.supportBillPay},
					set : function(val){
						setterFunctions['supportBillPay'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"supportCardlessCash" : {
					get : function(){return privateState.supportCardlessCash},
					set : function(val){
						setterFunctions['supportCardlessCash'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"supportDeposit" : {
					get : function(){return privateState.supportDeposit},
					set : function(val){
						setterFunctions['supportDeposit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"supportTransferFrom" : {
					get : function(){return privateState.supportTransferFrom},
					set : function(val){
						setterFunctions['supportTransferFrom'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"supportTransferTo" : {
					get : function(){return privateState.supportTransferTo},
					set : function(val){
						setterFunctions['supportTransferTo'].call(this,val,privateState);
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
				"totalCreditMonths" : {
					get : function(){return privateState.totalCreditMonths},
					set : function(val){
						setterFunctions['totalCreditMonths'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"totalDebitsMonth" : {
					get : function(){return privateState.totalDebitsMonth},
					set : function(val){
						setterFunctions['totalDebitsMonth'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transactionLimit" : {
					get : function(){return privateState.transactionLimit},
					set : function(val){
						setterFunctions['transactionLimit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transferLimit" : {
					get : function(){return privateState.transferLimit},
					set : function(val){
						setterFunctions['transferLimit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"unpaidInterest" : {
					get : function(){return privateState.unpaidInterest},
					set : function(val){
						setterFunctions['unpaidInterest'].call(this,val,privateState);
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
				"email" : {
					get : function(){return privateState.email},
					set : function(val){
						setterFunctions['email'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"jointAccountHolder1" : {
					get : function(){return privateState.jointAccountHolder1},
					set : function(val){
						setterFunctions['jointAccountHolder1'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"jointAccountHolder2" : {
					get : function(){return privateState.jointAccountHolder2},
					set : function(val){
						setterFunctions['jointAccountHolder2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankAddress" : {
					get : function(){return privateState.bankAddress},
					set : function(val){
						setterFunctions['bankAddress'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"intermediaryBankName" : {
					get : function(){return privateState.intermediaryBankName},
					set : function(val){
						setterFunctions['intermediaryBankName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"intermediaryBankAddress" : {
					get : function(){return privateState.intermediaryBankAddress},
					set : function(val){
						setterFunctions['intermediaryBankAddress'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"intermediaryBankSwiftCode" : {
					get : function(){return privateState.intermediaryBankSwiftCode},
					set : function(val){
						setterFunctions['intermediaryBankSwiftCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"statusDesc" : {
					get : function(){return privateState.statusDesc},
					set : function(val){
						setterFunctions['statusDesc'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"supportChecks" : {
					get : function(){return privateState.supportChecks},
					set : function(val){
						setterFunctions['supportChecks'].call(this,val,privateState);
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
				"countryType" : {
					get : function(){return privateState.countryType},
					set : function(val){
						setterFunctions['countryType'].call(this,val,privateState);
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
				"extension" : {
					get : function(){return privateState.extension},
					set : function(val){
						setterFunctions['extension'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"id" : {
					get : function(){return privateState.id},
					set : function(val){
						setterFunctions['id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isPrimary" : {
					get : function(){return privateState.isPrimary},
					set : function(val){
						setterFunctions['isPrimary'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"phoneNumber" : {
					get : function(){return privateState.phoneNumber},
					set : function(val){
						setterFunctions['phoneNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"receivePromotions" : {
					get : function(){return privateState.receivePromotions},
					set : function(val){
						setterFunctions['receivePromotions'].call(this,val,privateState);
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
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Dashboard);
	
	//Create new class level validator object
	BaseModel.Validator.call(Dashboard);
	
	var registerValidatorBackup = Dashboard.registerValidator;
	
	Dashboard.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Dashboard.isValid(this, propName, val) ){
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
	//For Operation 'getDashboard' with service id 'getDashboard7732'
	Dashboard.getDashboard = function(params, onCompletion){
		return Dashboard.customVerb('getDashboard', params, onCompletion);
	};
	
	var relations = [
	];
	
	Dashboard.relations = relations;
	
	Dashboard.prototype.isValid = function(){
		return Dashboard.isValid(this);
	};
	
	Dashboard.prototype.objModelName = "Dashboard";
	
	return Dashboard;
});