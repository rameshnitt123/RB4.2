package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBEditFirstLastName {


  public frmOBEditFirstLastName() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBEditFirstLastName_frmOBEditFirstLastName"));
  }
public void btnContinueEnterPersonalInfo() throws Exception{ 
  AppElement btnContinueEnterPersonalInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBEditFirstLastName_btnContinueEnterPersonalInfo"));
  btnContinueEnterPersonalInfo.click();
  }

public void txtFirstName(String text) throws Exception{
  AppElement txtFirstName=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBEditFirstLastName_txtFirstName"));
  txtFirstName.type(text);
  }
public void txtLastName(String text) throws Exception{
  AppElement txtLastName=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBEditFirstLastName_txtLastName"));
  txtLastName.type(text);
  }




}