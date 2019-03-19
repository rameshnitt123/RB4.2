package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBFailure {


  public frmOBFailure() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBFailure_frmOBFailure"));
  }
public void btnCancelResult() throws Exception{ 
  AppElement btnCancelResult=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBFailure_btnCancelResult"));
  btnCancelResult.click();
  }
public void btnContinueResult() throws Exception{ 
  AppElement btnContinueResult=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBFailure_btnContinueResult"));
  btnContinueResult.click();
  }


public void rtxTitle(String text) throws Exception{
  AppElement rtxTitle=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBFailure_rtxTitle"));
  rtxTitle.type(text);
  }



}