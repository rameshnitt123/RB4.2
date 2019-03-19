/**
  * @module AlertsManager
 */
define([], function () {
    /**
       *This is class named MessagesManager which handles all functions related to Messages in the application
       *@alias module:MessagesManager
       *@class
       */
    function AlertsManager() {
        this.alertsData = null;
        this.unreadNotifications = null;

    }

    inheritsFrom(AlertsManager, kony.mvc.Business.Delegator);

    AlertsManager.prototype.initializeBusinessController = function () {
    };

    /** 
 * used to get the deleted requests
 * @returns{object}  alertData
*/
    AlertsManager.prototype.getAlerts = function () {
        return this.alertsData;
    }

    /**
     * used to get the unread notifications count
     * @returns {string} count
     */
    AlertsManager.prototype.getUnreadNotifications = function () {
        return this.unreadNotifications;
    }


    /**
 * used to get the All Notifications
* @param {function} presentationMsgSuccess will be called when call is successfull
* @param {function} presentationMsgError will be called when call is not successfull 
*/
    AlertsManager.prototype.getUserNotifications = function (presentationMsgSuccess, presentationMsgError) {
        var scopeObj = this;
        var notificationsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Notifications");
        notificationsRepo.getAll(updateRequestAsReadCompletionCallback);

        function updateRequestAsReadCompletionCallback(status, data, error) {
            var srh = applicationManager.getServiceResponseHandler();
            var obj = srh.manageResponse(status, data, error);
            if (obj.status === true) {
                scopeObj.alertsData = obj.data;
                presentationMsgSuccess(obj.data);
            }
            else {
                presentationMsgError(obj.errmsg);
            }
        }
    };
    /**
* used to get the unread notifications.
* @param {function} presentationMsgSuccess will be called when call is successfull
* @param {function} presentationMsgError will be called when call is not successfull
*/
    AlertsManager.prototype.getUnreadNotificationCount = function (presentationMsgSuccess, presentationMsgError) {
        var notificationsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Notifications");
        notificationsRepo.customVerb('getUnreadNotificationCount', {}, updateRequestAsReadCompletionCallback);

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
* used to update the unread notifications.
* @param {object} param param
* @param {function} presentationMsgSuccess will be called when call is successfull
* @param {function} presentationMsgError will be called when call is not successfull
*/
    AlertsManager.prototype.updateNotificationAsRead = function (param, presentationMsgSuccess, presentationMsgError) {
        var notificationsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Notifications");
        notificationsRepo.partialUpdate(param, updateRequestAsReadCompletionCallback);
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
* used to delete the notification.
* @param {object} param param
* @param {function} presentationMsgSuccess will be called when call is successfull
* @param {function} presentationMsgError will be called when call is not successfull
*/
    AlertsManager.prototype.deleteNotification = function (param, presentationMsgSuccess, presentationMsgError) {
        var notificationsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Notifications");
        notificationsRepo.customVerb("deleteNotification", param, updateRequestAsReadCompletionCallback);
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
    }

    /**
* used to get the notification by serach param
* @param {object} criteria criteria
* @param {function} presentationMsgSuccess will be called when call is successfull
* @param {function} presentationMsgError will be called when call is not successfull
*/
    AlertsManager.prototype.getNotificationsBySearch = function (criteria, presentationMsgSuccess, presentationMsgError) {
        var scopeObj = this;
        var notificationsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Notifications");
        notificationsRepo.getByCriteria(criteria, updateRequestAsReadCompletionCallback);
        function updateRequestAsReadCompletionCallback(status, data, error) {
            var srh = applicationManager.getServiceResponseHandler();
            var obj = srh.manageResponse(status, data, error);
            if (obj.status === true) {
                scopeObj.alertsData = obj.data;
                presentationMsgSuccess(obj.data);
            }
            else {
                presentationMsgError(obj.errmsg);
            }
        }
    };

    /**
* used to fetch the profile alerts.
* @param {object} params - contains the type of alerts to be fetched.
* @param {function} presentationMsgSuccess will be called when call is successfull
* @param {function} presentationMsgError will be called when call is not successfull
*/
    AlertsManager.prototype.fetchProfileAlerts = function (params, presentationMsgSuccess, presentationMsgError) {
        var scopeObj = this;
        var profileAlerts = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("UserAlerts");
      profileAlerts.customVerb("getAllAlerts",params, completionCallBack);
        function completionCallBack(status, data, error) {
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
* used to update profile alerts.
* @param {object} params - contains the type of alerts to be fetched.
* @param {function} presentationMsgSuccess will be called when call is successfull
* @param {function} presentationMsgError will be called when call is not successfull
*/
    AlertsManager.prototype.updateProfileAlerts = function (params, presentationMsgSuccess, presentationMsgError) {
        var scopeObj = this;
       var alertsDataModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("UserAlerts");
        alertsDataModel.customVerb("updateAlerts", params, completionCallBack);
        function completionCallBack(status, data, error) {
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
    return AlertsManager;
});