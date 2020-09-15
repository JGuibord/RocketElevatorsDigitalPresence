$(document).ready(function () {
    console.log("test")
    $('.building_type').hide();
    $('#selectMe').change(function () {
        $('building_type').hide();
        $('#'+$(this).val()).show();
    })
});

$("#residential-q").hide();
$("#commercial-q").hide();
$("#corporate-q").hide();
$("#hybrid-q").hide();