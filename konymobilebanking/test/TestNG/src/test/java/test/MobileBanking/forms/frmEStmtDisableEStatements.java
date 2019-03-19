package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmEStmtDisableEStatements {


  public frmEStmtDisableEStatements() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmEStmtDisableEStatements_frmEStmtDisableEStatements"));
  }
public void btnDisable() throws Exception{ 
  AppElement btnDisable=new AppElement(MobileBankingWidgetId.getWidgetId("frmEStmtDisableEStatements_btnDisable"));
  btnDisable.click();
  }
public void btnTAndC() throws Exception{ 
  AppElement btnTAndC=new AppElement(MobileBankingWidgetId.getWidgetId("frmEStmtDisableEStatements_btnTAndC"));
  btnTAndC.click();
  }





}