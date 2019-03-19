package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

public class frmTransfersDuration {


  public frmTransfersDuration() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransfersDuration_frmTransfersDuration"));
  }
public void btnContinueUntilCancel() throws Exception{ 
  AppElement btnContinueUntilCancel=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransfersDuration_btnContinueUntilCancel"));
  btnContinueUntilCancel.click();
  }
public void btnDateRange() throws Exception{ 
  AppElement btnDateRange=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransfersDuration_btnDateRange"));
  btnDateRange.click();
  }
public void btnNumberOfOccurances() throws Exception{ 
  AppElement btnNumberOfOccurances=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransfersDuration_btnNumberOfOccurances"));
  btnNumberOfOccurances.click();
  }




public void segDuration(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmTransfersDuration_segDuration"),MobileBankingWidgetId.getWidgetId("frmTransfersDuration_lblFrequency"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
			e.printStackTrace();			
		}
	} 

}