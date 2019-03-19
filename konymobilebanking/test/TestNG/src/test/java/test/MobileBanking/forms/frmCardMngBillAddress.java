package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardMngBillAddress {


  public frmCardMngBillAddress() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngBillAddress_frmCardMngBillAddress"));
  }
public void btnSave() throws Exception{ 
  AppElement btnSave=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngBillAddress_btnSave"));
  btnSave.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngBillAddress_tbxSearch"));
  tbxSearch.type(text);
  }
public void txtAddressLineOne(String text) throws Exception{
  AppElement txtAddressLineOne=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngBillAddress_txtAddressLineOne"));
  txtAddressLineOne.type(text);
  }
public void txtAddressLineTwo(String text) throws Exception{
  AppElement txtAddressLineTwo=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngBillAddress_txtAddressLineTwo"));
  txtAddressLineTwo.type(text);
  }
public void txtCity(String text) throws Exception{
  AppElement txtCity=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngBillAddress_txtCity"));
  txtCity.type(text);
  }
public void txtCountry(String text) throws Exception{
  AppElement txtCountry=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngBillAddress_txtCountry"));
  txtCountry.type(text);
  }
public void txtState(String text) throws Exception{
  AppElement txtState=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngBillAddress_txtState"));
  txtState.type(text);
  }
public void txtZipCode(String text) throws Exception{
  AppElement txtZipCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngBillAddress_txtZipCode"));
  txtZipCode.type(text);
  }



public void segAddresses(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmCardMngBillAddress_segAddresses"),MobileBankingWidgetId.getWidgetId("frmCardMngBillAddress_flxSearchAddress"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}