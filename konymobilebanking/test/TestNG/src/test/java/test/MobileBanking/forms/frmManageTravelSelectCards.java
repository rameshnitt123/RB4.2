package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmManageTravelSelectCards {


  public frmManageTravelSelectCards() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTravelSelectCards_frmManageTravelSelectCards"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageTravelSelectCards_btnContinue"));
  btnContinue.click();
  }




public void segSelectCards(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmManageTravelSelectCards_segSelectCards"),MobileBankingWidgetId.getWidgetId("frmManageTravelSelectCards_flxMain"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}