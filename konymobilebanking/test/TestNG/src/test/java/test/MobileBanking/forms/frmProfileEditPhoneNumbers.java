package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmProfileEditPhoneNumbers {


  public frmProfileEditPhoneNumbers() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEditPhoneNumbers_frmProfileEditPhoneNumbers"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEditPhoneNumbers_btnContinue"));
  btnContinue.click();
  }




public void segPhoneNumbers(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmProfileEditPhoneNumbers_segPhoneNumbers"),MobileBankingWidgetId.getWidgetId("frmProfileEditPhoneNumbers_flxDelete"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}