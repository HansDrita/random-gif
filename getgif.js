"use strict"

var gifArray = ["baby.gif", "chopper.gif", "doggy.gif", "monkey.gif", "sweater.gif", "wat.gif"];
var path = 'gifs/';

document.addEventListener('keydown', getRandomGif);

function getRandomGif() {
	console.log("blub");
	const img_element = document.getElementById('img');
    var num = Math.floor( Math.random() * gifArray.length );
    var gif = gifArray[ num ];
    
	img_element.setAttribute("src", path + gif);
}