$(document).ready(function(){
    console.log("Ready!");

    var residential = $("#residential-q");
    var commercial = $("#commercial-q");
    var corporate = $("#corporate-q");
    var hybrid = $("#hybrid-q");

    $("#type-building").change(function(){
        var building = $("#type-building option:selected").text();
        
        if(building == "Residential"){
        residential.removeClass("d-none");
        commercial.addClass("d-none");
        corporate.addClass("d-none");
        hybrid.addClass("d-none");
        console.log(building); 
        ResidentialData();
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

    $("input:radio").change(function(){
        var services = $("#services option:selected").val();

       if (services == "standard") {
        var SERVICES = 7565;
       }

       if (services == "premium") {
        var SERVICES = 12345;
       }

       if (services == "excelium") {
        var SERVICES = 15400;
       }
    }); 

    function ResidentialData() {
        var RESapartments = parseInt($("#num-apartments").val(), 10);
        var RESfloors = parseInt($("#num-floors").val(), 10);
        var RESavgAptFlr = Math.ceil(RESapartments / RESfloors);
        var REScages = Math.ceil(RESavgAptFlr / 6);
        var REScolumnPerFlr = Math.ceil(RESfloors / 20);
        var REStotalElev = Math.ceil(REScages * REScolumnPerFlr);
        var REStotalPrice = REStotalElev * 2;

        console.log(REStotalElev);

        $("#total").val("$" + new Intl.NumberFormat().format(REStotalPrice.toFixed(2)));
    };
    

    function CommercialData() {
        var RESapartments = parseInt($("#num-apartments").val(), 10);
        var RESfloors = parseInt($("#num-floors").val(), 10);
        var RESavgAptFlr = Math.ceil(RESapartments / RESfloors);
        var RESelevPerAptPerFlr = Math.ceil(RESavgAptFlr / 6);
        var REScolumnPerFlr = RESfloors / 20;
        var RESaddColumn = Math.floor(REScolumnPerFlr + 1);
        var REStotalElev = Math.ceil(RESaddColumn) * RESavgAptFlr;
        var RESelevCost = REStotalElev;
        var RESinstallFees = REStotalElev;
        var REStotalPrice = RESelevCost * RESinstallFees ||0;

        console.log(REStotalPrice);

        $("#sub-total").text("$" + new Intl.NumberFormat().format(REStotalPrice.toFixed(2)));
    
    }
});