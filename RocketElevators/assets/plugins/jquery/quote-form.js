var residential = $("#residential-q");
var commercial = $("#commercial-q");
var corporate = $("#corporate-q");
var hybrid = $("#hybrid-q");

$(function(){
    $("#type-building").change(function(){
        var building = $("#type-building option:selected").text();
        
        if(building == "Residential"){
        residential.removeClass("d-none");
        console.log(building);
}

else if(building == "Commercial"){
    commercial.removeClass("d-none");
    residential.addClass("d-none");
    console.log(building);
}

else if(building == "Corporate"){
    corporate.removeClass("d-none");
    commercial.addClass("d-none");
    console.log(building);
}

else if(building == "Hybrid"){
    hybrid.removeClass("d-none");
    corporate.addClass("d-none");
    console.log(building);
}
});
});