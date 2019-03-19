define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function TemplateRequestTypesRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	TemplateRequestTypesRepository.prototype = Object.create(BaseRepository.prototype);
	TemplateRequestTypesRepository.prototype.constructor = TemplateRequestTypesRepository;

	//For Operation 'FetchTemplateRequestTypes' with service id 'FetchBBTemplateRequestTypes8901'
	TemplateRequestTypesRepository.prototype.FetchTemplateRequestTypes = function(params,onCompletion){
		return TemplateRequestTypesRepository.prototype.customVerb('FetchTemplateRequestTypes',params, onCompletion);
	};
	
	
	return TemplateRequestTypesRepository;
})