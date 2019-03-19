/**
  * @module MessagesManager
 */

define([], function () {
  /**
   *This is class named MessagesManager which handles all functions related to Messages in the application
   *@alias module:MessagesManager
   *@class
   */

  function MessagesManager() {
    /**@member {Integer} unreadMessages Contains number of unread messages are there in current user's mail*/
    this.unreadMessages = null;
    /**@member {Array}  messageCategories Contains data of message categories as Json Array - that the Application supports*/
    this.messageCategories = null;
    this.requests = null;
    this.deletedRequests = null;
  }

  inheritsFrom(MessagesManager, kony.mvc.Business.Delegator);

  MessagesManager.prototype.initializeBusinessController = function () { };

  /**
  * Fetches the list of inbox messages(Requests)
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  * @returns {Array} - list of requested Message objects as Json Array
  */
  MessagesManager.prototype.fetchAllRequestsForInbox = function (presentationMsgSuccess, presentationMsgError) {
    var scopeObj = this;
    var messagesRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var param = {
      "username": userManager.getCurrentUserName(),
      "softDeleteFlag": "false"
    };
    messagesRepo.customVerb('getRequests', param, fetchAllRequestsForInboxCompletionCallback);

    function fetchAllRequestsForInboxCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);

      if (obj.status === true) {
        scopeObj.requests = obj.data.customerrequests_view;
        presentationMsgSuccess(obj.data);
      }
      else {
        presentationMsgError(obj.errmsg);
      }
    }
  };

  /** 
   * used to get the requests
   * @returns{requests}  request
  */
  MessagesManager.prototype.getRequests = function () {
    return this.requests;
  };

  /** 
   * used to get the deleted requests
   * @returns{object}  request
  */
  MessagesManager.prototype.getDeletedRequests = function () {
    return this.deletedRequests;
  }


  /** 
  * used to get the un read messages count
  * @returns{string}  count
 */
  MessagesManager.prototype.getUnreadMessagesCount = function () {
    return this.unreadMessages;
  }


  /**
  * Fetches the list of deleted messages(Requests)
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  * @returns {Array} - list of requested Message objects as Json Array
  */
  MessagesManager.prototype.fetchAllRequestsForDeleted = function (presentationMsgSuccess, presentationMsgError) {
    var scopeObj = this;
    var messagesRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var param = {
      "username": userManager.getCurrentUserName(),
      "softDeleteFlag": "true"
    };
    messagesRepo.customVerb('getRequests', param, fetchAllRequestsForDeletedCompletionCallback);

    function fetchAllRequestsForDeletedCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);

      if (obj.status === true) {
        scopeObj.deletedRequests = obj.data.customerrequests_view;
        presentationMsgSuccess(obj.data);
      }

      else {
        presentationMsgError(obj.errmsg);
      }
    }
  };

  /**
  * Fetches the list of categories
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  * @returns {Array} - list of requested Message objects as Json Array
  */
  MessagesManager.prototype.fetchCategoriesForMessages = function (presentationMsgSuccess, presentationMsgError) {
    var messagesRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    messagesRepo.customVerb('getRequestCategory', {}, fetchCategoriesForMessagesCompletionCallback);

    function fetchCategoriesForMessagesCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);

      if (obj.status === true) {
        presentationMsgSuccess(obj.data);
        this.messageCategories = obj.data.requestcategory;
      }
      else {
        presentationMsgError(obj.errmsg);
      }

    }
  };

  /**
  * get the cached list of categories - messageCategories stored in class
  * @returns {Array} - list of Message objects as Json Array
  */
  MessagesManager.prototype.getCategoriesForMessages = function () {
    return this.messageCategories;
  };

  /**
  * Mark the entire request as deleted by making a service call
  * @param {object} record - json consisting of requestid of the request to be deleted
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  */
  MessagesManager.prototype.softDeleteAllMessagesOfARequest = function (record, presentationMsgSuccess, presentationMsgError) {
    var messagesRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var params = {
      "modifiedby": userManager.getCurrentUserName(),
      "softdelete": "true",
      "requestid": record.requestid
    };
    messagesRepo.customVerb('updateRequest', params, softDeleteAllMessagesOfARequestCompletionCallback);

    function softDeleteAllMessagesOfARequestCompletionCallback(status, data, error) {

      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);

      if (obj.status === true) {
        presentationMsgSuccess(obj.data);
      }

      else {
        presentationMsgError(obj.errmsg);
      }
    }

  };

  /**
  * Delete the entire request permanently
  * @param {object} record - json consisting of requestid of the request to be deleted permanently
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  */
  MessagesManager.prototype.hardDeleteAllMessagesOfARequest = function (record, presentationMsgSuccess, presentationMsgError) {
    var messagesRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var params = {
      "modifiedby": userManager.getCurrentUserName(),
      "harddelete": "true",
      "requestid": record.requestid
    };
    messagesRepo.customVerb('updateRequest', params, hardDeleteAllMessagesOfARequestCompletionCallback);

    function hardDeleteAllMessagesOfARequestCompletionCallback(status, data, error) {

      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);

      if (obj.status === true) {
        presentationMsgSuccess(obj.data);
      }
      else {
        presentationMsgError(obj.errmsg);
      }
    }

  };

  /**
  * Restore the entire request which was soft deleted
  * @param {object} record - json consisting of requestid of the request to be restored
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  */
  MessagesManager.prototype.restoreDeletedMessagesOfARequest = function (record, presentationMsgSuccess, presentationMsgError) {
    var messagesRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var params = {
      "modifiedby": userManager.getCurrentUserName(),
      "softdelete": "false",
      "requestid": record.requestid
    };
    messagesRepo.customVerb('updateRequest', params, restoreDeletedMessagesOfARequestCompletionCallback);

    function restoreDeletedMessagesOfARequestCompletionCallback(status, data, error) {

      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);

      if (obj.status === true) {
        presentationMsgSuccess(obj.data);
      }

      else {
        presentationMsgError(obj.errmsg);
      }
    }

  };

  /**
  * Creates a new request by making a service call.
  * @param {object} record - json consisting of following data of the request to be created
  *                        requestcategory - category of the request
  * 					   requestsubject - subject of the request
  *						   messagedescription - actual message to be added to the request
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  */

  MessagesManager.prototype.createNewRequest = function (record, presentationMsgSuccess, presentationMsgError) {
    var messagesRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var params = {
      "createdby": userManager.getCurrentUserName(),
      "username": userManager.getCurrentUserName(),
      "requestcategory_id": record.requestcategory_id,
      "Requestsubject": record.requestsubject,
      "messagedescription": record.messagedescription,
      "Priority": "HIGH"
    };
    messagesRepo.customVerb('CreateNewCustomerRequestWithoutAttachment', params, createNewRequestCompletionCallback);
    function createNewRequestCompletionCallback(status, data, error) {

      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);

      if (obj.status === true) {
        presentationMsgSuccess(obj.data);
      }

      else {
        presentationMsgError(obj.errmsg);
      }
    }

  };

  /**
  * update existing request using a service call.
  * @param {object} record - json consisting of the following data of the request to be updated
  *                        requestid - id of the request
  *						   messagedescription - actual message to be added to the request
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  */

  MessagesManager.prototype.updateExistingRequest = function (record, presentationMsgSuccess, presentationMsgError) {
    var messagesRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var params = {
      "createdby": userManager.getCurrentUserName(),
      "username": userManager.getCurrentUserName(),
      //"requestcategory_id":record.requestcategory_id,
      // "Requestsubject":record.requestsubject,
      "messagedescription": record.messagedescription,
      "requestid": record.requestid,
      "Priority": "HIGH"
    };
    messagesRepo.customVerb('CreateNewCustomerRequestWithoutAttachment', params, updateExistingRequestCompletionCallback);

    function updateExistingRequestCompletionCallback(status, data, error) {

      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);

      if (obj.status === true) {
        presentationMsgSuccess(obj.data);
      }

      else {
        presentationMsgError(obj.errmsg);
      }
    }

  };

  /**
  * Fetches the list of messages in a request
  * @param {object} record - json consisting of requestid of the request whose messages has to be fetched
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  * @returns {Array} -- list of requested Message objects as Json Array
  */
  MessagesManager.prototype.fetchMessagesForARequest = function (record, presentationMsgSuccess, presentationMsgError) {
    var messagesRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    messagesRepo.customVerb('getAllMessagesForARequest', record, fetchMessagesForARequestCompletionCallback);

    function fetchMessagesForARequestCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);

      if (obj.status === true) {
        presentationMsgSuccess(obj.data);
      }

      else {
        presentationMsgError(obj.errmsg);
      }
    }
  };

  /**
  * Update messages of request as read.
  * @param {object} record - json consisting of requestid of the request whose messages status has to be updated as read
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  */
  MessagesManager.prototype.updateRequestAsRead = function (record, presentationMsgSuccess, presentationMsgError) {
    var messagesRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var param = {
      "markallasread": "true",
      "requestid": record.requestid,
      "modifiedby": userManager.getCurrentUserName()
    };
    messagesRepo.customVerb('updateRequest', param, updateRequestAsReadCompletionCallback);

    function updateRequestAsReadCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);

      if (obj.status === true) {
        presentationMsgSuccess(obj.data);
      }

      else {
        presentationMsgError(obj.errmsg);
      }
    }
  };

  /**
  * Get total number of requests having unread messages and 
  * updates unreadMessages stored in class 
  */
  MessagesManager.prototype.fetchNumberOfUnreadMessages = function (presentationMsgSuccess, presentationMsgError) {
    var scope = this;
    var messagesRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var userObj = applicationManager.getUserPreferencesManager();
    var uname = userObj.gettempUserName(); 
    var param = {
      "username": uname
    };
    messagesRepo.customVerb('getUnreadMessageCount', param, fetchNumberOfUnreadMessagesCompletionCallback);

    function fetchNumberOfUnreadMessagesCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);

      if (obj.status === true) {
        scope.unreadMessages = obj.data.unreadMessageCount;
        presentationMsgSuccess(obj.data);
      }
      else {
        scope.unreadMessages = "";
        presentationMsgError(obj.errmsg);
      }
    }
  };

  /**
  * Get the total number of unreadMessages stored in class
  * @returns {Integer} - unreadMessages as updated by fetchNumberOfUnreadMessages
  */
  MessagesManager.prototype.getTotalNumberOfUnreadMessages = function () {
    return this.unreadMessages;
  };

  /**
   * Method to download given attchement in Messages
   * @param {object} params - required parameters to download attachment
   * @param {string} params.mediaId - Media id of the attachment
   * @param {string} params.fileName - attchement file name to download
   */
  MessagesManager.prototype.downloadMessageAttachement = function (params) {
    var mfURL = KNYMobileFabric.mainRef.config.services_meta.RBObjects.url;
    var url = mfURL + "/operations/SecureMessaging/getMessageAttachment?media_id=" + params.mediaId + "&filename=" + params.fileName;
    var element = document.createElement('a');
    element.setAttribute('href', url);
    element.setAttribute('download', params.fileName || 'download');
    element.setAttribute('target', '_blank'); //Tmp fix : Chrome blocked cross orgin download- so in chrome we are opening the file in new window.
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };


  /**
 * Creates a new request with Attachements by making a service call.
 * @param {object} record - json consisting of following data of the request to be created
 * @param {string} record.requestid - json consisting of following data of the request to be created
 * @param {string} record.requestsubject - subject of the request
 * @param {string} record.messagedescription - actual message to be added to the request
 * @param {string} record.requestcategory_id - category of the request
 * @param {object[]} record.files - array of attachements.
 * @param {function} presentationMsgSuccess will be called when call is successfull
 * @param {function} presentationMsgError will be called when call is not successfull
 */
  MessagesManager.prototype.createNewRequestWithAttachments = function (record, presentationMsgSuccess, presentationMsgError) {
    var userManager = applicationManager.getUserPreferencesManager();
    try {
      var xhr = new XMLHttpRequest();
      var params = new FormData();

      if (record.files && record.files.length) {
        for (var i = 0; i < record.files.length; i++) {
          params.append("fileName" + (i > 0 ? i : ""), record.files[i].file);
        }
      }

      if (record.requestid) {
        params.append("requestid", record.requestid);
      }
      if (record.requestsubject) {
        params.append("requestsubject", record.requestsubject);
      }
      params.append("messagedescription", btoa(record.messagedescription));
      params.append("username", userManager.getCurrentUserName());
      params.append("createdby", userManager.getCurrentUserName());
      params.append("priority", "Medium");
      if (record.categoryid) {
        params.append("requestcategory_id", record.requestcategory_id);
      }
      xhr.onreadystatechange = function () {
        var response;
        if (this.readyState === 4 && this.status === 200) {
          response = JSON.parse(this.responseText);
          presentationMsgSuccess(response);
        } if (this.readyState === 4 && this.status !== 200) {
          presentationMsgError(response);
        }
      };
      var mfURL = KNYMobileFabric.mainRef.config.services_meta.RBObjects.url;
      var uploadURL = mfURL + "/operations/SecureMessaging/createCustomerRequest";
      xhr.open("POST", uploadURL, true);
      xhr.setRequestHeader("X-Kony-Authorization", KNYMobileFabric.currentClaimToken);
      xhr.send(params);
    } catch (err) {
      self.presentationMsgError(err);
    }
  }; 

  return MessagesManager;
});