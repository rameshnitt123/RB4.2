define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function AccountStatementRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	AccountStatementRepository.prototype = Object.create(BaseRepository.prototype);
	AccountStatementRepository.prototype.constructor = AccountStatementRepository;

	//For Operation 'showDownloadStatements' with service id 'showDownloadStatements5684'
	AccountStatementRepository.prototype.showDownloadStatements = function(params,onCompletion){
		return AccountStatementRepository.prototype.customVerb('showDownloadStatements',params, onCompletion);
	};
	
	
	return AccountStatementRepository;
})