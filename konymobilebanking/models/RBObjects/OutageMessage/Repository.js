define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function OutageMessageRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	OutageMessageRepository.prototype = Object.create(BaseRepository.prototype);
	OutageMessageRepository.prototype.constructor = OutageMessageRepository;

	//For Operation 'createOutageMessage' with service id 'createOutageMessage6069'
	OutageMessageRepository.prototype.createOutageMessage = function(params,onCompletion){
		return OutageMessageRepository.prototype.customVerb('createOutageMessage',params, onCompletion);
	};
	//For Operation 'getOutageMessage' with service id 'getOutageMessage9185'
	OutageMessageRepository.prototype.getOutageMessage = function(params,onCompletion){
		return OutageMessageRepository.prototype.customVerb('getOutageMessage',params, onCompletion);
	};
	//For Operation 'updateOutageMessage' with service id 'updateOutageMessage5763'
	OutageMessageRepository.prototype.updateOutageMessage = function(params,onCompletion){
		return OutageMessageRepository.prototype.customVerb('updateOutageMessage',params, onCompletion);
	};
	//For Operation 'deleteOutageMessage' with service id 'deleteOutageMessage1495'
	OutageMessageRepository.prototype.deleteOutageMessage = function(params,onCompletion){
		return OutageMessageRepository.prototype.customVerb('deleteOutageMessage',params, onCompletion);
	};
	
	
	return OutageMessageRepository;
})