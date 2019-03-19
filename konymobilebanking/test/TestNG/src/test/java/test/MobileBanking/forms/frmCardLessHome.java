package test.MobileBanking.forms;

import java.io.IOException;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessHome {


  public frmCardLessHome() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessHome_frmCardLessHome"));
  }
  
  
public void btnChatbot() throws Exception{ 
  AppElement btnChatbot=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessHome_btnChatbot"));
  btnChatbot.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessHome_tbxSearch"));
  tbxSearch.type(text);
  }



public void segDepositFrom(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmCardLessHome_segDepositFrom"),MobileBankingWidgetId.getWidgetId("frmCardLessHome_flxSeparator"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

public frmCardLessCashRec clickWithdrawCash() throws IOException, Exception
{
	//Navigates to withdraw cash
	AppSpecificFunctions.clickAppElement("frmCardLessHome_imgCheckDeposit");
	return new frmCardLessCashRec();
}

}