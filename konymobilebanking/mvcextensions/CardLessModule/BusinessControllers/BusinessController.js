define([],function () {

  	function CardLess_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(CardLess_BusinessController,kony.mvc.Business.Controller);
	
	CardLess_BusinessController.prototype.initializeBusinessController = function(){

    };

    CardLess_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return CardLess_BusinessController;
});
