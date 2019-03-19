package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

public class frmTransfersRecurrence {


  public frmTransfersRecurrence() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransfersRecurrence_frmTransfersRecurrence"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransfersRecurrence_btnContinue"));
  btnContinue.click();
  }

public void entercode1() throws Exception {
	//Enters value
    AppElement btnOne = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_btnOne"));
    btnOne.click();
}

public void entercode2() throws Exception {
	//Enters value
    AppElement btnTwo = new AppElement(MobileBankingWidgetId.getWidgetId("frmLogin_btnTwo"));
    btnTwo.click();
}






}