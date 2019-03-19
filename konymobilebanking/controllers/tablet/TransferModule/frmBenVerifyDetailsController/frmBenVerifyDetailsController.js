define({
  	timerCounter:0,
  
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
  
    preShow: function() {
      try
        {
        this.renderTitleBar();
      	this.populateDetails();
        this.initActions();
        this.initialUiSettings(); 
      	var navManager = applicationManager.getNavigationManager();
    	var currentForm=navManager.getCurrentForm();
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	applicationManager.getPresentationFormUtility().logFormName(currentForm);          
        }
      catch(ex)
        {
          
        }
    },
  
  initActions:function(){
      try
        {
    	var scope=this;

    	this.view.btnContinue.onClick = scope.btnContinueOnClick;
        this.view.customHeaderTablet.flxBack.onClick = scope.flxBackOnClick;
        this.view.customHeaderTablet.btnRight.onClick = scope.onClickCancel;          
        }
      catch(ex)
        {
          
        }    
  },
  
  initialUiSettings : function()
  {
    try
      {
        //right pane
        this.setRightPaneData();
      }
    catch(ex)
      {
        
      }
  },
  
    btnRightOnClick: function() {
              try
        {
          
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
  
    flxBackOnClick: function() {
      try
        {
      	var navMan=applicationManager.getNavigationManager();
     	navMan.goBack();          
        }
      catch(ex)
        {
          
        }      
    },
  
    btnContinueOnClick: function() {
      try
        {
       	applicationManager.getPresentationUtility().showLoadingScreen();
      	var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    	var benificiaryData=transferModule.presentationController.getBenificiaryData();
      	var nickName=this.view.txtAccNickName.text;
      	if(nickName==="" || nickName===null || nickName===undefined){
          	nickName=benificiaryData.beneficiaryName;
        }
      	transferModule.presentationController.setNickName(nickName);
      	transferModule.presentationController.setIsVerified(true);
      	if(transferModule.presentationController.getFlowType()==="InternationalRecipients" || transferModule.presentationController.getFlowType()==="InternationalTransferCreateTransfer"){
          	transferModule.presentationController.setIsInternationalAccount(true);
        	transferModule.presentationController.setIsSameBankAccount(false);
          	transferModule.presentationController.setBankName(this.view.lblBankNameValue.text);
          	transferModule.presentationController.createInternationalBenificiary();
        }
      	else{
      		transferModule.presentationController.setIsInternationalAccount(false);
          	if(transferModule.presentationController.getFlowType()==="SameBankRecipients"|| transferModule.presentationController.getFlowType()==="OtherKonyBankMembersCreateTransfer"){
              	transferModule.presentationController.setIsSameBankAccount(true);
      			transferModule.presentationController.setBankName(this.view.lblBankNameValue.text);
              	transferModule.presentationController.createInternalBenificiary();
          	}
      		else{
              	transferModule.presentationController.setIsSameBankAccount(false);
          		transferModule.presentationController.setBankName(this.view.lblBankNameValue.text);
          		transferModule.presentationController.createExternalBenificiary(benificiaryData);
      		}
        }         
        }
      catch(ex)
        {
          
        }      
    },
  
  	populateDetails:function(){
      try
        {
       	var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    	var benificiaryData=transferModule.presentationController.getBenificiaryData();
      	var bankName=transferModule.presentationController.getBankName();
      	var accountNumber=JSON.parse(JSON.stringify(benificiaryData.accountNumber));
      	var maskedAccountNumber=applicationManager.getDataProcessorUtility().maskAccountNumber(accountNumber);
          
		if(transferModule.presentationController.getFlowType()==="InternationalRecipients" || transferModule.presentationController.getFlowType()==="InternationalTransferCreateTransfer"){
          		this.view.lblAccHolderValue.text=benificiaryData.beneficiaryName;
	      		this.view.lblAccNoValue.text=maskedAccountNumber;
	      		this.view.lblAccTypeVal.text=benificiaryData.accountType;
	      		this.view.flxRoutNum.setVisibility(true);
	          	this.view.flxBankName.isVisible=true;
    	      	this.view.lblBankNameValue.isVisible=true;
                this.view.lblRoutNum.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.SwiftCode");
				this.view.lblBankNameValue.text="Chase Bank";
	          	this.view.lblRoutValue.text=benificiaryData.swiftCode;
	          	this.view.txtAccNickName.text=benificiaryData.beneficiaryName;
                this.view.flxBankLocation.isVisible=true;
          		this.view.lblBankLocationValue.text=benificiaryData.countryName;
        }
      else{
      	if(transferModule.presentationController.getFlowType()==="SameBankRecipients" || transferModule.presentationController.getFlowType()==="OtherKonyBankMembersCreateTransfer"){
      		this.view.lblAccHolderValue.text=benificiaryData.beneficiaryName;
      		this.view.lblAccNoValue.text=maskedAccountNumber;
      		this.view.lblAccTypeVal.text=benificiaryData.accountType;
      		this.view.lblBankNameValue.text=bankName;
            this.view.flxRoutNum.setVisibility(false);
          	this.view.txtAccNickName.text=benificiaryData.beneficiaryName;
          	this.view.flxBankLocation.isVisible=false;
        }
        else{
      		this.view.lblAccHolderValue.text=benificiaryData.beneficiaryName;
      		this.view.lblAccNoValue.text=maskedAccountNumber;
      		this.view.lblAccTypeVal.text=benificiaryData.accountType;
      		this.view.flxRoutNum.setVisibility(true);
          	this.view.lblRoutNum.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.RoutingNumber");
          	this.view.flxBankName.isVisible=true;
          	this.view.lblBankNameValue.isVisible=true;
			this.view.lblBankNameValue.text="Chase Bank";
          	this.view.lblRoutValue.text=benificiaryData.routingNumber;
          	this.view.txtAccNickName.text=benificiaryData.beneficiaryName;
          	this.view.flxBankLocation.isVisible=false;
        }
      }         
        }
      catch(ex)
        {
          
        }      
    },
  
	onClickCancel: function() {
      try
        {
       	applicationManager.getPresentationUtility().dismissLoadingScreen();
      	var navManager = applicationManager.getNavigationManager();	
      	var navigateToForm=navManager.getEntryPoint("createInternalBankBenificiary");
      	var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      	transferMod.presentationController.commonFunctionForNavigation(navigateToForm);         
        }
      catch(ex)
        {
          
        }      
    },
  
  	bindGenericError: function (errorMsg) {
      try
        {
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	var scopeObj = this;
    	applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);          
        }
      catch(ex)
        {
          
        }      
  	},
  
  setRightPaneData : function()
  {
    try
    {
      var scope = this;
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var transferFlowType = transferModule.presentationController.getFlowType();

      switch(transferFlowType)
      {
        case "OtherKonyBankMembersCreateTransfer":
          this.setRighPaneForOtherKonyBankMembers();
          break;
        case "OtherBankAccountsCreateTransfer":
          this.setRightPaneForOtherBankAccounts();
          break;
        case "InternationalTransferCreateTransfer": 
          this.setRightPaneForInternationalAccounts();
      }      
    }
    catch(ex)
    {

    }
  },

  setRighPaneForOtherKonyBankMembers : function()
  {
    try
    {
      this.view.RightPane.flxFirstRow.isVisible = false;
      this.view.RightPane.flxSecondRow.isVisible = false;
      this.view.RightPane.flxThirdRow.isVisible = false;
      this.view.RightPane.flxFourthRow.isVisible = true;
      this.view.RightPane.flxFifthRow.isVisible = true;
      this.view.RightPane.flxSixthRow.isVisible = true;
      this.view.RightPane.flxSeventhRow.isVisible = true;  

      this.setRecipientAccountNumber();
      this.setRecipientAccountType();
      this.setRecipientName();
    }
    catch(ex)
    {

    }
  },

  setRightPaneForOtherBankAccounts : function()
  {
    try
    {
      this.view.RightPane.flxFirstRow.isVisible = false;
      this.view.RightPane.flxSecondRow.isVisible = false;
      this.view.RightPane.flxThirdRow.isVisible = true;
      this.view.RightPane.flxFourthRow.isVisible = true;
      this.view.RightPane.flxFifthRow.isVisible = true;
      this.view.RightPane.flxSixthRow.isVisible = true;
      this.view.RightPane.flxSeventhRow.isVisible = true;  

      this.setRecipientRoutingNumber();
      this.setRecipientAccountNumber();
      this.setRecipientAccountType();
      this.setRecipientName();
    }
    catch(ex)
    {

    }
  },

  setRightPaneForInternationalAccounts : function()
  {
    try
    {
      this.view.RightPane.flxFirstRow.isVisible = true;
      this.view.RightPane.flxSecondRow.isVisible = true;
      this.view.RightPane.flxThirdRow.isVisible = false;
      this.view.RightPane.flxFourthRow.isVisible = true;
      this.view.RightPane.flxFifthRow.isVisible = true;
      this.view.RightPane.flxSixthRow.isVisible = true;
      this.view.RightPane.flxSeventhRow.isVisible = true;

      this.setRecipientCountry();
      this.setRecipientSwiftCode();
      this.setRecipientAccountNumber();
      this.setRecipientAccountType();
      this.setRecipientName();
    }
    catch(ex)
    {

    }
  },

  setRecipientCountry : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var recipientCountry = transferModule.presentationController.getCountryName();
      this.view.RightPane.lblCheckedRowName.text = recipientCountry;
    }
    catch(ex)
    {

    }
  },

  setRecipientSwiftCode : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var recipientSwiftCode = transferModule.presentationController.getSwiftCode();
      this.view.RightPane.lblSecondCheckedRowName.text = recipientSwiftCode;
    }
    catch(ex)
    {

    }    
  },

  setRecipientRoutingNumber : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var recipientRoutingNumber = transferModule.presentationController.getRoutingNumber();
      this.view.RightPane.lblThirdCheckedRowName.text = recipientRoutingNumber;
    }
    catch(ex)
    {

    }     
  }, 

  setRecipientAccountNumber : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var recipientAccountNumber = transferModule.presentationController.getReEnteredAccountNumber();
      var maskedAccountNumber = applicationManager.getDataProcessorUtility().maskAccountNumber(recipientAccountNumber);
      this.view.RightPane.lblFourthCheckedRowName.text = maskedAccountNumber;
    }
    catch(ex)
    {

    }     
  },

  setRecipientAccountType : function()
  {
    try
    {
      var recipientsManager = applicationManager.getRecipientsManager();
      var recipientData = recipientsManager.getBenificiaryData();     

      this.view.RightPane.lblFifthCheckedRowName.text = recipientData.accountType;
    }
    catch(ex)
    {

    }     
  },

  setRecipientName : function()
  {
    try
    {
      var recipientsManager = applicationManager.getRecipientsManager();
      var recipientData = recipientsManager.getBenificiaryData();     

      this.view.RightPane.lblSixthCheckedRowName.text = recipientData.beneficiaryName;
    }
    catch(ex)
    {

    }     
  },  
});