package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmConfirmTransferCD {


  public frmConfirmTransferCD() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmConfirmTransferCD_frmConfirmTransferCD"));
  }
public void btnConfirm() throws Exception{ 
  AppElement btnConfirm=new AppElement(MobileBankingWidgetId.getWidgetId("frmConfirmTransferCD_btnConfirm"));
  btnConfirm.click();
  }





}