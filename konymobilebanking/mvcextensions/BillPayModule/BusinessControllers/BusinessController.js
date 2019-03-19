define([],function () {

  	function BillPay_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(BillPay_BusinessController,kony.mvc.Business.Controller);
	
	BillPay_BusinessController.prototype.initializeBusinessController = function(){

    };

    BillPay_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return BillPay_BusinessController;
});
