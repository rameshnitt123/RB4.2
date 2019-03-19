define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function UserSecurityQuestionsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	UserSecurityQuestionsRepository.prototype = Object.create(BaseRepository.prototype);
	UserSecurityQuestionsRepository.prototype.constructor = UserSecurityQuestionsRepository;

	//For Operation 'updateUserSecurityQuestions' with service id 'updateUserSecurityQuestions3263'
	UserSecurityQuestionsRepository.prototype.updateUserSecurityQuestions = function(params,onCompletion){
		return UserSecurityQuestionsRepository.prototype.customVerb('updateUserSecurityQuestions',params, onCompletion);
	};
	//For Operation 'verifyUserSecurityQuestions' with service id 'verifyUserSecurityQuestions2404'
	UserSecurityQuestionsRepository.prototype.verifyUserSecurityQuestions = function(params,onCompletion){
		return UserSecurityQuestionsRepository.prototype.customVerb('verifyUserSecurityQuestions',params, onCompletion);
	};
	
	
	return UserSecurityQuestionsRepository;
})