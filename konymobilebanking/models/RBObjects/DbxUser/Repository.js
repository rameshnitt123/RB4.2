define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function DbxUserRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	DbxUserRepository.prototype = Object.create(BaseRepository.prototype);
	DbxUserRepository.prototype.constructor = DbxUserRepository;

	//For Operation 'verifyDbxUserName' with service id 'verifyDbxUserName2953'
	DbxUserRepository.prototype.verifyDbxUserName = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('verifyDbxUserName',params, onCompletion);
	};
	//For Operation 'CreateMicroOrganizationEmployee' with service id 'CreateMicroOrganizationEmployee8363'
	DbxUserRepository.prototype.CreateMicroOrganizationEmployee = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('CreateMicroOrganizationEmployee',params, onCompletion);
	};
	//For Operation 'getCustomerTypes' with service id 'getCustomerTypes3510'
	DbxUserRepository.prototype.getCustomerTypes = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('getCustomerTypes',params, onCompletion);
	};
	//For Operation 'verifyOrganisationUser' with service id 'verifyOraganisationUser1693'
	DbxUserRepository.prototype.verifyOrganisationUser = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('verifyOrganisationUser',params, onCompletion);
	};
	//For Operation 'IsEmailLinkActive' with service id 'IsEmailLinkActive2056'
	DbxUserRepository.prototype.IsEmailLinkActive = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('IsEmailLinkActive',params, onCompletion);
	};
	//For Operation 'createCustomerMock' with service id 'createCustomer6642'
	DbxUserRepository.prototype.createCustomerMock = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('createCustomerMock',params, onCompletion);
	};
	//For Operation 'resetDbxUserPassword' with service id 'resetDbxUserPassword2912'
	DbxUserRepository.prototype.resetDbxUserPassword = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('resetDbxUserPassword',params, onCompletion);
	};
	//For Operation 'updateDBXUserStatus' with service id 'UpdateDBXUserStatus7858'
	DbxUserRepository.prototype.updateDBXUserStatus = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('updateDBXUserStatus',params, onCompletion);
	};
	//For Operation 'getGroupEntitlements' with service id 'getGroupEntitlements3846'
	DbxUserRepository.prototype.getGroupEntitlements = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('getGroupEntitlements',params, onCompletion);
	};
	//For Operation 'ResendActivationLink' with service id 'ResendOrgEmployeeActivationLink3557'
	DbxUserRepository.prototype.ResendActivationLink = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('ResendActivationLink',params, onCompletion);
	};
	//For Operation 'getCustomerCommunication' with service id 'getCustomerCommunication7155'
	DbxUserRepository.prototype.getCustomerCommunication = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('getCustomerCommunication',params, onCompletion);
	};
	//For Operation 'checkIfOrgMemberExists' with service id 'checkIfOrgMemberExists8908'
	DbxUserRepository.prototype.checkIfOrgMemberExists = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('checkIfOrgMemberExists',params, onCompletion);
	};
	//For Operation 'CreateDbxMicroBusinessUser' with service id 'CreateDbxMicroBusinessUser7923'
	DbxUserRepository.prototype.CreateDbxMicroBusinessUser = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('CreateDbxMicroBusinessUser',params, onCompletion);
	};
	//For Operation 'updateCustomerProfile' with service id 'updateCustomerProfile6713'
	DbxUserRepository.prototype.updateCustomerProfile = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('updateCustomerProfile',params, onCompletion);
	};
	//For Operation 'updateOrganizationEmployee' with service id 'EditOrganizationEmployee1317'
	DbxUserRepository.prototype.updateOrganizationEmployee = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('updateOrganizationEmployee',params, onCompletion);
	};
	//For Operation 'lockUnlockCustomer' with service id 'lockUnlockCustomer8209'
	DbxUserRepository.prototype.lockUnlockCustomer = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('lockUnlockCustomer',params, onCompletion);
	};
	//For Operation 'CreateOrganizationEmployee' with service id 'CreateOrganizationEmployee1324'
	DbxUserRepository.prototype.CreateOrganizationEmployee = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('CreateOrganizationEmployee',params, onCompletion);
	};
	//For Operation 'fetchCustomerDetailsForOlb' with service id 'fetchCustomerDetailsForOlb9099'
	DbxUserRepository.prototype.fetchCustomerDetailsForOlb = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('fetchCustomerDetailsForOlb',params, onCompletion);
	};
	//For Operation 'updateDbxCustomerNew' with service id 'updateDbxCustomerNew6883'
	DbxUserRepository.prototype.updateDbxCustomerNew = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('updateDbxCustomerNew',params, onCompletion);
	};
	//For Operation 'sendKMSEmail' with service id 'sendEmail6324'
	DbxUserRepository.prototype.sendKMSEmail = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('sendKMSEmail',params, onCompletion);
	};
	//For Operation 'sendDbxResetPasswordEmail' with service id 'sendDbxResetPasswordLink9649'
	DbxUserRepository.prototype.sendDbxResetPasswordEmail = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('sendDbxResetPasswordEmail',params, onCompletion);
	};
	//For Operation 'dbxRequestOTP' with service id 'dbxrequestOTP9343'
	DbxUserRepository.prototype.dbxRequestOTP = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('dbxRequestOTP',params, onCompletion);
	};
	//For Operation 'getGroups' with service id 'getGroups6746'
	DbxUserRepository.prototype.getGroups = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('getGroups',params, onCompletion);
	};
	//For Operation 'smsOTP' with service id 'smsOTP7625'
	DbxUserRepository.prototype.smsOTP = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('smsOTP',params, onCompletion);
	};
	//For Operation 'createDbxCorporateUser' with service id 'createDbxCorporateUser4168'
	DbxUserRepository.prototype.createDbxCorporateUser = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('createDbxCorporateUser',params, onCompletion);
	};
	//For Operation 'getEmpDetails' with service id 'getEmpDetails7471'
	DbxUserRepository.prototype.getEmpDetails = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('getEmpDetails',params, onCompletion);
	};
	//For Operation 'createGroup' with service id 'createGroup8217'
	DbxUserRepository.prototype.createGroup = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('createGroup',params, onCompletion);
	};
	//For Operation 'dbxVerifyOTP' with service id 'dbxverifyOTP9512'
	DbxUserRepository.prototype.dbxVerifyOTP = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('dbxVerifyOTP',params, onCompletion);
	};
	//For Operation 'getBBCustomerServiceLimit' with service id 'getBBCustomerServiceLimit8755'
	DbxUserRepository.prototype.getBBCustomerServiceLimit = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('getBBCustomerServiceLimit',params, onCompletion);
	};
	//For Operation 'verifyDbxUser' with service id 'verifyDbxUser5509'
	DbxUserRepository.prototype.verifyDbxUser = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('verifyDbxUser',params, onCompletion);
	};
	//For Operation 'OFACAndCIPChecks' with service id 'OFACAndCIPChecks2550'
	DbxUserRepository.prototype.OFACAndCIPChecks = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('OFACAndCIPChecks',params, onCompletion);
	};
	//For Operation 'RegisterMBOwner' with service id 'RegisterMBOwner1331'
	DbxUserRepository.prototype.RegisterMBOwner = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('RegisterMBOwner',params, onCompletion);
	};
	//For Operation 'getDbxUserStatus' with service id 'GetDBXUserStatus1869'
	DbxUserRepository.prototype.getDbxUserStatus = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('getDbxUserStatus',params, onCompletion);
	};
	//For Operation 'CoreUpdateUser' with service id 'CoreUpdateUser8697'
	DbxUserRepository.prototype.CoreUpdateUser = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('CoreUpdateUser',params, onCompletion);
	};
	//For Operation 'getOrganizationUserDetails' with service id 'getOrganizationUserDetails6383'
	DbxUserRepository.prototype.getOrganizationUserDetails = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('getOrganizationUserDetails',params, onCompletion);
	};
	//For Operation 'GetOrgEmployeeDetails' with service id 'GetOrganizationEmployeeDetails9544'
	DbxUserRepository.prototype.GetOrgEmployeeDetails = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('GetOrgEmployeeDetails',params, onCompletion);
	};
	//For Operation 'createDbxProspect' with service id 'createDbxProspect7200'
	DbxUserRepository.prototype.createDbxProspect = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('createDbxProspect',params, onCompletion);
	};
	//For Operation 'CreateDbxMicroBusinessOwner' with service id 'createMicroBusinessOwner4821'
	DbxUserRepository.prototype.CreateDbxMicroBusinessOwner = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('CreateDbxMicroBusinessOwner',params, onCompletion);
	};
	//For Operation 'downloadEAgreementPdf' with service id 'GetEAgreementPdfDownloaded2866'
	DbxUserRepository.prototype.downloadEAgreementPdf = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('downloadEAgreementPdf',params, onCompletion);
	};
	//For Operation 'createBBCustomerServiceLimit' with service id 'createBBCustomerServiceLimit1793'
	DbxUserRepository.prototype.createBBCustomerServiceLimit = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('createBBCustomerServiceLimit',params, onCompletion);
	};
	//For Operation 'updateDbxCustomer' with service id 'updateDbxCustomer6546'
	DbxUserRepository.prototype.updateDbxCustomer = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('updateDbxCustomer',params, onCompletion);
	};
	//For Operation 'getEAgreementPdfDownloaded' with service id 'GetEAgreementPdfDownloaded1446'
	DbxUserRepository.prototype.getEAgreementPdfDownloaded = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('getEAgreementPdfDownloaded',params, onCompletion);
	};
	//For Operation 'editBBCustomerServiceLimit' with service id 'editBBCustomerServiceLimit8796'
	DbxUserRepository.prototype.editBBCustomerServiceLimit = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('editBBCustomerServiceLimit',params, onCompletion);
	};
	//For Operation 'createDbxCustomer' with service id 'CreateDbxUserNew5961'
	DbxUserRepository.prototype.createDbxCustomer = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('createDbxCustomer',params, onCompletion);
	};
	//For Operation 'sendKMSSMS' with service id 'sendSMS1387'
	DbxUserRepository.prototype.sendKMSSMS = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('sendKMSSMS',params, onCompletion);
	};
	//For Operation 'SetOrgEmployeePassword' with service id 'SetOrgEmployeePassword8673'
	DbxUserRepository.prototype.SetOrgEmployeePassword = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('SetOrgEmployeePassword',params, onCompletion);
	};
	//For Operation 'getApplicantInfo' with service id 'getApplicantInfo3967'
	DbxUserRepository.prototype.getApplicantInfo = function(params,onCompletion){
		return DbxUserRepository.prototype.customVerb('getApplicantInfo',params, onCompletion);
	};
	
	
	return DbxUserRepository;
})