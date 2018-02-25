({
	onFormSubmit : function(component, event, helper) {
	    var formData = event.getParam("formData");
	    var boatTypeId  = formData.boatTypeId;
	    var boatSearchResultsCmp = component.find("boatSearchResults");
	    console.log('cxx '+boatTypeId);
	    console.log('cxx '+boatSearchResultsCmp);
	    boatSearchResultsCmp.search(boatTypeId);
	}
})