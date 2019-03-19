/**
  *@module DirectMarketingManager
 */

  
  define([], function() {
   /**
   *This is class named DirectMarketingManager which handles all functions related to Advertisements in the application
   *@alias module:DirectMarketingManager
   *@class
   */

function DirectMarketingManager(){
   /**@member {Boolean} renderPreLoginAds Contains data whether prelogin ads can be rendered to view(frmLogin) at view's preshow level or not */
    this.renderPreLoginAds = false;
   /**@member {Boolean} preLoginAdsFetched Contains data whether prelogin ads data is available or not*/
    this.preLoginAdsFetched = false;
   /**@member {Boolean} postLoginAdsFetched Contains data whether postlogin ads data is available or not*/
    this.postLoginAdsFetched = false;
   /**@member {Array} Json array - preLoginAds Contains fetched prelogin ad data*/
   	this.preLoginAds = [];
   /**@member {Array} Json array - postLoginAds Contains fetched postlogin ad data*/
    this.postLoginAds = [];
   /**@member {Array} Json array - infeedAds Contains infeed ad data - obtained from postlogin ad data*/
    this.infeedAds = [];
   /**@member {Integer} maxNumOfPreloginAds Contains the value - maximum number of prelogin ads that can be shown in Application*/
    this.maxNumOfPreloginAds = 5;
   /**@member {Integer} maxNumOfPostLoginAds Contains the value - maximum number of postlogin ads that can be shown in Application*/
    this.maxNumOfPostLoginAds = 5;
   /**@member {Integer} maxNumOfInfeedAds Contains the value - maximum number of infeed ads that can be shown in Application*/
    this.maxNumOfInfeedAds = 5;
   /**@member {String} preloginAdSessionId Contains the sessionId for prelogin ads as obtained when prelogin ads are fetched*/
    this.preloginAdSessionId = "";
   /**@member {String} postLoginAdSessionId Contains the sessionId for postlogin ads as obtained when postlogin ads are fetched*/
    this.postLoginAdSessionId = "";
}

inheritsFrom(DirectMarketingManager, kony.mvc.Business.Delegator);

DirectMarketingManager.prototype.initializeBusinessController = function(){};

/**
  * Set renderPreLoginAds stored in the class.
  * @param {Boolean} - The value with which renderPreLoginAds has to be updated.Called in succes callback of getPreloginAds
  */

DirectMarketingManager.prototype.setRenderPreloginAds =function(value)
{
      this.renderPreLoginAds = value;
};

/**
  * Get renderPreLoginAds stored in the class.
  * @returns {Boolean} - returns whether Prelogin Ad data can be rendered to view(frmLogin) or not.Called in preshow of the form.
  */

DirectMarketingManager.prototype.getRenderPreloginAds =function()
{
       return this.renderPreLoginAds;
};


/**
  * Get the preLoginAdsFetched stored in the class.
  * @returns {Boolean} - returns whether prelogin ads were fetched in this session or not.
  */

DirectMarketingManager.prototype.arePreLoginAdsFetched =function()
{
       return this.preLoginAdsFetched;
};

/**
  * Get the postLoginAdsFetched stored in the class.
  * @returns {Boolean} - returns whether postlogin ads were fetched in this session or not.
  */

DirectMarketingManager.prototype.arePostLoginAdsFetched =function()
{
       return this.postLoginAdsFetched;
};

/**
  * Get the maxNumOfPreloginAds stored in the class.
  * @returns {Integer} - maxNumOfPreloginAds that the Application can show.
  */

DirectMarketingManager.prototype.getMaxNumOfPreloginAds=function()
{
       return this.maxNumOfPreloginAds;
};


/**
  * Get the maxNumOfPostLoginAds stored in the class.
  * @returns {Integer} - maxNumOfPostLoginAds that the Application can show.
  */

DirectMarketingManager.prototype.getMaxNumOfPostLoginAds=function()
{
       return this.maxNumOfPostLoginAds;
};


/**
  * Get the maxNumOfInfeedAds stored in the class.
  * @returns {Integer} - maxNumOfInfeedAds that the Application can show.
  */

DirectMarketingManager.prototype.getMaxNumOfInfeedAds=function()
{
       return this.maxNumOfInfeedAds;
};


/**
  * Get the preLoginAdsSessionId stored in the class.
  * @returns {String} - sessionId of preLoginAds.
  */

DirectMarketingManager.prototype.getPreLoginAdsSessionId=function()
{
       return this.preloginAdSessionId;
};

/**
  * Get the postLoginAdsSessionId stored in the class.
  * @returns {String} - sessionId of postLoginAds.
  */

DirectMarketingManager.prototype.getPostLoginAdsSessionId=function()
{
       return this.postLoginAdSessionId;
};


/**
  * Get the preLoginAds  stored in the class.
  * @param {function} presentationSuccessCallback will be called when call is successfull
  * @param {function} presentationErrorCallback will be called when call is not successfull
  * @returns {Array} - json Array of preLoginAds if they were already fetched
  */

DirectMarketingManager.prototype.getPreLoginAds=function(presentationSuccessCallback,presentationErrorCallback)
{
  if(!this.preLoginAdsFetched)
    {
      this.getLocationAndFetchAdsHelper("preLoginAds",presentationSuccessCallback,presentationErrorCallback);
    }
  else
    {
       return this.preLoginAds;
    }
};
/**
  * Get the postLoginAds  stored in the class
  * @param {function} presentationSuccessCallback will be called when call is successfull
  * @param {function} presentationErrorCallback will be called when call is not successfull
  * @returns {Array} - json Array of postLoginAds if they were already fetched
  */

DirectMarketingManager.prototype.getPostLoginAds=function(presentationSuccessCallback,presentationErrorCallback)
{
  if(!this.postLoginAdsFetched)
    {
      this.getLocationAndFetchAdsHelper("postLoginAds",presentationSuccessCallback,presentationErrorCallback);
    }
  else
    return this.postLoginAds;
};

/**
  * Get the infeedAds  stored in the class.
  * @returns {Array} - json Array of infeedAds.
  */

DirectMarketingManager.prototype.getInfeedAds=function()
{
   return this.infeedAds;
};

/**
  * wrapper class to getLocationAndFetchAds
  * makes sure that the location api called is run on Main Thread.
  * @param  - params to be passed to getLocationAndFetchAds
  */
DirectMarketingManager.prototype.getLocationAndFetchAdsHelper = function(adType,presentationSuccessCallback,presentationErrorCallback){
	kony.runOnMainThread(this.getLocationAndFetchAds.bind(this),[adType,presentationSuccessCallback,presentationErrorCallback]);
};

/**
  * wrapper class to getAds - As location has to be fetched before fetching ads
  * Get the current location attributes(latitude & longitude) and call getAds along with latitude & longitude information 
  * latitude and longitude are null if user denies location permissions
  * @param {String} - adType (preloginAds or postLoginAds) of the ads to be fetched
  * @param {function} presentationSuccessCallback  - as passed to getPostLoginAds/getPreLoginAds
  * @param {function} presentationErrorCallback - as passed to getPostLoginAds/getPreLoginAds
  */
DirectMarketingManager.prototype.getLocationAndFetchAds = function(adType,presentationSuccessCallback,presentationErrorCallback)
{
	var scope =this;
    var positionoptions = {timeout:32000,fastestInterval:0,minimumTime : 0};
   kony.location.getCurrentPosition(geoLocationSuccessCallBack, geoLocationErrorCallBack, positionoptions);
      //kony.runOnMainThread(kony.location.getCurrentPosition,[geoLocationSuccessCallBack, geoLocationErrorCallBack, positionoptions]);
  function geoLocationSuccessCallBack(response){
      if(response && response.coords && response.coords.latitude && response.coords.longitude){
        var latitude =response.coords.latitude;
        var longitude =response.coords.longitude; 
        scope.getAds(adType,presentationSuccessCallback,presentationErrorCallback,latitude,longitude);
      }
  }
    function geoLocationErrorCallBack(err)
  {
     var logger = applicationManager.getLoggerManager();
    var errorMsg = "Couldn't fetch location attributes - Error code: " + err.code;
    errorMsg = errorMsg  + " message: " + err.message;
    logger.log("####"+errorMsg);
    scope.getAds(adType,presentationSuccessCallback,presentationErrorCallback);
  }
};

/**
  * Get the ads based on adType using a service call
  * @param {String} adType - (preloginAds or postLoginAds) of the ads to be fetched
  * @param {function} presentationSuccessCallback  - as passed to getPostLoginAds/getPreLoginAds
  * @param {function} presentationErrorCallback - as passed to getPostLoginAds/getPreLoginAds
  * @param {Float} lat - latitude of current location 
  * @param {Float} long - longitude of current location
  */
DirectMarketingManager.prototype.getAds = function(adType,presentationSuccessCallback,presentationErrorCallback,lat,long){
  var scope = this;
  var flowposition = null;
  //postLoginAds - full screen Ads and Ads on account dashboard
  //preLoginAds - Ads on Login page
  if(adType === "postLoginAds")
    {
      flowposition = "mobile_postlogin_ad_new";
    }
  else if(adType === "preLoginAds")
   {
      flowposition = "mobile_prelogin_ad_new2";
   }
  
  var lang = "en";
  var channelid  = 4;
  
  var deviceUtilManager = applicationManager.getDeviceUtilManager();
  var width = deviceUtilManager.getDeviceInfo().deviceWidth;
  var height = deviceUtilManager.getDeviceInfo().deviceHeight;
  var resolution = width+"x"+height;
  //username
  var userObj = applicationManager.getUserPreferencesManager();
  var username = userObj.getUserName();
  if(username === null || username === undefined)
  username = "";
  var paramObj = {};
   paramObj["flowposition"] = flowposition;
   paramObj["timezone"] = new Date().toString().match(/([A-Z]+[\+-][0-9]+)/)[1];
   paramObj["lang"] = lang;
   paramObj["resolution"] = resolution;
   paramObj["channelid"] = channelid;
   paramObj["externalid"] = username;
   paramObj["latitude"] = lat;
   paramObj["longitude"] = long;
    var advertisementModel  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("DirectMarketing");
    advertisementModel.addAttribute("interactions");
	advertisementModel.customVerb('getDirectMarketingAds',paramObj,getAllCompletionCallback);
    
	function  getAllCompletionCallback(status,  data,  error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error);
    var logger = applicationManager.getLoggerManager();
    if(adType === "postLoginAds")
        {
          scope.postLoginAdsFetched = true;
        }
      else if(adType === "preLoginAds")
        {
          scope.preLoginAdsFetched = true;
        }
      if(obj["status"] === true){
       logger.log("####Successfully fetched ads of type :"+adType);
        scope.splitAds(adType,obj["data"]);
        if(presentationSuccessCallback)
          {
             if(adType==="postLoginAds")
               {
                 presentationSuccessCallback(scope.postLoginAds);
               }
            else
              {
                presentationSuccessCallback(obj["data"]);
              }
          }
    }
    else {
      logger.log("####Couldn't fetch ads of type :"+adType);
      if(presentationErrorCallback)
        {
          presentationErrorCallback(obj["errmsg"]);
        }
      
    }
	}
};
  
/**
  * Assign the adsData fetched to appropriate adtype(prelogin, postlogin & infeed respectively)
  * @param {String} - adType (preloginAds or postLoginAds) of the ads fetched
  * @param {Array} - adsData - actual adData obtained from service call
  */
DirectMarketingManager.prototype.splitAds = function(adType,adsData) {
  var adsArray = adsData;
  var sessionId = adsData.sessionId;
   var logger = applicationManager.getLoggerManager();
  if(adType === "preLoginAds")
    {
      this.preloginAdSessionId = sessionId;
      this.preLoginAds = adsArray;
      if(!adsArray)
        logger.log("#### No prelogin Ads found");
    }
  else
    {
      this.postLoginAdSessionId = sessionId;
      var ads = this.getAdsByType(adsArray);
      this.postLoginAds = ads[0];
      this.infeedAds = ads[1];
      if( !ads[0])
        logger.log("#### No:of postLogin Ads found: 0");
      else if(!ads[1])
        logger.log("#### No:of infeed Ads found: 0");
    }
};

/**
  * Called by splitAds to split the ads in postloginads Data to infeed and postlogin(2 different arrays)
  * @param {Array} - JSON array adsData as passed to splitAds
  * @returns {Array} - An array consisting of 2 arrays(postlogin ad array and infeed ad array)
  */
DirectMarketingManager.prototype.getAdsByType = function(adsData){
  var final = [];
    	var infeed = [];
    	var nonInfeed = [];
    	final.push(nonInfeed);
    	final.push(infeed);
 
    	for (var ad in adsData) {
       		if  (adsData[ad].adType === "infeed") {
            	infeed.push(adsData[ad]);
        	} else {
            	nonInfeed.push(adsData[ad]);
        	}
    	}
    	return final;
};

/**
  * send data regarding the interaction done by the user w.r.t Ads, for metrics using a service call
  * @param {object} paramObj - a json consisting of 2 keys : sessionId and navigationId of the interaction
  * @param {function} -  presentationSuccessCallback will be called when call is successfull
  * @param {function} - presentationErrorCallback will be called when call is not successfull
  */
DirectMarketingManager.prototype.sendDmResponse = function(paramObj,presentationSuccessCallback, presentationErrorCallback)
{
  var advertisementRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("DirectMarketing");
	advertisementRepo.customVerb('sendDmResponse',paramObj,getAllCompletionCallback);
	
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
  * Reset's all the Ads class variables to their default values
  */
DirectMarketingManager.prototype.clearAdObjects = function()
{
    this.renderPreLoginAds = false;
    this.preLoginAdsFetched = false;
    this.postLoginAdsFetched = false;
	this.preLoginAds = [];
	this.postLoginAds = [];
	this.infeedAds = [];
    this.maxNumOfPreloginAds = 5;
    this.maxNumOfPostLoginAds = 5;
    this.maxNumOfInfeedAds = 5;
    this.preloginAdSessionId = "";
    this.postLoginAdSessionId = "";
};
return DirectMarketingManager;
});