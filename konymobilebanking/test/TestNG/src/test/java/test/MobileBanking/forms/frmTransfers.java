package test.MobileBanking.forms;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

public class frmTransfers {


  public frmTransfers() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransfers_frmTransfers"));
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransfers_tbxSearch"));
  tbxSearch.type(text);
  }



public void segTransactions(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmTransfers_segTransactions"),MobileBankingWidgetId.getWidgetId("frmTransfers_flxAccount"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

public frmTransactionMode clickMakeTransfers() throws IOException, Exception {
	AppSpecificFunctions.clickAppElement( "frmTransfers_imgMakeTransfer" );
	return new frmTransactionMode();
}

public boolean isfrmTransfersVisible() throws IOException, Exception
{
	AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmTransfers_frmTransfers"),5);
	boolean visible = AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmTransfers_frmTransfers"));
	return visible;
}

public frmManageRecipientType clickManage() throws IOException, Exception {
	AppSpecificFunctions.clickAppElement( "frmTransfers_imgManage" );
	return new frmManageRecipientType();
}

public frmP2pSelectRecipient clickPayAPerson() throws IOException, Exception {
	AppSpecificFunctions.clickAppElement( "frmTransfers_imgPayAPerson" );
	return new frmP2pSelectRecipient();
}
}