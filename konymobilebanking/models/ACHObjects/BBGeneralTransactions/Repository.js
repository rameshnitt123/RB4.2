define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function BBGeneralTransactionsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	BBGeneralTransactionsRepository.prototype = Object.create(BaseRepository.prototype);
	BBGeneralTransactionsRepository.prototype.constructor = BBGeneralTransactionsRepository;

	//For Operation 'getBBGeneralTransactionDetailsByID' with service id 'FetchBBGeneralTransactionDetails8448'
	BBGeneralTransactionsRepository.prototype.getBBGeneralTransactionDetailsByID = function(params,onCompletion){
		return BBGeneralTransactionsRepository.prototype.customVerb('getBBGeneralTransactionDetailsByID',params, onCompletion);
	};
	//For Operation 'RejectedGenTransactions' with service id 'FetchAllRejectedGeneralTransactions7860'
	BBGeneralTransactionsRepository.prototype.RejectedGenTransactions = function(params,onCompletion){
		return BBGeneralTransactionsRepository.prototype.customVerb('RejectedGenTransactions',params, onCompletion);
	};
	//For Operation 'createBBTransaction' with service id 'createBBGeneralTransaction2463'
	BBGeneralTransactionsRepository.prototype.createBBTransaction = function(params,onCompletion){
		return BBGeneralTransactionsRepository.prototype.customVerb('createBBTransaction',params, onCompletion);
	};
	
	
	return BBGeneralTransactionsRepository;
})