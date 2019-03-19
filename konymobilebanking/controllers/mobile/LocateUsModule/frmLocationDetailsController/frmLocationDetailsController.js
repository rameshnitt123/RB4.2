define({
  timerCounter : 0,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  frmLocationPreshow: function () {
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.setVisibility(true);
    }
    else{
      this.view.flxHeader.setVisibility(false);
    }
    this.setFlowActions();
    this.setDetailsData();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  frmPostShow : function(){
    var Detailsheight = this.view.flxDetailsMain.frame.height;
    this.view.flxDetailsDirections.centerY = (Detailsheight/2) + "dp";
    this.view.flxSeparator.height = (Detailsheight-40) + "dp";
    this.view.forceLayout();
  },
  setFlowActions : function(){
    var scope = this;
    this.view.flxDetailsDirections.onClick = function () {
        // navigate to directions form
      scope.getDirections();
    };
    this.view.customHeader.flxBack.onClick = function(){
      scope.navigateBack();
    };
  },
  navigateBack : function(){
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },
  setDetailsData : function(){
    var navigationManager = applicationManager.getNavigationManager();
    var data = navigationManager.getCustomInfo("frmLocationDetails");
    var selectedLocation = data.selectedLocation;
    var details = data.locationDetails;
    this.selectedLocation = selectedLocation;
    this.view.lblBranchName.text = selectedLocation.name;
    this.view.lblStatus.text  = selectedLocation.calloutStatus.text;
    this.view.lblStatus.skin = selectedLocation.calloutStatus.skin;
    this.view.lblAddress1.text = selectedLocation.desc;
    this.view.lblAddress2.text = "";
    this.view.lblDistance.text = "";
    
    if(details && details.services){
      selectedLocation.services = details.services;
    }
    else{
      selectedLocation.services = "No Data Available";
    }
    var serviceListValue=selectedLocation.services.split("||");
    var segListServiceData = [];
    for(var i=0; i<serviceListValue.length;i++){
      if(serviceListValue[i] !== 'point_of_interest'){
        segListServiceData.push({
          "lblBullet": ".",
          "lblService":serviceListValue[i]  
        });
      }
    }
    this.view.segServices.setData(segListServiceData);
    
    if(details && details.workingHours){
      selectedLocation.workingHours = details.workingHours;
    }
    else{
      selectedLocation.workingHours = "No Data Available";
    }
    
    var workingHoursValue=selectedLocation.workingHours.split("||");
    var segListOperationData = [];
    for(i=0; i<workingHoursValue.length;i++){
      var splitRes = workingHoursValue[i].split(":");
      var resultHrs = splitRes[0];
      var resultsHrsValue = "";
      for(index = 1;index<splitRes.length;index++){
        if(index == 1){
          resultsHrsValue = resultsHrsValue+splitRes[index];
        }
        else{
          resultsHrsValue = resultsHrsValue+":"+splitRes[index];
        }
      }
      segListOperationData.push({
        "lblDay":resultHrs,
        "lblTimings":resultsHrsValue
      });
    }
    this.view.segOperationalHours.setData(segListOperationData);
    this.setDataToCallBranch(details);
  },
  
  /**
  * it enable or disable the CALL Branch button based phone value
  */
  setDataToCallBranch : function(data){
    var scopeObject = this;
    if(data && data.phone){
      this.view.btnCallBranch.isVisible = true;
      this.view.btnCallBranch.onClick = scopeObject.onBtnCallBranchClick.bind(scopeObject,data);
    }
    else{
      this.view.btnCallBranch.isVisible = false;
    }
  },

  /**
  *on CALL BRANCH click it make call to the Branch number
  */
  onBtnCallBranchClick : function(data){
    if(data.phone){
      kony.phone.dial(data.phone);
    }
  },
  
  getDirections : function(){
    var scopeObj = this;
    applicationManager.getPresentationUtility().showLoadingScreen();
    var selectedLocationData = this.selectedLocation;
    if(selectedLocationData !== undefined){
      var source = {};
      var destination = {};
      destination.latitude = selectedLocationData.lat;
      destination.longitude = selectedLocationData.lon;

      var positionoptions = {timeout:64000,fastestInterval:0,minimumTime : 0};
      kony.location.getCurrentPosition(success,failure,positionoptions);
      function success(response){
        if(response && response.coords && response.coords.latitude && response.coords.longitude){
          source.latitude = response.coords.latitude;
          source.longitude = response.coords.longitude;
          var navManager = applicationManager.getNavigationManager();
          navManager.setCustomInfo('LocationsCurrentForm','frmLocationDetails');
          var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
          locateUsModule.presentationController.getDirections(source,destination);
        }
      }
      function failure(error){
        scopeObj.geoLocationErrorCallBack(error);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      }
    }
  },
  geoLocationErrorCallBack: function(err) {
    var scopeObj = this;
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err.code == 1) {
      var i18nKey = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationPermissionDenied");
      scopeObj.bindGenericError(i18nKey);
    }
    if (err.code == 3 && !isIphone) {
      var i18n_timeOut = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationTimeOut");
      scopeObj.bindGenericError(i18n_timeOut);
    }
    if (err.code == 2 && !isIphone) {
      var i18n_turnOnLocationAlert = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.turnOnLocationAlert");
      kony.ui.Alert(i18n_turnOnLocationAlert, scopeObj.onClickSettingsOrCancelHandler.bind(scopeObj), constants.ALERT_TYPE_CONFIRMATION, "Cancel", "Settings", "");
    }
  },
  bindError : function(msg){
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },
  bindGenericError : function(msg)
  {
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  },
});