define([],function () {

  	function Transfer_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(Transfer_BusinessController,kony.mvc.Business.Controller);
	
	Transfer_BusinessController.prototype.initializeBusinessController = function(){

    };

    Transfer_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return Transfer_BusinessController;
});
