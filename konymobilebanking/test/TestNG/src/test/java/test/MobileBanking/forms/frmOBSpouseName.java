package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBSpouseName {


  public frmOBSpouseName() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSpouseName_frmOBSpouseName"));
  }
public void btnContinuePersonalInfo() throws Exception{ 
  AppElement btnContinuePersonalInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSpouseName_btnContinuePersonalInfo"));
  btnContinuePersonalInfo.click();
  }

public void txtSpouseFirstName(String text) throws Exception{
  AppElement txtSpouseFirstName=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSpouseName_txtSpouseFirstName"));
  txtSpouseFirstName.type(text);
  }
public void txtSpouseLastName(String text) throws Exception{
  AppElement txtSpouseLastName=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSpouseName_txtSpouseLastName"));
  txtSpouseLastName.type(text);
  }




}