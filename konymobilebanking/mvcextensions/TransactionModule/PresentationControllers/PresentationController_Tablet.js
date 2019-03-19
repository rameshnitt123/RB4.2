define(["AsyncManager/BusinessControllers/BusinessController"], function(AsyncManager) {

    function Transaction_PresentationController() {
        scope_Trans_Pre = this;
        kony.mvc.Presentation.BasePresenter.call(this);
        this.asyncManager = new AsyncManager();
        scope_Trans_Pre.transactionsData = null;
        /**   numberOfAsyncForUserTransactions
         *  1.getPendingUserTransactions
         *  2.getPostedUserTransactions
         */
        scope_Trans_Pre.numberOfAsyncForUserTransactions = 2;
        /**   numberOfAsyncForTransactions
         *  1.getPostedTransfersAndP2pTransactions
         *  2.getScheduledTransferAndP2pTransactions
         */
        scope_Trans_Pre.numberOfAsyncForTransactions = 2;
    }

    inheritsFrom(Transaction_PresentationController, kony.mvc.Presentation.BasePresenter);
    Transaction_PresentationController.prototype.setPendPostTransactions = function(response) {
        scope_Trans_Pre.transactionsData = response;
    };
    Transaction_PresentationController.prototype.commonFunctionForNavigation = function(formName) {
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo(formName);
    };
    Transaction_PresentationController.prototype.getPendPostTransactions = function() {
        return scope_Trans_Pre.transactionsData;
    };

    Transaction_PresentationController.prototype.initializePresentationController = function() {

    };
    Transaction_PresentationController.prototype.getPendingPostedTransactions = function(searchOptions) {
        scope_Trans_Pre.asyncManager.initiateAsyncProcess(scope_Trans_Pre.numberOfAsyncForUserTransactions);
        scope_Trans_Pre.getPendingTransactions(searchOptions);
        scope_Trans_Pre.getPostedTransactions(searchOptions);
    };

    Transaction_PresentationController.prototype.getPendingTransactions = function(searchOptions) {

        searchOptions.isScheduled = "1";
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.fetchPendingTransactions(searchOptions, this.getPendingTransactionsPresentationSuccessCallback, this.getPendingTransactionsPresentationErrorCallback);
    };

    Transaction_PresentationController.prototype.getPendingTransactionsPresentationSuccessCallback = function(resSuccess) {
        scope_Trans_Pre.asyncManager.setSuccessStatus(0, resSuccess);
        scope_Trans_Pre.navigateTofrmAdvanceSearchResults();
    };
    Transaction_PresentationController.prototype.getPendingTransactionsPresentationErrorCallback = function(resErr) {
        scope_Trans_Pre.asyncManager.setErrorStatus(0, resErr);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resErr["isServerUnreachable"])
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resErr);
    };

    Transaction_PresentationController.prototype.getPostedTransactions = function(searchOptions) {
        searchOptions.isScheduled = "0";
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.fetchPostedTransactions(searchOptions, this.getPostedTransactionsPresentationSuccessCallback, this.getPostedTransactionsPresentationErrorCallback);
    };

    Transaction_PresentationController.prototype.getPostedTransactionsPresentationSuccessCallback = function(resSuccess) {
        scope_Trans_Pre.asyncManager.setSuccessStatus(1, resSuccess);
        scope_Trans_Pre.navigateTofrmAdvanceSearchResults();
    };
    Transaction_PresentationController.prototype.getPostedTransactionsPresentationErrorCallback = function(resErr) {
        scope_Trans_Pre.asyncManager.setErrorStatus(1, resErr);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resErr["isServerUnreachable"])
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resErr);
    };
    Transaction_PresentationController.prototype.navigateTofrmAdvanceSearchResults = function(res) {
        if (scope_Trans_Pre.asyncManager.areAllservicesDone(scope_Trans_Pre.numberOfAsyncForUserTransactions)) {
            var navMan = applicationManager.getNavigationManager();
            var transactionDetails = {};
            transactionDetails.pendingTransactions = scope_Trans_Pre.asyncManager.getData(0);
            transactionDetails.postedTransactions = scope_Trans_Pre.asyncManager.getData(1);
            scope_Trans_Pre.setPendPostTransactions(transactionDetails);
            navMan.navigateTo("frmAdvanceSearchResults");
        }
    };
    Transaction_PresentationController.prototype.getCustomRange = function(beginingDate, endDate) {
        if (endDate - beginingDate >= 0) {
            var fotmatUtilManager = applicationManager.getFormatUtilManager();
            var startDate = fotmatUtilManager.getFormatedDateString(beginingDate, fotmatUtilManager.getBackendDateTimeFormat());
            var lastDate = fotmatUtilManager.getFormatedDateString(endDate, fotmatUtilManager.getBackendDateTimeFormat());
            return {
                "searchStartDate": startDate,
                "searchEndDate": lastDate
            };
        } else {
            return null;
        }
    };
    Transaction_PresentationController.prototype.getDateRange = function(noOfDays) {
        var fotmatUtilManager = applicationManager.getFormatUtilManager();
        var startDate = fotmatUtilManager.getFormatedDateString(fotmatUtilManager.getPreviousDate(noOfDays), fotmatUtilManager.getBackendDateTimeFormat());
        var lastDate = fotmatUtilManager.getFormatedDateString(new Date(), fotmatUtilManager.getBackendDateTimeFormat());
        return {
            "searchStartDate": startDate,
            "searchEndDate": lastDate
        };
    };
    Transaction_PresentationController.prototype.getTransactions = function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        scope_Trans_Pre.asyncManager.initiateAsyncProcess(scope_Trans_Pre.numberOfAsyncForTransactions);
        scope_Trans_Pre.getUserPostedTransactions();
        kony.print("delay");
        scope_Trans_Pre.getUserScheduledTransactions();
    };
    Transaction_PresentationController.prototype.getUserPostedTransactions = function() {
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.fetchUserpostedTransactions(scope_Trans_Pre.getUserPostedTransactionsSuccessCallback, scope_Trans_Pre.getUserPostedTransactionsErrorCallback);
    };

    Transaction_PresentationController.prototype.getUserPostedTransactionsSuccessCallback = function(resSuccess) {
        scope_Trans_Pre.asyncManager.setSuccessStatus(0, resSuccess);
        if (scope_Trans_Pre.asyncManager.areAllservicesDone(scope_Trans_Pre.numberOfAsyncForTransactions)) {
            scope_Trans_Pre.navToTransferLanding();
        }
    };
    Transaction_PresentationController.prototype.getUserPostedTransactionsErrorCallback = function(resErr) {
        scope_Trans_Pre.asyncManager.setErrorStatus(0, resErr);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resErr["isServerUnreachable"])
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resErr);
    };

    Transaction_PresentationController.prototype.getUserScheduledTransactions = function() {
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.fetchUserScheduledTransactions(scope_Trans_Pre.getUserScheduledTransactionsSuccessCallback, scope_Trans_Pre.getUserScheduledTransactionsErrorCallback);
    };

    Transaction_PresentationController.prototype.getUserScheduledTransactionsSuccessCallback = function(resSuccess) {
        scope_Trans_Pre.asyncManager.setSuccessStatus(1, resSuccess);
        if (scope_Trans_Pre.asyncManager.areAllservicesDone(scope_Trans_Pre.numberOfAsyncForTransactions)) {
            scope_Trans_Pre.navToTransferLanding();
        }
    };
    Transaction_PresentationController.prototype.getUserScheduledTransactionsErrorCallback = function(resErr) {
        scope_Trans_Pre.asyncManager.setErrorStatus(1, resErr);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resErr["isServerUnreachable"])
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resErr);
    };
    Transaction_PresentationController.prototype.navToTransferLanding = function() {
        var navMan = applicationManager.getNavigationManager();
        var formatUtil = applicationManager.getFormatUtilManager();
        var transactions = {};
        var data = navMan.getCustomInfo("frmTransfers");
        if (data !== undefined && data !== null)
            transactions = data;
        transactions.postedTransaction = scope_Trans_Pre.asyncManager.getData(0);
        transactions.scheduledTransactions = scope_Trans_Pre.asyncManager.getData(1);
        for (var i = 0; i < transactions.scheduledTransactions.length; i++) {
            if (transactions.scheduledTransactions[i]["isScheduled"] === "true")
                var trandateobj = formatUtil.getDateObjectfromString(transactions.scheduledTransactions[i]["scheduledDate"], "YYYY-MM-DD");
            else
                var trandateobj = formatUtil.getDateObjectfromString(transactions.scheduledTransactions[i]["transactionDate"], "YYYY-MM-DD");
            transactions.scheduledTransactions[i]["scheduledDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.APPLICATION_DATE_FORMAT)
            if (transactions.scheduledTransactions[i]["frequencyStartDate"] !== null && transactions.scheduledTransactions[i]["frequencyStartDate"] !== undefined && transactions.scheduledTransactions[i]["frequencyStartDate"] !== "") {
                var trandateobj = formatUtil.getDateObjectfromString(transactions.scheduledTransactions[i]["frequencyStartDate"], "YYYY-MM-DD");
                transactions.scheduledTransactions[i]["frequencyStartDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.APPLICATION_DATE_FORMAT)
            }
            if (transactions.scheduledTransactions[i]["frequencyEndDate"] !== null && transactions.scheduledTransactions[i]["frequencyEndDate"] !== undefined && transactions.scheduledTransactions[i]["frequencyEndDate"] !== "") {
                var trandateobj = formatUtil.getDateObjectfromString(transactions.scheduledTransactions[i]["frequencyEndDate"], "YYYY-MM-DD");
                transactions.scheduledTransactions[i]["frequencyEndDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.APPLICATION_DATE_FORMAT)
            }
            transactions.scheduledTransactions[i]["amount"] = formatUtil.formatAmountandAppendCurrencySymbol(transactions.scheduledTransactions[i]["amount"]);
            if (transactions.scheduledTransactions[i]["transactionType"] == "P2P")
                transactions.scheduledTransactions[i].image = "payapersonsmall.png";
            else
                transactions.scheduledTransactions[i].image = "maketransfersmall.png";
        }
        for (var i = 0; i < transactions.postedTransaction.length; i++) {
            if (transactions.postedTransaction[i]["isScheduled"] === "true")
                var trandateobj = formatUtil.getDateObjectfromString(transactions.postedTransaction[i]["scheduledDate"], "YYYY-MM-DD");
            else
                var trandateobj = formatUtil.getDateObjectfromString(transactions.postedTransaction[i]["transactionDate"], "YYYY-MM-DD");
            transactions.postedTransaction[i]["scheduledDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.APPLICATION_DATE_FORMAT)
            if (transactions.postedTransaction[i]["frequencyStartDate"] !== null && transactions.postedTransaction[i]["frequencyStartDate"] !== undefined && transactions.postedTransaction[i]["frequencyStartDate"] !== "") {
                var trandateobj = formatUtil.getDateObjectfromString(transactions.postedTransaction[i]["frequencyStartDate"], "YYYY-MM-DD");
                transactions.postedTransaction[i]["frequencyStartDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.APPLICATION_DATE_FORMAT)
            }
            if (transactions.postedTransaction[i]["frequencyEndDate"] !== null && transactions.postedTransaction[i]["frequencyEndDate"] !== undefined && transactions.postedTransaction[i]["frequencyEndDate"] !== "") {
                var trandateobj = formatUtil.getDateObjectfromString(transactions.postedTransaction[i]["frequencyEndDate"], "YYYY-MM-DD");
                transactions.postedTransaction[i]["frequencyEndDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.APPLICATION_DATE_FORMAT)
            }
            transactions.postedTransaction[i]["amount"] = formatUtil.formatAmountandAppendCurrencySymbol(transactions.postedTransaction[i]["amount"]);
            if (transactions.postedTransaction[i]["transactionType"] == "P2P")
                transactions.postedTransaction[i].image = "payapersonsmall.png";
            else
                transactions.postedTransaction[i].image = "maketransfersmall.png";
        }
        navMan.setCustomInfo("frmTransfers", transactions);
        navMan.navigateTo("frmTransfers");
    };
    /**
     * code for getting the posted transactions for pagenation
     * @member of Transaction_presentationController
     * @param {JSON} 
     */
    Transaction_PresentationController.prototype.getNextPostedTransactions = function(searchOptions, segData) {
        searchOptions.isScheduled = "0";
        var paginationManager = applicationManager.getPaginationManager();
        paginationManager.paging(scope_Trans_Pre.getPostedTransForPNSuccess, scope_Trans_Pre.getPostedTransForPNError, scope_Trans_Pre.getPostedTransForPN, segData, 1, searchOptions);
    };
    Transaction_PresentationController.prototype.getPostedTransForPN = function(searchOptions, getPostedTransForPNSuccess, getPostedTransForPNError) {
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.fetchPostedTransactions(searchOptions, getPostedTransForPNSuccess, getPostedTransForPNError);
    };
    Transaction_PresentationController.prototype.getPostedTransForPNSuccess = function(resSuccess) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var controller = applicationManager.getPresentationUtility().getController('frmAdvanceSearchResults', true);
        controller.assignScrollEndData(resSuccess);
    };
    Transaction_PresentationController.prototype.getPostedTransForPNError = function(resErr) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resErr);
    };

    Transaction_PresentationController.prototype.setEntryPoints = function(transactionType) {
        var navMan = applicationManager.getNavigationManager();
        switch (transactionType) {
            case "InternalTransfer":
                navMan.setEntryPoint("makeatransfer", "frmTransfers");
                break;
            case "ExternalTransfer":
                navMan.setEntryPoint("makeatransfer", "frmTransfers");
                break;
            case "P2P":
                navMan.setEntryPoint("payaperson", "frmTransfers");
                break;

        }
    };

    return Transaction_PresentationController;
});