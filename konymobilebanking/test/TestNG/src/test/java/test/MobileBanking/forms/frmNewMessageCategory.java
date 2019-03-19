package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;

public class frmNewMessageCategory {


  public frmNewMessageCategory() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmNewMessageCategory_frmNewMessageCategory"));
  }

public String getRandomMessageCategory() throws IOException, Exception {

	Segment CategorySeg = new Segment(MobileBankingWidgetId.getWidgetId("frmNewMessageCategory_segCategory"),
			MobileBankingWidgetId.getWidgetId("segCategory_lblCategory"));
	int index = AppSpecificFunctions.getRandomNumberinRange(CategorySeg.getRowCount());
	return CategorySeg.getElementWithIndex(index).getText();
}

public frmNewMessage clickCategory(String messageCategory) throws Exception {
	Segment CategorySeg = new Segment(MobileBankingWidgetId.getWidgetId("frmNewMessageCategory_segCategory"),
			MobileBankingWidgetId.getWidgetId("segCategory_lblCategory"));
	CategorySeg.clickSegRowElementbyLabel(messageCategory);
	return new frmNewMessage();
}

}