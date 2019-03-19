define({ 

  init : function()
  {
    try
    {
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);       
    }
    catch(ex)
    {

    }
  },

  preShow : function()
  {
    try
    {
      this.initialUiSettings();
      this.initActions();

      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
      applicationManager.getPresentationUtility().dismissLoadingScreen();        
    }
    catch(ex)
    {

    }    
  },

  initActions : function()
  {
    try
    {
      this.view.btnGoToAccounts.onClick = function(){
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.showDashboard();
      };        
    }
    catch(ex)
    {

    }    
	this.view.btnChatbot.onClick = function(){
	  var chatBotMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ChatBotModule");
	  chatBotMode.presentationController.handleFirstTimeOpen();
	};
  },

  initialUiSettings : function()
  {
    try
    {
      this.setSegmentData();       
    }
    catch(ex)
    {

    }    
  },

  setSegmentData : function()
  {
    try
    {
      var productslist = [];

      var navMan=applicationManager.getNavigationManager();

      var data = navMan.getCustomInfo("frmNAOReviewProduct");
      data = data.selectedProducts;

      for(i = 0; i < data.length; i++)
      {
        var msg = applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.nop.yourAccountActive");
        
        if(data[i]["productTypeId"].text == "3")
        {
          msg = applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.nop.yourCardWillBeDispatched");
        }

        var product = {
                          "lblProductTitle" : data[i]["lblAccountStatus"],
                          "lblProductInfo" : {"text": msg },
                          "imgAcc" : {"src":"product.png"}
        			  };
        
        productslist.push(product);
      }
      
      this.view.segSelectedProducts.setData(productslist);        
    }
    catch(ex)
    {

    }    
  }

});