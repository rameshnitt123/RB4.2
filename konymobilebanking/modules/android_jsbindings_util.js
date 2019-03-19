//#ifdef android
//#define faceid_android
//#endif

//#ifdef tabrcandroid
//#define faceid_android
//#endif

//#ifdef iphone
//#define faceid_ios
//#endif

//#ifdef ipad
//#define faceid_ios
//#endif

//#ifdef faceid_android
if(typeof(com) === "undefined" || com === null)
	com = {};

if(com.gemalto === undefined || com.gemalto === null){
	/** 
		@public
		@namespace
	*/
	com.gemalto = {};
}

if(com.gemalto.idp === undefined || com.gemalto.idp === null){
	/** 
		@public
		@namespace
	*/
	com.gemalto.idp = {};
}

com.gemalto.idp.NativeClasses = (function(){
	
	var instance = null;

	function importClasses(){
		var nativeClasses = {};

		//TODO: import all native classes and populate them in "nativeClasses"
		nativeClasses.KonyMain = java.import("com.konylabs.android.KonyMain");
		nativeClasses.URL = java.import("java.net.URL");
		nativeClasses.Intent = java.import("android.content.Intent");
		nativeClasses.FaceEnrollActivity = java.import("com.kony.gemaltofaceauth.FaceEnrollActivity");
		nativeClasses.FaceEnrollmentActivity = java.import("com.kony.gemaltofaceauth.faceui.FaceEnrollmentActivity");
		nativeClasses.FaceVerifyActivity = java.import("com.kony.gemaltofaceauth.FaceVerifyActivity");
		nativeClasses.FaceVerificationActivity = java.import("com.kony.gemaltofaceauth.faceui.FaceVerificationActivity");
		nativeClasses.ApplicationContextHolder = java.import("com.gemalto.idp.mobile.core.ApplicationContextHolder");
		nativeClasses.IdpCore = java.import("com.gemalto.idp.mobile.core.IdpCore");
		nativeClasses.OtpConfiguration = java.import("com.gemalto.idp.mobile.otp.OtpConfiguration");
		nativeClasses.AuthenticationModule = java.import("com.gemalto.idp.mobile.authentication.AuthenticationModule");
		nativeClasses.FaceAuthService = java.import("com.gemalto.idp.mobile.authentication.mode.face.FaceAuthService");
		nativeClasses.FaceAuthFactory = java.import("com.gemalto.idp.mobile.authentication.mode.face.FaceAuthFactory");
		nativeClasses.FaceAuthSettings = java.import("com.gemalto.idp.mobile.authentication.mode.face.FaceAuthSettings");
		nativeClasses.FaceAuthLicense = java.import("com.gemalto.idp.mobile.authentication.mode.face.FaceAuthLicense");
		nativeClasses.FaceAuthStatus = java.import("com.gemalto.idp.mobile.authentication.mode.face.FaceAuthStatus");
		nativeClasses.OfflineTokenConfigurationBuilder = java.import("com.gemalto.idp.mobile.otp.provisioning.OfflineTokenConfigurationBuilder");
		nativeClasses.EpsConfigurationBuilder = java.import("com.gemalto.idp.mobile.otp.provisioning.EpsConfigurationBuilder");
		nativeClasses.MobileProvisioningProtocol = java.import("com.gemalto.idp.mobile.otp.provisioning.MobileProvisioningProtocol");
		nativeClasses.ClearTextSecretTokenConfigurationBuilder = java.import("com.gemalto.idp.mobile.otp.provisioning.ClearTextSecretTokenConfigurationBuilder");
		nativeClasses.OtpModule = java.import("com.gemalto.idp.mobile.otp.OtpModule");
		nativeClasses.OathService = java.import("com.gemalto.idp.mobile.otp.oath.OathService");
		nativeClasses.CapService = java.import("com.gemalto.idp.mobile.otp.cap.CapService");
		nativeClasses.PinAuthInput = java.import("com.gemalto.idp.mobile.authentication.mode.pin.PinAuthInput");
		nativeClasses.PinAuthService = java.import("com.gemalto.idp.mobile.authentication.mode.pin.PinAuthService");
		nativeClasses.FaceAuthLicenseConfigurationCallback = java.newClass("FaceAuthLicenseConfigurationCallback", 
                                                 "java.lang.Object", 
                                                 ["com.gemalto.idp.mobile.authentication.mode.face.FaceAuthLicenseConfigurationCallback"],
												{
													onSuccess : null,
													onFailed : null,
                                              		onLicenseConfigurationFailure  : function(e){this.onFailed(e.getMessage());},
                                              		onLicenseConfigurationSuccess	: function(){this.onSuccess();}
  
												}
  
			);
		nativeClasses.FaceAuthInitializeCallback = java.newClass("FaceAuthInitializeCallback", 
                                                 "java.lang.Object", 
                                                 ["com.gemalto.idp.mobile.authentication.mode.face.FaceAuthInitializeCallback"],
												{
													onSuccess : null,
													onFailed : null,
													onInitializeCamera : function(cameraNames){return null;},
													onInitializeError  : function(e){this.onFailed(e.getMessage());},
													onInitializeSuccess	: function(){this.onSuccess();}
  
												}
  
			);

		nativeClasses.FaceEnrollmentCallback = java.newClass("FaceEnrollmentCallback",
												"java.lang.Object",
												["com.kony.gemaltofaceauth.FaceEnrollmentCallback"],
												{
  												  enrollSuccess : null,
  												  enrollFailed : null,
  												  onEnrollmentSuccess  : function(faceAuthStatus){this.enrollSuccess();},
  												  onEnrollmentFailed : function(e){this.enrollFailed(e);}
												}
			);

		nativeClasses.FaceVerificationCallback = java.newClass("FaceVerificationCallback",
												"java.lang.Object",
												["com.kony.gemaltofaceauth.FaceVerificationCallback"],
												{
  												  verifySuccess : null,
  												  verifyFailed : null,
  												  onVerificationSuccess  : function(){this.verifySuccess();},
  												  onVerificationFailed : function(e){this.verifyFailed(e);}
												}
			);


		nativeClasses.FaceAuthUnenrollerCallback = java.newClass("FaceAuthUnenrollerCallback", 
		                                                 "java.lang.Object", 
		                                                 ["com.gemalto.idp.mobile.authentication.mode.face.FaceAuthUnenrollerCallback"],
														{
		  												  unenrollFinishCallback : null,
		  												  unenrollErrorCallback : null,
		  												  onUnenrollFinish  : function(faceAuthStatus){this.unenrollFinishCallback(faceAuthStatus);},
		  												  onUnenrollError : function(e){this.unenrollErrorCallback(e.getMessage());}
														}
		  
			);

		return nativeClasses;
	}

	return {
		import : function(){
			if(instance === null){
				instance = importClasses();
			}
			return instance;
		}
	};
})();
//#endif