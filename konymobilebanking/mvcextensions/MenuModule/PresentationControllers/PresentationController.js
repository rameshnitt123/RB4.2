define([], function() {

    function Menu_PresentationController() {
      	scope_MenuPresentationController=this;  
        kony.mvc.Presentation.BasePresenter.call(this);
    }

    inheritsFrom(Menu_PresentationController, kony.mvc.Presentation.BasePresenter);

    Menu_PresentationController.prototype.initializePresentationController = function() {
        
    };
  
  	Menu_PresentationController.prototype.getRequestsAndNavigateToMessagesDashboard=function(){
    	var messagesModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
      	messagesModule.presentationController.getInboxRequests();
    };

    return Menu_PresentationController;
});
