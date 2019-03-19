package test.MobileBanking.forms;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;
import test.common.ListBox;

public class frmP2pSelectRecipient {


  public frmP2pSelectRecipient() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2pSelectRecipient_frmP2pSelectRecipient"));
  }
public frmRegP2PContactType btnAddRecipient() throws Exception{ 
  AppElement btnAddRecipient=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2pSelectRecipient_btnAddRecipient"));
  btnAddRecipient.click();
  return new frmRegP2PContactType();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmP2pSelectRecipient_tbxSearch"));
  tbxSearch.type(text);
  }



public void segAccounts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmP2pSelectRecipient_segAccounts"),MobileBankingWidgetId.getWidgetId("frmP2pSelectRecipient_flxAccountName"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	}
public static int getValidTransModeIndex() throws IOException, Exception {
	String segId = "frmP2pSelectRecipient_segAccounts";
	String seglblId = "frmP2pFromAccount_lblAccountName";
	//Scroll until internal accounts segment
	AppElement.scrollScreenUntilVisibleByID(MobileBankingWidgetId.getWidgetId(segId));
	//Return a valid index
	int validIndex = AppSpecificFunctions.getValidIndexForSegment(segId, seglblId);
	return validIndex;
}
public void selectRecipient(int index) throws IOException, Exception {
	Segment seg = new Segment(MobileBankingWidgetId.getWidgetId("frmP2pSelectRecipient_segAccounts"),MobileBankingWidgetId.getWidgetId("frmP2pFromAccount_lblAccountName"));
	//Get the account name which is being selected
//	String recipient = seg.getElementWithIndex(index).getText();
	seg.getElementWithIndex(index).click();
//	return recipient;
}

public frmTransfers imgBack() throws Exception{ 
	  AppElement imgBack =new AppElement(MobileBankingWidgetId.getWidgetId("frmConfirmTransferCD_imgBack"));
	  imgBack.click();
	return new frmTransfers();
}

public void btnimgBack() throws Exception{ 
	  AppElement btnimgBack=new AppElement(MobileBankingWidgetId.getWidgetId("frmConfirmTransferCD_imgBack"));
	  btnimgBack.click();
	  }

public void flxBack() throws Exception{ 
	  AppElement btnimgBack=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageRecipientType_Transfers"));
	  btnimgBack.click();
	  }
public frmTransfers clickBack() throws Exception {
	if(SgConfiguration.getInstance().isAndroid())
		btnimgBack();
	else
		flxBack();
	return new frmTransfers();
	
	
}

}

