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

	onBoatReviewAdded : function(component, event, helper) {
        //var tabSetComponent = component.find("tabset");
        //tabSetComponent.selectedTabId = "boatreviewtab";
        component.set("v.selectedTabId","boatreviewtab");
        component.find("boatreview").refresh();
    },

    onRecordUpdated : function(component, event, helper) {
        component.find("boatreview").refresh();
    }
})