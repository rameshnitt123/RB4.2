define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function DbxOrganizationRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	DbxOrganizationRepository.prototype = Object.create(BaseRepository.prototype);
	DbxOrganizationRepository.prototype.constructor = DbxOrganizationRepository;

	//For Operation 'updateOrganization' with service id 'UpdateOrganisation1311'
	DbxOrganizationRepository.prototype.updateOrganization = function(params,onCompletion){
		return DbxOrganizationRepository.prototype.customVerb('updateOrganization',params, onCompletion);
	};
	//For Operation 'unLinkOrgAccounts' with service id 'unlinkOrganizationAccounts7684'
	DbxOrganizationRepository.prototype.unLinkOrgAccounts = function(params,onCompletion){
		return DbxOrganizationRepository.prototype.customVerb('unLinkOrgAccounts',params, onCompletion);
	};
	//For Operation 'createOrganization' with service id 'CreateOrganisation3127'
	DbxOrganizationRepository.prototype.createOrganization = function(params,onCompletion){
		return DbxOrganizationRepository.prototype.customVerb('createOrganization',params, onCompletion);
	};
	
	
	return DbxOrganizationRepository;
})