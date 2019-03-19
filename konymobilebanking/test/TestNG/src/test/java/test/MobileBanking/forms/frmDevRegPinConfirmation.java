package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmDevRegPinConfirmation {


  public frmDevRegPinConfirmation() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegPinConfirmation_frmDevRegPinConfirmation"));
  }
public void btnEnableAndSetAsDefault() throws Exception{ 
  AppElement btnEnableAndSetAsDefault=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegPinConfirmation_btnEnableAndSetAsDefault"));
  btnEnableAndSetAsDefault.click();
  }
public void btnSetAsDefault() throws Exception{ 
  AppElement btnSetAsDefault=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegPinConfirmation_btnSetAsDefault"));
  btnSetAsDefault.click();
  }





}