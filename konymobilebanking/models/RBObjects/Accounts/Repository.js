define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function AccountsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	AccountsRepository.prototype = Object.create(BaseRepository.prototype);
	AccountsRepository.prototype.constructor = AccountsRepository;

	//For Operation 'getAllAccounts' with service id 'getAllAccounts8755'
	AccountsRepository.prototype.getAllAccounts = function(params,onCompletion){
		return AccountsRepository.prototype.customVerb('getAllAccounts',params, onCompletion);
	};
	//For Operation 'getCustomerAccounts' with service id 'getCustomerAccounts7724'
	AccountsRepository.prototype.getCustomerAccounts = function(params,onCompletion){
		return AccountsRepository.prototype.customVerb('getCustomerAccounts',params, onCompletion);
	};
	//For Operation 'getOrganizationAccounts' with service id 'getOrganisationAccounts7215'
	AccountsRepository.prototype.getOrganizationAccounts = function(params,onCompletion){
		return AccountsRepository.prototype.customVerb('getOrganizationAccounts',params, onCompletion);
	};
	//For Operation 'newAccountOpening' with service id 'newAccountOpening2573'
	AccountsRepository.prototype.newAccountOpening = function(params,onCompletion){
		return AccountsRepository.prototype.customVerb('newAccountOpening',params, onCompletion);
	};
	//For Operation 'updateUserAccountSettingsForAdmin' with service id 'UpdateUserAccountSettingsForAdmin4569'
	AccountsRepository.prototype.updateUserAccountSettingsForAdmin = function(params,onCompletion){
		return AccountsRepository.prototype.customVerb('updateUserAccountSettingsForAdmin',params, onCompletion);
	};
	//For Operation 'updateAccountPreference' with service id 'updateAccountPreference6645'
	AccountsRepository.prototype.updateAccountPreference = function(params,onCompletion){
		return AccountsRepository.prototype.customVerb('updateAccountPreference',params, onCompletion);
	};
	//For Operation 'fetchBankDetails' with service id 'fetchBankDetails9439'
	AccountsRepository.prototype.fetchBankDetails = function(params,onCompletion){
		return AccountsRepository.prototype.customVerb('fetchBankDetails',params, onCompletion);
	};
	//For Operation 'updateFavouriteStatus' with service id 'updateFavouriteStatus8642'
	AccountsRepository.prototype.updateFavouriteStatus = function(params,onCompletion){
		return AccountsRepository.prototype.customVerb('updateFavouriteStatus',params, onCompletion);
	};
	//For Operation 'getRecentAccounts' with service id 'getRecentAccounts9643'
	AccountsRepository.prototype.getRecentAccounts = function(params,onCompletion){
		return AccountsRepository.prototype.customVerb('getRecentAccounts',params, onCompletion);
	};
	//For Operation 'updateAccountPhoneNumber' with service id 'updateAccountPhoneNumber9695'
	AccountsRepository.prototype.updateAccountPhoneNumber = function(params,onCompletion){
		return AccountsRepository.prototype.customVerb('updateAccountPhoneNumber',params, onCompletion);
	};
	//For Operation 'getAccountsPostLogin' with service id 'getAccountsPostLogin1726'
	AccountsRepository.prototype.getAccountsPostLogin = function(params,onCompletion){
		return AccountsRepository.prototype.customVerb('getAccountsPostLogin',params, onCompletion);
	};
	//For Operation 'updateUserAccountSettings' with service id 'updateUserAccountSettings9732'
	AccountsRepository.prototype.updateUserAccountSettings = function(params,onCompletion){
		return AccountsRepository.prototype.customVerb('updateUserAccountSettings',params, onCompletion);
	};
	//For Operation 'unLinkOrgAccounts' with service id 'unLinkOrgAccounts8710'
	AccountsRepository.prototype.unLinkOrgAccounts = function(params,onCompletion){
		return AccountsRepository.prototype.customVerb('unLinkOrgAccounts',params, onCompletion);
	};
	//For Operation 'getAccountsForAdmin' with service id 'GetAccountsForAdmin7035'
	AccountsRepository.prototype.getAccountsForAdmin = function(params,onCompletion){
		return AccountsRepository.prototype.customVerb('getAccountsForAdmin',params, onCompletion);
	};
	//For Operation 'getMembershipAccounts' with service id 'getAccountsbyTINorMembership9871'
	AccountsRepository.prototype.getMembershipAccounts = function(params,onCompletion){
		return AccountsRepository.prototype.customVerb('getMembershipAccounts',params, onCompletion);
	};
	
	
	return AccountsRepository;
})