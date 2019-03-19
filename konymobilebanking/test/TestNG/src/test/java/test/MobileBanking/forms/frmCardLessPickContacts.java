package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessPickContacts {


  public frmCardLessPickContacts() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessPickContacts_frmCardLessPickContacts"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessPickContacts_btnContinue"));
  btnContinue.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessPickContacts_tbxSearch"));
  tbxSearch.type(text);
  }



public void segContacts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmCardLessPickContacts_segContacts"),MobileBankingWidgetId.getWidgetId("frmCardLessPickContacts_flxContacts"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}