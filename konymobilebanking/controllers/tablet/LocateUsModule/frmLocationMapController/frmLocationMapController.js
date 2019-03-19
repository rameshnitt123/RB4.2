define({ 
  
 filters: {
    selectedRange: "5 Miles",
   	selectedRangeIndex: 0,
    type: "Both",//"Branch",
   	typeIndex: 0,
    services: []
  },
  
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  frmLocationPreshow: function() {
    this.initHeaderActions();
    this.setFlowActions();
    this.setDataToFilter();
    this.setDefaultFilters();
    this.view.title= kony.i18n.getLocalizedString("kony.mb.Location.Header");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  setDefaultFilters : function(){
    this.setsegServicesFilterDefaultData();
    this.setsegSelectSearchDefaultRangeData();
    this.setsegShowDefaultData();
  },
  
  setsegSelectSearchDefaultRangeData : function() {
    var defaultSelectedRowIndices = [];
    var services = this.getRangeMasterData();
    var data = []; 
    defaultSelectedRowIndices.push(0);
     var defaultdataElement = {
      "imgCheckbox": {
                "src": "radiobtn.png"
            },
            "lblRange": services[0],
            "lblSeparator": ".",
            "flxCheckbox": {
                onClick: function() {
                  
                }
            },
            "template": "flxRange"
    };
    data.push(defaultdataElement);
    for (var i = 1; i < services.length-1; i++) {
        defaultSelectedRowIndices.push(i);
        var dataElement = {
            "imgCheckbox": {
                "src": "radiobuttoninactive.png"
            },
            "lblRange": services[i],
            "lblSeparator": ".",
            "flxCheckbox": {
                onClick: function() {
                  
                }
            },
            "template": "flxRange"
        };
        data.push(dataElement);
    }
    this.view.segSelectSearchRange.setData(data);
    this.view.segSelectSearchRange.selectedRowIndices = [
        [0, defaultSelectedRowIndices]
    ];
    this.view.forceLayout();
  },
  
  setsegShowDefaultData : function(){
    var defaultSelectedRowIndices = [];
    var services = this.getBranchMasterData();
    var data = [];
    for (var i = 0; i < services.length-1; i++) {
        defaultSelectedRowIndices.push(i);
        var dataElement = {
            "imgCheckbox": {
                "src": "radiobuttoninactive.png"
            },
            "lblRange": services[i],
            "lblSeparator": ".",
            "flxCheckbox": {
                onClick: function() {
                    //self.toggleCheckbox(self.view.segServicesFilter.id);
                }
            },
            "template": "flxRange"
        };
        data.push(dataElement);
    }
    
    defaultSelectedRowIndices.push(services.length-1);
    var lastdataElement = {
      "imgCheckbox": {
                "src": "radiobtn.png"
            },
            "lblRange": services[services.length-1],
            "lblSeparator": ".",
            "flxCheckbox": {
                onClick: function() {
                  
                }
            },
            "template": "flxRange"
    };
    data.push(lastdataElement);
    this.view.segShow.setData(data);
    this.view.segShow.selectedRowIndices = [
        [0, defaultSelectedRowIndices]
    ];
    this.view.forceLayout();
  },
  
  setsegServicesFilterDefaultData: function() {
    this.filters.services = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; //default all 21 are set enabled
    var defaultSelectedRowIndices = [];
    var services = this.getServicesMasterData();
    var data = [];
    for (var i = 0; i < services.length; i++) {
        defaultSelectedRowIndices.push(i);
        var dataElement = {
            "imgCheckbox": {
                "src": "remembermetick.png"
            },
            "lblRange": services[i],
            "lblSeparator": ".",
            "flxCheckbox": {
                onClick: function() {
                    //self.toggleCheckbox(self.view.segServicesFilter.id);
                }
            },
            "template": "flxRange"
        };
        data.push(dataElement);
    }
    this.view.segServicesFilter.setData(data);
    this.view.segServicesFilter.selectedRowIndices = [
        [0, defaultSelectedRowIndices]
    ];
    this.view.forceLayout();
},
  setDataToFilter: function() {
  	this.setDataToFilterItem(this.getBranchMasterData(), this.view.segShow, "radiobuttoninactive.png");
    this.setDataToFilterItem(this.getRangeMasterData(), this.view.segSelectSearchRange, "radiobuttoninactive.png");
    this.setDataToFilterItem(this.getServicesMasterData(), this.view.segServicesFilter, "remeberme.png"); 
  },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.flxHeader.btnRight.onClick = this.handleCancelAction;
      this.view.customHeaderTablet.setVisibility(true);
    }
  },
  
  backNavigation: function() {
    if(this.view.flxFilters.isVisible){
		this.view.flxFilters.setVisibility(false);
        this.view.title= kony.i18n.getLocalizedString("kony.mb.Location.Header");
    }
    else if(this.view.flxBranchesList.isVisible){
		this.setPreshowData();
    }
    else{
      var navMan = applicationManager.getNavigationManager();
      navMan.goBack(); 
    }
  },

  handleCancelAction: function() {
    if(this.view.flxFilters.isVisible){
		this.view.flxFilters.setVisibility(false);
        this.view.title= kony.i18n.getLocalizedString("kony.mb.Location.Header");
    }
    else if(this.view.flxBranchesList.isVisible){
		this.setPreshowData();
    }
    else{
      var navMan = applicationManager.getNavigationManager();
      navMan.goBack(); 
    }
  },
  
  setFlowActions: function() {
    var self = this;
    this.view.flxOverlaySearch.onTouchStart = this.moveSearchUp;
    this.view.flxSearch.lxSearchAddress.txtSearch.onTouchStart = this.moveSearchUp;
    this.view.customSearchbox.flxSearchMain.btnCancel.onClick = this.hideSearchbox;
    this.view.customSearchbox.tbxSearch.onDone = this.onSearch;
    this.view.segBranchList.onRowClick = this.onListViewRowClickHandler;
    this.view.flxCurrentLocation.onClick = this.onClickOfCurrentLocation;
    
    this.view.flxBtnListView.onClick = function() {
      var listViewTitle = self.view.lblListView.text;
      if (listViewTitle === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Location.ListView")) {
        self.showListView();
      } else {
        self.setPreshowData();
      }  
    };

    this.view.segServicesFilter.onRowClick = function() {
      try{
        var rowNumber = self.view.segServicesFilter.selectedRowIndex[1];
        var indices = self.view.segServicesFilter.selectedRowIndices;
        self.onRowClickOfSegServicesFilter(indices, rowNumber);
      }
      catch(error){
        //failed to get selectedRowIndex
      }
      
    };
    
    this.view.flxBtnFilters.onClick = function() {
      self.showFilters();
    };
    
    this.view.flxFilterClose.onClick = function() {
      self.view.flxFilters.setVisibility(false);
      this.view.title= kony.i18n.getLocalizedString("kony.mb.Location.Header");
    };
    
    this.view.segShow.onRowClick = function() {
      try{
        var rowIndex = self.view.segShow.selectedIndex[1];
      	self.filters.typeIndex = rowIndex;
    	var activeRow  = self.view.segShow.data[rowIndex].lblRange.toLowerCase();
      	self.filters.type = activeRow;
      	self.toggleRadioBtn(self.view.segShow, rowIndex);
      }
      catch(error){
        //error in reading selectedIndex
      }
    };
    
    this.view.segSelectSearchRange.onRowClick = function() {
      try{
      	var rowIndex = self.view.segSelectSearchRange.selectedIndex[1];
      	self.filters.selectedRangeIndex = rowIndex;
    	var activeRow  = self.view.segSelectSearchRange.data[rowIndex].lblRange;
      	self.filters.selectedRange = activeRow;
      	self.toggleRadioBtn(self.view.segSelectSearchRange, rowIndex);      	 
      }
      catch(error){
        //error in fetching selectedIndex
      }
    };
    
    this.view.segServicesFilter.onRowClick = function() {
      try{
      	var rowIndex = self.view.segServicesFilter.selectedIndex[1];
    	var activeRow  = self.view.segServicesFilter.data[rowIndex];
      	self.toggleCheckBox(rowIndex);
      }
      catch(error){
        //error in fetching selectedIndex
      }
    };
    
    this.view.btnApply.onClick = this.onApplyFilter;
    
    this.view.mapLocation.onPinClick = function(mapId,response) {
      self.onPinClickHandler(mapId,response);
      self.onPinClickUI();
    };
    
  },

  moveSearchUp: function() {
    this.view.flxSearch.setVisibility(false);
    this.view.customHeaderTablet.setVisibility(false);
    this.view.flxHeaderSearchbox.isVisible = true;
    this.view.customSearchbox.setVisibility(true);
    this.view.customSearchbox.top = "0dp";
    this.view.customSearchbox.height = "56dp";
    this.view.customSearchbox.tbxSearch.setFocus(true);
    this.view.flxBranchesList.top = "56dp";
  },
  
  hideSearchbox: function() {
    this.view.flxHeaderSearchbox.isVisible = false;
    this.view.flxBranchesList.top = "79dp";
    this.view.customSearchbox.tbxSearch.text="";
    this.view.txtSearch.text="";
    this.view.flxSearch.setVisibility(true);
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.setVisibility(true);
    }
    this.view.customSearchbox.setVisibility(false);
  },
  
  setPreshowData: function() {
    this.view.flxSearch.lxSearchAddress.txtSearch.text = "";
    this.view.flxMap.setVisibility(true);
    this.view.flxCurrentLocation.setVisibility(true);
    this.view.flxFilters.setVisibility(false);
    this.view.flxMapButtons.setVisibility(true);
    this.view.flxBranchesList.setVisibility(false);
    this.view.lblListView.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Location.ListView");
    this.view.imgListView.src = "listview.png";
    this.view.flxDetailsMain.setVisibility(false);
  },
  
  showFullDirections: function() {
    this.view.customSearch.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Location.HeaderGetDirections"); 
    this.view.flxDummy2.setVisibility(true);
    this.view.imgDirections.src = "carddown.png";
    this.view.flxBranchesList.setVisibility(false);
    if (applicationManager.getDeviceUtilManager().isIpad()) { 
      this.view.flxDirections.top = "40dp";
    } else {
      this.view.flxDirections.top = "0dp";
    }
    this.view.flxDirections.bottom = "0dp"; 
    this.view.flxDirections.setVisibility(true);
    this.view.flxHeaderAndSearch.height = "40dp";
    this.view.flxMapButtons.setVisibility(false);
  },

  showgetDirections: function() {
    this.hideAll();
    this.view.customSearch.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Location.HeaderGetDirections");
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

  showListView: function() {
    this.hideSearchbox();
    this.view.imgListView.src = "mapviewicon.png";
    this.view.lblListView.text = applicationManager.getPresentationUtility().getStringFromi18n("i18n.common.Map.mapView");
    this.view.flxMapButtons.setVisibility(true);
    this.view.flxMapButtons.bottom = "6%";
    var ipad = applicationManager.getDeviceUtilManager().isIpad();
    if(!ipad){
		this.view.flxBranchesList.top = "146dp";
    }
    else{
      this.view.flxBranchesList.top = "79dp";
    }
    this.view.flxBranchesList.setVisibility(true);
    this.view.flxMap.isVisible = false;
  },

  showFilters: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    this.view.title= kony.i18n.getLocalizedString("kony.mb.Location.AdvanceFilter");
    this.view.flxFilters.setVisibility(true);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  setDataToFilterItem: function(getFilterData, segment, imgSrc) {
    var dataToShow = getFilterData;
    var data = [];
    dataToShow.forEach(function(element) {
      var dataElement = { 
        lblRange: element,
        imgCheckbox: imgSrc,
        lblSeparator: "."
      };
      data.push(dataElement);
    });
    segment.setData(data);
  },

  showFullDetails: function() {
    this.view.flxMapButtons.setVisibility(false);
    this.view.flxDummy.setVisibility(true);
    this.view.flxHeaderAndSearch.height = "40dp";
    this.view.flxDetails.setVisibility(true);
    if (applicationManager.getDeviceUtilManager().isIpad()) {
      this.view.flxDetails.top = "40dp";
    } else {
      this.view.flxDetails.top = "0dp";
    }
    this.view.flxDetails.bottom = "0dp";
    this.view.imgDetails.src = "carddown.png";
  },

  bindLocations: function(navigationData) {
    var isUserLoggedIn = navigationData.isUserLoggedIn;
    var data = navigationData.data;
    this.setPreshowData();
    this.enableOrDisableHamburger(isUserLoggedIn);
    this.setDataToMapView(data);
    this.setDataToListSegView(data);
  },

  readDataFromNavigatorAndPresentView: function() {
    var navigationManager = applicationManager.getNavigationManager();
    var navigationData = navigationManager.getCustomInfo("frmLocationMap");
    var isUserLoggedIn = navigationData.isUserLoggedIn;
    var data = navigationData.data;
    this.enableOrDisableHamburger(isUserLoggedIn);
    this.setDataToMapView(data);
    this.setDataToListSegView(data);
  },

  enableOrDisableHamburger: function(isUserLoggedIn) {
    isUserLoggedIn = false;
    if (isUserLoggedIn) {
      this.view.customSearch.flxBack.imgBack.src = "hamburger.png";
      var configManager = applicationManager.getConfigurationManager(); 
      var MenuHandler = applicationManager.getMenuHandler();
      MenuHandler.setUpHamburgerForForm(this, configManager.constants.MENULOCATE);
      if (applicationManager.getDeviceUtilManager().isIpad()) {
        this.view.flxMap.bottom = "60dp";
      } else {
        this.view.flxMap.bottom = "0dp";
      }
    }
  },

  setDataToMapView: function(data) {
    applicationManager.getPresentationUtility().showLoadingScreen();
    if (data && data.length) {
      var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
      var zoomLevel = locateUsModule.presentationController.getMapZoomLevel();  
      this.oldLocationData = data;
      this.setDataToMapViewHelper(data, zoomLevel);
    } else {
      this.view.mapLocation.locationData = [];
    }
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  setDataToMapViewHelper: function(data, zoomLevel) {
    this.view.mapLocation.zoomLevel = 15;
    this.view.mapLocation.locationData = data;
    this.view.forceLayout();
    this.navigateToFirstLocationInMap();
  },

  setDataToListSegView: function(data) {
    applicationManager.getPresentationUtility().showLoadingScreen();
    if (data && data.length) {
      this.view.segBranchList.widgetDataMap = {
        imgBank : "listViewImage",
        lblName : "name",
        lblAddress : "desc",
        lblSatus : "listViewStatus"		  
      };
      this.view.segBranchList.setData(data.slice(0, -1));
    }
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  navigateToFirstLocationInMap: function() {
    this.view.mapLocation.navigateTo(0, false);
  },

  onListViewRowClickHandler: function(locDetails) {
    var locationDetails;
    if (!locDetails) {
      	locationDetails = this.view.segBranchList.selectedItems[0];
    	this.getLocationDetails(locationDetails);  
    } else {
      	this.getLocationDetails(locDetails);
    }
  },

  getLocationDetails: function(selectedLocation) {
    var locationId = selectedLocation.locationId;
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    locateUsModule.presentationController.getLocationDetails(locationId, selectedLocation);
  },

  onSearch: function() {
    var searchStr = this.view.customSearchbox.tbxSearch.text;
    if (searchStr && searchStr !== "") {
      var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
      locateUsModule.presentationController.getLocationsBySearch(searchStr);
    }
  },

  searchLocationsSuccess: function(data) {
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var processedData = locateUsModule.presentationController.ProcessDataForView(data);
    var state = locateUsModule.presentationController.getMapState();
    if (state === locateUsModule.presentationController.SEARCH || state === locateUsModule.presentationController.SEARCH_FILTER) {
      this.view.customHeaderTablet.flxSearch.text = this.view.customSearchbox.tbxSearch.text;
    }
    this.setDataToMapView(processedData);
    this.setDataToListSegView(processedData);
  },

  bindError: function(err) {
    applicationManager.getDataProcessorUtility().showToastMessageError(this, err);
  },

  /**
  * it send the master data for range selection segment
  */
  getServicesMasterData: function() {
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
  * it send the master data for range selection segment
  */
  getRangeMasterData: function() {
    return ["5 Miles", "10 Miles", "25 Miles", "50 Miles", "100 Miles"];
  },

  getBranchMasterData: function() {
    return ["Branch", "ATM", "Both"];
  },
  
  toggleRadioBtn: function(segName, index) {
    var seg = segName;
    var rowInfo = seg.data[index];
    var categoryTitle = rowInfo.lblRange;
    var checkedRadio = {
      lblRange: rowInfo.lblRange,
      imgCheckbox:{"src": "radiobtn.png"},
      lblSeparator: "."
    };

    if (rowInfo.imgCheckbox.src == "radiobuttoninactive.png") {
      seg.setDataAt(checkedRadio, index);	
      seg.data.forEach(function(element, pos) {
        var uncheckedRadio = {
          lblRange: element.lblRange,
          imgCheckbox:{"src": "radiobuttoninactive.png"} ,
          lblSeparator: "."
        };          
        if (element.imgCheckbox.src == "radiobtn.png" && pos != index) {
          seg.setDataAt(uncheckedRadio, pos);  	
        }
      });
    }

    if (segName == this.view.segSelectSearchRange) {
      this.view.lblSelectSearchRange.text = categoryTitle ? 
        "Select Search Range " + "(" + categoryTitle + ")" : 
      "Select Search Range";
    }
  },
  
  toggleCheckBox: function(index) {
    var seg = this.view.segServicesFilter;
    var rowInfo = seg.data[index];
    var checkCounter = 0;

    var self = this;
    var checkedBox = {
      lblRange : rowInfo.lblRange,
      imgCheckbox : "remembermetick.png",
      lblSeparator: "."
    };

    var uncheckedBox = {
      lblRange : rowInfo.lblRange,
      imgCheckbox : "remeberme.png" ,
      lblSeparator: "."
    };  

    if (rowInfo.imgCheckbox == "remeberme.png") {
      seg.setDataAt(checkedBox, index);
    } else {
      seg.setDataAt(uncheckedBox, index);
    }

    seg.data.forEach(function(element) {
      if (element.imgCheckbox == "remembermetick.png") {
        checkCounter++;
      }
    });

    if (rowInfo.lblRange === "All") {
      var toggleCheckBog = rowInfo.imgCheckbox === "remembermetick.png" ? "remeberme.png" : "remembermetick.png";
      checkCounter = rowInfo.imgCheckbox === "remembermetick.png" ? 0 : seg.data.length;
      seg.data.forEach(function(element, pos) {
        var item = {
          lblRange: element.lblRange,
          imgCheckbox: toggleCheckBog,
          lblSeparator: "."
        };
        seg.setDataAt(item, pos);
        if (element.imgCheckbox === "remeberme.png" && element.lblRange !== "All") {
          self.filters.services.push(pos);
        } else {
          self.filters.services.splice(0, self.filters.services.length);
        }
      });
    }

    if (rowInfo.imgCheckbox === "remeberme.png") {
      this.filters.services.push(index); 
    } else {
      var removedElementIndex = this.filters.services.indexOf(index);
      this.filters.services.splice(removedElementIndex, 1);
    }

    this.view.lblServicesFilter.text = checkCounter === 0 ? "Services" : "Services "+"("+checkCounter+")";   
  },
  
  /**
  * it send the mapper for services
  */
  getServicesMasterDataMapper: function() {
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
  
  applyFilterToData: function(data) {
    var selectedType = this.filters.typeIndex;
    //var selectedType = this.view.segShow.selectedRowIndices[0][1];
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var selectedServices = this.filters.services;//this.view.segServicesFilter.selectedRowIndices[0][1];
    var mappedSelectedServices = this.getMappedSelectedServices(selectedServices);
    var i18n_noResults = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.NoResultsFound", "No Results Found");
    if (mappedSelectedServices === null || mappedSelectedServices.length === 0) {
      this.bindGenericError(i18n_noResults);
      return;
    }
    var type = this.getSegShowMapper(selectedType);
    //var type = this.getSegShowMapper(selectedType[0]);
    var filteredData = locateUsModule.presentationController.filterLocationsWithServices(data, mappedSelectedServices, type);
    if (filteredData.length > 0) {
      this.setFilteredDataToView(filteredData);
    } else {
      this.bindGenericError(i18n_noResults);
    } 
  },

  /**
  *it maps the view segment selected services to backed services with mapper
  */
  getMappedSelectedServices: function(serviceIndexes) {
    var mapper = this.getServicesMasterDataMapper();
    var services = this.getServicesMasterData();
    var result = [];
    for (var i = 0; i < serviceIndexes.length; i++) {
      var mapedElt = mapper[services[serviceIndexes[i]]];
      if (mapedElt) {
        result.push(mapedElt);
      }
    }
    return result;
  },

  /**
  *it will set the filtered data to view
  */
  setFilteredDataToView: function(data) {
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var processedData = locateUsModule.presentationController.ProcessDataForView(data);
    var state = locateUsModule.presentationController.getMapState();
    this.setPreshowData();
    this.setDataToMapView(processedData);
    this.setDataToListSegView(processedData);
    if (state === locateUsModule.presentationController.SEARCH || state === locateUsModule.presentationController.SEARCH_FILTER) {
      this.view.customSearch.tbxSearch.text = this.view.flxSearch.lxSearchAddress.txtSearch.text;
    }
  },

  getSegShowMapper: function(number) {
    switch (number) {
      case 0: return "branch"; 
      case 1: return "atm";
      case 2: return "both";
      default: break;
    }
  },

  onApplyFilter: function() {
    this.selectedType = this.view.segShow.selectedRowIndices;
    this.selectedServices = this.view.segServicesFilter.selectedRowIndices;
    this.selectedRange = this.view.segSelectSearchRange.selectedRowIndices;
    if (this.filters.services === null || this.filters.selectedRange === null) {
      var i18nErrmsg = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.selectService","Please select a service.");
      this.bindError(i18nErrmsg);
      return;
    } 
      var range = this.getSelectedRangeData();
      applicationManager.getPresentationUtility().showLoadingScreen();
      var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
      var polylineData = locateUsModule.presentationController.getLocationsNearFirstLocationWithRange(range);
  },
  
  /**
  *it returns the selected range in filter Ex: 5
  */
  getSelectedRangeData: function() {
    //var filterRange = this.view.segSelectSearchRange.selectedRowIndices;
    //var index = filterRange[0][1][0];
    var index = this.filters.selectedRangeIndex;
    var data = this.getRangeMasterData()[index].split(" ");
    return data[0];
  },

  bindGenericError: function(err) {
    applicationManager.getDataProcessorUtility().showToastMessageError(this, err);
  },

  onRowClickOfSegServicesFilter: function(indices, rowNumber) {
    if (indices === null) {
      return;
    }

    if (rowNumber === 0) {
      var keys = indices;
      var indexes = keys[0][1];
      if (indexes[0] === 0) {
        var length = this.getServicesMasterData().length;
        var res = [];
        for(var i = 0; i < length; i++) {
          res.push(i);
        }
        this.view.segServicesFilter.selectedRowIndices = [[0,res]];
      } else {
        this.view.segServicesFilter.selectedRowIndices = null;
      }
    } else if (rowNumber > 0) {
      var selectedIndices = indices;
      var values = selectedIndices[0][1];
      if (values.indexOf(rowNumber) === -1) {
        var resultVal = [];
        var j = 0;
        if (values[0] === 0) {
          j = 1;
        }
        for(; j < values.length; j++) {
          resultVal.push(values[j]);
        }
        this.view.segServicesFilter.selectedRowIndices = [[0, resultVal]];
      } 
    }
  },

  onClickOfCurrentLocation: function() {
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var status = locateUsModule.presentationController.getMapState();
    if (status === locateUsModule.presentationController.CURRENTLOCATION || status == locateUsModule.presentationController.CURRENTLOCATION_FILTER) {
      var latLongObj = {};
      latLongObj.latitude = locateUsModule.presentationController.currentLatitude;
      latLongObj.longitude = locateUsModule.presentationController.currentLongitude;
      this.navigateToGivenLocation(latLongObj);
    }
    if (status === locateUsModule.presentationController.SEARCH || status === locateUsModule.presentationController.SEARCH_FILTER) {
      this.getLocationsNearBy();
    }
  },

  navigateToGivenLocation: function(latLongObj) {
    var showDropPin = true;
    //#ifdef android
    showDropPin = false;
    //#endif
    var params = {
      lat: latLongObj.latitude,
      lon: latLongObj.longitude,
      image: "current_location.png",
      showcallout: false
    };
    this.view.mapLocation.navigateToLocation(params, false, showDropPin);
  },

  getLocationsNearBy: function() {
    var positionoptions = {
      timeout: 64000,
      fastestInterval: 0,
      minimumTime: 0
    };
    this.searchString = null;
    applicationManager.getPresentationUtility().showLoadingScreen();
    kony.location.getCurrentPosition(this.geoLocationSuccessCallBack, this.geoLocationErrorCallBack, positionoptions);
  },

  geoLocationSuccessCallBack: function(response) {
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
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  geoLocationErrorCallBack: function(err) {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err.code == 1) {
      var i18nKey = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationPermissionDenied");
      this.bindGenericError(i18nKey);
    }
    if (!applicationManager.getDeviceUtilManager().isIpad()) {
      if (err.code == 3) {
        var i18n_timeOut = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationTimeOut");
        this.bindGenericError(i18n_timeOut);
      }
      if (err.code == 2) {
        var i18n_turnOnLocationAlert = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.turnOnLocationAlert");
        kony.ui.Alert(i18n_turnOnLocationAlert, this.onClickSettingsOrCancelHandler, constants.ALERT_TYPE_CONFIRMATION, "Cancel", "Settings", "");
      }
    }
  },

  onClickSettingsOrCancelHandler: function(response) {
    if (!response) {
      var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
      locateUsModule.presentationController.openLocationSettings();
    }
  },

  /**
  * Handling the on pin click of map
  */
  onPinClickHandler: function(mapId,locationDetails) {
    if(locationDetails.image !== "current_location.png"){
      this.fromSegRowClick = false;
      this.selectedData = locationDetails;
      this.setDataToCalloutFlex(locationDetails);
    }
  },

  setDataToCalloutFlex: function(locationDetails) { 
    this.view.lblBranchName.text = locationDetails.name;
    this.view.lblStatus.text = locationDetails.calloutStatus.text;
    this.view.lblStatus.skin = locationDetails.calloutStatus.skin;
    this.view.lblAddress1.text = locationDetails.desc;
    this.view.lblAddress2.text = "";
    this.view.lblDistance.text = "";
    this.selectedLocation = locationDetails;
    this.view.flxDetailsMain.onClick = this.onListViewRowClickHandler.bind(this, locationDetails);
    this.view.flxDetailsDirections.onClick = this.getDirections.bind(this, locationDetails);
  },

  onPinClickUI: function() {
    this.view.flxDetailsMain.setVisibility(true);
    this.view.flxMapButtons.animate(
      kony.ui.createAnimation({
        0: { bottom: "20dp", "stepConfig": {} },
        100: { bottom: "100dp", "stepConfig": {} }
      }),
      { fillMode: kony.anim.FILL_MODE_FORWARDS, duration: 0.2 },
      { animationEnd: function () {} });
    this.view.flxDetailsMain.animate(
      kony.ui.createAnimation({
        0: { bottom: "-80dp", "stepConfig": {} },
        100: { bottom: "0dp", "stepConfig": {} }
      }),
      { fillMode: kony.anim.FILL_MODE_FORWARDS, duration: 0.2 },
      { animationEnd: function () {} });
  },
  
  onClose: function() {
    var navManager = applicationManager.getNavigationManager();
    var userObj = applicationManager.getUserPreferencesManager();
    var isLoggedin = userObj.isUserLoggedin();
    if(!isLoggedin || isLoggedin.length === null){
      var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
      authModule.presentationController.commonFunctionForNavigation("frmLogin");
    }else{
      navManager.goBack();
    }
  },
  
  onCancel: function() {
    if(this.view.flxFilters.isVisible){
		this.view.flxFilters.setVisibility(false);
        this.view.title= kony.i18n.getLocalizedString("kony.mb.Location.Header");
    }
    else if(this.view.flxBranchesList.isVisible){
		this.setPreshowData();
    }
    else{
      var navManager = applicationManager.getNavigationManager();
      navManager.goBack();
    }
    
  },

  getDirections: function(selectedLocationData) {
    var self = this;
    applicationManager.getPresentationUtility().showLoadingScreen();
    var source = {};
    var destination = {};
    destination.latitude = selectedLocationData.lat;
    destination.longitude = selectedLocationData.lon;
    var positionoptions = {
      timeout: 64000,
      fastestInterval: 0,
      minimumTime: 0
    };
    var customInfo = {};
    customInfo.selectedLocation = selectedLocationData;
    customInfo.locationDetails = null;
    var navigationManager = applicationManager.getNavigationManager();
    navigationManager.setCustomInfo("frmLocationDetails", customInfo);

    var  success = function(response) {
      if (response && response.coords && response.coords.latitude && response.coords.longitude) {
        source.latitude = response.coords.latitude;
        source.longitude = response.coords.longitude;
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo('LocationsCurrentForm', 'frmLocationMap');
        var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
        locateUsModule.presentationController.getDirections(source, destination);
      }
    };

    var failure = function(error) {
      self.geoLocationErrorCallBack(error);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    };

    kony.location.getCurrentPosition(success, failure, positionoptions);
  }
});