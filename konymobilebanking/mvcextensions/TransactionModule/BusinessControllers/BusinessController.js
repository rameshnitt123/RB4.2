define([],function () {

  	function Transaction_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(Transaction_BusinessController,kony.mvc.Business.Controller);
	
	Transaction_BusinessController.prototype.initializeBusinessController = function(){

    };

    Transaction_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return Transaction_BusinessController;
});
