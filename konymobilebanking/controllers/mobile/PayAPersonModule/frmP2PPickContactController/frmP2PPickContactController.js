define({
     contactData : {},
     contactArray : [],
     contactsMasterData:null,
     contactsMasterCount:0,
    frmPreShow: function() {
      applicationManager.getPresentationUtility().showLoadingScreen();
      this.view.customSearchbox.tbxSearch.setFocus(false);
      this.showPreshowSearch();
      this.contactsMasterCount=0;
        this.view.customHeader.btnRight.onClick = this.onClickCancel;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.tbxSearch.onTouchStart = this.showSearch;
        this.view.customSearchbox.tbxSearch.onTextChange=this.tbxSearchOnTextChange;
        this.view.customSearchbox.btnCancel.onClick = this.showSearch;
        this.view.segContacts.onRowClick = this.segContactsOnRowClick;
        this.view.flxPhone1.onClick = this.flxRadioBtn1OnClick;
        this.view.flxPhone2.onClick = this.flxRadioBtn2OnClick;
        this.view.flxPhone3.onClick = this.flxRadioBtn3OnClick;
        this.view.flxEmail1.onClick = this.flxRadioBtn4OnClick;
        this.view.flxEmail2.onClick = this.flxRadioBtn5OnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.flxCross.onClick = this.hidePopup;
        this.populateContacts();
        this.hidePopup();
      if(kony.os.deviceInfo().name==="iPhone"){
        this.view.flxHeader.isVisible = false;
        this.view.flxMainContainer.top="0dp";
      }
      else{
        this.view.flxHeader.isVisible = true;
        this.view.flxMainContainer.top="56dp";
      }
    },
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    flxBackOnClick: function() {
      	var navManager = applicationManager.getNavigationManager();	
		navManager.goBack();
    },
    segContactsOnRowClick: function() {
        //this.showPopup();
      this.segOnRowClick();
    },
  	tbxSearchOnTextChange:function(){
      	var searchtext=this.view.customSearchbox.tbxSearch.text.toLowerCase();
    	var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
      	var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var searchSegmentData=null;
        searchSegmentData=p2pMod.presentationController.searchInputStringForContactsList(searchtext,this.contactArray);  
        if(searchSegmentData.length===0){
          this.view.flxNoContacts.isVisible=true;
          this.view.segContacts.isVisible=false;
        }
        else{
          this.view.flxNoContacts.isVisible=false;
          this.view.segContacts.isVisible=true;
          this.setSegData(searchSegmentData);
        }
      	
  	},
    flxRadioBtn1OnClick: function() {
        if (this.view.imgRadioBtn1.src === "radiobtn.png") {
            this.view.imgRadioBtn1.src = "radiobuttoninactive.png";
        } else {
            this.contactData.contact=this.view.lblPhone1.text;
            this.view.imgRadioBtn1.src = "radiobtn.png";
            this.view.imgRadioBtn2.src = "radiobuttoninactive.png";
            this.view.imgRadioBtn3.src = "radiobuttoninactive.png";
            this.view.imgRadioBtn4.src = "radiobuttoninactive.png";
            this.view.imgRadioBtn5.src = "radiobuttoninactive.png";
        }
      this.isSelectedNumberOrEmail();
    },
    flxRadioBtn2OnClick: function() {
        if (this.view.imgRadioBtn2.src === "radiobtn.png") {
            this.view.imgRadioBtn2.src = "radiobuttoninactive.png";
        } else {
            this.contactData.contact=this.view.lblPhone2.text;
            this.view.imgRadioBtn2.src = "radiobtn.png";
            this.view.imgRadioBtn1.src = "radiobuttoninactive.png";
            this.view.imgRadioBtn3.src = "radiobuttoninactive.png";
            this.view.imgRadioBtn4.src = "radiobuttoninactive.png";
            this.view.imgRadioBtn5.src = "radiobuttoninactive.png";
        }
      this.isSelectedNumberOrEmail();
    },
    flxRadioBtn3OnClick: function() {
        if (this.view.imgRadioBtn3.src === "radiobtn.png") {
            this.view.imgRadioBtn3.src = "radiobuttoninactive.png";
        } else {
            this.contactData.contact=this.view.lblPhone3.text;
            this.view.imgRadioBtn3.src = "radiobtn.png";
            this.view.imgRadioBtn2.src = "radiobuttoninactive.png";
            this.view.imgRadioBtn1.src = "radiobuttoninactive.png";
            this.view.imgRadioBtn4.src = "radiobuttoninactive.png";
            this.view.imgRadioBtn5.src = "radiobuttoninactive.png";
        }
      this.isSelectedNumberOrEmail();
    },
    flxRadioBtn4OnClick: function() {
        if (this.view.imgRadioBtn4.src === "radiobtn.png") {
            this.view.imgRadioBtn4.src = "radiobuttoninactive.png";
        } else {
            this.view.imgRadioBtn4.src = "radiobtn.png";
            this.view.imgRadioBtn2.src = "radiobuttoninactive.png";
            this.view.imgRadioBtn3.src = "radiobuttoninactive.png";
            this.view.imgRadioBtn1.src = "radiobuttoninactive.png";
            this.view.imgRadioBtn5.src = "radiobuttoninactive.png";
        }
      this.isSelectedNumberOrEmail();
    },
    flxRadioBtn5OnClick: function() {
        if (this.view.imgRadioBtn5.src === "radiobtn.png") {
            this.view.imgRadioBtn5.src = "radiobuttoninactive.png";
        } else {
            this.view.imgRadioBtn5.src = "radiobtn.png";
            this.view.imgRadioBtn2.src = "radiobuttoninactive.png";
            this.view.imgRadioBtn3.src = "radiobuttoninactive.png";
            this.view.imgRadioBtn4.src = "radiobuttoninactive.png";
            this.view.imgRadioBtn1.src = "radiobuttoninactive.png";
        }
      this.isSelectedNumberOrEmail();
    },
    btnContinueOnClick: function() {
      var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      var formName;
      if(p2pMod.presentationController.getContactType()==="phone"){  
        formName = "frmP2PRecPhoneNo";
      }
      else{
        formName = "frmP2PRecEmail";
      }
      p2pMod.presentationController.navigateToP2PRecipientNamefromPickContacts(formName,this.contactData);        
    },
    showPopup: function() {
        this.view.flxPickContact.setVisibility(true);
        this.view.flxHeader.setEnabled(false);
        this.view.flxHeaderSearchbox.setEnabled(false);
        this.view.flxMainContainer.setEnabled(false);
    },
    hidePopup: function() {
        this.view.flxPickContact.setVisibility(false);
        this.view.flxHeader.setEnabled(true);
        this.view.flxHeaderSearchbox.setEnabled(true);
        this.view.flxMainContainer.setEnabled(true);
        this.incompleteCodeView();
    },
 showSearch: function() {
   applicationManager.getPresentationUtility().showLoadingScreen();
        if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
              	this.view.segContacts.setData(this.contactsMasterData);
        		if (kony.os.deviceInfo().name === "iPhone") {
        			this.view.flxHeader.isVisible = false;
                  this.view.flxMainContainer.top="0dp";
      			}
      			else{
        			this.view.flxHeader.isVisible = true;
                  this.view.flxMainContainer.top="56dp";
      			} 
        		if(this.contactsMasterData.length===0){
      				this.view.flxNoContacts.isVisible=true;
        			this.view.segContacts.isVisible=false;
      			}
              	else{
         		   this.view.flxNoContacts.isVisible=false;
        			this.view.segContacts.isVisible=true;
        			this.view.segContacts.setData(this.contactsMasterData);
        		}
                this.view.flxSearch.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
          		this.view.flxScrlMain.top = "55dp";
            } else {
              	this.view.customSearchbox.tbxSearch.text="";
              	this.view.flxSearch.isVisible = false;
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxScrlMain.top = "0dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.setFocus(true);
            }
   applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    populateContacts : function(){
     //var array=kony.contact.find("*", true);
      var navManager = applicationManager.getNavigationManager();
      var contactsData=navManager.getCustomInfo("frmP2PPickContact");
      this.contactArray=contactsData;
      this.setSegData(contactsData);
    },
    setSegData : function(segmentData){
      var dataMap=this.getDataMap();
      this.view.segContacts.widgetDataMap = dataMap;
      var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      var recipientDetails=p2pMod.presentationController.getP2PPayeeDetails();
      var segPhoneData=[];
      var segEmailData=[];
      if(segmentData && p2pMod.presentationController.getContactType()==="phone"){
        for(var i=0;i<segmentData.length;i++){
          if(segmentData[i].phone && segmentData[i].phone.length>0){	
            var phoneDetails={};
            phoneDetails.phone=segmentData[i].phone[0].number;
            phoneDetails.firstname=segmentData[i].firstname;
            phoneDetails.lastname=segmentData[i].lastname;
            phoneDetails.phoneList=segmentData[i].phone;
            segPhoneData.push(phoneDetails);
          }
        }
        if(this.contactsMasterCount===0){
          this.contactsMasterCount=1;
          this.contactsMasterData=segPhoneData;
        }   
        if(segPhoneData.length===0){
          this.view.flxNoContacts.isVisible=true;
          this.view.segContacts.isVisible=false;
        }
        else{
          this.view.flxNoContacts.isVisible=false;
          this.view.segContacts.isVisible=true;
        }       
        this.view.segContacts.setData(segPhoneData);
      }
       else if(segmentData && p2pMod.presentationController.getContactType()==="email"){
       for(var i=0;i<segmentData.length;i++){
         if(segmentData[i].email && segmentData[i].email.length>0){
           var emailDetails={};
           emailDetails.phone=segmentData[i].email[0].id;
           emailDetails.firstname=segmentData[i].firstname;           
           emailDetails.lastname=segmentData[i].lastname;
           emailDetails.emailList=segmentData[i].email;
           segEmailData.push(emailDetails);
         }
         
        }
         if(this.contactsMasterCount===0){
          this.contactsMasterCount=1;
         this.contactsMasterData=segEmailData;
         }
         if(segEmailData.length===0){
           this.view.flxNoContacts.isVisible=true;
           this.view.segContacts.isVisible=false;
         }
         else{
           this.view.flxNoContacts.isVisible=false;
           this.view.segContacts.isVisible=true;
         }         
           this.view.segContacts.setData(segEmailData);         
       }
      else{
        this.view.flxNoContacts.isVisible=true;
        this.view.segContacts.isVisible=false;
      }
        
      },
    	getDataMap : function(){
      	var dataMap={};
         dataMap = {
            "lblFirstName":"firstname",
            "lblLastName":"lastname",
            "lblPhoneNo":"phone",
            "template": "flxContacts"	
        };
   	  	return dataMap;
  	},
  setRecipientName:function(selectedContactDetails){    
    if(selectedContactDetails.firstname){
      this.contactData.recipientName=selectedContactDetails.firstname;
    }else if(selectedContactDetails.firstname==="" || selectedContactDetails.firstname===null || selectedContactDetails.firstname===undefined){
      this.contactData.recipientName="";
    }
    if(selectedContactDetails.lastname){
      this.contactData.recipientName=this.contactData.recipientName+" "+selectedContactDetails.lastname;
    }
    else if(selectedContactDetails.lastname==="" || selectedContactDetails.lastname===null || selectedContactDetails.lastname===undefined){
      this.contactData.recipientName=this.contactData.recipientName;
    }          
  },
  segOnRowClick : function(){
    var rowid=this.view.segContacts.selectedRowIndex[1];
    var selectedContactDetails = this.view.segContacts.data[rowid];   
    var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var recipientDetails=p2pMod.presentationController.getP2PPayeeDetails();
    this.setRecipientName(selectedContactDetails);
    if(p2pMod.presentationController.getContactType()==="phone"){
      this.setFlexPhoneVisibilitiesOn();
      this.removePreviousSelection();
      if(selectedContactDetails.phoneList.length>=3){
        if(selectedContactDetails.phoneList[0]!==null || selectedContactDetails.phoneList[0]!==undefined ){
          this.view.lblPhone1.text=selectedContactDetails.phoneList[0].number;
        }
        if(selectedContactDetails.phoneList[1]!==null || selectedContactDetails.phoneList[1]!==undefined ){
          this.view.lblPhone2.text=selectedContactDetails.phoneList[1].number;
        }
        if(selectedContactDetails.phoneList[2]!==null || selectedContactDetails.phoneList[2]!==undefined ){
          this.view.lblPhone3.text=selectedContactDetails.phoneList[2].number;
        }
        this.showPopup();
      }
      else if(selectedContactDetails.phoneList.length==2){
        if(selectedContactDetails.phoneList[0]!==null || selectedContactDetails.phoneList[0]!==undefined ){
          this.view.lblPhone1.text=selectedContactDetails.phoneList[0].number;
        }
        if(selectedContactDetails.phoneList[1]!==null || selectedContactDetails.phoneList[1]!==undefined ){
         this.view.lblPhone2.text=selectedContactDetails.phoneList[1].number;
        }
        this.view.flxPhone3.setVisibility(false);
        this.showPopup();
      }
      else if(selectedContactDetails.phoneList.length==1){
        /*this.view.lblPhone1.text=selectedContactDetails.phoneList[0].number;
        this.view.flxPhone2.setVisibility(false);
        this.view.flxPhone3.setVisibility(false);*/
        applicationManager.getPresentationUtility().showLoadingScreen();
        this.contactData.contact=selectedContactDetails.phoneList[0].number;
        this.btnContinueOnClick();
      }     
    }
    if(p2pMod.presentationController.getContactType()==="email"){
      this.setFlexEmailVisibilitiesOn();
      this.removePreviousSelection();
      if(selectedContactDetails.emailList.length>=2){
        if(selectedContactDetails.emailList[0]!==null || selectedContactDetails.emailList[0]!==undefined ){
          this.view.flxPhone1.setVisibility(true);
          this.view.lblPhone1.text=selectedContactDetails.emailList[0].id;
        }
        if(selectedContactDetails.emailList[1]!==null || selectedContactDetails.emailList[1]!==undefined ){
          this.view.flxPhone2.setVisibility(true);
          this.view.lblPhone2.text=selectedContactDetails.emailList[1].id;
        }
        this.showPopup();
      }
      else if(selectedContactDetails.emailList.length==1){
        /*this.view.lblPhone1.text=selectedContactDetails.emailList[0].id;
        this.view.flxPhone2.setVisibility(false);*/
        applicationManager.getPresentationUtility().showLoadingScreen();
        this.contactData.contact=selectedContactDetails.emailList[0].id;
        this.btnContinueOnClick();
      }     
    }
  },
  removePreviousSelection:function(){
    this.view.imgRadioBtn5.src = "radiobuttoninactive.png";
    this.view.imgRadioBtn2.src = "radiobuttoninactive.png";
    this.view.imgRadioBtn3.src = "radiobuttoninactive.png";
    this.view.imgRadioBtn4.src = "radiobuttoninactive.png";
    this.view.imgRadioBtn1.src = "radiobuttoninactive.png";
  },
  setFlexPhoneVisibilitiesOn : function(){
        this.view.flxPhone1.setVisibility(true);
        this.view.flxPhone2.setVisibility(true);
        this.view.flxPhone3.setVisibility(true);
        this.view.flxEmail1.setVisibility(false);
        this.view.flxEmail2.setVisibility(false);
  },
    setFlexEmailVisibilitiesOn : function(){
        this.view.flxPhone1.setVisibility(true);
        this.view.flxPhone2.setVisibility(true);
        this.view.flxPhone3.setVisibility(false);
        this.view.flxEmail1.setVisibility(false);
        this.view.flxEmail2.setVisibility(false);
  },
  isSelectedNumberOrEmail : function(){
    if(this.view.imgRadioBtn5.src==="radiobuttoninactive.png" &&
            this.view.imgRadioBtn2.src=== "radiobuttoninactive.png" &&
            this.view.imgRadioBtn3.src==="radiobuttoninactive.png" &&
            this.view.imgRadioBtn4.src==="radiobuttoninactive.png" &&
            this.view.imgRadioBtn1.src=== "radiobuttoninactive.png"){
      this.incompleteCodeView();
    }
    else{
      this.enterCodePostAction();
    }
  },
 showPreshowSearch:function(){
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
  },
  onClickCancel: function() {
      	var navManager = applicationManager.getNavigationManager();
    	navManager.goBack();
    },
    enterCodePostAction: function() {
      this.view.btnContinue.setEnabled(true);
      this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    incompleteCodeView: function() {
      this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
      this.view.btnContinue.setEnabled(false);
    },
  bindGenericError:function(errorMsg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, errorMsg);
  }
});