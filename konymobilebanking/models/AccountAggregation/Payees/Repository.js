define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function PayeesRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	PayeesRepository.prototype = Object.create(BaseRepository.prototype);
	PayeesRepository.prototype.constructor = PayeesRepository;

	//For Operation 'localget' with service id 'readExternalAccountsViewjava7313'
	PayeesRepository.prototype.localget = function(params,onCompletion){
		return PayeesRepository.prototype.customVerb('localget',params, onCompletion);
	};
	
	
	return PayeesRepository;
})