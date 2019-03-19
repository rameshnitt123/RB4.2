define([],function () {

  	function Information_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(Information_BusinessController,kony.mvc.Business.Controller);
	
	Information_BusinessController.prototype.initializeBusinessController = function(){

    };

    Information_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return Information_BusinessController;
});
