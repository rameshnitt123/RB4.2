define({
    /**
     * Description
     * @method preshow
     * @return 
     */
    adsHided: false,
    currAdFlex: 1,
    inFeedAdData: [],
    numOfAds: 0,
    xOffset: 0,
    imageObjArray: [],
    imageDownloadFailureCount: 0,
    gestIDs: [],
    isSwipeDone : false,
    isTapDone : false,
    init: function () {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.limitMonth = this.currentMonth;
    },
    preshow: function () {
        this.MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        this.CATEGORY_COUNT = 9;
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.firstTimeLoginDone();
        this.selectedBankSkin = "sknLblda8b08SSPRegular26px";
        this.otherBankSkin = "sknLbl0095e4SSPRegular26px";
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        var formatUtility = applicationManager.getFormatUtilManager();
        var custominfoInt = navManager.getCustomInfo("frmDashboard");
        var custominfoExt = navManager.getCustomInfo("frmDashboardAggregated");
        var internalAccounts = this.clone(custominfoInt.accountData);
        var externalAccounts = this.clone(custominfoExt.accountData);
        Array.prototype.push.apply(internalAccounts, externalAccounts);
        var processedAccountsData = accountMod.presentationController.processAccountsData(internalAccounts);
//         var totalAvaBal = accountMod.presentationController.getTotalAvailableBalance(internalAccounts);
//         var totalDebt = accountMod.presentationController.getTotalDebtBalance(internalAccounts);
//         var totalAvlFloat = totalAvaBal.replace(',', '');
//         var totalDebtFloat = totalDebt.replace(',', '');
//         totalAvlFloat = parseFloat(totalAvlFloat.replace(/[^0-9,.]*/, ''));
//         totalDebtFloat = parseFloat(totalDebtFloat.replace(/[^0-9,.]*/, ''));
        var totalAvaBal = accountMod.presentationController.getTotalAvailableBalance(internalAccounts);
        var totalDebt = accountMod.presentationController.getTotalDebtBalance(internalAccounts);
    		var totalAvlFloat = formatUtility.deFormatAmount(totalAvaBal);
        var totalDebtFloat = formatUtility.deFormatAmount(totalDebt);
        if(internalAccounts.length > 0){
          var currencyCode = internalAccounts[0]["currencyCode"];
          this.view.lblBankName.text = formatUtility.formatAmountandAppendCurrencySymbol(totalAvlFloat - totalDebtFloat,currencyCode);
        }else{
          this.view.lblBankName.text = formatUtility.formatAmountandAppendCurrencySymbol(totalAvlFloat - totalDebtFloat);
        }
        this.view.lblBankName.text = formatUtility.formatAmountandAppendCurrencySymbol(totalAvlFloat - totalDebtFloat);
        this.view.lblAssetsValue.text = totalAvaBal;
        this.view.lblDebtValue.text = totalDebt;
        this.mapAccountsAndBanks();
        this.mapPFMDataToCharts();
        this.adsPreshow();
        this.view.flxHamburger.isVisible = false;
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var loggerManager = applicationManager.getLoggerManager();
   		loggerManager.setCustomMetrics(this,true,"#Successfull Logins");
    },
    mapInternalAccounts: function () {
        var navManager = applicationManager.getNavigationManager();
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        this.view.segAccounts.rowTemplate = "flxAccountsNoImage";
        this.view.flxSelectAccount.isVisible = false;
        this.view.flxChartSizeToggle.skin = "sknFlxffffff";
        var custominfoInt = navManager.getCustomInfo("frmDashboard");
        var internalAccounts = this.clone(custominfoInt.accountData);
        var processedAccountsData = accountMod.presentationController.processAccountsData(internalAccounts);
        this.view.segAccounts.widgetDataMap = {
            lblAccountName: "nickName",  //"accountName",
            lblAccountBalValue: "availableBalance",
            lblBankName: "accountType",
            lblAccountId: "accountID",
            lblAccountBal: "accountBalanceType"
        };

        this.view.segAccounts.setData(processedAccountsData);
    },
    mapPFMDataToCharts: function () {
        try {
            kony.timer.cancel("pfmTimer");
        } catch (exception) { }
        kony.timer.schedule("pfmTimer", this.mapDataToChart, 2, false);
    },
    mapDataToBar: function () {
        var navManager = applicationManager.getNavigationManager();
        var barData = navManager.getCustomInfo("frmDashboardPFMBar");
        var balanceBars = this.view.allBalanceBars.widgets();
		var p = 0;
        for (p = 0; p < barData.length; p++) {
          if(p >= this.limitMonth)
          {
            barData[p].totalCashFlow = 0;
          }
        }
        var maxAmount = barData.reduce(function (previous, record) {
            if (previous > parseInt(record.totalCashFlow)) {
                return previous;
            }
            return parseInt(record.totalCashFlow);
        }, 0).toFixed(2);

        var barGraphData = [];
        var barSegData = [];
        var formatUtility = applicationManager.getFormatUtilManager();
        barData.forEach(function (record) {
            barGraphData.push((parseInt(record.totalCashFlow) * 100) / maxAmount);
            barSegData.push({
                "monthName": record.monthName,
                "totalCashFlow": formatUtility.formatAmountandAppendCurrencySymbol(record.totalCashFlow)
            });
        });

        for (var p = 0; p < balanceBars.length - 1; p++) {
            var thisBar = "bar" + p;
            var thisHeight = barGraphData[p];
            var thisHeightExtend = thisHeight + (thisHeight * 0.15);

            this.view[thisBar].animate(
                kony.ui.createAnimation({
                    0: {
                        height: 0,
                        opacity: 0,
                        "stepConfig": {}
                    },
                    80: {
                        height: thisHeightExtend,
                        opacity: .8,
                        "stepConfig": {}
                    },
                    100: {
                        height: thisHeight + "dp",
                        opacity: 1,
                        "stepConfig": {}
                    }
                }), {
                    delay: (p * .05),
                    fillMode: kony.anim.FILL_MODE_FORWARDS,
                    duration: .55
                }, {
                    animationEnd: function () { }
                });


            var thisChildLabel = "barLabel" + p;

            this.view[thisChildLabel].animate(
                kony.ui.createAnimation({
                    0: {
                        opacity: 0,
                        "stepConfig": {}
                    },
                    100: {
                        opacity: 1,
                        "stepConfig": {}
                    }
                }), {
                    delay: (p * .045),
                    fillMode: kony.anim.FILL_MODE_FORWARDS,
                    duration: .4
                }, {
                    animationEnd: function () { }
                });

        }
        this.view.netWorthTotal.text = formatUtility.formatAmountandAppendCurrencySymbol(maxAmount);
        this.view.segBar.widgetDataMap = {
            "lblSpending": "monthName",
            "lblAmountSpent": "totalCashFlow",
        };
        this.view.segBar.setData(barSegData);
        this.view.forceLayout();
    },
    mapDataToChart: function () {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var pieData = navManager.getCustomInfo("frmDashboardPFMPie");
        this.mapDataToBar();
        var chartData = [];
        var segSpendingData = [];

        var formatUtility = applicationManager.getFormatUtilManager();
        var totalAmount = pieData.reduce(function (previous, record) {
            return previous + Number(record.cashSpent);
        }, 0).toFixed(2);

        pieData.forEach(function (record) {
            var percentageValue = Math.round((record.cashSpent * 100) / totalAmount) + "%";

            chartData.push({
                "label": record.categoryName,
                "value": percentageValue,
                "color": "ffffff",
                "alpha": "80"
            });

            segSpendingData.push({
                "categoryName": record.categoryName + " - " + percentageValue,
                "cashSpent": formatUtility.formatAmountandAppendCurrencySymbol(record.cashSpent)
            });
        });
        this.view.segTransactions.widgetDataMap = {
            "lblSpending": "categoryName",
            "lblAmountSpent": "cashSpent",
        };

        this.view.segTransactions.setData(segSpendingData);
        var x = this.view.browserChart.evaluateJavaScript("createPieChart(" + JSON.stringify(chartData) + ");");
        this.view.lblTotalSpendingValue.text = formatUtility.formatAmountandAppendCurrencySymbol(totalAmount);
        this.view.lblMonthAndYearSummary.text = this.MONTH_NAMES[this.currentMonth - 1];
        this.view.lblMonthAndYear.text = this.MONTH_NAMES[this.currentMonth - 1];
        this.view.lblTotalSpendingValue.isVisible = true;
        this.view.lblTotalSpending.isVisible = true;
        if (!x) {
            //Error in creating PFM Charts
        }
        this.view.forceLayout();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    prevMonthClick: function () {
        if (this.currentMonth === 1) {
            return;
        }
        this.prevMonth = parseInt(this.currentMonth) - 1;
        this.nextMonth = -1;
        this.goToMonth(this.prevMonth);

    },
    nextMonthClick: function () {
        if (this.currentMonth >= this.limitMonth) {
            return;
        }
        this.prevMonth = -1;
        this.nextMonth = parseInt(this.currentMonth) + 1;
        this.goToMonth(this.nextMonth);
    },
    goToMonth: function (monthId) {
        var date = new Date();
        var presentYear = date.getFullYear();
        applicationManager.getPresentationUtility().showLoadingScreen();
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.fetchMonthPFMData(monthId, presentYear, this.monthFetchSuccess, this.monthFetchFailure);
    },
    monthFetchSuccess: function (response) {
        if (response.length > 0) {
            var navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo("frmDashboardPFMPie", response);
            if (this.prevMonth == -1) {
                this.currentMonth++;
            } else if (this.nextMonth == -1) {
                this.currentMonth--;
            }
            this.mapDataToChart();

        }
    },
    monthFetchFailure: function (response) {
        alert("Something went wrong");
    },
    /**
     * Description
     * @method mapAccountsAndBanks
     * @return 
     */
    mapAccountsAndBanks: function () {
        var navManager = applicationManager.getNavigationManager();
        var custominfoInt = navManager.getCustomInfo("frmDashboard");
        var custominfoExt = navManager.getCustomInfo("frmDashboardAggregated");
        var internalAccounts = this.clone(custominfoInt.accountData);
        var externalAccounts = this.clone(custominfoExt.accountData);
        if (!kony.sdk.isNullOrUndefined(externalAccounts) && externalAccounts.length !== 0 && applicationManager.getConfigurationManager().isAggregatedExternalAccountEnabled()) {
            this.view.segAccounts.onRowClick = this.accountAggregatedSegmentOnClick.bind(this);
            this.setBankAccounts(internalAccounts, externalAccounts);
            this.setAccountsInfo(internalAccounts, externalAccounts, kony.i18n.getLocalizedString("kony.mb.common.allAccounts"));
        }
        else {
          	this.view.segAccounts.onRowClick = this.accountSegmentOnClick.bind(this);
			this.setAccountsInfo(internalAccounts, [], kony.i18n.getLocalizedString("kony.mb.common.allAccounts"));
            this.mapInternalAccounts();
           
        }
    },
    /**
     * Description
     * @method setBankAccounts
     * @param {} accountResponse
     * @return 
     */
    setBankAccounts: function (internalAccounts, externalAccounts) {

        this.view.lblSelectedAccountType.text = kony.i18n.getLocalizedString("kony.mb.common.allAccounts");
        this.view.segAccounts.rowTemplate = "flxAccounts";
        this.view.flxChartSizeToggle.skin = "sknFlxf9f9f9";
        this.view.flxSelectAccount.isVisible = true;
        var bankJS = {};
        var banks = [{
            "lblName": {
                "text": kony.i18n.getLocalizedString("kony.mb.common.allAccounts"),
                "skin": this.selectedBankSkin
            },
            "imgIcon": "tick.png"
        }];
        if (!kony.sdk.isNullOrUndefined(internalAccounts) && internalAccounts.length > 0) {
            internalAccounts.forEach(function (record) {
                if (!bankJS[record.bankName]) {
                    banks.push({
                        "lblName": {
                            "text": (record.bankName).toUpperCase() + " " + kony.i18n.getLocalizedString("kony.mb.common.accounts"),
                            "skin": this.otherBankSkin
                        },
                        "imgIcon": ""
                    });
                    bankJS[record.bankName] = true;
                }
            });
        }
        if (!kony.sdk.isNullOrUndefined(externalAccounts) && externalAccounts.length > 0) {
            externalAccounts.forEach(function (record) {
                if (!bankJS[record.BankName]) {
                    banks.push({
                        "lblName": {
                            "text": (record.BankName).toUpperCase() + " " + kony.i18n.getLocalizedString("kony.mb.common.accounts"),
                            "skin": this.otherBankSkin
                        },
                        "imgIcon": ""
                    });
                    bankJS[record.BankName] = true;
                }
            });
        }
        this.view.segAccountTypes.setData(banks);

    },
    /**
     * Description
     * @method setAccountsInfo
     * @param {} accountResponse
     * @param {} bankName
     * @return 
     */
    setAccountsInfo: function (internalAccounts, externalAccounts, bankName) {
        if (bankName !== kony.i18n.getLocalizedString("kony.mb.common.allAccounts")) {
            var len = bankName.length;
            bankName = (bankName.substring(0, len - 9)).toLowerCase().trim();
        }


        var typesJS = {};
        var typeBalance = {};
        var types = [];
        var data = [];
        var summaryData = [];
        var totalBalance = 0;
        var totalAsset = 0;
        var totalDebt = 0;
        var formatUtility = applicationManager.getFormatUtilManager();
        var configManager = applicationManager.getConfigurationManager();
        var TypeManager = applicationManager.getTypeManager();
      
        if (!kony.sdk.isNullOrUndefined(internalAccounts) && internalAccounts.length > 0) {
            internalAccounts.forEach(function (record) {
				 var AvailableBalance;
              if (record.accountType === TypeManager.getAccountTypeBackendValue(configManager.accountTypes.LOAN) || record.accountType === TypeManager.getAccountTypeBackendValue(configManager.accountTypes.CREDITCARD)) {
                AvailableBalance =  record.outstandingBalance;
              } else if (record.accountType ===TypeManager.getAccountTypeBackendValue(configManager.accountTypes.DEPOSIT)){
                AvailableBalance = record.currentBalance;
              } else {
                AvailableBalance = record.availableBalance;
              }
                externalAccounts.unshift({
                    "BankLogo": "konybanklogo.png",
                    "AccountName": record.accountName,
                    "AvailableBalance": AvailableBalance,
                    "BankName": record.bankName,
                    "LastUpdated": "",
                    "type": "internal",
                    "TypeDescription": record.accountType,
                    "AccountId": record.accountID,
                    "errorIcon": "",
                    "Last4DigitAccount": "..." + (record.accountID).substr((record.accountID).length - 4),
                    "NickName": record.nickName,
					"CurrencyCode" : record.currencyCode
                });
            });
        }
        if (!kony.sdk.isNullOrUndefined(externalAccounts) && externalAccounts.length > 0) {
            externalAccounts.forEach(function (record) {
                if (bankName == kony.i18n.getLocalizedString("kony.mb.common.allAccounts") || bankName == (record.BankName).toLowerCase().trim()) {
                    if (record.TypeDescription !== null && record.TypeDescription !== undefined) {
                        if (!typesJS[record.TypeDescription]) {
                            typesJS[record.TypeDescription] = [];
                            typeBalance[record.TypeDescription] = 0;
                            types.push(record.TypeDescription);
                        }
                        typesJS[record.TypeDescription].push(record);
                        if ((record.TypeDescription.toLowerCase().trim() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.SAVINGS)).toLowerCase()) || (record.TypeDescription.toLowerCase().trim() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.CHECKING)).toLowerCase())) {
                            typeBalance[record.TypeDescription] = kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
                        } else if ((record.TypeDescription.toLowerCase().trim() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.DEPOSIT)).toLowerCase()) || (record.TypeDescription.toLowerCase().trim() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.CREDITCARD)).toLowerCase())) {
                            typeBalance[record.TypeDescription] = kony.i18n.getLocalizedString("kony.mb.accdetails.currBal");
                        } else if ((record.TypeDescription.toLowerCase().trim() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.LOAN)).toLowerCase()) || (record.TypeDescription.toLowerCase().trim() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.MORTGAGE)).toLowerCase())) {
                            typeBalance[record.TypeDescription] = kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
                        } else {
                            typeBalance[record.TypeDescription] = kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
                        }
                        if (isNaN(parseFloat(record.AvailableBalance))) {
                            record.AvailableBalance = "0.00";
                        }
                        if (record.TypeDescription.toLowerCase() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.SAVINGS)).toLowerCase()|| record.TypeDescription.toLowerCase().trim() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.CHECKING)).toLowerCase() || record.TypeDescription.toLowerCase() === "current") {
                            totalBalance = totalBalance + parseFloat(record.AvailableBalance);
                            totalAsset = totalAsset + parseFloat(record.AvailableBalance);
                            if(!kony.sdk.isNullOrUndefined(record.nickName)){
                              record.NickName = record.nickName;
                            }
                            else if(kony.sdk.isNullOrUndefined(record.NickName) && kony.sdk.isNullOrUndefined(record.nickName)){
                              record.NickName = record.AccountName;
                            }
                            summaryData.push(record);
                        }
                        if (record.TypeDescription.toLowerCase() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.MORTGAGE)).toLowerCase() || record.TypeDescription.toLowerCase() === (TypeManager.getAccountTypeBackendValue(configManager.accountTypes.LOAN)).toLowerCase()) {
                            totalDebt = totalDebt + parseFloat(record.AvailableBalance);
                        }
                        record.AvailableBalance = formatUtility.formatAmountandAppendCurrencySymbol(record.AvailableBalance,record.CurrencyCode);
                        var forUtility = applicationManager.getFormatUtilManager();
                        record.LastUpdated = forUtility.getTimeDiferenceOfDate(record.LastUpdated);
                        if (record.Number) {
                            record.Last4DigitAccount = "..." + (record.Number).substr((record.Number).length - 4);
                        }
                        if (!record.type) {
                            record.type = "external";
                        }
                        if (!kony.sdk.isNullOrUndefined(record.error) && record.error.trim() !== "") {
                            record.errorIcon = {
                                src: "erroricon.png",
                                isVisible: true
                            };
                        } else {
                            record.errorIcon = {
                                src: "",
                                isVisible: false
                            };
                        }
                    }
                }
            });
        }

        var allTypes= TypeManager.getAccountTypesByPriority();
        for (var i = 0;i<allTypes.length;i++) {
          var type = TypeManager.getAccountTypeBackendValue(allTypes[i]);
          if(typesJS[type]!="" && typesJS[type]!=null)
          {
            var balance = 0;
            var typeVal = type;
            for (var index = 0; index < typesJS[type].length; index++) {
                var neg = 1;
                var bal = typesJS[type][index].AvailableBalance.replace(/,/g, "");
                if (bal[0] == '-') {
                    neg = -1;
                    bal = bal.substr(2, bal.length);
                }
                else {
                    bal = bal.substr(1, bal.length);
                }
                balance += (neg * parseFloat(bal));
            }
            data.push([{
                "lblTypeName": TypeManager.getAccountTypeDisplayValue(TypeManager.getAccountType(typeVal)) + " Accounts (" + typesJS[type].length + ")",
                "lblTypeValue": formatUtility.formatAmountandAppendCurrencySymbol(balance.toFixed(2))
            }, typesJS[type]]);
          }  
        }

        this.view.lblBankName.text = formatUtility.formatAmountandAppendCurrencySymbol(totalBalance.toFixed(2));
        this.view.lblAssetsValue.text = formatUtility.formatAmountandAppendCurrencySymbol(totalAsset.toFixed(2));
        this.view.lblDebtValue.text = formatUtility.formatAmountandAppendCurrencySymbol(totalDebt.toFixed(2));
        this.view.segAccounts.widgetDataMap = {
            "lblTypeName": "lblTypeName",
            "lblTypeValue": "lblTypeValue",
            "imgBank": "BankLogo",
            "lblAccountName": "NickName",
            "lblAccountBalValue": "AvailableBalance",
            "lblBankName": "BankName",
            "lblAccountBal": "LastUpdated",
            "imgError": "errorIcon",
            "lblAccountNumber": "Last4DigitAccount"
        };
        this.view.segSummary.widgetDataMap = {
          "lblSpending": "NickName",
          "lblAmountSpent": "AvailableBalance"
        };
        this.view.segSummary.setData([]);
        this.view.segSummary.setData(summaryData);
        this.setView(data);
    },
    setView: function (data) {
        this.view.segAccounts.setData([]);
        this.view.segAccounts.setData(data);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    /**
     * Description
     * @method postShow
     * @return 
     */
    postShow: function () {
//         var h = this.view.flxDashboard.frame.height;
//         this.view.flxAccounts.height = h + "dp";
//         if (kony.os.deviceInfo().name !== "iPhone") {
//             this.view.flxDashboardHeader.top = "56dp";
//             this.view.flxGradient.top = "56dp";
//             this.view.flxPageIndicators.top = "281dp";
//         } else {
//             this.view.flxDashboardHeader.top = "0dp";
//             this.view.flxGradient.top = "0dp";
//             this.view.flxPageIndicators.top = "225dp";
//         }
         var configManager = applicationManager.getConfigurationManager();
		 if(configManager.isAggregatedExternalAccountEnabled()){
			this.getAccountsRealTime();
		 }
    },
    /**
     * Description
     * @method getAccountsRealTime
     * @return 
     */
    getAccountsRealTime: function () {
        var accountsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        var main_user = applicationManager.getUserPreferencesManager().getUserName();
        accountsModule.presentationController.fetchExternalAccounts(main_user, this.getAccountsRealTimeSuccess.bind(this), this.getAccountsRealTimeError.bind(this));
    },
    /**
     * Description
     * @method getAccountsRealTime success
     * @return 
     */
    getAccountsRealTimeSuccess: function () {
        this.mapAccountsAndBanks();
    },
    /**
     * Description
     * @method getAccountsRealTime success
     * @return 
     */
    getAccountsRealTimeError: function () {
        //do nothing
    },
    /**
     * Description
     * @method initActions
     * @return 
     */
    initActions: function () {
        var scope = this;
        this.view.flxPrevMonth.onClick = this.prevMonthClick.bind(this);
        this.view.flxNextMonth.onClick = this.nextMonthClick.bind(this);
//         this.view.flxDummyHorizontalScroll.onScrolling = function () {
//             if (scope.view.flxDashboard.zIndex === 6) {
//                 var scrollX = scope.view.flxDummyHorizontalScroll.contentOffsetMeasured.x;
//                 scope.view.flxDashboardHeader.setContentOffset({
//                     "x": scrollX + "dp"
//                 });
//             }
//             scope.pageIndicatorHighlight();
//         };
//         this.view.btnViewAllTransactions.onClick = this.viewAllTransactions.bind(this);
        this.view.flxDashboardHeader.onScrolling = function () {
//             if (scope.view.flxDashboard.zIndex === 3) {
//                 var scrollX = scope.view.flxDashboardHeader.contentOffsetMeasured.x;
//                 scope.view.flxDummyHorizontalScroll.setContentOffset({
//                     "x": scrollX + "dp"
//                 });
//             }
            scope.pageIndicatorHighlight();
        };
//         this.view.flxDashboard.onScrolling = function () {
//             var vScroll = scope.view.flxDashboard.contentOffsetMeasured.y;
//             if (!applicationManager.getDeviceUtilManager().isIpad()) {
//                 scope.view.flxDashboardHeader.top = Math.round(vScroll * -0.3) + 56 + "dp";
//                 scope.view.flxGradient.top = Math.round(vScroll * -0.3) + 56 + "dp";
//              //   scope.view.flxPageIndicators.top = Math.round(vScroll * -0.3) + 56 + 230 + "dp";
//             } else {
//                 scope.view.flxDashboardHeader.top = Math.round(vScroll * -0.3) + "dp";
//                 scope.view.flxGradient.top = Math.round(vScroll * -0.3) + "dp";
//                // scope.view.flxPageIndicators.top = Math.round(vScroll * -0.3) + 230 + "dp";
//             }
//         };
        this.view.flxChartSizeToggle.onTouchEnd = this.animateDashboardFlex.bind(this);
        var configManager = applicationManager.getConfigurationManager();
        var MenuHandler =  applicationManager.getMenuHandler();
        MenuHandler.setUpHamburgerForForm(scope, configManager.constants.MENUACCOUNTS);
        this.view.flxSelectAccount.onClick = function () {
            //             if (scope.view.flxGraph.height !== "0dp") {
            //                 scope.showGraph();
            //             }
            scope.showAllAccountTypes();
        }
        //this.view.segAccountTypes.onRowClick = this.selectedClickedAccount;
        //scope.view.segAccounts.onTouchEnd = this.onScrollingSegment;

    },
    animateDashboardFlex: function () {
        var scope = this;

//         scope.view.flxDashboard.setContentOffset({
//             y: "0dp"
//         });
        if (scope.view.imgChartSizeToggle.src == "arrowdown.png") {
          
//           	scope.view.flxDonutSegment.opacity = 1;
//           	scope.view.flxBarSegment.opacity = 1;
//           	scope.view.flxSummarySegment.opacity = 1;
          
//             scope.view.flxDonutSegment.isVisible  = true;
//             scope.view.flxBarSegment.isVisible  = true;
//             scope.view.flxSummarySegment.isVisible = true;
            var height = 0;
            //   var newHeight = kony.os.deviceInfo().screenHeight - 40;
            //var newHeight = scope.view.flxBGDummy.frame.height;
//             if (kony.os.deviceInfo().name === "android") {
//                 newHeight = newHeight - 56;
//             }

            //   var segMaxHeight=newHeight-362;
//             var segMaxHeight = newHeight - 514;// -260 -1 -42 - 1 -60 -75(-segtop-sep-date-sep-btn-toggle)
//             newHeight = newHeight + "dp";
//             scope.view.flxGradient.height = newHeight;
             scope.view.imgChartSizeToggle.src = "arrowup.png";
//             scope.view.flxDashboardHeader.height = newHeight;
//             scope.view.segTransactions.height = segMaxHeight + "dp";
//             scope.view.segSummary.height = segMaxHeight + 60 + "dp";
//             scope.view.segBar.height = segMaxHeight + 60 + "dp";
//             scope.view.flxSummarySegment.height = segMaxHeight + 104 + "dp";
//             scope.view.flxBarSegment.height = segMaxHeight + 104 + "dp";
//             scope.view.flxDonutSegment.height = segMaxHeight + 104 + "dp";

//             if (kony.os.deviceInfo().name === "iPad") {
//                 scope.view.flxDashboard.animate(
//                     kony.ui.createAnimation({
//                         0: {
//                             bottom: "60dp",
//                             "stepConfig": {}
//                         },
//                         100: {
//                             bottom: "0dp",
//                             "stepConfig": {
//                                 "timingFunction": kony.anim.EASE
//                             }
//                         }
//                     }), {
//                         fillMode: kony.anim.FILL_MODE_FORWARDS,
//                         duration: .3
//                     }, {
//                         animationEnd: function () { }
//                     }
//                 );
//                 scope.view.flxMenu.animate(
//                     kony.ui.createAnimation({
//                         0: {
//                             bottom: "0dp",
//                             "stepConfig": {}
//                         },
//                         100: {
//                             bottom: "-60dp",
//                             "stepConfig": {
//                                 "timingFunction": kony.anim.EASE
//                             }
//                         }
//                     }), {
//                         fillMode: kony.anim.FILL_MODE_FORWARDS,
//                         duration: .3
//                     }, {
//                         animationEnd: function () { }
//                     }
//                 );
//             }
         	// scope.view.browserChart.height = "40%";
          	scope.view.segAccounts.height = "50%";
            this.view.flxDashboard.animate(
                kony.ui.createAnimation({
                    0: {
                        top: "30%",
                        "stepConfig": {}
                    },
                    100: {
                        top: "60%",
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE
                        }
                    }
                }), {
                    fillMode: kony.anim.FILL_MODE_FORWARDS,
                    duration: .3
                }, {
                    animationEnd: function () {
                      		
          				
//                       	scope.view.flxNetSummary.height = "40%";
//                       	scope.view.flxSummarySegment.height = "60%";
//                       	scope.view.allBalanceChart.height = "40%";
//                       	scope.view.flxBarSegment.height = "60%";
//                         scope.view.flxDashboard.enableScrolling = false;
//                         scope.view.flxDashboard.zIndex = 3;
//                         scope.view.flxPageIndicators.top = "26%";
                    }
                });
          
          	
//           	this.view.flxDonutSegment.animate(kony.ui.createAnimation({
//                     0: {
//                         height: "0%",
//                         "stepConfig": {}
//                     },
//                     100: {
//                         height: "60%",
//                         "stepConfig": {
//                             "timingFunction": kony.anim.EASE
//                         }
//                     }
//                 }), {
//                     fillMode: kony.anim.FILL_MODE_FORWARDS,
//                     duration: .3
//                 }, {
//                     animationEnd: function () {
                                            

//                       	scope.view.browserChart.height = "40%";
//           				scope.view.flxDonutSegment.isVisible = true;
//           				scope.view.flxDonutSegment.height = "60%";
//                       	scope.view.flxNetSummary.height = "40%";
//                       	scope.view.flxSummarySegment.height = "60%";
//                       	scope.view.allBalanceChart.height = "40%";
//                       	scope.view.flxBarSegment.height = "60%";
//                         scope.view.flxDashboard.enableScrolling = false;
//                         scope.view.flxDashboard.zIndex = 3;
//                       scope.view.flxPageIndicators.top = "26%";
//                     }
//                 });


        } else {
            scope.view.imgChartSizeToggle.src = "arrowdown.png";
            //scope.view.flxDashboard.zIndex = 6;
          	
//             if (kony.os.deviceInfo().name === "iPad") {
//                 scope.view.flxDashboard.animate(
//                     kony.ui.createAnimation({
//                         0: {
//                             bottom: "0dp",
//                             "stepConfig": {}
//                         },
//                         100: {
//                             bottom: "60dp",
//                             "stepConfig": {
//                                 "timingFunction": kony.anim.EASE
//                             }
//                         }
//                     }), {
//                         fillMode: kony.anim.FILL_MODE_FORWARDS,
//                         duration: .3
//                     }, {
//                         animationEnd: function () { }
//                     }
//                 );
//                 scope.view.flxMenu.animate(
//                     kony.ui.createAnimation({
//                         0: {
//                             bottom: "-60dp",
//                             "stepConfig": {}
//                         },
//                         100: {
//                             bottom: "0dp",
//                             "stepConfig": {
//                                 "timingFunction": kony.anim.EASE
//                             }
//                         }
//                     }), {
//                         fillMode: kony.anim.FILL_MODE_FORWARDS,
//                         duration: .3
//                     }, {
//                         animationEnd: function () { }
//                     }
//                 );
//             }
          	scope.view.segAccounts.height = "95%";
            scope.view.flxDashboard.animate(
                kony.ui.createAnimation({
                    0: {
                        top: "60%",
                        "stepConfig": {}
                    },
                    100: {
                        top: "30%",
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE
                        }
                    }
                }), {
                    fillMode: kony.anim.FILL_MODE_FORWARDS,
                    duration: .3
                }, {
                    animationEnd: function () {
                      		
//                       scope.view.browserChart.height = "100%";
//           				scope.view.flxDonutSegment.height = "0%";
//                       	scope.view.flxNetSummary.height = "100%";
//                       	scope.view.flxSummarySegment.height = "0%";
//                       	scope.view.allBalanceChart.height = "100%";
//                       	scope.view.flxBarSegment.height = "00%";
//                       scope.view.flxPageIndicators.top = "29%";
                      //              
//                         scope.view.flxDashboard.enableScrolling = true;
                    }
                });
        }
       //scope.view.flxDummyHorizontalScroll.enableScrolling = true;
    },
    pageIndicatorHighlight: function () {
      try{
        for (var index = 1; index <= this.view.flxPageIndicators.widgets().length; index++) {
            this.view["flxPageIndicator" + index].skin = "sknFlxPageIndicatorUnselected";
        }
        var scrollX = this.view.flxDashboardHeader.contentOffsetMeasured.x;
        var screenWidth = kony.os.deviceInfo().screenWidth;
        var chartNum = Math.round(scrollX / screenWidth) + 1;
        this.view["flxPageIndicator" + chartNum].skin = "sknFlxPageIndicatorSelected";
      }
      catch(exception){
        
      }
      },

    /**
     * Description
     * @method onScrollingDashboard
     * @return 
     */
    onScrollingDashboard: function () {
        return;
        var scope = this;
        if (this.view.flxSuggestedOffers.isVisible === true) {
            return;
        }
        if (this.view.flxSpendingBudget.isVisible === true) {
            return;
        }
        var flxy = scope.view.flxDashboard.contentOffsetMeasured.y;
        if (flxy >= 110) {
            scope.view.segAccounts.height = "100%";
            scope.view.forceLayout();
        }
    },
    /**
     * Description
     * @method onScrollingSegment
     * @return 
     */
    onScrollingSegment: function () {
        return;
        var scope = this;
        if (scope.view.flxGraph.height !== "0dp") {
            scope.showGraph();
        }
        if (scope.view.flxAccountTypes.height !== "0dp") {
            scope.showAllAccountTypes();
        }
        if (scope.view.segAccounts.height !== "preferred") {
            var segy = scope.view.segAccounts.contentOffsetMeasured.y;
            if (segy <= 1) {
                scope.view.segAccounts.height = "preferred";
                scope.view.forceLayout();
            }
        }
    },
    /**
* Description
* @method viewTransactionsOnClick
* @return 
*/
    viewAllTransactions: function () {
        try {
            applicationManager.getPresentationUtility().showLoadingScreen();
            this.currentTransactions = 0;
            this.totalTransactions = this.CATEGORY_COUNT;
            for (i = 1; i <= this.CATEGORY_COUNT; i++) {
                this.fetchTransactions(this.currentMonth, i);
            }
        } catch (exception) {
            //replace
        }
    },


    /**
     * Description
     * @method fetchTransactions
     * @param {} monthId
     * @param {} categoryId
     * @return 
     */
    fetchTransactions: function (monthId, categoryId) {
        try {
            this.transactions = [];
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            var inputParams = {
                "monthId": monthId + "",
                "categoryId": categoryId + ""
            };
            accountMod.presentationController.getPFMTransactions(inputParams, this.fetchTransactionsSuccess.bind(this), this.fetchTransactionsFailure.bind(this));
        } catch (exception) {
            //replace
        }
    },
    /**
     * Description
     * @method fetchTransactionsSuccess
     * @param {} response
     * @return 
     */
    fetchTransactionsSuccess: function (response) {
        try {
            this.currentTransactions++;
            Array.prototype.push.apply(this.transactions, response);
            if (this.currentTransactions === this.totalTransactions) {
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("frmPFMCategorisedTransactions", this.transactions);
                var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
				accountModule.presentationController.commonFunctionForNavigation("frmPFMCategorisedTransactions");
            }
        } catch (exception) {
            //replace
        }
    },
    /**
     * Description
     * @method fetchTransactionsFailure
     * @param {} response
     * @return 
     */
    fetchTransactionsFailure: function (response) {
        try {
            this.currentTransactions++;
        } catch (exception) {
            //replace
        }
    },

    /**
     * Description
     * @method showGraph
     * @return 
     */
    showGraph: function () {
        var scope = this;
        var heightValue;
        if (this.view.flxGraph.height === "0dp") {
            heightValue = "245dp";
        } else {
            heightValue = "0dp";
        }

        this.view.flxGraph.animate(
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
                /**
                 * Description
                 * @return 
                 */
                "animationEnd": function () {
                    if (heightValue === "0dp") {
                        scope.view.imgShowGraph.src = "dashboardicon.png";
                    } else {
                        scope.view.imgShowGraph.src = "dbicon_up.png";
                    }
                    scope.view.forceLayout();
                }
            });
    },
    /**
     * Description
     * @method selectedClickedAccount
     * @return 
     */
    selectedClickedAccount: function () {
        this.showAllAccountTypes();
        var selectedItem = this.view.segAccountTypes.selectedItems[0];
        this.view.lblSelectedAccountType.text = selectedItem.lblName.text;
        var data = this.view.segAccountTypes.data;
        for (i = 0; i < data.length; i++) {
            if (selectedItem.lblName.text == data[i].lblName.text) {
                data[i].lblName.skin = this.selectedBankSkin;
                data[i].imgIcon = "tick.png";
            } else {
                data[i].lblName.skin = this.otherBankSkin;
                data[i].imgIcon = "";
            }
        }
        this.view.segAccountTypes.setData(data);
        var navManager = applicationManager.getNavigationManager();
        var internalCustom = navManager.getCustomInfo("frmDashboard");
        var externalCustom = navManager.getCustomInfo("frmDashboardAggregated");
        var internalAccounts = this.clone(internalCustom.accountData);
        var externalAccounts = this.clone(externalCustom.accountData);
        if (this.view.lblSelectedAccountType.text == "ALL ACCOUNTS") {
            this.setAccountsInfo(internalAccounts, externalAccounts, "ALL ACCOUNTS");
        } else {
            this.setAccountsInfo(internalAccounts, externalAccounts, selectedItem.lblName.text);
        }
    },
    /**
     * Description
     * @method showAllAccountTypes
     * @return 
     */
    showAllAccountTypes: function () {
        var scope = this;
        var visibleValue = true;
        // var arrowDirection = "arrowup.png";

        if (this.view.flxAccountTypes.isVisible) {
            visibleValue = false;
            //  arrowDirection = "arrowdown.png";
        }
        this.view.flxAccountTypes.isVisible = visibleValue;
        //  this.view.imgShowAllAccounts.src = arrowDirection;
        this.view.forceLayout();

    },
    /**
     * Description
     * @method setSelectAccountTypeData
     * @return 
     */
    setSelectAccountTypeData: function () {
        var data = [{
            "lblName": {
                "text": "ALL ACCOUNTS",
                "skin": "sknLblda8b08SSPRegular26px"
            },
            "imgIcon": "tick.png"
        },
        {
            "lblName": {
                "text": "CITI BANK ACCOUNTS",
                "skin": "sknLbl0095e4SSPRegular26px"
            },
            "imgIcon": ""
        },
        {
            "lblName": {
                "text": "BANK OF AMERICA ACCOUNTS",
                "skin": "sknLbl0095e4SSPRegular26px"
            },
            "imgIcon": ""
        },
        {
            "lblName": {
                "text": "BANK OF AMERICA ACCOUNTS",
                "skin": "sknLbl0095e4SSPRegular26px"
            },
            "imgIcon": ""
        },
        ]

        this.view.segAccountTypes.setData(data);
    },
    /**
     * Description
     * @method setAccountsData
     * @return 
     */
    setAccountsData: function () {
        var data = [
            [{
                "lblTypeName": "Checking Accounts (3)",
                "lblTypeValue": "$127,912.00"
            },
            [{
                "imgBank": "bankofamerica.png",
                "lblAccountBal": "Available Balance",
                "lblAccountBalValue": "$42,304.00",
                "lblAccountName": "My Checking…2343",
                "lblBankName": "Bank of America"
            },
            {
                "imgBank": "chasebank.png",
                "lblAccountBal": "Available Balance",
                "lblAccountBalValue": "$42,304.00",
                "lblAccountName": "Little John…2343",
                "lblBankName": "Citi Bank"
            },
            {
                "imgBank": "citibank.png",
                "lblAccountBal": "Available Balance",
                "lblAccountBalValue": "$42,304.00",
                "lblAccountName": "Honey home…2343",
                "lblBankName": "Chase Bank"
            },
            ]
            ],
            [{
                "lblTypeName": "Saving Accounts (3)",
                "lblTypeValue": "$83,912.00"
            },
            [{
                "imgBank": "bankofamerica.png",
                "lblAccountBal": "Available Balance",
                "lblAccountBalValue": "$42,304.00",
                "lblAccountName": "My Saving…2343",
                "lblBankName": "Citi Bank"
            },
            {
                "imgBank": "citibank.png",
                "lblAccountBal": "Available Balance",
                "lblAccountBalValue": "$42,304.00",
                "lblAccountName": "John Saving…2343",
                "lblBankName": "Chase Bank"
            },
            ]
            ],
            [{
                "lblTypeName": "Credit Cards (3)",
                "lblTypeValue": "$83,912.00"
            },
            [{
                "imgBank": "chasebank.png",
                "lblAccountBal": "Available Balance",
                "lblAccountBalValue": "$42,304.00",
                "lblAccountName": "Kony Corel Card…2343",
                "lblBankName": "Citi Bank"
            },
            {
                "imgBank": "citibank.png",
                "lblAccountBal": "Available Balance",
                "lblAccountBalValue": "$42,304.00",
                "lblAccountName": "Little John…2343",
                "lblBankName": "Chase Bank"
            },
            ]
            ],
            [{
                "lblTypeName": "Loans (1)",
                "lblTypeValue": ""
            },
            [{
                "imgBank": "bankofamerica.png",
                "lblAccountBal": "Available Balance",
                "lblAccountBalValue": "$42,304.00",
                "lblAccountName": "My Checking…2343",
                "lblBankName": "Citi Bank"
            }]
            ],
            [{
                "lblTypeName": "Deposits (1)",
                "lblTypeValue": ""
            },
            [{
                "imgBank": "citibank.png",
                "lblAccountBal": "Available Balance",
                "lblAccountBalValue": "$42,304.00",
                "lblAccountName": "My Checking…2343",
                "lblBankName": "Citi Bank"
            }]
            ],
            [{
                "lblTypeName": "Deposits (1)",
                "lblTypeValue": ""
            },
            [{
                "imgBank": "citibank.png",
                "lblAccountBal": "Available Balance",
                "lblAccountBalValue": "$42,304.00",
                "lblAccountName": "My Checking…2343",
                "lblBankName": "Citi Bank"
            }]
            ],
            [{
                "lblTypeName": "Deposits (1)",
                "lblTypeValue": ""
            },
            [{
                "imgBank": "citibank.png",
                "lblAccountBal": "Available Balance",
                "lblAccountBalValue": "$42,304.00",
                "lblAccountName": "My Checking…2343",
                "lblBankName": "Citi Bank"
            }]
            ],
            [{
                "lblTypeName": "Deposits (1)",
                "lblTypeValue": ""
            },
            [{
                "imgBank": "citibank.png",
                "lblAccountBal": "Available Balance",
                "lblAccountBalValue": "$42,304.00",
                "lblAccountName": "My Checking…2343",
                "lblBankName": "Citi Bank"
            }]
            ],
            [{
                "lblTypeName": "Deposits (1)",
                "lblTypeValue": ""
            },
            [{
                "imgBank": "citibank.png",
                "lblAccountBal": "Available Balance",
                "lblAccountBalValue": "$42,304.00",
                "lblAccountName": "My Checking…2343",
                "lblBankName": "Citi Bank"
            }]
            ],
        ];
        this.view.segAccounts.setData(data);
    },
    /**
     * Description
     * @method clone
     * @param {} source
     * @return result
     */
    clone: function (source) {
        var result = source,
            i, len;
        if (!source ||
            source instanceof Number ||
            source instanceof String ||
            source instanceof Boolean) {
            return result;
        } else if (Object.prototype.toString.call(source).slice(8, -1) === 'Array') {
            result = [];
            var resultLen = 0;
            for (i = 0, len = source.length; i < len; i++) {
                result[resultLen++] = this.clone(source[i]);
            }
        } else if (typeof source == 'object') {
            result = {};
            for (i in source) {
                if (source.hasOwnProperty(i)) {
                    result[i] = this.clone(source[i]);
                }
            }
        }
        return result;
    },
    accountSegmentOnClick: function () {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var rowid = this.view.segAccounts.selectedRowIndex[1];
        var selectedAccountId = this.view.segAccounts.data[rowid]["accountID"];

        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        var processedAccountsData = accountMod.presentationController.fetchAccountTransactions(selectedAccountId);

    },

    accountAggregatedSegmentOnClick: function () {
        var self = this;
        var sectionId = this.view.segAccounts.selectedIndices[0][0];
        var rowId = this.view.segAccounts.selectedIndices[0][1][0];
        var rowData = this.view.segAccounts.data[sectionId][1][rowId];
        var main_user = applicationManager.getUserPreferencesManager().getUserName();
        var userName = (!kony.sdk.isNullOrUndefined(rowData.Username) ? rowData.Username : rowData.AccountHolder);
        var bankId = parseInt(rowData.Bank_id, 10);
        var account = rowData.AccountName;
        var AccountDetailsObj = {
            "accountName": rowData.AccountName,
            "lastUpdated": rowData.LastUpdated,
            "availableBalance": rowData.AvailableBalance,
            "type": rowData.type,
            "accountID": rowData.Account_id,
          	"nickName" : rowData.NickName
        };
        if (rowData.type === "internal") {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var selectedAccountId = rowData.AccountId;
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            var processedAccountsData = accountMod.presentationController.fetchAccountTransactions(selectedAccountId);

        } else {
            if (rowData.error && rowData.error !== " ") {
                var alertmessage = kony.i18n.getLocalizedString("kony.mb.externalAccounts.ErrorInFetchingAccountBalanceOptionForRetryAndRemove");
                var yesText = kony.i18n.getLocalizedString("kony.mb.common.tryagian");
                var noText = kony.i18n.getLocalizedString("kony.mb.externalAccounts.remove");
                var basicConfig = {
                    "alertType": constants.ALERT_TYPE_CONFIRMATION,
                    "alertTitle": "",
                    "yesLabel": yesText,
                    "noLabel": noText,
                    "message": alertmessage,
                    "alertHandler": alertHandler
                };
                applicationManager.getPresentationUtility().showAlertMessage(basicConfig, {});

            } else {
                applicationManager.getPresentationUtility().showLoadingScreen();
                var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                accountMod.presentationController.fetchAccountExternalTransactions(main_user, userName, bankId, account, AccountDetailsObj);
            }

            function successCallback(response) {
                var formatUtility = applicationManager.getFormatUtilManager();
                rowData.AvailableBalance = formatUtility.formatAmountandAppendCurrencySymbol(response[0].AvailableBalance);
                rowData.LastUpdated = kony.i18n.getLocalizedString("kony.mb.AccountsAggregated.JustNow");
                rowData.error = " ";
                rowData.errorIcon = "";
                self.view.segAccounts.setDataAt(rowData, rowId, sectionId);
                applicationManager.getPresentationUtility().dismissLoadingScreen();
            }

            function deleteAccountSuccessCallback() {
                var navManager = applicationManager.getNavigationManager();
                var externalCustom = navManager.getCustomInfo("frmDashboardAggregated");
                var data = externalCustom.accountData;
                for (var i in data) {
                    if (String(data[i].Bank_id).trim() === String(bankId).trim() && String(data[i].Username).trim() === String(userName).trim() && String(data[i].AccountName).trim() === String(account).trim()) {
                        data.splice(i, 1);
                        break;
                    }
                }
                self.mapAccountsAndBanks();
            }

            function deleteAccountErrorCallback() {
                alert("Unable to remove");
            }

            function alertHandler(response) {
                var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                if (response === true) {
                    applicationManager.getPresentationUtility().showLoadingScreen();
                    accountMod.presentationController.fetchSingleAccountDetails(main_user, userName, bankId, account, successCallback); ///*rowData.main_user*/, rowData.AccountHolder, rowData.Bank_id, rowData.AccountName, successCallback);//(user_id, username, bank_id, account);
                } else {
                    accountMod.presentationController.deleteExternalAccount({
                        mainUser: main_user,
                        userName: userName,
                        bankId: bankId,
                        accountName: account,
                        loopCount: "1"
                    }, deleteAccountSuccessCallback, deleteAccountErrorCallback);
                }
            }
        }

    },

    adsPreshow: function () {
        if (!this.adsHided) {
            this.resetAdsUI();
            var navManager = applicationManager.getNavigationManager();
            var formData = navManager.getCustomInfo("frmDashboardAggregated");
            if (formData.inFeedAdData) {
                if (formData.inFeedAdData.length !== 0) {
                    this.inFeedAdData = formData.inFeedAdData;
                    this.bindAdData();
                }
                else {
                    this.hideAds();
                }
            }
            else {
                this.hideAds();
            }
        }
    },
    bindAdData: function () {
        var inFeedAdData = this.inFeedAdData;
        this.numOfAds = inFeedAdData.length;
        var param;
        var date = new Date();
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        for (var j = 1; j <= this.numOfAds; j++) {
            param = date.getTime();
            this.view["flxAd" + j].left = "0dp";
            this.view["flxAd" + j].setVisibility(false);
            var imgUrl = deviceUtilManager.getImageURLBasedOnDeviceType(inFeedAdData[j - 1].imageURL);
            this.view["imgAd" + j].src = imgUrl + "?Param=" + param;
        }
    },
    resetAdsUI: function () {
        this.currAdFlex = 1;
        this.numOfAds = 0;
        this.imageObjArray = [];
        this.imageDownloadFailureCount = 0;
        this.xOffset = 0;
        this.isSwipeDone = false;
        this.isTapDone = false;
        this.removeGestureRecognisers();
        this.view.flxScrollContainerAds.setContentOffset({
            x: this.xOffset,
            y: 0
        }, true);
        this.view.flxLoadingIndicator.setVisibility(true);
        this.view.imgLoadingIndicator.src = "loadermedium.gif";
        this.view.flxAdInfo.setVisibility(false);
        for (var i = 1; i <= 5; i++) {
            this.view["flxAd" + i].setVisibility(false);
            this.view["flxProgressButton" + i].setVisibility(false);
        }
        this.view.flxProgressBar.forceLayout();
        this.view.flxProgressBar.setVisibility(false);
    },
    onAdDownloadComplete: function (issuccess, adNumber) {
        if (issuccess) {
            var i = this.imageObjArray.length;
            this.alignFlexInScrollContainer(i + 1, adNumber);
            if (i === 0) {
                this.setGestureRecogniser();
                this.setDataForAd(adNumber);
                var loggerManager = applicationManager.getLoggerManager();
   				loggerManager.setCustomMetrics(this,true,"#InfeedAds Displayed");
            }
            this.imageObjArray[i] = adNumber;
        } else {
            this.imageDownloadFailureCount++;
            if (this.imageDownloadFailureCount === this.numOfAds) {
                var logger = applicationManager.getLoggerManager();
                logger.log("####All Infeed Ad's download failed\n####Therefore Hiding Them");
                this.onAllAdsDownloadFailure();
            }
        }
    },
    removeGestureRecognisers: function () {
        if (this.gestIDs.length !== 0) {
            var swipeGestureID = this.gestIDs[0];
            var tapGestureID = this.gestIDs[1];
            this.view.flxScrollContainerAds.removeGestureRecognizer(swipeGestureID);
            this.view.flxScrollContainerAds.removeGestureRecognizer(tapGestureID);
            this.gestIDs = [];
        }
    },
    setGestureRecogniser: function () {
        if (this.gestIDs.length === 0) {
            var swipeGestID = this.view.flxScrollContainerAds.setGestureRecognizer(2, {
                fingers: 1,
                swipedistance: 20,
                swipevelocity: 60
            }, this.onAdSwipe);
            var tapGestID = this.view.flxScrollContainerAds.setGestureRecognizer(1, {
                fingers: 1,
                taps: 1
            }, this.onAdTap);
            this.gestIDs[0] = swipeGestID;
            this.gestIDs[1] = tapGestID;
        }
        this.view.rtxDetails.onClick = this.onAdTap;
    },
    onAllAdsDownloadFailure: function () {
        this.view.imgLoadingIndicator.src = "addownloadfailed.png";
    },
    alignFlexInScrollContainer: function (position, flxNumber) {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        if (position === 1) {
            this.view.flxProgressBar.setVisibility(true);
            this.view["flxAd" + flxNumber].setVisibility(true);
            this.view.flxLoadingIndicator.setVisibility(false);
        } else {
            var leftVal = (position - 1) * parseInt(deviceUtilManager.getDeviceInfo().screenWidth);
            this.view["flxAd" + flxNumber].left = leftVal + "dp";
            this.view["flxAd" + flxNumber].setVisibility(true);
        }
        var noOfDownloadedAds = position;
        if (noOfDownloadedAds > 1) {
            if (noOfDownloadedAds === 2) {
                this.view.flxProgressButton1.setVisibility(true);
                this.view.flxProgressButton2.setVisibility(true);
                this.view.flxProgressButton1.left = "46%";
                this.view.flxProgressButton1.skin = "sknflxADADADRadius100px";
                this.view.flxProgressButton2.skin = "sknflxE3E3E3Radius100px";
            } else if (noOfDownloadedAds === 3) {
                this.view.flxProgressButton3.setVisibility(true);
                this.view.flxProgressButton3.skin = "sknflxE3E3E3Radius100px";
                this.view.flxProgressButton1.left = "43.5%";
            } else if (noOfDownloadedAds === 4) {
                this.view.flxProgressButton4.setVisibility(true);
                this.view.flxProgressButton4.skin = "sknflxE3E3E3Radius100px";
                this.view.flxProgressButton1.left = "41%";
            } else {
                this.view.flxProgressButton5.setVisibility(true);
                this.view.flxProgressButton5.skin = "sknflxE3E3E3Radius100px";
                this.view.flxProgressButton1.left = "38%";
            }
            this.view.flxProgressBar.forceLayout();
        }
    },
    setDataForAd: function (adNumber) {
        var adData = this.inFeedAdData[adNumber - 1];
        this.view.lblHeading.text = adData.adTitle;
        this.view.rtxDetails.text = adData.description;
        this.view.flxAdInfo.setVisibility(true);
        this.view.flxAdInfo.forceLayout();
        var loggerManager = applicationManager.getLoggerManager();
   		loggerManager.setCustomMetrics(this,true,"#InfeedAd"+adNumber+" Displayed"); 
    },
    onAdSwipe: function (widget, gestureInfo, context) {
        var downloadedAdCount = this.imageObjArray.length;
        var xVal = this.xOffset;
        var scWidth = applicationManager.getDeviceUtilManager().getDeviceInfo().screenWidth;
        var isThereChange = false;
        if(!this.isSwipeDone)
          {
        	var loggerManager = applicationManager.getLoggerManager();
   			loggerManager.setCustomMetrics(this,true,"#InfeedAds Swiped"); 
    	    this.isSwipeDone = true;
          }
        if (gestureInfo.swipeDirection === 1) {
            if (this.currAdFlex >= 1 && this.currAdFlex < downloadedAdCount) {
                isThereChange = true;
                xVal = xVal + scWidth;
                this.currAdFlex++;
            }
        } else if (gestureInfo.swipeDirection === 2) {
            if (this.currAdFlex > 1 && this.currAdFlex <= downloadedAdCount) {
                isThereChange = true;
                xVal = xVal - scWidth;
                this.currAdFlex--;
            }
        }
        if (isThereChange) {
            this.view.flxScrollContainerAds.setContentOffset({
                x: xVal,
                y: 0
            }, true);
            var adNumber = this.imageObjArray[this.currAdFlex - 1];
            this.setDataForAd(adNumber);
            for (var j = 1; j <= downloadedAdCount; j++) {
                if (j === this.currAdFlex) {
                    this.view["flxProgressButton" + j].skin = "sknflxADADADRadius100px";
                } else {
                    this.view["flxProgressButton" + j].skin = "sknflxE3E3E3Radius100px";
                }
            }
            this.xOffset = xVal;
            this.view.flxProgressBar.forceLayout();
            this.view.flxScrollContainerAds.forceLayout();
        }
    },
    onAdTap: function () {
        var adNumber = this.imageObjArray[this.currAdFlex - 1];
        var adData = this.inFeedAdData[adNumber - 1];
        var navUrl = adData.navigationURL;
        kony.application.openURL(navUrl);
        var navId = adData.navigationId;
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.sendDmResponseForInfeedAds(navId);
        var loggerManager = applicationManager.getLoggerManager();
   	    if(!this.isTapDone)
          {
            loggerManager.setCustomMetrics(this,true,"#InfeedAds Tapped");
    	    this.isTapDone = true;
          }
        loggerManager.setCustomMetrics(this,true,"#InfeedAd"+adNumber+" Image Tapped"); 
    },
    hideAds: function () {
        this.adsHided = true;
        this.view.flxSuggestedOffers.setVisibility(false);
    }


});