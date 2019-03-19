package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmAccountInfo {


  public frmAccountInfo() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountInfo_frmAccountInfo"));
  }
public void btnCallBank() throws Exception{ 
  AppElement btnCallBank=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountInfo_btnCallBank"));
  btnCallBank.click();
  }
public void btnCallBankCC() throws Exception{ 
  AppElement btnCallBankCC=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountInfo_btnCallBankCC"));
  btnCallBankCC.click();
  }
public void btnCallBankDA() throws Exception{ 
  AppElement btnCallBankDA=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountInfo_btnCallBankDA"));
  btnCallBankDA.click();
  }
public void btnCallBankHL() throws Exception{ 
  AppElement btnCallBankHL=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountInfo_btnCallBankHL"));
  btnCallBankHL.click();
  }
public void btnCancel() throws Exception{ 
  AppElement btnCancel=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountInfo_btnCancel"));
  btnCancel.click();
  }
public void btnEditNickName() throws Exception{ 
  AppElement btnEditNickName=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountInfo_btnEditNickName"));
  btnEditNickName.click();
  }
public void btnMsgBank() throws Exception{ 
  AppElement btnMsgBank=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountInfo_btnMsgBank"));
  btnMsgBank.click();
  }
public void btnMsgBankCC() throws Exception{ 
  AppElement btnMsgBankCC=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountInfo_btnMsgBankCC"));
  btnMsgBankCC.click();
  }
public void btnMsgBankDA() throws Exception{ 
  AppElement btnMsgBankDA=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountInfo_btnMsgBankDA"));
  btnMsgBankDA.click();
  }
public void btnMsgBankHL() throws Exception{ 
  AppElement btnMsgBankHL=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccountInfo_btnMsgBankHL"));
  btnMsgBankHL.click();
  }





}