define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function AccountTypeRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	AccountTypeRepository.prototype = Object.create(BaseRepository.prototype);
	AccountTypeRepository.prototype.constructor = AccountTypeRepository;

	//For Operation 'getbypk' with service id 'getAccountType2900'
	AccountTypeRepository.prototype.getbypk = function(params,onCompletion){
		return AccountTypeRepository.prototype.customVerb('getbypk',params, onCompletion);
	};
	
	
	return AccountTypeRepository;
})