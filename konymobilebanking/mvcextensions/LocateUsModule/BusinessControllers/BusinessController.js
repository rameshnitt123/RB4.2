define([],function () {

  	function LocateUs_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(LocateUs_BusinessController,kony.mvc.Business.Controller);
	
	LocateUs_BusinessController.prototype.initializeBusinessController = function(){

    };

    LocateUs_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return LocateUs_BusinessController;
});
