package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmProfileEnterPhoneNumber {


  public frmProfileEnterPhoneNumber() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEnterPhoneNumber_frmProfileEnterPhoneNumber"));
  }
public void btnUpdateChanges() throws Exception{ 
  AppElement btnUpdateChanges=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEnterPhoneNumber_btnUpdateChanges"));
  btnUpdateChanges.click();
  }

public void tbxPhoneNumber(String text) throws Exception{
  AppElement tbxPhoneNumber=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEnterPhoneNumber_tbxPhoneNumber"));
  tbxPhoneNumber.type(text);
  }




}