package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmManageTransferRecipientInfo {


  public frmManageTransferRecipientInfo() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTransferRecipientInfo_frmManageTransferRecipientInfo"));
  }
public void btnDeleteRecipient() throws Exception{ 
  AppElement btnDeleteRecipient=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTransferRecipientInfo_btnDeleteRecipient"));
  btnDeleteRecipient.click();
  }
public void btnTransfer() throws Exception{ 
  AppElement btnTransfer=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTransferRecipientInfo_btnTransfer"));
  btnTransfer.click();
  }





}