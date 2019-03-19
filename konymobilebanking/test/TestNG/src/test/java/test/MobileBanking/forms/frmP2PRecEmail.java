package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmP2PRecEmail {


  public frmP2PRecEmail() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2PRecEmail_frmP2PRecEmail"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2PRecEmail_btnContinue"));
  btnContinue.click();
  }
public void btnPickFromContacts() throws Exception{ 
  AppElement btnPickFromContacts=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2PRecEmail_btnPickFromContacts"));
  btnPickFromContacts.click();
  }

public void txtEmailId(String text) throws Exception{
  AppElement txtEmailId=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2PRecEmail_txtEmailId"));
  txtEmailId.type(text);
  }




}