define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function TransactionsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	TransactionsRepository.prototype = Object.create(BaseRepository.prototype);
	TransactionsRepository.prototype.constructor = TransactionsRepository;

	//For Operation 'getAccountTransactionByType' with service id 'getAccountTransactionsByType8839'
	TransactionsRepository.prototype.getAccountTransactionByType = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getAccountTransactionByType',params, onCompletion);
	};
	//For Operation 'getDisputedTransactions' with service id 'getDisputedTransactions6882'
	TransactionsRepository.prototype.getDisputedTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getDisputedTransactions',params, onCompletion);
	};
	//For Operation 'cancelScheduledTransactionOccurrence' with service id 'cancelScheduledTransactionOccurrence4253'
	TransactionsRepository.prototype.cancelScheduledTransactionOccurrence = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('cancelScheduledTransactionOccurrence',params, onCompletion);
	};
	//For Operation 'getPostedDeposits' with service id 'getPostedDepositTransactions7524'
	TransactionsRepository.prototype.getPostedDeposits = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPostedDeposits',params, onCompletion);
	};
	//For Operation 'getPostedUserTransactions' with service id 'getUserPostedTransaction8739'
	TransactionsRepository.prototype.getPostedUserTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPostedUserTransactions',params, onCompletion);
	};
	//For Operation 'getUserScheduledTransactions' with service id 'getUserScheduledTransactions7582'
	TransactionsRepository.prototype.getUserScheduledTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getUserScheduledTransactions',params, onCompletion);
	};
	//For Operation 'makeTrialDeposit' with service id 'makeTrialDeposit2251'
	TransactionsRepository.prototype.makeTrialDeposit = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('makeTrialDeposit',params, onCompletion);
	};
	//For Operation 'getReceivedP2PRequest' with service id 'getReceivedP2PRequest1423'
	TransactionsRepository.prototype.getReceivedP2PRequest = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getReceivedP2PRequest',params, onCompletion);
	};
	//For Operation 'getPostedCardlessTransactions' with service id 'getPostedCardlessTransactions5420'
	TransactionsRepository.prototype.getPostedCardlessTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPostedCardlessTransactions',params, onCompletion);
	};
	//For Operation 'getPayPersonHistory' with service id 'getPayPersonHistory3288'
	TransactionsRepository.prototype.getPayPersonHistory = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPayPersonHistory',params, onCompletion);
	};
	//For Operation 'getPendingCardlessTransactions' with service id 'getPendingCardlessTransactions2681'
	TransactionsRepository.prototype.getPendingCardlessTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPendingCardlessTransactions',params, onCompletion);
	};
	//For Operation 'getToExternalAccountTransactions' with service id 'getToExternalAccountTransactions3980'
	TransactionsRepository.prototype.getToExternalAccountTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getToExternalAccountTransactions',params, onCompletion);
	};
	//For Operation 'getAllTransactionsForAdmin' with service id 'GetAllTransactionsForAdmin1982'
	TransactionsRepository.prototype.getAllTransactionsForAdmin = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getAllTransactionsForAdmin',params, onCompletion);
	};
	//For Operation 'deleteTransaction' with service id 'deleteTransaction3690'
	TransactionsRepository.prototype.deleteTransaction = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('deleteTransaction',params, onCompletion);
	};
	//For Operation 'getScheduledUserTransactions' with service id 'getUserTransaction8444'
	TransactionsRepository.prototype.getScheduledUserTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getScheduledUserTransactions',params, onCompletion);
	};
	//For Operation 'verifyTrialDeposit' with service id 'verifyTrialDeposit7697'
	TransactionsRepository.prototype.verifyTrialDeposit = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('verifyTrialDeposit',params, onCompletion);
	};
	//For Operation 'createCardlessTransaction' with service id 'createTransfer4842'
	TransactionsRepository.prototype.createCardlessTransaction = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('createCardlessTransaction',params, onCompletion);
	};
	//For Operation 'createTransfer' with service id 'createTransfer8825'
	TransactionsRepository.prototype.createTransfer = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('createTransfer',params, onCompletion);
	};
	//For Operation 'getUserCompletedBillHistory' with service id 'getUserCompletedBillHistory2578'
	TransactionsRepository.prototype.getUserCompletedBillHistory = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getUserCompletedBillHistory',params, onCompletion);
	};
	//For Operation 'getStopCheckPaymentRequestTransactions' with service id 'getStopCheckPaymentRequestTransactions9378'
	TransactionsRepository.prototype.getStopCheckPaymentRequestTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getStopCheckPaymentRequestTransactions',params, onCompletion);
	};
	//For Operation 'getScheduledTransferAndP2pTransactions' with service id 'getScheduledTransferAndP2pTransactions1707'
	TransactionsRepository.prototype.getScheduledTransferAndP2pTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getScheduledTransferAndP2pTransactions',params, onCompletion);
	};
	//For Operation 'getPayeeBills' with service id 'getPayeeBills9801'
	TransactionsRepository.prototype.getPayeeBills = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPayeeBills',params, onCompletion);
	};
	//For Operation 'getPendingDeposits' with service id 'getPendingDepositTransactions7900'
	TransactionsRepository.prototype.getPendingDeposits = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPendingDeposits',params, onCompletion);
	};
	//For Operation 'getPostedTransfersAndP2pTransactions' with service id 'getPostedTransferAndP2pTransactions3143'
	TransactionsRepository.prototype.getPostedTransfersAndP2pTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPostedTransfersAndP2pTransactions',params, onCompletion);
	};
	//For Operation 'getAccountPendingTransactions' with service id 'getAccountPendingTransactions3154'
	TransactionsRepository.prototype.getAccountPendingTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getAccountPendingTransactions',params, onCompletion);
	};
	//For Operation 'getUserWiredTransactions' with service id 'getUserWiredTransactions8719'
	TransactionsRepository.prototype.getUserWiredTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getUserWiredTransactions',params, onCompletion);
	};
	//For Operation 'getScheduledAccountTransactions' with service id 'getUserTransaction9275'
	TransactionsRepository.prototype.getScheduledAccountTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getScheduledAccountTransactions',params, onCompletion);
	};
	//For Operation 'getSentP2PTransactions' with service id 'getSentP2PTransactions2748'
	TransactionsRepository.prototype.getSentP2PTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getSentP2PTransactions',params, onCompletion);
	};
	//For Operation 'createDisputedTransaction' with service id 'updateTransaction5547'
	TransactionsRepository.prototype.createDisputedTransaction = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('createDisputedTransaction',params, onCompletion);
	};
	//For Operation 'downloadfile' with service id 'GetTransactionsDownloaded9922'
	TransactionsRepository.prototype.downloadfile = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('downloadfile',params, onCompletion);
	};
	//For Operation 'getUsersScheduledBill' with service id 'getUsersScheduledBills2757'
	TransactionsRepository.prototype.getUsersScheduledBill = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getUsersScheduledBill',params, onCompletion);
	};
	//For Operation 'getAccountPostedTransactions' with service id 'GetAccountPostedTransactions6830'
	TransactionsRepository.prototype.getAccountPostedTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getAccountPostedTransactions',params, onCompletion);
	};
	//For Operation 'getExternalAccountTransactions' with service id 'getExternalTransactions6873'
	TransactionsRepository.prototype.getExternalAccountTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getExternalAccountTransactions',params, onCompletion);
	};
	//For Operation 'getRecentAccountTransactions' with service id 'getUserTransaction3576'
	TransactionsRepository.prototype.getRecentAccountTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getRecentAccountTransactions',params, onCompletion);
	};
	//For Operation 'getRecipientWireTransaction' with service id 'getRecipientWireTransaction3006'
	TransactionsRepository.prototype.getRecipientWireTransaction = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getRecipientWireTransaction',params, onCompletion);
	};
	//For Operation 'getPendingUserTransactions' with service id 'getUserPendingTransaction1504'
	TransactionsRepository.prototype.getPendingUserTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getPendingUserTransactions',params, onCompletion);
	};
	//For Operation 'downloadTransactions' with service id 'GetTransactionsDownloaded2452'
	TransactionsRepository.prototype.downloadTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('downloadTransactions',params, onCompletion);
	};
	//For Operation 'isSecondFactorAuthenticationRequired' with service id 'isSecondFactorAuthenticationRequired2991'
	TransactionsRepository.prototype.isSecondFactorAuthenticationRequired = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('isSecondFactorAuthenticationRequired',params, onCompletion);
	};
	//For Operation 'createBulkBillPay' with service id 'createBulkBillPay8624'
	TransactionsRepository.prototype.createBulkBillPay = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('createBulkBillPay',params, onCompletion);
	};
	//For Operation 'getRecentUserTransactions' with service id 'getUserTransaction3446'
	TransactionsRepository.prototype.getRecentUserTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getRecentUserTransactions',params, onCompletion);
	};
	//For Operation 'getReceivedP2PTransactions' with service id 'getReceivedP2PTransactions9298'
	TransactionsRepository.prototype.getReceivedP2PTransactions = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getReceivedP2PTransactions',params, onCompletion);
	};
	//For Operation 'getAllP2PRequestMoneyForUser' with service id 'getAllP2PRequestMoneyForUser6564'
	TransactionsRepository.prototype.getAllP2PRequestMoneyForUser = function(params,onCompletion){
		return TransactionsRepository.prototype.customVerb('getAllP2PRequestMoneyForUser',params, onCompletion);
	};
	
	
	return TransactionsRepository;
})