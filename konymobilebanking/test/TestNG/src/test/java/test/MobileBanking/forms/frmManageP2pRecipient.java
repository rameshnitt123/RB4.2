package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmManageP2pRecipient {


  public frmManageP2pRecipient() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageP2pRecipient_frmManageP2pRecipient"));
  }
public void btnDeleteRecipient() throws Exception{ 
  AppElement btnDeleteRecipient=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageP2pRecipient_btnDeleteRecipient"));
  btnDeleteRecipient.click();
  }
public void btnPayAPerson() throws Exception{ 
  AppElement btnPayAPerson=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageP2pRecipient_btnPayAPerson"));
  btnPayAPerson.click();
  }





}