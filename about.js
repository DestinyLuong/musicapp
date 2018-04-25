$(document).ready(function(){
    /* Input Button Click Function*/
    $("#whatAreWe").click(function(){
     var a = $("#WhatWeDO").toggle();
        getAPI(a);
    });
});
$(document).ready(function(){
    /* Input Button Click Function*/
    $("#HowItBegan").click(function(){
     var a = $("#started").toggle();
        getAPI(a);
    });
});

