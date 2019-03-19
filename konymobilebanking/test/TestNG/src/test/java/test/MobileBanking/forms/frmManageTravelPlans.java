package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmManageTravelPlans {


  public frmManageTravelPlans() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTravelPlans_frmManageTravelPlans"));
  }
public void btnAddTravelPlans() throws Exception{ 
  AppElement btnAddTravelPlans=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTravelPlans_btnAddTravelPlans"));
  btnAddTravelPlans.click();
  }




public void segTravelPlans(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmManageTravelPlans_segTravelPlans"),MobileBankingWidgetId.getWidgetId("frmManageTravelPlans_Image0b84625802bcd4d"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}