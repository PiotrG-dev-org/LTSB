({
	isCreateRecordSupported : function(component) {
		var isEnabled = $A.get("e.force:createRecord");

		if(isEnabled) {
			component.set("v.newButtonRendered", true);
		}
		else {
			component.set("v.newButtonRendered", false);
		}
	},


	getAllBoatTypes : function(component) {
		var action = component.get('c.getBoatTypes');
        
        action.setCallback(this, function(result) {
            var status = result.getState();
            
            if (status === 'SUCCESS') {
                var resultData = result.getReturnValue();
                component.set("v.boatTypes", resultData);
            } 
            else {
            	console.log('Something went wrong '+status);
            }
        });

        $A.enqueueAction(action);		
	}
})