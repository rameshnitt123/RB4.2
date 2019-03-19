package test.MobileBanking.forms;

import java.io.IOException;
import java.util.Random;

import test.MobileBanking.MobileBankingNames;
import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

public class frmTransferFrequency {


  public frmTransferFrequency() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransferFrequency_frmTransferFrequency"));
  }




public void segFrequency(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmTransferFrequency_segFrequency"),MobileBankingWidgetId.getWidgetId("frmTransferFrequency_flxFrequency"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
			e.printStackTrace();
		}
	}




public String getValidFrequency() throws Exception
{
	//Returns a valid clickable frequency name
	String[] frequencies = {MobileBankingNames.getWidgetName("frmTransferFrequency_dailyOnce"),
			MobileBankingNames.getWidgetName("frmTransferFrequency_weeklyOnce"),MobileBankingNames.getWidgetName("frmTransferFrequency_monthlyOnce")};
   Random rn = new Random();
   int index = rn.nextInt(frequencies.length);
   String frequency = frequencies[index];
   return frequency;
}




public void chooseFrequency(String freqLabel) throws IOException, Exception
{
	//Selects frequency type from the segment
	Segment seg = new Segment(MobileBankingWidgetId.getWidgetId("frmTransferFrequency_segFrequency"), MobileBankingWidgetId.getWidgetId("segFrequency_lblFrequency"));
	seg.clickSegRowElementbyLabel(freqLabel);
}










}