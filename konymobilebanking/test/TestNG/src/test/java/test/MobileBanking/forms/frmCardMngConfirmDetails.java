package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardMngConfirmDetails {


  public frmCardMngConfirmDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngConfirmDetails_frmCardMngConfirmDetails"));
  }
public void btnCallCustomerCare() throws Exception{ 
  AppElement btnCallCustomerCare=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngConfirmDetails_btnCallCustomerCare"));
  btnCallCustomerCare.click();
  }
public void btnSubmit() throws Exception{ 
  AppElement btnSubmit=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngConfirmDetails_btnSubmit"));
  btnSubmit.click();
  }

public void txtReason(String text) throws Exception{
  AppElement txtReason=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngConfirmDetails_txtReason"));
  txtReason.type(text);
  }




}