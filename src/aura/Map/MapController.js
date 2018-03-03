({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },

    onPlotMapMarker : function(component, event, handler) {
        var latitude = event.getParam("lat");
        var longitude = event.getParam("long");

        component.set("v.location", {
            "lat": latitude,
            "long":longitude
        });
    }
})