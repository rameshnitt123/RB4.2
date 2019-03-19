/**
  *@module ConfigurationManager
  */
define([], function() {
	/**
   * ConfigurationManager is a class which handles all functions related to storing data into devices.
   *@alias module:ConfigurationManager
   *@class
   */
function ConfigurationManager() {
    this.serverTimeZone = "UTC";

    //START OLB Configurations
	this.isAppPropertiesLoaded = "false";
	this.appLaunchedMode = "";
    this.billPayOneTimePayment = "true";
    this.canViewPastEBills = "true";
    this.addExternalAccount = "true";
    this.verifyByCredentials = "true";
    this.fundTransferHistory = "true";
    this.enrolSecurityQuestionsAvailable = "true";
    this.editUsername = "false";
    this.editPassword = "true";
    this.idleTimeOut = "5";
    this.loanPaymentEnabled = "true";
    this.showLoanUpdateDisclaimer = "true";
    this.loanPaymentAfterDueDateEnabled = "true";
    this.modifyLoanPaymentAmount = "true";
    this.editNickNameAccountSettings = "true";
    this.limitLoanTransfersEnabled = "true";
    this.payOffLoanPaymentEnabled = "true";
    this.billPaySearch = "true";
    this.canSearchTransfers = "true";
    this.isInteractiveNotificationEnabled = "true";
    this.editDisputeATransaction = "true";
    this.printingTransactionDetails = "true";
    this.enableDefaultAccounts = "true";
    this.reOrderAccountPreferences = "true";
    this.enableProfileSettings = "true";
    this.enablePhoneSettings = "true";
    this.enableEmailSettings = "true";
    this.enableAddressSettings = "true";
    this.enableUsernameAndPasswordSettings = "true";
    this.enableSecurityQuestionsSettings = "true";
    this.enableSecureAccessCodeSettings = "true";
    this.enableAccountPreferences = "true";
    this.enableAlertSettings = "true";
    this.enableAlertsIcon = "true";
    this.serviceFeeFlag = "true";
    this.p2pServiceFee = "0.1";
    this.canSearchP2PPersons = "true";
    this.payApersonOneTimePayment = "true";
    this.backendDateFormat = "yyyy-mm-dd";
    this.additionalAddressAllowed = "true";
    this.additionalPhoneAllowed = "true";
    this.getDashboardMessageCount = "3";
    this.isPFMWidgetEnabled = "true";
    this.enableEstatements = "true";
    this.eStatementsFormat = "pdf,csv";
    this.pfmMaxYears = "5";
    this.wireTranferFees = "10";
    this.enableStopPayments = "true";
    this.enalbeStopPaymentServiceFeesAndValidity = "true";
    this.checkServiceFee = "30";
    this.checkServiceVality = "6";
    this.isAggregatedAccountsEnabled = "true";
    this.isMFAEnabledForP2P = "true";
    this.minimumAmountForMFAP2P = "100";
    this.isMFAEnabledForWireTransfer = "true";
    this.minimumAmountForMFAWireTransfer = "100";
    this.isMFAEnabledForBillPay = "true";
    this.minimumAmountForMFABillPay = "50";
    this.numberOfLocations=5;
    this.mapKey="AIzaSyAJOkl-7hJ08jbE5sBZs9Da9qrHP_XhXro";
    //END OLB Configurations

    //OLB START Entitlements
    this.isBillPayEnabled = "false";
    this.minBillPayLimit = "1";
    this.maxBillPayLimit = "100000";
    this.isPayAPersonEnabled = "false";
    this.minP2PLimit = "1";
    this.maxP2PLimit = "100000";
    this.isRDCEnabled = "false";
    this.minRDCLimit = "1";
    this.maxRDCLimit = "100000";
    this.isTransfersEnabled = "false";
    this.minTransferLimit = "1";
    this.maxTransferLimit = "100000";
    this.isInternationalWireTransferEnabled = "false";
    this.isDomesticWireTransferEnabled = "false";
    this.minInternationalWireTransferLimit = "1";
    this.maxInternationalWireTransferLimit = "100000";
    this.minDomesticWireTransferLimit = "1";
    this.maxDomesticWireTransferLimit = "100000";
    this.isKonyBankAccountsTransfer = "false";
    this.minKonyBankAccountsTransferLimit = "1";
    this.maxKonyBankAccountsTransferLimit = "100000";
    this.isOtherKonyAccountsTransfer = "false";
    this.minOtherKonyAccountsTransferLimit = "1";
    this.maxOtherKonyAccountsTransferLimit = "100000";
    this.isOtherBankAccountsTransfer = "false";
    this.minOtherBankAccountsTransferLimit = "1";
    this.maxOtherBankAccountsTransferLimit = "100000";
    this.isInternationalAccountsTransfer = "false";
    this.minInternationalAccountsTransferLimit = "1";
    this.maxInternationalAccountsTransferLimit = "100000";
    this.isSecurityQuestionConfigured = "false";
    this.payeeBillsLimit = "12";
    this.isBusinessOwner = "false";
    this.accountTypes = {
       SAVINGS : 'SAVINGS',
       CHECKING: 'CHECKING',
       CREDITCARD: 'CREDITCARD',
       LOAN : 'LOAN',
       MORTGAGE : 'MORTGAGE',
       DEPOSIT : 'DEPOSIT',
       OTHER : 'Other',
       EXTERNAL: 'External',
       CURRENT: 'CURRENT',
       LINE_OF_CREDIT: 'Line of Credit'
    };
      //International Transfer
    this.internationalTransactionFee = "10";
    this.internationalTransactionFeeEnabled = "true";

    //END OLB Configurations

    this.androidPhoneNativeAppLink = "https://play.google.com/store/apps/details?id=com.kony.RetailBanking";
    this.iphoneNativeAppLink = "https://itunes.apple.com/us/app/kony-retail-banking/id1172171955?mt=8";
    this.androidTabletNativeAppLink = "https://play.google.com/store/apps/details?id=com.kony.RetailBanking";
    this.ipadNativeAppLink = "https://itunes.apple.com/us/app/kony-retail-banking/id1172171955?mt=8";

    /**@member {Array} outageMessages holds the outage messages*/
    this.outageMessages = [];
    this.servicesListForUser=[];
	/**@member {boolean} AggregatedExternalAccountEnabled used for tracking the Aggregated External Account Enabled status*/
    this.AggregatedExternalAccountEnabled = false;
	/**@member {string} isStartupCompleted used for tracking the Startup status*/
    this.isStartupCompleted ="";
    this.DebugMode = false; // This parameter is for enabling Logging in release mode.
    var HashTable = require("HashTable");
	/**@member {object} configurations contains instance of HashTable*/
    this.configurations = new HashTable();
	 /**@member {OBJECT}  contains all currency codes*/
    this.currencyCode = {
        'USD': '$', // US Dollar
        'EUR': '€', // Euro
        'CRC': '₡', // Costa Rican Colón
        'GBP': '£', // British Pound Sterling
        'ILS': '₪', // Israeli New Sheqel
        'INR': '₹', // Indian Rupee
        'JPY': '¥', // Japanese Yen	
        'KRW': '₩', // South Korean Won
        'NGN': '₦', // Nigerian Naira
        'PHP': '₱', // Philippine Peso
        'PLN': 'zł', // Polish Zloty
        'PYG': '₲', // Paraguayan Guarani
        'THB': '฿', // Thai Baht
        'UAH': '₴', // Ukrainian Hryvnia
        'VND': '₫', // Vietnamese Dong
    };
    this.locale = {
        'US-English': 'en',
        'UK-English': 'en_GB',
        'Spanish': 'es_ES',
        'German': 'de_DE',
        'French': 'fr_FR'
    };
    this.frontendDateFormat = {
        'en':'m-d-Y',
        'en_GB':'d/m/Y',
        'es_ES':'d/m/Y',
        'de_DE':'d.m.Y',
        'fr_FR':'d/m/Y',
        'sv_SE':'Y-m-d',
    };    
    /**@member {OBJECT}  Contains all constants*/
    this.constants = {
		IDLE_TIMEOUT : 5,
      	TRAVELPLANS_DESTINATION_LIMIT : 5,
		IDENTITYSERVICENAME: "DbxUserLogin",
        WEEKLY: "Weekly",
        DAILY: "Daily",
        MONTHLY: "Monthly",
        BIWEEKLY: "Biweekely",
        SERVICE_NAME: "RBSERVICES",
        LOADING_SCREEN_MESSAGE: "Loading ...",
        CHECKING: "Checking",
        SAVINGS: "Savings",
        CREDITCARD: "CreditCard",
        DEPOSIT: "Deposit",
        MORTGAGE: "Mortgage",
        LOAN: "Loan",
		EXTERNAL_BANK_ACCOUNT: "ExternalBankAccount",
        HEADERFAQ: kony.i18n.getLocalizedString("kony.mb.Support.HeaderFAQ"),
        HEADERPRIVACYPOLICY: kony.i18n.getLocalizedString("kony.mb.Support.HeaderPrivacyPolicy"),
        HEADERABOUTUS: kony.i18n.getLocalizedString("kony.mb.Support.HeaderAbout"),
        HEADERTERMSANDCONDITIONS: kony.i18n.getLocalizedString("kony.mb.Support.HeaderTC"),
        FAQ: kony.i18n.getLocalizedString("kony.mb.Support.FAQ"),
        PRIVACY: kony.i18n.getLocalizedString("kony.mb.Support.Privacy"),
        TERMS: kony.i18n.getLocalizedString("kony.mb.Support.Terms"),
        ABOUT: kony.i18n.getLocalizedString("kony.mb.Support.Aboutus"),
        Last7days: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Last7days"),
        Last30days: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Last30days"),
        Last60days: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Last60days"),
        CustomRange: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.CustomRange"),
        Withdrawals: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Withdrawals"),
        Deposits: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Deposits"),
        P2PDebits: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.P2PDebits"),
        BillPay: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.BillPay"),
        Transfers: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Transfers"),
        Checks: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Checks"),
        P2PCredits: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.P2PCredits"),
        MENUACCOUNTS: kony.i18n.getLocalizedString("kony.mb.Hamburger.Accounts"),
        MENUTRANSFERS: kony.i18n.getLocalizedString("kony.mb.Hamburger.Transfers"),
        MENUOPENACOUNT: kony.i18n.getLocalizedString("kony.mb.Hamburger.OpenAccount"),
        MENUMESSAGES: kony.i18n.getLocalizedString("kony.mb.Hamburger.Messages"),
        MENUSETTINGS: kony.i18n.getLocalizedString("kony.mb.Hamburger.Settings"),
        MENUCHATBOT: kony.i18n.getLocalizedString("kony.mb.Hamburger.chatbot"),
        MENULOCATE: kony.i18n.getLocalizedString("kony.mb.Hamburger.Locateus"),
        MENUCONTACT: kony.i18n.getLocalizedString("kony.mb.Hamburger.Contactus"),
        MENUMYWALLET: kony.i18n.getLocalizedString("kony.mb.Hamburger.Mywallet"),
        MENUBILLPAY: kony.i18n.getLocalizedString("kony.mb.Hamburger.BillPay"),
        MENUCHECKDEPOSIT: kony.i18n.getLocalizedString("kony.mb.Hamburger.CheckDeposit"),
        MENUCARDLESS: kony.i18n.getLocalizedString("kony.mb.Hamburger.CardLessCash"),
        MENUCARDMANAGEMENT: kony.i18n.getLocalizedString("kony.mb.Hamburger.CardManagement"),
        MENUMANAGEOTHERBANKACCOUNTS: kony.i18n.getLocalizedString("kony.mb.ExternalAccounts.ManageOtherBankAccounts"),
      	MENUPFMMYMONEY : kony.i18n.getLocalizedString("kony.mb.PFMMyMoney")
    };
	this.reloadConstants();
	/**@member {Array} quickActionItems holds the list of action items required for transaction*/
    this.quickActionItems = [
    {
      "id" : "ATM finder",
      "title" : "Find an ATM",
      "subtitle" : "",
      "icon" : kony.forcetouch.QUICK_ACTION_ICON_TYPE_LOCATION,
      "info" : null

    }, 
    {
      "id" : "Pay a Bill",
      "title" : "Pay a Bill",
      "subtitle" : "",
      "icon" : kony.forcetouch.QUICK_ACTION_ICON_TYPE_DATE,
      "info" : null
    }, 
    {
      "id" : "Transfer Money",
      "title" : "Transfer Money",
      "subtitle" : "",
      "icon" : kony.forcetouch.QUICK_ACTION_ICON_TYPE_SHUFFLE,
      "info" : null
    },
    {
      "id" : "New Check Deposit",
      "title" : "Deposit Check",
      "subtitle" : "",
      "icon" : kony.forcetouch.QUICK_ACTION_ICON_TYPE_CAPTUREPHOTO,
      "info" : null
    } ]; 
   /**@member {Array} unreadMessageCount holds the count of unread message count */
    this.unreadMessageCount = 0;


   /**@member {Array} maritalStatus holds the list of different marital status*/
  this.maritalStatus = [['Single','Single'],['Married','Married'],['Widowed','Widowed'],['Divorced','Divorced']];
  /**@member {Array} numberOfDependents holds the list of different dependent numbers*/
  this.numberOfDependents = [['0','00'],['1','01'],['2','02'],['3','03'],['4','04'],['5','05'],['6','06'],['7','07'],['8','08']];
/**@member {Array} gender holds the list of different genders*/
  this.gender = [['Male','Male'],['Female','Female']];
  /**@member {Array} employmentInfoYears holds the list of different employement information years*/
  this.employmentInfoYears=[['0 year','1 year','0'],['1 year','2 years','1'],['2 years','3 years','2'],['3 years','4 years','3'],['4 years','5 years','4'],['5 years','6 years','5'],['6 years','7 years','6'],['7 years','8 years','7'],['8 years','9 years','8'],['9 years','10 years','9'],['10 years','11 years','10']];
  /**@member {Array} annualIncome holds the list of different annual Incomes*/
  this.annualIncome=[['0','25000','0'],['25001','50000','1'],['50001','100000','2'],['100001','200000','3'],['200001','300000','4'],['300001','500000','5'],['500001','1200000','6'],['1200001','9999999','7']];
  /**@member {Array} assets holds the list of different assets*/
  this.assets=[['0','25000','0'],['25001','50000','1'],['50001','100000','2'],['100001','200000','3'],['200001','300000','4'],['300001','500000','5'],['500001','1200000','6'],['1200001','9999999','7']];
  /**@member {Array} monthlyExpenditure holds the list of different monthly expenditures*/
  this.monthlyExpenditure=[['0','25000','0'],['25001','50000','1'],['50001','100000','2'],['100001','200000','3'],['200001','300000','4'],['300001','500000','5'],['500001','1200000','6'],['1200001','9999999','7']];
  /**@member {Array} employmentTypeValues holds the list of different employment type values*/
  this.employmentTypeValues = ['Employed','Unemployed','Retired','Student'];
  /**@member {Array} hamburgerMenuItems holds the list of HamburgerMenu Items*/
  this.hamburgerMenuItems=[
    					  {
         					 "img": "accounts.png",
          					 "text": this.constants.MENUACCOUNTS,
          					  "info":null
        					},   
						    {
							 "img": "transfer.png",
							 "text": this.constants.MENUTRANSFERS,
							 "info":null
						   },
                           {
                             "img": "billpay.png",
                             "text": this.constants.MENUBILLPAY,
                             "info":null
                           },
                           {
      					   	  "img": "checkdepositimg.png",
      						  "text": this.constants.MENUCHECKDEPOSIT,
      					      "info":null
    					   },
    						{
							 "img": "cardlesscash.png",
                             "text": this.constants.MENUCARDLESS,
                             "info":null
                           }, 
    						{
		  					  "img": "cardmange.png",
		  					  "text": this.constants.MENUCARDMANAGEMENT,
							  "info":null
							},
    						{
                              "img": "mangeothrbank.png",
                              "text": this.constants.MENUMANAGEOTHERBANKACCOUNTS,
                              "info": null
	  					  },
    
                           {
                             "img": "opennew.png",
                             "text": this.constants.MENUOPENACOUNT,
                             "info":null
                           },
    						{
		  					  "img": "billpay.png",
		  					  "text": this.constants.MENUPFMMYMONEY,
							  "info":null
							},
                           {
                             "img": "message.png",
                             "text": this.constants.MENUMESSAGES,
                             "info":null
                           },
                           {
                             "img": "settings.png",
                             "text": this.constants.MENUSETTINGS,
                             "info":null
                           },
                            
                           {
                             "img": "locateus.png",
                             "text": this.constants.MENULOCATE,
                             "info":null
                           },
                           {
                             "img": "contactus.png",
                             "text": this.constants.MENUCONTACT,
                             "info":null
                           }
                           	
                          ];
  this.masterHamburgerData=(JSON.parse(JSON.stringify(this.hamburgerMenuItems)));
     
    /**@member {Array} moreMenuItems holds the list of more MenuItems*/
    this.moreMenuItems=[
    {
      "img": "checkdepositimg.png",
      "text": this.constants.MENUCHECKDEPOSIT,
      "info":null
    },
    {
      "img": "cardlesscash.png",
      "text": this.constants.MENUCARDLESS,
      "info":null
    },
    {
      "img": "cardmange.png",
      "text": this.constants.MENUCARDMANAGEMENT,
      "info":null
    },
    {
       "img": "mangeothrbank.png",
       "text": this.constants.MENUMANAGEOTHERBANKACCOUNTS,
       "info": null
    },
    {
      "img": "opennew.png",
      "text": this.constants.MENUOPENACOUNT,
      "info":null
    },
      {
		"img": "billpay.png",
       "text": this.constants.MENUPFMMYMONEY,
       "info":null
     },
    {
      "img": "message.png",
      "text": this.constants.MENUMESSAGES,
      "info":null
    },
    {
      "img": "settings.png",
      "text": this.constants.MENUSETTINGS,
      "info":null
    },
    
    {
      "img": "locateus.png",
      "text": this.constants.MENULOCATE,
      "info":null
    },
      
    {
      "img": "contactus.png",
      "text": this.constants.MENUCONTACT,
      "info":null
    }
     
  ];
  this.mastermoreMenuItems = (JSON.parse(JSON.stringify(this.moreMenuItems)));
    
   /**@member {Array} iPhoneMenuItems holds the list of iPhone MenuItems*/
   this.iPhoneMenuItems=[{
    "img": "accounts.png",
    "text": this.constants.MENUACCOUNTS,
    "info":null
  }, {
    "img": "transfer.png",
    "text": this.constants.MENUTRANSFERS,
    "info":null
  },{
    "img": "billpay.png",
    "text": this.constants.MENUBILLPAY,
    "info": null
  }];
    /**@member {Array} moreMenuItemsIpad holds the list of more MenuItems for Ipad*/
    this.moreMenuItemsIpad=[
    {
      "img": "cardlesscash.png",
      "text": this.constants.MENUCARDLESS,
      "info":null
    },
    {
      "img": "cardmange.png",
      "text": this.constants.MENUCARDMANAGEMENT,
      "info":null
    },
//     {
//        "img": "mangeothrbank.png",
//        "text": this.constants.MENUMANAGEOTHERBANKACCOUNTS,
//        "info": null
//     },
//     {
//       "img": "opennew.png",
//       "text": this.constants.MENUOPENACOUNT,
//       "info":null
//     },
//       {
// 		"img": "billpay.png",
//        "text": this.constants.MENUPFMMYMONEY,
//        "info":null
//      },
    {
      "img": "settings.png",
      "text": this.constants.MENUSETTINGS,
      "info":null
    },
    
    {
      "img": "locateus.png",
      "text": this.constants.MENULOCATE,
      "info":null
    },
      
    {
      "img": "contactus.png",
      "text": this.constants.MENUCONTACT,
      "info":null
    }
     
  ];
  this.mastermoreMenuItemsIpad = (JSON.parse(JSON.stringify(this.moreMenuItemsIpad)));
  
   /**@member {Array} iPhoneMenuItems holds the list of iPhone MenuItems*/
   this.iPhoneMenuItems=[{
    "img": "accounts.png",
    "text": this.constants.MENUACCOUNTS,
    "info":null
  }, {
    "img": "transfer.png",
    "text": this.constants.MENUTRANSFERS,
    "info":null
  },{
    "img": "billpay.png",
    "text": this.constants.MENUBILLPAY,
    "info": null
  }];
   /**@member {Array} iPadMenuItems holds the list of iPad MenuItems*/
   this.iPadMenuItems=[{
    "img": "accounts.png",
    "text": this.constants.MENUACCOUNTS,
    "info":null
  }, {
    "img": "maketransfer.png",
    "text": this.constants.MENUTRANSFERS,
    "info":null
  },
  {
    "img": "billpay.png",
    "text": this.constants.MENUBILLPAY,
    "info":null
  },
  {
    "img": "checkdepositimg.png",
    "text": this.constants.Deposits,
    "info":null
  },
  {
    "img": "message.png",
    "text": this.constants.MENUMESSAGES,
    "info":null
  },
                      
  ];
  /**@member {Array} denominationAmountValues holds the list of different denomination amount values*/
  this.denominationAmountValues = ['50','100','150','300','500','1000'];
  /**@member {Boolean} value used in custom metrics*/
  this.CustomMetricsEnabled = true;
/**@member {object} value Olb specific constants*/
  this.OLBConstants = {
    DEFAULT_OFFSET : 0,
    PAGING_ROWS_LIMIT : 10,
    ACCOUNT_LIST_NAME_MAX_LENGTH : 32,
    WIRE_ACTIVITY_LIMIT : 12,
    ASCENDING_KEY : 'asc',
    DESCENDING_KEY : 'desc',
    NOTES_LENGTH:50,
    CALENDAR_ALLOWED_FUTURE_YEARS: 3,
    ALL: 'All',
    PENDING: 'pending',
    SUCCESSFUL: 'successful',
    BOTH: 'Both',
    CURRENCY_NAME: 'Dollar',
    ANY_DATE: 'ANY_DATE',
    CUSTOM_DATE_RANGE: 'CUSTOM_DATE_RANGE',
    IBAN_MINIMUM_LENGTH: 22,
    IBAN_MAXIMUM_LENGTH: 34,
    CHECK_SERIES_SEPARATOR: "-",
    CHECK_REQUEST_TYPES: {
        SINGLE: 'Single',
        SERIES: 'Series'
    },
    DISPUTED_CHECKS: "DisputesChecks",
    DISPUTED_TRANSACTIONS: "DisputedTransactions",
    NOTES_MAX_LENGTH: 120,
    Channel : 'Online',
    MAX_CHECKS_COUNT: 50,
    OTPLength: 6,
    ACCOUNT_TYPE : {
        SAVING : 'Savings',
        CHECKING: 'Checking',
        CREDITCARD: 'CreditCard',
        LOAN : 'Loan',
        MORTGAGE : 'Mortgage',
        DEPOSIT : 'Deposit',
        OTHER : 'Other',
        EXTERNAL: 'External',
        CURRENT: 'Current',
        LINE_OF_CREDIT: 'Line of Credit'
    },
    TRANSACTION_TYPE : {
        CHECKS: 'Checks',
        DEPOSITS:  'Deposits',
        TRANSFERS: 'Transfers',
        WITHDRAWLS: 'Withdrawals',
        PAYMENTS: 'Payments',
        PURCHASES: 'Purchases',
        INTEREST: 'Interest',
        EXTERNALTRANSFER: 'ExternalTransfer',
        INTERNALTRANSFER: 'InternalTransfer',
        BILLPAY: 'BillPay',
        P2P: 'P2P',
        FEES: "Fees",
        INTERESTDEBIT: 'InterestDebit',
        INTERESTCREDIT: 'InterestCredit',
        LOAN : 'Loan',
        STOPCHECKPAYMENTREQUEST: 'StopCheckPaymentRequest',
        DISPUTEDTRANSACTIONSREQUEST: 'DisputedTransactionRequest',
        WIRE: 'Wire',
        DEPOSIT : 'Deposit',
        CARDLESS: 'Cardless',
        CHECKWITHDRAWAL : 'CheckWithdrawal',
        WITHDRAWL: 'Withdrawal',
        RECEIVEDP2P: 'ReceivedP2P',
        RECEIVEDREQUEST : 'ReceivedRequest'
    },
    TRANSACTION_STATUS: {
        INPROGRESS: "In-Progress",
        SUCCESSFUL: "Successful",
        CLEARED:"Cleared",
        REQUESTEXPIRED:"Request Expired",
        FAILED:"Failed",
        PENDING: "Pending",
        STOPPED: "Stopped"
    },
    TRANSACTION_RECURRENCE:{
        ONCE: "Once",
        DAILY: "Daily",
        WEEKLY: "Weekly",
        BIWEEKLY: "BiWeekly",
        MONTHLY: "Monthly",
        YEARLY: "Yearly",
        HALFYEARLY: "Half Yearly",
        QUARTERLY: "Quarterly",
        EVERYTWOWEEKS: "Every Two Weeks"
    },
    ACTION: {
        ACCOUNT_PREFERENCES: 'Account Preferences',
        EDIT_ACCOUNT: 'Edit Account',
        TRANSFER_MONEY: 'Transfer Money',
        VIEW_STATEMENTS: 'View Statements',
        UPDATE_ACCOUNT_SETTINGS: 'Update Account Settings',
        ORDER_CHECKS: 'Order Checks',
        REQUEST_OR_REPLACE_CARD: 'Request Card/Replace Card',
        GET_ASSISTANCE: 'Get Assistance',
        ECHECK_OR_ROUTING_DETAILS: 'eCheck/Routing Details',
        REWARDS_POINTS: 'Reward Points',
        PAY_A_PERSON_OR_SEND_MONEY: 'Send Money',
        PAY_DUE_AMOUNT: 'Pay Due Amount',
        PAY_A_BILL: 'Pay a Bill',
        MANAGE_CARD_OR_CARD_CONTROLS: 'Manage Card/Card Controls',
        REPORT_LOST_OR_STOLEN: 'Report Lost/Stolen',
        SETUP_NEW_PIN: 'Set up New PIN',
        LOCK_OR_DECACTICATE_CARD: 'Lock Card/Deactivate Card (Temporary)',
        TRAVEL_NOTIFICATION: 'Travel Notification',
        REMOVE_ACCOUNT: 'Remove Account',
        DOWNLOAD_STATEMENTS: 'Download Statements',
        ACCOUNT_SETTINGS: 'Account Settings',
        ACCOUNT_SERVICES: 'Account Services',
        PAYOFF_LOAN : 'Payoff Loan',
        EDIT_ACCOUNTS : 'Edit Accounts',
        SCHEDULED_TRANSACTIONS : 'Scheduled Transactions',
        MAKE_A_TRANSFER : 'Make A Transfer',
        VIEW_BILL :  'View Bill',
        SHOW_DISPUTE_TRANSACTION_FORM: 'ShowDisputeTransactionForm',
        SHOW_STOPCHECKS_FORM: 'ShowStopChecksForm',
        STOPCHECKS_PAYMENT: 'Stop Check Payment'
    },
    TRANSFER_TYPES: {
        OWN_INTERNAL_ACCOUNTS: 'OWN_INTERNAL_ACCOUNTS',
        OTHER_INTERNAL_MEMBER: 'OTHER_INTERNAL_MEMBER',
        OTHER_EXTERNAL_ACCOUNT: 'OTHER_EXTERNAL_ACCOUNT',
        INTERNATIONAL_ACCOUNT: 'INTERNATIONAL_ACCOUNT',
        WIRE_TRANSFER: 'WIRE_TRANSFER'
    },
    
    MONTHS_FULL: {
      January: "January",
      February: "February",
      March: "March",
      April: "April",
      May: "May",
      June: "June",
      July: "July",
      August: "August",
      September: "September",
      October: "October",
      November: "November",
      December: "December"
    },  
    CONFIG : {
        ACCOUNTS_QUICK_ACTIONS: {
            "Savings": [
                "Transfer Money",
                "Stop Check Payment",
                "View Statements"
            ],
            "Checking": [
                "Transfer Money",
                "Send Money",
                "Pay a Bill",
                "Stop Check Payment",
                "View Statements"
            ],
            "CreditCard": [
                "Pay a Bill",
                "View Statements"
                //"Pay Due Amount" Not in scope
            ],
            "Loan": [
                "Pay Due Amount",
                "View Statements",
                "Update Account Settings"
            ],
            "Line of Credit": [
                //"Pay Due Amount",
                "View Statements",
                "Update Account Settings"
            ],
            "Mortgage": [
                //"Pay Due Amount",
                "View Statements",
                "Update Account Settings"
            ],
            "Deposit": [
                "View Statements",
                "Update Account Settings"
            ]
        },
        EXTERNAL_ACCOUNT_QUICK_ACTIONS:[
            "Remove Account",
            "Account Preferences",
            "Edit Account",
        ],
        ACCOUNTS_RIGHTSIDE_ACTIONS : {
            "Savings" : [
                "Scheduled Transactions",
                "Make A Transfer"
            ],
            "Checking" : [
                "Scheduled Transactions",
                "Make A Transfer",
                "Pay a Bill"
            ],
            "CreditCard" : [
                "Scheduled Transactions",
                "View Statements"
                //"Pay Due Amount" Not in scope
            ],
            "Loan" : [
                "Pay Due Amount",
                "View Statements",
                "Update Account Settings"
            ],
            "Line of Credit" : [
                //"Pay Due Amount", Not in scope
                "View Statements",
                "Update Account Settings"
            ],
            "Mortgage" : [
                //"Pay Due Amount", Not in scope
                "View Statements",
                "Update Account Settings"
            ],
            "Deposit" : [
                "View Statements",
                "Update Account Settings"
            ]
        },
        ACCOUNTS_SECONDARY_ACTIONS :   {
            "Savings" : [
                "View Statements",
                "Stop Check Payment",
                "Update Account Settings"
                //"Order Checks", //Post R4
                //"Manage Card" //Post R4
            ],
            "Checking" : [
                "Send Money",
                "View Statements",
                "Stop Check Payment",
                "Update Account Settings",
                //"Order Checks", //Post R4
                //"Manage Card" //Post R4
            ],
            "CreditCard" : [
                "Pay a Bill",
                "Update Account Settings",
                //"Manage Card", //Post R4
                //"Report Lost/Stolen", //Post R4
                //"Lock Card/Deactivate Card", //Post R4
            ],
            "Loan" : [
                "Payoff Loan",
                "Update Account Settings"
            ],
            "Line of Credit" : [
                //"Payoff Loan", Not in Scope
                "Update Account Settings"
            ],
            "Mortgage" : [
                "Update Account Settings"
            ],
            "Deposit" : [
                "Update Account Settings"
            ]
        }
    },
    CARD_TYPE:{
        'Debit': 'Debit',
        'Credit': 'Credit'
    },
    CARD_ACTION:{
        'Lock':'Lock Card',
        'Unlock':'Unlock Card',
        'Replace':'Replace Card',
        'Report_Lost': 'Report Lost',
        'Cancel': 'Cancel Card',
        'Change_Pin': 'Change Pin'
    },
    CARD_STATUS:{
        'Active': 'Active',
        'Locked': 'Locked',
        'ReportedLost': 'Reported Lost',
        'ReplaceRequestSent': 'Replace Request Sent',
        'CancelRequestSent': 'Cancel Request Sent',
        'Cancelled': 'Cancelled'
    },
    CARD_PRODUCT:{
        'PlatinumCredit': 'My Platinum Credit Card',
        'GoldDebit': 'Gold Debit Card',
        'PremiumCredit': 'Premium Club Credit Card',
        'ShoppingCard': 'Shopping Card',
        'PetroCard': 'Petro Card',
        'FoodCard': 'Eazee Food Card'
    },
    MFA_OPTIONS:{
        'SECURE_ACCESS_CODE': 'Secure Access Code',
        'SECURITY_QUESTIONS': 'Security Questions'
    },
    CHANGE_PIN_OFFLINE_OPTION:{
        'EMAIL': 'E-mail ID',
        'PHONE': 'Phone No',
        'POSTAL_ADDRESS': 'Postal Address'
    },
    CARD_CHANGE_PIN_REASON:{
        'PIN_COMPROMISED': 'PIN Compromised',
        'FORGOT_PIN': 'Lost PIN'
    },
    CARD_REPORTLOST_REASON:{
        'LOST': 'Lost',
        'STOLEN': 'Stolen'
    },
    WireTransferConstants: {
        RECIPIENT_INDIVIDUAL: 'Individual',
        RECIPIENT_BUSINESS: 'Business',
        ACCOUNT_DOMESTIC: 'Domestic',
        ACCOUNT_INTERNATIONAL: 'International',
        DOMESTIC_COUNTRY: 'USA',
        DOMESTIC_COUNTRY_NAME: 'United States of America',
        CURRENCIES: [{
            symbol: "£",
            name: "Pound"
        }, {
            symbol: "€",
            name: "Euro"
        }, {
            symbol: "₹",
            name: "Rupee"
        }, {
            symbol: "$",
            name: "Dollar"
        }]
    }
};

  this.PFM_CATEGORIES_COLORS =
        {
            "Home": "#FEDB64",
            "Transport": "#3645A7",
            "Financial ": "#6753EC",
            "Food": "#D6B9EA",
            "Utilities": "#E87C5E",
            "Health": "#04B6DF",
            "Education": "#E8A75E",
            "Other": "#B160DC",
            "Travel" : "#8ED174"
        };
}

inheritsFrom(ConfigurationManager, kony.mvc.Business.Delegator);

ConfigurationManager.prototype.initializeBusinessController = function(){};
  
ConfigurationManager.prototype.resetConfigurationObject = function(){
   this.hamburgerMenuItems = this.masterHamburgerData;
   this.moreMenuItems=this.mastermoreMenuItems;
  this.moreMenuItemsIpad=this.mastermoreMenuItemsIpad;
    this.isKonyBankAccountsTransfer = "false";   
    this.isOtherKonyAccountsTransfer = "false";
    this.isOtherBankAccountsTransfer = "false";
    this.isInternationalAccountsTransfer = "false";
    this.isDomesticWireTransferEnabled = "false";
    this.isInternationalWireTransferEnabled = "false";
    this.isBillPayEnabled = "false";
    this.ispayAPersonEnabled = "false";
    this.isRDCEnabled = "false";   
    this.isBusinessOwner = "false";
};
/**
  * Get Application properties form the device 
  * @param {Function} - presentationSuccess will be called when call is successfull
  * @param {Function} - presentationError will be called when call is not successfull
  */

ConfigurationManager.prototype.fetchApplicationProperties = function(presentationSuccess,presentationError) {
    checkAppinit = false;
    var self = this;
    var  applicationRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Application");
    var deviceInfo = applicationManager.getDeviceUtilManager().getDeviceInfo();
    var options = {
        "OSType": deviceInfo.name,
        "OSversion": deviceInfo.version,
        "AppVersion": appConfig.appVersion
    };
    applicationRepo.save(options,applicationRepoCompletionCallBack);
    function applicationRepoCompletionCallBack(status,  data,  error)
  {
     var srh = applicationManager.getServiceResponseHandler();
    var res = srh.manageResponse(status,  data,  error);
    if (res["status"]) {
        var config = applicationManager.getConfigurationManager();
        self.setConfigurationValue("androidPhoneNativeAppLink",res["data"].playStoreLink);
        self.setConfigurationValue("iphoneNativeAppLink",res["data"].appStoreLink);
        config.configurations.setItem("BANNER_URL", res["data"].bannerURL);
        config.configurations.setItem("BANKNAME", res["data"].bankName);
        config.configurations.setItem("BUSINESSDAYS", res["data"].businessDays);
        config.configurations.setItem("OCRAPIKEY", res["data"].ocrApiKey);
        config.configurations.setItem("OCRSECRETKEY", res["data"].ocrSecretKey);
        config.configurations.setItem("FACIALLICENSESTRING", res["data"].facialLicenseString);
        config.configurations.setItem("FACIALLICENSESERVERURL", res["data"].facialLicenseServerUrl);
        config.configurations.setItem("ISUPDATEMANDATORY", res["data"].isUpdateMandatory);
        config.configurations.setItem("ISUPDATE", res["data"].isUpdate);
        config.configurations.setItem("ISLANGUAGESELECTION", res["data"].isLanguageSelectionEnabled);
        config.configurations.setItem("ISBACKENDCURRENCYSYMBOLENABLED", res["data"].isBackEndCurencySymbolEnabled);
        config.configurations.setItem("ISCOUNTRYCODEENABLED", res["data"].isCountryCodeEnabled);
        config.configurations.setItem("ISSORTCODEVISIBLE", res["data"].isSortCodeVisible);
        config.configurations.setItem("ISUTCDATEFORMATTINGENABLED", res["data"].isUTCDateFormattingEnabled);        
        config.configurations.setItem("DEPLOYMENTGEOGRAPHY", res["data"].deploymentGeography);
        config.configurations.setItem("BASECURRENCY", res["data"].currencyCode);
        config.configurations.setItem("ISBUSINESSBANKINGENABLED", res["data"].isBusinessBankingEnabled);
       if(res["data"].isAccountAggregationEnabled !== undefined){
            self.isAggregatedAccountsEnabled = res["data"].isAccountAggregationEnabled;
         	self.AggregatedExternalAccountEnabled = res["data"].isAccountAggregationEnabled === "true" ? true : false;
        }
        if(res["data"].currenciesSupported !== undefined){
            config.configurations.setItem("currenciesSupported",config.getCurrenciesList(JSON.parse(res["data"].currenciesSupported)));
        }
        if (res["data"].currencyCode !== undefined){
         if(config.currencyCode[res["data"].currencyCode]) {
            config.configurations.setItem("CURRENCYCODE", config.currencyCode[res["data"].currencyCode]);
         }
         else{
            config.configurations.setItem("CURRENCYCODE", res["data"].currencyCode);
         } 
        } else {
            config.configurations.setItem("CURRENCYCODE", "USD");
        }
       config.setLocaleAndDateFormat(res);
       applicationManager.getPresentationUtility().dismissLoadingScreen();
       presentationSuccess(res["data"]);
    } else {
       // alert("An error occured in fetch application properties" + res["errmsg"]);
      presentationError(res["errmsg"]);
    }
  }
   
};

/**
 * Get banner URL from configurations
 * @returns {String} -  Banner URL
 */
ConfigurationManager.prototype.getSupportedCurrencies = function() {
    return this.configurations.getItem("currenciesSupported");
};

/**
 * Get banner URL from configurations
 * @param {obejct} currencies currency
 * @returns {object}  currency list
 */
ConfigurationManager.prototype.getCurrenciesList = function(currencies) {
    var currencyArr = [];
	for(var cur in currencies){
		var currency = [];
		var symbol = applicationManager.getConfigurationManager().getCurrency(currencies[cur]);
		currency.push(currencies[cur], currencies[cur]+" "+symbol);
		currencyArr.push(currency);   
    }
    return currencyArr;
};
  /**
* Get currency method.
*@returns {String} - returns the currency.
*/
ConfigurationManager.prototype.getCurrency = function(currency) {
    return this.currencyCode[currency];
};
/**
 * Get banner URL from configurations
 * @returns {String} -  Banner URL
 */
ConfigurationManager.prototype.getBannerURL = function() {
    return this.configurations.getItem("BANNER_URL");
};

/**
* Get Deployment Geography.
* @returns {String} - deployment geography.
*/
ConfigurationManager.prototype.getDeploymentGeography = function() {
    return this.configurations.getItem("DEPLOYMENTGEOGRAPHY");
};

/**
 * Get the Base Currency
 * @returns {String} - base currency 
 */
ConfigurationManager.prototype.getBaseCurrency = function()
{
    return this.configurations.getItem("BASECURRENCY");
};

/**
 * Get bank name from configurations
 * @returns {String} - bank Name
 */
ConfigurationManager.prototype.getBankName = function() {
    return this.configurations.getItem("BANKNAME");
};

/**
 * Get business days from configurations
 * @returns {String} - value associated with given key
 */
ConfigurationManager.prototype.getBusinessDays = function() {
    return this.configurations.getItem("BUSINESSDAYS");
};

/**
 * Get ocr api key from configurations 
 * @returns {String} - value associated with given key
 */
ConfigurationManager.prototype.getOcrApiKey = function() {
    return this.configurations.getItem("OCRAPIKEY");
};

/**
 * Get ocr secret key from configurations
 * @returns {String} - value associated with given key
 */
ConfigurationManager.prototype.getOcrSecretKey = function() {
    return this.configurations.getItem("OCRSECRETKEY");
};

/**
 * Get facial license string from configurations
 * @returns {String} - value associated with given key
 */
ConfigurationManager.prototype.getFacialLicenseString = function() {
    return this.configurations.getItem("FACIALLICENSESTRING");
};

/**
 * Get facial license server url from configurations
 * @returns {String} - value associated with given key
 */
ConfigurationManager.prototype.getFacialLicenseServerUrl = function() {
    return this.configurations.getItem("FACIALLICENSESERVERURL");
};

/**
 * Get is update mandatory from configurations
 * @returns {boolean} - value associated with given key
 */
ConfigurationManager.prototype.isAppUpdateMandatory = function() {
    return (this.configurations.getItem("ISUPDATEMANDATORY") == "true") ? true : false;
};

/**
 * Get is update from configurations
 * @returns {boolean} - value associated with given key
 */
ConfigurationManager.prototype.isAppUpdate = function() {
    return (this.configurations.getItem("ISUPDATE") == "true") ? true : false;
};

/**
 * Set locale and date format at app launch
 * @returns 
 */
ConfigurationManager.prototype.setStartupLocaleAndDateFormat = function(res) {
  var config = applicationManager.getConfigurationManager();
  var sm = applicationManager.getStorageManager();
  var langObjFromStorage = sm.getStoredItem("langObj");
  if(!kony.sdk.isNullOrUndefined(langObjFromStorage)){
    config.configurations.setItem("LOCALE",config.locale[langObjFromStorage.language]);
  }
  else{
    config.configurations.setItem("LOCALE", "en");
  }
  if(config.getLocale()!==null){
    config.configurations.setItem("DATEFORMAT", config.frontendDateFormat[config.getLocale()]);
  }
  else{
    config.configurations.setItem("DATEFORMAT", null);
  }
};
/**
 * Set locale and date format
 * @returns 
 */
ConfigurationManager.prototype.setLocaleAndDateFormat = function(res) {
  var config = applicationManager.getConfigurationManager();
  if (!config.getLanguageSelectionFlag()){
    config.configurations.setItem("LOCALE", "en");
  }
  else{
    var sm = applicationManager.getStorageManager();
    var langObjFromStorage = sm.getStoredItem("langObj");
    if(!kony.sdk.isNullOrUndefined(langObjFromStorage)){
      config.configurations.setItem("LOCALE",config.locale[langObjFromStorage.language]);
    }
    else if(!kony.sdk.isNullOrUndefined(res) && res["data"].language !== undefined) {
      config.configurations.setItem("LOCALE", config.locale[res["data"].language]);
    }
    else{
      config.configurations.setItem("LOCALE", "en");
    }
  }
  if(config.getLocale()!==null){
    config.configurations.setItem("DATEFORMAT", config.frontendDateFormat[config.getLocale()]);
  }
  else{
    config.configurations.setItem("DATEFORMAT", null);
  }
};
/**
 * Get is update from configurations
 * @returns {boolean} - value associated with given key
 */
ConfigurationManager.prototype.getLanguageSelectionFlag = function() {
    return (this.configurations.getItem("ISLANGUAGESELECTION")!== null && this.configurations.getItem("ISLANGUAGESELECTION") == "true") ? true : false;
};

/**
 * Get is backend currency symbol flag enabled in configurations
 * @returns {boolean} - value associated with given key
 */
ConfigurationManager.prototype.getBackEndCurencySymbolFlag = function() {
    return (this.configurations.getItem("ISBACKENDCURRENCYSYMBOLENABLED") == "true") ? true : false;
};

/**
 * Get is country flag enabled from configurations
 * @returns {boolean} - value associated with given key
 */
ConfigurationManager.prototype.getCountryCodeFlag = function() {
    return (this.configurations.getItem("ISCOUNTRYCODEENABLED") == "true") ? true : false;
};

/**
 * Get is sort code visibility enabled from configurations
 * @returns {boolean} - value associated with given key
 */
ConfigurationManager.prototype.getSortCodeVisibilityFlag = function() {
    return (this.configurations.getItem("ISSORTCODEVISIBLE") == "true") ? true : false;
};
/**
 * Get is sort code visibility enabled from configurations
 * @returns {boolean} - value associated with given key
 */
ConfigurationManager.prototype.getUTCDateFormattingFlag = function() {
    return (this.configurations.getItem("ISUTCDATEFORMATTINGENABLED") == "true") ? true : false;
};  
  
/**
 * Get currency code from configurations
 * @returns {String} - value associated with given key
 */
ConfigurationManager.prototype.getCurrencyCode = function() {
    return this.configurations.getItem("CURRENCYCODE");
};

/**
* Get currency method.
*@returns {String} - returns the currency.
*/
ConfigurationManager.prototype.getCurrency = function(currency) {
    return this.currencyCode[currency];
};

/**
 * Get locale from configurations
 * @returns {String} - value associated with given key
 */
ConfigurationManager.prototype.getLocale = function() {
    return this.configurations.getItem("LOCALE");
};
/**
 * Get Date format from configurations
 * @returns {String} - value associated with given key
 */
ConfigurationManager.prototype.getDateFormat = function() {
    return this.configurations.getItem("DATEFORMAT");
};

/**
 * Get force Touch Items form configurations
 * @returns {List} - List of force touch items
 */
ConfigurationManager.prototype.getForceTouchItems = function() {
    // needs implimentation
    return;
}

/**
 * Get frequencyTypes(constants) form configurations
 * @returns {Array} - List of constant 
 */
ConfigurationManager.prototype.getFrequencyTypes = function() {
    var typesList = [];
    typesList.push("WEEKLY", "DAILY", "MONTHLY", "BIWEEKLY");
    return typesList;
}

/**
 * Get value of given constant form configurations
 * @param {String} cosntant - name of constant
 * @returns {String} - value associated with given key
 */
ConfigurationManager.prototype.getConstantValue = function(constant) {
    return this.constants[constant];
}

/**
 * Get value of marital status from configurations
 * @returns {Array} 
 */
ConfigurationManager.prototype.getMaritalStatus = function() {
    return this.maritalStatus;
};

/**
 * Get value of number of dependents from configurations
 * @returns {Array} 
 */
ConfigurationManager.prototype.getNumberOfDependents = function() {
    return this.numberOfDependents;
};

/**
 * Get value of employment type from configurations
 * @returns {Array} 
 */
ConfigurationManager.prototype.getEmployementType = function() {
    return this.employmentTypeValues;
};

/**
 * Get value of gender from configurations
 * @returns {Array} 
 */
ConfigurationManager.prototype.getGender = function() {
    return this.gender;
};

/**
 * Get value of employment experience from configurations
 * @returns {Array} 
 */
ConfigurationManager.prototype.getEmploymentExperience = function() {
    return this.employmentInfoYears;
};

/**
 * Get value of annual income from configurations
 * @returns {Array} 
 */
ConfigurationManager.prototype.getAnnualIncome = function() {
    return this.annualIncome;
};

/**
 * Get value of monthly income from configurations
 * @returns {Array} 
 */
ConfigurationManager.prototype.getMonthlyIncome = function() {
    return this.monthlyExpenditure;
};

/**
 * Get value of financial assets from configurations
 * @returns {Array} 
 */
ConfigurationManager.prototype.getFinancialAssets = function() {
    return this.assets;
};

/**
 * Get Menu Items for Hamburger Menu configurations
 * @returns {Array} 
 */
ConfigurationManager.prototype.getHamburgerMenuItems = function() {
    return this.hamburgerMenuItems;
};

/**
 * Get Menu Items for Hamburger Menu configurations
 * @returns {Array} 
 */
ConfigurationManager.prototype.modifyHamburgerMenuItems = function() {
    	this.hamburgerMenuItems.splice(6,3);
};

/**
  * Get value IsAggregatedExternalAccountEnabled, customer level configurable
  * @returns true/false 
  */
ConfigurationManager.prototype.isAggregatedExternalAccountEnabled=function(){
	return this.AggregatedExternalAccountEnabled;
};
  
  /**
  * Get value DebugMode, customer level configurable
  * @member of ConfigurationManager
  * @returns true/false 
  */
ConfigurationManager.prototype.isDebugMode=function(){
	return this.DebugMode;
};
 
/* Get Menu Items for More Menu from configurations
  * @returns {Array} 
  */
ConfigurationManager.prototype.getMoreMenuItems = function(){
  return this.moreMenuItems;
};
  
/* Get Menu Items for More Menu from configurations for Ipad
  * @returns {Array} 
  */
ConfigurationManager.prototype.getMoreMenuItemsIpad = function(){
  return this.moreMenuItemsIpad;
};

/**
  * Get Menu Items for IOS app menu from configurations
  * @returns {Array} 
  */
ConfigurationManager.prototype.getIOSAppMenuItems = function(){
  return this.iPhoneMenuItems;
};

/**
  * Get Menu Items for IPad app menu from configurations
  * @returns {Array} 
  */
 ConfigurationManager.prototype.getIPadAppMenuItems = function(){
    return this.iPadMenuItems;
  };

/**
  * Getter for Denomination amount values from configurations
  * @returns {Array} 
  */
ConfigurationManager.prototype.getDenominationAmountValues = function(){
  return this.denominationAmountValues;
};

/**
  * Get value isCustomMetricsEnabled, customer level configurable
  * @returns {Boolean} true/false 
  */
ConfigurationManager.prototype.isCustomMetricsEnabled=function(){
                return this.CustomMetricsEnabled;
};
/**
  * Getter for server time zone from configurations
  * @member of ConfigurationManager
  * @returns {String} 
  */
ConfigurationManager.prototype.getServerTimeZone = function(){
  return this.serverTimeZone;
};
/**
  * Get Message unread count
  * @returns {number} number of unread messages
  */
ConfigurationManager.prototype.getUnreadMessageCount=function(){
                return this.unreadMessageCount;
};
/**
  * Set Message unread count
  * @returns {number} number of unread messages
  */
ConfigurationManager.prototype.setUnreadMessageCount=function(unreadMessageCount){
        this.unreadMessageCount = unreadMessageCount;;
};

    /**
     * Method to set Configutation value
     * @param {string} key - configuration key
     * @param {*} value - configuration value
     */
    ConfigurationManager.prototype.setConfigurationValue = function (key, value) {
        var scopeObj = this;
        if(value !==undefined && value!==null) {
            scopeObj[key] = value;
        }
    };

    /**
     * Method to get Configutation value
     * @param {string} key - configuration key
     * @returns {*} value - configuration value
     */
    ConfigurationManager.prototype.getConfigurationValue = function (key) {
        var scopeObj = this;
        return scopeObj[key];
    };
    /**
     * Method update entitlement values
     * @param {object}  entitlements  - entilements data response object
     */
    ConfigurationManager.prototype.setEntitlements = function (entitlements) {
        var servicesListForUser = entitlements.services;
        this.servicesListForUser = servicesListForUser;
        for (var i = 0; i < servicesListForUser.length; i++) {
            switch (servicesListForUser[i].displayName) {
                case "KonyBankAccountsTransfer":
                    this.setConfigurationValue("isKonyBankAccountsTransfer", "true");
                    this.setConfigurationValue("minKonyBankAccountsTransferLimit", servicesListForUser[i].minTransferLimit);
                    this.setConfigurationValue("maxKonyBankAccountsTransferLimit", servicesListForUser[i].maxTransferLimit);
                    break;
                case "OtherKonyAccountsTransfer":
                    this.setConfigurationValue("isOtherKonyAccountsTransfer", "true");
                    this.setConfigurationValue("minOtherKonyAccountsTransferLimit", servicesListForUser[i].minTransferLimit);
                    this.setConfigurationValue("maxOtherKonyAccountsTransferLimit", servicesListForUser[i].maxTransferLimit);
                    break;
                case "OtherBankAccountsTransfer":
                    this.setConfigurationValue("isOtherBankAccountsTransfer", "true");
                    this.setConfigurationValue("minOtherBankAccountsTransferLimit", servicesListForUser[i].minTransferLimit);
                    this.setConfigurationValue("maxOtherBankAccountsTransferLimit", servicesListForUser[i].maxTransferLimit);
                    break;
                case "InternationalAccountsTransfer":
                    this.setConfigurationValue("isInternationalAccountsTransfer", "true");
                    this.setConfigurationValue("minInternationalAccountsTransferLimit", servicesListForUser[i].minTransferLimit);
                    this.setConfigurationValue("maxInternationalAccountsTransferLimit", servicesListForUser[i].maxTransferLimit);
                    break;
                case "DomesticWireTransfer":
                    this.setConfigurationValue("isDomesticWireTransferEnabled", "true");
                    this.setConfigurationValue("minDomesticWireTransferLimit", servicesListForUser[i].minTransferLimit);
                    this.setConfigurationValue("maxDomesticWireTransferLimit", servicesListForUser[i].maxTransferLimit);
                    break;
                case "InternationalWireTransfer":
                    this.setConfigurationValue("isInternationalWireTransferEnabled", "true");
                    this.setConfigurationValue("minInternationalWireTransferLimit", servicesListForUser[i].minTransferLimit);
                    this.setConfigurationValue("maxInternationalWireTransferLimit", servicesListForUser[i].maxTransferLimit);
                    break;
                case "BillPay":
                    this.setConfigurationValue("isBillPayEnabled", "true");
                    this.setConfigurationValue("minBillPayLimit", servicesListForUser[i].minTransferLimit);
                    this.setConfigurationValue("maxBillPayLimit", servicesListForUser[i].maxTransferLimit);
                    break;
                case "PayAPerson":
                    this.setConfigurationValue("ispayAPersonEnabled", "true");
                    this.setConfigurationValue("minP2PLimit", servicesListForUser[i].minTransferLimit);
                    this.setConfigurationValue("maxP2PLimit", servicesListForUser[i].maxTransferLimit);
                    break;
                case "RDC":
                    this.setConfigurationValue("isRDCEnabled", "true");
                    this.setConfigurationValue("minRDCLimit", servicesListForUser[i].minTransferLimit);
                    this.setConfigurationValue("maxRDCLimit", servicesListForUser[i].maxTransferLimit);
                    break;
                case "User Management":
                    this.setConfigurationValue("isBusinessOwner", "true");
                    break;
                default:
                    break;
            }
        }
        if(entitlements.isSecurityQuestionConfigured !== undefined && entitlements.isSecurityQuestionConfigured !== null) {
            this.setConfigurationValue("isSecurityQuestionConfigured", entitlements.isSecurityQuestionConfigured);
        }
    };
/**
 * Method to set Data in Menu Based on Entitlement
 */
ConfigurationManager.prototype.rearrangeHamburgerAccordingToEntitements = function() {
    
     
    if (this.isBillPayEnabled === "false" && this.isRDCEnabled === "false") {
      this.hamburgerMenuItems.splice(2,1);
      this.hamburgerMenuItems.splice(2,1);       
    }
    
    else  if (this.isBillPayEnabled === "false" && this.isRDCEnabled === "true") {
    this.hamburgerMenuItems.splice(2,1);
    
    }
      else if(this.isBillPayEnabled === "true" && this.isRDCEnabled === "false") {   
     this.hamburgerMenuItems.splice(3,1);       
    }
       
   if (this.isBillPayEnabled === "false" && this.isRDCEnabled === "false") {
    this.moreMenuItems.splice(0,1);
    this.moreMenuItems.splice(6,1);
   }
   else  if (this.isBillPayEnabled === "false" && this.isRDCEnabled === "true") {
    this.moreMenuItems.splice(7,1);  
   }
   else  if (this.isBillPayEnabled === "true" && this.isRDCEnabled === "false") {
    this.moreMenuItems.splice(0,1);
   }
  if (this.isBillPayEnabled === "true") {
    this.iPhoneMenuItems.splice(2,0,{
      "img": "billpay.png",
      "text": this.constants.MENUBILLPAY,
      "info":null
    });
  }else {
    this.iPhoneMenuItems.splice(2,0,{
      "img": "settings.png",
      "text": this.constants.MENUSETTINGS,
      "info":null
    });
  }
    
  };
    /**
     * Method to get user services list.
     * @returns {Array} servicesListForUser - Users services list
     */
    ConfigurationManager.prototype.getServicesListForUser = function() {
      return this.servicesListForUser;
    };
        
    
    /**
     * Method to fetch outage service messages.
     * @param {function} presentationSuccess -  will be called when call is successfull
     * @param {function} presentationError - will be called when call is not successfull
     */
    ConfigurationManager.prototype.fetchOutageMessages = function (presentationSuccess, presentationError) {
        var scopeObj = this;

        function completionCallback(status, data, error) {
            var srh = applicationManager.getServiceResponseHandler();
            var res = srh.manageResponse(status, data, error);
            if (res["status"]) {
                scopeObj.setOutageMessages(res["data"]);
                presentationSuccess(res["data"]);
            } else {
                presentationError(res["errmsg"]);
            }
        }

        try  {
            var  outageMessageModel  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("OutageMessage");
             outageMessageModel.getOutageMessage({}, completionCallback);
        }  catch  (error) {
            applicationManager.getLoggerManager().log("Something went wrong in fetchOutageMessages");
        }
    };

    /**
     * Method to set outage messages
     * @param {object} response - response data object from success outage message service.
     */
    ConfigurationManager.prototype.setOutageMessages = function(response) {
        if(response && response.records && response.records.length) {
            this.outageMessages = response.records.map(function(msgObj){
                return msgObj.MessageText;
            });
        }
    };

    /**
     * Method to get outage messages
     * @returns {Array} response - outage messages
     */
    ConfigurationManager.prototype.getOutageMessages = function() {
        return this.outageMessages;
    };

    /**
     * Method to get account types
     * @returns {Array} response - account types
     */
    ConfigurationManager.prototype.getAccountTypesMetaData = function() {
      /**@member {Array} gender holds the list of different account types*/
      var accountTypesMetaData = [{'applicationValue': this.accountTypes.CHECKING, 'backendValue': kony.i18n.getLocalizedString("i18n.Accounts.backendChecking"), 'displayValue': kony.i18n.getLocalizedString("i18n.Accounts.displayChecking")},
                                   {'applicationValue': this.accountTypes.SAVINGS, 'backendValue': kony.i18n.getLocalizedString("i18n.Accounts.backendSavings"), 'displayValue': kony.i18n.getLocalizedString("i18n.Accounts.displaySavings")},
                                   {'applicationValue': this.accountTypes.CREDITCARD, 'backendValue': kony.i18n.getLocalizedString("i18n.Accounts.backendCreditCard"), 'displayValue': kony.i18n.getLocalizedString("i18n.Accounts.displayCreditCard")},
                                   {'applicationValue': this.accountTypes.DEPOSIT, 'backendValue': kony.i18n.getLocalizedString("i18n.Accounts.backendDeposit"), 'displayValue': kony.i18n.getLocalizedString("i18n.Accounts.displayDeposit")},
                                   {'applicationValue': this.accountTypes.MORTGAGE, 'backendValue': kony.i18n.getLocalizedString("i18n.Accounts.backendMortgage"), 'displayValue': kony.i18n.getLocalizedString("i18n.Accounts.displayMortgage")},
                                   {'applicationValue': this.accountTypes.LOAN, 'backendValue': kony.i18n.getLocalizedString("i18n.Accounts.backendLoan"), 'displayValue': kony.i18n.getLocalizedString("i18n.Accounts.displayLoan")},
                                   {'applicationValue': this.accountTypes.CURRENT, 'backendValue': kony.i18n.getLocalizedString("i18n.Accounts.backendCurrent"), 'displayValue': kony.i18n.getLocalizedString("i18n.Accounts.displayCurrent")},
                                   {'applicationValue': this.accountTypes.LINE_OF_CREDIT, 'backendValue': kony.i18n.getLocalizedString("i18n.Accounts.backendLineOfCredit"), 'displayValue': kony.i18n.getLocalizedString("i18n.Accounts.displayLineOfCredit")},
                                   {'applicationValue': this.accountTypes.EXTERNAL, 'backendValue': kony.i18n.getLocalizedString("i18n.Accounts.backendExternal"), 'displayValue': kony.i18n.getLocalizedString("i18n.Accounts.displayExternal")}];

      return accountTypesMetaData;
    };
    ConfigurationManager.prototype.reloadConstants = function() {
        var constants =  {
            IDLE_TIMEOUT: 5,
            TRAVELPLANS_DESTINATION_LIMIT: 5,
            IDENTITYSERVICENAME: "DbxUserLogin",
            WEEKLY: "Weekly",
            DAILY: "Daily",
            MONTHLY: "Monthly",
            BIWEEKLY: "Biweekely",
            SERVICE_NAME: "RBSERVICES",
            LOADING_SCREEN_MESSAGE: "Loading ...",
            CHECKING: "Checking",
            SAVINGS: "Savings",
            CREDITCARD: "CreditCard",
            DEPOSIT: "Deposit",
            MORTGAGE: "Mortgage",
            LOAN: "Loan",
            EXTERNAL_BANK_ACCOUNT: "ExternalBankAccount",
            LANG_CHANGE_FROM_LOGIN: "login",
            LANG_CHANGE_FROM_SETTINGS: "settings",
            HEADERFAQ: kony.i18n.getLocalizedString("kony.mb.Support.HeaderFAQ"),
            HEADERPRIVACYPOLICY: kony.i18n.getLocalizedString("kony.mb.Support.HeaderPrivacyPolicy"),
            HEADERABOUTUS: kony.i18n.getLocalizedString("kony.mb.Support.HeaderAbout"),
            HEADERTERMSANDCONDITIONS: kony.i18n.getLocalizedString("kony.mb.Support.HeaderTC"),
            FAQ: kony.i18n.getLocalizedString("kony.mb.Support.FAQ"),
            PRIVACY: kony.i18n.getLocalizedString("kony.mb.Support.Privacy"),
            TERMS: kony.i18n.getLocalizedString("kony.mb.Support.Terms"),
            ABOUT: kony.i18n.getLocalizedString("kony.mb.Support.Aboutus"),
            Last7days: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Last7days"),
            Last30days: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Last30days"),
            Last60days: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Last60days"),
            CustomRange: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.CustomRange"),
            Withdrawals: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Withdrawals"),
            Deposits: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Deposits"),
            P2PDebits: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.P2PDebits"),
            BillPay: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.BillPay"),
            Transfers: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Transfers"),
            Checks: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Checks"),
            P2PCredits: kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.P2PCredits"),
            MENUACCOUNTS: kony.i18n.getLocalizedString("kony.mb.Hamburger.Accounts"),
            MENUTRANSFERS: kony.i18n.getLocalizedString("kony.mb.Hamburger.Transfers"),
            MENUOPENACOUNT: kony.i18n.getLocalizedString("kony.mb.Hamburger.OpenAccount"),
            MENUMESSAGES: kony.i18n.getLocalizedString("kony.mb.Hamburger.Messages"),
            MENUSETTINGS: kony.i18n.getLocalizedString("kony.mb.Hamburger.Settings"),
            MENUCHATBOT: kony.i18n.getLocalizedString("kony.mb.Hamburger.chatbot"),
            MENULOCATE: kony.i18n.getLocalizedString("kony.mb.Hamburger.Locateus"),
            MENUCONTACT: kony.i18n.getLocalizedString("kony.mb.Hamburger.Contactus"),
            MENUMYWALLET: kony.i18n.getLocalizedString("kony.mb.Hamburger.Mywallet"),
            MENUBILLPAY: kony.i18n.getLocalizedString("kony.mb.Hamburger.BillPay"),
            MENUCHECKDEPOSIT: kony.i18n.getLocalizedString("kony.mb.Hamburger.CheckDeposit"),
            MENUCARDLESS: kony.i18n.getLocalizedString("kony.mb.Hamburger.CardLessCash"),
            MENUCARDMANAGEMENT: kony.i18n.getLocalizedString("kony.mb.Hamburger.CardManagement"),
            MENUMANAGEOTHERBANKACCOUNTS: kony.i18n.getLocalizedString("kony.mb.ExternalAccounts.ManageOtherBankAccounts"),
            MENUPFMMYMONEY: kony.i18n.getLocalizedString("kony.mb.PFMMyMoney")
        };
        this.constants = constants;
        var hamburgerMenuItems = [{
            "img": "accounts.png",
            "text": this.constants.MENUACCOUNTS,
            "info": null
        }, {
            "img": "transfer.png",
            "text": this.constants.MENUTRANSFERS,
            "info": null
        }, {
            "img": "billpay.png",
            "text": this.constants.MENUBILLPAY,
            "info": null
        }, {
            "img": "checkdepositimg.png",
            "text": this.constants.MENUCHECKDEPOSIT,
            "info": null
        }, {
            "img": "cardlesscash.png",
            "text": this.constants.MENUCARDLESS,
            "info": null
        }, {
            "img": "cardmange.png",
            "text": this.constants.MENUCARDMANAGEMENT,
            "info": null
        }, {
            "img": "mangeothrbank.png",
            "text": this.constants.MENUMANAGEOTHERBANKACCOUNTS,
            "info": null
        }, {
            "img": "opennew.png",
            "text": this.constants.MENUOPENACOUNT,
            "info": null
        }, {
            "img": "billpay.png",
            "text": this.constants.MENUPFMMYMONEY,
            "info": null
        }, {
            "img": "message.png",
            "text": this.constants.MENUMESSAGES,
            "info": null
        }, {
            "img": "settings.png",
            "text": this.constants.MENUSETTINGS,
            "info": null
        }, {
            "img": "locateus.png",
            "text": this.constants.MENULOCATE,
            "info": null
        }, {
            "img": "contactus.png",
            "text": this.constants.MENUCONTACT,
            "info": null
        }];
        this.hamburgerMenuItems = hamburgerMenuItems;
                /**@member {Array} hamburgerMenuItems holds the list of HamburgerMenu Items*/
        
        this.masterHamburgerData = (JSON.parse(JSON.stringify(this.hamburgerMenuItems)));
        
        var moreMenuItems = [{
            "img": "checkdepositimg.png",
            "text": this.constants.MENUCHECKDEPOSIT,
            "info": null
        }, {
            "img": "cardlesscash.png",
            "text": this.constants.MENUCARDLESS,
            "info": null
        }, {
            "img": "cardmange.png",
            "text": this.constants.MENUCARDMANAGEMENT,
            "info": null
        }, {
            "img": "mangeothrbank.png",
            "text": this.constants.MENUMANAGEOTHERBANKACCOUNTS,
            "info": null
        }, {
            "img": "opennew.png",
            "text": this.constants.MENUOPENACOUNT,
            "info": null
        }, {
            "img": "billpay.png",
            "text": this.constants.MENUPFMMYMONEY,
            "info": null
        }, {
            "img": "message.png",
            "text": this.constants.MENUMESSAGES,
            "info": null
        }, {
            "img": "settings.png",
            "text": this.constants.MENUSETTINGS,
            "info": null
        }, {
            "img": "locateus.png",
            "text": this.constants.MENULOCATE,
            "info": null
        }, {
            "img": "contactus.png",
            "text": this.constants.MENUCONTACT,
            "info": null
        }];
        this.moreMenuItems = moreMenuItems;
        /**@member {Array} moreMenuItems holds the list of more MenuItems*/
        
        this.mastermoreMenuItems = (JSON.parse(JSON.stringify(this.moreMenuItems)));
   
        /**@member {Array} iPhoneMenuItems holds the list of iPhone MenuItems*/
        var iPhoneMenuItems = [{
            "img": "accounts.png",
            "text": this.constants.MENUACCOUNTS,
            "info": null
        }, {
            "img": "transfer.png",
            "text": this.constants.MENUTRANSFERS,
            "info": null
        }, {
            "img": "billpay.png",
            "text": this.constants.MENUBILLPAY,
            "info": null
        }];
        this.iPhoneMenuItems = iPhoneMenuItems;
    };
        

    /**
     * Method to check if business banking is enabled.
     * @returns {boolean} true/false
     */
    ConfigurationManager.prototype.isBusinessBankingEnabled = function() {
        return true;
        //TODO AOLB-611
        //return this.configurations.getItem("ISBUSINESSBANKINGENABLED") === "true";
    };
	
	/**
     * Method to set application property.
     */
    ConfigurationManager.prototype.setAppProperties = function(value) {
       this.isAppPropertiesLoaded =  value;
    };
  
  // Date format 
  ConfigurationManager.prototype.getCalendarDateFormat = function() {
    var dummy;
   var locale = this.getLocale();
   locale = locale.toLowerCase();
   locale = locale.replace("_","-");
    if(locale =="en-us" || locale=="en"){
      dummy = 'MM/DD/YYYY';
    }
    else if(locale == "en-gb" || locale == "fr-fr" || locale =="es-es"){
      dummy = 'DD/MM/YYYY';
    }
    else if(locale=="de-de"){
      dummy = 'DD.MM.YYYY';
    }
    else if(locale=="sv-se"){
      dummy = 'YYYY-DD-MM';
    }
    return dummy;
  };

return ConfigurationManager;
});
