/**
*@module PresentationUtility
*/
define([], function () { 
/**
   * PresentationUtility consists of all utilities anf wrapper functions related to Presentation 
   *@alias module:PresentationUtility
   *@class
*/ 

    function PresentationUtility() { 
/*
  A variable maintained to store row index globally on swipe 
  Note:It is maintained to delete on swipe till platform fix issue related to segment
*/

/**@member {integer}  number to maintain index for swipe*/

  this.rowIndexforSwipe=-1;

    } 

    inheritsFrom(PresentationUtility, kony.mvc.Business.Delegator); 

    PresentationUtility.prototype.initializeBusinessController = function() { 

    }; 


/**
  * A wrapper on kony alert message for further use
  * @param {JSON} basicConfig - same as basicConfig in kony.ui.Alert
  * @param {JSON} pspConfig - same as pspConfig in kony.ui.Alert
*/
PresentationUtility.prototype.showAlertMessage =  function(basicConfig, pspConfig ){
    if(kony.os.deviceInfo().name === "android"){
      basicConfig.alertIcon="transparentbox.png";
    }
	kony.ui.Alert(basicConfig, pspConfig);
}


/**
  * Returns value of given i18n key in device's locale
  * @param {String} i18n Key - an i18n key to look out for
  * @param {String} noKeyValue(optonal) - returns this when lookout failed 
  * @returns {String} - value associated to that key if its not there noKeyValue is returned
  */
PresentationUtility.prototype.getStringFromi18n = function (stringValue,noKeyValue)
{
   return  kony.i18n.getLocalizedString(stringValue) ? kony.i18n.getLocalizedString(stringValue):noKeyValue;
}



/**
  * A UI function to show loading indicator
*/
 PresentationUtility.prototype.showLoadingScreen = function(){
    kony.application.showLoadingScreen(null,"", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
 }

/**
  * A UI function to dismiss loading indicator
*/
 PresentationUtility.prototype.dismissLoadingScreen = function(){
    kony.application.dismissLoadingScreen();
 }
 

/**
  * Returns the controller of the requested form
  * @param {String} formname - Name of the form for which the controller is required
  * @param {Boolean} isForm - expects true if the requested controller is of a form 
  * @returns {object} - returns the requested controller(kony.mvc.MDAFormController)
  */
  PresentationUtility.prototype.getController = function(formname,isForm){
   var controller = _kony.mvc.GetController(formname, isForm);
   return controller;               
 };

    return PresentationUtility;

});