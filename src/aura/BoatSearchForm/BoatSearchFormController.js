({
 	doInit: function(component, event, helper) {
 		helper.isCreateRecordSupported(component);
		helper.getAllBoatTypes(component);
    },


	createBoat : function(component, event, helper) {
		var createRecordEvent = $A.get("e.force:createRecord");
		var selectedBoatType = $A.get("v.selectedBoatType");
    	
    	createRecordEvent.setParams({
        	"entityApiName": "Boat__c",
        	"defaultFieldValues": {
        		'BoatType__c' : selectedBoatType.Id
        	}
    	});
    	
    	createRecordEvent.fire();
	}
})