window.onload = closeham; //load page with menu closed

function closeham(){
    document.getElementById("ham-menu").style.display = "none";
}

function toggleham(){
    ham = document.getElementById("ham-menu");
    if (ham.style.display == "block"){ //if menu open
        ham.style.display = "none";//close it
    } else { //if menu closed
        ham.style.display = "block";//open it
    }
}