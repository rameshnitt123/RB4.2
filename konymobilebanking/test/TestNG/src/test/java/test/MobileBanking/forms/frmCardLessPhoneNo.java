package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessPhoneNo {


  public frmCardLessPhoneNo() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessPhoneNo_frmCardLessPhoneNo"));
  }
public frmCardLessRecName btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessPhoneNo_btnContinue"));
  btnContinue.click();
  return new frmCardLessRecName();
  }
public void btnPickFromContacts() throws Exception{ 
  AppElement btnPickFromContacts=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessPhoneNo_btnPickFromContacts"));
  btnPickFromContacts.click();
  }





}