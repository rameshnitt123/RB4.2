define([],function(){
	var repoMapping = {
		UserSecurityQuestions  : {
			model : "RBObjects/UserSecurityQuestions/Model",
			config : "RBObjects/UserSecurityQuestions/MF_Config",
			repository : "RBObjects/UserSecurityQuestions/Repository",
		},
		AllLocations  : {
			model : "RBObjects/AllLocations/Model",
			config : "RBObjects/AllLocations/MF_Config",
			repository : "RBObjects/AllLocations/Repository",
		},
		SecurityQuestions  : {
			model : "RBObjects/SecurityQuestions/Model",
			config : "RBObjects/SecurityQuestions/MF_Config",
			repository : "RBObjects/SecurityQuestions/Repository",
		},
		NewUserProducts  : {
			model : "RBObjects/NewUserProducts/Model",
			config : "RBObjects/NewUserProducts/MF_Config",
			repository : "RBObjects/NewUserProducts/Repository",
		},
		UserAlerts  : {
			model : "RBObjects/UserAlerts/Model",
			config : "RBObjects/UserAlerts/MF_Config",
			repository : "RBObjects/UserAlerts/Repository",
		},
		BillerCategory  : {
			model : "RBObjects/BillerCategory/Model",
			config : "RBObjects/BillerCategory/MF_Config",
			repository : "",
		},
		AccountStatement  : {
			model : "RBObjects/AccountStatement/Model",
			config : "RBObjects/AccountStatement/MF_Config",
			repository : "RBObjects/AccountStatement/Repository",
		},
		OutageMessage  : {
			model : "RBObjects/OutageMessage/Model",
			config : "RBObjects/OutageMessage/MF_Config",
			repository : "RBObjects/OutageMessage/Repository",
		},
		TaxType  : {
			model : "ACHObjects/TaxType/Model",
			config : "ACHObjects/TaxType/MF_Config",
			repository : "",
		},
		Notifications  : {
			model : "RBObjects/Notifications/Model",
			config : "RBObjects/Notifications/MF_Config",
			repository : "RBObjects/Notifications/Repository",
		},
		PFMBudgetGraph  : {
			model : "RBObjects/PFMBudgetGraph/Model",
			config : "RBObjects/PFMBudgetGraph/MF_Config",
			repository : "",
		},
		PushNotification  : {
			model : "RBObjects/PushNotification/Model",
			config : "RBObjects/PushNotification/MF_Config",
			repository : "",
		},
		PFMCategory  : {
			model : "RBObjects/PFMCategory/Model",
			config : "RBObjects/PFMCategory/MF_Config",
			repository : "",
		},
		Currency  : {
			model : "RBObjects/Currency/Model",
			config : "RBObjects/Currency/MF_Config",
			repository : "",
		},
		MainUserBankSelectedAccounts  : {
			model : "AccountAggregation/MainUserBankSelectedAccounts/Model",
			config : "AccountAggregation/MainUserBankSelectedAccounts/MF_Config",
			repository : "",
		},
		UserBanks  : {
			model : "AccountAggregation/UserBanks/Model",
			config : "AccountAggregation/UserBanks/MF_Config",
			repository : "",
		},
		MainUserBankUsers  : {
			model : "AccountAggregation/MainUserBankUsers/Model",
			config : "AccountAggregation/MainUserBankUsers/MF_Config",
			repository : "",
		},
		MessageCategory  : {
			model : "RBObjects/MessageCategory/Model",
			config : "RBObjects/MessageCategory/MF_Config",
			repository : "",
		},
		ExternalAccountsAggregation  : {
			model : "AccountAggregation/ExternalAccountsAggregation/Model",
			config : "AccountAggregation/ExternalAccountsAggregation/MF_Config",
			repository : "",
		},
		Dashboard  : {
			model : "RBObjects/Dashboard/Model",
			config : "RBObjects/Dashboard/MF_Config",
			repository : "RBObjects/Dashboard/Repository",
		},
		ExternalBanks  : {
			model : "AccountAggregation/ExternalBanks/Model",
			config : "AccountAggregation/ExternalBanks/MF_Config",
			repository : "",
		},
		MemberShip  : {
			model : "RBObjects/MemberShip/Model",
			config : "RBObjects/MemberShip/MF_Config",
			repository : "",
		},
		TrackDeviceRegistration  : {
			model : "RBObjects/TrackDeviceRegistration/Model",
			config : "RBObjects/TrackDeviceRegistration/MF_Config",
			repository : "RBObjects/TrackDeviceRegistration/Repository",
		},
		PFMPieChart  : {
			model : "RBObjects/PFMPieChart/Model",
			config : "RBObjects/PFMPieChart/MF_Config",
			repository : "",
		},
		DeviceRegistration  : {
			model : "RBObjects/DeviceRegistration/Model",
			config : "RBObjects/DeviceRegistration/MF_Config",
			repository : "RBObjects/DeviceRegistration/Repository",
		},
		PFMTransactions  : {
			model : "RBObjects/PFMTransactions/Model",
			config : "RBObjects/PFMTransactions/MF_Config",
			repository : "RBObjects/PFMTransactions/Repository",
		},
		TransactionSubRecord  : {
			model : "ACHObjects/TransactionSubRecord/Model",
			config : "ACHObjects/TransactionSubRecord/MF_Config",
			repository : "ACHObjects/TransactionSubRecord/Repository",
		},
		RefreshAccounts  : {
			model : "AccountAggregation/RefreshAccounts/Model",
			config : "AccountAggregation/RefreshAccounts/MF_Config",
			repository : "",
		},
		BillerCompany  : {
			model : "RBObjects/BillerCompany/Model",
			config : "RBObjects/BillerCompany/MF_Config",
			repository : "",
		},
		BillerMaster  : {
			model : "RBObjects/BillerMaster/Model",
			config : "RBObjects/BillerMaster/MF_Config",
			repository : "RBObjects/BillerMaster/Repository",
		},
		Informationcontent  : {
			model : "RBObjects/Informationcontent/Model",
			config : "RBObjects/Informationcontent/MF_Config",
			repository : "RBObjects/Informationcontent/Repository",
		},
		BBGeneralTransactions  : {
			model : "ACHObjects/BBGeneralTransactions/Model",
			config : "ACHObjects/BBGeneralTransactions/MF_Config",
			repository : "ACHObjects/BBGeneralTransactions/Repository",
		},
		UserAccounts  : {
			model : "ACHObjects/UserAccounts/Model",
			config : "ACHObjects/UserAccounts/MF_Config",
			repository : "",
		},
		Country  : {
			model : "RBObjects/Country/Model",
			config : "RBObjects/Country/MF_Config",
			repository : "RBObjects/Country/Repository",
		},
		AccountCashFlow  : {
			model : "RBObjects/AccountCashFlow/Model",
			config : "RBObjects/AccountCashFlow/MF_Config",
			repository : "",
		},
		ACHFileFormats  : {
			model : "ACHObjects/ACHFileFormats/Model",
			config : "ACHObjects/ACHFileFormats/MF_Config",
			repository : "",
		},
		AccountType  : {
			model : "RBObjects/AccountType/Model",
			config : "RBObjects/AccountType/MF_Config",
			repository : "",
		},
		QrCode  : {
			model : "RBObjects/QrCode/Model",
			config : "RBObjects/QrCode/MF_Config",
			repository : "",
		},
		Locations  : {
			model : "RBObjects/Locations/Model",
			config : "RBObjects/Locations/MF_Config",
			repository : "RBObjects/Locations/Repository",
		},
		Messages  : {
			model : "RBObjects/Messages/Model",
			config : "RBObjects/Messages/MF_Config",
			repository : "RBObjects/Messages/Repository",
		},
		PayPerson  : {
			model : "RBObjects/PayPerson/Model",
			config : "RBObjects/PayPerson/MF_Config",
			repository : "RBObjects/PayPerson/Repository",
		},
		Accounts  : {
			model : "RBObjects/Accounts/Model",
			config : "RBObjects/Accounts/MF_Config",
			repository : "RBObjects/Accounts/Repository",
		},
		TemplateTypes  : {
			model : "ACHObjects/TemplateTypes/Model",
			config : "ACHObjects/TemplateTypes/MF_Config",
			repository : "",
		},
		ExternalAccounts  : {
			model : "RBObjects/ExternalAccounts/Model",
			config : "RBObjects/ExternalAccounts/MF_Config",
			repository : "RBObjects/ExternalAccounts/Repository",
		},
		TransactionRecords  : {
			model : "ACHObjects/TransactionRecords/Model",
			config : "ACHObjects/TransactionRecords/MF_Config",
			repository : "ACHObjects/TransactionRecords/Repository",
		},
		TimePeriod  : {
			model : "RBObjects/TimePeriod/Model",
			config : "RBObjects/TimePeriod/MF_Config",
			repository : "",
		},
		uploadDocuments  : {
			model : "RBObjects/uploadDocuments/Model",
			config : "RBObjects/uploadDocuments/MF_Config",
			repository : "",
		},
		Bills  : {
			model : "RBObjects/Bills/Model",
			config : "RBObjects/Bills/MF_Config",
			repository : "RBObjects/Bills/Repository",
		},
		MessageSubCategory  : {
			model : "RBObjects/MessageSubCategory/Model",
			config : "RBObjects/MessageSubCategory/MF_Config",
			repository : "",
		},
		SecureMessaging  : {
			model : "RBObjects/SecureMessaging/Model",
			config : "RBObjects/SecureMessaging/MF_Config",
			repository : "RBObjects/SecureMessaging/Repository",
		},
		DbxOrganization  : {
			model : "RBObjects/DbxOrganization/Model",
			config : "RBObjects/DbxOrganization/MF_Config",
			repository : "RBObjects/DbxOrganization/Repository",
		},
		Applicant  : {
			model : "RBObjects/Applicant/Model",
			config : "RBObjects/Applicant/MF_Config",
			repository : "RBObjects/Applicant/Repository",
		},
		DemoData  : {
			model : "RBObjects/DemoData/Model",
			config : "RBObjects/DemoData/MF_Config",
			repository : "",
		},
		SingleAccountDetails  : {
			model : "AccountAggregation/SingleAccountDetails/Model",
			config : "AccountAggregation/SingleAccountDetails/MF_Config",
			repository : "",
		},
		Cards  : {
			model : "RBObjects/Cards/Model",
			config : "RBObjects/Cards/MF_Config",
			repository : "RBObjects/Cards/Repository",
		},
		TaxSubType  : {
			model : "ACHObjects/TaxSubType/Model",
			config : "ACHObjects/TaxSubType/MF_Config",
			repository : "ACHObjects/TaxSubType/Repository",
		},
		Products  : {
			model : "RBObjects/Products/Model",
			config : "RBObjects/Products/MF_Config",
			repository : "RBObjects/Products/Repository",
		},
		RefreshAccountsFromDB  : {
			model : "AccountAggregation/RefreshAccountsFromDB/Model",
			config : "AccountAggregation/RefreshAccountsFromDB/MF_Config",
			repository : "",
		},
		SelectedAccounts  : {
			model : "AccountAggregation/SelectedAccounts/Model",
			config : "AccountAggregation/SelectedAccounts/MF_Config",
			repository : "",
		},
		Payees  : {
			model : "AccountAggregation/Payees/Model",
			config : "AccountAggregation/Payees/MF_Config",
			repository : "AccountAggregation/Payees/Repository",
		},
		Transactions  : {
			model : "RBObjects/Transactions/Model",
			config : "RBObjects/Transactions/MF_Config",
			repository : "RBObjects/Transactions/Repository",
		},
		p2pregistration  : {
			model : "RBObjects/p2pregistration/Model",
			config : "RBObjects/p2pregistration/MF_Config",
			repository : "",
		},
		CashPositions  : {
			model : "ACHObjects/CashPositions/Model",
			config : "ACHObjects/CashPositions/MF_Config",
			repository : "ACHObjects/CashPositions/Repository",
		},
		Phone  : {
			model : "RBObjects/Phone/Model",
			config : "RBObjects/Phone/MF_Config",
			repository : "RBObjects/Phone/Repository",
		},
		Sms  : {
			model : "RBObjects/Sms/Model",
			config : "RBObjects/Sms/MF_Config",
			repository : "RBObjects/Sms/Repository",
		},
		NumberRange  : {
			model : "LibraryUtilities/NumberRange/Model",
			config : "LibraryUtilities/NumberRange/MF_Config",
			repository : "LibraryUtilities/NumberRange/Repository",
		},
		ChartTransactions  : {
			model : "RBObjects/ChartTransactions/Model",
			config : "RBObjects/ChartTransactions/MF_Config",
			repository : "",
		},
		CoreMembership  : {
			model : "RBObjects/CoreMembership/Model",
			config : "RBObjects/CoreMembership/MF_Config",
			repository : "",
		},
		DigitalProfile  : {
			model : "RBObjects/DigitalProfile/Model",
			config : "RBObjects/DigitalProfile/MF_Config",
			repository : "",
		},
		PFMBarGraph  : {
			model : "RBObjects/PFMBarGraph/Model",
			config : "RBObjects/PFMBarGraph/MF_Config",
			repository : "",
		},
		PFMAccounts  : {
			model : "RBObjects/PFMAccounts/Model",
			config : "RBObjects/PFMAccounts/MF_Config",
			repository : "RBObjects/PFMAccounts/Repository",
		},
		Counts  : {
			model : "ApprovalRequestObjects/Counts/Model",
			config : "ApprovalRequestObjects/Counts/MF_Config",
			repository : "",
		},
		States  : {
			model : "RBObjects/States/Model",
			config : "RBObjects/States/MF_Config",
			repository : "RBObjects/States/Repository",
		},
		User  : {
			model : "RBObjects/User/Model",
			config : "RBObjects/User/MF_Config",
			repository : "RBObjects/User/Repository",
		},
		NewUser  : {
			model : "RBObjects/NewUser/Model",
			config : "RBObjects/NewUser/MF_Config",
			repository : "RBObjects/NewUser/Repository",
		},
		Payee  : {
			model : "RBObjects/Payee/Model",
			config : "RBObjects/Payee/MF_Config",
			repository : "RBObjects/Payee/Repository",
		},
		NewUserSecurityQuestions  : {
			model : "RBObjects/NewUserSecurityQuestions/Model",
			config : "RBObjects/NewUserSecurityQuestions/MF_Config",
			repository : "",
		},
		TransactionTypes  : {
			model : "ACHObjects/TransactionTypes/Model",
			config : "ACHObjects/TransactionTypes/MF_Config",
			repository : "",
		},
		OFACAndCIPChecks  : {
			model : "RBObjects/OFACAndCIPChecks/Model",
			config : "RBObjects/OFACAndCIPChecks/MF_Config",
			repository : "",
		},
		Product  : {
			model : "RBObjects/Product/Model",
			config : "RBObjects/Product/MF_Config",
			repository : "RBObjects/Product/Repository",
		},
		ACHTemplates  : {
			model : "ACHObjects/ACHTemplates/Model",
			config : "ACHObjects/ACHTemplates/MF_Config",
			repository : "ACHObjects/ACHTemplates/Repository",
		},
		NewAccount  : {
			model : "RBObjects/NewAccount/Model",
			config : "RBObjects/NewAccount/MF_Config",
			repository : "",
		},
		ACHAccountTypes  : {
			model : "ACHObjects/ACHAccountTypes/Model",
			config : "ACHObjects/ACHAccountTypes/MF_Config",
			repository : "",
		},
		Application  : {
			model : "RBObjects/Application/Model",
			config : "RBObjects/Application/MF_Config",
			repository : "",
		},
		ExchangeRates  : {
			model : "RBObjects/ExchangeRates/Model",
			config : "RBObjects/ExchangeRates/MF_Config",
			repository : "",
		},
		ACHFile  : {
			model : "ACHObjects/ACHFile/Model",
			config : "ACHObjects/ACHFile/MF_Config",
			repository : "ACHObjects/ACHFile/Repository",
		},
		AccountFeatures  : {
			model : "RBObjects/AccountFeatures/Model",
			config : "RBObjects/AccountFeatures/MF_Config",
			repository : "",
		},
		ACHTransactions  : {
			model : "ACHObjects/ACHTransactions/Model",
			config : "ACHObjects/ACHTransactions/MF_Config",
			repository : "ACHObjects/ACHTransactions/Repository",
		},
		DbxUser  : {
			model : "RBObjects/DbxUser/Model",
			config : "RBObjects/DbxUser/MF_Config",
			repository : "RBObjects/DbxUser/Repository",
		},
		LockObject  : {
			model : "LibraryUtilities/LockObject/Model",
			config : "LibraryUtilities/LockObject/MF_Config",
			repository : "",
		},
		UserAccountAlerts  : {
			model : "RBObjects/UserAccountAlerts/Model",
			config : "RBObjects/UserAccountAlerts/MF_Config",
			repository : "RBObjects/UserAccountAlerts/Repository",
		},
		LinkedIn  : {
			model : "RBObjects/LinkedIn/Model",
			config : "RBObjects/LinkedIn/MF_Config",
			repository : "",
		},
		TemplateSubRecord  : {
			model : "ACHObjects/TemplateSubRecord/Model",
			config : "ACHObjects/TemplateSubRecord/MF_Config",
			repository : "ACHObjects/TemplateSubRecord/Repository",
		},
		ExternalBankIdentity  : {
			model : "AccountAggregation/ExternalBankIdentity/Model",
			config : "AccountAggregation/ExternalBankIdentity/MF_Config",
			repository : "",
		},
		CheckOrder  : {
			model : "RBObjects/CheckOrder/Model",
			config : "RBObjects/CheckOrder/MF_Config",
			repository : "",
		},
		DirectMarketing  : {
			model : "RBObjects/DirectMarketing/Model",
			config : "RBObjects/DirectMarketing/MF_Config",
			repository : "RBObjects/DirectMarketing/Repository",
		},
		Ads  : {
			model : "RBObjects/Ads/Model",
			config : "RBObjects/Ads/MF_Config",
			repository : "",
		},
		ExternalTransactionsAggregation  : {
			model : "AccountAggregation/ExternalTransactionsAggregation/Model",
			config : "AccountAggregation/ExternalTransactionsAggregation/MF_Config",
			repository : "",
		},
		Organization  : {
			model : "RBObjects/Organization/Model",
			config : "RBObjects/Organization/MF_Config",
			repository : "RBObjects/Organization/Repository",
		},
		InterestRates  : {
			model : "RBObjects/InterestRates/Model",
			config : "RBObjects/InterestRates/MF_Config",
			repository : "",
		},
		TemplateRecords  : {
			model : "ACHObjects/TemplateRecords/Model",
			config : "ACHObjects/TemplateRecords/MF_Config",
			repository : "ACHObjects/TemplateRecords/Repository",
		},
		MainUserSelectedAccounts  : {
			model : "AccountAggregation/MainUserSelectedAccounts/Model",
			config : "AccountAggregation/MainUserSelectedAccounts/MF_Config",
			repository : "",
		},
		MainUserBankIdentity  : {
			model : "AccountAggregation/MainUserBankIdentity/Model",
			config : "AccountAggregation/MainUserBankIdentity/MF_Config",
			repository : "",
		},
		MyApprovals  : {
			model : "ApprovalRequestObjects/MyApprovals/Model",
			config : "ApprovalRequestObjects/MyApprovals/MF_Config",
			repository : "ApprovalRequestObjects/MyApprovals/Repository",
		},
		TemplateRequestTypes  : {
			model : "ACHObjects/TemplateRequestTypes/Model",
			config : "ACHObjects/TemplateRequestTypes/MF_Config",
			repository : "ACHObjects/TemplateRequestTypes/Repository",
		},
		MyRequests  : {
			model : "ApprovalRequestObjects/MyRequests/Model",
			config : "ApprovalRequestObjects/MyRequests/MF_Config",
			repository : "ApprovalRequestObjects/MyRequests/Repository",
		},
		OrganizationType  : {
			model : "RBObjects/OrganizationType/Model",
			config : "RBObjects/OrganizationType/MF_Config",
			repository : "",
		},
	};
	
	return repoMapping;
})