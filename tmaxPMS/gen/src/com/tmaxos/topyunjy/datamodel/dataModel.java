package com.tmaxos.topyunjy.datamodel;

import com.tmaxsoft.top.rt.model.DataModel;
import com.tmaxsoft.top.rt.model.DataList;
import com.tmaxsoft.top.rt.model.DataListFactory;

public class dataModel implements DataModel {		    
	
	private String menu_top01 = null;
	public String getMenu_top01() {
		return menu_top01;
	}
	
	public void setMenu_top01(String menu_top01) {
		this.menu_top01 = menu_top01;
	}
	
	@Override    
	public String[] keys() {
	    return null;
	}
	
	@Override    
	public int[] keyTypes() {
	    return null;
	}
	
	@Override    
	public Object[] keyModelTypes() {
	    return null;
	}
	        
	@Override
	public Object getData(String arg0) {
	    // Get Data by Attribute Key
	    return null;
	}
	
	@Override
	public void setData(String arg0, Object arg1) {       
	    // Set Data by Attribute Key
	}
	
	@Override
	public void clear() {
	}
	
	@Override
	public void init() {
	}
}
