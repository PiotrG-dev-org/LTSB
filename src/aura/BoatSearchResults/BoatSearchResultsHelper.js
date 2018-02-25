({
	onSearch : function(component) {
        var selectedBoatTypeId = component.get("v.boatTypeId");

        var action = component.get("c.getBoats");

        action.setParams({
            boatTypeId : selectedBoatTypeId
        });

        action.setCallback(this, function(result) {
            var status = result.getState();
            if (status === 'SUCCESS') {
                var resultData = result.getReturnValue();
                component.set("v.boats", resultData);
            }
            else {
            	console.log('Something went wrong '+result.getError());
            }
        });

        $A.enqueueAction(action);
	}
})