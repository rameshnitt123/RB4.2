define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function CardsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	CardsRepository.prototype = Object.create(BaseRepository.prototype);
	CardsRepository.prototype.constructor = CardsRepository;

	//For Operation 'cancelCard' with service id 'updateCard7127'
	CardsRepository.prototype.cancelCard = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('cancelCard',params, onCompletion);
	};
	//For Operation 'getCardsForAdmin' with service id 'GetCardsForAdmin1780'
	CardsRepository.prototype.getCardsForAdmin = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('getCardsForAdmin',params, onCompletion);
	};
	//For Operation 'reportLost' with service id 'updateCard5113'
	CardsRepository.prototype.reportLost = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('reportLost',params, onCompletion);
	};
	//For Operation 'deleteTravelNotification' with service id 'deleteTravelNotification6950'
	CardsRepository.prototype.deleteTravelNotification = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('deleteTravelNotification',params, onCompletion);
	};
	//For Operation 'unlockCard' with service id 'updateCard6945'
	CardsRepository.prototype.unlockCard = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('unlockCard',params, onCompletion);
	};
	//For Operation 'getTravelNotification' with service id 'getTravelNotification2919'
	CardsRepository.prototype.getTravelNotification = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('getTravelNotification',params, onCompletion);
	};
	//For Operation 'updateCardForAdmin' with service id 'UpdateCardForAdmin3853'
	CardsRepository.prototype.updateCardForAdmin = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('updateCardForAdmin',params, onCompletion);
	};
	//For Operation 'getTravelNotificationStatus' with service id 'getTravelNotificationStatus8935'
	CardsRepository.prototype.getTravelNotificationStatus = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('getTravelNotificationStatus',params, onCompletion);
	};
	//For Operation 'createTravelNotification' with service id 'createTravelNotification6410'
	CardsRepository.prototype.createTravelNotification = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('createTravelNotification',params, onCompletion);
	};
	//For Operation 'updateTravelNotification' with service id 'updateTravelNotification4123'
	CardsRepository.prototype.updateTravelNotification = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('updateTravelNotification',params, onCompletion);
	};
	//For Operation 'getCardsByUsername' with service id 'getCardsByUsername7853'
	CardsRepository.prototype.getCardsByUsername = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('getCardsByUsername',params, onCompletion);
	};
	//For Operation 'getCardListForEnrolment' with service id 'getCardListForEnrolment1875'
	CardsRepository.prototype.getCardListForEnrolment = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('getCardListForEnrolment',params, onCompletion);
	};
	//For Operation 'replaceCard' with service id 'updateCard3212'
	CardsRepository.prototype.replaceCard = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('replaceCard',params, onCompletion);
	};
	//For Operation 'changePIN' with service id 'updateCard1565'
	CardsRepository.prototype.changePIN = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('changePIN',params, onCompletion);
	};
	//For Operation 'createCardRequest' with service id 'createCardRequest1362'
	CardsRepository.prototype.createCardRequest = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('createCardRequest',params, onCompletion);
	};
	//For Operation 'lockCard' with service id 'deleteTransactionsForLockedCard9350'
	CardsRepository.prototype.lockCard = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('lockCard',params, onCompletion);
	};
	//For Operation 'getActiveCards' with service id 'getActiveCards8542'
	CardsRepository.prototype.getActiveCards = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('getActiveCards',params, onCompletion);
	};
	
	
	return CardsRepository;
})