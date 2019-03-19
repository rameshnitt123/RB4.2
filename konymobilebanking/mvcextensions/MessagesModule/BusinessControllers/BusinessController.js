define([],function () {

  	function Messages_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(Messages_BusinessController,kony.mvc.Business.Controller);
	
	Messages_BusinessController.prototype.initializeBusinessController = function(){

    };

    Messages_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return Messages_BusinessController;
});
