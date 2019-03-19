package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessContactType {


  public frmCardLessContactType() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessContactType_frmCardLessContactType"));
  }
public void btnEmail() throws Exception{ 
  AppElement btnEmail=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessContactType_btnEmail"));
  btnEmail.click();
  }
public frmCardLessPhoneNo btnPhoneNumber() throws Exception{ 
  AppElement btnPhoneNumber=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessContactType_btnPhoneNumber"));
  btnPhoneNumber.click();
  return new frmCardLessPhoneNo();
  }





}