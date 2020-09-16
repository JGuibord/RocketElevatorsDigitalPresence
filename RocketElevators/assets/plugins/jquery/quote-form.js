$(document).ready(function(){
    console.log("Ready!");
});

var residential = $("#residential-q");
var commercial = $("#commercial-q");
var corporate = $("#corporate-q");
var hybrid = $("#hybrid-q");

$(function(){
    $("#type-building").change(function(){
        var building = $("#type-building option:selected").text();
        
        if(building == "Residential"){
        residential.removeClass("d-none");
        commercial.addClass("d-none");
        corporate.addClass("d-none");
        hybrid.addClass("d-none");
        console.log(building); 
        }
        
        else if(building == "Commercial"){
        commercial.removeClass("d-none");
        residential.addClass("d-none");
        corporate.addClass("d-none");
        hybrid.addClass("d-none");
        console.log(building);
        }

        else if(building == "Corporate"){
        corporate.removeClass("d-none");
        commercial.addClass("d-none");
        residential.addClass("d-none");
        hybrid.addClass("d-none");
        console.log(building);
        }

        else if(building == "Hybrid"){
        hybrid.removeClass("d-none");
        corporate.addClass("d-none");
        residential.addClass("d-none");
        commercial.addClass("d-none");
        console.log(building);
        }
});


function ResidentialData() {
    var RESapartments = parseInt($("#num-apartments").val(), 10);
    var RESfloors = parseInt($("#num-floors").val(), 10);
    var RESavgAptFlr = Math.ceil(RESapartments / RESfloors);
    var RESelevPerAptPerFlr = Math.ceil(RESavgAptFlr / 6);
    var REScolumnPerFlr = RESfloors / 20;
    var RESaddColumn = Math.floor(REScolumnPerFlr + 1);
    var REStotalElev = Math.ceil(RESaddColumn) * RESavgAptFlr;
    var RESelevCost = REStotalElev * SelectElevatorLine() ||0;
    var RESinstallFees = REStotalElev * GetInstallationFees() ||0;
    var REStotalPrice = RESelevCost * RESinstallFees ||0;

console.log(REStotalPrice);

$("#sub-total").text("$" + new Intl.NumberFormat().format(REStotalPrice.toFixed(2)));
console.log(sub-total);
};
})