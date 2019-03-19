define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function MyApprovalsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	MyApprovalsRepository.prototype = Object.create(BaseRepository.prototype);
	MyApprovalsRepository.prototype.constructor = MyApprovalsRepository;

	//For Operation 'rejectACHTransaction' with service id 'ACHTransactionRequestAction9819'
	MyApprovalsRepository.prototype.rejectACHTransaction = function(params,onCompletion){
		return MyApprovalsRepository.prototype.customVerb('rejectACHTransaction',params, onCompletion);
	};
	//For Operation 'getACHFiles' with service id 'FetchAllACHFilesPendingForMyApproval2424'
	MyApprovalsRepository.prototype.getACHFiles = function(params,onCompletion){
		return MyApprovalsRepository.prototype.customVerb('getACHFiles',params, onCompletion);
	};
	//For Operation 'approveACHTransaction' with service id 'ACHTransactionRequestAction7849'
	MyApprovalsRepository.prototype.approveACHTransaction = function(params,onCompletion){
		return MyApprovalsRepository.prototype.customVerb('approveACHTransaction',params, onCompletion);
	};
	//For Operation 'approveACHFile' with service id 'ACHFileRequestAction8282'
	MyApprovalsRepository.prototype.approveACHFile = function(params,onCompletion){
		return MyApprovalsRepository.prototype.customVerb('approveACHFile',params, onCompletion);
	};
	//For Operation 'approveBBGeneralTransaction' with service id 'BBGeneralTransactionRequestAction7988'
	MyApprovalsRepository.prototype.approveBBGeneralTransaction = function(params,onCompletion){
		return MyApprovalsRepository.prototype.customVerb('approveBBGeneralTransaction',params, onCompletion);
	};
	//For Operation 'rejectBBGeneralTransaction' with service id 'BBGeneralTransactionRequestAction4761'
	MyApprovalsRepository.prototype.rejectBBGeneralTransaction = function(params,onCompletion){
		return MyApprovalsRepository.prototype.customVerb('rejectBBGeneralTransaction',params, onCompletion);
	};
	//For Operation 'getGeneralTransactions' with service id 'FetchAllBBGeneralTransactionsPendingForMyApproval4081'
	MyApprovalsRepository.prototype.getGeneralTransactions = function(params,onCompletion){
		return MyApprovalsRepository.prototype.customVerb('getGeneralTransactions',params, onCompletion);
	};
	//For Operation 'rejectACHFile' with service id 'ACHFileRequestAction8094'
	MyApprovalsRepository.prototype.rejectACHFile = function(params,onCompletion){
		return MyApprovalsRepository.prototype.customVerb('rejectACHFile',params, onCompletion);
	};
	//For Operation 'getACHTransactions' with service id 'FetchAllACHTransactionsPendingForMyApproval7518'
	MyApprovalsRepository.prototype.getACHTransactions = function(params,onCompletion){
		return MyApprovalsRepository.prototype.customVerb('getACHTransactions',params, onCompletion);
	};
	
	
	return MyApprovalsRepository;
})