package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmP2pDuration {


  public frmP2pDuration() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2pDuration_frmP2pDuration"));
  }
public void btnContinueUntilCancel() throws Exception{ 
  AppElement btnContinueUntilCancel=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2pDuration_btnContinueUntilCancel"));
  btnContinueUntilCancel.click();
  }
public void btnDateRange() throws Exception{ 
  AppElement btnDateRange=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2pDuration_btnDateRange"));
  btnDateRange.click();
  }
public void btnNumberOfOccurances() throws Exception{ 
  AppElement btnNumberOfOccurances=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2pDuration_btnNumberOfOccurances"));
  btnNumberOfOccurances.click();
  }




public void segDuration(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmP2pDuration_segDuration"),MobileBankingWidgetId.getWidgetId("frmP2pDuration_flxFrequency"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}