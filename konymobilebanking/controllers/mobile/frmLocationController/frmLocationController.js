define({
  /*
   variables used in this View Controller
      @ oldLocationData - to store the old map data before navigating to directiosn page
      @ searchString - it will store the searc string from text box
      @ selectedRange - it will store the range select segment selected index
      @ selectedServices - it will store the services selected
  */
  
  frmLocationPreshow: function () {
    var configManager = applicationManager.getConfigurationManager(); 
    MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENULOCATE);
    applicationManager.getPresentationUtility().showLoadingScreen();
    this.setPreshowData();
    this.setFlowActions();
    this.setGesture();
    this.readDataFromNavigatorAndPresentView();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeaderAndSearch.top = "0dp";
    }
    else{
      this.view.flxHeaderAndSearch.top = "-40dp";
    }
  },
  addpin: function () {
    var startPt = {
      id: "pin id",
      lat: "17.4947934",
      lon: "78.3996441",
      meta: {
        color: "green",
        label: "A"
      }
    };
    this.view.mapLocation.addPin(startPt);
  },
  setPreshowData: function () {
    applicationManager.getPresentationUtility().showLoadingScreen();
    this.hideAll();
    this.view.customSearch.tbxSearch.text = "";
    this.view.customSearch.lblLocateUs.text = "LOCATE US";
    this.view.flxHeaderAndSearch.setVisibility(true);
    this.view.flxMap.setVisibility(true);
    this.view.imgListView.src = "listview.png";
    this.view.lblListView.text = "ListView";
    this.view.flxCurrentLocation.isVisible = true;
    this.view.flxMapButtons.bottom = "6%";
    this.view.flxMapButtons.setVisibility(true);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  setFlowActions: function () {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var scopeObj = this;
    this.view.customSearch.tbxSearch.onTouchStart = function () {
      scopeObj.view.flxHeaderAndSearch.isVisible = false;
      scopeObj.view.flxHeaderSearchbox.isVisible = true;
      scopeObj.view.flxHeaderSearchbox.top="0dp";
      scopeObj.view.customSearchbox.tbxSearch.text = scopeObj.view.customSearch.tbxSearch.text;
      scopeObj.view.customSearch.tbxSearch.setFocus(false);
      scopeObj.view.customSearchbox.tbxSearch.setFocus(true);
      scopeObj.view.forceLayout();
    };
    this.view.customSearchbox.tbxSearch.onDone = function(){
      scopeObj.searchLocations();
    };
    this.view.flxCurrentLocation.onClick = function(){
      scopeObj.onClickOfCurrentLocation();
    };
    this.view.customSearchbox.btnCancel.onClick = function(){
      scopeObj.view.flxHeaderAndSearch.isVisible = true;
      scopeObj.view.flxHeaderSearchbox.isVisible = false;
    };
    this.view.flxDetailsMain.onClick = function () {
      if (scopeObj.view.imgDetails.src === "cardup.png")
        scopeObj.showFullDetails();
      else
        scopeObj.showSelectedLocation();
    };
    this.view.flxDetailsDirections.onClick = function () {
      scopeObj.getDirections();
      //scopeObj.showFullDirections();
      // scopeObj.showgetDirections();
    };
    this.view.flxDirectionMain.onTouchEnd = function () {
      if (scopeObj.view.imgDirections.src === "cardup.png")
        scopeObj.showFullDirections();
      else
        scopeObj.showgetDirections();
    };
    this.view.flxBtnListView.onClick = function () {
      var a = scopeObj.view.lblListView.text;
      if (scopeObj.view.lblListView.text === "ListView") {
        scopeObj.showListView();
      } else
        scopeObj.setPreshowData();
        scopeObj.retainSearchBoxText();
    };
    this.view.flxBtnFilters.onClick = function () {
      scopeObj.showFilters();
    };
    this.view.flxFilterClose.onClick = function () {
      scopeObj.view.flxFilters.setVisibility(false);
    };
    this.view.mapLocation.onPinClick = function (mapId,response) {
      scopeObj.onPinClickHandler(mapId,response);
    };
    /*this.view.customSearch.flxBack.onClick = function () {
      scopeObj.navigateBack();
    };
    this.view.customSearch.flxBack.onClick = function () {
      scopeObj.navigateBack();
    };
    */
    this.view.btnApply.onClick = function () {
      //scopeObj.setPreshowData();
      scopeObj.onApplyFilter();
    };

    var self = this.view;
    this.view.segBranchList.onRowClick = function(){
      
      //scopeObj.showFullDetails();
      scopeObj.onListViewRowClickHandler(self.segBranchList.selectedItems[0]);
      //scopeObj.onPinClickHandler(null,self.segBranchList.selectedItems[0]);
      try{
        var index = self.segBranchList.selectedRowIndex[1];
        index = Math.floor(index);
        scopeObj.navigateToGivenIndex(index);
      }catch(err){
        kony.print("err1 "+JSON.stringify(err));
      }
    };

    this.view.segServicesFilter.onRowClick = function(){
      var rowNumber = self.segServicesFilter.selectedRowIndex[1];
      var indices = self.segServicesFilter.selectedRowIndices;
      scopeObj.onRowClickOfSegServicesFilter(indices,rowNumber);
    };
    applicationManager.getPresentationUtility().showLoadingScreen();
  },
  hideAll: function () {
    this.view.flxHeaderAndSearch.setVisibility(false);
    this.view.flxHeaderSearchbox.setVisibility(false);
    this.view.flxMap.setVisibility(false);
    this.view.flxMapButtons.setVisibility(false);
    this.view.flxDetails.setVisibility(false);
    this.view.flxHeaderAndSearch.height = "90dp";
    this.view.flxDirections.setVisibility(false);
    this.view.flxBranchesList.setVisibility(false);
    this.view.flxFilters.setVisibility(false);
    this.view.flxDummy.setVisibility(false);
    this.view.flxDummy2.setVisibility(false);
  },
  showSelectedLocation: function () {
    this.view.flxMapButtons.bottom = "18%";
    this.view.flxDetails.top = "81%";
	this.view.flxDetails.bottom="-70%"; 
    this.view.imgDetails.src = "cardup.png";
    this.view.flxDummy.setVisibility(false);
    this.view.flxHeaderAndSearch.height = "90dp";
    this.view.flxDetails.setVisibility(true);
    this.view.flxBranchesList.setVisibility(false);
    this.view.flxMapButtons.setVisibility(true);
  },
  showHeader: function () {
    this.view.flxHeaderAndSearch.setVisibility(true);
    this.view.flxHeaderSearchbox.setVisibility(false);
    if (this.view.flxBranchesList.isVisible)
      this.view.flxBranchesList.top = "55dp";
  },
  showSearchResult: function () {

  },
  showFullDetails: function () {
    this.view.flxMapButtons.setVisibility(false);
    this.view.flxDummy.setVisibility(true);
    this.view.flxHeaderAndSearch.height = "40dp"
    this.view.flxDetails.setVisibility(true);
    if(kony.os.deviceInfo().name !== "iPhone"){
    	this.view.flxDetails.top = "40dp";
    }
    else{
    	this.view.flxDetails.top = "0dp";
    }
    this.view.flxDetails.bottom="0dp"
    this.view.imgDetails.src = "carddown.png";
    //this.setOperationalHoursData();
    //this.setServicesData();
  },
  setOperationalHoursData: function () {
    var dataMap = {
      "flxOperationHours": "flxOperationHours",
      "lblDay": "lblDay",
      "lblTimings": "lblTimings",
    };
    var data = [{
      "lblDay": {
        "text": "Tue:",
        "skin": "sknLblda8b09SSP93pr"
      },
      "lblTimings": {
        "text": "10:00 am to 5:00 pm",
        "skin": "sknLblda8b09SSP93pr"
      },
      "template": "flxOperationHours"
    },
                {
                  "lblDay": {
                    "text": "Wed:",
                    "skin": "sknLbl424242SSP93pr"
                  },
                  "lblTimings": {
                    "text": "10:00 am to 5:00 pm",
                    "skin": "sknLbl424242SSP93pr"
                  },
                  "template": "flxOperationHours"
                },
                {
                  "lblDay": {
                    "text": "Thu:",
                    "skin": "sknLbl424242SSP93pr"
                  },
                  "lblTimings": {
                    "text": "10:00 am to 5:00 pm",
                    "skin": "sknLbl424242SSP93pr"
                  },
                  "template": "flxOperationHours"
                },
                {
                  "lblDay": {
                    "text": "Fri:",
                    "skin": "sknLbl424242SSP93pr"
                  },
                  "lblTimings": {
                    "text": "10:00 am to 5:00 pm",
                    "skin": "sknLbl424242SSP93pr"
                  },
                  "template": "flxOperationHours"
                },
                {
                  "lblDay": {
                    "text": "Sat:",
                    "skin": "sknLbl424242SSP93pr"
                  },
                  "lblTimings": {
                    "text": "10:00 am to 2:00 pm",
                    "skin": "sknLbl424242SSP93pr"
                  },
                  "template": "flxOperationHours"
                },
                {
                  "lblDay": {
                    "text": "Sun:",
                    "skin": "sknlbla0a0a0SSP93pr"
                  },
                  "lblTimings": {
                    "text": "Closed",
                    "skin": "sknlbla0a0a0SSP93pr"
                  },
                  "template": "flxOperationHours"
                },
                {
                  "lblDay": {
                    "text": "Mon:",
                    "skin": "sknLbl424242SSP93pr"
                  },
                  "lblTimings": {
                    "text": "10:00 am to 5:00 pm",
                    "skin": "sknLbl424242SSP93pr"
                  },
                  "template": "flxOperationHours"
                },
               ];
    this.view.segOperationalHours.widgetDataMap = dataMap;
    this.view.segOperationalHours.setData(data);
    this.view.forceLayout();
  },
  setServicesData: function () {
    var dataMap = {
      "flxServices": "flxServices",
      "lblBullet": "lblBullet",
      "lblService": "lblService",
    };
    var data = [{
      "lblBullet": ".",
      "lblService": "ATM- 24 Hours",
      "template": "flxServices"
    },
                {
                  "lblBullet": ".",
                  "lblService": "Safe Deposit Lockers",
                  "template": "flxServices"
                }
               ];
    this.view.segServices.widgetDataMap = dataMap;
    this.view.segServices.setData(data);
    this.view.forceLayout();
  },
  showgetDirections: function () {
    this.hideAll();
    this.view.customSearch.lblLocateUs.text = "GET DIRECTIONS";
    this.view.flxHeaderAndSearch.setVisibility(true);
    this.view.flxMap.setVisibility(true);
    this.view.flxDirections.top = "81%";
    this.view.flxDirections.bottom="-70%";
    this.view.imgDirections.src = "cardup.png";
    this.view.flxDirections.setVisibility(true);
    this.view.flxHeaderAndSearch.height = "40dp";
    this.view.flxCurrentLocation.isVisible = false;
    this.view.forceLayout();
  },
  showFullDirections: function () {
    this.view.customSearch.lblLocateUs.text = "GET DIRECTIONS";
    this.view.flxDummy2.setVisibility(true);
    this.view.imgDirections.src = "carddown.png";
    this.view.flxBranchesList.setVisibility(false);
    if(kony.os.deviceInfo().name !== "iPhone"){
        this.view.flxDirections.top = "40dp";
    }
    else{
      this.view.flxDirections.top = "0dp";
     }
    this.view.flxDirections.bottom="0dp"; 
    this.view.flxDirections.setVisibility(true);
    this.view.flxHeaderAndSearch.height = "40dp";
    this.view.flxMapButtons.setVisibility(false);
    //this.setDirectionData();
  },
  setDirectionData: function () {
    var dataMap = {
      "flxDirectionData": "flxDirectionData",
      "flxDirections": "flxDirections",
      "flxImgDirection": "flxImgDirection",
      "flxMain": "flxMain",
      "imgDirection": "imgDirection",
      "lblDirection": "lblDirection",
      "lblDistance": "lblDistance",
      "lblSeparator": "lblSeparator",
      "lblSeparator2": "lblSeparator2",
      "lblTime": "lblTime"
    };
    var data = [{
      "imgDirection": {
        "src": "arrow3.png"
      },
      "lblDirection": "Head southwest on S El Camino Real toward W 4th Ave",
      "lblDistance": "80 Feet ",
      "lblSeparator": ".",
      "lblSeparator2": ".",
      "lblTime": "20 Seconds",
      "template": "flxDirections"
    },
                {
                  "imgDirection": {
                    "src": "aarow1.png"
                  },
                  "lblDirection": "Head southwest on S El Camino Real toward W 4th Ave",
                  "lblDistance": "60 Feet ",
                  "lblSeparator": ".",
                  "lblSeparator2": ".",
                  "lblTime": "20 Seconds",
                  "template": "flxDirections"
                },
                {
                  "imgDirection": {
                    "src": "arrow2.png"
                  },
                  "lblDirection": "Head southwest on S El Camino Real toward W 4th Ave",
                  "lblDistance": "10 Feet ",
                  "lblSeparator": ".",
                  "lblSeparator2": ".",
                  "lblTime": "20 Seconds",
                  "template": "flxDirections"
                },
                {
                  "imgDirection": {
                    "src": "arrow3.png"
                  },
                  "lblDirection": "Head southwest on S El Camino Real toward W 4th Ave",
                  "lblDistance": "70 Feet ",
                  "lblSeparator": ".",
                  "lblSeparator2": ".",
                  "lblTime": "20 Seconds",
                  "template": "flxDirections"
                },
               ];
    this.view.segDirections.widgetDataMap = dataMap;
    this.view.segDirections.setData(data);
    this.view.forceLayout();
  },
  showListView: function () {
    this.view.imgListView.src = "mapviewicon.png";
    this.view.lblListView.text = "Map View";
    this.view.flxMapButtons.setVisibility(true);
    this.view.flxHeaderSearchbox.setVisibility(false);
    this.view.flxHeaderAndSearch.setVisibility(true);
    //this.setBranchListData();
    this.view.flxMapButtons.bottom = "6%";
    this.view.flxBranchesList.top = "55dp";
    this.view.flxBranchesList.setVisibility(true);
  },
  showFilters: function () {
    //this.setShowFilterData();
    applicationManager.getPresentationUtility().showLoadingScreen();
    this.setDataToServices();
    this.setDataToShow();
    this.setDataToRange();
    this.view.flxFilters.setVisibility(true);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  setBranchListData: function () {
    var self = this;
    var dataMap = {
      "flxBankImage": "flxBankImage",
      "flxDistance": "flxDistance",
      "flxLocation": "flxLocation",
      "imgBank": "imgBank",
      "imgGetDirections": "imgGetDirections",
      "lblAddress": "lblAddress",
      "lblDistance": "lblDistance",
      "lblName": "lblName",
      "lblSatus": "lblSatus",
      "lblSeparator": "lblSeparator",
      "flxGetDirections": "flxGetDirections"
    };
    var data = [{
      "imgBank": {
        "src": "group.png"
      },
      "imgGetDirections": {
        "src": "segmentarrow.png"
      },
      "lblAddress": "504, Market street, Austin",
      "lblDistance": "2.2 Miles",
      "lblName": "Branch Name One",
      "lblSatus": {
        "text": "OPEN",
        "skin": "sknLbl5daf0bSSP79pr"
      },
      "lblSeparator": ".",
      "flxGetDirections": {
        onClick: function () {
          self.showFullDirections();
        }
      },
      "template": "flxLocation"
    },
                {
                  "imgBank": {
                    "src": "grouptwo.png"
                  },
                  "imgGetDirections": {
                    "src": "segmentarrow.png"
                  },
                  "lblAddress": "504, Market street, Austin",
                  "lblDistance": "2.2 Miles",
                  "lblName": "Branch Name One",
                  "lblSatus": {
                    "text": "OPEN",
                    "skin": "sknLbl5daf0bSSP79pr"
                  },
                  "lblSeparator": ".",
                  "flxGetDirections": {
                    onClick: function () {
                      self.showFullDirections();
                    }
                  },
                  "template": "flxLocation"
                },
                {
                  "imgBank": {
                    "src": "group.png"
                  },
                  "imgGetDirections": {
                    "src": "segmentarrow.png"
                  },
                  "lblAddress": "504, Market street, Austin",
                  "lblDistance": "2.2 Miles",
                  "lblName": "Branch Name One",
                  "lblSatus": {
                    "text": "OPEN",
                    "skin": "sknLbl5daf0bSSP79pr"
                  },
                  "lblSeparator": ".",
                  "flxGetDirections": {
                    onClick: function () {
                      self.showFullDirections();
                    }
                  },
                  "template": "flxLocation"
                },
                {
                  "imgBank": {
                    "src": "grouptwo.png"
                  },
                  "imgGetDirections": {
                    "src": "segmentarrow.png"
                  },
                  "lblAddress": "504, Market street, Austin",
                  "lblDistance": "2.2 Miles",
                  "lblName": "Branch Name One",
                  "lblSatus": {
                    "text": "OPEN",
                    "skin": "sknLbl5daf0bSSP79pr"
                  },
                  "lblSeparator": ".",
                  "flxGetDirections": {
                    onClick: function () {
                      self.showFullDirections();
                    }
                  },
                  "template": "flxLocation"
                },
                {
                  "imgBank": {
                    "src": "group.png"
                  },
                  "imgGetDirections": {
                    "src": "segmentarrow.png"
                  },
                  "lblAddress": "504, Market street, Austin",
                  "lblDistance": "2.2 Miles",
                  "lblName": "Branch Name One",
                  "lblSatus": {
                    "text": "OPEN",
                    "skin": "sknLbl5daf0bSSP79pr"
                  },
                  "lblSeparator": ".",
                  "flxGetDirections": {
                    onClick: function () {
                      self.showFullDirections();
                    }
                  },
                  "template": "flxLocation"
                },
                {
                  "imgBank": {
                    "src": "grouptwo.png"
                  },
                  "imgGetDirections": {
                    "src": "segmentarrow.png"
                  },
                  "lblAddress": "504, Market street, Austin",
                  "lblDistance": "2.2 Miles",
                  "lblName": "Branch Name One",
                  "lblSatus": {
                    "text": "OPEN",
                    "skin": "sknLbl5daf0bSSP79pr"
                  },
                  "lblSeparator": ".",
                  "flxGetDirections": {
                    onClick: function () {
                      self.showFullDirections();
                    }
                  },
                  "template": "flxLocation"
                }
               ];
    this.view.segBranchList.onRowClick = function(){
      self.view.flxBranchesList.isVisible = false;
      self.view.imgListView.src = "listview.png";
      self.view.lblListView.text = "ListView";
      self.showFullDetails();
    }
    this.view.segBranchList.widgetDataMap = dataMap;
    this.view.segBranchList.setData(data);
    this.view.forceLayout();
  },
  setShowFilterData: function () {
    var self = this;
    var dataMap = {
      "flxCheckbox": "flxCheckbox",
      "flxRange": "flxRange",
      "imgCheckbox": "imgCheckbox",
      "lblRange": "lblRange",
      "lblSeparator": "lblSeparator",
    };
    var data = [{
      "imgCheckbox": {
        "src": "radiobuttonactive.png"
      },
      "lblRange": "Branches",
      "lblSeparator": ".",
      "flxCheckbox": {
        onClick: function () {
          self.toggleCheckbox(self.view.segShow.id);
        }
      },
      "template": "flxRange"
    },
                {
                  "imgCheckbox": {
                    "src": "radiobuttonactive.png"
                  },
                  "lblRange": "ATM's",
                  "lblSeparator": ".",
                  "flxCheckbox": {
                    onClick: function () {
                      self.toggleCheckbox(self.view.segShow.id);
                    }
                  },
                  "template": "flxRange"
                },
                {
                  "imgCheckbox": {
                    "src": "radiobuttonactive.png"
                  },
                  "lblRange": "Both",
                  "lblSeparator": ".",
                  "flxCheckbox": {
                    onClick: function () {
                      self.toggleCheckbox(self.view.segShow.id);
                    }
                  },
                  "template": "flxRange"
                }
               ];
    this.view.segShow.onRowClick = function(){
      self.toggleCheckbox(self.view.segShow.id);
    }
    this.view.segShow.widgetDataMap = dataMap;
    this.view.segShow.setData(data);
    this.view.forceLayout();
  },
  setSelectRangeData: function () {
    var self = this;
    var dataMap = {
      "flxCheckbox": "flxCheckbox",
      "flxRange": "flxRange",
      "imgCheckbox": "imgCheckbox",
      "lblRange": "lblRange",
      "lblSeparator": "lblSeparator",
    };
    var data = [{
      "imgCheckbox": {
        "src": "radiobuttonactive.png"
      },
      "lblRange": "5 Miles",
      "lblSeparator": ".",
      "flxCheckbox": {
        onClick: function () {
          self.toggleCheckbox(self.view.segSelectSearchRange.id);
        }
      },
      "template": "flxRange"
    },
                {
                  "imgCheckbox": {
                    "src": "radiobuttonactive.png"
                  },
                  "lblRange": "10 Miles",
                  "lblSeparator": ".",
                  "flxCheckbox": {
                    onClick: function () {
                      self.toggleCheckbox(self.view.segSelectSearchRange.id);
                    }
                  },
                  "template": "flxRange"
                },
                {
                  "imgCheckbox": {
                    "src": "radiobuttonactive.png"
                  },
                  "lblRange": "25 Miles",
                  "lblSeparator": ".",
                  "flxCheckbox": {
                    onClick: function () {
                      self.toggleCheckbox(self.view.segSelectSearchRange.id);
                    }
                  },
                  "template": "flxRange"
                },
                {
                  "imgCheckbox": {
                    "src": "radiobuttonactive.png"
                  },
                  "lblRange": "50 Miles",
                  "lblSeparator": ".",
                  "flxCheckbox": {
                    onClick: function () {
                      self.toggleCheckbox(self.view.segSelectSearchRange.id);
                    }
                  },
                  "template": "flxRange"
                },
                {
                  "imgCheckbox": {
                    "src": "radiobuttonactive.png"
                  },
                  "lblRange": "100 Miles",
                  "lblSeparator": ".",
                  "flxCheckbox": {
                    onClick: function () {
                      self.toggleCheckbox(self.view.segSelectSearchRange.id);
                    }
                  },
                  "template": "flxRange"
                }
               ];
    this.view.segSelectSearchRange.onRowClick = function(){
      // self.toggleCheckbox(self.view.segSelectSearchRange.id);
    }
    this.view.segSelectSearchRange.widgetDataMap = dataMap;
    this.view.segSelectSearchRange.setData(data);
    this.view.forceLayout();
  },
  toggleCheckbox: function (segWidget) {
    return;
    var data, index, rowIndex;
    if (segWidget === "segSelectSearchRange") {
      data = this.view.segSelectSearchRange.data;
      index = this.view.segSelectSearchRange.selectedIndex;
      rowIndex = index[1];
      if (data[rowIndex].imgCheckbox.src === "radiobuttonactive.png")
        data[rowIndex].imgCheckbox.src = "radiobuttoninactive.png";
      else
        data[rowIndex].imgCheckbox.src = "radiobuttonactive.png";
      this.view.segSelectSearchRange.setData(data);
    } else {
      data = this.view.segShow.data;
      index = this.view.segShow.selectedIndex;
      rowIndex = index[1];
      if (data[rowIndex].imgCheckbox.src === "radiobuttonactive.png")
        data[rowIndex].imgCheckbox.src = "radiobuttoninactive.png";
      else
        data[rowIndex].imgCheckbox.src = "radiobuttonactive.png";
      this.view.segServicesFilter.setData(data);
    }
    this.view.forceLayout();
  },

  navigateBack: function () {
    var self = this;
    if (this.view.flxBranchesList.isVisible)
      self.setPreshowData();
    else if (this.view.customSearch.lblLocateUs.text === "GET DIRECTIONS"){
      self.setPreshowData();
      self.enableOnPinClick();
      self.setOldLocationData();
    }
    else {
      self.resetAllFields();
      var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
      locateUsModule.presentationController.commonFunctionForNavigation("frmLogin");
    }
  },
  setGesture: function () {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var scopeObj = this;
    this.view.flxDirections.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
      fingers: 1
    },
                                                 function (widgetRef, gestureInfo) {
      if (gestureInfo.swipeDirection === 3) {
        scopeObj.animateFlxUp();
      } else if (gestureInfo.swipeDirection === 4) {
        scopeObj.animateFlxDown();
      }
    }.bind(this));
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  animateFlxUp: function () {
    var flx;
    if (this.view.flxDetails.isVisible)
      flx = this.view.flxDetails;
    else if (this.view.flxDirections.isVisible)
      flx = this.view.flxDirections;
    else flx = null;
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
      if (this.view.flxDetails.isVisible)
        this.showFullDetails();
      else if (this.view.flxDirections.isVisible)
        this.showFullDirections();
    }
  },
  animateFlxDown: function () {
    var flx;
    if (this.view.flxDetails.isVisible)
      flx = this.view.flxDetails;
    else if (this.view.flxDirections.isVisible)
      flx = this.view.flxDirections;
    else flx = null;
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

      if (this.view.flxDetails.isVisible)
        this.showSelectedLocation();
      else if (this.view.flxDirections.isVisible)
        this.showgetDirections();
    }
  },

  onRowClickOfSegServicesFilter : function(indices,rowNumber){
    if(indices === null){
      return;
    }
    if(rowNumber === 0){
      var keys = indices;
      var indexes = keys[0][1];
      if(indexes[0] === 0){
        var length = this.getServicesMasterData().length;
        var res = [];
        for(var i=0;i<length;i++){
          res.push(i);
        }
        this.view.segServicesFilter.selectedRowIndices = [[0,res]];
      }
      else{
        this.view.segServicesFilter.selectedRowIndices = null;
      }
      return;
    }
    if(rowNumber > 0){
      var selectedIndices = indices;
      var values = selectedIndices[0][1];
      if(values.indexOf(rowNumber) === -1){
        var resultVal = [];
        var j = 0;
        if(values[0] === 0 ){
          j = 1;
        }
        for(;j<values.length;j++){
          resultVal.push(values[j]);
        }
        this.view.segServicesFilter.selectedRowIndices = [[0,resultVal]];
      }else{
        var len = values.length;
        var length = this.getServicesMasterData().length;
        if(len == (length -1))
        {
          var res = [];
          for(var i=0;i<length;i++){
            res.push(i);
          }
          this.view.segServicesFilter.selectedRowIndices = [[0,res]];
        }
      } 
    }
  },
  
  readDataFromNavigatorAndPresentView : function(){
    var navigationManager = applicationManager.getNavigationManager();
    var navigationData = navigationManager.getCustomInfo("frmLocation");;
    var isUserLoggedIn = navigationData.isUserLoggedIn;
    var data = navigationData.data;
    this.enableOrDisableHamburger(isUserLoggedIn);
    this.setDataToMapView(data);
    this.setDataToListSegView(data);
  },

  enableOrDisableHamburger :function(isUserLoggedIn){
    if(isUserLoggedIn){
      this.view.customSearch.flxBack.imgBack.src = "hamburger.png";
      if(kony.os.deviceInfo().name === "iPhone"){
        this.view.flxLoactionMain.bottom = "60dp";
        this.view.flxFooter.isVisible = true;
      }
      else{
        this.view.flxLoactionMain.bottom = "0dp";
        this.view.flxFooter.isVisible = false;
      }
    }else{
      var scope = this;
      this.view.flxFooter.isVisible = false;
      this.view.flxLoactionMain.bottom = "0dp";
      this.view.customSearch.flxBack.imgBack.src = "backbutton.png";
      this.view.customSearch.flxBack.onClick = function(){
        scope.navigateBack();
      };
    }
  },
  
  /**
  * it set the data to the map view
  */
  setDataToMapView:function(data){
    try{
      applicationManager.getPresentationUtility().showLoadingScreen();
      if(data && data.length >0){
        var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
        var zoomLevel = locateUsModule.presentationController.getMapZoomLevel();  
        this.oldLocationData = data;
        this.setDataToMapViewHelper(data,zoomLevel);
      }
      else{
        this.view.mapLocation.locationData=[];
      }
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }catch(err){
      kony.print(err+JSON.stringify(err));
    }
  },

  setDataToMapViewHelper : function(data,zoomLevel){
    this.view.mapLocation.zoomLevel = 15;
        this.view.mapLocation.locationData=data;
        this.view.forceLayout();
        this.navigateToFirstLocationInMap();
  },
  /**
  * it set the data to the ListView
  */
  setDataToListSegView : function(data){
    try{
      applicationManager.getPresentationUtility().showLoadingScreen();
      if(data && data.length > 0){
        this.view.segBranchList.widgetDataMap = {
          imgBank : "listViewImage",
          lblName : "name",
          lblAddress : "desc",
          lblSatus : "listViewStatus"		  
        };
        this.view.segBranchList.setData(data.slice(0,-1));
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      }
    }catch(err){
      kony.print(err+JSON.stringify(err));
    }
  },

  /**
  *it navigate to the first location on map
  */
  navigateToFirstLocationInMap : function(){
    this.view.mapLocation.navigateTo(0,false);
  },

  /**
  * Handling the on pin click of map
  */
  onPinClickHandler : function(mapId,locationDetails){
    if(locationDetails.image !== "current_location.png"){
      this.fromSegRowClick = false;
      this.showSelectedLocation();
      this.selectedData = locationDetails;
      this.setDataToSelectedLocation(locationDetails);
      this.getLocationDetails(locationDetails);
    }
  },

  onListViewRowClickHandler : function(locationDetails){
    this.fromSegRowClick = true;
    this.selectedData = locationDetails;
    this.setDataToSelectedLocation(locationDetails);
    this.getLocationDetails(locationDetails);
    //this.showFullDetails();
  },
  /**
  * set the selected location data to callout template
  */
  setDataToSelectedLocation : function(locationDetails){
    this.view.lblBranchName.text = locationDetails.name;
    this.view.lblStatus.text = locationDetails.calloutStatus.text;
    this.view.lblStatus.skin = locationDetails.calloutStatus.skin;
    this.view.lblAddress1.text = locationDetails.desc;
    this.view.lblAddress2.text = "";
    this.view.lblDistance.text = "";
    this.selectedLocation = locationDetails;
    locationDetails.workingHours = "No data available";
    if(locationDetails.services === null || locationDetails.services !== undefined || locationDetails.services !==""){
      locationDetails.services = "No data available";
    }
    this.setDataToServicesOfSelectedLocation(locationDetails);
    this.setWorkingHoursDataToSelectedLocation(locationDetails);
    this.setDataToCallBranch(locationDetails);
  },

  getLocationDetails : function(selectedLocation){
    var locationId = selectedLocation.locationId;
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    locateUsModule.presentationController.getLocationDetails(locationId);
  },

  /**
  * presentation controller calls this function after success of Location Details service call
  */
  getLocationDetailsSuccess : function(data){
    try{
    this.setDataToServicesOfSelectedLocation(data);
    this.setWorkingHoursDataToSelectedLocation(data);
    this.setDataToCallBranch(data);
    if(this.fromSegRowClick === true){
      this.view.flxBranchesList.isVisible = false;
      this.view.imgListView.src = "listview.png";
      this.view.lblListView.text = "ListView";
      this.showFullDetails();
      this.fromSegRowClick = false;
    }
    }catch(err){
      kony.print(JSON.stringify(err)+err);
    }
  },

  getLocationDetailsFailure : function(){
    if(this.fromSegRowClick === true){
      this.view.flxBranchesList.isVisible = false;
      this.view.imgListView.src = "listview.png";
      this.view.lblListView.text = "ListView";
      this.showFullDetails();
      this.fromSegRowClick = false;
    }
  },
  /**
  *it set the services data to the segment in details screen
  */
  setDataToServicesOfSelectedLocation : function(locationDetails){
    if(locationDetails.services === null || locationDetails.services === undefined || locationDetails.services ===""){
      locationDetails.services = "No Data Available";
    }
    var serviceListValue=locationDetails.services.split("||");
    var segListServiceData = [];
    for(var i=0; i<serviceListValue.length;i++){
      segListServiceData.push({
        "lblBullet": ".",
        "lblService":serviceListValue[i]  
      });
    }
    this.view.segServices.setData(segListServiceData);
  },

  /**
  *it set the WorkingHours to the segment in details screen
  */
  setWorkingHoursDataToSelectedLocation : function(data){
    if(data.workingHours === null || data.workingHours === undefined || data.workingHours ===""){
      data.workingHours = "No Data Available";
    }
    var workingHoursValue=data.workingHours.split("||");
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

  /**
  *it send the searchString to the presentation controller to get Locations data with search string
  */
  searchLocations : function(){
    var searchStr = this.view.customSearchbox.tbxSearch.text;
    if(searchStr === null || searchStr === undefined || searchStr === ""){
      return;
    }
    this.searchString = "";
    this.searchString = searchStr;
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    locateUsModule.presentationController.getLocationsBySearch(searchStr);
  },

  /**
  * presentation controller call this method after success of getLocationsBySearch success
  */
  searchLocationsSuccess : function(data){
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var processedData = locateUsModule.presentationController.ProcessDataForView(data);
    var state = locateUsModule.presentationController.getMapState();
    this.setPreshowData();
    if(state === locateUsModule.presentationController.SEARCH || state === locateUsModule.presentationController.SEARCH_FILTER){
      this.view.customSearch.tbxSearch.text = this.searchString;
    }
    this.setDataToMapView(processedData);
    this.setDataToListSegView(processedData);
  },

  onClickOfCurrentLocation : function(){
    var scope = this;
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var status = locateUsModule.presentationController.getMapState();
    if(status === locateUsModule.presentationController.CURRENTLOCATION || status == locateUsModule.presentationController.CURRENTLOCATION_FILTER){
      var latLongObj = {};
      latLongObj.latitude = locateUsModule.presentationController.currentLatitude;
      latLongObj.longitude = locateUsModule.presentationController.currentLongitude;
      scope.navigateToGivenLocation(latLongObj);
    }
    if(status === locateUsModule.presentationController.SEARCH || status === locateUsModule.presentationController.SEARCH_FILTER){
      scope.getLocationsNearBy();
    }
  },

  getLocationsNearBy : function(){
    var scopeObj = this;
    var positionoptions = {
      timeout: 64000,
      fastestInterval: 0,
      minimumTime: 0
    };
    this.searchString = null;
    applicationManager.getPresentationUtility().showLoadingScreen();
    kony.location.getCurrentPosition(scopeObj.geoLocationSuccessCallBack.bind(scopeObj), scopeObj.geoLocationErrorCallBack.bind(scopeObj), positionoptions);
  },

  geoLocationSuccessCallBack: function(response) {
    try {
      var latitude, longitude;
      var latLongObj = {};
      if (response && response.coords && response.coords.latitude && response.coords.longitude) {
        latitude = response.coords.latitude;
        longitude = response.coords.longitude;
        latLongObj.latitude = latitude;
        latLongObj.longitude = longitude;
        var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
        locateUsModule.presentationController.getNearByLocations(latLongObj);
       
      }
    } catch (err) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
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

  onClickSettingsOrCancelHandler: function(response) {
    if (response === false) {
      var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
      locateUsModule.presentationController.openLocationSettings();
    }
  },

  bindGenericError : function(msg)
  {
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  },
  /**
  * navigate to the given index on map
  */
  navigateToGivenIndex : function(index){
    try{
      this.view.mapLocation.navigateTo(index, false);
    }catch(err){
      kony.print(JSON.stringify(err));
    }
  },

  navigateToGivenLocation : function(latLongObj){
    var showDropPin = true;
    //#ifdef android
    showDropPin = false;
    //#endif

    this.view.mapLocation.navigateToLocation({ lat: latLongObj.latitude, 
                                              lon: latLongObj.longitude,
                                              image:"current_location.png",
                                              showcallout: false
                                             }, false, showDropPin);

  },


  /**
  * it will get the current location lat and long and call the presentation controller method to fetch directions
  */
  getDirections : function(){
    var scopeObj = this;
    applicationManager.getPresentationUtility().showLoadingScreen();
    var selectedLocationData = this.selectedData;
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

  /**
  * it will show directions on map
  */
  showDirections : function(directions){
    var routes = directions;
    if(routes && routes.length > 0){
      this.disableOnPinClick();
      //this.showFullDirections();
      this.showgetDirections();
      this.setDirectionsDataToMap(routes);
      this.setStepDirectionsData(routes);
    }
    else{
      var i18n_noDirections = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.NoDirectionsFound","No Directions Found");
      this.bindError(i18n_noDirections);
    }
  },

  /**
  * it disable the on pin click for map
  */
  disableOnPinClick : function(){
    this.view.mapLocation.onPinClick = function(mapId, response){
      //nothing to do
    };
  },

  /**
  * it enable the on pin click for map. Because when we goto directios we disabled it so here we are enabling.
  */
  enableOnPinClick : function(){
    var scopeObj = this;
    this.view.mapLocation.onPinClick = function(mapId, response){
      if(response.image !== "current_location.png"){
        scopeObj.showSelectedLocation();
        scopeObj.onPinClickHandler(mapId,response);
      }
    };
  },

  /**
  *it sets the directios to map view
  */
  setDirectionsDataToMap : function(routes){
    //this.view.mapLocation.clear();
    this.view.mapLocation.locationData = [];
    this.view.forceLayout();
    var destinationInfo = this.selectedData;
    var routeColors = ["0000FFFF","FF00FFFF","FF0000FF","FFFF00FF","0x000000FF"];
    this.routes = [];
    for(var i=0;i<routes.length;i++)
    {
      this.routes.push("route"+i);
      this.drawRoute("route"+i, routes[i].polylinePoints, routeColors[i],destinationInfo);
    }
    this.view.forceLayout();
  },

  /**
  * it is used to draw the polyline
  */
  drawRoute : function(routeid,polyPoints,color,destinationInfo){
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var polylineData = locateUsModule.presentationController.processPolylineData(routeid,polyPoints,color,destinationInfo);
    this.addPolylineToMap(polylineData,destinationInfo);
  },

  /**
  *it will add the polyline to map
  */
  addPolylineToMap : function(polylineData,destinationInfo){
    this.view.mapLocation.locationData = [];
    this.view.mapLocation.zoomLevel = 14;
    this.view.mapLocation.addPolyline(polylineData);
    this.view.forceLayout();
  },

  /**
  * it will set the text routes to segment
  */
  setStepDirectionsData : function(routes){
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var stepData = locateUsModule.presentationController.processStepDirectionsData(routes);
    this.view.lblDistanceAndTime.text = String(stepData.totalDistance)+" ("+String(stepData.totalDuration)+")";
    this.view.segDirections.setData(stepData.directionsList);
  },

  /**
  *it returns the selected range in filter Ex: 5
  */
  getSelectedRangeData : function(){
    var filterRange = this.view.segSelectSearchRange.selectedRowIndices;
    var index = filterRange[0][1][0];
    var data = this.getRangeMasterData()[index].split(" ");
    return data[0];
  },

  /**
  *on click of filter it call presentation method to make a service call with range
  */
  onApplyFilter : function(){
    this.selectedType = this.view.segShow.selectedRowIndices;
    this.selectedServices = this.view.segServicesFilter.selectedRowIndices;
    this.selectedRange = this.view.segSelectSearchRange.selectedRowIndices;
    if(this.selectedServices === null || this.selectedRange === null){
      this.bindError("please select both Services and Range");
      return;
    }
    var range = this.getSelectedRangeData();
    applicationManager.getPresentationUtility().showLoadingScreen();
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var polylineData = locateUsModule.presentationController.getLocationsNearFirstLocationWithRange(range);
  },

  /**
  * it shows the error
  */
  bindError : function(message){
    var scopeObj=this;
    if(this.timerCounter !== undefined){
      this.timerCounter = this.timerCounter+1;
    }
    else{
      this.timerCounter = 1;
    }
    var timerId="timerPopupLocationError"+this.timerCounter;
    this.view.flxPopup.skin = "sknFlxf54b5e";
    this.view.customPopup.imgPopup.src = "errormessage.png";
    this.view.customPopup.lblPopup.text = message;
    this.view.flxPopup.setVisibility(true);
    kony.timer.schedule(timerId, function() {
      scopeObj.view.flxPopup.setVisibility(false);
    }, 1.5, false);
  },

  getSegShowMapper : function(number){
    if(number === 0){
      return "branch";
    }
    if(number === 1){
      return "atm";
    }
    if(number === 2){
      return "both";
    }
  },
  /**
  *it calls the presentation controller method to filter the locations with selected services
  */
  applyFilterToData : function(data){
    var selectedType = this.view.segShow.selectedRowIndices[0][1];
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var selectedServices = this.view.segServicesFilter.selectedRowIndices[0][1];
    var mappedSelectedServices = this.getMappedSelectedServices(selectedServices);
    var i18n_noResults = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.NoResultsFound","No Results Found");
    if(mappedSelectedServices === null || mappedSelectedServices.length === 0){
      this.bindGenericError(i18n_noResults);
      return;
    }
    var type = this.getSegShowMapper(selectedType[0]);
    var filteredData = locateUsModule.presentationController.filterLocationsWithServices(data,mappedSelectedServices,type);
    if(filteredData.length > 0){
      this.setFilteredDataToView(filteredData);
    }else{
      this.bindGenericError(i18n_noResults);
    }
  },

  /**
  *it will set the filtered data to view
  */
  setFilteredDataToView : function(data){
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var processedData = locateUsModule.presentationController.ProcessDataForView(data);
    var state = locateUsModule.presentationController.getMapState();
    this.setPreshowData();
    this.setDataToMapView(processedData);
    this.setDataToListSegView(processedData);
    if(state === locateUsModule.presentationController.SEARCH || state === locateUsModule.presentationController.SEARCH_FILTER){
      this.view.customSearch.tbxSearch.text = this.searchString;
    }
  },

  /**
  *it maps the view segment selected services to backed services with mapper
  */
  getMappedSelectedServices : function(serviceIndexes){
    var mapper = this.getServicesMasterDataMapper();
    var services = this.getServicesMasterData();
    var result = [];
    for(var i=0;i<serviceIndexes.length;i++){
      var mapedElt = mapper[services[serviceIndexes[i]]];
      if(mapedElt !== null && mapedElt !== undefined)
        result.push(mapedElt);
    }
    return result;
  },

  /**
  * it send the master data for range selection segment
  */
  getServicesMasterData : function(){
    var services = [
      "All",
      "Make an Appointment",
      "On-site Relationship Manager",
      "Home Loan Specialists",
      "Financial Advisors",
      "Investment Services",
      "Foreign Currency Exchange",
      "Retail Branch",
      "Wealth Branch",
      "Business Banking",
      "International Banking Center",
      "Commercial Deposits",
      "Night Deposits",
      "Safe Deposit Box",
      "Handicap Access",
      "ATM - Full Service",
      "ATM - Cash withdrawal Only",
      "ATM - Check Deposits",
      "ATM - Cash Deposits",
      "ATM - Cardless Cash Withdrawal",
      "ATM - Drive Up"
    ];
    return services;
  },

  /**
  * it send the mapper for services
  */
  getServicesMasterDataMapper : function(){
    var mapper = {
      "All" : "All",
      "Make an Appointment" : "",
      "On-site Relationship Manager" : "",
      "Home Loan Specialists" : "finance",
      "Financial Advisors" : "finance",
      "Investment Services" : "",
      "Foreign Currency Exchange" : "finance",
      "Retail Branch" : "bank",
      "Wealth Branch" : "",
      "Business Banking" : "bank",
      "International Banking Center" : "bank",
      "Commercial Deposits" : "bank",
      "Night Deposits" : "bank",
      "Safe Deposit Box" : "bank",
      "Handicap Access" : "",
      "ATM - Full Service" : "atm",
      "ATM - Cash withdrawal Only" : "atm",
      "ATM - Check Deposits" : "atm",
      "ATM - Cash Deposits" : "atm",
      "ATM - Cardless Cash Withdrawal" : "atm",
      "ATM - Drive Up" : "atm"
    };
    return mapper;
  },
  
  
  getServicesMasterDataMapper1 : function(){
    var mapper = {
      "All" : "All",
      "Make an Appointment" : "Make an Appointment",
      "On-site Relationship Manager" : "On-site Relationship Manager",
      "Home Loan Specialists" : "Home Loan Specialists",
      "Financial Advisors" : "Financial Advisors",
      "Investment Services" : "Investment Services",
      "Foreign Currency Exchange" : "Foreign Currency Exchange",
      "Retail Branch" : "Retail Branch",
      "Wealth Branch" : "Wealth Branch",
      "Business Banking" : "Business Banking",
      "International Banking Center" : "International Banking Center",
      "Commercial Deposits" : "Commercial Deposits",
      "Night Deposits" : "Night Deposits",
      "Safe Deposit Box" : "Safe Deposit Box",
      "Handicap Access" : "Handicap Access",
      "ATM - Full Service" : "ATM - Full Service",
      "ATM - Cash withdrawal Only" : "ATM - Cash withdrawal Only",
      "ATM - Check Deposits" : "ATM - Check Deposits",
      "ATM - Cash Deposits" : "ATM - Cash Deposits",
      "ATM - Cardless Cash Withdrawal" : "ATM - Cardless Cash Withdrawal",
      "ATM - Drive Up" : "ATM - Drive Up"
    };
    return mapper;
  },
  
  
  getServicesMasterDataMapper2 : function(){
    var mapper = {
      "All" : "All",
      "Make an Appointment" : "Bill Pay",
      "On-site Relationship Manager" : "Domestic Wire Transfer",
      "Home Loan Specialists" : "Interbank Account to Account Fund Transfer",
      "Financial Advisors" : "Internation Account to Account Fund Transfer",
      "Investment Services" : "International Wire Transfer",
      "Foreign Currency Exchange" : "Intra Bank Member to Member Fund Transfer",
      "Retail Branch" : "P2P",
      "Wealth Branch" : "RDC",
      "Business Banking" : "Transfer between Members accounts",
      "International Banking Center" : "International Banking Center",
      "Commercial Deposits" : "Commercial Deposits",
      "Night Deposits" : "Night Deposits",
      "Safe Deposit Box" : "Safe Deposit Box",
      "Handicap Access" : "Handicap Access",
      "ATM - Full Service" : "ATM - Full Service",
      "ATM - Cash withdrawal Only" : "ATM - Cash withdrawal Only",
      "ATM - Check Deposits" : "ATM - Check Deposits",
      "ATM - Cash Deposits" : "ATM - Cash Deposits",
      "ATM - Cardless Cash Withdrawal" : "ATM - Cardless Cash Withdrawal",
      "ATM - Drive Up" : "ATM - Drive Up"
    };
    return mapper;
  },

  /**
  * it send the master data for range selection segment
  */
  getRangeMasterData : function(){
    var data = ["5 Miles","10 Miles","25 Miles","50 Miles","100 Miles"];
    return data;
  },

  setDataToShow : function(){
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var mapState = locateUsModule.presentationController.getMapState();
    if(mapState === locateUsModule.presentationController.CURRENTLOCATION_FILTER || mapState === locateUsModule.presentationController.SEARCH_FILTER){
      this.view.segShow.selectedRowIndices = this.selectedType;
      return;
    }
    else{
      this.view.segShow.selectedRowIndices = [[0,[2]]];
    }
  },
  /**
  * it will assign the master data of range to segment
  */
  setDataToRange : function(){
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var mapState = locateUsModule.presentationController.getMapState();
    if(mapState === locateUsModule.presentationController.CURRENTLOCATION_FILTER || mapState === locateUsModule.presentationController.SEARCH_FILTER){
      this.setSelectedDataToRange();
      return;
    }
    var rangeData = this.getRangeMasterData();
    var self = this;
    var dataMap = {
      "flxCheckbox": "flxCheckbox",
      "flxRange": "flxRange",
      "imgCheckbox": "imgCheckbox",
      "lblRange": "lblRange",
      "lblSeparator": "lblSeparator",
    };
    var data = [];
    for(var i=0;i<rangeData.length;i++){
      var dataElt = {
        "imgCheckbox": {
          "src": "radiobuttonactive.png"
        },
        "lblRange": rangeData[i],
        "lblSeparator": ".",
        "flxCheckbox": {
          onClick: function () {
            self.toggleCheckbox(self.view.segSelectSearchRange.id);
          }
        },
        "template": "flxRange"
      };
      data.push(dataElt);
    }

    this.view.segSelectSearchRange.onRowClick = function(){
      // self.toggleCheckbox(self.view.segSelectSearchRange.id);
    };
    this.view.segSelectSearchRange.widgetDataMap = dataMap;
    this.view.segSelectSearchRange.setData(data);
    this.view.segSelectSearchRange.selectedRowIndices = [[0,[0]]];
    this.view.forceLayout();
  },

  /**
  * it will assign the master data of services to segment
  */
  setDataToServices : function(){
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var mapState = locateUsModule.presentationController.getMapState();
    if(mapState === locateUsModule.presentationController.CURRENTLOCATION_FILTER || mapState === locateUsModule.presentationController.SEARCH_FILTER){
      /* if form is already in filtered state(if filter already applied) then preserve the filter data*/
      this.setSelectedDataToServices();
      return;
    }
    var self = this;
    var services = this.getServicesMasterData();
    var data = [];
    var dataMap = {
      "flxCheckbox": "flxCheckbox",
      "flxRange": "flxRange",
      "imgCheckbox": "imgCheckbox",
      "lblRange": "lblRange",
      "lblSeparator": "lblSeparator",
    };
    var defaultSelectedRowIndices = [];
    for(var i=0;i<services.length;i++){
      defaultSelectedRowIndices.push(i);
      var dataElement = {
        "imgCheckbox": {
          "src": "radiobuttonactive.png"
        },
        "lblRange":services[i],
        "lblSeparator": ".",
        "flxCheckbox": {
          onClick: function () {
            self.toggleCheckbox(self.view.segServicesFilter.id);
          }
        },
        "template": "flxRange"
      };
      data.push(dataElement);
    }

    this.view.segServicesFilter.widgetDataMap = dataMap;
    this.view.segServicesFilter.setData(data);
    this.view.segServicesFilter.selectedRowIndices = [[0,defaultSelectedRowIndices]];
    this.view.forceLayout();
  },

  /**
  *this function preserves the services selection segment in filter
  */
  setSelectedDataToServices : function(){
    var selectedServices = this.selectedServices;
    this.view.segServicesFilter.selectedRowIndices = selectedServices;
    this.view.forceLayout();
  },

  /**
  *this function preserves the range selection segment in filter
  */
  setSelectedDataToRange : function(){
    var selectedRange = this.selectedRange;
    this.view.segSelectSearchRange.selectedRowIndices = selectedRange;
    this.view.forceLayout();
  },

  /**
  *on Back of Directions we need to preserve the Locations as we are using only one map widget
   it will clear the directions data and set the old data to map
  *the data is stored in oldLocationData
  */
  setOldLocationData : function(){
    var oldData = this.oldLocationData;
    if(oldData){
      var routes = this.routes;
      if(routes){
        var length = routes.length;
        for(var i=0;i<length;i++){
          this.view.mapLocation.removePolyline(routes[i]);
        }
      }
      //this.view.mapLocation.clear();
      this.view.forceLayout();
      this.view.mapLocation.locationData = oldData;
      this.view.mapLocation.zoomLevel = 15;
      this.navigateToFirstLocationInMap();
      this.view.forceLayout();
    }
    if(this.searchString !== null && this.searchString !== undefined)
      this.view.customSearch.tbxSearch.text = this.searchString;
    this.view.customSearchbox.tbxSearch.text = this.searchString;
  },

  retainSearchBoxText : function(){
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var state = locateUsModule.presentationController.getMapState();
    if(state === locateUsModule.presentationController.SEARCH || state === locateUsModule.presentationController.SEARCH_FILTER){
      this.view.customSearch.tbxSearch.text = this.searchString;
    }
  },
  
  resetAllFields : function(){
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    locateUsModule.presentationController.reset();
  }
});