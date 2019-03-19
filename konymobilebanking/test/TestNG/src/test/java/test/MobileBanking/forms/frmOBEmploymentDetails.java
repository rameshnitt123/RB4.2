package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBEmploymentDetails {


  public frmOBEmploymentDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBEmploymentDetails_frmOBEmploymentDetails"));
  }
public void btnContinueEmploymentInfo() throws Exception{ 
  AppElement btnContinueEmploymentInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBEmploymentDetails_btnContinueEmploymentInfo"));
  btnContinueEmploymentInfo.click();
  }

public void txtCompany(String text) throws Exception{
  AppElement txtCompany=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBEmploymentDetails_txtCompany"));
  txtCompany.type(text);
  }
public void txtJobTitle(String text) throws Exception{
  AppElement txtJobTitle=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBEmploymentDetails_txtJobTitle"));
  txtJobTitle.type(text);
  }




}