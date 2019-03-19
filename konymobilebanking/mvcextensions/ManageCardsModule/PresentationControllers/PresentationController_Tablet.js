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
		var navManager = applicationManager.getNavigationManager();
		var frmData = { 
			"isMainScreen": true 
		};
		navManager.setCustomInfo("frmCardManageHome",frmData);
		navManager.navigateTo("frmCardManageHome");
	};

	ManageCards_PresentationController.prototype.getCardsList = function(successCallback,failureCallback) {

		var manageCards = applicationManager.getCardsManager();      
		manageCards.fetchCardsList(successCallback,failureCallback);
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
        var navManager = applicationManager.getNavigationManager();
		applicationManager.getPresentationUtility().dismissLoadingScreen();
        if(response["isServerUnreachable"])
          applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
        navManager.navigateTo("frmManageTravelPlans");
        
	};
	ManageCards_PresentationController.prototype.getDestinationList = function() {

		scope_ManageCards_Pres.asyncManager.initiateAsyncProcess(scope_ManageCards_Pres.numberOfAsyncForCards);
		var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
		manageCardsModule.presentationController.getCountriesList(scope_ManageCards_Pres.fetchCountrySuccess, scope_ManageCards_Pres.fetchCountryFailure);
		manageCardsModule.presentationController.getStatesList(scope_ManageCards_Pres.fetchStatesSuccess, scope_ManageCards_Pres.fetchStatesFailure);
		manageCardsModule.presentationController.getCitiesList(scope_ManageCards_Pres.fetchCitiesSuccess, scope_ManageCards_Pres.fetchCitiesFailure);
		//      }
		//      else{
		//        var navManager = applicationManager.getNavigationManager();
		//        navManager.setCustomInfo("frmManageTravelDestination",{"locationData":locationData});
		//        navManager.navigateTo("frmManageTravelDestination");
		//      }
	};

	ManageCards_PresentationController.prototype.getCountriesList = function(successCallback, failureCallback) {

		var manageCards = applicationManager.getCardsManager();
		manageCards.fetchAllCountries(successCallback,failureCallback);
	};

	ManageCards_PresentationController.prototype.getStatesList = function(successCallback, failureCallback) {

		var manageCards = applicationManager.getCardsManager();
		manageCards.fetchAllStates(successCallback,failureCallback);
	};

	ManageCards_PresentationController.prototype.getCitiesList = function(successCallback, failureCallback) {

		var manageCards = applicationManager.getCardsManager();
		manageCards.fetchAllCities(successCallback,failureCallback);
	};
	ManageCards_PresentationController.prototype.fetchCountrySuccess = function(response){

		scope_ManageCards_Pres.asyncManager.setSuccessStatus(0, response);
		kony.print("ManageCards Presentation Controller Countries: "+JSON.stringify(response.records));
		if (scope_ManageCards_Pres.asyncManager.areAllservicesDone(scope_ManageCards_Pres.numberOfAsyncForCards)) {
			scope_ManageCards_Pres.commonFunctionForNavigation("frmManageTravelDestination");
		}

	};
	ManageCards_PresentationController.prototype.fetchCountryFailure = function(response){
		scope_ManageCards_Pres.asyncManager.setErrorStatus(0, response);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
		if(response["isServerUnreachable"])
			applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
	};
	ManageCards_PresentationController.prototype.fetchStatesSuccess = function(response){
		scope_ManageCards_Pres.asyncManager.setSuccessStatus(1, response);
		kony.print("ManageCards Presentation Controller States: "+JSON.stringify(response.records));
		if (scope_ManageCards_Pres.asyncManager.areAllservicesDone(scope_ManageCards_Pres.numberOfAsyncForCards)) {
			scope_ManageCards_Pres.commonFunctionForNavigation("frmManageTravelDestination");
		}
	};
	ManageCards_PresentationController.prototype.fetchStatesFailure = function(response){
		scope_ManageCards_Pres.asyncManager.setErrorStatus(1, response);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
		if(response["isServerUnreachable"])
			applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
	};
	ManageCards_PresentationController.prototype.fetchCitiesSuccess = function(response){
		scope_ManageCards_Pres.asyncManager.setSuccessStatus(2, response);
		kony.print("ManageCards Presentation Controller Cities: "+JSON.stringify(response.records));
		if (scope_ManageCards_Pres.asyncManager.areAllservicesDone(scope_ManageCards_Pres.numberOfAsyncForCards)) {
			scope_ManageCards_Pres.commonFunctionForNavigation("frmManageTravelDestination");
		}
	};
	ManageCards_PresentationController.prototype.fetchCitiesFailure = function(response){
		scope_ManageCards_Pres.asyncManager.setErrorStatus(2, response);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
		if(response["isServerUnreachable"])
			applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
	};

	ManageCards_PresentationController.prototype.updateTravelPlan = function(data,updateTravelPlanSuccess, updateTravelPlanFailure) {
		applicationManager.getPresentationUtility().showLoadingScreen();
		var manageCards = applicationManager.getCardsManager();
		kony.print("ManageCardsModule Going to Business for Updating data:: "+JSON.stringify(data));
		manageCards.updateTravelNotifications(data,updateTravelPlanSuccess,updateTravelPlanFailure);
	};  
	ManageCards_PresentationController.prototype.createNewTravelPlan = function(data,createTravelPlanSuccess, createTravelPlanFailure) {
		applicationManager.getPresentationUtility().showLoadingScreen();
		var manageCards = applicationManager.getCardsManager();
		kony.print("ManageCardsModule Going to Business for creating TravelPlan:: "+JSON.stringify(data));
		manageCards.createTravelNotification(data,createTravelPlanSuccess,createTravelPlanFailure);
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