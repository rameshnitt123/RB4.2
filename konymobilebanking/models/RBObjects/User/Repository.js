define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function UserRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	UserRepository.prototype = Object.create(BaseRepository.prototype);
	UserRepository.prototype.constructor = UserRepository;

	//For Operation 'verifyCVV' with service id 'verifyCVV3773'
	UserRepository.prototype.verifyCVV = function(params,onCompletion){
		return UserRepository.prototype.customVerb('verifyCVV',params, onCompletion);
	};
	//For Operation 'resetPassword' with service id 'resetUserPassword4032'
	UserRepository.prototype.resetPassword = function(params,onCompletion){
		return UserRepository.prototype.customVerb('resetPassword',params, onCompletion);
	};
	//For Operation 'updatePreferredBillPayAccount' with service id 'updatePreferredBillPayAccount3351'
	UserRepository.prototype.updatePreferredBillPayAccount = function(params,onCompletion){
		return UserRepository.prototype.customVerb('updatePreferredBillPayAccount',params, onCompletion);
	};
	//For Operation 'updateCustomerDetails' with service id 'updateCustomerDetails2685'
	UserRepository.prototype.updateCustomerDetails = function(params,onCompletion){
		return UserRepository.prototype.customVerb('updateCustomerDetails',params, onCompletion);
	};
	//For Operation 'createOLBUser' with service id 'createOLBUser1398'
	UserRepository.prototype.createOLBUser = function(params,onCompletion){
		return UserRepository.prototype.customVerb('createOLBUser',params, onCompletion);
	};
	//For Operation 'checkP2PEligibilityForUser' with service id 'checkP2PEligibilityForUser6229'
	UserRepository.prototype.checkP2PEligibilityForUser = function(params,onCompletion){
		return UserRepository.prototype.customVerb('checkP2PEligibilityForUser',params, onCompletion);
	};
	//For Operation 'createCoreUser' with service id 'createCoreUser7817'
	UserRepository.prototype.createCoreUser = function(params,onCompletion){
		return UserRepository.prototype.customVerb('createCoreUser',params, onCompletion);
	};
	//For Operation 'verifyExternalBankAccount' with service id 'verifyExternalBankAccount1508'
	UserRepository.prototype.verifyExternalBankAccount = function(params,onCompletion){
		return UserRepository.prototype.customVerb('verifyExternalBankAccount',params, onCompletion);
	};
	//For Operation 'updateAddress' with service id 'updateAddress5488'
	UserRepository.prototype.updateAddress = function(params,onCompletion){
		return UserRepository.prototype.customVerb('updateAddress',params, onCompletion);
	};
	//For Operation 'verifyDbxPin' with service id 'verifyDbxPin1445'
	UserRepository.prototype.verifyDbxPin = function(params,onCompletion){
		return UserRepository.prototype.customVerb('verifyDbxPin',params, onCompletion);
	};
	//For Operation 'createUserFeedback' with service id 'createUserFeedback3505'
	UserRepository.prototype.createUserFeedback = function(params,onCompletion){
		return UserRepository.prototype.customVerb('createUserFeedback',params, onCompletion);
	};
	//For Operation 'getNewBrowserCheck' with service id 'getNewBrowserCheck6663'
	UserRepository.prototype.getNewBrowserCheck = function(params,onCompletion){
		return UserRepository.prototype.customVerb('getNewBrowserCheck',params, onCompletion);
	};
	//For Operation 'getAllAddress' with service id 'getAllAddress7266'
	UserRepository.prototype.getAllAddress = function(params,onCompletion){
		return UserRepository.prototype.customVerb('getAllAddress',params, onCompletion);
	};
	//For Operation 'getUserStatus' with service id 'GetUserStatus2324'
	UserRepository.prototype.getUserStatus = function(params,onCompletion){
		return UserRepository.prototype.customVerb('getUserStatus',params, onCompletion);
	};
	//For Operation 'lockUnlockDbxUser' with service id 'LockUnlockDbxUser8249'
	UserRepository.prototype.lockUnlockDbxUser = function(params,onCompletion){
		return UserRepository.prototype.customVerb('lockUnlockDbxUser',params, onCompletion);
	};
	//For Operation 'getUsername' with service id 'fetchUserName1477'
	UserRepository.prototype.getUsername = function(params,onCompletion){
		return UserRepository.prototype.customVerb('getUsername',params, onCompletion);
	};
	//For Operation 'verifyCoreUser' with service id 'verifyCoreUser5797'
	UserRepository.prototype.verifyCoreUser = function(params,onCompletion){
		return UserRepository.prototype.customVerb('verifyCoreUser',params, onCompletion);
	};
	//For Operation 'deactivateP2P' with service id 'deactivateP2P9743'
	UserRepository.prototype.deactivateP2P = function(params,onCompletion){
		return UserRepository.prototype.customVerb('deactivateP2P',params, onCompletion);
	};
	//For Operation 'activateBillPaymentForUser' with service id 'activateBillPaymentForUser1097'
	UserRepository.prototype.activateBillPaymentForUser = function(params,onCompletion){
		return UserRepository.prototype.customVerb('activateBillPaymentForUser',params, onCompletion);
	};
	//For Operation 'verifyOTP' with service id 'verifyOTP4487'
	UserRepository.prototype.verifyOTP = function(params,onCompletion){
		return UserRepository.prototype.customVerb('verifyOTP',params, onCompletion);
	};
	//For Operation 'checkSecurityQuestionStatus' with service id 'checkSecurityQuestionStatus9412'
	UserRepository.prototype.checkSecurityQuestionStatus = function(params,onCompletion){
		return UserRepository.prototype.customVerb('checkSecurityQuestionStatus',params, onCompletion);
	};
	//For Operation 'customUpdate' with service id 'updateUserDetails2403'
	UserRepository.prototype.customUpdate = function(params,onCompletion){
		return UserRepository.prototype.customVerb('customUpdate',params, onCompletion);
	};
	//For Operation 'verifyCoreUserName' with service id 'verifyCoreUserName4736'
	UserRepository.prototype.verifyCoreUserName = function(params,onCompletion){
		return UserRepository.prototype.customVerb('verifyCoreUserName',params, onCompletion);
	};
	//For Operation 'updatePreferredDbxP2PAccounts' with service id 'updatePreferredDbxP2PAccounts3913'
	UserRepository.prototype.updatePreferredDbxP2PAccounts = function(params,onCompletion){
		return UserRepository.prototype.customVerb('updatePreferredDbxP2PAccounts',params, onCompletion);
	};
	//For Operation 'checkDbxUserEnrolled' with service id 'checkDbxUserEnrolled1882'
	UserRepository.prototype.checkDbxUserEnrolled = function(params,onCompletion){
		return UserRepository.prototype.customVerb('checkDbxUserEnrolled',params, onCompletion);
	};
	//For Operation 'checkBillPayEligibilityForUser' with service id 'checkBillPayEligibilityForUser8305'
	UserRepository.prototype.checkBillPayEligibilityForUser = function(params,onCompletion){
		return UserRepository.prototype.customVerb('checkBillPayEligibilityForUser',params, onCompletion);
	};
	//For Operation 'createAddress' with service id 'createAddress3655'
	UserRepository.prototype.createAddress = function(params,onCompletion){
		return UserRepository.prototype.customVerb('createAddress',params, onCompletion);
	};
	//For Operation 'verifyDbxExistingPassword' with service id 'verifyDbxExistingPassword3533'
	UserRepository.prototype.verifyDbxExistingPassword = function(params,onCompletion){
		return UserRepository.prototype.customVerb('verifyDbxExistingPassword',params, onCompletion);
	};
	//For Operation 'requestOTP' with service id 'requestOTP4500'
	UserRepository.prototype.requestOTP = function(params,onCompletion){
		return UserRepository.prototype.customVerb('requestOTP',params, onCompletion);
	};
	//For Operation 'deleteAddress' with service id 'deleteAddress5130'
	UserRepository.prototype.deleteAddress = function(params,onCompletion){
		return UserRepository.prototype.customVerb('deleteAddress',params, onCompletion);
	};
	//For Operation 'checkSecureAccessCode' with service id 'checkSecureAccessCode2931'
	UserRepository.prototype.checkSecureAccessCode = function(params,onCompletion){
		return UserRepository.prototype.customVerb('checkSecureAccessCode',params, onCompletion);
	};
	//For Operation 'getUserDetailsToAdmin' with service id 'GetUserDetailsToAdmin7711'
	UserRepository.prototype.getUserDetailsToAdmin = function(params,onCompletion){
		return UserRepository.prototype.customVerb('getUserDetailsToAdmin',params, onCompletion);
	};
	//For Operation 'getPasswordPolicies' with service id 'getPasswordPolicies3837'
	UserRepository.prototype.getPasswordPolicies = function(params,onCompletion){
		return UserRepository.prototype.customVerb('getPasswordPolicies',params, onCompletion);
	};
	//For Operation 'updateSecureAccessCode' with service id 'updateSecureAccessCode2626'
	UserRepository.prototype.updateSecureAccessCode = function(params,onCompletion){
		return UserRepository.prototype.customVerb('updateSecureAccessCode',params, onCompletion);
	};
	//For Operation 'getCustomerContact' with service id 'getCustomerContact1391'
	UserRepository.prototype.getCustomerContact = function(params,onCompletion){
		return UserRepository.prototype.customVerb('getCustomerContact',params, onCompletion);
	};
	//For Operation 'checkUserEnrolled' with service id 'checkUserEnrolled9245'
	UserRepository.prototype.checkUserEnrolled = function(params,onCompletion){
		return UserRepository.prototype.customVerb('checkUserEnrolled',params, onCompletion);
	};
	//For Operation 'verifyPin' with service id 'verifyPin2016'
	UserRepository.prototype.verifyPin = function(params,onCompletion){
		return UserRepository.prototype.customVerb('verifyPin',params, onCompletion);
	};
	//For Operation 'lockUnlockUser' with service id 'LockUnlockUser9042'
	UserRepository.prototype.lockUnlockUser = function(params,onCompletion){
		return UserRepository.prototype.customVerb('lockUnlockUser',params, onCompletion);
	};
	//For Operation 'activateDbxP2PForUser' with service id 'activateDbxP2PForUser9552'
	UserRepository.prototype.activateDbxP2PForUser = function(params,onCompletion){
		return UserRepository.prototype.customVerb('activateDbxP2PForUser',params, onCompletion);
	};
	//For Operation 'activateP2PForUser' with service id 'activateP2PForUser8370'
	UserRepository.prototype.activateP2PForUser = function(params,onCompletion){
		return UserRepository.prototype.customVerb('activateP2PForUser',params, onCompletion);
	};
	//For Operation 'updatePreferredP2PAccounts' with service id 'updatePreferredP2PAccounts7402'
	UserRepository.prototype.updatePreferredP2PAccounts = function(params,onCompletion){
		return UserRepository.prototype.customVerb('updatePreferredP2PAccounts',params, onCompletion);
	};
	//For Operation 'verifyExistingPassword' with service id 'verifyExistingPassword1245'
	UserRepository.prototype.verifyExistingPassword = function(params,onCompletion){
		return UserRepository.prototype.customVerb('verifyExistingPassword',params, onCompletion);
	};
	//For Operation 'getAllEntitlements' with service id 'getAllEntitlements1392'
	UserRepository.prototype.getAllEntitlements = function(params,onCompletion){
		return UserRepository.prototype.customVerb('getAllEntitlements',params, onCompletion);
	};
	
	
	return UserRepository;
})