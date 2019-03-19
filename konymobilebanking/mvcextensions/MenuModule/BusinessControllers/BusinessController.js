define([],function () {

  	function Menu_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(Menu_BusinessController,kony.mvc.Business.Controller);
	
	Menu_BusinessController.prototype.initializeBusinessController = function(){

    };

    Menu_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return Menu_BusinessController;
});
