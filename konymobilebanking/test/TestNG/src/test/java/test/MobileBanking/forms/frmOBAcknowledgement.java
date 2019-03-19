package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBAcknowledgement {


  public frmOBAcknowledgement() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBAcknowledgement_frmOBAcknowledgement"));
  }
public void lblGoToAccounts() throws Exception{ 
  AppElement lblGoToAccounts=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBAcknowledgement_lblGoToAccounts"));
  lblGoToAccounts.click();
  }




public void segSelectedProducts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBAcknowledgement_segSelectedProducts"),MobileBankingWidgetId.getWidgetId("frmOBAcknowledgement_flxMain"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}