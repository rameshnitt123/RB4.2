/**
*@module RegistrationManager
 */
define([], function() {
/**
 * Description of Registration manager
 *@alias module:RegistrationManager 
 *@class
*/
function RegistrationManager(){


}

inheritsFrom(RegistrationManager, kony.mvc.Business.Delegator);

RegistrationManager.prototype.initializeBusinessController = function(){};

RegistrationManager.prototype.hideLoadingIndicator = function() {
  kony.application.setApplicationBehaviors({
        "hideDefaultLoadingIndicator": true
    });
}

/**
  * Function to initialize application Manager
  * @member of RegistrationHandler
  * @returns nothing
  */
RegistrationManager.prototype.setActionsForceTouch = function() {
  var cm = applicationManager.getConfigurationManager();
  var userManager = applicationManager.getUserPreferencesManager();
  var username = userManager.getUserName();
  var quickActionItems = JSON.parse(JSON.stringify(cm.quickActionItems));
  quickActionItems.splice(1,3);
  if(!username && username=== "")
   {
      var actionSet= kony.forcetouch.setQuickActionItems(quickActionItems); 
   }
}
/**
  * Function to fetch the Device registration status using a service call.  
  * @param {JSON} criteria - used to check device registartion status for particular device ID.
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.  
  */
RegistrationManager.prototype.fetchDevRegistrationStatus = function(criteria,presentationSuccessCallback,presentationErrorCallback){
   var self =this;
	var deviceRegistratioRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("DeviceRegistration");
	deviceRegistratioRepo.getByCriteria(criteria,getAllCompletionCallback);
	function  getAllCompletionCallback(status,  data,  error) {
	var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error);
    if(obj["status"] === true){
		presentationSuccessCallback(obj["data"]);
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
	}
};

  /**
  * Function to fetch the Device registration status using a service call.  
  * @param {JSON} criteria - used to check device registartion status for particular device ID.
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.  
  */
RegistrationManager.prototype.fetchDeviceRegistrationStatus = function(criteria,presentationSuccessCallback,presentationErrorCallback){
   var self =this;
	var deviceRegistratioRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("DeviceRegistration");
	deviceRegistratioRepo.getByCriteria(criteria,getAllCompletionCallback);
	function  getAllCompletionCallback(status,  data,  error) {
	var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error);
    if(obj["status"] === true){
		presentationSuccessCallback(obj["data"]);
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
	}
};

/**
  * Function to update device registration status using a service call.
  * @param {record} record - record consist of deviceId which status has to be created or updated.
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */
RegistrationManager.prototype.updateDeviceRegistrationStatus = function(record,presentationSuccessCallback,presentationErrorCallback)
{
    var  deviceRegistratioRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("DeviceRegistration");
  	deviceRegistratioRepo.save (record,saveCompletionCallback,"online");
	function  saveCompletionCallback(status,  data,  error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error);
    if(obj["status"] === true){
		presentationSuccessCallback(obj["data"]);
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
	}
};
/**
  * Function to delete device registration using a service call.
  * @param {object} criteria -  record consist of deviceID which is to be deleted
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */
RegistrationManager.prototype.deleteRegisteredDevice = function(record,presentationSuccessCallback,presentationErrorCallback)
{
    var  deviceRegistratioRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("DeviceRegistration");
    deviceRegistratioRepo.removeById(deviceRegistratioRepo,record,deleteCompletionCallback,"online");
    function  deleteCompletionCallback(status,  data,  error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error);
    if(obj["status"] === true){
      presentationSuccessCallback(obj["data"]);
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
  }
};
/**
  * Function to Track device registration using a service call.
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */
RegistrationManager.prototype.trackRegisteredDevice = function(presentationSuccessCallback,presentationErrorCallback)
{
	  var TrackDeviceRegistartion = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("TrackDeviceRegistration");
      TrackDeviceRegistartion.customVerb('trackDeviceRegistration', {}, completionCallBack);
	  function completionCallBack(status, data, error) {
            var srh = applicationManager.getServiceResponseHandler();
            var obj = srh.manageResponse(status, data, error);
            if (obj.status === true) {
                presentationSuccessCallback(obj.data);
            }
            else {
                presentationErrorCallback(obj.errmsg);
            }
        }
};

/**
  * Function to set setEventTracking API to automatically Capture the Events for Reports
  * @returns nothing
  */
RegistrationManager.prototype.setEventTracking = function() {
  
 KNYMetricsService.setEventTracking(["FormEntry", "Error", "Crash", "FormExit", "ServiceResponse"]);
  
};
  
  
/**
  * Function to register the callbacks for push notifications
  * @member of RegistrationManager
  * @returns nothing
  */
RegistrationManager.prototype.registerCallBacksForPushNotifications = function(){
  var callbacks = {
    onsuccessfulregistration : this.registerToGCMorAPNSSuccess.bind(this),
    onfailureregistration : this.registerToGCMorAPNSFailure.bind(this),
    onlinenotification : this.receivedOnlineNotification.bind(this),
    offlinenotification : this.receivedOfflineNotification.bind(this),
    onsuccessfulderegistration : this.deRegisterForPushNotificationsSuccess.bind(this),
    onfailurederegistration : this.deRegisterForPushNotificationsFailure.bind(this)
  }; 
  kony.push.setCallbacks(callbacks);
};
/**
  * Function to register the device for push notifications
  * @member of RegistrationManager
  * @returns nothing
  */
RegistrationManager.prototype.registerForPushNotifications = function(){
  this.registerToGCMorAPNS();
};
/**
  * Function to register the device for push notifications to GCM or APNS 
  * @member of RegistrationManager
  * @returns nothing
  */
RegistrationManager.prototype.registerToGCMorAPNS = function(){
  var config = {};
  var deviceUtilManager = applicationManager.getDeviceUtilManager();
  if(deviceUtilManager.isIPhone()){
    config = [0,1,2];
  }
  else{
    config = {senderid : "788748646997"};
  }
  this.registerCallBacksForPushNotifications();
  kony.push.register(config);
};
/**
  * success callback of GCM OR APNS registration
  * @member of RegistrationManager
  * @returns nothing
  */
RegistrationManager.prototype.registerToGCMorAPNSSuccess = function(regId){
  var device = "android";
  var deviceUtilManager = applicationManager.getDeviceUtilManager();
  if(deviceUtilManager.isIPhone()){
    device = "iphone";
  }
  this.subscribeToMFMessagingService(regId,device);
};
/**
  * Failure callback of GCM or APNS registration
  * @member of RegistrationManager
  * @returns nothing
  */
RegistrationManager.prototype.registerToGCMorAPNSFailure = function(error){
  var loggerManager = applicationManager.getLoggerManager();
  loggerManager.log("error "+error+JSON.stringify(error));
};
/**
  * Function to subscribe the device for push notifications to KPNS
  * @member of RegistrationManager
  * @returns nothing
  */
RegistrationManager.prototype.subscribeToMFMessagingService = function(regId,ostype){
  var deviceId = kony.os.deviceInfo().deviceid;
  var userObj = applicationManager.getUserPreferencesManager();
  var userName = userObj.getUserName();
  try{
    var msgClient = kony.sdk.getCurrentInstance().getMessagingService();
    var name = "androidgcm";
    if(ostype === "iphone"){
      name = "iphone";
    }
    msgClient.register(name,deviceId,regId,userName,function(response){
      var loggerManager = applicationManager.getLoggerManager();
      loggerManager.log("subscription successfull");
    },function(error){
      var loggerManager = applicationManager.getLoggerManager();
      loggerManager.log("subscription failed");   
    });
  }catch(e){
    var loggerManager = applicationManager.getLoggerManager();
    loggerManager.log(e);
  }
};
  
/**
  * Function to de register the device for push notifications
  * @member of RegistrationManager
  * @returns nothing
  */
RegistrationManager.prototype.deRegisterForPushNotifications = function(){
  var config = {};
  kony.push.deRegister(config);
};
/**
  * success callback of deregistration to GCM or APNS
  * @member of RegistrationManager
  * @returns nothing
  */ 
RegistrationManager.prototype.deRegisterForPushNotificationsSuccess = function(){
  this.unSubscribeMFMessagingService();
};
/**
  * Failure callback of deregistration to GCM or APNS
  * @member of RegistrationManager
  * @returns nothing
  */
RegistrationManager.prototype.deRegisterForPushNotificationsFailure = function(){
  this.unSubscribeMFMessagingService();
};
/**
  * Function to unsubscribe the device from KPNS
  * @member of RegistrationManager
  * @returns nothing
  */
RegistrationManager.prototype.unSubscribeMFMessagingService = function(){
  try{
    var msgClient = kony.sdk.getCurrentInstance().getMessagingService();
    msgClient.unregister(function(response){
      
    },function(error){
      
    });
  }catch(err){
    
  }
};
/**
  * callback function for online notification
  * @member of RegistrationManager
  * @returns nothing
  */ 
RegistrationManager.prototype.receivedOnlineNotification = function(message){
  alert(JSON.stringify(message));
};
/**
  * callback function for offline notification
  * @member of RegistrationManager
  * @returns nothing
  */
RegistrationManager.prototype.receivedOfflineNotification = function(msg){
  alert(JSON.stringify(msg));
};

return RegistrationManager;
});