package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmBillPayEditAddress {


  public frmBillPayEditAddress() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayEditAddress_frmBillPayEditAddress"));
  }
public void btnSave() throws Exception{ 
  AppElement btnSave=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayEditAddress_btnSave"));
  btnSave.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayEditAddress_tbxSearch"));
  tbxSearch.type(text);
  }
public void txtAddressLineOne(String text) throws Exception{
  AppElement txtAddressLineOne=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayEditAddress_txtAddressLineOne"));
  txtAddressLineOne.type(text);
  }
public void txtAddressLineTwo(String text) throws Exception{
  AppElement txtAddressLineTwo=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayEditAddress_txtAddressLineTwo"));
  txtAddressLineTwo.type(text);
  }
public void txtCity(String text) throws Exception{
  AppElement txtCity=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayEditAddress_txtCity"));
  txtCity.type(text);
  }
public void txtCountry(String text) throws Exception{
  AppElement txtCountry=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayEditAddress_txtCountry"));
  txtCountry.type(text);
  }
public void txtState(String text) throws Exception{
  AppElement txtState=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayEditAddress_txtState"));
  txtState.type(text);
  }
public void txtZipCode(String text) throws Exception{
  AppElement txtZipCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayEditAddress_txtZipCode"));
  txtZipCode.type(text);
  }



public void segAddresses(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmBillPayEditAddress_segAddresses"),MobileBankingWidgetId.getWidgetId("frmBillPayEditAddress_flxSearchAddress"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}