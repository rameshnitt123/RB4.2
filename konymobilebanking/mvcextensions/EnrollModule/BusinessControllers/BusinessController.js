define([],function () {

  	function Enroll_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(Enroll_BusinessController,kony.mvc.Business.Controller);
	
	Enroll_BusinessController.prototype.initializeBusinessController = function(){

    };

    Enroll_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return Enroll_BusinessController;
});
