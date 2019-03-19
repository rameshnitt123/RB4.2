package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

public class frmRegP2PContactType {


  public frmRegP2PContactType() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmRegP2PContactType_frmRegP2PContactType"));
  }
public void btnEmail() throws Exception{ 
  AppElement btnEmail=new AppElement(MobileBankingWidgetId.getWidgetId("frmRegP2PContactType_btnEmail"));
  btnEmail.click();
  }
public frmP2PRecPhoneNo btnPhoneNumber() throws Exception{ 
  AppElement btnPhoneNumber=new AppElement(MobileBankingWidgetId.getWidgetId("frmRegP2PContactType_btnPhoneNumber"));
  btnPhoneNumber.click();
  return new frmP2PRecPhoneNo();
  }





}