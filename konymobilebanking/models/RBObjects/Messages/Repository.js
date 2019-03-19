define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function MessagesRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	MessagesRepository.prototype = Object.create(BaseRepository.prototype);
	MessagesRepository.prototype.constructor = MessagesRepository;

	//For Operation 'customDelete' with service id 'deleteMessage8829'
	MessagesRepository.prototype.customDelete = function(params,onCompletion){
		return MessagesRepository.prototype.customVerb('customDelete',params, onCompletion);
	};
	//For Operation 'MessageCount' with service id 'getMessageCount4579'
	MessagesRepository.prototype.MessageCount = function(params,onCompletion){
		return MessagesRepository.prototype.customVerb('MessageCount',params, onCompletion);
	};
	
	
	return MessagesRepository;
})