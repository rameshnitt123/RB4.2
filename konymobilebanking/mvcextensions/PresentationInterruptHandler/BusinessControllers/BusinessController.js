/**
*@module PresentationInterruptHandler
 */
define([], function () { 
  /**
   * PresentationInterruptHandler consists of all methods to handle and present interuptions from backend
   *@alias module:PresentationInterruptHandler
   *@class
   */ 
  function PresentationInterruptHandler() { 
  	/**@member {string} alertStatus sets alert status for implementation of showErrorMessage method*/
    this.alertStatus = false;
  } 
  inheritsFrom(PresentationInterruptHandler, kony.mvc.Business.Delegator); 


  PresentationInterruptHandler.prototype.initializeBusinessController = function() {     }; 

  /**
  * Function used to communicate error handling from server to presentation layer.
  * @params {String} handleMode , mode from which response is comming.
  * @params {Object} err, error response form server 
  */
  PresentationInterruptHandler.prototype.showErrorMessage=function(handleMode,err){
    var alertCallback;
    if (handleMode == "postLogin")
      alertCallback = appLogout;
    else if (handleMode == "appLaunch")
      alertCallback = appExit;
    else if (handleMode == "preLogin")
      alertCallback = appHoldOn;
    if (this.alertStatus == false)
    {
      kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO_ERROR,
        "alertTitle": "Error",
        "message": err.errorMessage,
        "alertHandler": alertCallback
      }, {});
      this.alertStatus = true;
    }

    function appExit(response){
      this.alertStatus = false;
      kony.application.exit();
    }
    function appLogout(response){
     this.alertStatus = false;
      var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
      authMode.presentationController.onLogout();
    }
    function appHoldOn(response){
      this.alertStatus = false;
      kony.print("Error");
    }
  };



  return PresentationInterruptHandler;

});