define({
  advanceSearchOptions : {
    searchType : "Search",
    firstRecordNumber : "0",
    lastRecordNumber  : "24",
  },

  res : {},
  currentTransactions: 0,
  totalTransactions: 0,
  transactions: [],
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },

  preshow: function () {
     if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
    else{
      this.view.flxHeader.isVisible = true;
    }
    try {
      this.initActions();
      this.setTransactionTypeData();
      this.setTimeRangeData();
    }
    catch(err) {
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    }
  },

  postShow: function(){
  },

  initActions: function () {
    try {
      var scope = this;
      this.view.flxTransactionTypeWrapper.onClick = this.showTransactionType;
      this.view.flxTimeRangeWrapper.onClick = this.showTimeRange;

      this.view.flxAddRangeAmount.onClick = function(){
        scope.toggleCheckbox(scope.view.imgCheckboxAmount);
        if(scope.view.imgCheckboxAmount.src ==="remeberme.png"){
          scope.view.lblDollarTwo.isVisible = false;
          scope.view.lblToTitleOne.isVisible = false;
          scope.view.txtAmountTo.isVisible = false;
        }else{
          scope.view.lblDollarTwo.isVisible = true;
          scope.view.lblToTitleOne.isVisible = true;
          scope.view.txtAmountTo.isVisible = true;
        }
        scope.view.forceLayout();
      };
      this.view.segTransactionType.onRowClick = function(){        
        if(!kony.sdk.isNullOrUndefined(scope.view.segTransactionType.selectedRowIndices))
        {
           scope.advanceSearchOptions.searchTransactionType=scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].categoryId;  
        }
        else
        {
          scope.advanceSearchOptions.searchTransactionType = null;          
        }          
      };
      this.view.segTimeRange.onRowClick = function(){
        try {
          var configManager = applicationManager.getConfigurationManager();
          var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
          if(scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName=== configManager.constants.CustomRange){
            scope.view.flxCustomDate.isVisible = true;
            scope.view.forceLayout();
            scope.showTimeRange();
            var date = new Date();
            var endDate = [date.getDate(),date.getMonth()+1,date.getFullYear()];
            scope.validateDateWidget(endDate);
            scope.onCustomDateChange();
          }else if(scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName === configManager.constants.Last7days){              
            scope. res=transModPresentationController.getDateRange(7);
            scope.advanceSearchOptions.searchStartDate=scope.res.searchStartDate;
            scope.advanceSearchOptions.searchEndDate=scope.res.searchEndDate;
          }else if(scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName===configManager.constants.Last30days){
            scope.res=transModPresentationController.getDateRange(30);
            scope.advanceSearchOptions.searchStartDate=scope.res.searchStartDate;
            scope.advanceSearchOptions.searchEndDate=scope.res.searchEndDate;
          }else if(scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName===configManager.constants.Last60days){
            scope.res = transModPresentationController.getDateRange(60);
            scope.advanceSearchOptions.searchStartDate=scope.res.searchStartDate;
            scope.advanceSearchOptions.searchEndDate=scope.res.searchEndDate;
          }if(scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName!==configManager.constants.CustomRange){
            scope.view.flxCustomDate.isVisible = false;
            scope.view.forceLayout();    
          }
        }
        catch(err) {
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, "segTimeRange.onRowClick");
        }
      };
      this.view.btnSearch.onClick = function(){
        try {          
          var isSelected = scope.selectedTransactionType();
          if(isSelected === false || kony.sdk.isNullOrUndefined(scope.advanceSearchOptions.searchTransactionType))
          {
              return;
          }
          applicationManager.getPresentationUtility().showLoadingScreen();
          if(scope.advanceSearchOptions.searchStartDate!==""&&scope.advanceSearchOptions.searchEndDate!==""){
            if(scope.view.imgCheckboxAmount.src ==="remembermetick.png"){
              scope.advanceSearchOptions.searchMinAmount=scope.view.txtAmountFrom.text;
              scope.advanceSearchOptions.searchMaxAmount=scope.view.txtAmountTo.text;
            }else{
              scope.advanceSearchOptions.searchMinAmount=scope.view.txtAmountFrom.text;
              scope.advanceSearchOptions.searchMaxAmount=scope.view.txtAmountFrom.text;            
            }
            if(scope.view.tbxSearch.text!==""){
              scope.advanceSearchOptions.searchDescription=scope.view.tbxSearch.text;
            }
            var navMan=applicationManager.getNavigationManager();
            scope.currentTransactions = 0;
            var startDate; 
            var endDate;
            var navData = navMan.getCustomInfo("frmPFMAdvancedSearchData");      
            var isYear = navData.isYear;      
            if(!kony.sdk.isNullOrUndefined(scope.advanceSearchOptions.searchStartDate))
            {
              startDate = new Date(scope.advanceSearchOptions.searchStartDate);
            }else
            {
              startDate = new Date();
              if(isYear)
              {
                var year = navData.year;
                startDate = new Date("01/01/"+year);
              }                                
            }


            if(!kony.sdk.isNullOrUndefined(scope.advanceSearchOptions.searchEndDate))
            {
              endDate = new Date(scope.advanceSearchOptions.searchEndDate);
            }else{
              endDate = new Date();
              if(startDate.getYear() != endDate.getYear()){
                endDate = new Date("31/12/"+startDate.getYear());
              }
            }              
            var startMonth = startDate.getMonth() + 1;
            var endMonth = endDate.getMonth() + 1;
            if(endMonth != startMonth)
            {
              scope.totalTransactions = (endMonth - startMonth) * scope.advanceSearchOptions.searchTransactionType.length;  
            }else{
              scope.totalTransactions = scope.advanceSearchOptions.searchTransactionType.length;  
            }
            for (var j = startMonth; j <= endMonth; j++) {
              for (var i = 0; i < scope.advanceSearchOptions.searchTransactionType.length; i++) {
                scope.fetchSearchTransactions(j, scope.advanceSearchOptions.searchTransactionType[i]);
              }
            }
          }
        }
        catch(err) {
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, "btnSearch.onClick");
        }
      };
      this.view.calStartDate.onSelection = function(){
        scope.customDateCount++;
        scope.view.calEndDate.validStartDate=[scope.view.calStartDate.dateComponents[0],scope.view.calStartDate.dateComponents[1],scope.view.calStartDate.dateComponents[2]];
        scope.onCustomDateChange();
      };
      this.view.calEndDate.onSelection = function(){
        scope.customDateCount++;
        scope.view.calStartDate.validEndDate=[scope.view.calEndDate.dateComponents[0],scope.view.calEndDate.dateComponents[1],scope.view.calEndDate.dateComponents[2]];
        scope.onCustomDateChange();
      };
    }
    catch(err) {
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    }        
  },
  fetchSearchTransactions: function (monthId, categoryId) {
    try {
      var scope = this; 
      scope.transactions = [];
      var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      var inputParams = {
        "monthId": monthId + "",
        "categoryId": categoryId + ""
      };
      accountMod.presentationController.getPFMTransactions(inputParams, this.fetchSearchTransactionsSuccess.bind(this), this.fetchSearchTransactionsFailure.bind(this));
    } catch (exception) {
      //replace
    }
  },
  fetchSearchTransactionsSuccess: function(response) {
    try {
      var scope = this;
      scope.currentTransactions++;        
      Array.prototype.push.apply(this.transactions, response);
      if (scope.currentTransactions === scope.totalTransactions) {
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmPFMAdvanceSearchResults", scope.transactions);
        navManager.navigateTo("frmPFMAdvanceSearchResults");      
        scope.currentTransactions = 0;
        scope.totalTransactions = 0;

      }else{
      }
    }
    catch(err) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    }
  },
  fetchSearchTransactionsFailure: function(response) {
    try {
      var scope = this;
      scope.currentTransactions++;
    }
    catch(err) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    }
  },
  onCustomDateChange : function(){
    try {
      var scope=this;
      var startDate=new Date(scope.view.calStartDate.dateComponents[2],scope.view.calStartDate.dateComponents[1]-1,scope.view.calStartDate.dateComponents[0]);
      var endDate=new Date(scope.view.calEndDate.dateComponents[2],scope.view.calEndDate.dateComponents[1]-1,scope.view.calEndDate.dateComponents[0]);
      var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule"); 
      scope.res = transModPresentationController.getCustomRange(startDate, endDate);
      if(scope.res){
        scope.advanceSearchOptions.searchStartDate=scope.res.searchStartDate;
        scope.advanceSearchOptions.searchEndDate=scope.res.searchEndDate;
      }
      else{
        scope.advanceSearchOptions.searchStartDate="";
        scope.advanceSearchOptions.searchEndDate="";
      }
    }
    catch(err) {
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    }
  },
  showTransactionType: function () {
    try{
      if(this.view.flxTransactionTypeValue.isVisible == true){
        this.view.flxTransactionTypeValue.isVisible = false;
        this.view.imgArrowTransactionType.src = "arrowdown.png";
      }else{
        this.view.flxTransactionTypeValue.isVisible = true;
        this.view.imgArrowTransactionType.src = "arrowup.png";
      }
    }
    catch(err) {
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    } 
  },
  toggleCheckbox : function(obj){
    if(obj.src === "remeberme.png")
      obj.src = "remembermetick.png";
    else
      obj.src = "remeberme.png";
    this.view.forceLayout();
  },
  showTimeRange: function () {
    try {
      if(this.view.flxTimeRangeValue.isVisible == true){
        this.view.flxTimeRangeValue.isVisible = false;
        this.view.imgTimeRange.src = "arrowdown.png";
      }else{
        this.view.flxTimeRangeValue.isVisible = true;
        this.view.imgTimeRange.src = "arrowup.png";
      }
    }
    catch(err) {
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    }        
  },
  setTransactionTypeData: function () {
    try {
      var navManager = applicationManager.getNavigationManager();
      var categories =navManager.getCustomInfo("frmPFMAdvancedSearch");
      var data = [];
      categories.forEach(function(category) {
        data.push({
          "lblName": kony.i18n.getLocalizedString("kony.mb.PFM." + category.categoryName),
          "imgIcon": "remeberme.png",
          "categoryId": category.categoryId
        });
      });                            
      this.view.segTransactionType.setData(data);
      applicationManager.getPresentationUtility().dismissLoadingScreen();        
    }
    catch(err) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    }    
  },
  setTimeRangeData: function () {
    try {
      var configManager = applicationManager.getConfigurationManager();
      var data = [{
        "lblName": configManager.constants.Last7days,
        "imgIcon": "radiobuttoninactive.png"
      },
                  {
                    "lblName": configManager.constants.Last30days,
                    "imgIcon": "radiobuttoninactive.png"
                  },
                  {
                    "lblName": configManager.constants.Last60days,
                    "imgIcon": "radiobuttoninactive.png"
                  },
                  {
                    "lblName": configManager.constants.CustomRange,
                    "imgIcon": "radiobuttoninactive.png"
                  }
                 ];
      this.view.segTimeRange.setData(data);
    }
    catch(err) {
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    }   
  },
  validateDateWidget : function(endDate){
    try {
      var scope = this;
      scope.view.calEndDate.validEndDate=endDate;
      scope.view.calStartDate.validEndDate=endDate;
    }
    catch(err) {
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.processingError", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
    }        
  },
  selectedTransactionType: function(){
    try {
      var scope = this;
      var searchWord = this.view.tbxSearch.text;
      var data = this.view.segTransactionType.data;
      if(kony.sdk.isNullOrUndefined(this.view.segTransactionType.selectedRowIndices))
      {
        return false;
      }
      var indices = this.view.segTransactionType.selectedRowIndices[0][1];  
      var selectedData = [] ;
      var amountRange = new Array(2);
      var chequeRange = new Array(2);
      if(indices.length>0){
        for(var i=0;i<indices.length;i++)
        {
          selectedData.push(data[indices[i]].categoryId);
        }          
        scope.advanceSearchOptions.searchTransactionType=selectedData;
        return true;
      }
      return false;
    }
    catch(err) {
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    }
  },
  navigateToBack: function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  }

});
