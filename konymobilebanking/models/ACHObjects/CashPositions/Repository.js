define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function CashPositionsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	CashPositionsRepository.prototype = Object.create(BaseRepository.prototype);
	CashPositionsRepository.prototype.constructor = CashPositionsRepository;

	//For Operation 'getCashPositions' with service id 'FetchCashPositions7462'
	CashPositionsRepository.prototype.getCashPositions = function(params,onCompletion){
		return CashPositionsRepository.prototype.customVerb('getCashPositions',params, onCompletion);
	};
	
	
	return CashPositionsRepository;
})