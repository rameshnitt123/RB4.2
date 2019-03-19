package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmEStmtAccountDetails {


  public frmEStmtAccountDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmEStmtAccountDetails_frmEStmtAccountDetails"));
  }
public void btnDisable() throws Exception{ 
  AppElement btnDisable=new AppElement(MobileBankingWidgetId.getWidgetId("frmEStmtAccountDetails_btnDisable"));
  btnDisable.click();
  }
public void btnEnable() throws Exception{ 
  AppElement btnEnable=new AppElement(MobileBankingWidgetId.getWidgetId("frmEStmtAccountDetails_btnEnable"));
  btnEnable.click();
  }





}