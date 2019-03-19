define({
  selectedProducts : [],
  segmentData : [],
  rowval:[],
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function() {
	this.view.flxNoProducts.setVisibility(false);
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.view.customHeader.btnRight.onClick = this.onClose;
    this.setProductData();
    var scopeObj = this;

          var NewAccount = applicationManager.getLoggerManager();      
              NewAccount.setCustomMetrics(this, false, "New Account Opening");
                
    this.view.btnContinueSelectProducts.onClick = function(){
    scopeObj.navToReview();
    };
  this.view.customSearchbox.tbxSearch.onTextChange = this.onSearch;
    this.view.segSelectProducts.onRowClick = function() {
      var rowindex = scopeObj.view.segSelectProducts.selectedRowIndex[1];
      var val = scopeObj.view.segSelectProducts.data[rowindex];
      var productid = val["productId"].text;
      var navManager = applicationManager.getNavigationManager();
      var navData = navManager.getCustomInfo("frmNAOSelectProduct");
      var products = navData.allproducts;
      var id = products.findIndex(x => x.productId === productid);
      if (scopeObj.rowval.indexOf(id) == -1) {
        scopeObj.selectedProducts.push(productid);
        scopeObj.rowval.push(id);
      } else {
        scopeObj.selectedProducts.splice(scopeObj.selectedProducts.indexOf(productid), 1);
        scopeObj.rowval.splice(scopeObj.rowval.indexOf(id), 1);
      }

      if (scopeObj.selectedProducts.length > 0) {
        scopeObj.view.btnContinueSelectProducts.setEnabled(true);
		scopeObj.view.btnContinueSelectProducts.skin = "sknBtn0095e4RoundedffffffSSP26px";
      } else {
        scopeObj.view.btnContinueSelectProducts.setEnabled(false);
		scopeObj.view.btnContinueSelectProducts.skin = "sknBtna0a0a0SSPReg26px";
      }
    };
    this.view.tbxSearch.onTouchStart=this.onSearchOne;
    this.view.customSearchbox.btnCancel.onClick = this.cancelSearch;
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  clearData : function(){
    this.rowval=[];
    this.selectedProducts =[];
  },
  onClose : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
          accountMod.presentationController.showDashboard();

  },
  setProductData : function(){
    var scope = this,
        productslist = [],
        product;
    
    this.view.flxSelectProducts.isVisible = true;
    var navManager = applicationManager.getNavigationManager();
    var navData = navManager.getCustomInfo("frmNAOSelectProduct");
    if (navData && navData.allproducts) {
      product = navData.allproducts;
    }
    if (product) {
      for (var i = 0; i < product.length; i++) {
        var prolist = {
          "lblProductTitle": product[i]["productName"],
          "lblProductSubTitle": {
            "text": product[i]["productType"]
          },
          "lblProductInfo": {
            "text": product[i]["productDescription"]
          },
          
          "features": {
            "text": product[i]["features"]
          },
          "productId": {
            "text": product[i]["productId"]
          },
          "productType": {
            "text": product[i]["productType"]
          },
          "rates": {
            "text": product[i]["rates"]
          },
          "info": {
            "text": product[i]["info"]
          },
          "productTypeId":{
            "text": product[i]["productTypeId"]
          },
          "btnViewDetails": {
            "text": "VIEW DETAILS"
            , "onClick": function(widget, context) {
              var r = context["rowIndex"];
              var data1 = context.widgetInfo.data[r];
              var navMan=applicationManager.getNavigationManager();
              navMan.setCustomInfo("frmNAOProductDetails",{rates:data1.rates.text,info:data1.info.text,features:data1.features.text,productName:data1.lblProductTitle})
              var  NAOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
   	      NAOMod.presentationController.commonFunctionForNavigation("frmNAOProductDetails");
            }
          }
        };
        if (scope.rowval.indexOf(i) != -1){
         prolist["imgCheckbox"]= {
            "src": "remembermetick.png"
          }
        }
        else{
          prolist["imgCheckbox"]= {
            "src": "remeberme.png"
          }
        }
        productslist.push(prolist);
      }
      
      this.view.segSelectProducts.setData(productslist);
      this.view.segSelectProducts.selectedRowIndices=[[0.0,this.rowval]];
      this.segmentData=productslist;
	   if (scope.selectedProducts.length > 0) {
        scope.view.btnContinueSelectProducts.setEnabled(true);
		scope.view.btnContinueSelectProducts.skin = "sknBtn0095e4RoundedffffffSSP26px";
      } else {
        scope.view.btnContinueSelectProducts.setEnabled(false);
		scope.view.btnContinueSelectProducts.skin = "sknBtna0a0a0SSPReg26px";
      }
      this.cancelSearch();
      this.view.forceLayout();
    }
	else {
	  this.view.segSelectProducts.removeAll();
	  this.view.flxNoProducts.setVisibility(true);
	}
  },
  
  navToReview : function(){
     var  NAOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
     NAOMod.presentationController.reviewProducts(this.selectedProducts,this.segmentData);
  },
  onSearchOne : function(){
     this.view.customSearchbox.tbxSearch.text="";
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = false;
      this.view.flxSearch.isVisible = false;
      this.view.flxHeaderSearchbox.isVisible = true;
      this.view.flxSelectProducts.top = "40dp";
    }
    else{
      this.view.flxSearch.isVisible = false;
      this.view.flxHeaderSearchbox.isVisible = true;
    }
    this.view.customSearchbox.tbxSearch.setFocus(true);
    this.view.flxHeaderSearchbox.forceLayout();
  },
  cancelSearch : function(){
    this.view.customSearchbox.tbxSearch.text="";
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.flxSearch.isVisible = true;
      this.view.flxHeaderSearchbox.isVisible = false;
      this.view.flxSelectProducts.top = "56dp";
    }
    else{
      this.view.flxSearch.isVisible = true;
      this.view.flxHeaderSearchbox.isVisible = false;
    }
    this.view.segSelectProducts.isVisible=true;
       this.view.flxNoRecords.isVisible=false;
       this.view.segSelectProducts.setData(this.segmentData);
    this.view.segSelectProducts.selectedRowIndices=[[0.0,this.rowval]];
  },

 
   onSearch : function(){
     var searchtext=this.view.customSearchbox.tbxSearch.text.toLowerCase();
     this.view.segSelectProducts.removeAll();
     var data = applicationManager.getDataProcessorUtility().commonSegmentSearch("lblProductTitle",searchtext,this.segmentData);
     if(data && data.length>0){
       this.view.segSelectProducts.isVisible=true;
       this.view.flxNoRecords.isVisible=false;
       this.view.segSelectProducts.setData(data);
     }
     else
     {
       this.view.flxNoRecords.isVisible=true;
       this.view.segSelectProducts.isVisible=false;
     }
   },
  
  
  

});