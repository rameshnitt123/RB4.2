define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function BillsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	BillsRepository.prototype = Object.create(BaseRepository.prototype);
	BillsRepository.prototype.constructor = BillsRepository;

	//For Operation 'getDueBillsForPayee' with service id 'getDueBillsForPayee7456'
	BillsRepository.prototype.getDueBillsForPayee = function(params,onCompletion){
		return BillsRepository.prototype.customVerb('getDueBillsForPayee',params, onCompletion);
	};
	//For Operation 'getBillsForBiller' with service id 'getBillsForBiller4186'
	BillsRepository.prototype.getBillsForBiller = function(params,onCompletion){
		return BillsRepository.prototype.customVerb('getBillsForBiller',params, onCompletion);
	};
	//For Operation 'getPreviousBillsForBiller' with service id 'getPreviousBillsForBiller6502'
	BillsRepository.prototype.getPreviousBillsForBiller = function(params,onCompletion){
		return BillsRepository.prototype.customVerb('getPreviousBillsForBiller',params, onCompletion);
	};
	
	
	return BillsRepository;
})