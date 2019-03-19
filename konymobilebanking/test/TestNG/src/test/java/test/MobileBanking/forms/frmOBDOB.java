package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBDOB {


  public frmOBDOB() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBDOB_frmOBDOB"));
  }
public void btnVerifyDOB() throws Exception{ 
  AppElement btnVerifyDOB=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBDOB_btnVerifyDOB"));
  btnVerifyDOB.click();
  }





}