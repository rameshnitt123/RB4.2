package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmLocationDetails {


  public frmLocationDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmLocationDetails_frmLocationDetails"));
  }
public void btnCallBranch() throws Exception{ 
  AppElement btnCallBranch=new AppElement(MobileBankingWidgetId.getWidgetId("frmLocationDetails_btnCallBranch"));
  btnCallBranch.click();
  }




public void segOperationalHours(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmLocationDetails_segOperationalHours"),MobileBankingWidgetId.getWidgetId("frmLocationDetails_flxOperationHours"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segServices(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmLocationDetails_segServices"),MobileBankingWidgetId.getWidgetId("frmLocationDetails_flxServices"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}