define({ 

  timerCounter: 0,
  dialPadNo: "",
  lengthOfDialNo: 0,
  productList: [],
  productListImages: [],
  productListIndex: 0,
  productListLastIndex: 0,
  productListTotalProducts: 0,
  productListProducts: [],
  productListStartScale: 0.83,
  productListScaleGrowth: 0.2,
  popUpMsg: '',
  selectedProducts: [],
  markedProductsList : [],
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
      var self = this;
      var deviceType = applicationManager.getDeviceUtilManager();  
   
      this.view.lblNoProducts.text = kony.i18n.getLocalizedString("kony.mb.cardManage.FetchingCards");
      this.view.flxNoProducts.isVisible = true; 
      this.view.customHeaderTablet.flxBack.onClick = this.goBack;
      this.view.flxHeader.setVisibility(!deviceType.isIpad());
      
      var navManager = applicationManager.getNavigationManager();
      var productDetailsData = navManager.getCustomInfo("frmNAOProductDetails");
      var selectedIndex = navManager.getCustomInfo("productTappedToCheckDetails");
      
      var processedProductDetailsData = this.processData(productDetailsData,selectedIndex);
      self.productsFetchSuccess(processedProductDetailsData);

      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
      applicationManager.getPresentationUtility().dismissLoadingScreen();        
    }
    catch(ex)
    {

    }       
  },

  productsFetchSuccess : function(response) 
  {

    var self = this;
    try 
    {	
      if(!kony.sdk.isNullOrUndefined(response) && response.length > 0) {

        self.productList = response;
        self.productListTotalProducts = response.length;
        self.carouselAnimationPreShow();
        self.getAndSetProducts();

      }
      else {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        self.productListTotalProducts = 0;
        self.view.lblNoProducts.text = kony.i18n.getLocalizedString("kony.mb.cardManage.NoCards");
        self.view.flxNoProducts.isVisible = true;
      }
    }
    catch(exc) 
    {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }

  },



  carouselAnimationPreShow : function() 
  {
    var self = this;
    try 
    {	
      var no_of_products = self.productListTotalProducts;
      var no_of_widgets = self.view.flxProductList.widgets().length;
      if (no_of_products !== no_of_widgets) {
        self.productListIndex = 0;
        self.removeExtraClonedProducts();
        self.productListCloneProducts();
        self.productListGetProducts();
      }

      self.view.flxProductList.showFadingEdges = false;
      self.productListScrollStart();
      self.productListScroll();
      self.productListScrollStop();
      self.setDataForProducts();
      self.view.forceLayout();
      self.setCarouselAnimationActions();
    }
    catch(exc) 
    {

    }
  }, 

  removeExtraClonedProducts : function() 
  {
    var self = this;
    try 
    {	
      var totalCards = self.view.flxProductList.widgets().length;
      for (var i = totalCards - 1 ; i > 0; i--) {
        self.view.flxProductList.removeAt(i);
      }
    }
    catch(exc) 
    {

    }

  },  

  productListCloneProducts : function() 
  {
    var self = this;
    try 
    {	
      for (var i = 1; i < self.productListTotalProducts; i++) {
        var newProduct = self.view.flxProductWrapper.clone("newProductWrapper" + i);
        self.view.flxProductList.add(newProduct);
      }
    }
    catch(exc) 
    {

    }

  },


  setDataForProducts : function() 
  {
    var self = this;
    try 
    {	
      self.productListImages = [];
      for(var i = 0; i < self.productListTotalProducts ; i++){
        self.productListImages.push("product.png");
      }
    }
    catch(exc) 
    {

    }

  },


  setCarouselAnimationActions : function() 
  {
    var self = this;
    try 
    {	
      self.view.flxProductList.onScrollStart = function() {
        self.productListScrollStart();
      };
      self.view.flxProductList.onScrolling = function() {
        self.productListScroll();
      };
      self.view.flxProductList.onScrollEnd = function() {
        self.productListScrollStop();
      };
      self.view.postShow = function() {
        self.postShow();
      };
    }
    catch(exc) 
    {

    }

  }, 

  productListScrollStart : function() 
  {
    try
    {
      var self = this;
      self.productListLastIndex = self.productListIndex;       
    }
    catch(ex)
    {

    }
  },



  productListScroll : function() 
  {
    var self = this;
    try 
    {  
      var scrollPosX = 0;
      if(!kony.sdk.isNullOrUndefined(self.view.flxProductList.contentOffsetMeasured)){
		scrollPosX = parseInt(self.view.flxProductList.contentOffsetMeasured.x);
      }
      var productListFactor = [];
      var productListScaleFactor = [];
      var productListScrollTransform = [];
      var productListWidth2 = parseInt(self.view.flxProductWrapper.frame.width);

      for (var i = 0; i < self.productListProducts.length; i++) {
        
        productListFactor[i] = self.roundNum(Math.min(2, (Math.max(0, (scrollPosX - (productListWidth2 * (i - 1)))) / (productListWidth2))), 3);
        
        if (productListFactor[i] < 1) {
          productListScaleFactor[i] = productListFactor[i];
        } else {
          productListScaleFactor[i] = self.roundNum((2 - productListFactor[i]), 3);
        }

        productListScrollTransform[i] = kony.ui.makeAffineTransform();
        self.productListProducts[i].transform = productListScrollTransform[i];
      }

    }
    catch(exc) 
    {
    }
  }, 

  productListScrollStop : function() 
  { 
    var self = this;
    try 
    { 
      var scrollPosX = parseInt(self.view.flxProductList.contentOffsetMeasured.x);
      var productFrameWidth = parseInt(self.view.flxProductList.frame.width);
      self.productListIndex = parseInt( (scrollPosX) / productFrameWidth + 0.5);
      self.productListScrollIndex();     
    }
    catch(exc) 
    {
    }
  },  

  productListScrollIndex : function() 
  {
    var self = this;
    try 
    { 
      self.currentProductNumber = self.productList[self.productListIndex].productNumber;
      self.setCurrentProductDetails();
    }
    catch(exc) 
    {
    }
  },

  roundNum : function(num, decimals) 
  {
    try
    {
      var t = Math.pow(10, decimals);
      var signOfNum;
      if(num<0){
        signOfNum = -1;
      }
      else if(num>0){
        signOfNum = 1;
      }
      else{
        signOfNum = 0;
      }
      return (Math.round((num * t) + (decimals > 0 ? 1 : 0) * (signOfNum * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);        
    }
    catch(ex)
    {
    }    
  }, 

  setCurrentProductDetails : function()
  {
    var self = this;
    try 
    { 
      var formatUtil = applicationManager.getFormatUtilManager();
      self.view.title = (self.productList[self.productListIndex].productName);
      self.view.rtxAboutProduct.text = (self.productList[self.productListIndex].productDescription);
      self.view.rtxCharges.text = (self.productList[self.productListIndex].rates);
      self.view.rtxAddFeatures.text = (self.productList[self.productListIndex].info);
      
      for (var i = 0; i < self.productListProducts.length; i++) {
        var product = self.productListProducts[i].widgets()[0];
        var knowMore = product.widgets()[3];
        product.skin = "sknFlxBgFFFFFFBorder2pxe7e7e7Tab";
        knowMore.isVisible = true;
      }
      
      var currentProduct = self.productListProducts[self.productListIndex].widgets()[0];
      var knowMore = currentProduct.widgets()[3];
      
      currentProduct.skin = "sknFlxBgFFFFFFBorder2px1a98ffTab";
      knowMore.isVisible = false;
    }
    catch(exc) 
    {
    	
    }
  },

  postShow : function() 
  {
    try
    {
      this.productListGetProducts();
      this.productListScrollIndex();
      this.view.forceLayout();        
    }
    catch(ex)
    {
    }    
  },

  getAndSetProducts : function() 
  {
    var self = this;
    try 
    {	
      self.productListGetProducts();
      self.productListScrollIndex();

      this.view.flxNoProducts.isVisible = false;
      self.view.forceLayout();
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
    catch(exc) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
  },


  productListGetProducts : function() 
  {
    var self = this;
    try 
    {	
      self.productListProducts = self.view.flxProductList.widgets();
      self.productListSetProducts();
    }
    catch(exc) 
    {
    }
  },  


  productListSetProducts : function() 
  {
    var self = this;
    try 
    {	
      self.lastSetIndex = self.clone(self.productListIndex);

      for ( i = 0; i < self.productListProducts.length; i++) {
       var productListChildWidgets = self.productListProducts[i].widgets()[0].widgets();

        //setting tickbox images
        var flxSelectProduct = productListChildWidgets[4];
        var flxSelectProductWidgets = flxSelectProduct.widgets();
        var imgSelectProduct = flxSelectProductWidgets[0]; 

        flxSelectProduct.info = { "productId" : self.productList[i].productId };
        imgSelectProduct.src = self.productList[i].imgSelectProduct;
        imgSelectProduct.info = self.productList[i].isSelected;

        flxSelectProduct.onClick = self.toggleProductSelection.bind(self,i);

        productListChildWidgets[0].src = self.productListImages[i];
        productListChildWidgets[1].text = self.productList[i].productName;
        productListChildWidgets[2].text = self.productList[i].productDescription;

      }

    }
    catch(exc) 
    {
    }

  },  

  clone : function(obj) 
  {
    try
    {
      if (null === obj || "object" != typeof obj) return obj;
      var copy = obj.constructor();
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
      }

      return copy;        
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
      navManager.setCustomInfo("productsSelectedOnDetailsPage", this.markedProductsList);
      navManager.goBack();        
    }
    catch(ex)
    {
    }   
  },

  processData : function(productArray, index)
  {
    try
    {
      var navigationManager = applicationManager.getNavigationManager();
      var markedProducts = navigationManager.getCustomInfo("markedProducts");
      
      if(markedProducts && markedProducts.length > 0){
        this.markedProductsList = markedProducts;
      }
      
      productArray.forEach(function(product){
        //atleast one product is selected
        if(markedProducts && markedProducts.length > 0)
        {
          if(markedProducts.indexOf(product.productId) > -1 ){
            product.imgSelectProduct = "checkbox.png";
            product.isSelected = { "isSelected" : true };
          }
          else
          {
            product.imgSelectProduct = "checkboxempty.png";
            product.isSelected = { "isSelected" : false };
          }            
        }
        //no products selected
        else
        {
          product.imgSelectProduct = "checkboxempty.png";
          product.isSelected = { "isSelected" : false };
        }
      });              

      //splice returns array containing removed items, only one in this case
      var extractedProduct = productArray.splice(index, 1);

      //unshift adds the passed argument at the begining of array, only one argument in this case
      productArray.unshift(extractedProduct[0]);

      return productArray;
    }
    catch(ex)
    {
    }
  },

  toggleProductSelection : function(index)
  {
    try
    {
      var self = this;
      var productListChildWidgets = this.productListProducts[index].widgets()[0].widgets();

      var flxSelectProduct = productListChildWidgets[4];
      var flxSelectProductWidgets = flxSelectProduct.widgets();
      var imgSelectProduct = flxSelectProductWidgets[0];        


      if(imgSelectProduct.info.isSelected === true)
      {
        imgSelectProduct.src = "checkboxempty.png";
        imgSelectProduct.info = {"isSelected" : false};
        this.markedProductsList.splice(this.markedProductsList.indexOf(flxSelectProduct.info.productId), 1);
      }
      else
      {
        imgSelectProduct.src = "checkbox.png";
        imgSelectProduct.info = {"isSelected" : true};
        this.markedProductsList.push(flxSelectProduct.info.productId);
      }
    }
    catch(ex)
    {
    }
  },

});
