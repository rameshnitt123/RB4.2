define({ 
  
	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
  
	preshow: function() {
		this.initActions();
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
	},
  
  	initActions: function() {
    	var isIpad = applicationManager.getDeviceUtilManager().isIpad();
		
      	if (!isIpad) {
      		this.view.customHeader.flxBack.onClick = this.onCloseTnC;  
        }
    },
  
	onCloseTnC: function() {
		var navManager = applicationManager.getNavigationManager();
		navManager.goBack(); 
	}
});