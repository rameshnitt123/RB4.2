define({
  advanceSearchOptions : {
                          searchType : "Search",
                          firstRecordNumber : "0",
						              lastRecordNumber  : "24",
                         },
  res : {},
   init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },

    preshow: function () {
		this.advanceSearchOptions = {
                          searchType : "Search",
                          firstRecordNumber : "0",
						  lastRecordNumber  : "24",
                         };
        this.initActions();
        this.setTransactionTypeData();
        this.setTimeRangeData();
        if(kony.os.deviceInfo().name !== "iPhone"){
          this.view.flxHeader.isVisible = true;
        }
        else{
          this.view.flxHeader.isVisible = false;
        }
		this.view.flxAdvanceSearchWrapper.flxMainContainer.flxSearch.flxSearchMain.tbxSearch.text= "";
    this.view.flxMainContainer.flxFiltersMain.flxAmount.txtAmountFrom.text = "";
    this.view.flxMainContainer.flxFiltersMain.flxAmount.txtAmountTo.text  = "";
    this.view.flxMainContainer.flxFiltersMain.flxCheckNumbers.txtCheckNumbersFrom.text = "";
    this.view.flxMainContainer.flxFiltersMain.flxCheckNumbers.txtCheckNumbersTo.text = "";
    },
    postShow: function(){
    },
    initActions: function () {
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
        var configManager = applicationManager.getConfigurationManager();
        if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.Withdrawals){
          scope.advanceSearchOptions.searchTransactionType="Withdrawal";
        }
        if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.Deposits){
          scope.advanceSearchOptions.searchTransactionType="Deposit";
        }
        if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.P2PDebits){
          scope.advanceSearchOptions.searchTransactionType="P2PDebits";
        }
        if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.BillPay){
          scope.advanceSearchOptions.searchTransactionType="BillPay";
        }
        if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.Transfers){
          scope.advanceSearchOptions.searchTransactionType="Transfers";
        }
        if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.Checks){
          scope.advanceSearchOptions.searchTransactionType="Checks";
        }
        if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.P2PCredits){
          scope.advanceSearchOptions.searchTransactionType="P2PCredits";
        }
      };
        this.view.flxAddRangeCheckNumbers.onClick = function(){
            scope.toggleCheckbox(scope.view.imgCheckboxCheckNumbers);
            if(scope.view.imgCheckboxCheckNumbers.src ==="remeberme.png"){
                scope.view.lblToTitleTwo.isVisible = false;
                scope.view.txtCheckNumbersTo.isVisible = false;
            }else{
                scope.view.lblToTitleTwo.isVisible = true;
                scope.view.txtCheckNumbersTo.isVisible = true;
            }
            scope.view.forceLayout();
        };
        this.view.segTimeRange.onRowClick = function(){
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
        };
      this.view.btnSearch.onClick = function(){
        //scope.view.flxSearchResults.isVisible = true;
        applicationManager.getPresentationUtility().showLoadingScreen();
        //scope.selectedTransactionType();
        //custom metric API to generate Reports
        KNYMetricsService.sendCustomMetrics("frmAdvanceSearch", {"Search Transactions":"Final Search"});
        
        if(scope.advanceSearchOptions.searchStartDate!==""&&scope.advanceSearchOptions.searchEndDate!==""){
          if(scope.view.imgCheckboxAmount.src ==="remembermetick.png"){
            scope.advanceSearchOptions.searchMinAmount=scope.view.txtAmountFrom.text;
            scope.advanceSearchOptions.searchMaxAmount=scope.view.txtAmountTo.text;
          }else{
            scope.advanceSearchOptions.searchMinAmount=scope.view.txtAmountFrom.text;
            scope.advanceSearchOptions.searchMaxAmount=scope.view.txtAmountFrom.text;            
          }
          if(scope.view.imgCheckboxCheckNumbers.src ==="remembermetick.png"){
            scope.advanceSearchOptions.fromCheckNumber=scope.view.txtCheckNumbersFrom.text;
            scope.advanceSearchOptions.toCheckNumber=scope.view.txtCheckNumbersTo.text;
          }else{
            scope.advanceSearchOptions.fromCheckNumber=scope.view.txtCheckNumbersFrom.text;
            scope.advanceSearchOptions.toCheckNumber=scope.view.txtCheckNumbersFrom.text;
          }
          if(scope.view.tbxSearch.text!==""){
            scope.advanceSearchOptions.searchDescription=scope.view.tbxSearch.text;
          }
          var navMan=applicationManager.getNavigationManager();
          var statements=navMan.getCustomInfo("frmAccountDetails"); 
          scope.advanceSearchOptions.accountNumber = statements.selectedAccountData["accountID"]; 
          var TransModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
          TransModPresentationController.getPendingPostedTransactions(scope.advanceSearchOptions);   
          var X = scope.advanceSearchOptions;
          navMan.setCustomInfo("frmAdvanceSearch",X);		  
        }
      };
      this.view.customSearchbox.btnCancel.onClick = function(){
        scope.view.flxSearchResults.isVisible = false;
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
    },
  onCustomDateChange : function(){
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
  },
    showTransactionType: function () {
        if(this.view.flxTransactionTypeValue.isVisible == true){
            this.view.flxTransactionTypeValue.isVisible = false;
            this.view.imgArrowTransactionType.src = "arrowdown.png";
        }else{
            this.view.flxTransactionTypeValue.isVisible = true;
            this.view.imgArrowTransactionType.src = "arrowup.png";
        }
        /*
        var scope = this;
        var heightValue;
        if (this.view.flxTransactionTypeValue.height === "0dp") {
            heightValue = "preferred";
        } else {
            heightValue = "0dp";
        }

        this.view.flxTransactionTypeValue.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "height": heightValue
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function () {
                    if (heightValue === "0dp") {
                        scope.view.imgArrowTransactionType.src = "arrowdown.png";
                    } else {
                        scope.view.imgArrowTransactionType.src = "arrowup.png";
                    }
                    scope.view.forceLayout();
                }
            });*/
    },
    toggleCheckbox : function(obj){
        if(obj.src === "remeberme.png")
          obj.src = "remembermetick.png";
        else
          obj.src = "remeberme.png";
        this.view.forceLayout();
    },
    showTimeRange: function () {
        if(this.view.flxTimeRangeValue.isVisible == true){
            this.view.flxTimeRangeValue.isVisible = false;
            this.view.imgTimeRange.src = "arrowdown.png";
        }else{
            this.view.flxTimeRangeValue.isVisible = true;
            this.view.imgTimeRange.src = "arrowup.png";
        }
      /*  var scope = this;
        var heightValue;
        if (this.view.flxTimeRangeValue.height === "0dp") {
            heightValue = "preferred";
        } else {
            heightValue = "0dp";
        }

        this.view.flxTimeRangeValue.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "height": heightValue
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function () {
                    if (heightValue === "0dp") {
                        scope.view.imgTimeRange.src = "arrowdown.png";
                    } else {
                        scope.view.imgTimeRange.src = "arrowup.png";
                    }
                    scope.view.forceLayout();
                }
            });*/
    },
    setTransactionTypeData: function () {
       var configManager = applicationManager.getConfigurationManager();
        var data = [
            {
                "lblName": configManager.constants.Deposits,
                "imgIcon": "remeberme.png"
            },
            {
                "lblName": configManager.constants.Withdrawals,
                "imgIcon": "remeberme.png"
            },
            {
                "lblName": configManager.constants.Checks,
                "imgIcon": "remeberme.png"
            },
            {
                "lblName": configManager.constants.Transfers,
                "imgIcon": "remeberme.png"
            },
            {
                "lblName": configManager.constants.BillPay,
                "imgIcon": "remeberme.png"
            },
            {
                "lblName": configManager.constants.P2PDebits,
                "imgIcon": "remeberme.png"
            },
            {
                "lblName": configManager.constants.P2PCredits,
                "imgIcon": "remeberme.png"
            }
        ];
        this.view.segTransactionType.setData(data);
    },
    setTimeRangeData: function () {
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
    },
  validateDateWidget : function(endDate){
      var scope = this;
      scope.view.calEndDate.validEndDate=endDate;
      scope.view.calStartDate.validEndDate=endDate;
  },
  selectedTransactionType: function(){
    var scope = this;
    var searchWord = this.view.tbxSearch.text;
    var data = this.view.segTransactionType.data;
      var indices = this.view.segTransactionType.selectedRowIndices[0][1];
      var selectedData = [] ;
      var amountRange = new Array(2);
      var chequeRange = new Array(2);
      if(indices.length>0){
        for(var i=0;i<indices.length;i++)
        {
          selectedData.push(data[indices[i]].lblName);
        }
        if(selectedData.length>0){
          scope.advanceSearchOptions.searchTransactionType=selectedData[0];
        }
      }  
  },
  navigateToBack: function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  }

});
