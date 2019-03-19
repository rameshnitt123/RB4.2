/**
*@module ServiceResponseHandler
 */
define([], function() {

  /**
   * ServiceResponseHandler used to get a proper Success or Error backend response
   *@alias module:ServiceResponseHandler
   *@class
   */
  ServiceResponseHandler = function(){
    /**@member {object} serviceResponseHandler Contains backend response*/
    this.serviceResponseHandler = null;

  };
  /**
   * ManageResponse method is used to format the backend reponse based on the success and error
   * @param {string} status , which contains kony.mvc.constants of success or error 
   * @param {object} response , if status is success the response consists of success response of that service call 
   * @param {object} error , if status is error the error consists of error response of that service call 
   * @return {object} res, returns entire reponse of manageResponse based on the success or error
   */
  ServiceResponseHandler.prototype.manageResponse = function(status,  response,  error){
    /**@member {object} res Contains formatted backend response*/
    var res;
    if(status == kony.mvc.constants.STATUS_SUCCESS){
      kony.print("response:"+JSON.stringify(response));
      if (response.errorCode && response.errorCode !== "3400") {
        res = {
          "status": false,
          "errmsg": {
            "errorMessage" : response.errmsg ? response.errmsg : response.errorMessage
          }
        }
      }
      else  {
        res={"status":true,"data":response}; 
      }
    }
    else{
      if (error.opstatus == 1011)
      {
        if(kony.os.deviceInfo().name === "thinclient" && kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)===false){
          location.reload(); //todo later so that it can be in sync with RB
        }
        else{ 
          isServiceFailure = true;
          if(error.errmsg){
            errMsg = error.errmsg;
          }
          else{
            errMsg = kony.i18n.getLocalizedString("kony.mb.An.error.occurred.while.making.the.request.");
          }
        }
      }
      else
      {
        isServiceFailure = false;
        if(error.errmsg)
          errMsg = error.errmsg;
        else
          errMsg = kony.i18n.getLocalizedString("kony.mb.An.Internal.Error.occured.Please.try.after.sometime.");
      }
      resError={"errorMessage":errMsg,"isServerUnreachable":isServiceFailure,"serverErrorRes":error};
      res={"status":false,"errmsg":resError};

    }
    return res;
  };
  return ServiceResponseHandler;
});

