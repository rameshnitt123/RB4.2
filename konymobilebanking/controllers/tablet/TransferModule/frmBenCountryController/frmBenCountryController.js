define({

  segmentData:null,

  init : function()
  {
    try
    {
      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    }
    catch(ex)
    {

    }
  },

  preShow: function() 
  {   
    try
    {
      this.renderTitleBar();
      this.initialUiSettings();
      this.initActions();

      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);        
    }
    catch(ex)
    {

    }      
  },

  initialUiSettings : function()
  {
    try
    {
      this.showPreshowSearch();
      var navManager = applicationManager.getNavigationManager();
      var countryList=navManager.getCustomInfo("frmBenCountry");
      this.setSegmentData(countryList.records); 
    }
    catch(ex)
    {

    }    
  },

  initActions: function() {
    try
    {
      var scope = this;

      this.view.segCountry.onRowClick = function() {
        var rowid=scope.view.segCountry.selectedRowIndex[1];
        var selectedCountry = scope.view.segCountry.data[rowid];
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transferModule.presentationController.navigateToEnterSwiftCode(selectedCountry.lblFrequency);
      };
      this.view.customHeaderTablet.flxBack.onClick = scope.flxBackOnClick;
      this.view.customHeaderTablet.btnRight.onClick = scope.onClickCancel;
      
      
      this.view.tbxSearch.onTextChange =  scope.tbxSearchOnTextChange;
      this.view.flxCancel.onClick = scope.cancelSearch;
     /*
     this.view.customSearchbox.btnCancel.onClick =  function() {
        scope.cancelSearch();
      };
      this.view.customSearchbox.tbxSearch.onTextChange=scope.tbxSearchOnTextChange;  
      */
    }
    catch(ex)
    {

    }      
  },

  /*//a//
  showSearch: function() 
  {
    try
    {
      this.view.flxNoCountries.isVisible=false;
      if (kony.os.deviceInfo().name === "iPhone") {
        if (this.view.flxHeaderSearchbox.isVisible == true) {
          this.view.flxHeaderSearchbox.isVisible = false;
          this.view.flxSearch.isVisible = true;
          this.view.flxMainContainer.top = "55dp";
        } else {
          this.view.customSearchbox.tbxSearch.text="";
          this.view.flxHeaderSearchbox.isVisible = true;
          this.view.flxSearch.isVisible = false;
          this.view.flxMainContainer.top = "110dp";
          this.view.customSearchbox.tbxSearch.setFocus(true);
        }
      } else {
        if (this.view.flxHeaderSearchbox.isVisible == true) {
          this.view.flxHeaderSearchbox.isVisible = false;
          this.view.flxSearch.isVisible = true;
          this.view.flxHeader.isVisible = true;
          this.view.flxMainContainer.top = "56dp";
        } else {
          this.view.customSearchbox.tbxSearch.text="";
          this.view.flxSearch.isVisible = false;
          this.view.flxHeader.isVisible = false;
          this.view.flxMainContainer.top = "40dp";
          this.view.flxHeaderSearchbox.isVisible = true;
          this.view.customSearchbox.tbxSearch.setFocus(true);
        }
      }        
    }
    catch(ex)
    {

    }                
  },
  

  cancelSearch:function()
  {
    try
    {
      this.view.flxNoCountries.isVisible=false;
      this.view.segCountry.isVisible=true;
      this.view.flxHeaderSearchbox.isVisible = false;
      this.view.flxSearch.isVisible = true;
      if (kony.os.deviceInfo().name === "iPhone"){
        this.view.flxHeader.isVisible = false;
        this.view.flxMainContainer.top = "0dp";
      }
      else{
        this.view.flxHeader.isVisible = true;
        this.view.flxMainContainer.top = "56dp";
      }
      this.view.segCountry.setData(this.segmentData);        
    }
    catch(ex)
    {

    }      
  },
   
  showSearch1: function() 
  {
    try
    {
      if (this.view.flxHeaderSearchbox.isVisible == true) {
        this.view.flxHeaderSearchbox.isVisible = false;
        //           var data=[];
        //            for (var i = 0; i < this.segmentData.length; i++) {
        //             var temp = {
        //                 "lblFrequency": this.segmentData[i].Name,
        //                 "flxMain": {
        //                     "skin": "f9f9"
        //                 }
        //             };
        //             data.push(temp);
        //          }
        //               	this.view.segCountry.setData(data);
        if (kony.os.deviceInfo().name === "iPhone") {
          this.view.flxHeader.isVisible = false;
          this.view.flxMainContainer.top = "0dp";
        }
        else{
          this.view.flxHeader.isVisible = true;
          this.view.flxMainContainer.top = "56dp";
        } 
        if(this.segmentData.length===0){
          //this.view.flxNoCountries.isVisible=true;
          this.view.segCountry.isVisible=false;
        }
        else{
          //this.view.flxNoCountries.isVisible=false;
          this.view.segCountry.isVisible=true;
          var data=[];
          for (var i = 0; i < this.segmentData.length; i++) {
            var temp = {
              "lblFrequency": this.segmentData[i].Name,
              "flxMain": {
                "skin": "f9f9"
              }
            };
            data.push(temp);
          }
          this.view.segCountry.setData(data);
        }
        this.view.flxSearch.isVisible = true;
      } else {
        this.view.customSearchbox.tbxSearch.text="";
        this.view.flxSearch.isVisible = false;
        this.view.flxHeader.isVisible = false;
        this.view.flxMainContainer.top = "40dp";
        this.view.flxHeaderSearchbox.isVisible = true;
        this.view.customSearchbox.tbxSearch.setFocus(true);
      }        
    }
    catch(ex)
    {

    }    
  },
  */
  
  setSegmentData : function(countryList)
  {
    try
    {
      this.view.flxNoCountries.isVisible=false;
      var data=[];
      for(var i=0;i<countryList.length;i++){
        var temp = {"lblFrequency":countryList[i].Name,"flxMain":{"skin":"f9f9"}};
        data.push(temp);
      }
      this.view.segCountry.setData(data);
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var countryName=transferModule.presentationController.getCountryName();
      var index=0;
      var formatData=this.view.segCountry.data;
      var newData=[];
      if(countryName){
        data=[];
        for(var i=0;i<countryList.length;i++){
          if(countryList[i].Name===countryName)
          {
            index=i;
            break;
          }
        }

        for(var i=0;i<formatData.length;i++){
          if(i!==index){
            data.push({"flxMain":{"skin":"f9f9"},"lblFrequency":countryList[i].Name});
          }
          else{
            data.push({"flxMain":{"skin":"sknFlxf9f9f9"},"lblFrequency":countryList[i].Name});
          }
        }
      }
      this.view.segCountry.setData(data);
      this.segmentData=this.view.segCountry.data;        
    }
    catch(ex)
    {

    }    
  },

  getDataMap : function(type)
  {
    try
    {
      var dataMap={};
      dataMap = {
        "lblFrequency":"Name"
      };
      return dataMap;        
    }
    catch(ex)
    {

    }      
  },

  flxBackOnClick: function() 
  {
    try
    {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();         
    }
    catch(ex)
    {

    }      
  },

  onClickCancel: function() 
  {
    try
    {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var navigateToForm=navManager.getEntryPoint("createInternalBankBenificiary");
      var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferMod.presentationController.commonFunctionForNavigation(navigateToForm);       
    }
    catch(ex)
    {

    }      
  },

  showPreshowSearch:function()
  {
    try
    {
      this.view.flxNoCountries.isVisible=false;
      this.view.segCountry.isVisible=true;
      /*//a//
      if (this.view.flxHeaderSearchbox.isVisible == true) {
        this.view.flxHeaderSearchbox.isVisible = false;
        this.view.flxSearch.isVisible = true;
        this.view.flxHeader.isVisible = true;
        if (kony.os.deviceInfo().name === "iPhone") {
          this.view.flxMainContainer.top = "0dp";
        }
        else{
          this.view.flxMainContainer.top = "56dp";
        }
      }
      */
    }
    catch(ex)
    {

    }     
  },


  tbxSearchOnTextChange:function()
  {
    try
    {
      var searchtext=this.view.tbxSearch.text.toLowerCase();
      var data = this.segmentData;
      var searchSegmentData = applicationManager.getDataProcessorUtility().commonSegmentSearch("lblFrequency",searchtext,data);
      if(searchSegmentData.length===0){
        this.view.segCountry.isVisible=false;
        this.view.flxNoCountries.isVisible=true;
      }
      else{
        this.view.flxNoCountries.isVisible=false;
        this.view.segCountry.isVisible=true;
        this.view.segCountry.setData(searchSegmentData);
      }       
    }
    catch(ex)
    {

    }    	
  },

  
  renderTitleBar :function()
  {
    try
    {
      var deviceUtilManager = applicationManager.getDeviceUtilManager();
      var isIpad = deviceUtilManager.isIpad();
      if(!isIpad){
        this.view.flxHeader.isVisible = true;
      }
      else{
        this.view.flxHeader.isVisible = false;
      }         
    }
    catch(ex)
    {

    }   
  }, 
  
  cancelSearch : function() 
  {
    try
    {
      this.view.tbxSearch.text = "";
      this.view.segCountry.isVisible = true;
      this.view.flxNoCountries.isVisible = false;
      this.view.segCountry.setData(this.segmentData);   
    }
    catch(ex)
    {

    }    
  },  
     
});