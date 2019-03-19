package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBAddPersonalInfo {


  public frmOBAddPersonalInfo() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBAddPersonalInfo_frmOBAddPersonalInfo"));
  }
public void btnChangeIDPersonalInfo() throws Exception{ 
  AppElement btnChangeIDPersonalInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBAddPersonalInfo_btnChangeIDPersonalInfo"));
  btnChangeIDPersonalInfo.click();
  }
public void btnContinuePersonalInfo() throws Exception{ 
  AppElement btnContinuePersonalInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBAddPersonalInfo_btnContinuePersonalInfo"));
  btnContinuePersonalInfo.click();
  }





}