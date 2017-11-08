(function () {
    
        var overrideCtx = {};
        overrideCtx.Templates = {};
        overrideCtx.Templates.Fields = {
            'TaskOutcome': { 
                'View': TaskOutcomeOverride 
            }
        };
    
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideCtx);
    
        })();
    
    function TaskOutcomeOverride(ctx) {
    
        var status = ctx.CurrentItem[ctx.CurrentFieldSchema.Name];
        //var rows = ctx.ListData.Row;
        console.log("Created by: " + ctx.CurrentItem["Author"][0].title);
        //console.log("1");
        //var str = $("#ID_DeleteItem").text();
        //console.log(str);
    
        if (status == "Approved")
        {
        return "<span style='color: green'>" + status + "</span>";
        }
    
        if (status == "Rejected")
        {
        return "<span style='color: red'>" + status + "</span>";
        } 
    }
    