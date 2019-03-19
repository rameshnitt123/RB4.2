/**
  *@module DeviceUtilManager
  */
define([], function() {
  /**
   * DeviceUtilManager is a utility class which provides device specific APIs 
   *@alias module:DeviceUtilManager
   *@class
   */
  function DeviceUtilManager(){
    /**@member {object} deviceInfo - holds the specific information of the device such as name,version,model,ID etc provided by API*/
    this.deviceInfo = kony.os.deviceInfo();
  };

  inheritsFrom(DeviceUtilManager, kony.mvc.Business.Delegator);

  DeviceUtilManager.prototype.initializeBusinessController = function(){};

  /**
  * Return info about the device 
  * @returns {object} - An object with device name, version, model, ID, width and height.
  */
  DeviceUtilManager.prototype.getDeviceInfo = function(){
    var deviceID = "";
    var version = this.deviceInfo.version;
    if(this.isIPhone()){
      if(version < 6)
        deviceID = this.deviceInfo.customdeviceid;   
      else
        deviceID = this.deviceInfo.identifierForVendor; 
    } 
    else{
      deviceID = this.deviceInfo.deviceid;            
    }   		 
    var obj = {
      "name": this.deviceInfo.name,
      "version":version,
      "model":this.deviceInfo.model,
      "deviceID":deviceID,
      "deviceWidth":this.deviceInfo.deviceWidth,
      "deviceHeight":this.deviceInfo.deviceHeight,
      "screenWidth":this.deviceInfo.screenWidth,
      "screenHeight":this.deviceInfo.screenHeight
    };
    return obj;
  }; 

  /**
  * check whether device is Ipad
  * @returns {boolean} - true if it is an Ipad, false if not
  */
  DeviceUtilManager.prototype.isIpad = function(){
    var isIPad = false;
    try {
      var deviceName = this.deviceInfo.name;
      if (deviceName === "iPad" || deviceName === "iPad Simulator") 
        isIPad = true;
    } catch (e) {
      isIPad = false;
    }
    return isIPad;
  };

  /**
  * check whether device is Iphone
  * @returns {boolean} - true if it is an Iphone, false if not
  */
  DeviceUtilManager.prototype.isIPhone = function(){
    var isIPhone = false;
    try {
      var deviceName = this.deviceInfo.name;
      if (deviceName === "iPhone" || deviceName === "iPhone Simulator" || deviceName === "iPad" || deviceName === "iPad Simulator")
        isIPhone = true;
    } catch (e) {
      isIPhone = false;
    }
    return isIPhone;
  };

  /**
  * check whether device supports touchID
  * @returns {boolean} - true if touchID supported, false if not
  */
  DeviceUtilManager.prototype.isTouchIDSupported = function() {  //returns true if device supports touchId else  false
    var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
    if(status == 5000 && (this.isIphoneX() == false))
    {       
      return true;                
    } 
    else
    {
      return false;
    }
  }

  /**
  * check whether device is iphone X or not
  * @returns {boolean} - true if device is iphoneX, false if not
  */
  DeviceUtilManager.prototype.isIphoneX = function() {  
    if (this.deviceInfo.model == "iPhone X")
      return true;
    else 
      return false;     
  }; 

  /**
  * check whether device supports faceID
  * @returns {boolean} - true if faceID supported, false if not
  */
  DeviceUtilManager.prototype.isFaceIdSupported = function() {  
    var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
    if(this.isIPhone())
    {
      var biometricType = kony.localAuthentication.getBiometryType();
      if ((status == 5007 || status == 5000) && biometricType == constants.BIOMETRY_TYPE_FACEID){
        return true;
      }
      else 
        return false;
    }
    else
      return false;
  };

  /**
  * check whether device supports faceID and it is enabled
  * @returns {boolean} - true if faceID supported, false if not
  */
  DeviceUtilManager.prototype.isFaceIdAvilable = function() {  
    var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
    if(this.isIPhone()){
      var biometricType = kony.localAuthentication.getBiometryType();
      if (status == 5000 && biometricType == constants.BIOMETRY_TYPE_FACEID)
      {
        return true;
      }
      else 
        return false;}
    else
      return false;

  };

  /**
  * Takes the base url of an image and appends extensions like @3x,@2x so on based on device type
  * @param {string} baseurl - input url for image appended url 
 	* @returns {string} - baseurl with proper extension appended.
  */
  DeviceUtilManager.prototype.getImageURLBasedOnDeviceType = function(baseurl) {
    var deviceData =  this.deviceInfo;
    var bannerUrl = baseurl; 
    if(deviceData.name === "iPhone")
    {
      if(deviceData.model.indexOf("iPhone 4") > -1)
        bannerUrl = bannerUrl+".png";
      else if(deviceData.model.indexOf("iPhone 5") > -1)
        bannerUrl = bannerUrl+"@2x.png";
      else if(deviceData.model.indexOf("iPhone 6") > -1)
        bannerUrl = bannerUrl+"@3x.png";
      else 
        bannerUrl = bannerUrl+"@3x.png";
    }
    else
    {
      bannerUrl = bannerUrl+".9.png";
    }
    return bannerUrl;
  };

  return DeviceUtilManager;
});