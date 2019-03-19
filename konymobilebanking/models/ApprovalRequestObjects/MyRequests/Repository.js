define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function MyRequestsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	MyRequestsRepository.prototype = Object.create(BaseRepository.prototype);
	MyRequestsRepository.prototype.constructor = MyRequestsRepository;

	//For Operation 'getGeneralTransactionsReqeustedByMe' with service id 'FetchAllBBGeneralTransactionsRequestedByMeForApproval7762'
	MyRequestsRepository.prototype.getGeneralTransactionsReqeustedByMe = function(params,onCompletion){
		return MyRequestsRepository.prototype.customVerb('getGeneralTransactionsReqeustedByMe',params, onCompletion);
	};
	//For Operation 'withdrawACHTransaction' with service id 'WithdrawACHTransaction4064'
	MyRequestsRepository.prototype.withdrawACHTransaction = function(params,onCompletion){
		return MyRequestsRepository.prototype.customVerb('withdrawACHTransaction',params, onCompletion);
	};
	//For Operation 'getACHTransactionsRequestedByMe' with service id 'FetchAllACHTransactionsRequestedByMeForApproval6255'
	MyRequestsRepository.prototype.getACHTransactionsRequestedByMe = function(params,onCompletion){
		return MyRequestsRepository.prototype.customVerb('getACHTransactionsRequestedByMe',params, onCompletion);
	};
	//For Operation 'withdrawGeneralTransaction' with service id 'WithdrawBBGeneralTransaction5597'
	MyRequestsRepository.prototype.withdrawGeneralTransaction = function(params,onCompletion){
		return MyRequestsRepository.prototype.customVerb('withdrawGeneralTransaction',params, onCompletion);
	};
	//For Operation 'withdrawACHFile' with service id 'WithdrawACHFile8228'
	MyRequestsRepository.prototype.withdrawACHFile = function(params,onCompletion){
		return MyRequestsRepository.prototype.customVerb('withdrawACHFile',params, onCompletion);
	};
	//For Operation 'getACHFilesRequestedByMe' with service id 'FetchAllACHFilesRequestedByMeForApproval9620'
	MyRequestsRepository.prototype.getACHFilesRequestedByMe = function(params,onCompletion){
		return MyRequestsRepository.prototype.customVerb('getACHFilesRequestedByMe',params, onCompletion);
	};
	
	
	return MyRequestsRepository;
})