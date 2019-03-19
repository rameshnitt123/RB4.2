package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmForgotEnterDOB {


  public frmForgotEnterDOB() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotEnterDOB_frmForgotEnterDOB"));
  }
public void btnVerify() throws Exception{ 
  AppElement btnVerify=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotEnterDOB_btnVerify"));
  btnVerify.click();
  }





}