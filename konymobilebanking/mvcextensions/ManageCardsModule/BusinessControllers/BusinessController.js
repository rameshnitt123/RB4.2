define([],function () {

  	function ManageCards_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(ManageCards_BusinessController,kony.mvc.Business.Controller);
	
	ManageCards_BusinessController.prototype.initializeBusinessController = function(){

    };

    ManageCards_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return ManageCards_BusinessController;
});
