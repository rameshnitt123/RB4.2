define([],function () {

  	function ChatBot_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }

  	inheritsFrom(ChatBot_BusinessController,kony.mvc.Business.Controller);
	
	ChatBot_BusinessController.prototype.initializeBusinessController = function(){

    };

    ChatBot_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };

    return ChatBot_BusinessController;
});
