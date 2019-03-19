define({ 

  contactData: {},

  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.initActions();
    this.initHeaderActions();
    this.view.flxPopUpContainer.setVisibility(false);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    this.setSegData(this.getRawData());
  },

  initActions: function() {
    this.view.tbxSearch.onTextChange = this.showHideSearch;
    this.view.flxHeaderSearchbox.customSearchbox.flxSearchMain.btnCancel.onClick = this.cancelSearch;
    this.view.segPickContact.onRowClick = this.chooseContact;
    this.view.customSearchbox.tbxSearch.onTextChange = this.searchOnTextChange;
    this.view.segPickContactAlphabet.onRowClick = this.alphabetSearch;
  },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
    }
  },

  getRawData: function() {
    var segContactList = [];
    var navManager = applicationManager.getNavigationManager();
    return navManager.getCustomInfo("frmP2PPickContact");
  },

  setSegData: function(segmentData) {
    var dataMap = this.getDataMap();
    this.view.segPickContact.widgetDataMap = dataMap;
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var contactType = payAPersonModule.presentationController.getContactType();
    this.setContactList(segmentData, contactType);      
  },
  
  setContactList: function(segmentData, contactType) {
    var segContactList = [];
    var data;
    if (segmentData) {
      data = segmentData;
    } else {
      data = this.getRawData();
    }

    if (data) {
      data.forEach(function(contact) {
        if (contact[contactType]) {	
          var contactDetails = {};
          if (contactType === "phone") {
            if(contact.phone && contact.phone[0] && contact.phone[0].number){
              contactDetails.phone = contact.phone[0].number;
              contactDetails.contactList = contact.phone; 
              contactDetails.firstname = (contact.firstname) ? contact.firstname : '';
              contactDetails.lastname = (contact.lastname) ? contact.lastname : '';
              contactDetails.fullName = contactDetails.firstname + " " + contactDetails.lastname;       	
              segContactList.push(contactDetails);
            }
            
          } else if (contactType === "email"){
            if(contact.email && contact.email[0] && contact.email[0].id){
              contactDetails.phone = contact.email[0].id;
              contactDetails.contactList = contact.email;
              contactDetails.firstname = (contact.firstname) ? contact.firstname : '';
              contactDetails.lastname = (contact.lastname) ? contact.lastname : '';
              contactDetails.fullName = contactDetails.firstname + " " + contactDetails.lastname;       	
              segContactList.push(contactDetails);
            }

          }          
        }
      });
      this.view.segPickContact.setData(segContactList);
    } else {
      this.toggleContactList(true);
    }
  },

  toggleContactList: function(visibility) {
    this.view.flxNoContacts.setVisibility(visibility);
    this.view.segPickContact.setVisibility(!visibility);
  },

  chooseContact: function() {
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var contactType = payAPersonModule.presentationController.getContactType();
    var segment = this.view.segPickContact;
    var index = segment.selectedIndex[1];
    var rowData = segment.data[index];
    var rowInfo = segment.data[index].contactList; 
    var contacts = [];
    var pickContact = this.view.pickContact;
    var popUp = this.view.flxPopUpContainer;
    var self = this;
    this.contactData.recipientName = rowData.fullName;

    contacts = rowInfo.map(function(contact) {
      return contactType === "phone" ? contact.number : contact.id;
    });

    pickContact.setData(contacts);
    popUp.setVisibility(true);

    pickContact.onClickCancel = function() {
      popUp.setVisibility(false);
    };

    pickContact.onClickContinue = function() {
      self.contactData.contact = pickContact.getSelectedItem();
      var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      var formName;
      if(payAPersonModule.presentationController.getContactType()==="phone"){  
        formName = "frmP2PRecPhoneNo";
      }
      else{
        formName = "frmP2PRecEmail";
      }
      payAPersonModule.presentationController.navigateToP2PRecipientNamefromPickContacts(formName,self.contactData);             
    };
    
  },

  searchOnTextChange: function() {
    var query = this.view.customSearchbox.tbxSearch.text.toLowerCase();
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var dataToSearch = this.getRawData();
    var searchSegmentData = payAPersonModule.presentationController.searchInputStringForContactsList(query, dataToSearch);  
    if (searchSegmentData.length === 0) {
      this.view.flxNoContacts.setVisibility(true);
      this.view.segPickContact.setVisibility(false);
    } else {
      this.view.flxNoContacts.setVisibility(false);
      this.view.segPickContact.setVisibility(true);
      this.setSegData(searchSegmentData);
    }
  },

  alphabetSearch: function() {
    var segment = this.view.segPickContactAlphabet;
    var index = segment.selectedIndex[1];
    var searchByLetter = segment.data[index].lblAlphabetLetter.toLowerCase();
    var dataToSearch = this.getRawData();
    var payAPersonModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var searchSegmentData = payAPersonModule.presentationController.searchInputStringForContactsList(searchByLetter, dataToSearch);
    this.setSegData(searchSegmentData);
  },  

  getDataMap: function() {
    var dataMap = {};
    dataMap = {
      lblBankName: "phone",
      lblAccountName: "fullName",
      contactList: "contactList",
    };
    return dataMap;
  },  

  backNavigation: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack(); 
  },

  showHideSearch: function() {
    this.textSearch = this.view.flxMainContainer.flxSearch.flxSearchMain.tbxSearch.text;
    this.view.customSearchbox.flxSearchMain.tbxSearch.setFocus(true);
    this.view.flxHeaderSearchbox.customSearchbox.setVisibility(true);
    this.view.customSearchbox.flxSearchMain.tbxSearch.text = this.textSearch;
    this.view.flxSearch.setVisibility(false);
    this.view.flxHeaderSearchbox.setVisibility(true);
    this.view.segPickContactAlphabet.top = '0Dp'; 
  },

  cancelSearch: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.flxHeader.setVisibility(true);
    }
    this.view.flxHeaderSearchbox.customSearchbox.flxSearchMain.tbxSearch.text = '';
    this.view.flxHeaderSearchbox.customSearchbox.setVisibility(false);
    this.view.flxSearch.setVisibility(true);
    this.view.flxSearch.tbxSearch.setFocus(true);
    this.view.flxMainContainer.flxSearch.flxSearchMain.tbxSearch.text = '';
    this.view.segPickContactAlphabet.top = '80Dp';
  }
});