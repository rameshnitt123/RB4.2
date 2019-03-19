package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBFinancialInfoAnnualIncome {


  public frmOBFinancialInfoAnnualIncome() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBFinancialInfoAnnualIncome_frmOBFinancialInfoAnnualIncome"));
  }




public void segDependents(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBFinancialInfoAnnualIncome_segDependents"),MobileBankingWidgetId.getWidgetId("frmOBFinancialInfoAnnualIncome_flxMain"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}