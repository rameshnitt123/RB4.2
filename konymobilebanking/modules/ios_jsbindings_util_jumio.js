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

    nativeClasses.CustomizationUtil = objc.import("Util");
    nativeClasses.NetverifyConfiguration = objc.import("NetverifyConfiguration");
    nativeClasses.NetverifyViewController = objc.import("NetverifyViewController");
    nativeClasses.UIApplication = objc.import('UIApplication');
    nativeClasses.NetverifyMrzData = objc.import("NetverifyMrzData");

    if(nativeClasses.NetverifyConfiguration == undefined || nativeClasses.NetverifyViewController == undefined || nativeClasses.NetverifyMrzData == undefined || nativeClasses.CustomizationUtil == undefined)
    {
            throw 'Native class not found.';
    }
    nativeClasses.NetverifyViewControllerDelegate =  objc.newClass('NVControllerDelegate', 'NSObject',
                                                                   [ 'NetverifyViewControllerDelegate' ], {
      netverifyViewControllerDidFinishWithDocumentDataScanReference: function (netverifyViewController, documentData, scanReference) {
        this.onScanSuccess(documentData);
      },

      netverifyViewControllerDidCancelWithErrorScanReference: function (netverifyViewController, error, scanReference) {
        if(error){
          this.onScanFailed(error.localizedDescription);
        }else{
          this.onScanSuccess();
        }
      },
      netverifyViewControllerDidFinishInitializingWithError: function (netverifyViewController,error) {
        if(error){
          this.onInitFailed(error.localizedDescription);
        }else{
          this.onInitSuccess();
        }
      },
      onInitSuccess : null,
      onInitFailed : null,
      onScanSuccess : null,
      onScanFailed : null
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
