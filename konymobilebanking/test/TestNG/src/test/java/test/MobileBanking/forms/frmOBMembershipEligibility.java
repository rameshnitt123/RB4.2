package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBMembershipEligibility {


  public frmOBMembershipEligibility() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBMembershipEligibility_frmOBMembershipEligibility"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBMembershipEligibility_btnContinue"));
  btnContinue.click();
  }




public void segCriteria(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBMembershipEligibility_segCriteria"),MobileBankingWidgetId.getWidgetId("frmOBMembershipEligibility_btnViewList"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}