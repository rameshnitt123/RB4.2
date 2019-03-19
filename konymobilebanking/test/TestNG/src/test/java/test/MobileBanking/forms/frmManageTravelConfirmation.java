package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmManageTravelConfirmation {


  public frmManageTravelConfirmation() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTravelConfirmation_frmManageTravelConfirmation"));
  }
public void btnConfirm() throws Exception{ 
  AppElement btnConfirm=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTravelConfirmation_btnConfirm"));
  btnConfirm.click();
  }




public void segSelectedCards(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmManageTravelConfirmation_segSelectedCards"),MobileBankingWidgetId.getWidgetId("frmManageTravelConfirmation_flxTravelDestination"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segTravelDestination(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmManageTravelConfirmation_segTravelDestination"),MobileBankingWidgetId.getWidgetId("frmManageTravelConfirmation_flxTravelDestination"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}