({
    doSearch : function(component, event, helper)  {
        var params = event.getParam('arguments');
        if(params) {
            var boatTypeId = params.boatTypeId;
            component.set("v.boatTypeId", boatTypeId);
            helper.onSearch(component);
        }
    }
})