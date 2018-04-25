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
                displayResults(response);
            } 
        });  
}

function displayResults(songs){
/* This function uses "getAPI() and uses a FORLOOP to APPEND it to the page"*/
    for(var i =0; i<=songs.length; i++){
        $("#results").append(`<div class="row" id="song` + i + `">
                <div class="col-sm-4"  id="image` + i +`"></div>
                <div class="col-sm-8" id="des` + i +`">
                  <div id="title` + i +`">
                   
                  </div>
                  <div id="art` + i +`">
                    
                  </div>
                  <div id="des` + i +`">
                    
                  </div>
                  <div id="link` + i +`">
                   
                  </div>
                </div>
            </div>`);
        $("#title" +i).append("<div id='title"+ i+"'"+">"+"<h3>"+ songs[i].title + "</h3>"+"</div>");
        $("#image" +i).append("<div id='image"+ i+"'"+">"+"<img src=" + songs[i].artwork_url + ">"+"</div>");
        $("#des" +i).append("<div id='des"+ i+"'"+">"+"<p>" +"Description: " + songs[i].description + "</p>"+"</div>");
        $("#artist" +i).append("<div id='artist"+ i+"'"+">"+"<h4>" + songs[i].username + "</h4>"+"</div>");
        $("#link" +i).append("<div id='link"+ i+"'"+">"+"<a href="+'"' + songs[i].permalink_url+'"'+">"+"Click Here"+"</a>"+"</div>");
        console.log("times");
    }
}  

$(document).ready(function(){
    /* Input Button Click Function*/
    $("button").click(function(){
        var a = getUserInput();
        getAPI(a);
        
    });
});