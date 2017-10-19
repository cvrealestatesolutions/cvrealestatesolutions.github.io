function commafy(num) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}
$(document).ready(function() {


    $(".dynamic-input").each(function() {

        $(this).on("input", function() {
            origin = $(this);

            $(".dynamic-" + $(this).data("id")).each(function() {
                $(this).text($(origin).val());


            });
            $(".number").each(function() {
                $($(this)).text(commafy($($(this)).text()))
            })

        })
    })


    $(".dynamic-button").each(function() {
        $(this).on("click", function() {
$($("." + $($(this)[0]).data("id") + "-parent")[0]).text($($(this)[0]).data("id").toUpperCase() + ": " + $($(this)[0]).text())
if($($(".dynamic-" + $($(this)[0]).data("id"))[0]).hasClass("show-title")){
$($(".dynamic-" + $($(this)[0]).data("id"))[0]).text($($(this)[0]).data("id").toUpperCase() + ": " + $($(this)[0]).text())  
}
else{
$($(".dynamic-" + $($(this)[0]).data("id"))[0]).text($($(this)[0]).text())    
}
       
        })
    })

})