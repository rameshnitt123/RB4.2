define({
  isSearchSelected: false,
  rowval: [],
  selectedProducts: [],
  r: [],
  segmentData: [],
  eachrowSegmentData:null,
    init : function(){
   var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  }, 
  preShow: function() {
	 this.view.flxNoProducts.setVisibility(false);
     if (this.view.flxHeaderSearchbox.isVisible === true) {
             this.view.flxHeaderSearchbox.isVisible = false;
             this.view.flxSearch.isVisible = true;
          	 this.view.flxHeaderSelectProductsMain.isVisible = true;
             //this.view.flxMainContainer.top = "56dp";
        } 
      if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeaderSelectProductsMain.isVisible = true;
    }
    else{
      this.view.flxHeaderSelectProductsMain.isVisible = false;
    }
    var scopeObj = this;
    if(scope_NewUserPresentationController.count!==1)
      
      {
    this.clearData();
      }
    this.showSelectProducts();
    this.view.btnDontAllow.onClick = function() {
      scopeObj.showSelectProducts();
    };
    this.view.tbxSearch.onTouchStart=this.searchProducts;
    this.view.customSearchbox.btnCancel.onClick=this.searchProducts;
    this.view.btnAllow.onClick = function() {
      var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      NUOMod.presentationController.commonFunctionForNavigation("frmOBPersonalInfo");
    };
    this.view.btnDontAllow.onClick = function() {
      scopeObj.view.flxPopupDeviceLocation.isVisible = false;
    };
    this.view.customHeaderProductDetails.flxBack.onClick = function() {
      scopeObj.showSelectProducts();
    };
    this.view.customHeaderSelectProducts.btnRight.onClick = this.onCloseClick;
    this.view.customHeaderSelectProducts.btnLeft.onClick = function() {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var  authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      authMod.presentationController.getCurrentState();
    };
      var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onCloseClick:function()
  {
      scope_NewUserPresentationController.count=0;
      var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      NUOMod.presentationController.onClose();
},
  clearData: function() {
    scope_NewUserPresentationController.count=0;
    this.rowval = [];
    this.selectedProducts = [];
    this.r = [];


  },
  showSelectProducts: function() {
    var scope = this,
        productslist = [],
        product;
    this.view.flxSelectProducts.isVisible = true;
    var navManager = applicationManager.getNavigationManager();
    var navData = navManager.getCustomInfo("frmOBSelectProducts");
    if (navData && navData.products) {
      product = navData.products.allProducts;

    }


    if (product) {
      for (var i = 0; i < product.length; i++) {
        var prolist = {
          "lblProductTitle":  product[i]["productName"],
          "lblProductSubTitle": product[i]["productType"],

          "lblProductInfo": product[i]["productDescription"],
           "imgCheckbox": {
            "src": "remeberme.png"
          },
          "features":  product[i]["features"],
          
          "productId": product[i]["productId"],
          "productType": product[i]["productType"],
           
          "rates": product[i]["rates"],
            
          "info": product[i]["info"],
            
          "productTypeId":product[i]["productTypeId"],
           
          "btnViewDetails": {
            "text": "VIEW DETAILS"
            , "onClick": function(widget, context) {
              var r = context["rowIndex"];
              var data1 = context.widgetInfo.data[r];
              var controller = applicationManager.getPresentationUtility().getController('frmOBRegularSavings', true);
              controller.setDataToOBRegularSavings(data1.features,data1.rates,data1.info,data1.lblProductTitle);

            }
          }

        };
        productslist.push(prolist);
      }


      this.view.segSelectProducts.setData(productslist);
      this.segmentData=productslist;
      this.view.segSelectProducts.selectedRowIndices = [
        [0.0, this.rowval]
      ];
      if (!this.isSearchSelected) {
        if (navData && navData.products.userProducts) {
          var productAll = navData.products.userProducts;
          for (var i = 0; i < productAll.length; i++) {

            var k = product.findIndex(x => x.productId === productAll[i]["productId"]);
            this.selectedProducts.push(productAll[i]["productId"]);
            this.rowval.push(k);

          }


        }
      }
      this.view.segSelectProducts.selectedRowIndices = [[0.0, this.rowval]];

      if (this.selectedProducts.length > 0) {
        this.view.btnContinueSelectProducts.setEnabled(true);
		this.view.btnContinueSelectProducts.skin = "sknBtn0095e4RoundedffffffSSP26px";
      } else {
        this.view.btnContinueSelectProducts.setEnabled(false);
		 this.view.btnContinueSelectProducts.skin = "sknBtna0a0a0SSPReg26px";
      }
    }
	else {
	 	this.view.segSelectProducts.removeAll();
	  	this.view.flxNoProducts.setVisibility(true);
	}
    var scope = this;
    this.view.segSelectProducts.onRowClick = function() {
      var rowindex = scope.view.segSelectProducts.selectedRowIndex[1];
      var val = scope.view.segSelectProducts.data[rowindex];
      var productid = val["productId"];
      var navManager = applicationManager.getNavigationManager();
      var navData = navManager.getCustomInfo("frmOBSelectProducts");
      var products = navData.products.allProducts;

      var id = products.findIndex(x => x.productId === productid);
      if (scope.rowval.indexOf(id) == -1) {
        scope.selectedProducts.push(productid);
        scope.rowval.push(id);

      } else {
        scope.selectedProducts.splice(scope.selectedProducts.indexOf(productid), 1);
        scope.rowval.splice(scope.rowval.indexOf(id), 1);
      }

      if (scope.selectedProducts.length > 0) {
        scope.view.btnContinueSelectProducts.setEnabled(true);
		scope.view.btnContinueSelectProducts.skin = "sknBtn0095e4RoundedffffffSSP26px";
      } else {
        scope.view.btnContinueSelectProducts.setEnabled(false);
		 scope.view.btnContinueSelectProducts.skin = "sknBtna0a0a0SSPReg26px";
      }
    };


    //  for(var i = 0; i<data.length; i++){
    //       data[i].btnViewDetails.onClick = function(){
    //         scope.showProductDetails();
    //       }
    //       data[i].imgCheckbox.onTouchEnd = function(){
    //         if(data[this.view.segSelectProducts.id].imgCheckbox.src==="remeberme.png"){
    //           data[this.view.segSelectProducts.id].imgCheckbox.src = "remembermetick.png";
    //         }else{
    //           data[this.view.segSelectProducts.id].imgCheckbox.src = "remeberme.png";
    //         }
    //         scope.view.segSelectProducts.setData(data);
    //       }
    //     }
    //     this.view.segSelectProducts.setData(data);
    //     this.view.customHeaderSelectProducts.btnLeft.onClick = function () {
    //       scope.showLanding(true, 'Welcome John Bruce', '', 'CONTINUE', function () {
    //         scope.showSelectProducts();
    //       }, 'START NEW APPLICATION', function () {

    //       });
    //     }
    this.view.btnContinueSelectProducts.onClick = function() {
      //scope.showLocationPopUp();
//       applicationManager.getPresentationUtility().showLoadingScreen();
      scope_NewUserPresentationController.count=0;
      applicationManager.getPresentationUtility().showLoadingScreen();
      var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      NUOMod.presentationController.createUserSelectProducts(scope.selectedProducts,scope.segmentData);
             
    };

  },
  showLocationPopUp: function() {
    this.view.flxPopupDeviceLocation.setVisibility(true);
  },
  showProductDetails: function() {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBRegularSavings");
  },
  searchProducts:function()
  {
  //  var searchText = this.view.customSearch.tbxSearch.text.toLowerCase();
     if (this.view.flxHeaderSearchbox.isVisible == true) {
      this.view.flxHeaderSearchbox.isVisible = false;
      this.view.flxSearch.isVisible = true;
       this.view.flxSelectProductsWrapper.top = "56dp";
      if (kony.os.deviceInfo().name === "iPhone") {
        this.view.flxHeaderSelectProductsMain.isVisible = false;
      //  this.view.flxMainContainer.top = "0dp";
      }
      else{
        this.view.flxHeaderSelectProductsMain.isVisible = true;
        // this.view.flxMainContainer.top = "56dp";
      } 
      if(this.segmentData.length>0)
      { 
        this.view.segSelectProducts.setData(this.segmentData);
        this.view.segSelectProducts.selectedRowIndices=[[0.0,this.rowval]];
        this.view.flxNoRecords.isVisible=false;
        this.view.segSelectProducts.isVisible=true;
      }
      else
      {
        this.view.flxNoRecords.isVisible=true;
        this.view.segSelectProducts.isVisible=false;
      }
    } 
    else {
      this.view.flxSearch.isVisible = false;
      this.view.flxHeaderSelectProductsMain.isVisible = false;
     // this.view.flxMainContainer.top = "40dp";
      this.view.customSearchbox.tbxSearch.text="";
      this.view.flxHeaderSearchbox.isVisible = true;
      this.view.flxSelectProductsWrapper.top = "40dp";
      this.view.tbxSearch.setFocus(false);
      this.view.customSearchbox.tbxSearch.setFocus(true);
      this.view.customSearchbox.tbxSearch.onTextChange=this.searchdata;
    }
  },
   searchdata:function()
  {
    var searchText = this.view.customSearchbox.tbxSearch.text.toLowerCase();
    this.view.segSelectProducts.removeAll();
    if(searchText)
    {
    var selpro= applicationManager.getDataProcessorUtility().commonSegmentSearch("lblProductTitle",searchText,this.segmentData);
      if(selpro.length>0)
        {
          this.view.segSelectProducts.isVisible=true;
           this.view.flxNoRecords.isVisible=false;
      this.view.segSelectProducts.setData(selpro);
   //   this.view.segSelectProducts.selectedRowIndices=[[0.0,selpro.searchSelectedProductsList]];
        }
      else
        {
          this.view.flxNoRecords.isVisible=true;
        this.view.segSelectProducts.isVisible=false;
        }
    }
    else
    {
      if(this.segmentData.length>0)
        {
          this.view.segSelectProducts.isVisible=true;
          this.view.flxNoRecords.isVisible=false;
      this.view.segSelectProducts.setData(this.segmentData); 
      this.view.segSelectProducts.selectedRowIndices=[[0.0,this.rowval]];
        }
      else
        {
            this.view.flxNoRecords.isVisible=true;
        this.view.segSelectProducts.isVisible=false;
        }
    }
  },
  setHeaderData: function(backAction, cancelAction, cancelTitle, title) {
    this.view.customHeader.lblLocateUs.text = title;
    if (cancelAction !== null) {
      this.view.customHeader.btnRight.onClick = cancelAction;
      this.view.customHeader.btnRight.isVisible = true;
      this.view.customHeader.btnRight.text = cancelTitle;
    } else {
      this.view.customHeader.btnRight.isVisible = false;
    }
    if (backAction !== null) {
      this.view.customHeader.flxBack.onClick = backAction;
      this.view.customHeader.flxBack.isVisible = true;
    } else {
      this.view.customHeader.flxBack.isVisible = false;
    }
  },
});