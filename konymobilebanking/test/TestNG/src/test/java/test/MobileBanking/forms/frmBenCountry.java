package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmBenCountry {


  public frmBenCountry() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenCountry_frmBenCountry"));
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenCountry_tbxSearch"));
  tbxSearch.type(text);
  }



public void segCountry(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmBenCountry_segCountry"),MobileBankingWidgetId.getWidgetId("frmBenCountry_lblFrequency"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
			e.printStackTrace();
		}
	} 

}