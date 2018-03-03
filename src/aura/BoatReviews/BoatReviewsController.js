({
    doInit : function(component, event, helper) {
        helper.onInit(component, event, helper);
    },

    onUserInfoClick : function(component, event, helper) {
        var selectedItem = event.currentTarget;
        var userId = selectedItem.dataset.userId;
        var navEvent = $A.get("e.force:navigateToSObject");

        navEvent.setParams({
              recordId: userId,
              slideDevName: "detail"
         });

         navEvent.fire();
    }
})