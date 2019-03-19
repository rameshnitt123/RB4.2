define([],function () {

  	function CheckDeposit_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(CheckDeposit_BusinessController,kony.mvc.Business.Controller);
	
	CheckDeposit_BusinessController.prototype.initializeBusinessController = function(){

    };

    CheckDeposit_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return CheckDeposit_BusinessController;
});
