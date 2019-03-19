define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		AppVersion : function(val, state){
			state['AppVersion'] = val;
		},
		bankName : function(val, state){
			state['bankName'] = val;
		},
		bannerURL : function(val, state){
			state['bannerURL'] = val;
		},
		branchType : function(val, state){
			state['branchType'] = val;
		},
		businessDays : function(val, state){
			state['businessDays'] = val;
		},
		currencyCode : function(val, state){
			state['currencyCode'] = val;
		},
		distanceUnit : function(val, state){
			state['distanceUnit'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		facialLicenseServerUrl : function(val, state){
			state['facialLicenseServerUrl'] = val;
		},
		facialLicenseString : function(val, state){
			state['facialLicenseString'] = val;
		},
		isUpdate : function(val, state){
			state['isUpdate'] = val;
		},
		isUpdateMandatory : function(val, state){
			state['isUpdateMandatory'] = val;
		},
		MainBranchaddressLine1 : function(val, state){
			state['MainBranchaddressLine1'] = val;
		},
		MainBranchaddressLine2 : function(val, state){
			state['MainBranchaddressLine2'] = val;
		},
		MainBranchCity : function(val, state){
			state['MainBranchCity'] = val;
		},
		MainBranchLatitude : function(val, state){
			state['MainBranchLatitude'] = val;
		},
		MainBranchLongitude : function(val, state){
			state['MainBranchLongitude'] = val;
		},
		MainBranchPhone : function(val, state){
			state['MainBranchPhone'] = val;
		},
		MainBranchServices : function(val, state){
			state['MainBranchServices'] = val;
		},
		MainBranchState : function(val, state){
			state['MainBranchState'] = val;
		},
		MainBranchWorkingHours : function(val, state){
			state['MainBranchWorkingHours'] = val;
		},
		MainBranchzipCode : function(val, state){
			state['MainBranchzipCode'] = val;
		},
		ocrApiKey : function(val, state){
			state['ocrApiKey'] = val;
		},
		ocrSecretKey : function(val, state){
			state['ocrSecretKey'] = val;
		},
		OSType : function(val, state){
			state['OSType'] = val;
		},
		OSversion : function(val, state){
			state['OSversion'] = val;
		},
		versionLink : function(val, state){
			state['versionLink'] = val;
		},
		appStoreLink : function(val, state){
			state['appStoreLink'] = val;
		},
		playStoreLink : function(val, state){
			state['playStoreLink'] = val;
		},
		ipadNativeAppLink : function(val, state){
			state['ipadNativeAppLink'] = val;
		},
		androidTabletNativeAppLink : function(val, state){
			state['androidTabletNativeAppLink'] = val;
		},
		isLanguageSelectionEnabled : function(val, state){
			state['isLanguageSelectionEnabled'] = val;
		},
		isBackEndCurencySymbolEnabled : function(val, state){
			state['isBackEndCurencySymbolEnabled'] = val;
		},
		isCountryCodeEnabled : function(val, state){
			state['isCountryCodeEnabled'] = val;
		},
		isSortCodeVisible : function(val, state){
			state['isSortCodeVisible'] = val;
		},
		currenciesSupported : function(val, state){
			state['currenciesSupported'] = val;
		},
		isUTCDateFormattingEnabled : function(val, state){
			state['isUTCDateFormattingEnabled'] = val;
		},
		language : function(val, state){
			state['language'] = val;
		},
		deploymentGeography : function(val, state){
			state['deploymentGeography'] = val;
		},
		isBusinessBankingEnabled : function(val, state){
			state['isBusinessBankingEnabled'] = val;
		},
		isAccountAggregationEnabled : function(val, state){
			state['isAccountAggregationEnabled'] = val;
		},
	};
	
	
	//Create the Model Class
	function Application(defaultValues){
		var privateState = {};
			privateState.AppVersion = defaultValues?(defaultValues["AppVersion"]?defaultValues["AppVersion"]:null):null;
			privateState.bankName = defaultValues?(defaultValues["bankName"]?defaultValues["bankName"]:null):null;
			privateState.bannerURL = defaultValues?(defaultValues["bannerURL"]?defaultValues["bannerURL"]:null):null;
			privateState.branchType = defaultValues?(defaultValues["branchType"]?defaultValues["branchType"]:null):null;
			privateState.businessDays = defaultValues?(defaultValues["businessDays"]?defaultValues["businessDays"]:null):null;
			privateState.currencyCode = defaultValues?(defaultValues["currencyCode"]?defaultValues["currencyCode"]:null):null;
			privateState.distanceUnit = defaultValues?(defaultValues["distanceUnit"]?defaultValues["distanceUnit"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.facialLicenseServerUrl = defaultValues?(defaultValues["facialLicenseServerUrl"]?defaultValues["facialLicenseServerUrl"]:null):null;
			privateState.facialLicenseString = defaultValues?(defaultValues["facialLicenseString"]?defaultValues["facialLicenseString"]:null):null;
			privateState.isUpdate = defaultValues?(defaultValues["isUpdate"]?defaultValues["isUpdate"]:null):null;
			privateState.isUpdateMandatory = defaultValues?(defaultValues["isUpdateMandatory"]?defaultValues["isUpdateMandatory"]:null):null;
			privateState.MainBranchaddressLine1 = defaultValues?(defaultValues["MainBranchaddressLine1"]?defaultValues["MainBranchaddressLine1"]:null):null;
			privateState.MainBranchaddressLine2 = defaultValues?(defaultValues["MainBranchaddressLine2"]?defaultValues["MainBranchaddressLine2"]:null):null;
			privateState.MainBranchCity = defaultValues?(defaultValues["MainBranchCity"]?defaultValues["MainBranchCity"]:null):null;
			privateState.MainBranchLatitude = defaultValues?(defaultValues["MainBranchLatitude"]?defaultValues["MainBranchLatitude"]:null):null;
			privateState.MainBranchLongitude = defaultValues?(defaultValues["MainBranchLongitude"]?defaultValues["MainBranchLongitude"]:null):null;
			privateState.MainBranchPhone = defaultValues?(defaultValues["MainBranchPhone"]?defaultValues["MainBranchPhone"]:null):null;
			privateState.MainBranchServices = defaultValues?(defaultValues["MainBranchServices"]?defaultValues["MainBranchServices"]:null):null;
			privateState.MainBranchState = defaultValues?(defaultValues["MainBranchState"]?defaultValues["MainBranchState"]:null):null;
			privateState.MainBranchWorkingHours = defaultValues?(defaultValues["MainBranchWorkingHours"]?defaultValues["MainBranchWorkingHours"]:null):null;
			privateState.MainBranchzipCode = defaultValues?(defaultValues["MainBranchzipCode"]?defaultValues["MainBranchzipCode"]:null):null;
			privateState.ocrApiKey = defaultValues?(defaultValues["ocrApiKey"]?defaultValues["ocrApiKey"]:null):null;
			privateState.ocrSecretKey = defaultValues?(defaultValues["ocrSecretKey"]?defaultValues["ocrSecretKey"]:null):null;
			privateState.OSType = defaultValues?(defaultValues["OSType"]?defaultValues["OSType"]:null):null;
			privateState.OSversion = defaultValues?(defaultValues["OSversion"]?defaultValues["OSversion"]:null):null;
			privateState.versionLink = defaultValues?(defaultValues["versionLink"]?defaultValues["versionLink"]:null):null;
			privateState.appStoreLink = defaultValues?(defaultValues["appStoreLink"]?defaultValues["appStoreLink"]:null):null;
			privateState.playStoreLink = defaultValues?(defaultValues["playStoreLink"]?defaultValues["playStoreLink"]:null):null;
			privateState.ipadNativeAppLink = defaultValues?(defaultValues["ipadNativeAppLink"]?defaultValues["ipadNativeAppLink"]:null):null;
			privateState.androidTabletNativeAppLink = defaultValues?(defaultValues["androidTabletNativeAppLink"]?defaultValues["androidTabletNativeAppLink"]:null):null;
			privateState.isLanguageSelectionEnabled = defaultValues?(defaultValues["isLanguageSelectionEnabled"]?defaultValues["isLanguageSelectionEnabled"]:null):null;
			privateState.isBackEndCurencySymbolEnabled = defaultValues?(defaultValues["isBackEndCurencySymbolEnabled"]?defaultValues["isBackEndCurencySymbolEnabled"]:null):null;
			privateState.isCountryCodeEnabled = defaultValues?(defaultValues["isCountryCodeEnabled"]?defaultValues["isCountryCodeEnabled"]:null):null;
			privateState.isSortCodeVisible = defaultValues?(defaultValues["isSortCodeVisible"]?defaultValues["isSortCodeVisible"]:null):null;
			privateState.currenciesSupported = defaultValues?(defaultValues["currenciesSupported"]?defaultValues["currenciesSupported"]:null):null;
			privateState.isUTCDateFormattingEnabled = defaultValues?(defaultValues["isUTCDateFormattingEnabled"]?defaultValues["isUTCDateFormattingEnabled"]:null):null;
			privateState.language = defaultValues?(defaultValues["language"]?defaultValues["language"]:null):null;
			privateState.deploymentGeography = defaultValues?(defaultValues["deploymentGeography"]?defaultValues["deploymentGeography"]:null):null;
			privateState.isBusinessBankingEnabled = defaultValues?(defaultValues["isBusinessBankingEnabled"]?defaultValues["isBusinessBankingEnabled"]:null):null;
			privateState.isAccountAggregationEnabled = defaultValues?(defaultValues["isAccountAggregationEnabled"]?defaultValues["isAccountAggregationEnabled"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"AppVersion" : {
					get : function(){return privateState.AppVersion},
					set : function(val){
						setterFunctions['AppVersion'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bankName" : {
					get : function(){return privateState.bankName},
					set : function(val){
						setterFunctions['bankName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bannerURL" : {
					get : function(){return privateState.bannerURL},
					set : function(val){
						setterFunctions['bannerURL'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"branchType" : {
					get : function(){return privateState.branchType},
					set : function(val){
						setterFunctions['branchType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"businessDays" : {
					get : function(){return privateState.businessDays},
					set : function(val){
						setterFunctions['businessDays'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"currencyCode" : {
					get : function(){return privateState.currencyCode},
					set : function(val){
						setterFunctions['currencyCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"distanceUnit" : {
					get : function(){return privateState.distanceUnit},
					set : function(val){
						setterFunctions['distanceUnit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errmsg" : {
					get : function(){return privateState.errmsg},
					set : function(val){
						setterFunctions['errmsg'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"facialLicenseServerUrl" : {
					get : function(){return privateState.facialLicenseServerUrl},
					set : function(val){
						setterFunctions['facialLicenseServerUrl'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"facialLicenseString" : {
					get : function(){return privateState.facialLicenseString},
					set : function(val){
						setterFunctions['facialLicenseString'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isUpdate" : {
					get : function(){return privateState.isUpdate},
					set : function(val){
						setterFunctions['isUpdate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isUpdateMandatory" : {
					get : function(){return privateState.isUpdateMandatory},
					set : function(val){
						setterFunctions['isUpdateMandatory'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MainBranchaddressLine1" : {
					get : function(){return privateState.MainBranchaddressLine1},
					set : function(val){
						setterFunctions['MainBranchaddressLine1'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MainBranchaddressLine2" : {
					get : function(){return privateState.MainBranchaddressLine2},
					set : function(val){
						setterFunctions['MainBranchaddressLine2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MainBranchCity" : {
					get : function(){return privateState.MainBranchCity},
					set : function(val){
						setterFunctions['MainBranchCity'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MainBranchLatitude" : {
					get : function(){return privateState.MainBranchLatitude},
					set : function(val){
						setterFunctions['MainBranchLatitude'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MainBranchLongitude" : {
					get : function(){return privateState.MainBranchLongitude},
					set : function(val){
						setterFunctions['MainBranchLongitude'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MainBranchPhone" : {
					get : function(){return privateState.MainBranchPhone},
					set : function(val){
						setterFunctions['MainBranchPhone'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MainBranchServices" : {
					get : function(){return privateState.MainBranchServices},
					set : function(val){
						setterFunctions['MainBranchServices'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MainBranchState" : {
					get : function(){return privateState.MainBranchState},
					set : function(val){
						setterFunctions['MainBranchState'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MainBranchWorkingHours" : {
					get : function(){return privateState.MainBranchWorkingHours},
					set : function(val){
						setterFunctions['MainBranchWorkingHours'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MainBranchzipCode" : {
					get : function(){return privateState.MainBranchzipCode},
					set : function(val){
						setterFunctions['MainBranchzipCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ocrApiKey" : {
					get : function(){return privateState.ocrApiKey},
					set : function(val){
						setterFunctions['ocrApiKey'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ocrSecretKey" : {
					get : function(){return privateState.ocrSecretKey},
					set : function(val){
						setterFunctions['ocrSecretKey'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"OSType" : {
					get : function(){return privateState.OSType},
					set : function(val){
						setterFunctions['OSType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"OSversion" : {
					get : function(){return privateState.OSversion},
					set : function(val){
						setterFunctions['OSversion'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"versionLink" : {
					get : function(){return privateState.versionLink},
					set : function(val){
						setterFunctions['versionLink'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"appStoreLink" : {
					get : function(){return privateState.appStoreLink},
					set : function(val){
						setterFunctions['appStoreLink'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"playStoreLink" : {
					get : function(){return privateState.playStoreLink},
					set : function(val){
						setterFunctions['playStoreLink'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ipadNativeAppLink" : {
					get : function(){return privateState.ipadNativeAppLink},
					set : function(val){
						setterFunctions['ipadNativeAppLink'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"androidTabletNativeAppLink" : {
					get : function(){return privateState.androidTabletNativeAppLink},
					set : function(val){
						setterFunctions['androidTabletNativeAppLink'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isLanguageSelectionEnabled" : {
					get : function(){return privateState.isLanguageSelectionEnabled},
					set : function(val){
						setterFunctions['isLanguageSelectionEnabled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isBackEndCurencySymbolEnabled" : {
					get : function(){return privateState.isBackEndCurencySymbolEnabled},
					set : function(val){
						setterFunctions['isBackEndCurencySymbolEnabled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isCountryCodeEnabled" : {
					get : function(){return privateState.isCountryCodeEnabled},
					set : function(val){
						setterFunctions['isCountryCodeEnabled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isSortCodeVisible" : {
					get : function(){return privateState.isSortCodeVisible},
					set : function(val){
						setterFunctions['isSortCodeVisible'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"currenciesSupported" : {
					get : function(){return privateState.currenciesSupported},
					set : function(val){
						setterFunctions['currenciesSupported'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isUTCDateFormattingEnabled" : {
					get : function(){return privateState.isUTCDateFormattingEnabled},
					set : function(val){
						setterFunctions['isUTCDateFormattingEnabled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"language" : {
					get : function(){return privateState.language},
					set : function(val){
						setterFunctions['language'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"deploymentGeography" : {
					get : function(){return privateState.deploymentGeography},
					set : function(val){
						setterFunctions['deploymentGeography'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isBusinessBankingEnabled" : {
					get : function(){return privateState.isBusinessBankingEnabled},
					set : function(val){
						setterFunctions['isBusinessBankingEnabled'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isAccountAggregationEnabled" : {
					get : function(){return privateState.isAccountAggregationEnabled},
					set : function(val){
						setterFunctions['isAccountAggregationEnabled'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Application);
	
	//Create new class level validator object
	BaseModel.Validator.call(Application);
	
	var registerValidatorBackup = Application.registerValidator;
	
	Application.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Application.isValid(this, propName, val) ){
					return setterBackup.apply(null, arguments);
				}else{
					throw Error("Validation failed for "+ propName +" : "+val);
				}
			}
			setterFunctions[arguments[0]].changed = true;
		}
		return registerValidatorBackup.apply(null, arguments);
	}
	
	//Extending Model for custom operations
	
	var relations = [
	];
	
	Application.relations = relations;
	
	Application.prototype.isValid = function(){
		return Application.isValid(this);
	};
	
	Application.prototype.objModelName = "Application";
	
	return Application;
});