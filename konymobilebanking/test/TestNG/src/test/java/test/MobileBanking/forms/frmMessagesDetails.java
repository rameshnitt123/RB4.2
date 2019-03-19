package test.MobileBanking.forms;

import test.common.Alerts;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;

public class frmMessagesDetails {


  public frmMessagesDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmMessagesDetails_frmMessagesDetails"));
  }
public void btnChooseFromDevice() throws Exception{ 
  AppElement btnChooseFromDevice=new AppElement(MobileBankingWidgetId.getWidgetId("frmMessagesDetails_btnChooseFromDevice"));
  btnChooseFromDevice.click();
  }
public void btnRestore() throws Exception{ 
  AppElement btnRestore=new AppElement(MobileBankingWidgetId.getWidgetId("frmMessagesDetails_btnRestore"));
  btnRestore.click();
  }
public frmMessages btnSend() throws Exception{ 
  AppElement btnSend=new AppElement(MobileBankingWidgetId.getWidgetId("frmMessagesDetails_btnSend"));
  btnSend.click();
  return new frmMessages();
  }
public void btnTakeAPicture() throws Exception{ 
  AppElement btnTakeAPicture=new AppElement(MobileBankingWidgetId.getWidgetId("frmMessagesDetails_btnTakeAPicture"));
  btnTakeAPicture.click();
  }




public void segMessageDetails(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmMessagesDetails_segMessageDetails"),MobileBankingWidgetId.getWidgetId("frmMessagesDetails_flxAttachment"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	}
public frmMessages clickDelete() throws IOException, Exception {
	AppSpecificFunctions.clickAppElement("frmMessagesDetails_imgDelete");
	Alerts.acceptAlert();
	return new frmMessages();
}
public void clickflxReply() throws IOException, Exception {

	AppSpecificFunctions.clickAppElement("frmMessagesDetails_flxReply");
}
public void txtAreaReply(String text) throws IOException, Exception {
		AppElement txtAreaReply=new AppElement(MobileBankingWidgetId.getWidgetId("frmMessagesDetails_txtAreaReply"));
		txtAreaReply.type(text);
}

public frmMessages clickBack() throws IOException, Exception {
	AppSpecificFunctions.clickAppElement("frmMessagesDetails_imgBack");
	return new frmMessages();
}

}