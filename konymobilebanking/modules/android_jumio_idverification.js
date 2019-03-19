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

//#ifdef idverification_android
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
	var nativeClasses = null;
	var netverifySDK = null;
	
	function IdVerification(serviceConfig){
		nativeClasses = com.jumio.nv.NativeClasses.import();
		config = serviceConfig;
	}

	IdVerification.prototype.initialize = function(initCallbacks){
		var KonyMain = nativeClasses.KonyMain;
		var NetverifySDK = nativeClasses.NetverifySDK;
		if(!NetverifySDK.isSupportedPlatform(KonyMain.getActContext())){
			initCallbacks.onError("Initialization Failed. Platform is not supported");
			return;
		}
		/*if(NetverifySDK.isRooted(KonyMain.getActContext())){
			initCallbacks.onError("The device is rooted.For security reasons you cannot proceed from a rooted device");
			return;
		}*/
		var cameraPermission = kony.application.checkPermission(kony.os.RESOURCE_CAMERA);
		if(cameraPermission.status == kony.application.PERMISSION_DENIED){
			kony.application.requestPermission(kony.os.RESOURCE_CAMERA, permissionCallback);
		} else {
			_initialize();
		}
		
		function permissionCallback(permissionStatus){
			if(permissionStatus.status == kony.application.PERMISSION_GRANTED){
				_initialize();
			}else{
				initCallbacks.onError("Initialization failed. Permission denied to access camera");
			}
		}
		
		function _initialize(){
			try {
				if(config.initParams.offlineToken){
					if(config.initParams.preferredCountry === undefined)
						config.initParams.preferredCountry = null;
					netverifySDK = NetverifySDK.create(KonyMain.getActContext(),config.initParams.offlineToken,config.initParams.preferredCountry);
				} else if(config.initParams.apiToken && config.initParams.apiSecret){
					var datacenter = null;
					var JumioDataCenter = nativeClasses.JumioDataCenter;
					if((config.initParams.datacenter).toUpperCase() == "EU"){
						datacenter = JumioDataCenter.EU;
					} else if((config.initParams.datacenter).toUpperCase() == "US"){
						datacenter = JumioDataCenter.US;
					}
					netverifySDK = NetverifySDK.create(KonyMain.getActContext(),config.initParams.apiToken,config.initParams.apiSecret,datacenter);
				} 
			} catch (e){
				initCallbacks.onError(e.message);
				return;
			}
			if(!netverifySDK){
				var missval = [];
				var errmsg = "";
				if(!config.initParams.offlineToken){
					missval.push("offlineToken");
				}
				if(!config.initParams.apiToken){
					missval.push("apiToken");
				}
				if(!config.initParams.apiSecret){
					missval.push("apiSecret");
				}
				for(var index in missval){
					errmsg += missval[index];
					if(index<missval.length-1)
						errmsg += ", ";
				}
				initCallbacks.onError("Missing "+errmsg);
				return;
			}
			
			for(var category in config){
				for(var param in config[category]){
					switch(param){
						case "requireVerification":
							netverifySDK.setRequireVerification(config[category][param]); break;
						case "callbackURL":
							netverifySDK.setCallbackUrl(config[category][param]); break;
						case "requireFacematch":
							netverifySDK.setRequireFaceMatch(config[category][param]); break;	
						case "dataExtractionOnMobileOnly":
							netverifySDK.setDataExtractionOnMobileOnly(config[category][param]); break;
						case "country":
							netverifySDK.setPreselectedCountry(config[category][param]); break;
						case "documentVariant":
							var NVDocumentVariant = nativeClasses.NVDocumentVariant;
							var docVariant = null;
							if((config[category][param]).toUpperCase() == "PLASTIC")
								docVariant = NVDocumentVariant.PLASTIC;
							else if((config[category][param]).toUpperCase() == "PAPER")
								docVariant = NVDocumentVariant.PAPER;
							netverifySDK.setPreselectedDocumentVariant(docVariant); 
							break;
						case "documentTypes":
							var ArrayList = nativeClasses.ArrayList;
							var NVDocumentType = nativeClasses.NVDocumentType;
							var documentTypeList = new ArrayList();
							for(var index in config[category][param]){
								switch((config[category][param][index]).toUpperCase()){
									case "DRIVER_LICENSE":
										documentTypeList.add(NVDocumentType.DRIVER_LICENSE);
										break;
									case "IDENTITY_CARD":
										documentTypeList.add(NVDocumentType.IDENTITY_CARD);
										break;
									case "PASSPORT":
										documentTypeList.add(NVDocumentType.PASSPORT);
										break;
									case "VISA":
										documentTypeList.add(NVDocumentType.VISA);
										break;
								}
							}
							netverifySDK.setPreselectedDocumentTypes(documentTypeList); break;
						case "merchantScanReference":
							netverifySDK.setMerchantScanReference(config[category][param]); break;
						case "merchantReportingCriteria":
							netverifySDK.setMerchantReportingCriteria(config[category][param]); break;
						case "customerId":
							netverifySDK.setCustomerId(config[category][param]); break;
						case "additionalInfo":
							netverifySDK.setAdditionalInformation(config[category][param]); break;
						case "enableEMRTD":
							netverifySDK.setEnableEMRTD(config[category][param]); break;
						case "setCameraPostion":
							var JumioCameraPosition = nativeClasses.JumioCameraPosition;
							var camPosition = null;
							if((config[category][param]).toUpperCase() == "BACK")
								camPosition = JumioCameraPosition.BACK;
							else if((config[category][param]).toUpperCase() == "FRONT")
								camPosition = JumioCameraPosition.FRONT;
							netverifySDK.setCameraPosition(camPosition); break;
					}
				}
			}
			var NetverifyInitiateCallback = nativeClasses.NetverifyInitiateCallback;
			var netverifyInitiateCallback = new NetverifyInitiateCallback();
			netverifyInitiateCallback.onSuccess = onNetverifyInitiateSucceed;
			netverifyInitiateCallback.onError = onNetverifyInitiateFailed;
			try{
				netverifySDK.initiate(netverifyInitiateCallback);
			} catch(e){
				initCallbacks.onError(e.message);
			}
			
			function onNetverifyInitiateSucceed() {
				initCallbacks.onSuccess();
			}
			
			function onNetverifyInitiateFailed(errorCode,errorDetail,errorMessage,retryPossible) {
				var compiledError = "Error Code : "+errorCode.toString()+", Error Detail : "+errorDetail.toString()+", Error Message : "+errorMessage;
				initCallbacks.onError(compiledError);
			}
		}
	};

	IdVerification.prototype.startVerification = function(startCallbacks){
		var ActivityResultListener = nativeClasses.ActivityResultListener;
		var activityResultListener = new ActivityResultListener();
		activityResultListener.onActivityResultCallback = activityResult;
		
		var KonyMain = nativeClasses.KonyMain;
		var NetverifySDK = nativeClasses.NetverifySDK;
		(KonyMain.getActContext()).registerActivityResultListener(NetverifySDK.REQUEST_CODE,activityResultListener);
		
		try{
			netverifySDK.start();
		} catch (e){
			startCallbacks.onError(e.message);
		}
		
		
		function activityResult(requestCode,resultCode,data){
			if(requestCode == NetverifySDK.REQUEST_CODE){
				if(resultCode == KonyMain.RESULT_OK){
					var documentData = (data === null) ? null : data.getParcelableExtra(NetverifySDK.EXTRA_SCAN_DATA);
					var documentDataObject = (documentData === null) ? null : getDataObject(documentData);
					startCallbacks.onSuccess(documentDataObject);
				} else if(resultCode == KonyMain.RESULT_CANCELED){
					var errorMessage = data.getStringExtra(NetverifySDK.EXTRA_ERROR_MESSAGE);
					var errorCode = data.getIntExtra(NetverifySDK.EXTRA_ERROR_CODE, 0);
					var compiledError = "Error Code : "+errorCode.toString()+", Error Message : "+errorMessage;
					startCallbacks.onError(compiledError);
				}
			}
			
			if(netverifySDK !== null){
				netverifySDK.destroy();
				netverifySDK = null;
			}
			
			function getDataObject(documentData){
				var mrzData = documentData.getMrzData();
              
              	function toCalendarDate(date){
                  var Calendar = nativeClasses.Calendar;
                  var cal = Calendar.getInstance();
                  cal.setTime(date);
                  return {
                    "year":(cal.get(Calendar.YEAR)).toString(),
                    "month":(cal.get(Calendar.MONTH)+1).toString(),
                    "date":(cal.get(Calendar.DAY_OF_MONTH)).toString()
                  };
                }
              
				return {
					"addressLine":documentData.getAddressLine(),
					"city":documentData.getCity(),
					"dob":(documentData.getDob() === null)?null:toCalendarDate(documentData.getDob()),
					"expiryDate":(documentData.getExpiryDate() === null)?null:toCalendarDate(documentData.getExpiryDate()),
					"firstName":documentData.getFirstName(),
					"gender":(documentData.getGender() === null)?null:(documentData.getGender()).toString(),
					"idNumber":documentData.getIdNumber(),
					"issuingCountry":documentData.getIssuingCountry(),
					"issuingDate":(documentData.getIssuingDate() === null)?null:toCalendarDate(documentData.getIssuingDate()),
					"lastName":documentData.getLastName(),
					"middleName":documentData.getMiddleName(),
					"optData1":documentData.getOptionalData1(),
					"optData2":documentData.getOptionalData2(),
					"originatingCountry":documentData.getOriginatingCountry(),
					"personalNumber":documentData.getPersonalNumber(),
					"placeOfBirth":documentData.getPlaceOfBirth(),
					"postCode":documentData.getPostCode(),
					"subdivision":documentData.getSubdivision(),
					"emrtdStatus":(documentData.getEMRTDStatus() === null)?null:(documentData.getEMRTDStatus()).toString(),
					"extractionMethod":(documentData.getExtractionMethod() === null)?null:(documentData.getExtractionMethod()).toString(),
					"selectedCountry":documentData.getSelectedCountry(),
					"selectedDocumentType":(documentData.getSelectedDocumentType() === null)?null:(documentData.getSelectedDocumentType()).toString(),
					"mrzData": (mrzData === null) ? null :{
						"format":(mrzData.getFormat()===null)?null:(mrzData.getFormat()).toString(),
						"line1":mrzData.getMrzLine1(),
						"line2":mrzData.getMrzLine2(),
						"line3":mrzData.getMrzLine3(),
						"idNumberValid":mrzData.idNumberValid(),
						"dobValid":mrzData.dobValid(),
						"expiryDateValid":mrzData.expiryDateValid(),
						"personalNumberValid":mrzData.personalNumberValid(),
						"compositeValid":mrzData.compositeValid()
					}
				};
			}
		}
	};

	return IdVerification;

})();
//#endif