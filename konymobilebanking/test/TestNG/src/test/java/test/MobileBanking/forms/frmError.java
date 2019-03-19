package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmError {


  public frmError() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmError_frmError"));
  }
public void btnTryAgain() throws Exception{ 
  AppElement btnTryAgain=new AppElement(MobileBankingWidgetId.getWidgetId("frmError_btnTryAgain"));
  btnTryAgain.click();
  }





}