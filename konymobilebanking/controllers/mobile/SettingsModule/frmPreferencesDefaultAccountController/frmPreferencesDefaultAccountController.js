define({
	init : function(){
		var navManager = applicationManager.getNavigationManager();
		var currentForm=navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
	},
    preShow: function () {
        if(kony.os.deviceInfo().name==="iPhone"){
            this.view.flxHeader.isVisible = false;
        }
        else{
            this.view.flxHeader.isVisible = true;
        }
        this.initActions();
        //this.setAccountsSegmentData();	
        this.setSegDefaultAcct();
        var navManager = applicationManager.getNavigationManager();
	  	var currentForm = navManager.getCurrentForm();
	    applicationManager.getPresentationFormUtility().logFormName(currentForm);
	  	applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function () {
        var scope = this;
        this.view.segAccounts.onRowClick=this.segAccountsOnClick;
        this.view.customHeader.flxBack.onClick=function(){
        	var navManager = applicationManager.getNavigationManager();
           navManager.goBack(); 
    	};        
    },
	  setSegDefaultAcct : function(){
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo("frmPreferencesDefaultAccount"); 
		if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.title = kony.i18n.getLocalizedString("kony.mb.default.account");	
        }  
        this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.default.account");		
        this.view.segAccounts.widgetDataMap={
              				       lblAccountName:"nickName",
                                   lblBankName:"bankName",
              					   lblAccountID:"accountID",
                       			   imgRadio:"imgRadio"
                             };
         for(var i=0;i<data[1].length;i++){
          if(data[1][i].accountID === data[0].lblAccId){
              data[1][i].imgRadio = {src:"radiobtn.png"};             
           }
           else{
          	  data[1][i].imgRadio = {src:"radiobuttoninactive.png"};
           }            
         }                
         this.view.segAccounts.setData(data[1]);       
    },
    segAccountsOnClick : function(){  
         var selectedAcntRow = this.view.segAccounts.selectedIndex[1];  
         var segData = this.view.segAccounts.data;   
         for (var i = 0; i < segData.length; i++)
   		 {
    		if(selectedAcntRow == i)
             {
               if(segData[i].imgRadio.src == "radiobtn.png")
        		segData[i].imgRadio.src="radiobuttoninactive.png";
               else
                {
                 segData[i].imgRadio.src="radiobtn.png";
                 this.selAccountId = segData[i].accountID; 
                 var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        	     settingsMode.presentationController.defaultAccountBack(this.selAccountId);  
                }
             }
    		else
        		segData[i].imgRadio.src="radiobuttoninactive.png";
    	 }
        this.view.segAccounts.setData(segData);
    },
});