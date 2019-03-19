package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmPFMAdvancedSearch {


  public frmPFMAdvancedSearch() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMAdvancedSearch_frmPFMAdvancedSearch"));
  }
public void btnSearch() throws Exception{ 
  AppElement btnSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMAdvancedSearch_btnSearch"));
  btnSearch.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMAdvancedSearch_tbxSearch"));
  tbxSearch.type(text);
  }
public void txtAmountFrom(String text) throws Exception{
  AppElement txtAmountFrom=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMAdvancedSearch_txtAmountFrom"));
  txtAmountFrom.type(text);
  }
public void txtAmountTo(String text) throws Exception{
  AppElement txtAmountTo=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMAdvancedSearch_txtAmountTo"));
  txtAmountTo.type(text);
  }



public void segTimeRange(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmPFMAdvancedSearch_segTimeRange"),MobileBankingWidgetId.getWidgetId("frmPFMAdvancedSearch_flxAdvanceSearch"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segTransactionType(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmPFMAdvancedSearch_segTransactionType"),MobileBankingWidgetId.getWidgetId("frmPFMAdvancedSearch_flxAdvanceSearch"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}