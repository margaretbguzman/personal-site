function animateit(){
    text = document.getElementById("to-animate").value;
    wrapper = document.getElementById("text-wrapper");
    body = document.getElementById("body");
    txtSize = document.getElementById("txt-size").value;
    animationType = document.getElementById("animation-type").value;
    txtColor = document.getElementById("txt-color").value;
    bgColor = document.getElementById("bg-color").value;
    font = document.getElementById("font").value;
    bg = document.getElementById("wrapflex");
    console.log("txtcolor: "+txtColor+", bgcolor: "+bgColor);
    if (text.length > 0){
        console.log("animating word \""+text+"\" length "+text.length);
        //clear animation property for wrapper and each child of the wrapper
        wrapper.style.animation = "";
        bg.style.backgroundColor = bgColor;
        for (i=0; i<wrapper.childNodes.length; i++){
            wrapper.childNodes[i].animation = "";
        }
        //erase any previous input
        if (wrapper.childNodes.length>0){
            console.log("erasing previous input");
            while (wrapper.firstChild) {
                wrapper.removeChild(wrapper.firstChild);
            }
        }
        // configure then add each letter as a separate p element to the wrapper
        for (i=0; i<text.length; i++){
            console.log("creating element for letter \""+text[i]+"\"");
            var letter = document.createElement("p");
            var letterId = "l"+i;
            letter.setAttribute("id", letterId);
            letter.innerHTML = text[i];
            letter.style.display = "inline-block";
            letter.style.fontSize = txtSize+"px";
            letter.style.fontFamily = font;
            letter.style.color = txtColor;
            letter.style.marginTop = txtSize/7+"px";
            letter.style.marginBottom = txtSize/7+"px";
            if (text[i] == " "){
                console.log("adding a space");
                letter.style.padding = txtSize/7+"px";
            }
            wrapper.append(letter);
        }
        switch (animationType){
            case "spin":
                wrapper.style.display = "inline-block";
                //the for loop makes each letter start animating at a different time
                for (i=0; i<wrapper.childNodes.length; i++){
                    console.log("adding animation SPIN to "+i+"th child of wrapper");
                    wrapper.childNodes[i].style.animation = "spin 1s ease-out "+i/10+"s";
                }
                break;
            case "bounce":
                wrapper.style.display = "inline-block";
                for (i=0; i<wrapper.childNodes.length; i++){
                    console.log("adding animation BOUNCE to "+i+"th child of wrapper");
                    wrapper.childNodes[i].style.animation = "bounce 1s ease-out "+i/10+"s";
                }
                break;
            case "squeeze":
                wrapper.style.display = "inline-block";
                for (i=0; i<wrapper.childNodes.length; i++){
                    console.log("adding animation SQUEEZE to "+i+"th child of wrapper");
                    wrapper.childNodes[i].style.animation = "squeeze 1s ease-in-out "+i/10+"s";
                }
                break;
            case "twirl":
                wrapper.style.display = "block";
                //makes each letter start twirling at a different time
                for (i=0; i<wrapper.childNodes.length; i++){
                    wrapper.childNodes[i].style.position = "relative";
                    wrapper.childNodes[i].style.left = i*txtSize;
                    console.log("setting "+i+"th child of wrapper left pos to "+i*txtSize);
                    wrapper.childNodes[i].style.top = 0;
                    console.log("adding animation TWIRL to "+i+"th child of wrapper");
                    setInterval(new_frame_twirl, 3000, wrapper.childNodes[i], 20);
                    intID = setInterval(new_frame_twirl, 3000, wrapper.childNodes[i], 20);
                    setTimeout(clearInterval(intID), 10000);
                }
                break;
        }
    } else {
        alert("You didn't enter any text!");
    }
}

function new_frame_twirl(elem, radius){
    console.log("animating new frame for "+elem);
    x=elem.style.left.replace(/[^0-9]/g, "");
    console.log("left pos #: "+x);
    y=elem.style.top.replace(/[^0-9]/g, "");
    console.log("top pos #: "+y);
    x++;
    y = Math.ceil(Math.sqrt(radius-x^2));
    elem.style.left = x+"px";
    console.log("new left pos #: "+x);
    console.log("new top pos #: "+y);
    elem.style.top = y+"px";
}
