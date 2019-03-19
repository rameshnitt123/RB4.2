package test.MobileBanking.forms;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppElement;
import test.common.Segment;

public class frmNewMessage {


  public frmNewMessage() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmNewMessage_frmNewMessage"));
  }
public void btnChooseFromDevice() throws Exception{ 
  AppElement btnChooseFromDevice=new AppElement(MobileBankingWidgetId.getWidgetId("frmNewMessage_btnChooseFromDevice"));
  btnChooseFromDevice.click();
  }
public void btnSend() throws Exception{ 
  AppElement btnSend=new AppElement(MobileBankingWidgetId.getWidgetId("frmNewMessage_btnSend"));
  btnSend.click();
  }
public void btnTakeAPicture() throws Exception{ 
  AppElement btnTakeAPicture=new AppElement(MobileBankingWidgetId.getWidgetId("frmNewMessage_btnTakeAPicture"));
  btnTakeAPicture.click();
  }

public void tbxSubject(String text) throws Exception{
  AppElement tbxSubject=new AppElement(MobileBankingWidgetId.getWidgetId("frmNewMessage_tbxSubject"));
  tbxSubject.type(text);
  }



public void segAttachments(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmNewMessage_segAttachments"),MobileBankingWidgetId.getWidgetId("frmNewMessage_flxAttachment"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		e.printStackTrace();
		}
	}
public void txtAreaDescription(String text) throws IOException, Exception {
	AppElement txtAreaDescription=new AppElement(MobileBankingWidgetId.getWidgetId("frmNewMessage_txtareaDescription"));
	txtAreaDescription.type(text);
}
public frmMessages clickSend() throws Exception {
	frmNewMessage frmNewMessage =new frmNewMessage();
	frmNewMessage.btnSend();
	AppElement.waitForEnable("frmMessages_frmMessages", 40);
//	Thread.sleep(10000);
	if(AppElement.isElementVisible("id","frmMessages_frmMessages"))
	{
		return new frmMessages();
	}
	if(AppElement.isElementVisible("id","frmNewMessage_btnSend"))
	{
		AppSpecificFunctions.clickAppElement("frmSettings_imgBack");
		AppSpecificFunctions.clickAppElement("frmSettings_imgBack");
		return new frmMessages();
	}
	return new frmMessages();

	
	// TODO Auto-generated method stub
	
} 

}