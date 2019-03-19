define({
  	init : function(){
      try {
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }
    },
    /**
     * Description
     * @method preshow
     * @return 
     */
    preshow: function() {
      try {
        var navManager = applicationManager.getNavigationManager();
      	var isMainScreen = navManager.getCustomInfo("navigationToTransactions");
      	if(isMainScreen === false){
          return;
        }
        var transactions = this.clone(navManager.getCustomInfo("frmPFMCategorisedTransactions"));
         
        
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.setFlowActions();
        this.setTransactionTypesSegmentData();
        this.setCategorizedTransactions(transactions);
      	this.view.lblSelectedType.text = "CATEGORIZED TRANSACTIONS";
      	this.view.tbxSearch.text = "";
      	this.currentSelected = "categorised";
		this.view.tbxSearch.onTextChange = this.searchAndShowTransactions.bind(this);
      	this.view.tbxSearch.onDone = this.searchAndShowTransactions.bind(this);
      	this.view.forceLayout();
   		var currentForm=navManager.getCurrentForm();
   		applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      }
      catch(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }
    },
    fetchPFMCategories: function() {
      try {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.getPFMCategories(this.fetchPFMCategoriesSuccess.bind(this), this.fetchPFMCategoriesFailure.bind(this));   
      }
      catch(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }
    },  
    fetchPFMCategoriesSuccess: function(response) {

      try {
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmPFMAdvancedSearch", response);
        this.navigateToPFMAdvanceSearch();
      }catch(err){}
    },
    fetchPFMCategoriesFailure: function(response) {
      try {
        alert("Error fetching categories : " + JSON.stringify(response));
      }
      catch(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }
    },
    navigateToPFMAdvanceSearch: function() {
      var navManager = applicationManager.getNavigationManager();
      var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");      
      accountMod.presentationController.commonFunctionForNavigation("frmPFMAdvancedSearch");        
    },
    /**
     * Description
     * @method setCategorizedTransactions
     * @param {} transactions
     * @return 
     */
    setCategorizedTransactions: function(transactions) {
        try {
            var formatUtility = applicationManager.getFormatUtilManager();
            var transactionCategories = {};
            var transactionData = [];
            transactions.forEach(function(transaction) {
                if (!transactionCategories[transaction.categoryName]) {
                    transactionCategories[transaction.categoryName] = [];
                }
                transactionCategories[transaction.categoryName].push(transaction);

                var date = transaction.transactionDate;

                transaction.transactionDate = date.substr(5, 2) + "/" + date.substr(8, 2) + "/" + date.substr(0, 4);
                transaction.transactionAmount = "-" + formatUtility.formatAmountandAppendCurrencySymbol(transaction.transactionAmount);
            });

            transactionCategories = this.sortObject(transactionCategories);
            for (var category in transactionCategories) {
              	if(category.toLowerCase() == "uncategorised" || category.toLowerCase()=="uncategorized"){
                  continue;
                }
                var tempTransaction = [];
                var headerData = {
                    "header": kony.i18n.getLocalizedString("kony.mb.PFM."+category),
                    "template": "flxTransHeader"
                };
                var bodyData = transactionCategories[category];
                tempTransaction.push(headerData);
                tempTransaction.push(bodyData);
                transactionData.push(tempTransaction);
            }


            this.view.segTransactions.widgetDataMap = {
                "flxShadow": "flxShadow",
                "flxTransHeader": "template",
                "imgUpArrow": "imgUpArrow",
                "lblDate": "transactionDate",
                "lblHeader": "header",
                "lblTransaction": "transactionDescription",
                "lblTransactionAmount": "transactionAmount",
                "segTransHeader": "segTransHeader",
                "segTransactions": "segTransactions"
            };
          	this.transactions = transactionData;
            this.view.segTransactions.setData(transactionData);
            this.categorisedData = transactionData;
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        }
        catch(err) {
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    /**
     * Description
     * @method setUncategorizedTransactions
     * @param {} transactions
     * @return 
     */
    setUncategorizedTransactions: function(transactions) {
        try {
            var formatUtility = applicationManager.getFormatUtilManager();

            var uncategorisedData = [];
          	for(var i=0;i<transactions.length;i++){
			if(transactions[i].categoryName.toLowerCase() =="uncategorised" || transactions[i].categoryName.toLowerCase()=="uncategorized"){
           
              	var transactionJSON = {};
              
              	var date = transactions[i].transactionDate;
              	transactionJSON.categoryName = transactions[i].categoryName;
                transactionJSON.toAccountName = transactions[i].toAccountName;
                transactionJSON.fromAccountName = transactions[i].fromAccountName;
                transactionJSON.transactionNotes = transactions[i].transactionNotes;
              	transactionJSON.toAccountNumber = transactions[i].toAccountNumber;
              	transactionJSON.fromAccountNumber = transactions[i].fromAccountNumber;
              	transactionJSON.transactionDescription = transactions[i].transactionDescription;
              	transactionJSON.transactionId = transactions[i].transactionId;
              	transactionJSON.categoryId = transactions[i].categoryId;
                transactionJSON.transactionDate = date.substr(5, 2) + "/" + date.substr(8, 2) + "/" + date.substr(0, 4);
                transactionJSON.transactionAmount = "-" + formatUtility.formatAmountandAppendCurrencySymbol(transactions[i].transactionAmount);
             	uncategorisedData.push(transactionJSON);
              }
              }
            this.view.segTransactions.widgetDataMap = {
              "flxShadow": "flxShadow",
              "flxTransHeader": "template",
              "imgUpArrow": "imgUpArrow",
              "lblDate": "transactionDate",
              "lblTransaction": "transactionDescription",
              "lblTransactionAmount": "transactionAmount",
              "segTransactions": "segTransactions"
            };
            this.view.segTransactions.setData(uncategorisedData);
            this.uncategorisedData = uncategorisedData;
        }
        catch(err) {
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    /**
     * Description
     * @method setFlowActions
     * @return 
     */
    setFlowActions: function() {
        try {
            var scopeobj = this;
            /**
             * Description
             * @method onClick
             * @return 
             */
            this.view.flxDropdownImage.onClick = function() {
                if (scopeobj.view.flxTransactionTypes.isVisible) {
                    scopeobj.view.flxTransactionTypes.setVisibility(false);
                    scopeobj.view.imgShowTransactionTypes.src = "arrowdown.png";
                } else {
                    scopeobj.view.flxTransactionTypes.setVisibility(true);
                    scopeobj.view.imgShowTransactionTypes.src = "arrowup.png";
                }
            };
            this.view.flxAdvSearch.onClick = this.fetchPFMCategories;
            /**
               * Description
               * @method onClick
               * @return 
               */
            this.view.customHeader.flxBack.onClick = function() {
              applicationManager.getPresentationUtility().showLoadingScreen();
              var navManager = applicationManager.getNavigationManager();
              navManager.goBack();
            };
            /**
               * Description
               * @method onRowClick
               * @return 
               */
            this.view.segTransactions.onRowClick = function() {
              try {
                var selectedItem = scopeobj.view.segTransactions.selectedItems[0];
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("frmPFMTransactionDetails", selectedItem);
                applicationManager.getPresentationUtility().showLoadingScreen();
                var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                accountModule.presentationController.commonFunctionForNavigation("frmPFMTransactionDetails");
              }
              catch(err){
                applicationManager.getPresentationUtility().dismissLoadingScreen();
                throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, "segTransactions.onRowClick");
              }
            };
        }
        catch(err) {
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    /**
     * Description
     * @method setTransactionTypesSegmentData
     * @return 
     */
    setTransactionTypesSegmentData: function() {
        try {
            var dataMap = {
                "flxSelectAccountTypes": "flxSelectAccountTypes",
                "flxSeparator": "flxSeparator",
                "imgIcon": "imgIcon",
                "lblName": "lblName",
            };
            var data = [{
                    "imgIcon": {
                        "src": "tick.png",
                        "isVisible": true
                    },
                    "lblName": {
                        "text": "CATEGORIZED TRANSACTIONS",
                        "skin": "sknLblda8b09SSP26px",
                    },
                    "template": "flxSelectAccountTypes"
                },
                {
                    "imgIcon": {
                        "src": "tick.png",
                        "isVisible": false
                    },
                    "lblName": {
                        "text": "UNCATEGORIZED TRANSACTIONS",
                        "skin": "sknLbl0095e4SSPRegular26px"
                    },
                    "template": "flxSelectAccountTypes"
                }
            ];
            this.view.segTransactionTypes.widgetDataMap = dataMap;
            this.view.segTransactionTypes.setData(data);
            this.view.segTransactionTypes.onRowClick = this.onSegTypesClick.bind(this);
        }
        catch(err) {
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    /**
     * Description
     * @method toggleSegmentElement
     * @param {} data
     * @param {} unselected
     * @param {} selected
     * @param {} visibility1
     * @param {} visibility2
     * @param {} textToBeSet
     * @return 
     */
    toggleSegmentElement: function(data, unselected, selected, visibility1, visibility2, textToBeSet) {
        try {
            data[0].lblName.skin = unselected;
            data[0].imgIcon.isVisible = visibility1;
            data[1].lblName.skin = selected;
            data[1].imgIcon.isVisible = visibility2;
            this.view.lblSelectedType.text = textToBeSet;
            return data;
        }
        catch(err) {
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    /**
     * Description
     * @method onSegTypesClick
     * @return 
     */
    onSegTypesClick: function() {
        try {
            var scopeobj = this;
         	applicationManager.getPresentationUtility().showLoadingScreen();
            var navManager = applicationManager.getNavigationManager();
          	navManager.setCustomInfo("navigationToTransactions",false);
          	this.view.tbxSearch.text = "";
            var transactions = this.clone(navManager.getCustomInfo("frmPFMCategorisedTransactions"));
            if (scopeobj.view.flxTransactionTypes.isVisible) {
                scopeobj.view.flxTransactionTypes.setVisibility(false);
                scopeobj.view.imgShowTransactionTypes.src = "arrowdown.png";
            } else {
                scopeobj.view.flxTransactionTypes.setVisibility(true);
                scopeobj.view.imgShowTransactionTypes.src = "arrowup.png";
            }
            var selectedItem = this.view.segTransactionTypes.selectedItems[0];
            var data = this.view.segTransactionTypes.data;
            if (selectedItem.lblName.text === "UNCATEGORIZED TRANSACTIONS") {
              	this.currentSelected = "uncategorised";
                data = this.toggleSegmentElement(data, "sknLbl0095e4SSPRegular26px", "sknLblda8b09SSP26px", false, true, "UNCATEGORISED TRANSACTIONS");
                this.setUncategorizedTransactions(transactions);
            } else {
              	this.currentSelected = "categorised";
                this.setCategorizedTransactions(transactions);
                data = this.toggleSegmentElement(data, "sknLblda8b09SSP26px", "sknLbl0095e4SSPRegular26px", true, false, "CATEGORISED TRANSACTIONS");
            }
            this.view.segTransactionTypes.setData(data);
          	applicationManager.getPresentationUtility().dismissLoadingScreen();
      }
      catch(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }
    },

    /**
     * Description
     * @method clone
     * @param {} source
     * @return 
     */
    clone: function(source) {
        try {
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
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.processingError", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
      }
    },
    /**
     * Description
     * @method sortObject
     * @param {} o
     * @return 
     */
    sortObject: function(o) {
        try {
            var sorted = {},
                key, a = [];

            for (key in o) {
                if (o.hasOwnProperty(key)) {
                    a.push(key);
                }
            }

            a.sort();

            for (key = 0; key < a.length; key++) {
                sorted[a[key]] = o[a[key]];
            }
            return sorted;
        }
        catch(err) {
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.processingError", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
        }
    },
  	searchAndShowTransactions : function(){
      try {
        var text = this.view.tbxSearch.text.toLowerCase();
        var transactions;
        var filteredData = [];
        if(this.currentSelected == "categorised"){
          transactions = this.clone(this.categorisedData);
          for(var i=0;i<transactions.length;i++){
            var internalData = [];
            for(var j=0;j<transactions[i][1].length;j++){
              var dataText = transactions[i][1][j].transactionDescription.toLowerCase();
              if(dataText.indexOf(text)!=-1){
                internalData.push(transactions[i][1][j]);
              }
            }
            if(internalData.length>0){
              filteredData.push([transactions[i][0],internalData]);          
            }
          }
        }
        else{
          transactions = this.clone(this.uncategorisedData);
          for(var i=0;i<transactions.length;i++){
            var data = transactions[i].transactionDescription.toLowerCase();
            if(data.indexOf(text)!=-1){
              filteredData.push(transactions[i]);
            }
          }
        }
        this.view.segTransactions.setData(filteredData);
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }  
    },
});