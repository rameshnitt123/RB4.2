define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function SecureMessagingRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	SecureMessagingRepository.prototype = Object.create(BaseRepository.prototype);
	SecureMessagingRepository.prototype.constructor = SecureMessagingRepository;

	//For Operation 'getRequestCategory' with service id 'getRequestCategory4222'
	SecureMessagingRepository.prototype.getRequestCategory = function(params,onCompletion){
		return SecureMessagingRepository.prototype.customVerb('getRequestCategory',params, onCompletion);
	};
	//For Operation 'updateRequest' with service id 'updateRequest9197'
	SecureMessagingRepository.prototype.updateRequest = function(params,onCompletion){
		return SecureMessagingRepository.prototype.customVerb('updateRequest',params, onCompletion);
	};
	//For Operation 'getRequests' with service id 'getRequests5580'
	SecureMessagingRepository.prototype.getRequests = function(params,onCompletion){
		return SecureMessagingRepository.prototype.customVerb('getRequests',params, onCompletion);
	};
	//For Operation 'getAllMessagesForARequest' with service id 'getAllMessagesForARequest4187'
	SecureMessagingRepository.prototype.getAllMessagesForARequest = function(params,onCompletion){
		return SecureMessagingRepository.prototype.customVerb('getAllMessagesForARequest',params, onCompletion);
	};
	//For Operation 'getUnreadMessageCount' with service id 'getUnreadMessageCount3384'
	SecureMessagingRepository.prototype.getUnreadMessageCount = function(params,onCompletion){
		return SecureMessagingRepository.prototype.customVerb('getUnreadMessageCount',params, onCompletion);
	};
	//For Operation 'createCustomerRequest' with service id 'createCustomerRequest9297'
	SecureMessagingRepository.prototype.createCustomerRequest = function(params,onCompletion){
		return SecureMessagingRepository.prototype.customVerb('createCustomerRequest',params, onCompletion);
	};
	//For Operation 'CreateNewCustomerRequestWithoutAttachment' with service id 'CreateNewCustomerRequest_RB3309'
	SecureMessagingRepository.prototype.CreateNewCustomerRequestWithoutAttachment = function(params,onCompletion){
		return SecureMessagingRepository.prototype.customVerb('CreateNewCustomerRequestWithoutAttachment',params, onCompletion);
	};
	//For Operation 'getMessageAttachment' with service id 'getMessageAttachment9401'
	SecureMessagingRepository.prototype.getMessageAttachment = function(params,onCompletion){
		return SecureMessagingRepository.prototype.customVerb('getMessageAttachment',params, onCompletion);
	};
	
	
	return SecureMessagingRepository;
})