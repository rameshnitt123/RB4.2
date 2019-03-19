define({

  isSearchSelected: false,
  rowval: [],
  selectedProducts: [],
  r: [],
  segmentData: [],
  eachrowSegmentData: null,

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  frmPreShow: function() {
    this.initActions();
    this.initHeaderActions();
    this.checkProductsSelectedOnDetailsPage();
    this.showSelectProducts();
    this.setContinueButton();
    this.updateRightPane();
	this.setContinueButton();

    var self = this;
    if(scope_NewUserPresentationController.count !== 1) {
      this.clearData();
    }

    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
    this.view.tbxSearch.onTouchEnd = this.searchProducts;
    this.view.flxSearchWrapper.flxCancel.onClick = this.cancelSearch;
    this.view.btnContinue.onClick = this.continueBtn;
    this.view.segSelectProducts.onRowClick = this.onRowClick;
  },

  continueBtn: function() {
    scope_NewUserPresentationController.count = 0;
    applicationManager.getPresentationUtility().showLoadingScreen();
    var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.createUserSelectProducts(this.selectedProducts, this.segmentData);
  },

  clearData: function() {
    scope_NewUserPresentationController.count = 0;
    this.rowval = [];
    this.selectedProducts = [];
    this.r = [];
  },

  initHeaderActions: function() {
    if (!this.isIpad()) {
      this.view.customHeaderTablet.flxHeader.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.flxHeader.btnRight.onClick = this.handleCancelAction;
    }
  },

  backNavigation: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  },

  handleCancelAction: function() {
    var AuthModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    AuthModule.presentationController.commonFunctionForNavigation("frmLogin");
  },

  searchProducts: function() {
    if (this.segmentData.length > 0) {
      this.view.segSelectProducts.setData(this.segmentData);
      this.view.segSelectProducts.selectedRowIndices = [[0.0,this.rowval]];
      this.view.flxNoRecords.isVisible = false;
      this.view.segSelectProducts.isVisible = true;
    } else {
      this.view.flxNoRecords.isVisible = true;
      this.view.segSelectProducts.isVisible = false;
    }
    this.view.flxSearchWrapper.tbxSearch.text = "";
    this.view.tbxSearch.setFocus(false);
    this.view.flxSearchWrapper.tbxSearch.setFocus(true);
    this.view.flxSearchWrapper.tbxSearch.onTextChange = this.searchdata;
  },

  searchdata: function() {
    var searchText = this.view.flxSearchWrapper.tbxSearch.text.toLowerCase();
    this.view.segSelectProducts.removeAll();
    if (searchText) {
      var selpro = applicationManager.getDataProcessorUtility().commonSegmentSearch("lblAccountStatus", searchText, this.segmentData);
      if(selpro.length > 0) {
        this.view.segSelectProducts.isVisible = true;
        this.view.flxNoRecords.isVisible = false;
        this.view.segSelectProducts.setData(selpro);
        this.closeVisible();
      } else {
        this.view.flxNoRecords.isVisible = true;
        this.view.segSelectProducts.isVisible = false;
      }
    } else {
      if (this.segmentData.length > 0) {
        this.view.segSelectProducts.isVisible = true;
        this.view.flxNoRecords.isVisible = false;
        this.view.segSelectProducts.setData(this.segmentData); 
        this.view.segSelectProducts.selectedRowIndices = [[0.0, this.rowval]];
      } else {
        this.view.flxNoRecords.isVisible = true;
        this.view.segSelectProducts.isVisible = false;
      }
    }
  },

  showSelectProducts: function() {
    var self = this;
    var productslist = [];
    var navManager = applicationManager.getNavigationManager();
    var navData = navManager.getCustomInfo("frmOBSelectProducts");
    if (navData && navData.products) {
      productslist = navData.products.allProducts.map(function(item, index) {
        return {
          lblAccountStatus: item.productName,
          lblAccountDescription: item.productDescription,
          features: item.features,
          productId: item.productId,
          productType: item.productType,
          rates: item.rates,
          info: item.info,
          productTypeId: item.productTypeId,
          ImgCheckAcc: {
            src: self.rowval.indexOf(index) != -1 ? "checkbox.png" : "checkboxempty.png"
          },
          imgAcc: {
            src: "product.png"
          },
          flxProductKnowMore: {
            onClick: function(widget, context) {
              navManager.setCustomInfo("productTappedToCheckDetails",index);
              self.showProductDetails();
            }
          },
          lblAccountMoreDetails: {
            text: "Know more...",
          },
        };		
      });

      this.view.segSelectProducts.setData(productslist);
      this.segmentData = productslist;
      this.view.segSelectProducts.selectedRowIndices = [[0.0, this.rowval]];
      if (!this.isSearchSelected && navData && navData.products.userProducts) {
        var productAll = navData.products.userProducts;
        productAll.forEach(function(item) {
          var selectedIndex = productslist.findIndex(function(productItem) {
            return productItem.productId === item.productId;
          });
          self.selectedProducts.push(item.productId);
          self.rowval.push(selectedIndex);
        });
      }
      this.view.segSelectProducts.selectedRowIndices = [[0.0, this.rowval]];
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

          var navData = navManager.getCustomInfo("frmOBSelectProducts");
          var products = navData.products.allProducts;

          for(var i = 0; i < productsSelectedOnDetailsPage.length; i++)
          {
            var id = products.findIndex(function(product){
              return product.productId === productsSelectedOnDetailsPage[i] ;
            });

            self.selectedProducts.push(productsSelectedOnDetailsPage[i]);
            self.rowval.push(id);
          }
          navManager.setCustomInfo("markedProducts",this.selectedProducts);
        }
      }
    }
    catch(ex)
    {

    }
  },
  onRowClick: function() {
    var segment = this.view.segSelectProducts;
    var selectedIndex = segment.selectedRowIndex[1];
    var item = segment.data[selectedIndex];
    var productid = item.productId;
    var navManager = applicationManager.getNavigationManager();
    var navData = navManager.getCustomInfo("frmOBSelectProducts");
    var products = navData.products.allProducts;

    var id = products.findIndex(function(productItem) {
      return productItem.productId === productid;
    });

    if (this.rowval.indexOf(id) == -1) {
      this.selectedProducts.push(productid);
      this.rowval.push(id);
    } else {
      this.selectedProducts.splice(this.selectedProducts.indexOf(productid), 1);
      this.rowval.splice(this.rowval.indexOf(id), 1);
    }
    navManager.setCustomInfo("markedProducts",this.selectedProducts);
    this.setContinueButton();
  },


  showProductDetails: function() {
//     var controller = applicationManager.getPresentationUtility().getController('frmOBSelectProductsDetails', true);
//     controller.showProductDetails(item.features, item.rates, item.info, item.lblAccountDescription);
    var newUserModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    newUserModule.presentationController.commonFunctionForNavigation("frmOBSelectProductsDetails"); 
  },

  enableContinueButton: function() {
    var self = this;
    self.view.btnContinue.setEnabled(true); 
    self.view.btnContinue.skin = "sknBtnBg0A78D1BorderE9FontFFSSPR36pxTab";           
  },

  disableContinueButton: function() {
    var self = this;
    self.view.btnContinue.setEnabled(false); 
    self.view.btnContinue.skin = "sknBtnBgF9BorderE9FontA0SSPR36pxTab";    
  },

  setContinueButton: function() {
    if (this.selectedProducts.length > 0) {
      this.enableContinueButton();
    } else {
      this.disableContinueButton();
    } 
  },

  cancelSearch: function() {
    this.view.flxSearchWrapper.tbxSearch.text = "";
    this.view.segSelectProducts.isVisible = true;
    this.view.flxNoRecords.isVisible = false;
    this.view.segSelectProducts.setData(this.segmentData);
    this.view.segSelectProducts.selectedRowIndices = [[0.0, this.rowval]];
    this.view.flxSearchWrapper.flxCancel.isVisible = false;
  },

  closeVisible: function() {
    this.view.flxSearchWrapper.flxCancel.isVisible = true;
  },

  isIpad: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    return deviceUtilManager.isIpad();
  },

  updateRightPane: function() {
    var rightPane = this.view.RightPane;
    rightPane.lblCheckedRowName.text = this.getStyledPhoneNumber();

    var navManager = applicationManager.getNavigationManager();
    var eligibility = navManager.getCustomInfo("frmOBMembershipEligibility");
    if (eligibility && eligibility.length > 25) {
      eligibility = eligibility.substring(0, 24) + "...";
    }
    rightPane.lblThirdCheckedRowName.text = eligibility;
  },

  getStyledPhoneNumber: function() {
    var navManager = applicationManager.getNavigationManager();
    var phoneNumber = navManager.getCustomInfo("frmOBSignInWithPhoneNumber");
    var text = "(   )   -    ";
    var delta = 1;
    for (var i = 0; i < text.length; i++) {
      if (i === 3 || i === 6) {
        delta++;
      }

      if (i < phoneNumber.length) {
        var index = i + delta;
        var replacement = phoneNumber.charAt(i);
        text = text.substr(0, index) + replacement + text.substr(index + 1);
      }
    }
    return text;
  }

});