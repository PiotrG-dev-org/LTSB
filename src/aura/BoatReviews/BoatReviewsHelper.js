/**
 * Created by Piotrek on 03.03.2018.
 */
({
    onInit : function(component, event, helper) {
        var action = component.get("c.getAll");

        action.setParams({
            "boatId":component.get("v.boat.Id")
        });

        action.setCallback(this,function (response) {
            var state = response.getState();
            if(state==="SUCCESS"){
                var boatReviews = response.getReturnValue();
                component.set("v.boatReviews",boatReviews);
            }
            else {
                console.log('Error during getting boat reviews');
            }
        });

        $A.enqueueAction(action);
    }
})