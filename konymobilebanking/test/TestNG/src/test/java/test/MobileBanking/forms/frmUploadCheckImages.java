package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmUploadCheckImages {


  public frmUploadCheckImages() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmUploadCheckImages_frmUploadCheckImages"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmUploadCheckImages_btnContinue"));
  btnContinue.click();
  }
public void btnReTakeBack() throws Exception{ 
  AppElement btnReTakeBack=new AppElement(MobileBankingWidgetId.getWidgetId("frmUploadCheckImages_btnReTakeBack"));
  btnReTakeBack.click();
  }
public void btnReTakeFront() throws Exception{ 
  AppElement btnReTakeFront=new AppElement(MobileBankingWidgetId.getWidgetId("frmUploadCheckImages_btnReTakeFront"));
  btnReTakeFront.click();
  }





}