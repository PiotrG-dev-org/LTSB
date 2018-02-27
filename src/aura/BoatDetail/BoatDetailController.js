/**
 * Created by Piotrek on 27.02.2018.
 */
({
    doInit: function (component, event, helper) {
        if($A.get("e.force:navigateToSObject")){
            component.set("v.fullDetailsButtonRenderd",true);
        }
    },

    onFullDetails : function(component, event, helper) {
        var navEvent = $A.get("e.force:navigateToSObject");

        navEvent.setParams({
              recordId: component.get("v.boat").Id,
              slideDevName: "detail"
         });

         navEvent.fire();
    }
})