package com.tmaxos.topyunjy.datamodel;

import com.tmaxsoft.top.rt.model.DataModel;
import com.tmaxsoft.top.rt.model.DataList;
import com.tmaxsoft.top.rt.model.DataListFactory;

public class DM implements DataModel {		    
	
	private String DM_field0 = null;
	public String getDM_field0() {
		return DM_field0;
	}
	
	public void setDM_field0(String DM_field0) {
		this.DM_field0 = DM_field0;
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
