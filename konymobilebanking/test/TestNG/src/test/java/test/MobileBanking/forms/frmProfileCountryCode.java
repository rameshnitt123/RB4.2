package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmProfileCountryCode {


  public frmProfileCountryCode() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileCountryCode_frmProfileCountryCode"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileCountryCode_btnContinue"));
  btnContinue.click();
  }
public void btnEight() throws Exception{ 
  AppElement btnEight=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileCountryCode_btnEight"));
  btnEight.click();
  }
public void btnFive() throws Exception{ 
  AppElement btnFive=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileCountryCode_btnFive"));
  btnFive.click();
  }
public void btnFour() throws Exception{ 
  AppElement btnFour=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileCountryCode_btnFour"));
  btnFour.click();
  }
public void btnNine() throws Exception{ 
  AppElement btnNine=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileCountryCode_btnNine"));
  btnNine.click();
  }
public void btnOne() throws Exception{ 
  AppElement btnOne=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileCountryCode_btnOne"));
  btnOne.click();
  }
public void btnSeven() throws Exception{ 
  AppElement btnSeven=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileCountryCode_btnSeven"));
  btnSeven.click();
  }
public void btnSix() throws Exception{ 
  AppElement btnSix=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileCountryCode_btnSix"));
  btnSix.click();
  }
public void btnThree() throws Exception{ 
  AppElement btnThree=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileCountryCode_btnThree"));
  btnThree.click();
  }
public void btnTwo() throws Exception{ 
  AppElement btnTwo=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileCountryCode_btnTwo"));
  btnTwo.click();
  }
public void btnZero() throws Exception{ 
  AppElement btnZero=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileCountryCode_btnZero"));
  btnZero.click();
  }

public void tbxCountryCode(String text) throws Exception{
  AppElement tbxCountryCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileCountryCode_tbxCountryCode"));
  tbxCountryCode.type(text);
  }

public void rtxSecurityCode(String text) throws Exception{
  AppElement rtxSecurityCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileCountryCode_rtxSecurityCode"));
  rtxSecurityCode.type(text);
  }



}