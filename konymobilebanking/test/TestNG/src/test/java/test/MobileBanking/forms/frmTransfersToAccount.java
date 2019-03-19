package test.MobileBanking.forms;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

public class frmTransfersToAccount {


  public frmTransfersToAccount() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransfersToAccount_btnAddRecipient"));
  }
public void btnAddRecipient() throws Exception{ 
  AppElement btnAddRecipient=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransfersToAccount_btnAddRecipient"));
  btnAddRecipient.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransfersToAccount_tbxSearch"));
  tbxSearch.type(text);
  }



public void segAccounts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmTransfersToAccount_segAccounts"),MobileBankingWidgetId.getWidgetId("frmTransfersToAccount_flxAccountName"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	}
public static int getValidToIndex() throws IOException, Exception {
	String segId = "frmTransfersToAccount_segAccounts";
	String seglblId = "frmTransfersToAccount_lblAccountName";
	//Scroll until internal accounts segment
	AppElement.scrollScreenUntilVisibleByID(MobileBankingWidgetId.getWidgetId(segId));
	//Return a valid index
	int validIndex = AppSpecificFunctions.getValidIndexForSegment(segId, seglblId);
	return validIndex;
}
public static String selectToAccount(int index) throws IOException, Exception {
	Segment seg = new Segment(MobileBankingWidgetId.getWidgetId("frmTransfersToAccount_segAccounts"),MobileBankingWidgetId.getWidgetId("frmTransfersToAccount_lblAccountName"));
	//Get the account name which is being selected
	String accName = seg.getElementWithIndex(index).getText();
	seg.getElementWithIndex(index).click();
	return accName;
} 

}