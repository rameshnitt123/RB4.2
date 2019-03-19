package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardMngPinChgOptions {


  public frmCardMngPinChgOptions() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngPinChgOptions_frmCardMngPinChgOptions"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngPinChgOptions_btnContinue"));
  btnContinue.click();
  }
public void btnContinueAddress() throws Exception{ 
  AppElement btnContinueAddress=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngPinChgOptions_btnContinueAddress"));
  btnContinueAddress.click();
  }
public void btnContinuePhone() throws Exception{ 
  AppElement btnContinuePhone=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngPinChgOptions_btnContinuePhone"));
  btnContinuePhone.click();
  }

public void txtRegEmailIdValue(String text) throws Exception{
  AppElement txtRegEmailIdValue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngPinChgOptions_txtRegEmailIdValue"));
  txtRegEmailIdValue.type(text);
  }
public void txtRegPhoneNoValue(String text) throws Exception{
  AppElement txtRegPhoneNoValue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngPinChgOptions_txtRegPhoneNoValue"));
  txtRegPhoneNoValue.type(text);
  }




}