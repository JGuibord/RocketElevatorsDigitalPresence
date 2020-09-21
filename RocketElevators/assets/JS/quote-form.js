$(document).ready(function(){
    $("#numElev, #reqElev, #elevPriceUnit, #elevTotal, #installationFee, #total").attr('readonly', true);
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


    $("input").keyup(function(){
        ResidentialData();
    });


    function test() {
    console.log(priceUnit);
    };
       
        $('#standard').on('click', function () {
            document.getElementById('elevPriceUnit').value = (7565).toFixed(2) + " $";
            $('#elevPriceUnit').html(elevPriceUnit.value);
            priceUnit = 7565;
            test();
            
        });
    
        $('#premium').on('click', function () {
            document.getElementById('elevPriceUnit').value = (12345).toFixed(2) + " $";
            $('#elevPriceUnit').html(elevPriceUnit.value);
            priceUnit = 12345;
            test();
        });
    
        $('#excelium').on('click', function () {
            document.getElementById('elevPriceUnit').value = (15400).toFixed(2) + " $";
            $('#elevPriceUnit').html(elevPriceUnit.value);
            priceUnit = 15400;
            test();
            
    });



    function ResidentialData() {
        var RESapartments = parseInt($("#num-apartments").val(), 10);
        var RESfloors = parseInt($("#num-floors").val(), 10);
        var RESavgAptFlr = Math.ceil(RESapartments / RESfloors);
        var REScages = Math.ceil(RESavgAptFlr / 6);
        var REScolumnPerFlr = Math.ceil(RESfloors / 20);
        var REStotalElev = Math.ceil(REScages * REScolumnPerFlr);
        
        document.getElementById('recommendedElev').value = '';
        $('#recommendedElev').html(REStotalElev);
        
        var totalPrice = elevPriceUnit * REStotalElev;
        document.getElementById('total').value = '';
        $('#total').html(totalPrice);

        console.log(totalPrice);

        $("#total").val("$" + new Intl.NumberFormat().format(totalPrice.toFixed(2)));
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
    };
});