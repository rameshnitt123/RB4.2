define({ 

  selectedProducts: [],
  segmentData: [],
  rowval:[],

  init : function() 
  {
    try
    {
      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);        
    }
    catch(ex)
    {

    }
  },

  preShow : function() 
  {
    try
    {
      var deviceType = applicationManager.getDeviceUtilManager();  
      this.view.flxHeader.setVisibility(!deviceType.isIpad());
      this.initActions();
      this.checkProductsSelectedOnDetailsPage();
      this.setProductData();

      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();  
      applicationManager.getPresentationFormUtility().logFormName(currentForm);        
    }
    catch(ex)
    {

    }    
  }, 

  initActions : function() 
  {
    try
    {
      var self = this;
      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.btnRight.onClick = this.handleCancelAction;
      this.view.tbxSearch.onTextChange = self.onSearch;
      this.view.flxCancel.onClick = this.cancelSearch;


      this.view.btnContinue.onClick = function() {
        self.navToReview();
      };

      this.view.segSelectProducts.onRowClick = this.onRowClickOfSegSelectProducts;   
    }
    catch(ex)
    {

    }    
  }, 

  backNavigation : function() 
  {
    try
    {
      var navMan = applicationManager.getNavigationManager();
      navMan.goBack();        
    }
    catch(ex)
    {

    }    
  },

  handleCancelAction : function() 
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

  setProductData : function() 
  {
    try
    {
      var self = this;
      var products;
      var navManager = applicationManager.getNavigationManager();
      var navData = navManager.getCustomInfo("frmNAOSelectProduct");

      if (navData && navData.allproducts) {
        products = navData.allproducts;
        navManager.setCustomInfo("frmNAOProductDetails",products);
      }

      if (!products) {
        return; 
      }

      var productslist = [];
      products.forEach(function(product, index) {
        var item = {
          imgAcc: {
            src: "product.png"
          },
          lblAccountStatus: {
            text: product.productName
          },
          lblAccountDescription: {
            text: product.productDescription
          },
          features: {
            text: product.features
          },
          productId: {
            text: product.productId
          },
          productType: {
            text: product.productType
          },
          rates: {
            text: product.rates
          },
          info: {
            text: product.info
          },
          productTypeId:{
            text: product.productTypeId
          },
          ImgCheckAcc: {
            src: self.rowval.indexOf(index) != -1 ? "checkbox.png" : "checkboxempty.png"
          }, 
          lblAccountMoreDetails: {
            text: "Know more...",
          },
          flxProductKnowMore : {
            onClick : function(){
              navManager.setCustomInfo("productTappedToCheckDetails",index);
              var onaModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
              onaModule.presentationController.commonFunctionForNavigation("frmNAOProductDetails");            
            }
          }
        };

        productslist.push(item);
      });

      this.view.segSelectProducts.setData(productslist);
      this.view.segSelectProducts.selectedRowIndices = [[0.0, this.rowval]];
      this.segmentData = productslist; 
      
      this.setContinueButton();

      this.cancelSearch();
      this.view.forceLayout();        
    }
    catch(ex)
    {

    }    
  },

  navToReview : function() 
  {
    try
    {
      var  NAOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
      NAOMod.presentationController.reviewProducts(this.selectedProducts, this.segmentData);        
    }
    catch(ex)
    {

    }    
  },

  clearData : function() 
  {
    try
    {
      this.rowval = [];
      this.selectedProducts = [];        
    }
    catch(ex)
    {

    }    
  },

  cancelSearch : function() 
  {
    try
    {
      this.view.tbxSearch.text = "";
      this.view.segSelectProducts.isVisible = true;
      this.view.flxNoRecords.isVisible = false;
      this.view.segSelectProducts.setData(this.segmentData);
      this.view.segSelectProducts.selectedRowIndices = [[0.0, this.rowval]];        
    }
    catch(ex)
    {

    }    
  },

  onSearch : function() 
  {
    try
    {
      var searchtext = this.view.tbxSearch.text.toLowerCase();

      var data = this.segmentData;
      var searchSegmentData = this.commonSegmentSearch("lblAccountStatus",searchtext,data);

      if (searchSegmentData && searchSegmentData.length > 0) {
        this.view.segSelectProducts.isVisible = true;
        this.view.flxNoRecords.isVisible = false;
        this.view.segSelectProducts.setData(searchSegmentData);
      } else {
        this.view.flxNoRecords.isVisible = true;
        this.view.segSelectProducts.isVisible = false;
      }        
    }
    catch(ex)
    {

    }    
  },

  enableContinueButton : function() 
  {
    try
    {
      var self = this;
      self.view.btnContinue.setEnabled(true); 
      self.view.btnContinue.skin = "sknBtnBg0A78D1BorderE9FontFFSSPR36pxTab";        
    }
    catch(ex)
    {

    }    
  },

  disableContinueButton : function() 
  {
    try
    {
      var self = this;
      self.view.btnContinue.setEnabled(false); 
      self.view.btnContinue.skin = "sknBtnBgF9BorderE9FontA0SSPR36pxTab";          
    }
    catch(ex)
    {

    }      
  },
  
  setContinueButton : function()
  {
    try
    {     
      var self = this;
      
      if (self.selectedProducts.length > 0) {
        self.enableContinueButton();
      } else {
        self.disableContinueButton();
      } 
 
    }
    catch(ex)
    {

    }
  },
  
  onRowClickOfSegSelectProducts : function() 
  {
    try
    {
      var self = this;
      
      var rowindex = self.view.segSelectProducts.selectedRowIndex[1];
      var val = self.view.segSelectProducts.data[rowindex];
      
      var productid = val["productId"].text;
      
      var navManager = applicationManager.getNavigationManager();
      var navData = navManager.getCustomInfo("frmNAOSelectProduct");
      
      var products = navData.allproducts;
      
      var id = products.findIndex(function(product){
        return product.productId === productid ;
      });
      
      if (self.rowval.indexOf(id) == -1) {
        self.selectedProducts.push(productid);
        self.rowval.push(id);
      } else {
        self.selectedProducts.splice(self.selectedProducts.indexOf(productid), 1);
        self.rowval.splice(self.rowval.indexOf(id), 1);
      }

      navManager.setCustomInfo("markedProducts",self.selectedProducts);
      
      self.setContinueButton();
    }
    catch(ex)
    {

    }
  },
  
  checkProductsSelectedOnDetailsPage : function()
  {
    try
    {
      var self = this;

      var navManager = applicationManager.getNavigationManager();
      var productsSelectedOnDetailsPage = navManager.getCustomInfo("productsSelectedOnDetailsPage");
      navManager.setCustomInfo("productsSelectedOnDetailsPage",null);

      //productsSelectedOnDetailsPage is not null only when we come back from product details page
      if(productsSelectedOnDetailsPage)
      {
        //if all the products are unchecked at details page, same is visible on this page
        if(productsSelectedOnDetailsPage.length === 0)
        {
          this.clearData();
        }
        //else selcet the products selected at details page here as well
        else
        {
          this.clearData();

          var navData = navManager.getCustomInfo("frmNAOSelectProduct");
          var products = navData.allproducts;

          for(var i = 0; i < productsSelectedOnDetailsPage.length; i++)
          {
            var id = products.findIndex(function(product){
              return product.productId === productsSelectedOnDetailsPage[i] ;
            });

            self.selectedProducts.push(productsSelectedOnDetailsPage[i]);
            self.rowval.push(id);
          }//end of for
        }//end of else
      }//end of outermost if
    }
    catch(ex)
    {

    }
  },
   
  commonSegmentSearch : function(field,searchText,data)
  {
    try
    {
      var searchdata = data.filter(function(item) {
        return item[field] && item[field].text.toLowerCase().indexOf(searchText) !== -1;
      });

      return searchdata;    
    }
    catch(ex)
    {

    }
  },
});