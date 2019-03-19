define({ 

  transModule: null,
  getTransactionModule: function() {
    if (!this.transModule) {
      this.transModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
    }
    return  this.transModule;
  },

  advanceSearchOptions: {
    searchType: "Search",
    firstRecordNumber: "0",
    lastRecordNumber: "24",
  }, 

  res: {},

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preshow: function() {
    this.view.flxHeader.setVisibility(!this.isIpad());
    this.view.flxTimeRangeWrapper.lblTimeRangeTitle.text = "Time Range (Last 30 days)";
    this.setTransactionTypeData();
    this.setTimeRangeData();
    this.initActions();
    this.initHeaderActions();
    this.cleanInput();
  },

  cleanInput: function() {
    this.view.flxAdvanceSearchWrapper.flxSearch.flxSearchMain.tbxSearch.text = "";
    this.view.flxMainContainer.flxFiltersMain.flxAmount.txtAmountFrom.text = "";
    this.view.flxMainContainer.flxFiltersMain.flxAmount.txtAmountTo.text = "";
    this.view.flxMainContainer.flxFiltersMain.flxCheckNumbers.txtCheckNumbersFrom.text = "";
    this.view.flxMainContainer.flxFiltersMain.flxCheckNumbers.txtCheckNumbersTo.text  = "";
    
  },  
  
  isIpad: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    return deviceUtilManager.isIpad();
  },

  initActions: function() {
    var self = this;

    this.view.flxTransactionTypeWrapper.onClick = function() {
      self.changeViewState(self.view.flxTransactionTypeValue, self.view.imgArrowTransactionType);
    };

    this.view.flxTimeRangeWrapper.onClick = function() {
      self.changeViewState(self.view.flxTimeRangeValue, self.view.imgTimeRange );
    };

    this.view.segTransactionType.onRowClick = function() {
      self.setTransactionTypeItem();
    };

    this.view.segTimeRange.onRowClick = function() {
      self.setTimeRangeItem();
    };

    this.view.flxAddRangeAmount.onClick = function() {
      self.showRangeAmount();
    };

    this.view.flxAddRangeCheckNumbers.onClick = function() {
      self.showCheckNumbers();
    };

    this.view.btnSearch.onClick = function() {
      applicationManager.getPresentationUtility().showLoadingScreen();
	  KNYMetricsService.sendCustomMetrics("frmAdvanceSearch", {"Search Transactions":"Final Search"});
      if (self.advanceSearchOptions.searchStartDate !== "" && self.advanceSearchOptions.searchEndDate !== "") {
        if (self.view.imgCheckboxAmount.src === "remembermetick.png") {
          self.advanceSearchOptions.searchMinAmount = self.view.txtAmountFrom.text;
          self.advanceSearchOptions.searchMaxAmount = self.view.txtAmountTo.text;
        } else {
          self.advanceSearchOptions.searchMinAmount = self.view.txtAmountFrom.text;
          self.advanceSearchOptions.searchMaxAmount = self.view.txtAmountFrom.text;            
        }
        if (self.view.imgCheckboxCheckNumbers.src === "remembermetick.png") {
          self.advanceSearchOptions.fromCheckNumber = self.view.txtCheckNumbersFrom.text;
          self.advanceSearchOptions.toCheckNumber = self.view.txtCheckNumbersTo.text;
        } else {
          self.advanceSearchOptions.fromCheckNumber = self.view.txtCheckNumbersFrom.text;
          self.advanceSearchOptions.toCheckNumber = self.view.txtCheckNumbersFrom.text;
        }
        if (self.view.tbxSearch.text !== "") {
          self.advanceSearchOptions.searchDescription = self.view.tbxSearch.text;
        }

        var navMan = applicationManager.getNavigationManager();
        var statements = navMan.getCustomInfo("frmAccountDetails"); 
        self.advanceSearchOptions.accountNumber = statements.selectedAccountData.accountID; 
        self.getTransactionModule().presentationController.getPendingPostedTransactions(self.advanceSearchOptions);   
        var advanceSearchInfo = self.advanceSearchOptions;
        navMan.setCustomInfo("frmAdvanceSearch", advanceSearchInfo);  
      }
    };

    this.view.calStartDate.onSelection = function() {
      self.customDateCount++;
      self.view.calStartDate.validEndDate = [self.view.calEndDate.dateComponents[0], self.view.calEndDate.dateComponents[1], self.view.calEndDate.dateComponents[2]];
      self.onCustomDateChange();
    };

    this.view.calEndDate.onSelection = function() {
      self.customDateCount++;
      self.view.calStartDate.validEndDate = [self.view.calEndDate.dateComponents[0], self.view.calEndDate.dateComponents[1], self.view.calEndDate.dateComponents[2]];
      self.onCustomDateChange();
    };   
  }, 
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navigateToBack;
    }
  },

  changeViewState: function(view, imgView) {
    var isVisible = view.isVisible;
    view.isVisible = !isVisible;
    imgView.src = isVisible ? "arrowdown.png" : "arrowup.png";
  },

  setTransactionTypeData: function() {
    var data = [
      {
        lblName: this.getI18("kony.mb.AdvanceSearch.Deposits"),
        imgIcon: "radiobuttoninactive.png"
      }, 
      {
        lblName: this.getI18("kony.mb.AdvanceSearch.Withdrawals"),
        imgIcon: "radiobuttoninactive.png"
      },
      {
        lblName: this.getI18("kony.mb.AdvanceSearch.Checks"),
        imgIcon: "radiobuttoninactive.png"
      },
      {
        lblName: this.getI18("kony.mb.AdvanceSearch.Transfers"),
        imgIcon: "radiobuttoninactive.png"
      },
      {
        lblName: this.getI18("kony.mb.AdvanceSearch.BillPay"),
        imgIcon: "radiobuttoninactive.png"
      },
   	  {
        lblName: this.getI18("kony.mb.AdvanceSearch.P2PDebits"),
        imgIcon: "radiobuttoninactive.png"
      },
       {
        lblName: this.getI18("kony.mb.AdvanceSearch.P2PCredits"),
        imgIcon: "radiobuttoninactive.png"
      }];
    this.view.segTransactionType.setData(data);  	
  },

  setTimeRangeData: function() {
    var data = [
      {
        lblName: this.getI18("kony.mb.AdvanceSearch.Last7days"),
        imgIcon: "radiobuttoninactive.png"
      },
      
      {
        lblName : this.getI18("kony.tab.AdvanceSearch.Last30days"),
        imgIcon: "radiobtn.png"
      },
   
      {
        lblName: this.getI18("kony.mb.AdvanceSearch.Last60days"),
        imgIcon: "radiobuttoninactive.png"
      },
     
      {
        lblName: this.getI18("kony.tab.AdvanceSearch.CustomPeriod"),
        imgIcon: "radiobuttoninactive.png"
      }];
    this.view.segTimeRange.setData(data);  
  },

  setTimeRangeItem: function() {
    var activeRow  = this.view.segTimeRange.data[this.view.segTimeRange.selectedIndex[1]];
    var transMode = this.getTransactionModule();
    if (activeRow.lblName === this.getI18("kony.tab.AdvanceSearch.CustomPeriod")) {
      this.view.flxTimeRangeValue.isVisible = false;
      this.view.flxCustomDate.isVisible = true;
      this.toggleRadioBtn(this.view.segTimeRange, this.view.segTimeRange.selectedIndex[1]);
      var dateCustom = new Date();
      var endDate  = new Date(dateCustom.getFullYear(), dateCustom.getMonth() + 1, dateCustom.getDate());
      this.validateDateWidget(endDate);	
      this.onCustomDateChange();    
    } else if (activeRow.lblName === this.getI18("kony.tab.AdvanceSearch.Last30days")) {
      this.view.flxCustomDate.isVisible = false;
      this.toggleRadioBtn(this.view.segTimeRange, this.view.segTimeRange.selectedIndex[1]);
      this.res = transMode.presentationController.getDateRange(30);
      this.advanceSearchOptions.searchStartDate = this.res.searchStartDate;
      this.advanceSearchOptions.searchEndDate = this.res.searchEndDate;
    } else if (activeRow.lblName === this.getI18("kony.mb.AdvanceSearch.Last60days")) {
      this.view.flxCustomDate.isVisible = false;
      this.toggleRadioBtn(this.view.segTimeRange, this.view.segTimeRange.selectedIndex[1]);
      this.res = transMode.presentationController.getDateRange(60);
      this.advanceSearchOptions.searchStartDate = this.res.searchStartDate;
      this.advanceSearchOptions.searchEndDate = this.res.searchEndDate; 
    } else if (activeRow.lblName === this.getI18("kony.mb.AdvanceSearch.Last7days")) {
      this.view.flxCustomDate.isVisible = false;
      this.toggleRadioBtn(this.view.segTimeRange, this.view.segTimeRange.selectedIndex[1]);
      this.res = transMode.presentationController.getDateRange(7);	
      this.advanceSearchOptions.searchStartDate = this.res.searchStartDate;
      this.advanceSearchOptions.searchEndDate = this.res.searchEndDate;	
    } 
  },

  setTransactionTypeItem: function() {
    var configManager = applicationManager.getConfigurationManager();
    var rowIndex = this.view.segTransactionType.selectedIndex[1];
    var activeRow  = this.view.segTransactionType.data[rowIndex];
    if (activeRow.lblName === this.getI18("kony.mb.AdvanceSearch.Withdrawals")) {
      this.advanceSearchOptions.searchTransactionType="Withdrawal";
      this.toggleRadioBtn(this.view.segTransactionType, rowIndex);
    }
    if (activeRow.lblName === this.getI18("kony.mb.AdvanceSearch.Deposits")) {
      this.advanceSearchOptions.searchTransactionType="Deposit";
      this.toggleRadioBtn(this.view.segTransactionType, rowIndex);
    }
    if (activeRow.lblName === this.getI18("kony.mb.AdvanceSearch.P2PDebits")) {
      this.advanceSearchOptions.searchTransactionType="P2PDebits";
      this.toggleRadioBtn(this.view.segTransactionType, rowIndex);
    }
    if (activeRow.lblName === this.getI18("kony.mb.AdvanceSearch.BillPay")) {
      this.advanceSearchOptions.searchTransactionType="BillPay";
      this.toggleRadioBtn(this.view.segTransactionType, rowIndex);
    }
    if (activeRow.lblName === this.getI18("kony.mb.AdvanceSearch.Transfers")) {
      this.advanceSearchOptions.searchTransactionType="Transfers";
      this.toggleRadioBtn(this.view.segTransactionType, rowIndex);
    }
    if (activeRow.lblName === this.getI18("kony.mb.AdvanceSearch.Checks")) {
      this.advanceSearchOptions.searchTransactionType="Checks";
      this.toggleRadioBtn(this.view.segTransactionType, rowIndex);
    }
    if (activeRow.lblName === this.getI18("kony.mb.AdvanceSearch.P2PCredits")) {
      this.advanceSearchOptions.searchTransactionType="P2PCredits";
      this.toggleRadioBtn(this.view.segTransactionType, rowIndex);
    }
  },

  getI18: function(i18Value) {
    return applicationManager.getPresentationUtility().getStringFromi18n(i18Value);
  },

  toggleRadioBtn: function(segName, index) {
    var seg = segName;
    var rowInfo = seg.data[index];
    var categoryTitle = rowInfo.lblName;
    var checkedRadio = {
      lblName: rowInfo.lblName,
      imgIcon: "radiobtn.png"
    };

    if (rowInfo.imgIcon == "radiobuttoninactive.png") {
      seg.setDataAt(checkedRadio, index);	
      seg.data.forEach(function(element, pos) {
        var uncheckedRadio = {
          lblName: element.lblName,
          imgIcon: "radiobuttoninactive.png" 
        };          
        if (element.imgIcon == "radiobtn.png" && pos != index) {
          seg.setDataAt(uncheckedRadio, pos);  	
        }
      });
    }
    if (seg == this.view.segTimeRange) {
      if(categoryTitle) {
        this.view.flxTimeRangeWrapper.lblTimeRangeTitle.text = "Time Range " + "(" + categoryTitle + ")";
      } else {
        this.view.flxTimeRangeWrapper.lblTimeRangeTitle.text = "Time Range (Last 30 days)";
      }
    }  
    
    if (seg == this.view.segTransactionType) {
      if(categoryTitle) {
        this.view.flxTransactionTypeWrapper.lblTransactionTypeTitle.text = "Transaction Type " + "(" + categoryTitle + ")"; 
      } else {
        this.view.flxTransactionTypeWrapper.lblTransactionTypeTitle.text = "Transaction Type";
      }
    }
  },

  showRangeAmount: function() {
    var isRememberMe = this.view.imgCheckboxAmount.src === "remeberme.png";
    this.view.lblDollarTwo.setVisibility(isRememberMe);
    this.view.lblToTitleOne.setVisibility(isRememberMe);
    this.view.txtAmountTo.setVisibility(isRememberMe);
    this.view.imgCheckboxAmount.src = isRememberMe ? "remembermetick.png" : "remeberme.png";
  },

  showCheckNumbers: function() {
    var isRememberMe = this.view.imgCheckboxCheckNumbers.src === "remeberme.png";
    this.view.lblToTitleTwo.setVisibility(isRememberMe);
    this.view.txtCheckNumbersTo.setVisibility(isRememberMe);
    this.view.imgCheckboxCheckNumbers.src = isRememberMe ? "remembermetick.png" : "remeberme.png";
  },

  validateDateWidget: function(endDate) {
    this.view.calEndDate.validEndDate = endDate;
    this.view.calStartDate.validEndDate = endDate;
  },
  
   navigateToBack: function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },

  onCustomDateChange: function() {
    var startDate = new Date(this.view.calStartDate.dateComponents[2], this.view.calStartDate.dateComponents[1] - 1, this.view.calStartDate.dateComponents[0]);
    var endDate = new Date(this.view.calEndDate.dateComponents[2], this.view.calEndDate.dateComponents[1] - 1, this.view.calEndDate.dateComponents[0]);
    var res = this.getTransactionModule().presentationController.getCustomRange(startDate, endDate);
    this.advanceSearchOptions.searchStartDate = res ? res.searchStartDate : "";
    this.advanceSearchOptions.searchEndDate = res ? res.searchEndDate : "";
  }
});