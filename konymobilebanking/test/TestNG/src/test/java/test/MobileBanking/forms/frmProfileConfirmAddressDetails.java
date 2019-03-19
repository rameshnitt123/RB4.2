package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmProfileConfirmAddressDetails {


  public frmProfileConfirmAddressDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileConfirmAddressDetails_frmProfileConfirmAddressDetails"));
  }
public void btnUpdateChanges() throws Exception{ 
  AppElement btnUpdateChanges=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileConfirmAddressDetails_btnUpdateChanges"));
  btnUpdateChanges.click();
  }





}