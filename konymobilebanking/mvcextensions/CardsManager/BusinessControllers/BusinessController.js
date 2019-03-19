/**
*@module CardsManager
 */
define([], function() {
	/**
   * Description of CardsManager:  This Business class provides all API's related to Card Management And Travel Plan Notifications for cards.
   * @alias module:CardsManager
   * @class
   */
	function CardsManager() {
		/**@member  scope Contains the current scope {this}*/
		scope = this;
		/**@member {Array} cards Contains data of all cards for the logged in user
       * This object is set, only if the cards are fetched atleast once by using @fetchAllCardsWithUsername or @fetchCardsList
       */
		this.cards = null;
		/**@member {Array} TravelPlans Contains data of all TravelPlans for the logged in user*/
		this.TravelPlans = null;
		/**@member {Array} locationsDetails Contains data of all locations such as countries, states, cities 
       * This object is set when user navigates select destinations for Travel Plan.
       * Alternatively, this object can be initialized by calling @fetchAllCountries, @fetchAllStates and @fetchAllCities.
       * locationsDetails.countries, location.states and location.cities will give you countries, states, cities respectively.
       */
		this.locationsDetails = {};
	}

	inheritsFrom(CardsManager, kony.mvc.Business.Delegator);

	CardsManager.prototype.initializeBusinessController = function(){};

	/**
	 * Fetches cards related to given @username.
     * Invokes @successCB or @errorCB based on the Response from backed.
	 * @returns {Array} - Array of cards to @successCB
     * @param {function}successCB - invokes the call back with success response.
	 * @param {function}errorCB - invokes the call back with error response.
	 */
	CardsManager.prototype.fetchAllCardsWithUsername = function(username, successCB, errorCB) {

		var cardsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Cards");
		var params = {
			"userName": username
		};
		cardsRepo.customVerb('getCardsByUsername', params, getAllCompletionCallback);

		function getAllCompletionCallback(status, data, error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error, successCB, errorCB);
			if (obj["status"] === true) {
				this.cards = data;
				successCB(obj["data"]);
			} else
				errorCB(obj["errmsg"]);
		}
	};

	/**
	 * Fetches cards related to given @userLastname, @dateOfBirth and @ssn for Enrollment purposes.
     * Invokes @successCall or @failureCall based on the Response from backed.
	 * @returns {Array} - Array of cards to @successCall
     * @param {string}userLastName - user last name (string type)
	 * @param {string}dateOfBirth - date of birth (string type)     
     * @param {string}ssn - ssn of the user (string type)
     * @param {function}successCB - invokes the call back with success response.
	 * @param {function}failureCall - invokes the call back with error response.
	 */
	CardsManager.prototype.fetchCardsForEnroll = function(userLastName, dateOfBirth, ssn, successCall, failureCall) {
		var cardsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Cards");
		var params = {
			userlastname: userLastName,
			dateOfBirth: dateOfBirth,
			ssn: ssn
		};
		cardsRepo.customVerb('getCardListForEnrolment', params, getAllCompletionCallback);

		function getAllCompletionCallback(status, data, error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj["status"] === true) {
				successCall(obj["data"]);
			} else
				failureCall(obj["errmsg"]);
		}
	};
	/**
	 * Fetch the Cards for the current logged-in user using a service call.
	 * @returns {Array} - Array of cards to @presentationSuccessCallback
	 * @param {function} presentationSuccessCallback - invokes the callback with success response.
	 * @param {function} presentationErrorCallback - invokes the callback with error response.
	 */
	CardsManager.prototype.fetchCardsList = function(presentationSuccessCallback, presentationErrorCallback) {
		var self = this;
		function getAllCompletionCallback(status, data, error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj["status"] === true) {
				scope.cards = obj.data;
				presentationSuccessCallback(obj["data"]);
			} else {
				presentationErrorCallback(obj["errmsg"]);
			}
		}
		var loggerManager = applicationManager.getLoggerManager();
		try {
			loggerManager.log("#### start CardsManager : fetchExternalAccounts ####");
			var self = this;
			var cardsRepo = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Cards");
			cardsRepo.getAll(getAllCompletionCallback);
		} catch (err) {
			loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
		}
	};
	/**
	 * Update the Card status (Active/Inactive, Lost/Stolen, Replace, Cancel) etc for the current logged in user.
	 * @param {object} cardParams - Card details which are to be updated along with mandatory fields(CardId, Action and Reson).
	 * @param {function} successCallback - invokes the call back with success response.
	 * @param {function} failureCallback - invokes the call back with error response.
	 */
	CardsManager.prototype.updateCardStatus = function(cardParams, successCallback, failureCallback) {
		function getAllCompletionCallback(status,  data,  error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj["status"] === true) {
				successCallback(obj["data"]);
			} else {
				failureCallback(obj["errmsg"]);
			}
		}
		try {
			var loggerManager = applicationManager.getLoggerManager();
			loggerManager.log("#### start CardsManager : updateCardStatus ####");
			var updateCardInstance  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Cards");
			var cardObject = new updateCardInstance(cardParams);
			cardObject.partialUpdate(getAllCompletionCallback);
		} catch (exception) {
			loggerManager.log("#### in catch " + JSON.stringify(exception) + " ####");
		}
	};
	/**
	 * Fetch the Travel Plans list details for given userName.
	 * @returns {Array} - Array of travel plans created by the user.
     * @param {string} username - to fetch the travel plans of the given username
	 * @param {function} successCB (successCallback passed from Presentation) - invokes this call back on success response along data.
	 * @param {function} errorCB (errorCallback passed from Presentation) - invokes this call back on an error response.
	 */
	CardsManager.prototype.fetchTravelPlansList = function(username, successCB, errorCB) {

		var cardsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Cards");
		var params = {
			"userName": username
		};
		cardsRepo.customVerb('getTravelNotification', params, getAllCompletionCallback);

		function getAllCompletionCallback(status, data, error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error, successCB, errorCB);
			if (obj["status"] === true) {
				this.TravelPlans = data;
				successCB(obj["data"]);
			} else
				errorCB(obj["errmsg"]);
		}
	};
	/**
	 * Fetch all the Countires available using a service call.
     * All countries fetched will be available under @getLocations json with countries as a key.
	 * @returns {Array} - Array of Countries with details
	 * @param {function} presentationSuccessCallback - invoke the call back with success response.
	 * @param {function} presentationErrorCallback - invoke the call back with error response.
	 */
	CardsManager.prototype.fetchAllLocations = function(successCB, errorCB) {

		function getAllCompletionCallback(status, data, error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj["status"] === true) {
				successCB(obj["data"]);
			} else {
				errorCB(obj["errmsg"]);
			}
		}
		var loggerManager = applicationManager.getLoggerManager();
		try {
			loggerManager.log("#### start CardsManager : fetchAllCountries ####");
			var self = this;
			var locRepo = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("AllLocations");
			locRepo.customVerb('getAllLocations', {}, getAllCompletionCallback); 
		} catch (err) {
			loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
		}
	};

	/**
	 * Returns already fetched locationDetails (countries, states and Cities)
     * This object is set when user navigates select destinations for Travel Plan.
     * Alternatively, this object returns data when user calls @fetchAllCountries, @fetchAllStates or @fetchAllCities.
     * locationsDetails.countries, location.states and location.cities will give you countries, states, cities respectively.
	 * @returns {Array} - Array of countries,states,cities
	 */
	CardsManager.prototype.getLocations = function() {
		kony.print("Manage Cards Business Controller: getLocations: Returning: "+JSON.stringify(scope.locationsDetails));
		return scope.locationsDetails;
	};
	/**
	 * Set the given parameter value for locationDetails (countries, states and Cities)
     * The data set using this method can be retrieved by using @getLocations.
	 * @param {object} data - JSON type with array of countries, states, cities
	 */
	CardsManager.prototype.setLocations = function(data){
		scope.locationsDetails = data;
	};
	/**
	 * Returns already fetched cards
     * Note: This funtion will return fetched cards when user navigates to Card Management Atleast Once.
     * This is to reduce network call to get the cards assigned to user.
	 * @returns {Array} - Array of cards
	 */
	CardsManager.prototype.getCards = function() {
		kony.print("Manage Cards Business Controller: getCards: Returning: "+JSON.stringify(scope.cards));
		return scope.cards;
	};
	/**
	 * Set the given parameter value for cards array.
     * The data set in this method can be retrieved using @getCards method.
	 * @param {object} data - array of cards with details
	 */
	CardsManager.prototype.setCards = function(data){
		scope.cards = data;
	};

	/**
	 * Update the Travel Notification details for a particular travel plan using a service call.
	 * @param {object} data - entire updated travel plan which is to be updated along with Request ID.
	 * @param {function} successCallback - invoke the call back with success response.
	 * @param {function} failureCallback - invoke the call back with error response.
	 */
	CardsManager.prototype.updateTravelNotifications = function(data, successCallback,failureCallback ){
		var self = this;
		function completionCallBack(status, data , error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj.status === true) {
				kony.print("completionCallBack statusSuccess for UpdateTravel"+JSON.stringify(obj));
				successCallback(obj);
			} else {
				kony.print("completionCallBack statusFailure for UpdateTravel"+JSON.stringify(obj));
				failureCallback(obj.errmsg);
			}
		}
		try {
			var travelModel  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Cards");
			travelModel.customVerb('updateTravelNotification', data, completionCallBack);
		} catch (err) {
			self.sendResponse(command, kony.mvc.constants.STATUS_FAILURE, err);
		}
	};	
	/**
	 * delete a particular travel plan using a service call.
	 * @param {string} requestId - request Id  of travel plan which is to be deleted
	 * @param {function} successCallback - invoke the call back with success response.
	 * @param {function} failureCallback - invoke the call back with error response.
	 */
	CardsManager.prototype.deleteTravelNotifications = function(requestId, successCallback,failureCallback){
		var self = this;
		var travelObject ={
			"request_id":requestId          
		};
		function completionCallBack(status, data , error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj["status"] === true) {
				successCallback(obj["data"]);
			} else {
				failureCallback(obj["errmsg"]);
			}
		}
		try {
			var travelModel  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Cards");
			travelModel.customVerb('deleteTravelNotification', travelObject, completionCallBack);
		} catch (err) {
			self.sendResponse(command, kony.mvc.constants.STATUS_FAILURE, err);
		}
	};

	/**
	 * create a new Travel Plan for current user using a service call.
	 * @param {object} data - entire travel plan details which is to be created
	 * @param {function} successCallback - invoke the call back with success response.
	 * @param {function} failureCallback - invoke the call back with error response.
	 */ 
	CardsManager.prototype.createTravelNotification = function(data, successCallback,failureCallback ){
		var self = this;
		function completionCallBack(status, data , error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj.status === true) {
				kony.print("completionCallBack statusSuccess for createTravelNotification"+JSON.stringify(obj));
				successCallback(obj);
			} else {
				kony.print("completionCallBack statusFailure for createTravelNotification"+JSON.stringify(obj));
				failureCallback(obj.errmsg);
			}
		}
		try {
			var travelModel  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Cards");
			travelModel.customVerb('createTravelNotification', data, completionCallBack);
		} catch (err) {
			self.sendResponse(command, kony.mvc.constants.STATUS_FAILURE, err);
		}
	};	

	/**
	* Method used to lock card.
	* @param {Number} cardId - contains the card id.
	* @param {function} presentationSuccess - service success callback method 
	* @param {function} presentationFailure - service failure callback method
	*/
  	CardsManager.prototype.lockCard = function(cardId, presentationSuccess, presentationFailure) {
	  var cardsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition('Cards');
      	var params = {
          'cardId': cardId,
          'Action': 'Lock'
        };
		cardsModel.customVerb('lockCard', params, completionCallback);
		function completionCallback(status, data, error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj["status"] === true) {
				presentationSuccess(obj["data"]);
			} else
				presentationFailure(obj["errmsg"]);
		}
	};
  
  	/**
	* Method used to un-lock card.
	* @param {Number} cardId - contains the card id.
	* @param {function} presentationSuccess - service success callback method 
	* @param {function} presentationFailure - service failure callback method
	*/
  	CardsManager.prototype.unLockCard = function(cardId, presentationSuccess, presentationFailure) {
	  var cardsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition('Cards');
      	var params = {
          'cardId': cardId,
          'Action': 'Activate'
        };
		cardsModel.customVerb('unlockCard', params, completionCallback);
		function completionCallback(status, data, error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj["status"] === true) {
				presentationSuccess(obj["data"]);
			} else
				presentationFailure(obj["errmsg"]);
		}
	};
  
  	/**
	* Method used to change pin.
	* @param {Number} context - contains the context(cardId, reason).
	* @param {function} presentationSuccess - service success callback method 
	* @param {function} presentationFailure - service failure callback method
	*/
  	CardsManager.prototype.changePin = function(context, presentationSuccess, presentationFailure) {
	  var cardsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition('Cards');
	  	var params = {
        'cardId': context.cardId,
        'Reason': context.Reason,
        'Action': 'PinChange'
      };
		cardsModel.customVerb("changePIN", params, completionCallback);
		function completionCallback(status, data, error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj["status"] === true) {
				presentationSuccess(obj["data"]);
			} else
				presentationFailure(obj["errmsg"]);
		}
	};
  
  	/**
	 * Fetch the Travel notifications list details for given userName.
     * @returns {Array of Objects} - Array of travel plans created by the user.
     * @param {Object} params - contains the username and lastNinetyDays flag
	 * @param {callBack} successCB (successCallback passed from Presentation) - invokes this call back on success response along data.
	 * @param {callBack} errorCB (errorCallback passed from Presentation) - invokes this call back on an error response.
	 */
	CardsManager.prototype.fetchNotificationsList = function(params, successCB, errorCB) {

		var cardsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Cards");
		cardsRepo.customVerb('getTravelNotification', params, getAllCompletionCallback);

		function getAllCompletionCallback(status, data, error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error, successCB, errorCB);
			if (obj["status"] === true) {
				this.TravelPlans = data;
				successCB(obj["data"]);
			} else
				errorCB(obj["errmsg"]);
		}
	};


	  	/**
	* Method used to replace Card.
	* @param {Object} context - contains the context(cardId) to be replaced.
	* @param {function} presentationSuccess - service success callback method 
	* @param {function} presentationFailure - service failure callback method
	*/
  	CardsManager.prototype.replaceCard = function(context, presentationSuccess, presentationFailure) {
	  var cardsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition('Cards');
	  	var params = {
        'cardId': context.cardId,
        'Action': 'Replace Request'
      };
		cardsModel.customVerb("replaceCard", params, completionCallback);
		function completionCallback(status, data, error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj["status"] === true) {
				presentationSuccess(obj["data"]);
			} else
				presentationFailure(obj["errmsg"]);
		}
	};
  
  	/**
	* Method used to report lost Card.
	* @param {Object} context - contains the context(cardId, reason, notes) to be reported lost.
	* @param {function} presentationSuccess - service success callback method 
	* @param {function} presentationFailure - service failure callback method
	*/
  	CardsManager.prototype.reportLost = function(context, presentationSuccess, presentationFailure) {
	  var cardsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition('Cards');
	  	var params = {
		  'cardId': context.cardId,
		  Reason: context.Reason,
		  notes: context.notes,
		  Action: 'Report Lost'
      };
		cardsModel.customVerb("reportLost", params, completionCallback);
		function completionCallback(status, data, error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj["status"] === true) {
				presentationSuccess(obj["data"]);
			} else
				presentationFailure(obj["errmsg"]);
		}
	};


	/**
	* Method used to fetch the travel status associated with card.
	* @param {Object} context - contains the list of cards.
	* @param {function} presentationSuccess - service success callback method 
	* @param {function} presentationFailure - service failure callback method
	*/
  	CardsManager.prototype.fetchCardStatus = function(context, presentationSuccess, presentationFailure) {
	    var cardsStatusModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition('Cards');
        cardsStatusModel.customVerb('getTravelNotificationStatus', context, completionCallBack);
		function completionCallBack(status, data, error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj["status"] === true) {
				presentationSuccess(obj["data"]);
			} else
				presentationFailure(obj["errmsg"]);
		}
	};

	/**
	* Method used to create card requst.
	* @param {Object} context - contains the info like username.
	* @param {function} presentationSuccess - service success callback method 
	* @param {function} presentationFailure - service failure callback method
	*/
  	CardsManager.prototype.createCardRequest = function(context, presentationSuccess, presentationFailure) {
	    var cardsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition('Cards');
        cardsModel.customVerb('createCardRequest',context, onCompletion);
		function onCompletion(status, data, error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj["status"] === true) {
				presentationSuccess(obj["data"]);
			} else
				presentationFailure(obj["errmsg"]);
		}
	};
  
  	/**
	* Method used to deleteNotification.
	* @param {Object} context - contains the travel notificationId.
	* @param {function} presentationSuccess - service success callback method 
	* @param {function} presentationFailure - service failure callback method
	*/
  	CardsManager.prototype.deleteNotification = function(context, presentationSuccess, presentationFailure) {
	    var cardsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Cards");                
        cardsModel.customVerb("deleteTravelNotification", context, completionCallBack);
		function completionCallBack(status, data, error) {
			var srh = applicationManager.getServiceResponseHandler();
			var obj = srh.manageResponse(status, data, error);
			if (obj["status"] === true) {
				presentationSuccess(obj["data"]);
			} else
				presentationFailure(obj["errmsg"]);
		}
	};

	/**
     * Method used to fetch active cards.
     * @param {function} presentationSuccess - service success callback method 
     * @param {function} presentationFailure - service failure callback method
     */
    CardsManager.prototype.fetchActiveCards = function(presentationSuccess, presentationFailure) {
        var cardsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Cards");
        cardsModel.customVerb("getActiveCards", {}, completionCallBack);

        function completionCallBack(status, data, error) {
            var srh = applicationManager.getServiceResponseHandler();
            var obj = srh.manageResponse(status, data, error);
            if (obj["status"] === true) {
                presentationSuccess(obj["data"]);
            } else presentationFailure(obj["errmsg"]);
        }
    };
	return CardsManager;
});