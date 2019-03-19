package test.MobileBanking;

import java.io.IOException;

import test.common.SgConfiguration;
import test.common.WidgetID;

public class MobileBankingWidgetId {
	static WidgetID widgetIds;
	
	public static String getWidgetId(String key) throws Exception,IOException{
		if(widgetIds==null){
			if(SgConfiguration.getInstance().getKeyValue("Device").equalsIgnoreCase("Tablet"))
				widgetIds = new WidgetID("tabletWidgetid.properties");
			else
				widgetIds = new WidgetID("mobileWidgetid.properties");
		}			
		return widgetIds.getWidgetId(key);
	}

}
