//#ifdef android
//#define idverification_android
//#endif

//#ifdef tabrcandroid
//#define idverification_android
//#endif

//#ifdef iphone
//#define idverification_ios
//#endif

//#ifdef ipad
//#define idverification_ios
//#endif

//#ifdef idverification_ios
if(typeof(com) === "undefined" || com === null){
  /**
		@public
		@namespace
	*/
  com = {};
}

if(com.jumio === undefined || com.jumio === null){
  /**
		@public
		@namespace
	*/
  com.jumio = {};
}

if(com.jumio.nv === undefined || com.jumio.nv === null){
	/**
		@public
		@namespace
	*/
	com.jumio.nv = {};
}

com.jumio.nv.isPresent = function(){
	try{
		com.jumio.nv.NativeClasses.import();
	} catch (e){
		return false;
	}
	return true;
};

com.jumio.IdVerification = (function(){

  var config = null;
  var idVerification = null;
  var nativeClasses = null;
  var NetverifyConfiguration = null;
  var NetverifyViewController = null;
  var netverifyViewController  = null;
  var netverifyViewControllerDelegate = null;

  function IdVerification(serviceConfig){
    config = serviceConfig;
    nativeClasses = com.jumio.nv.NativeClasses.import();
    NetverifyConfiguration = nativeClasses.NetverifyConfiguration;
    NetverifyViewController = nativeClasses.NetverifyViewController;
  }


  IdVerification.prototype.initialize = function(initCallbacks){

    var cameraPermission = kony.application.checkPermission(kony.os.RESOURCE_CAMERA);
    if(cameraPermission.status == kony.application.PERMISSION_DENIED)
    {
      kony.application.requestPermission(kony.os.RESOURCE_CAMERA, permissionCallback);
    }
    else
    {
      _initialize();
    }
    function permissionCallback(permissionStatus)
    {
      if(permissionStatus.status == kony.application.PERMISSION_GRANTED){

        _initialize();

      }else{
        initCallbacks.onError("Initialization failed. Permission denied to access camera");
      }
    }

    function _initialize(){
      //Initialization
      var netverifyCongif = NetverifyConfiguration.jsnew();
      netverifyCongif.merchantApiToken = config.initParams.apiToken;
      netverifyCongif.merchantApiSecret = config.initParams.apiSecret;
      var NetverifyViewControllerDelegate = nativeClasses.NetverifyViewControllerDelegate;
      netverifyViewControllerDelegate = NetverifyViewControllerDelegate.jsnew();
      var jumioUtils = nativeClasses.CustomizationUtil.alloc().jsinit();

      netverifyViewControllerDelegate.onInitFailed = function(error){
        initCallbacks.onError(error);
      };
      netverifyViewControllerDelegate.onInitSuccess = function(){
        initCallbacks.onSuccess();
      };

      netverifyCongif.delegate = netverifyViewControllerDelegate;
      for(var category in config){
        for(var param in config[category]){
          switch(param){
            case "datacenter":
              var datacenter = null;
              if((config[category][param]).toUpperCase() == "EU"){
                datacenter = JumioDataCenterEU;
              } else if((config[category][param]).toUpperCase() == "US"){
                datacenter = JumioDataCenterUS;
              }
              netverifyCongif.dataCenter = datacenter;
              break;
            case "requireVerification":
              netverifyCongif.requireVerification = config[category][param];
              break;
            case "callbackURL":
              netverifyCongif.callbackUrl = config[category][param];
              break;
            case "requireFacematch":
              netverifyCongif.requireFaceMatch = config[category][param];
              break;
            case "dataExtractionOnMobileOnly":
              netverifyCongif.dataExtractionOnMobileOnly = config[category][param];
              break;
            case "country":
              netverifyCongif.preselectedCountry = config[category][param];
              break;
            case "documentVariant":
              var docVariant = null;
              if((config[category][param]).toUpperCase() ==  "Plastic")
                docVariant = NetverifyDocumentVariantPlastic;
              else if((config[category][param]).toUpperCase() ==  "Paper")
                docVariant = NetverifyDocumentVariantPaper;
              netverifyCongif.preselectedDocumentVariant = docVariant;
              break;
            case "documentTypes":
              var diverLicense = null;
              var idCard = null ;
              var passport =null ;
              var visa = null ;
              for(var index in config[category][param]){
                switch((config[category][param][index]).toUpperCase()){
                  case "DRIVER_LICENSE" :
                    diverLicense = NetverifyDocumentTypeDriverLicense;
                    break;
                  case "IDENTITY_CARD" :
                    idCard = NetverifyDocumentTypeIdentityCard;
                    break;
                  case "PASSPORT" :
                    passport= NetverifyDocumentTypePassport;
                    break;
                  case "VISA" :
                    visa = NetverifyDocumentTypeVisa;
                    break;
                }
              }
              netverifyCongif.preselectedDocumentTypes = diverLicense | idCard | passport | visa ;
              break;
            case "merchantScanReference":
              netverifyCongif.merchantScanReference = config[category][param];
              break;
            case "merchantReportingCriteria":
              netverifyCongif.merchantReportingCriteria = config[category][param];
              break;
            case "customerId":
              netverifyCongif.customerId = config[category][param];
              break;
            case "additionalInfo":
              netverifyCongif.additionalInformation = config[category][param];
              break;
            case "setCameraPostion":
              var camPosition = null;
              if((config[category][param]).toUpperCase() == "BACK")
                camPosition = JumioCameraPositionBack;
              else if((config[category][param]).toUpperCase() == "FRONT")
                camPosition = JumioCameraPositionFront;
              netverifyCongif.cameraPosition = camPosition;
              break;

            case "setSelectionButton":
              jumioUtils.setSelectionButtonWithRGBA(config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;
            case "setStatusBarStyleWhite":
              if(config[category][param]===true)
              	netverifyCongif.statusBarStyle = UIStatusBarStyleLightContent;
              break;
            case "setTintColor":
              jumioUtils.setTintColorWithRGBA(config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;
            case "setBackgroundColor":
              jumioUtils.setBackgroundColorWithRGBA(config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;
            case "setTitleTextAttributes":
              jumioUtils.setTitleTextAttributesWithRGBA (config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;
            case "setForegroundColor":
              jumioUtils.setForegroundColorWithRGBA (config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;

            case "setBackgroundColorPositiveButton":
              jumioUtils.setBackgroundColorPositiveButtonWithRGBA (config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;
            case "setBorderColorPositiveButton":
              jumioUtils.setBorderColorPositiveButtonWithRGBA (config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;
            case "setTitleColorPositiveButton":
              jumioUtils.setTitleColorPositiveButtonWithRGBA (config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;

            case "setBackgroundColorNegativeButton":
              jumioUtils.setBackgroundColorNegativeButtonWithRGBA (config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;
            case "setBorderColorNegativeButton":
              jumioUtils.setBorderColorNegativeButtonWithRGBA (config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;
            case "setTitleColorNegativeButton":
              jumioUtils.setTitleColorNegativeButtonWithRGBA (config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;

            case "setBackgroundColorFallbackButton":
              jumioUtils.setBackgroundColorFallbackButtonWithRGBA (config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;
            case "setBorderColorFallbackButton":
              jumioUtils.setBorderColorFallbackButtonWithRGBA (config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;
            case "setTitleColorFallbackButton":
              jumioUtils.setTitleColorFallbackButtonWithRGBA (config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;

            case "setColorOverlayStandard":
              jumioUtils.setColorOverlayStandardWithRGBA (config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;
            case "setColorOverlayValid":
              jumioUtils.setColorOverlayValidWithRGBA (config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;
            case "setColorOverlayInvalid":
              jumioUtils.setColorOverlayInvalidWithRGBA (config[category][param][0],config[category][param][1],config[category][param][2],config[category][param][3]);
              break;
          }
        }
      }
      netverifyViewController = NetverifyViewController.alloc().initWithConfiguration(netverifyCongif);
    }
  };

  IdVerification.prototype.startVerification = function(startCallbacks)
  {
    var UIApplication = nativeClasses.UIApplication;
    UIApplication.sharedApplication().keyWindow.rootViewController.presentViewControllerAnimatedCompletion(netverifyViewController, true, undefined);
    netverifyViewControllerDelegate.onScanSuccess = function(documentData){
      netverifyViewController.dismissViewControllerAnimatedCompletion(true, undefined);
      var documentDataObject = (documentData === null || documentData === undefined) ? null : getDataObject(documentData);
      startCallbacks.onSuccess(documentDataObject);
    };
    netverifyViewControllerDelegate.onScanFailed = function( error){
      netverifyViewController.dismissViewControllerAnimatedCompletion(true, undefined);
      startCallbacks.onError(error);
    };

    function getDataObject(documentData){
      var mrzData = documentData.mrzData;
      function getDocumentType(documentData)
      {
        var docType;
        switch(documentData.selectedDocumentType)
        {
          case NetverifyDocumentTypePassport:docType = "Passport";break;
          case NetverifyDocumentTypeDriverLicense:docType = "DriverLicense";break;
          case NetverifyDocumentTypeIdentityCard:docType = "IdentityCard";break;
          case NetverifyDocumentTypeVisa:docType = "Visa";break;
        }
        return docType;
      }
      function getGender(documentData)
      {
        var genType;
        switch(documentData.gender)
        {
          case NetverifyGenderUnknown:genType = "Unknown";break;
          case NetverifyGenderM:genType = "M";break;
          case NetverifyGenderF:genType = "F";break;
        }
        return genType;

      }
      function getDate(date){
        return {
          "date":(date.getDate()).toString(),
          "month":(date.getMonth()+1).toString(),
          "year":(date.getFullYear()).toString()
        };
      }
      function getMrzFormat(mrzFormat){
        var mrzType;
        var NetverifyMrzData = nativeClasses.NetverifyMrzData;
        switch(mrzFormat)
        {
          case NetverifyMRZFormatUnknown:mrzType = "Unknown";break;
          case NetverifyMRZFormatMRP:mrzType = "MRP";break;
          case NetverifyMRZFormatMRVA:mrzType = "MRVA";break;
          case NetverifyMRZFormatMRVB:mrzType = "MRVB";break;
          case NetverifyMRZFormatTD1:mrzType = "TD1";break;
          case NetverifyMRZFormatTD2:mrzType = "TD2";break;
          case NetverifyMRZFormatCNIS:mrzType = "CNIS";break;

        }
        return mrzType;
      }

      return {
        "addressLine":documentData.addressLine,
        "city":documentData.city,
        "dob":(documentData.dob === null || documentData.dob === undefined )?null:getDate(documentData.dob),
        "expiryDate":(documentData.expiryDate === null || documentData.expiryDate === undefined)?null:getDate(documentData.expiryDate),
        "firstName":documentData.firstName,
        "gender":(documentData.gender === null || documentData.gender === undefined)?null:getGender(documentData),
        "idNumber":documentData.idNumber,
        "issuingCountry":documentData.issuingCountry,
        "issuingDate":(documentData.issuingDate === null || documentData.issuingDate === undefined)?null:getDate(documentData.issuingDate),
        "lastName":documentData.lastName,
        "middleName":documentData.middleName,
        "optData1":documentData.optionalData1,
        "optData2":documentData.optionalData2,
        "originatingCountry":documentData.originatingCountry,
        "personalNumber":documentData.personalNumber,
        "selectedCountry":documentData.selectedCountry,
        "postCode":documentData.postCode,
        "selectedDocumentType":(documentData.selectedDocumentType === null || documentData.selectedDocumentType === undefined)?null:getDocumentType(documentData),
        "subdivision":documentData.subdivision,
        "extractionMethod":(documentData.extractionMethod === null || documentData.extractionMethod === undefined)?null:(documentData.extractionMethod).toString(),
        "mrzData": (mrzData === null || mrzData === undefined) ? null :{
          "format":(mrzData.format===null|| mrzData.format === undefined)?null:getMrzFormat(mrzData.format),
          "line1":mrzData.mrzLine1,
          "line2":mrzData.mrzLine2,
          "line3":mrzData.mrzLine3,
          "idNumberValid":mrzData.idNumberValid,
          "dobValid":mrzData.dobValid,
          "expiryDateValid":mrzData.expiryDateValid,
          "personalNumberValid":mrzData.personalNumberValid,
          "compositeValid":mrzData.compositeValid
        }
      };
    }
  };
  return IdVerification;

})();
//#endif
