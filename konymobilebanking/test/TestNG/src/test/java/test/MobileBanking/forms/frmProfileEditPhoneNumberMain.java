package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmProfileEditPhoneNumberMain {


  public frmProfileEditPhoneNumberMain() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEditPhoneNumberMain_frmProfileEditPhoneNumberMain"));
  }
public void btnDelete() throws Exception{ 
  AppElement btnDelete=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEditPhoneNumberMain_btnDelete"));
  btnDelete.click();
  }
public void btnVerifyPhoneNumber() throws Exception{ 
  AppElement btnVerifyPhoneNumber=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileEditPhoneNumberMain_btnVerifyPhoneNumber"));
  btnVerifyPhoneNumber.click();
  }




public void segContactType(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmProfileEditPhoneNumberMain_segContactType"),MobileBankingWidgetId.getWidgetId("frmProfileEditPhoneNumberMain_flxFrequency"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}