package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

public class frmP2pAmount {


  public frmP2pAmount() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2pAmount_frmP2pAmount"));
  }
public void btnChange() throws Exception{ 
  AppElement btnChange=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2pAmount_btnChange"));
  btnChange.click();
  }
public frmP2pFrequency btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2pAmount_btnContinue"));
  btnContinue.click();
  return new frmP2pFrequency();
  }
public void btnDot() throws Exception{ 
  AppElement btnDot=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2pAmount_btnDot"));
  btnDot.click();
  }

public void tbxAmount(String text) throws Exception{
  AppElement tbxAmount=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2pAmount_tbxAmount"));
  tbxAmount.type(text);
  }




}