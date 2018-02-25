({
	onBoatClick : function(component, event, helper) {
        var compEvent = component.getEvent("boatselected");
        var boatId = component.get("v.boat").Id;

        compEvent.setParams({
            "boatId" : boat
        });

        compEvent.fire();
	}
})