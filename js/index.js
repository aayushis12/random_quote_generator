var colors=['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var images=["http://publicdomainarchive.com/wp-content/uploads/2016/01/public-domain-images-free-stock-photos-002-1000x667.jpg","http://hddesktopwallpapers.in/wp-content/uploads/2015/11/images.jpg","http://hdwallpapershdpics.com/wp-content/uploads/2015/10/6914793-tropical-beach-images.jpg","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-zKT_YmYxS568dScmKmTavTX6cTbCQSzcceFetlzHd_cy7-DH","https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/03/1458289957powerful-images3.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz9FpRVpejHIwZ2WXpeTgxeQ4UFfoNvWUj-Z5r4aKk37AvzymZ"];

var currentAuthor="";
var currentQuote="";
$(document).ready(function(){
	getQuote();
  $("#getMessage").on("click",function(){
    getQuote();
    $(".message").effect("bounce",{times:1},0);  
  });
 
   // move();
  });

  
  function getQuote(){
		$.ajax({
	  headers:{ 
		  "X-Mashape-Key":"xE5Raw3acMmsh4dpp6HEk5WSbJtTp1X9TL3jsnue3VRzr5vNNa",
	   Accept: "application/json",
		  "Content-Type": "application/x-www-form-urlencoded"
	  },
		url:"https://andruxnet-random-famous-quotes.p.mashape.com/?cat=",
		success: function(response){
			 //alert("hey");
		  //console.log("bleh");
		  var r=JSON.parse(response);
		  currentQuote=r.quote;
		  currentAuthor=r.author;
		   $("#author").html(r.author);
		  $("#message").html(r.quote);
		}
	  },0);
      var color=Math.floor(Math.random()*colors.length);
  $(".test").animate({
      color:colors[color],
      color:colors[color]
    },0);  
    
    var image=Math.floor(Math.random()*images.length);
    $("html body").css({
      backgroundImage:"url("+images[image]+")",
      backgroundRepeat:'no-repeat',
      backgroundSize:'100% 100%',
      image:images[image]
    },0);
  }