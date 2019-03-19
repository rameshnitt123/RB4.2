package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmNAOAck {


  public frmNAOAck() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOAck_frmNAOAck"));
  }
public void btnChatbot() throws Exception{ 
  AppElement btnChatbot=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOAck_btnChatbot"));
  btnChatbot.click();
  }
public void lblGoToAccounts() throws Exception{ 
  AppElement lblGoToAccounts=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOAck_lblGoToAccounts"));
  lblGoToAccounts.click();
  }




public void segSelectedProducts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmNAOAck_segSelectedProducts"),MobileBankingWidgetId.getWidgetId("frmNAOAck_flxMain"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}