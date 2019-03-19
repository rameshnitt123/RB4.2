define(["AsyncManager/BusinessControllers/BusinessController"], function(AsyncManager) {

	function ManageCards_PresentationController() {
		scope_ManageCards_Pres = this;
		/**   numberOfAsyncForCards
          *  1.getAllCountries
          *  2.getAllRegions
          *  3.getAllCities
            */
		scope_ManageCards_Pres.numberOfAsyncForCards=3;
		kony.mvc.Presentation.BasePresenter.call(this);
		this.asyncManager = new AsyncManager();
	}

	inheritsFrom(ManageCards_PresentationController, kony.mvc.Presentation.BasePresenter);

	ManageCards_PresentationController.prototype.initializePresentationController = function() {

	};

    ManageCards_PresentationController.prototype.showCardsHome = function() {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var manageCards = applicationManager.getCardsManager();
      manageCards.fetchCardsList(scope_ManageCards_Pres.cardsFetchSuccess.bind(this), scope_ManageCards_Pres.cardsFetchFailure.bind(this));
    };
    ManageCards_PresentationController.prototype.cardsFetchSuccess = function(response) {
      var navManager = applicationManager.getNavigationManager();
      var frmData = navManager.getCustomInfo("frmCardManageHome");
      var newFrmData = { 
          "isMainScreen": true,
          "response":response
      };
      if(!kony.sdk.isNullOrUndefined(frmData) && !kony.sdk.isNullOrUndefined(frmData.isMainScreen))
      {
          newFrmData.isMainScreen = frmData.isMainScreen;      
      }      
      navManager.setCustomInfo("frmCardManageHome", newFrmData);
      navManager.navigateTo("frmCardManageHome");
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    };

      ManageCards_PresentationController.prototype.cardsFetchFailure = function(response) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var loggerManager = applicationManager.getLoggerManager();
      try {
        loggerManager.log("#### start frmCardManageHomeController : cardsFetchFailure ####");
        if(response["isServerUnreachable"])
          applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
        else{
          applicationManager.getDataProcessorUtility().showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.cardManage.errorFetchCards"));
        }
      }
      catch(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }
    };

	ManageCards_PresentationController.prototype.updateCardData = function(inputParams,successCallback,failureCallback) {

		var manageCards = applicationManager.getCardsManager();      
		manageCards.updateCardStatus(inputParams,successCallback,failureCallback);
	};

	ManageCards_PresentationController.prototype.dismissLoadingScreen = function(error) {
		applicationManager.getPresentationUtility().dismissLoadingScreen();
	};

	ManageCards_PresentationController.prototype.getTravelPlansList = function(successCallback, failureCallback) {

		var manageCards = applicationManager.getCardsManager();
		var userManager = applicationManager.getUserPreferencesManager();
		var usernameToQuery = userManager.getUserName();
		kony.print("ManageCards Presentation Controller: usernameToQuery: "+usernameToQuery);
		manageCards.fetchTravelPlansList(usernameToQuery, successCallback,failureCallback);
		//applicationManager.getPresentationUtility().dismissLoadingScreen();
	};
/**
   * @function
   * Fetch Travel Plans to display.
   */

	ManageCards_PresentationController.prototype.fetchTravelPlans = function() {
		applicationManager.getPresentationUtility().showLoadingScreen();
		scope_ManageCards_Pres.getTravelPlansList(this.plansFetchSuccess.bind(this), this.plansFetchFailure.bind(this));		
	};

	ManageCards_PresentationController.prototype.plansFetchSuccess = function(response) {
			var navManager = applicationManager.getNavigationManager();
      		var custInfo = navManager.getCustomInfo("frmManageTravelPlans");
      		var finalResp = {};
      		if (!kony.sdk.isNullOrUndefined(custInfo) && !kony.sdk.isEmptyObject(custInfo)&& 
                !kony.sdk.isNullOrUndefined(custInfo.showToast) && !kony.sdk.isEmptyObject(custInfo.showToast)) {				              
      			finalResp = {"response":response,"showToast":custInfo.showToast};
            }else{
              finalResp = {"response":response};
            }
      		kony.print("finalresp "+ JSON.stringify(finalResp));
      		kony.print("resp "+ JSON.stringify(response));
      		navManager.setCustomInfo("frmManageTravelPlans",finalResp);
            navManager.navigateTo("frmManageTravelPlans");
	};

	ManageCards_PresentationController.prototype.plansFetchFailure = function(response) {
// 		scope_ManageCards_Pres.asyncManager.setErrorStatus(0, response);
        var navManager = applicationManager.getNavigationManager();
		applicationManager.getPresentationUtility().dismissLoadingScreen();
        if(response["isServerUnreachable"])
          applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
        navManager.navigateTo("frmManageTravelPlans");
        
	};
	ManageCards_PresentationController.prototype.getDestinationList = function() {

		var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
		manageCardsModule.presentationController.getAllLocationsList(scope_ManageCards_Pres.fetchAllLocationsSuccess, scope_ManageCards_Pres.fetchAllLocationsFailure);				
	};

	ManageCards_PresentationController.prototype.getAllLocationsList = function(successCallback, failureCallback) {

		var manageCards = applicationManager.getCardsManager();
		manageCards.fetchAllLocations(successCallback,failureCallback);
	};

    ManageCards_PresentationController.prototype.fetchAllLocationsSuccess = function(response){

        var city = {};
        var state = {};
        var  locData = {};
        var locations = response.records;             
        var country = {};
        locData.countries ={};
        locData.states ={};
        locData.cities ={};

        locations.forEach(
          function(element) {
            if(!kony.sdk.isNullOrUndefined(element.Region_id))
            {
              
              city[element.id] = {
                "name": element.Name,
                "state_id": element.Region_id,
                "country_id": element.Country_id};
            }
            else if(!kony.sdk.isNullOrUndefined(element.Country_id))
            {
              state[element.id] = {
                "name": element.Name,
                "country_id": element.Country_id
              };
            }
            else
            {
              country[element.id] = {
                "name": element.Name
              };
            }                  
          }); 
        locData.cities = JSON.parse(JSON.stringify(city));
        locData.states = JSON.parse(JSON.stringify(state));
        locData.countries = JSON.parse(JSON.stringify(country));
        var cardsMan = applicationManager.getCardsManager();
        cardsMan.setLocations(locData);
        scope_ManageCards_Pres.commonFunctionForNavigation("frmManageTravelDestination");	
	};

    ManageCards_PresentationController.prototype.fetchAllLocationsFailure = function(response){
		applicationManager.getPresentationUtility().dismissLoadingScreen();
		if(response["isServerUnreachable"])
			applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
	};

	ManageCards_PresentationController.prototype.updateTravelPlan = function(data,updateTravelPlanSuccess, updateTravelPlanFailure) {
		applicationManager.getPresentationUtility().showLoadingScreen();
		var manageCards = applicationManager.getCardsManager();
		var userManager = applicationManager.getUserPreferencesManager();
		var loggedInUserName = userManager.getUserName();
		var cards = [];
		if(typeof(data.cardNumber)=="string"){
			var cardNum = data.cardNumber.split(",");
			cardNum.forEach(
				function(ele){
					cards.push({"name":ele.substring(0,ele.indexOf("*")).trim(),
								"number": ele.substring(ele.indexOf("*"))});
				});	
		} else{
			cards = data.cardNumber;
		}		
		var travelObject ={
			"request_id":data.notificationId,  
			"Destinations": JSON.stringify(data.destinations),
			"Channel_id": "Mobile App",
			"StartDate": data.startDate,
			"userName": loggedInUserName,
			"additionNotes":data.additionalNotes,
			"EndDate": data.endDate,
			"phonenumber": data.contactNumber,
     // "phoneCountryCode": data.phoneCountryCode,
			"Cards": JSON.stringify(cards)
		};
      
		manageCards.updateTravelNotifications(travelObject,updateTravelPlanSuccess,updateTravelPlanFailure);
	};  
	ManageCards_PresentationController.prototype.createNewTravelPlan = function(data,createTravelPlanSuccess, createTravelPlanFailure) {
		applicationManager.getPresentationUtility().showLoadingScreen();
		var manageCards = applicationManager.getCardsManager();
		kony.print("ManageCardsModule Going to Business for creating TravelPlan:: "+JSON.stringify(data));
		var userManager = applicationManager.getUserPreferencesManager();
		var loggedInUserName = userManager.getUserName();
		kony.print("In Cards Manager: createTravelNotification: "+JSON.stringify(data));
		var cards = [];
		if(typeof(data.cardNumber)=="string"){
			var cardNum = data.cardNumber.split(",");
			cardNum.forEach(
				function(ele){
					cards.push({"name":ele.substring(0,ele.indexOf("*")).trim(),
								"number": ele.substring(ele.indexOf("*"))});
				});	
		} else{
			cards = data.cardNumber;
		}		

		var travelObject ={
			"Destinations": JSON.stringify(data.destinations),
			"Channel_id": "Mobile App",
			"StartDate": data.startDate,
			"userName": loggedInUserName,
			"additionNotes":data.additionalNotes,
			"EndDate": data.endDate,
			"phonenumber": data.contactNumber,
			"Cards": JSON.stringify(cards)
		};
		kony.print("CardsManager: createTravelNotification: TransformedObject:  "+JSON.stringify(travelObject));      
		manageCards.createTravelNotification(travelObject,createTravelPlanSuccess,createTravelPlanFailure);
	};
	ManageCards_PresentationController.prototype.deleteTravelPlan = function(data,deleteTravelPlanSuccess, deleteTravelPlanFailure) {
		applicationManager.getPresentationUtility().showLoadingScreen();
		var manageCards = applicationManager.getCardsManager();
		kony.print("ManageCardsModule Going to Business for deleting TravelPlan:: "+JSON.stringify(data));
		manageCards.deleteTravelNotifications(data.notificationId,deleteTravelPlanSuccess,deleteTravelPlanFailure);
	};
	ManageCards_PresentationController.prototype.commonFunctionForNavigation = function(formName){
		var navManager = applicationManager.getNavigationManager();
		navManager.navigateTo(formName);
	};

	ManageCards_PresentationController.prototype.navigateToTravelDestination = function(){
		applicationManager.getPresentationUtility().showLoadingScreen();
		var cardsMan = applicationManager.getCardsManager();
		var locs = cardsMan.getLocations();
		if(kony.sdk.isNullOrUndefined(locs) || kony.sdk.isEmptyObject(locs)){
			kony.print("Manage Cards Presentation Controller: NavigateToTravelDestination: ifnot Locations:"+JSON.stringify(locs));
			scope_ManageCards_Pres.getDestinationList();
		} else{
			kony.print("Manage Cards Presentation Controller: NavigateToTravelDestination: if Locations:"+JSON.stringify(locs)); 
			scope_ManageCards_Pres.commonFunctionForNavigation("frmManageTravelDestination");
		}
	};
	return ManageCards_PresentationController;
});