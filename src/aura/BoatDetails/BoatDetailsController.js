/**
 * Created by Piotrek on 26.02.2018.
 */
({
    onBoatSelected : function(component, event, helper) {
        var boatData = event.getParam("boat");
        component.set('v.id', boatData.Id);

        var ldService = component.find("service");
        ldService.reloadRecord();
    },

    onRecordUpdated : function(component, event, helper) {

    }
})