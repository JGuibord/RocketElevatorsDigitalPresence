$(document).ready(function () {
    console.log("test")
    $('.building_type').hide();
    $('#selectMe').change(function () {
        $('.building_type').hide();
        $('#'+$(this).val()).show();
    })
});


$("#residential-q").hide();
$("#commercial-q").hide();
$("#corporate-q").hide();
$("#hybrid-q").hide();

$(".building_type").on("change", function(){
    var chooses = $("#group option:selected").val();

    if(chooses == "Residential" ){
        $("#residential-q").show();
        $("#commercial-q").hide();
        $("#corporate-q").hide();
        $("#hybrid").hide();
    };