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

        var plotMapMarkerEvent = $A.get('e.c:PlotMapMarker');
        plotMapMarkerEvent.setParams({
            'lat' : '29.229702',
            'long' : '-81.0111687',
            'sObjectId' : boat.Id,
            'label' : boat.Name
        });
        plotMapMarkerEvent.fire();
	}
})