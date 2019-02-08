package com.tmaxos.topyunjy.datamodel;

import com.tmaxsoft.top.rt.model.DataModel;
import com.tmaxsoft.top.rt.model.DataList;
import com.tmaxsoft.top.rt.model.DataListFactory;

public class DM_project_type implements DataModel {		    
	
	private String PROJECT_TYPE = null;
	public String getPROJECT_TYPE() {
		return PROJECT_TYPE;
	}
	
	public void setPROJECT_TYPE(String PROJECT_TYPE) {
		this.PROJECT_TYPE = PROJECT_TYPE;
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
