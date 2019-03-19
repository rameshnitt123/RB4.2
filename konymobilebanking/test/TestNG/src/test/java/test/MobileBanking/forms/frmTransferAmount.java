package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

public class frmTransferAmount {


  public frmTransferAmount() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransferAmount_frmTransferAmount"));
  }
public void btnChange() throws Exception{ 
  AppElement btnChange=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransferAmount_btnChange"));
  btnChange.click();
  }
public frmTransferFrequency btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransferAmount_btnContinue"));
  btnContinue.click();
  return new frmTransferFrequency();
  }
public void btnDot() throws Exception{ 
  AppElement btnDot=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransferAmount_btnDot"));
  btnDot.click();
  }

public void tbxAmount(String text) throws Exception{
  AppElement tbxAmount=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransferAmount_tbxAmount"));
  tbxAmount.type(text);
  }




}