package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessEmail {


  public frmCardLessEmail() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessEmail_frmCardLessEmail"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessEmail_btnContinue"));
  btnContinue.click();
  }
public void btnPickFromContacts() throws Exception{ 
  AppElement btnPickFromContacts=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessEmail_btnPickFromContacts"));
  btnPickFromContacts.click();
  }

public void txtEmailId(String text) throws Exception{
  AppElement txtEmailId=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessEmail_txtEmailId"));
  txtEmailId.type(text);
  }




}