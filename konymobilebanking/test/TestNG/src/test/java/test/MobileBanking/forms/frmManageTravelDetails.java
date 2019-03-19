package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmManageTravelDetails {


  public frmManageTravelDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTravelDetails_frmManageTravelDetails"));
  }
public void btnCancel() throws Exception{ 
  AppElement btnCancel=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTravelDetails_btnCancel"));
  btnCancel.click();
  }
public void btnDelete() throws Exception{ 
  AppElement btnDelete=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTravelDetails_btnDelete"));
  btnDelete.click();
  }




public void segSelectedCards(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmManageTravelDetails_segSelectedCards"),MobileBankingWidgetId.getWidgetId("frmManageTravelDetails_flxTravelDestination"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segTravelDestination(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmManageTravelDetails_segTravelDestination"),MobileBankingWidgetId.getWidgetId("frmManageTravelDetails_flxTravelDestination"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}