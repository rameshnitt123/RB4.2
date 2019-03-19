if(typeof(com) === "undefined" || com === null){
	/** 
		@namespace
		@public
	 */	
	com = {};
}

if(com.kony === undefined || com.kony === null){
	/** 
		@public
		@namespace
	*/
	com.kony = {};
}

if(com.kony.IdVerification === undefined || com.kony.IdVerification === null){
	/**
		@public
		@namespace
	*/
	com.kony.IdVerification = {};
}

/**
	This is the entry point to use services of Optical Character Recognition(O.C.R) and IdVerification. Creates and returns an instance of O.C.R and IdVerification service for a given service provider

	@public
	@param {string} serviceProvider - O.C.R and IdVerification service provider whose instance is returned.
	@param {object} serviceConfig - service configuration object.

	@returns {object} - Returns an instance of O.C.R and IdVerification service according to the service provider given that conforms to interface

*/
com.kony.IdVerification.getInstance = function(serviceProvider, serviceConfig){
	var idVerification = null;
	if(serviceProvider === com.kony.IdVerificationServiceProviders.JUMIO){
		idVerification = new com.jumio.IdVerification(serviceConfig);
	}
	return idVerification;
};

/**
	This can be used to check if the O.C.R and IdVerification Tool is available to be used.
	
	@public
	@param {string} serviceProvider - O.C.R and IdVerification serviceProvider that you want to check is available.
	
	@return {boolean} - Returns a boolean stating whether the tool is available or not.
*/
com.kony.IdVerification.isAvailable = function(serviceProvider){
	if(serviceProvider === com.kony.IdVerificationServiceProviders.JUMIO){
		return com.jumio.nv.isPresent();
	}
};

/**
	List of O.C.R and IdVerification service providers

	@readonly
	@memberof com.kony
	@property {object} JUMIO - Jumio O.C.R and IdVerification service
*/
com.kony.IdVerificationServiceProviders = {
	"JUMIO" : "JUMIO"
};

/**
 * Interface for classes that implements IdVerification.
 *
 * @interface com.kony.IdVerification
 */

/**
	Success Callback

	@callback onSuccess
	@param {object} documentData - Data extracted from the scanned document. Only sent to startCallbacks.onSuccess
 */

 /**
 	Error Callback.
 
 	@callback onError
 	@param {string} error - Error string describing the details of error occured
 */

/**
	Initializes OCR and IdVerification service. This method should be called before calling startVerification method otherwise that method will fail and calls back [errorCallback]{onError} if any.

	@function
	@name com.kony.IdVerification#initialize

	@param {object} initCallbacks - The object which holds initialize callback functions
	@param {onSuccess} initCallbacks.onSuccess - The callback function which gets triggered when initialization is successful.
	@param {onFailed} initCallbacks.onError - The callback function which gets triggered when initialization is failed or any error occurs.
*/

/**
	Starts the scanning process of the document and leads to the extraction and verification process of the document's data. On Extraction the output data is sent by calling [successCallback] {onSuccess} and in-case of any failure, the reason of failure is sent by calling [errorCallback] {onError}.

	@function
	@name com.kony.IdVerification#startVerification

	@param {object} startCallbacks - The object which holds Extraction/Verification process callback functions
	@param {onSuccess} startCallbacks.onSuccess - The callback function called when scanning and extraction of data is successful.
	@param {onFailed} startCallbacks.onError - The callback function called when any interruption or unavailability occurs during the process.
*/

/** 
	@namespace com.jumio
*/

/**
	Configuration object which configures Jumio OCR and IdVerification Service

	@name serviceConfig
	@memberof com.jumio
	
	@property {object} initParams - Initialization parameters for the SDK. The properties apiToken,apiSecret and datacenter are a group for online mode whereas offlineToken and preferredCountry are a group for offline mode.
	@property {string} initParams.apiToken - Value of the API token credential.
	@property {string} initParams.apiSecret - Value of the API secret credential.
		
	@property {string} initParams.datacenter - Name of the datacenter your jumio account belongs to.Takes either "EU" or "US" as value.
	@property {string} initParams.offlineToken - Value of the API offlineToken credential.
	@property {string} initParams.preferredCountry - Alpha-3 code of the country that you want to be available in offline mode.
	
	@property {object} configuration - Configuration parameters for the Jumio SDK.
	@property {boolean} configuration.requireVerification - Property to be set 'true' to verify the document scanned.
	@property {string} configuration.callbackURL - URL of the server to receive the validity of the scanned document.
	@property {boolean} configuration.requireFacematch - Property to enable the face-match with the user scanning the document and the image on the document.
	@property {boolean} configuration.dataExtractionOnMobileOnly - Property to enable extraction of data on mobile without uploading the document, to be set to true when configuration.requireVerification = false.
	
	@property {object} preselection - Preselected Configuration to restrict end-user to make choices.
	@property {string} preselection.country - Alpha-3 Code to select which country to be pre-selected for users.
	@property {string} preselection.documentVariant - Variant of document to be scanned. Takes either "PLASTIC" or "PAPER" as value.
	@property {array} preselection.documentTypes - Types of document to be shown to user for scanning. The array takes only these values "PASSPORT","DRIVER_LICENSE","IDENTITY_CARD","VISA".
	
	@property {object} transactionIdentifiers - Transaction related Identifiers
	@property {string} transactionIdentifiers.merchantScanReference - The merchant scan reference allows you to identify the scan (max. 100 characters). Must not contain sensitive data like PII (Personally Identifiable Information) or account login.
	@property {string} transactionIdentifiers.merchantReportingCriteria - Property to identify the scan in your reports (max. 100 characters).
	@property {string} transactionIdentifiers.customerId - Set a customer identifier (max. 100 characters). The customer ID should not contain sensitive data like PII (Personally Identifiable Information) or account login.
	@property {string} transactionIdentifiers.additionalInfo - You can also set an additional information parameter (max. 255 characters). The additional information should not contain sensitive data like PII (Personally Identifiable Information) or account login.
	
	@property {object} misc - Miscellaneous configurable parameters
	@property {boolean} misc.enableEMRTD - enable eMRTD scanning.
	@property {string} misc.setCameraPostion - Select which camera to use for the scanning of document. Takes either "FRONT" or "BACK" as value.
	
	@property {object} customization - Customization bucket for iOS.All the Arrays takes 4 integers - Red, Green, Blue and Alpha respectively under this bucket.
	@property {array} [customization.setSelectionButton] - Color of the selection Button.
	@property {boolean} [customization.setStatusBarStyleWhite] - Set true to set Status Bar Style White.
	@property {array} [customization.setTintColor] - Color of the Tint.
	@property {array} [customization.setBackgroundColor] - Color for the Background.
	@property {array} [customization.setTitleTextAttributes] - Set title text attribute.
	@property {array} [customization.setForegroundColor] - Color for Foreground.
	@property {array} [customization.setBackgroundColorPositiveButton] - Color for background positive button.
	@property {array} [customization.setBorderColorPositiveButton] - Color for border positive button.
	@property {array} [customization.setTitleColorPositiveButton] - Color for title positive button.
	@property {array} [customization.setBackgroundColorNegativeButton] - Color for background negative button.
	@property {array} [customization.setBorderColorNegativeButton] - Color for border negative button.
	@property {array} [customization.setTitleColorNegativeButton] - Color for background title button.
	@property {array} [customization.setBackgroundColorFallbackButton] - Color for Background fallback button.
	@property {array} [customization.setBorderColorFallbackButton] - Color for Border fallback button.
	@property {array} [customization.setTitleColorFallbackButton] - Color for Title fallback button.
	@property {array} [customization.setColorOverlayStandard] - Color for Overlay Standards.
	@property {array} [customization.setColorOverlayValid] - Color for Overlay Valid.
	@property {array} [customization.setColorOverlayInvalid] - Color for Overlay Invalid.
*/