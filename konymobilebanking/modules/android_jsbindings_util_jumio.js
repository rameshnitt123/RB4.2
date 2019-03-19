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
if(typeof(com) === "undefined" || com === null)
	com = {};

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

com.jumio.nv.NativeClasses = (function(){
	
	var instance = null;

	function importClasses(){
		var nativeClasses = {};

		//TODO: import all native classes and populate them in "nativeClasses"
		nativeClasses.ArrayList = java.import('java.util.ArrayList');
		nativeClasses.KonyMain = java.import("com.konylabs.android.KonyMain");
		nativeClasses.NetverifySDK = java.import("com.jumio.nv.NetverifySDK");
		nativeClasses.NVDocumentVariant = java.import("com.jumio.nv.data.document.NVDocumentVariant");
		nativeClasses.NVDocumentType = java.import("com.jumio.nv.data.document.NVDocumentType");
		nativeClasses.JumioCameraPosition = java.import("com.jumio.core.enums.JumioCameraPosition");
		nativeClasses.JumioDataCenter = java.import("com.jumio.core.enums.JumioDataCenter");
      	nativeClasses.Calendar = java.import("java.util.Calendar");
		
		nativeClasses.NetverifyInitiateCallback = java.newClass("NetverifyInitiateCallback","java.lang.Object",["com.jumio.nv.NetverifyInitiateCallback"],
		{
			onNetverifyInitiateSuccess:function(){this.onSuccess();},
			onNetverifyInitiateError:function(errorCode,errorDetail,errorMessage,retryPossible){this.onError(errorCode,errorDetail,errorMessage,retryPossible);},
			onSuccess:null,
			onError:null
		});
		nativeClasses.ActivityResultListener = java.newClass("ActivityResultListener","java.lang.Object",["com.konylabs.ffi.ActivityResultListener"],
		{
			onActivityResult:function(requestCode,resultCode,data){this.onActivityResultCallback(requestCode,resultCode,data);},
			onActivityResultCallback:null
		});
		
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