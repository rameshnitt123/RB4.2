define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function OrganizationRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	OrganizationRepository.prototype = Object.create(BaseRepository.prototype);
	OrganizationRepository.prototype.constructor = OrganizationRepository;

	//For Operation 'updateOrganization' with service id 'UpdateOrganisation5850'
	OrganizationRepository.prototype.updateOrganization = function(params,onCompletion){
		return OrganizationRepository.prototype.customVerb('updateOrganization',params, onCompletion);
	};
	//For Operation 'verifyDbxOrganizationUser' with service id 'verifyOraganisationUser3522'
	OrganizationRepository.prototype.verifyDbxOrganizationUser = function(params,onCompletion){
		return OrganizationRepository.prototype.customVerb('verifyDbxOrganizationUser',params, onCompletion);
	};
	//For Operation 'getDbxOrganizationUsers' with service id 'GetOrganisationEmployes9984'
	OrganizationRepository.prototype.getDbxOrganizationUsers = function(params,onCompletion){
		return OrganizationRepository.prototype.customVerb('getDbxOrganizationUsers',params, onCompletion);
	};
	//For Operation 'createDbxOrganization' with service id 'CreateOrganisation3104'
	OrganizationRepository.prototype.createDbxOrganization = function(params,onCompletion){
		return OrganizationRepository.prototype.customVerb('createDbxOrganization',params, onCompletion);
	};
	//For Operation 'getDbxOrganizationDetails' with service id 'GetOrganisationDetails4108'
	OrganizationRepository.prototype.getDbxOrganizationDetails = function(params,onCompletion){
		return OrganizationRepository.prototype.customVerb('getDbxOrganizationDetails',params, onCompletion);
	};
	//For Operation 'getOrganizationName' with service id 'getOrganizationName9845'
	OrganizationRepository.prototype.getOrganizationName = function(params,onCompletion){
		return OrganizationRepository.prototype.customVerb('getOrganizationName',params, onCompletion);
	};
	//For Operation 'editDbxOrganization' with service id 'UpdateOrganisation7224'
	OrganizationRepository.prototype.editDbxOrganization = function(params,onCompletion){
		return OrganizationRepository.prototype.customVerb('editDbxOrganization',params, onCompletion);
	};
	//For Operation 'validateTin' with service id 'ValidateTin7223'
	OrganizationRepository.prototype.validateTin = function(params,onCompletion){
		return OrganizationRepository.prototype.customVerb('validateTin',params, onCompletion);
	};
	//For Operation 'createOrganization' with service id 'CreateOrganisation1230'
	OrganizationRepository.prototype.createOrganization = function(params,onCompletion){
		return OrganizationRepository.prototype.customVerb('createOrganization',params, onCompletion);
	};
	
	
	return OrganizationRepository;
})