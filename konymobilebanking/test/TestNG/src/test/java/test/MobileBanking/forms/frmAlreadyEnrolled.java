package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmAlreadyEnrolled {


  public frmAlreadyEnrolled() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmAlreadyEnrolled_frmAlreadyEnrolled"));
  }
public void btnChangeDetails() throws Exception{ 
  AppElement btnChangeDetails=new AppElement(MobileBankingWidgetId.getWidgetId("frmAlreadyEnrolled_btnChangeDetails"));
  btnChangeDetails.click();
  }
public void btnLoginHere() throws Exception{ 
  AppElement btnLoginHere=new AppElement(MobileBankingWidgetId.getWidgetId("frmAlreadyEnrolled_btnLoginHere"));
  btnLoginHere.click();
  }





}