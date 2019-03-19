/**
  *@module QRCodeManager
  */

define([], function() {
  /**
 	 *QRCodeManager class is used to handle all functions related to scanning of QR Code for cashless transfers.
 	 *@alias module:QRCodeManager
 	  *@class
  */
  function QRCodeManager(){

  };

  inheritsFrom(QRCodeManager, kony.mvc.Business.Delegator);

  QRCodeManager.prototype.initializeBusinessController = function(){};

  /**
  * creates cardless TransactionsQRCode using a service call.
  * @param {object} record -  record which is sent to create transaction.
  * @param {function} presentationSuccessCallback will be called when call is successful
   * @param {function} presentationErrorCallback will be called when call is not successful
  */
  QRCodeManager.prototype.createCardlessTransactionQRCode = function(record,presentationSuccessCallback, presentationErrorCallback){
    var  transactionsRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("QrCode");
    transactionsRepo.save(record,saveCompletionCallback,"online");
    function  saveCompletionCallback(status,  data,  error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj =  srh.manageResponse(status,  data,  error);
      if(obj["status"] === true){
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };

  return QRCodeManager;
});