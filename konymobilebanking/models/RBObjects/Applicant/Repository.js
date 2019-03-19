define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function ApplicantRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	ApplicantRepository.prototype = Object.create(BaseRepository.prototype);
	ApplicantRepository.prototype.constructor = ApplicantRepository;

	//For Operation 'CreateCoreApplicant' with service id 'createCoreApplicant3725'
	ApplicantRepository.prototype.CreateCoreApplicant = function(params,onCompletion){
		return ApplicantRepository.prototype.customVerb('CreateCoreApplicant',params, onCompletion);
	};
	//For Operation 'createApplicant' with service id 'createDbxApplicant2575'
	ApplicantRepository.prototype.createApplicant = function(params,onCompletion){
		return ApplicantRepository.prototype.customVerb('createApplicant',params, onCompletion);
	};
	
	
	return ApplicantRepository;
})