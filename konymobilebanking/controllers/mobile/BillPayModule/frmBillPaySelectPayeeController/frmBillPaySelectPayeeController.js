define({
  	segmentData:null,
  	recentPayees:null,
  	allPayees:null,
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function() {
      if (kony.os.deviceInfo().name === "iPhone") {
        this.view.flxHeader.isVisible = false;
      }
      this.setSegmentData();
      this.resetSearch();
      this.initActions();
      this.showPopUpSuccess();
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
           var navMan=applicationManager.getNavigationManager();    
           navMan.goBack(); 
        }
        this.view.tbxSearch.onTouchStart = this.showSearch;
        this.view.customSearchbox.btnCancel.onClick = this.showSearch;
      	this.view.customSearchbox.tbxSearch.onTextChange=this.tbxSearchOnTextChange;
        this.view.btnAddPayee.onClick = function(){
          var navManager = applicationManager.getNavigationManager();
          navManager.setEntryPoint("createBillPayPayee","frmBillPaySelectPayee");
          var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
          billPayMod.presentationController.setFlowType("createBillPayPayee");
          billPayMod.presentationController.clearBillPayPayeeData();
          billPayMod.presentationController.commonFunctionForNavigation("frmBillPaySearchPayee");
        }
        this.view.segAccounts.onRowClick=this.selectPayee;
    },
    setSegmentData: function() {
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      var allPayees = billPayMod.presentationController.getAllBillPayPayees(); 
      var recentPayees = billPayMod.presentationController.getRecentBillPayees(); 
      var segmentData = [];
      this.view.segAccounts.widgetDataMap = {
        lblHeader:"lblHeader",
        lblPayeeName:"payeeNickName",
        lblAccountBal:"",
        lblPayeeInfo:"addressLine1",
        lblAccountBalValue:"",
        imgInfo: "flxAccountsNoImage",
        imgebill:"imgebill",
        lblAccountNumber:""
      };
      for(var i=0;i<allPayees.length;i++)
    {
      
      if(allPayees[i]["eBillSupport"]==="true")
      {
        if(allPayees[i]["eBillStatus"]==="1")
          {
          allPayees[i]["imgebill"]={
            "src":"ebill.png",
            "isVisible":true
          };
          
          }
        else
          allPayees[i]["imgebill"]={
            "src":"ebillinactive.png",
            "isVisible":true
          };
      }
      else{
        allPayees[i]["imgebill"]={
            //"src":"ebillinactive.png",
            "isVisible":false
          };
      }
    }

    for(var j=0;j<recentPayees.length;j++)
    {

      if(recentPayees[j]["eBillSupport"]==="true")
      {
        if(recentPayees[j]["EBillEnable"]==="1")
          recentPayees[j]["imgebill"]={
            "src":"ebill.png",
            "isVisible":true
          };
        else
          recentPayees[j]["imgebill"]={
            "src":"ebillinactive.png",
            "isVisible":true
          };
      }
      else{
        //allPayees[j]["imgebill"][visbility]="false";
        //recentPayees[i]["imgebill"]=null;
        recentPayees[j]["imgebill"]={
            //"src":"ebillinactive.png",
            "isVisible":false
          };
      }
    }
      if(allPayees.length===0 && recentPayees.length==0){
        this.view.flxNoTransactions.isVisible=true;
        this.view.segAccounts.isVisible=false;
      }
      else{
        this.view.flxNoTransactions.isVisible=false;
        this.view.segAccounts.isVisible=true;
        if(recentPayees.length>0)
          segmentData.push([{"lblHeader":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.recentpayees","Recent Payees")},recentPayees]);
        if(allPayees.length>0)
          segmentData.push([{"lblHeader":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.allpayees")},allPayees]);
        this.view.segAccounts.setData(segmentData);
      }
      this.recentPayees = recentPayees;
      this.allPayees = allPayees;
      this.segmentData = segmentData;
    },
    segmentRowClick: function() {
		 var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      billPayMod.presentationController.commonFunctionForNavigation("frmBillPayAmount");
       
    },
    segmentRowInfoClick: function() {

    },
  	resetSearchData: function(){
      this.view.customSearchbox.tbxSearch.text = ""
      if(this.segmentData && this.segmentData.length>0){
          this.view.segAccounts.setData(this.segmentData);
          this.view.segAccounts.isVisible=true;
          this.view.flxNoTransactions.isVisible=false;
        }
        else{
          this.view.segAccounts.isVisible=false;
          this.view.flxNoTransactions.isVisible=true;
        }
    },
    showSearch: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
              	this.resetSearchData();
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxMainContainer.top = "0dp";

            } else {
                this.view.flxSearch.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.setFocus(true);
            }
        } else {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
              	this.resetSearchData();
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxHeader.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
            } else {
                this.view.flxSearch.isVisible = false;
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.setFocus(true);
            }
        }
      	
    },
  	resetSearch:function(){
      this.view.customSearchbox.tbxSearch.text = "";
      if (kony.os.deviceInfo().name === "iPhone") {
        if (this.view.flxHeaderSearchbox.isVisible == true) {
          this.view.flxHeaderSearchbox.isVisible = false;
          this.view.flxSearch.isVisible = true;
          this.view.flxMainContainer.top = "56dp";

        }
      }else {
        if (this.view.flxHeaderSearchbox.isVisible == true) {
          this.view.flxHeaderSearchbox.isVisible = false;
          this.view.flxSearch.isVisible = true;
          this.view.flxHeader.isVisible = true;
          this.view.flxMainContainer.top = "56dp";
        }
      }   
    },
  	tbxSearchOnTextChange:function(){
      var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
      if(searchtext){
         var data = [],headers = [];
         headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.recentpayees"));
         headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.allpayees"));
         data.push(this.recentPayees);
         data.push(this.allPayees);
         this.view.segAccounts.isVisible=true;
         this.view.flxNoTransactions.isVisible=false;
         var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
         var searchData = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("payeeNickName",searchtext,data,headers);
         if(searchData && searchData.length>0){
           this.view.segAccounts.setData(searchData);
         }
         else{
           this.view.segAccounts.isVisible=false;
           this.view.flxNoTransactions.isVisible=true;
         }
      }
      else{
        if(this.segmentData && this.segmentData.length>0){
//           var data = [];
//        	  data.push([{"lblHeader":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.allpayees")},this.segmentData]);
          this.view.segAccounts.setData(this.segmentData);
          this.view.segAccounts.isVisible=true;
          this.view.flxNoTransactions.isVisible=false;
        }
        else{
          this.view.segAccounts.isVisible=false;
          this.view.flxNoTransactions.isVisible=true;
        }
      }
    },
  	selectPayee:function(){
      var navMan=applicationManager.getNavigationManager();
       var selectedSectionIndex=Math.floor(this.view.segAccounts.selectedRowIndex[0]);
    var selectedRowIndex=Math.floor(this.view.segAccounts.selectedRowIndex[1]);
      var selectedPayee = this.view.segAccounts.data[selectedSectionIndex][1][selectedRowIndex];
      //navMan.setCustomInfo("frmBillPaySelectPayee",selectedPayee);
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      billPayMod.presentationController.navAfterSelectPayee(selectedPayee);
    },
   showPopUpSuccess:function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    if(billPayMod.presentationController.isPayeeAdded){
      this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.addedBillPayPayeeAddressSuccess"));
      billPayMod.presentationController.isPayeeAdded = false; 
    }
  },
    bindGenericSuccess : function(msg){
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,msg);
  	},
});