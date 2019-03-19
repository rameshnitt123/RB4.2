package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmBenName {


  public frmBenName() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenName_frmBenName"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenName_btnContinue"));
  btnContinue.click();
  }

public void txtLastName(String text) throws Exception{
  AppElement txtLastName=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenName_txtLastName"));
  txtLastName.type(text);
  }
public void txtRecipientName(String text) throws Exception{
  AppElement txtRecipientName=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenName_txtRecipientName"));
  txtRecipientName.type(text);
  }




}