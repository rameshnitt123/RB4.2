package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBSecurityCode {


  public frmOBSecurityCode() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSecurityCode_frmOBSecurityCode"));
  }
public void btnContinueSecurityCode() throws Exception{ 
  AppElement btnContinueSecurityCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSecurityCode_btnContinueSecurityCode"));
  btnContinueSecurityCode.click();
  }
public void btnReSend() throws Exception{ 
  AppElement btnReSend=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSecurityCode_btnReSend"));
  btnReSend.click();
  }





}