define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function ACHTemplatesRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	ACHTemplatesRepository.prototype = Object.create(BaseRepository.prototype);
	ACHTemplatesRepository.prototype.constructor = ACHTemplatesRepository;

	//For Operation 'Execute' with service id 'ExecuteTemplate1084'
	ACHTemplatesRepository.prototype.Execute = function(params,onCompletion){
		return ACHTemplatesRepository.prototype.customVerb('Execute',params, onCompletion);
	};
	//For Operation 'getTemplateDetailsById' with service id 'FetchACHTemplateDetails3617'
	ACHTemplatesRepository.prototype.getTemplateDetailsById = function(params,onCompletion){
		return ACHTemplatesRepository.prototype.customVerb('getTemplateDetailsById',params, onCompletion);
	};
	//For Operation 'createACHTemplate' with service id 'createTemplate8325'
	ACHTemplatesRepository.prototype.createACHTemplate = function(params,onCompletion){
		return ACHTemplatesRepository.prototype.customVerb('createACHTemplate',params, onCompletion);
	};
	
	
	return ACHTemplatesRepository;
})