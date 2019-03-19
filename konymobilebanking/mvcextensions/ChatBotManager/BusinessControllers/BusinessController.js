/**
*@module ChatBotManager
*/
define([], function() {
/**
*@alias module:ChatBotManager
*@class
*/
function ChatBotManager(){
  
}

inheritsFrom(ChatBotManager, kony.mvc.Business.Delegator);

ChatBotManager.prototype.initializeBusinessController = function(){};
/*
* get the sesison token from auth service
* @returns {string} sessionToken
*/
ChatBotManager.prototype.getSessionToken = function(){
  var sdkInstance = kony.sdk.getCurrentInstance();
  var tokens = null;
  var sessionToken = null;
  var configManager = applicationManager.getConfigurationManager();
  if(sdkInstance){
    if(sdkInstance.tokens && sdkInstance.tokens[configManager.constants.IDENTITYSERVICENAME] && sdkInstance.tokens[configManager.constants.IDENTITYSERVICENAME].provider_token && sdkInstance.tokens[configManager.constants.IDENTITYSERVICENAME].provider_token.value){
      sessionToken = sdkInstance.tokens[configManager.constants.IDENTITYSERVICENAME].provider_token.value;
    }
  }
  return sessionToken;
};
/**
*it make service call to the bot server to predict the user text
*@param {string} type whether it is ATM ot other
*@param {string} str contains the user text
*@param {function} callback
*/
ChatBotManager.prototype.predict = function(type,str,callback){
  try{
    var httpClient = new kony.net.HttpRequest();
    httpClient.timeout = 10000;
    httpClient.onReadyStateChange = onReadyStateChanged;
    httpClient.open(constants.HTTP_METHOD_POST,"http://182.73.145.20:443/bot");
    httpClient.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    var postdata = new kony.net.FormData();
    if(type === "showATMS"){
      postdata.append("message",str.str);
      postdata.append("lat",str.lat);
      postdata.append("lon",str.lon);
      postdata.append("type",str.type);
    }
    else{
      postdata.append("message",str);
    }
    var sesisonToken = this.getSessionToken();
    postdata.append("auth_token",kony.sdk.getCurrentInstance().currentClaimToken);
    postdata.append("session_token",sesisonToken);
    httpClient.send(postdata);
    
    function onReadyStateChanged(){
      var readyState = Number(this.readyState.toString());
      var status = Number(this.status.toString());
      if(readyState === 2){
        kony.print("in ready state 2");
      }
      if(readyState === 3){
        kony.print("in ready state 3");
      }
      if(readyState === 4){
        kony.print("in ready state 4");
        if(status === 200){
          kony.print("in status 200");
          callback(this.response);
        }
        else{
          var msg = {"reply" : ["unable to connect to server please try again later!"]};
          callback(msg);
        }
      }
    }
    
  }catch(err){
    
  }
};
return ChatBotManager;
});