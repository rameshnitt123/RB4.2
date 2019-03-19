package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmPreferencesDefaultAccount {


  public frmPreferencesDefaultAccount() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesDefaultAccount_frmPreferencesDefaultAccount"));
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesDefaultAccount_tbxSearch"));
  tbxSearch.type(text);
  }



public void segAccounts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmPreferencesDefaultAccount_segAccounts"),MobileBankingWidgetId.getWidgetId("frmPreferencesDefaultAccount_flxDefaultAccount"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}