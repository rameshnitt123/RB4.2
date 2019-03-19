if (typeof (com) === "undefined" || com === null) {
  /** 
		@namespace
		@public
	 */
	com = {};
}

if (com.kony === undefined || com.kony === null) {
  /** 
		@public
		@namespace
	*/
	com.kony = {};
}

if (com.kony.FaceIdService === undefined || com.kony.FaceIdService === null) {
  /**
		@public
		@namespace
	*/
	com.kony.FaceIdService = {};
}

com.kony.FaceIdService.getInstance = function (formContext, serviceConfig) {
	return new com.kony.FaceId(formContext, serviceConfig);
};

com.kony.FaceIdService.isAvailable = function () {
	return com.kony.FaceId.isAvailable();
};