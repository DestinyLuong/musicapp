/* global $ */

function getUserInput(input){
/*This function GETS and STORES the VALUE of the USER INPUT*/
var input = $("input").val();
 return "https://api.soundcloud.com/tracks?q="+input+"&client_id=5aa8e389ba4e24b6106af5159ab3e344"
}

function getURL(){
/*This function uses "getUserInput()" and MERGES it WITH the URL*/

}

function getAPI(a){
/* This function uses "getURL()" and GRAB the items and STORES the VALUE*/
$.ajax({
            url: a,
            method: "GET",
            success: function(response){
                for(var i =0; i<response.length; i++){
                    displayResults();
                }
            } 
        });  
}

function displayResults(songs){
/* This function uses "getAPI() and uses a FORLOOP to APPEND it to the page"*/
    $("#title").append("<h3>" + songs[0].title + "</h3>");
    $("#image").append("<img src=" + songs[0].artwork_url + ">");
    $("#des").append("<p>" + songs[0].description + "</p>");
    $("#artist").append("<h4>" + songs[0].username + "</h4>");
    $("#link").append("<a>" + songs[0].permalink_url + "</a>");
    
}  

$(document).ready(function(){
    /* Input Button Click Function*/
    $("button").click(function(){
        var a = getUserInput();
        getAPI(a);
        
    });
});