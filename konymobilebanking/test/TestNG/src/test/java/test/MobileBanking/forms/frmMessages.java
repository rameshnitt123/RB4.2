package test.MobileBanking.forms;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.Alerts;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;

public class frmMessages {


  public frmMessages() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmMessages_frmMessages"));
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmMessages_tbxSearch"));
  tbxSearch.type(text);
  }



public void segMessagesInbox(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmMessages_segMessagesInbox"),MobileBankingWidgetId.getWidgetId("frmMessages_flxDelete"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	}

public frmNewMessageCategory clickAddButton() throws IOException, Exception {
	if (SgConfiguration.getInstance().isAndroid())
		AppSpecificFunctions.clickAppElement("frmMessages_imgSearch");
	
	else
		AppSpecificFunctions.clickAppElement("frmMessages_null");
	return new frmNewMessageCategory();
}

public boolean isNewMessageDisplayed(String messageSubject) throws IOException, Exception {
//	new frmMessages();
//	if(AppElement.isElementVisible("id", "frmMessages_segMessagesInbox")){
	Segment messagesInboxSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmMessages_segMessagesInbox"),
			MobileBankingWidgetId.getWidgetId("segMessagesInbox_lblSubject"));
	if(messagesInboxSeg.getSegRowIndexWithLabel(messageSubject)>=0)
		return true;
//	}
	return false;
}

public String selectRandomMessagefromInbox() throws IOException, Exception {
	
	Segment InboxSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmMessages_segMessagesInbox"),
			MobileBankingWidgetId.getWidgetId("segMessagesInbox_lblSubject"));
	int index = AppSpecificFunctions.getRandomNumberinRange(InboxSeg.getRowCount());
	return InboxSeg.getElementWithIndex(index).getText();
}

public frmMessagesDetails clickMessage(String messageSubject) throws Exception {
	
	Segment InboxSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmMessages_segMessagesInbox"),
			MobileBankingWidgetId.getWidgetId("segMessagesInbox_lblSubject"));
	InboxSeg.clickSegRowElementbyLabel(messageSubject);
	return new frmMessagesDetails();
	/*if(AppElement.isElementVisible("id", "frmMessagesDetails_frmMessagesDetails"))
	{
	return new frmMessagesDetails();
	}
	AppElement.deviceBack();
	return  null;*/
}

public void flxInbox() throws IOException, Exception {
	AppSpecificFunctions.clickAppElement("frmMessages_flxInbox");
}

public void flxDeleted() throws IOException, Exception {
	AppSpecificFunctions.clickAppElement("frmMessages_flxDeleted");
	
}

public void SwipeMessage(String messageSubject) throws IOException, Exception {
	Segment InboxSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmMessages_segMessagesInbox"),
			MobileBankingWidgetId.getWidgetId("segMessagesInbox_lblSubject"));
	int index = InboxSeg.getSegRowIndexWithLabel(messageSubject);
	AppElement Element = InboxSeg.getElementWithIndex(index);
	Element.swipeLeft();
}

public boolean isnewReplyAvailable(String messageSubject, String replingMessage) throws IOException, Exception {

	frmMessages frmMessages = null;
	Segment InboxSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmMessages_segMessagesInbox"),
			MobileBankingWidgetId.getWidgetId("segMessagesInbox_lblSubject"));
	InboxSeg.clickSegRowElementbyLabel(messageSubject);
	frmMessagesDetails frmMessagesDetails =new frmMessagesDetails();
	Segment MessageDetailsSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmMessagesDetails_segMessageDetails"),
			MobileBankingWidgetId.getWidgetId("segMessageDetails_lblMessageDescription"));
	int index = MessageDetailsSeg.getSegRowIndexWithLabel(replingMessage);
	System.out.println("index####"+index);
	frmMessages = frmMessagesDetails.clickBack();
	if (index>0 && frmMessages!=null)
		return true;
	return false;
	
}

public frmLogin signOut() throws IOException, Exception {
	AppSpecificFunctions.clickHamburgerButton();
	return AppSpecificFunctions.signOut();
}

public frmMessages clickDeletebtn() throws IOException, Exception {
	AppSpecificFunctions.clickAppElement("frmMessages_flxDelete");
	Alerts.acceptAlert();
	return new frmMessages();
}

}