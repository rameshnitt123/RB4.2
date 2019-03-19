define([],function () {

  	function PayAPerson_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(PayAPerson_BusinessController,kony.mvc.Business.Controller);
	
	PayAPerson_BusinessController.prototype.initializeBusinessController = function(){

    };

    PayAPerson_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return PayAPerson_BusinessController;
});
