package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

public class frmP2PVerifyDetails {


  public frmP2PVerifyDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2PVerifyDetails_frmP2PVerifyDetails"));
  }
public frmP2pSelectRecipient btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2PVerifyDetails_btnContinue"));
  btnContinue.click();
  return new frmP2pSelectRecipient();
  }

public void txtNickName(String text) throws Exception{
  AppElement txtNickName=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2PVerifyDetails_txtNickName"));
  txtNickName.type(text);
  }




}