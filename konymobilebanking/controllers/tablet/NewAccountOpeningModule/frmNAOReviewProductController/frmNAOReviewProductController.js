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
      var scope = this;
      this.renderTitleBar();
      this.setProductData();
      this.setPersonalInfo();
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
      var scope = this;
      
      this.view.customHeaderTablet.flxBack.onClick = function(){
        var navMan=applicationManager.getNavigationManager();    
        navMan.goBack(); 
      };
      
      this.view.customHeaderTablet.btnRight.onClick = this.onClose;
      
      this.view.btnSubmit.onClick = function(){
        scope.navToAck();
      };        
    }
    catch(ex)
    {

    }
  },

  onClose : function()
  {
    try
    {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      accountMod.presentationController.showDashboard();        
    }
    catch(ex)
    {

    }    
  },

  navToAck : function()
  {
    try
    {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var  NAOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
      NAOMod.presentationController.createUserSelectProducts();       
    }
    catch(ex)
    {

    }    
  },

  setProductData : function()
  {
    try
    {
      var scope = this,
          productslist = [],
          products;

      var navManager = applicationManager.getNavigationManager();
      var navData = navManager.getCustomInfo("frmNAOReviewProduct");
      if (navData && navData.selectedProducts) {
        products = navData.selectedProducts;
      }
      if (products) {
        products.forEach(function(product, index) {
          var item = {
                        imgAcc : product["imgAcc"]["src"],
                        lblProductTitle : product["lblAccountStatus"]["text"],
                        lblProductInfo : product["lblAccountDescription"]["text"]
                     };

          productslist.push(item);
        });      
        this.view.segReviewSelectedProducts.widgetDataMap  = {
                                                                "imgAcc" : "imgAcc",
                                                                "lblProductTitle" : "lblProductTitle",
                                                                "lblProductInfo" : "lblProductInfo"
 													         } ;
        this.view.segReviewSelectedProducts.setData(productslist);
        this.view.forceLayout();
      }        
    }
    catch(ex)
    {

    }    
  },

  setPersonalInfo : function()
  {
    try
    {
      var scope = this;
      var user ;
      var dataMap =  {
                        "flxMain": "flxMain",
                        "flxNAOPersonalDetails": "flxNAOPersonalDetails",
                        "flxSeparator": "flxSeparator",
                        "lblDetail": "lblDetail",
                        "lblDetailValue": "lblDetailValue",
                     };
      var navManager = applicationManager.getNavigationManager();
      var navData = navManager.getCustomInfo("frmNAOReviewProduct");
      if (navData && navData.user) {
        user = navData.user;
      }
      var data = [
                    {
                      "lblDetail": "First Name",
                      "lblDetailValue": user.firstName,
                      "template" : "flxNAOPersonalDetails"
                    },
                    {
                      "lblDetail": "Last Name",
                      "lblDetailValue": user.lastName,
                      "template" : "flxNAOPersonalDetails"
                    },
                    {
                      "lblDetail": "Date of Birth",
                      "lblDetailValue": user.dob,
                      "template" : "flxNAOPersonalDetails"
                    },
                    {
                      "lblDetail": "Gender",
                      "lblDetailValue": user.gender,
                      "template" : "flxNAOPersonalDetails"
                    },
                    {
                      "lblDetail": "Marital Status",
                      "lblDetailValue": user.martialStatus,
                      "template" : "flxNAOPersonalDetails"
                    },
                    {
                      "lblDetail": "Dependends",
                      "lblDetailValue": user.dependents,
                      "template" : "flxNAOPersonalDetails"
                    },
                    {
                      "lblDetail": "Address",
                      "lblDetailValue": user.address,
                      "template" : "flxNAOPersonalDetailsAddress"
                    }
                 ];
      if(user.martialStatus=="Married"){
        data.push({
                    "lblDetail": "Spouse Name",
                    "lblDetailValue": user.spouseName,
                    "template" : "flxNAOPersonalDetails"
        });
      }

      this.view.segSSN.setData([{
                                  "lblDetail": kony.i18n.getLocalizedString("kony.mb.enroll.SSN"),
                                  "lblDetailValue": applicationManager.getDataProcessorUtility().maskSSN(user.ssn),
                                  "template" : "flxNAOPersonalDetails"
                              }]);
      this.view.segPersonalInfo.widgetDataMap = dataMap;
      this.view.segPersonalInfo.setData(data);
      this.view.forceLayout();        
    }
    catch(ex)
    {

    }    
  },

  renderTitleBar : function()
  {
    try
    {
      var deviceUtilManager = applicationManager.getDeviceUtilManager();
      var isIpad = deviceUtilManager.isIpad();
      if(!isIpad){
        this.view.flxHeader.isVisible = true;
      }
      else{
        this.view.flxHeader.isVisible = false;
      }          
    }
    catch(ex)
    {

    }        
  },  
  
  goBack : function() 
  {
    try
    {     
      var navManager = applicationManager.getNavigationManager();
      navManager.goBack();        
    }
    catch(ex)
    {

    }   
  },

});