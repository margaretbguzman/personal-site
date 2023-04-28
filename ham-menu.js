window.onload = closeham; //load page with menu closed

function closeham(){
    document.getElementById("ham-menu").style.display = "none";
}

function toggleham(){
    ham = document.getElementById("ham-menu");
    console.log("beginning height: "+ham.style.height);
    hamLinks = ham.getElementsByTagName("a");
    hamHeightPx = hamLinks.length*57;
    if (ham.style.display == "block"){ //if menu open, close it
        //hide each link before beginning the animation
        for (i=0; i<hamLinks.length; i++){
            hamLinks[i].style.display = "none";
        }
        //begin close animation
        ham.style.height = "0px";
        console.log("height after closing: "+ham.style.height);
        setTimeout(function(){
            ham.style.display = "none";
        },500);
    } else { //if menu closed, open it
        ham.style.display = "block"; //display closed menu
        ham.style.height = hamHeightPx+"px";//begin open animation
        console.log("height after opening: "+ham.style.height);
        //display each link at the end of the animation
        for (i=0; i<hamLinks.length; i++){
            hamLinks[i].style.display = "inline-block";
        }
    }
}
