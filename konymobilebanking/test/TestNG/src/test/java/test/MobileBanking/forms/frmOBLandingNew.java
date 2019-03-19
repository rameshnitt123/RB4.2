package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBLandingNew {


  public frmOBLandingNew() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLandingNew_frmOBLandingNew"));
  }
public void btnLogout() throws Exception{ 
  AppElement btnLogout=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLandingNew_btnLogout"));
  btnLogout.click();
  }




public void segSteps(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBLandingNew_segSteps"),MobileBankingWidgetId.getWidgetId("frmOBLandingNew_flxNumber"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}