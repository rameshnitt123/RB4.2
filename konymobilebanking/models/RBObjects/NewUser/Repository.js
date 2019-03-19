define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function NewUserRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	NewUserRepository.prototype = Object.create(BaseRepository.prototype);
	NewUserRepository.prototype.constructor = NewUserRepository;

	//For Operation 'getUserState' with service id 'getUserState5852'
	NewUserRepository.prototype.getUserState = function(params,onCompletion){
		return NewUserRepository.prototype.customVerb('getUserState',params, onCompletion);
	};
	//For Operation 'createPersonalInfo' with service id 'createUserPersonalInfo5087'
	NewUserRepository.prototype.createPersonalInfo = function(params,onCompletion){
		return NewUserRepository.prototype.customVerb('createPersonalInfo',params, onCompletion);
	};
	//For Operation 'uploadDocuments' with service id 'uploadDocuments7315'
	NewUserRepository.prototype.uploadDocuments = function(params,onCompletion){
		return NewUserRepository.prototype.customVerb('uploadDocuments',params, onCompletion);
	};
	//For Operation 'verifyExistingUserByPhone' with service id 'verifyExistingUserByPhone4515'
	NewUserRepository.prototype.verifyExistingUserByPhone = function(params,onCompletion){
		return NewUserRepository.prototype.customVerb('verifyExistingUserByPhone',params, onCompletion);
	};
	//For Operation 'verifyExistingUserByEmail' with service id 'verifyExistingUserByEmail3522'
	NewUserRepository.prototype.verifyExistingUserByEmail = function(params,onCompletion){
		return NewUserRepository.prototype.customVerb('verifyExistingUserByEmail',params, onCompletion);
	};
	//For Operation 'resetNewUserData' with service id 'deleteNewUserPerosnalInfo3542'
	NewUserRepository.prototype.resetNewUserData = function(params,onCompletion){
		return NewUserRepository.prototype.customVerb('resetNewUserData',params, onCompletion);
	};
	//For Operation 'signatureUpload' with service id 'userSignatureUpload9795'
	NewUserRepository.prototype.signatureUpload = function(params,onCompletion){
		return NewUserRepository.prototype.customVerb('signatureUpload',params, onCompletion);
	};
	//For Operation 'getUserPersonalInfo' with service id 'getUserPersonalInfo8753'
	NewUserRepository.prototype.getUserPersonalInfo = function(params,onCompletion){
		return NewUserRepository.prototype.customVerb('getUserPersonalInfo',params, onCompletion);
	};
	//For Operation 'userCreditCheck' with service id 'userCreditCheck2828'
	NewUserRepository.prototype.userCreditCheck = function(params,onCompletion){
		return NewUserRepository.prototype.customVerb('userCreditCheck',params, onCompletion);
	};
	//For Operation 'verifyExistingUserName' with service id 'verifyExistingUserName7692'
	NewUserRepository.prototype.verifyExistingUserName = function(params,onCompletion){
		return NewUserRepository.prototype.customVerb('verifyExistingUserName',params, onCompletion);
	};
	
	
	return NewUserRepository;
})