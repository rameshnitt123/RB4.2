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

com.kony.FaceId = function (formContext, serviceConfig) {
  /* Creating a component’s object */
  var faceid = new com.konymp.faceid(
    {
      "autogrowMode": kony.flex.AUTOGROW_NONE,
      "centerX": "50%",
      "clipBounds": true,
      "height": "8%",
      "id": "faceid",
      "isVisible": false,
      "layoutType": kony.flex.FREE_FORM,
      "left": "0dp",
      "masterType": constants.MASTER_TYPE_USERWIDGET,
      "skin": "slFbox",
      "top": "50%",
      "width": "59.38%"
    }, {}, {});
  
  /* Adding properties to the component */
  var serviceParams = Object.keys(serviceConfig);
  function setServiceConfig(serviceParam) {
    for (var key in serviceConfig[serviceParam]) {
      if (faceid.hasOwnProperty(key)) {
        faceid[key] = serviceConfig[serviceParam][key];
      }
    }
  }
  serviceParams.forEach(setServiceConfig);

  /* Assigning Events to the component */
  faceid.onEnrollSuccess = function () { alert("Enroll Successful"); };
  faceid.onEnrollFailure = function () { alert("Enroll Failure"); };
  faceid.onVerifySuccess = function () { alert("Verify Successful"); };
  faceid.onVerifyFailure = function () { alert("Verify Failure"); };
  faceid.onUnenrollSuccess = function () { alert("Unenroll Successful"); };
  faceid.onUnenrollFailure = function () { alert("Unenroll Failure"); };

  /* Adding Component to the Form */
  formContext.view.add(faceid);
};

com.kony.FaceId.prototype.initialize = function (formContext, initCallbacks) {
  formContext.view.faceid.onInitSuccess = initCallbacks.onSuccess;
  formContext.view.faceid.onInitFailure = initCallbacks.onFailed;
  formContext.view.faceid.configuration();
};

com.kony.FaceId.prototype.cancelEnrollment = function (formContext) {

};

com.kony.FaceId.prototype.cancelVerification = function (formContext) {

};

com.kony.FaceId.prototype.enroll = function (formContext, enrollCallbacks) {
  formContext.view.faceid.onEnrollSuccess = enrollCallbacks.onSuccess;
  formContext.view.faceid.onEnrollFailure = enrollCallbacks.onFailed;
  formContext.view.faceid.enroll();
};

com.kony.FaceId.prototype.verify = function (formContext, verifyCallbacks) {
  formContext.view.faceid.onVerifySuccess = verifyCallbacks.onSuccess;
  formContext.view.faceid.onVerifyFailure = verifyCallbacks.onFailed;
  formContext.view.faceid.verify();
};

com.kony.FaceId.prototype.unenroll = function (formContext, unenrollCallbacks) {
  formContext.view.faceid.onUnenrollSuccess = unenrollCallbacks.onSuccess;
  formContext.view.faceid.onUnenrollFailure = unenrollCallbacks.onFailed;
  formContext.view.faceid.unenroll();
};

com.kony.FaceId.prototype.uninitialize = function (formContext) {
  formContext.view.faceid.uninitialize();
};

com.kony.FaceId.isAvailable = function () {
  try {
    var x = com.konymp.faceid;
  } catch (e) {
    return false;
  }
  return true;
};