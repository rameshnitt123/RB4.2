package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBSuccess {


  public frmOBSuccess() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSuccess_frmOBSuccess"));
  }
public void btnContinueResult() throws Exception{ 
  AppElement btnContinueResult=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSuccess_btnContinueResult"));
  btnContinueResult.click();
  }


public void rtxTitle(String text) throws Exception{
  AppElement rtxTitle=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSuccess_rtxTitle"));
  rtxTitle.type(text);
  }



}