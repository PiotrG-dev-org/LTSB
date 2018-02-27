({
	onBoatClick : function(component, event, helper) {
	    var boat = component.get('v.boat');

        var boatSelectEvent = component.getEvent('boatselect');
        boatSelectEvent.setParams({
            'boatId' : boat.Id
        });
        boatSelectEvent.fire();

        var boatSelectedEvent = $A.get('e.c:BoatSelected');
        boatSelectedEvent.setParams({
            'boat' : boat
        });
        boatSelectedEvent.fire();
	}
})