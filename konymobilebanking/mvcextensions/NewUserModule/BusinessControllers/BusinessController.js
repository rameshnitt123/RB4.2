define([],function () {

  	function NewUser_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(NewUser_BusinessController,kony.mvc.Business.Controller);
	
	NewUser_BusinessController.prototype.initializeBusinessController = function(){

    };

    NewUser_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return NewUser_BusinessController;
});
