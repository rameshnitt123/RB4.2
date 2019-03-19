define({ 

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },
  
  frmLocationPreshow: function() {
    this.view.flxMap.setVisibility(true);
    this.view.flxCurrentLocation.setVisibility(false);
    this.setGesture();
    this.bindData();
    this.initHeaderActions();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  initHeaderActions: function() {
	if (!this.isIpad()) {
      this.view.customHeaderTablet.setVisibility(true);
	  this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
	  this.view.customHeaderTablet.flxHeader.btnRight.onClick = this.handleCancelAction;
      this.view.forceLayout();
	}
  },
  
  isIpad: function() {
	var deviceUtilManager = applicationManager.getDeviceUtilManager();
    return deviceUtilManager.isIpad();
  },
  
  backNavigation: function() {
	var navManager = applicationManager.getNavigationManager();	
	navManager.goBack();
  },

  handleCancelAction: function() {
    var navManager = applicationManager.getNavigationManager();	
	navManager.goBack();
  },
  
  showFullDirections: function() {
    this.view.imgDirections.src = "carddown.png";
    if (!this.isIpad()) {
      this.view.flxDirections.top = "56dp";
    } else {
      this.view.flxDirections.top = "0dp";
    }
    this.view.flxDirections.bottom = "0dp"; 
    this.view.flxDirections.setVisibility(true);
  },
  
  showgetDirections: function () {
    this.view.flxMap.setVisibility(true);
    this.view.flxDirections.top = "81%";
    this.view.flxDirections.bottom ="-70%";
    this.view.imgDirections.src = "cardup.png";
    this.view.flxDirections.setVisibility(true);
    this.view.flxCurrentLocation.setVisibility(false);
    this.view.forceLayout();
  },
  
  setGesture: function() {
    var scopeObj = this;
    this.view.flxDirections.setGestureRecognizer(
      constants.GESTURE_TYPE_SWIPE, {
        fingers: 1,
      }, 
      function (widgetRef, gestureInfo) {
        if (gestureInfo.swipeDirection === 3) {
          scopeObj.animateFlxUp();
        } else if (gestureInfo.swipeDirection === 4) {
          scopeObj.animateFlxDown();
        }
      }.bind(this));
  },
  
  animateFlxUp: function() {
    var flx;
    if (this.view.flxDirections.isVisible) {
      flx = this.view.flxDirections; 
    } else {
      flx = null; 
    }
    if (flx !== null) {
      flx.animate(
        kony.ui.createAnimation({
          "100": {
            "top": "7%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            },
            "rectified": true
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.5
        }, {});
      
      if (this.view.flxDirections.isVisible) {
        this.showFullDirections(); 
      }
    }
  },
  
  animateFlxDown: function (){
    var flx;
    if (this.view.flxDirections.isVisible) {
      flx = this.view.flxDirections;
    } else { 
      flx = null;
    }
    if (flx !== null) {
      flx.animate(
        kony.ui.createAnimation({
          "100": {
            "top": "81%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            },
            "rectified": true
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.5
        }, {});

      if (this.view.flxDirections.isVisible) {
        this.showgetDirections();
      }
    }
  },
  
  bindData: function() {
    var navManager = applicationManager.getNavigationManager();
    var directions = navManager.getCustomInfo("frmLocationDirections");
    var details = navManager.getCustomInfo("frmLocationDetails");
    var selectedLocation = details.selectedLocation;
    this.selectedLocation = selectedLocation;
    this.showDirections(directions);
  },
  
  showDirections: function(directions) {
    var routes = directions;
    if (routes && routes.length > 0) {
      this.setDirectionsDataToMap(routes);
      this.setStepDirectionsData(routes);
    } else {
      var i18n_noDirections = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.NoDirectionsFound", "Directions are not available for this location");
      this.bindError(i18n_noDirections);
    }
  },
  
  bindError: function(err) {
    applicationManager.getDataProcessorUtility().showToastMessageError(this, err);
  },
  
  setDirectionsDataToMap: function(routes) {
    var destinationInfo = this.selectedLocation;
    var routeColors = ["0000FFFF", "FF00FFFF", "FF0000FF", "FFFF00FF", "0x000000FF"];
    this.routes = [];
    for (var i = 0; i < routes.length; i++) {
      this.routes.push("route" + i);
      this.drawRoute("route" + i, routes[i].polylinePoints, routeColors[i], destinationInfo);
    }
    this.view.mapDirections.setVisibility(true);
  },
  
  drawRoute: function(routeid, polyPoints, color, destinationInfo) {
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var polylineData = locateUsModule.presentationController.processPolylineData(routeid, polyPoints, color, destinationInfo);
    this.addPolylineToMap(polylineData, destinationInfo);
  },

  /**
  *add the polyline to map
  */
  addPolylineToMap: function(polylineData, destinationInfo) {
    kony.print("####  adding polyline  ####");
    this.view.mapDirections.zoomLevel = 15;
    this.view.mapDirections.addPolyline(polylineData);
    kony.print("#### added polyline with data " + JSON.stringify(polylineData) + " ####");
    this.view.forceLayout();
  },

  /**
  *set the text routes to segment
  */
  setStepDirectionsData: function(routes) {
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var stepData = locateUsModule.presentationController.processStepDirectionsData(routes);
    this.view.lblDistanceAndTime.text = String(stepData.totalDistance) + " (" + String(stepData.totalDuration) + ")";
    this.view.segDirections.setData(stepData.directionsList);
  },
  
 });