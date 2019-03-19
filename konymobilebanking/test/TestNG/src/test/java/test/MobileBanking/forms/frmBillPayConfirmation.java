package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmBillPayConfirmation {


  public frmBillPayConfirmation() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayConfirmation_frmBillPayConfirmation"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayConfirmation_btnContinue"));
  btnContinue.click();
  }

public void txtDescription(String text) throws Exception{
  AppElement txtDescription=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayConfirmation_txtDescription"));
  txtDescription.type(text);
  }



public void segDetails(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmBillPayConfirmation_segDetails"),MobileBankingWidgetId.getWidgetId("frmBillPayConfirmation_flxSeparator"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}