package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

public class frmP2PRecipientName {


  public frmP2PRecipientName() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2PRecipientName_frmP2PRecipientName"));
  }
public frmP2PVerifyDetails btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2PRecipientName_btnContinue"));
  btnContinue.click();
  return new frmP2PVerifyDetails();
  }

public void txtLastName(String text) throws Exception{
  AppElement txtLastName=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2PRecipientName_txtLastName"));
  txtLastName.type(text);
  }
public void txtRecipientName(String text) throws Exception{
  AppElement txtRecipientName=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2PRecipientName_txtRecipientName"));
  txtRecipientName.type(text);
  }




}