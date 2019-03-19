define([],function () {

  	function Account_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(Account_BusinessController,kony.mvc.Business.Controller);
	
	Account_BusinessController.prototype.initializeBusinessController = function(){

    };

    Account_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return Account_BusinessController;
});
