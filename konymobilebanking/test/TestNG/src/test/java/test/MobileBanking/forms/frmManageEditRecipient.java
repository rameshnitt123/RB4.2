package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmManageEditRecipient {


  public frmManageEditRecipient() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageEditRecipient_frmManageEditRecipient"));
  }
public void btnSave() throws Exception{ 
  AppElement btnSave=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageEditRecipient_btnSave"));
  btnSave.click();
  }

public void txtRecipientName(String text) throws Exception{
  AppElement txtRecipientName=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageEditRecipient_txtRecipientName"));
  txtRecipientName.type(text);
  }




}