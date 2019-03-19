define([], function() {


  function TypeManager() {
    this.initialiseAccountTypeManager();
  }

  TypeManager.prototype.initialiseAccountTypeManager = function() {
    /* Holds the list of accountType keys used by the application based on the priority */
    this.accountTypes = [];
    /* Holds accountType meta data indexed by the key being used by the application
       Value is the meta data, a json with key 'backendValue' and 'displayValue' */
    this.accountTypesMap = {};
    /* Holds accountType meta data indexed by the key being used in the backend
       Value is the meta data, a json with key 'applicationValue' and 'displayValue' */
    this.accountTypesBackendMap = {};
    this.accountTypeMetaData = applicationManager.getConfigurationManager().getAccountTypesMetaData();
    this.initializeAccountMetaData(this.accountTypeMetaData);
  }

  /**
 * Initializes the necessary data structure maps to support accountType queries.
 * First it initializes the accountTypes array that signifies the priority of these types. It is assumed that the input array indicates this priority
 * Secondly it initializes the accountTypesMap to retrieve accountTypes based on the keys used by the application
 * Thirdly it initializes the accountTypesBackendMap to retrieve accountTypes based on the backend key values 
 * @member of AccountTypeManager
 * @param {accountTypeMetaData} array of jsons wiht keys 'applicationValue', 'backendValue' and 'displayValue'.
 */
  TypeManager.prototype.initializeAccountMetaData = function(accountTypeMetaData){
    if(accountTypeMetaData && accountTypeMetaData.length > 0){
      for (var i=0; i<accountTypeMetaData.length; i++){

        this.accountTypes.push(accountTypeMetaData[i].applicationValue);

        this.accountTypesMap[accountTypeMetaData[i].applicationValue] = {};
        this.accountTypesMap[accountTypeMetaData[i].applicationValue].backendValue = accountTypeMetaData[i].backendValue;
        this.accountTypesMap[accountTypeMetaData[i].applicationValue].displayValue = accountTypeMetaData[i].displayValue;

        this.accountTypesBackendMap[accountTypeMetaData[i].backendValue]={};
        this.accountTypesBackendMap[accountTypeMetaData[i].backendValue].applicationValue = accountTypeMetaData[i].applicationValue;
        this.accountTypesBackendMap[accountTypeMetaData[i].backendValue].displayValue = accountTypeMetaData[i].displayValue;        
      }
    }
  }

  /**
 * Provides a list of account type keys being used by the application based on its priority.
 * @member of AccountTypeManager
 * @returns {accountTypes} array containing the accountType keys being used by the application based on priority.
 */
  TypeManager.prototype.getAccountTypesByPriority = function(){
    return this.accountTypes; 
  }

  /**
 * Provides the backend value for the associated account type.
 * @member of AccountTypeManager
 * @returns {String} backend value for the corressponding account type.
 */
  TypeManager.prototype.getAccountTypeBackendValue = function(applicationValue){
    if(this.accountTypesMap.hasOwnProperty(applicationValue))
      return this.accountTypesMap[applicationValue].backendValue; 
    return null;
  }

  /**
 * Provides the display value for the associated account type.
 * @member of AccountTypeManager
 * @returns {String} display value for the corressponding account type.
 */
  TypeManager.prototype.getAccountTypeDisplayValue = function(applicationValue){
    if(this.accountTypesMap.hasOwnProperty(applicationValue))
      return this.accountTypesMap[applicationValue].displayValue; 
    return null;
  }

  /**
 * Provides the application account type value for the associated backend account type.
 * @member of AccountTypeManager
 * @returns {String} account type value for the corressponding backend account type.
 */
  TypeManager.prototype.getAccountType = function(backendValue){
    if(this.accountTypesBackendMap.hasOwnProperty(backendValue))
      return this.accountTypesBackendMap[backendValue].applicationValue; 
    return null;
  }

  return TypeManager;
});