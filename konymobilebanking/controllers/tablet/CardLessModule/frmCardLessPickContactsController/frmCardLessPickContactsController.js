define({
     
	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
  
	preShow: function() {
		this.initActions();
		this.initHeaderActions();
		applicationManager.getPresentationUtility().dismissLoadingScreen();
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
		this.setSegData(this.getRawData());
	},

	initActions: function() {
		this.view.tbxSearch.onTextChange = this.showHideSearch;
		this.view.flxHeaderSearchbox.customSearchbox.flxSearchMain.btnCancel.onClick = this.cancelSearch;	
		this.view.customSearchbox.tbxSearch.onTextChange = this.searchOnTextChange;
        this.view.pickContact.headerText = kony.i18n.getLocalizedString("kony.tab.pickContact.selectContact");
		this.view.segPickContact.onRowClick = this.chooseContact;
		this.view.segPickContactAlphabet.onRowClick = this.alphabetSearch;
	},
  
	initHeaderActions: function() {
		var isIpad = applicationManager.getDeviceUtilManager().isIpad();
		
      	if (!isIpad) {
			this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
		}
	},
  
	backNavigation: function() {
		var navManager = applicationManager.getNavigationManager();
		navManager.goBack();
	},
  
	getRawData: function() {
		var navManager = applicationManager.getNavigationManager();
		return navManager.getCustomInfo("frmCardLessPickContacts");
	},
  
	chooseContact: function() {
		var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
		var contactType = cardlessModule.presentationController.getCashlessContactType();
		var segment = this.view.segPickContact;
		var index = segment.selectedIndex[1];
		var rowData = segment.data[index];
		var rowInfo = segment.data[index].contactList; 
		var contacts = [];
		var pickContact = this.view.pickContact;
		var popUp = this.view.flxPopUpContainer;
      	var contactData = {};
		var self = this;
		contactData.recipientName = rowData.fullName;
        if(!kony.sdk.isNullOrUndefined(rowInfo)){
          contacts = rowInfo.map(function(contact) {
            if(contactType === "phone"){
              if(!kony.sdk.isNullOrUndefined(contact.number)){
                return contact.number;
              }
            }
            else{
              if(!kony.sdk.isNullOrUndefined(contact.id)){
                return contact.id;
              }
            }
          });
        }
		
		pickContact.setData(contacts);
		popUp.setVisibility(true);

		pickContact.onClickCancel = function() {
			popUp.setVisibility(false);
		};

		pickContact.onClickContinue = function() {
			contactData.contact = pickContact.getSelectedItem();
			if(contactType === "phone") {
				cardlessModule.presentationController.setCardlessPhoneNumber(contactData,"frmCardLessPhoneNo");	  
			} else {
				cardlessModule.presentationController.setCardlessEmail(contactData,"frmCardLessEmail");  
			}
		};
	},
  
	searchOnTextChange: function() {
		var query = this.view.customSearchbox.tbxSearch.text.toLowerCase();
		var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
		var dataToSearch = this.getRawData();
		var searchSegmentData = cardlessModule.presentationController.searchInputStringForContactsList(query, dataToSearch);  
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
		var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
		var searchSegmentData = cardlessModule.presentationController.searchInputStringForContactsList(searchByLetter, dataToSearch);
		this.setSegData(searchSegmentData);
	}, 
       	
	setSegData: function(segmentData) {
		var dataMap = this.getDataMap();
		this.view.segPickContact.widgetDataMap = dataMap;
		var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
		var contactType = cardlessModule.presentationController.getCashlessContactType();
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
                      }
					} else {
                      if(contact.email && contact.email[0] && contact.email[0].id){
						contactDetails.phone = contact.email[0].id;
						contactDetails.contactList = contact.email;
                      }
					}

					contactDetails.firstname = (contact.firstname) ? contact.firstname : '';
					contactDetails.lastname = (contact.lastname) ? contact.lastname : '';
					contactDetails.fullName = contactDetails.firstname + " " + contactDetails.lastname;       	
					segContactList.push(contactDetails);
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
   
	getDataMap: function() {
		var dataMap = {};
		dataMap = {
			lblBankName: "phone",
			lblAccountName: "fullName",
			contactList: "contactList",
		};
		return dataMap;
	},	
  
	showHideSearch: function() {	
      	var textSearch = this.view.flxMainContainer.flxSearch.flxSearchMain.tbxSearch.text;
		this.view.customSearchbox.flxSearchMain.tbxSearch.setFocus(true);
		this.view.customSearchbox.flxSearchMain.tbxSearch.text = textSearch;
		this.view.flxSearch.setVisibility(false);
		this.view.flxHeaderSearchbox.setVisibility(true);
		this.view.segPickContactAlphabet.top = '0Dp';
	},
  
	cancelSearch: function() {
		this.view.flxHeaderSearchbox.customSearchbox.flxSearchMain.tbxSearch.text = '';
		var isIpad = applicationManager.getDeviceUtilManager().isIpad();
		
      	if (!isIpad) {
      		this.view.flxHeader.setVisibility(true);
        }
		this.view.flxSearch.setVisibility(true);
		this.view.flxHeaderSearchbox.setVisibility(false);
		this.view.flxMainContainer.flxSearch.flxSearchMain.tbxSearch.text = '';
		this.view.segPickContactAlphabet.top = '80Dp';
		this.setSegData(this.getRawData()); 
		this.toggleContactList(false);
		if (applicationManager.getDeviceUtilManager().isIpad()) {
			this.view.flxHeader.setVisibility(true);
		}
	}
});