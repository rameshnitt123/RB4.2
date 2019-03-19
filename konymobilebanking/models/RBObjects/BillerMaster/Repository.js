define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function BillerMasterRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	BillerMasterRepository.prototype = Object.create(BaseRepository.prototype);
	BillerMasterRepository.prototype.constructor = BillerMasterRepository;

	//For Operation 'searchBillerByName' with service id 'searchBillerByName8926'
	BillerMasterRepository.prototype.searchBillerByName = function(params,onCompletion){
		return BillerMasterRepository.prototype.customVerb('searchBillerByName',params, onCompletion);
	};
	//For Operation 'getBillerByAccountNumber' with service id 'getBillerByAccountNumber7928'
	BillerMasterRepository.prototype.getBillerByAccountNumber = function(params,onCompletion){
		return BillerMasterRepository.prototype.customVerb('getBillerByAccountNumber',params, onCompletion);
	};
	
	
	return BillerMasterRepository;
})