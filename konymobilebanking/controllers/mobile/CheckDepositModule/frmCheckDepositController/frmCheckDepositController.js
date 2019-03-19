define({
  timerCounter: 0,
  segmentData : [],
  pendingDeposits : [],
  postedDeposits : [],
  onNavigate: function() {
  },
  
  checkDepositInit: function() {
  	var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);  
  },
  
  preShow: function() {
    var scope = this;
    this.view.flxNewCheckDeposit.onClick = this.flxNewCheckDepositOnClick;
    this.view.tbxSearch.onTextChange = this.onSearchTextChange;
    this.view.segDepositFrom.onRowClick = this.segDepositFromOnClick;
    this.view.flxNewCheckDeposit.onTouchStart = function(){
        scope.view.imgCheckDeposit.src = "checkdeposittap.png";
      };
      this.view.flxNewCheckDeposit.onTouchEnd = function(){
        scope.view.imgCheckDeposit.src = "checkdeposit.png";
      };
//      this.view.segDepositFrom.onScrolling = function () {
//             self.transactionsSegmentOnScrolling();
//         };
    this.view.tbxSearch.text = "";
    this.setSegmentData();
   // this.addDummyRows();
    this.renderTitleBar();
    this.showPopupSuccess();
    var scope = this;
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUCHECKDEPOSIT);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
	 var checkDeposit = applicationManager.getLoggerManager();              
         checkDeposit.setCustomMetrics(this, false, "RDC");
  },
   addDummyRows: function () {
//         var segWidgetDataMap = this.view.segDepositFrom.widgetDataMap;
//         segWidgetDataMap["flxEmptyHeader"] = "flxEmptyHeader";
//         segWidgetDataMap["flxEmptyRow"] = "flxEmptyRow";
//         this.view.segDepositFrom.widgetDataMap = segWidgetDataMap;
//         var segData = this.view.segDepositFrom.data;
//        // alert(segData);
//         var segLength = 0;
//                 if(segData == null || segData == undefined){
//           segData = [];
//         }
//         for (let i = 0; i < segData.length; i++) {
//             segLength = segLength + (segData[i][1].length * 70) + 49; //66 is the row height and 49 is the header height
//         }
//         segData.unshift([{
//                 "template": "flxEmptyHeader",
//                 "flxEmptyHeader": {
//                     "height": "0dp"
//                 }
//             },
//             [{
//                 "template": "flxEmptyRow",
//                 "flxEmptyRow": {
//                     "height": "145dp"
//                 }
//             }]
//         ]);
//         segLength = segLength + 145;
//         this.view.segDepositFrom.setData(segData);
//         this.segLength = segLength;

    },
    transactionsSegmentOnScrolling: function () {
//         var parallaxSpeed = 1;
//         var yOffset = this.view.segDepositFrom.contentOffsetMeasured.y;
//         this.view.flxSearch.top = 0 - (yOffset * parallaxSpeed) + "dp";
//         this.view.flxNewCheckDeposit.top = 55 - (yOffset * parallaxSpeed) + "dp";
    },
  renderTitleBar: function(){
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if (isIphone) {
      this.view.flxHeader.setVisibility(false);
    }
    else
      {
        this.view.flxFooter.setVisibility(false);
      }
  },
  setSegmentData : function(searchData,isOriginalSegmentData){
    this.view.segDepositFrom.isVisible=true;
    this.view.flxNoTransactions.isVisible=false;
    if(isOriginalSegmentData)
    {
      this.view.segDepositFrom.setData(searchData);
    }
    else
    {  
      var navMan=applicationManager.getNavigationManager();
      var depositData = [];
      if(searchData)
        depositData = searchData;
      else
        depositData =  navMan.getCustomInfo("frmCheckDeposit").depositsData;
      var segData = [];
      var postedDepositData = [];
      var pendingDepositData = [];
      if(depositData && depositData.length>0)
      {
        pendingDepositData = depositData[0];
        postedDepositData = depositData[1];
        this.view.segDepositFrom.widgetDataMap={
          lblAccountName:"toAccountName",
          lblAccountBalValue:"amount",     
          lblAccountBal:"transactionDate",
          lblHeader:"lblHeader",
          imgUpArrow : "imgUpArrow"
        };
        var pendingTranHeaderLabel = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.pendingTransactions");
        var postedTranHeaderLabel = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.postedTransactions");
        applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.pendingTransactions")
        if(postedDepositData.length>0&&pendingDepositData.length>0)
        {
          segData=  [[{"lblHeader": pendingTranHeaderLabel,"imgUpArrow":{"src":"arrowdown.png"}},pendingDepositData],
                     [{"lblHeader": postedTranHeaderLabel,"imgUpArrow":{"src":"arrowdown.png"} },postedDepositData]]; 
        }
        else if(pendingDepositData.length>0)
        {
          segData =  [[{"lblHeader": pendingTranHeaderLabel,"imgUpArrow":{"src":"arrowdown.png"}},pendingDepositData]]; 
        }
        else if(postedDepositData.length>0)
        {
          segData =  [[{ "lblHeader": postedTranHeaderLabel,"imgUpArrow":{"src":"arrowdown.png"}},postedDepositData]];

        }
        else
        {
          this.view.segDepositFrom.isVisible=false;
          this.view.flxNoTransactions.isVisible=true;
        }
      }
      else
      {
        this.view.segDepositFrom.isVisible=false;
        this.view.flxNoTransactions.isVisible=true;
      }
      if(!searchData)
      {
        this.segmentData=segData;
        this.pendingDeposits=pendingDepositData;
        this.postedDeposits=postedDepositData;
      }
      this.view.segDepositFrom.setData(segData);
    }
    this.view.forceLayout();
  },
  onSearchTextChange : function(){
    var searchText = this.view.tbxSearch.text.toLowerCase();
    var segData = this.segmentData;
    if(searchText && segData.length !== 0)
    {
      var data = [],headers = [];
      headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.pendingTransactions"));
      headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.postedTransactions"));
      data.push(this.pendingDeposits);
      data.push(this.postedDeposits);
      var searchSegData = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("toAccountName",searchText,data,headers);
      if(searchSegData && searchSegData.length!==0)
      {
        this.view.segDepositFrom.setData(searchSegData);
        this.view.segDepositFrom.isVisible=true;
        this.view.flxNoTransactions.isVisible=false;
      }
      else
        {
          this.view.segDepositFrom.isVisible=false;
          this.view.flxNoTransactions.isVisible=true;
        }
    }
    else if (!searchText && segData.length !== 0)
    {
      this.setSegmentData(segData,true);
    }
    //this.addDummyRows();
  },
  segDepositFromOnClick : function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var selectedSectionIndex=Math.floor(this.view.segDepositFrom.selectedRowIndex[0]);
    var selectedRowIndex=Math.floor(this.view.segDepositFrom.selectedRowIndex[1]);
    var transactionData=this.view.segDepositFrom.data[selectedSectionIndex][1][selectedRowIndex];
    var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    checkDepositModule.presentationController.goToDepositDetails(transactionData);
  },
  flxNewCheckDepositOnClick: function() {
	applicationManager.getPresentationUtility().showLoadingScreen();
    var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    checkDepositModule.presentationController.navigationFromNewCheckDeposit();
  },
  showPopupSuccess: function() {
    var scope = this;
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo("frmCheckDeposit");
    if(data)
    {
      if(data.transactionSuccess)
      {
        data.transactionSuccess = false;
        var popupMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Deposit.successfulTransactionPopup")+" "+data.refId;
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(scope, popupMsg);
        navManager.setCustomInfo("frmCheckDeposit",data);
      }
      else if(data.transactionError)
      {
        data.transactionError = false;
        var errMsg = data.transactionErrorMsg;
        applicationManager.getDataProcessorUtility().showToastMessageError(scope, errMsg);
        navManager.setCustomInfo("frmCheckDeposit",data);
      }
    }
  },
});