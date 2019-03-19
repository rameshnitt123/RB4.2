package test.MobileBanking.forms;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

public class frmP2pFrequency {


  public frmP2pFrequency() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2pFrequency_frmP2pFrequency"));
  }




public void segFrequency(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmP2pFrequency_segFrequency"),MobileBankingWidgetId.getWidgetId("frmP2pFrequency_flxFrequency"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

public void chooseFrequency(String freqLabel) throws IOException, Exception
{
	//Selects frequency type from the segment
	Segment seg = new Segment(MobileBankingWidgetId.getWidgetId("frmP2pFrequency_segFrequency"), MobileBankingWidgetId.getWidgetId("segFrequency_lblFrequency"));
	seg.clickSegRowElementbyLabel(freqLabel);
}
}