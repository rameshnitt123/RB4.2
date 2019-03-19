define([],function () {

  	function NewAccountOpening_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(NewAccountOpening_BusinessController,kony.mvc.Business.Controller);
	
	NewAccountOpening_BusinessController.prototype.initializeBusinessController = function(){

    };

    NewAccountOpening_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return NewAccountOpening_BusinessController;
});
