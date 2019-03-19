define([],function () {

  	function Auth_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(Auth_BusinessController,kony.mvc.Business.Controller);
	
	Auth_BusinessController.prototype.initializeBusinessController = function(){

    };

    Auth_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };
  
  	

    return Auth_BusinessController;
});
