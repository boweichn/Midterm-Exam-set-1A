var srcStr = "";
var index = 0;
console.log("hi")

var txtStr = "Title";
var descStr = "Description";
var colorStr = "";

/*-----------------------Image INPUT------------------*/
function transferInput() {
    var val = document.getElementById("imgInput").value;
    //creat default pictures//
    
    if(val == "horse"){
        srcStr = "url(img/bg1.jpg)";
    } else if(val == "night"){
        srcStr = "url(img/bg2.jpg)";
    } else if(val == "mountain"){
        srcStr = "url(img/bg3.jpg)";
    } else if(val.includes("epic")){
        srcStr = "url(img/bg4.jpg)";
    }
    
}

/*-----------------------DISPLAY----------------*/
function changeImage() {
    document.getElementById("backg").style.backgroundImage = srcStr;
}

/*----------------------Title and desc inputs-------------------*/
function titleInput() {
    var val = document.getElementById("titleInput").value;
    txtStr = val;
}

function descInput() {
    var val = document.getElementById("descInput").value;
    descStr = val;
}

/*-----------------------DISPLAY TEXT----------------*/
function changetitletxt() {
    document.getElementById("titleText").innerHTML = txtStr;
}

function changedesctxt() {
    document.getElementById("descText").innerHTML = descStr;
}

/*------------------------Color Input--------------*/
function colorInput() {
    var val = document.getElementById("txtColor").value;
    colorStr = val;
}

/*-----------------------COLOR DISPLAY----------------*/
function changecolortxt() {
    document.getElementById("titleText").style.color = colorStr;
    document.getElementById("descText").style.color = colorStr;
}

/*------------------------Moving Image----------------*/
var horpos = 0
var vertpos = 0

function moveImg(theKey){
    
    console.log(theKey);
    if (theKey == 37){
        horpos = horpos - 10;
        document.getElementById("backg").style.left = horpos + 'px';
    } else if (theKey == 38){
        vertpos = vertpos - 10;
        document.getElementById("backg").style.top = vertpos + 'px';
    } else if (theKey == 39){
        horpos = horpos + 10;
        document.getElementById("backg").style.left = horpos + 'px';
    } else if (theKey == 40){
        vertpos = vertpos + 10;
        document.getElementById("backg").style.top = vertpos + 'px';
    }
};

/*--------------------------Change Height-------------------*/
var hei = 300

function heightChange(theKey){
    
    if (theKey == 107){
        hei = hei + 10;
        document.getElementById("backg").style.height = hei + 'px';
    } else if (theKey == 109){
        hei = hei - 10;
        document.getElementById("backg").style.height = hei + 'px';
    }
};

/*----------------create more divs-------------------*/

function createDiv(){

    
    var ndiv = document.createElement("div");
    var ndiv2 = document.createElement("div");
    var ndiv3 = document.createElement("div");
    
    var ndivh1 = document.createElement("h1");
    var ndivh3 = document.createElement("h3");

    ndiv.id = "backg";
    ndiv2.id = "title";
    ndiv3.id = "desc";
    ndivh1.id = "titleText";
    ndivh3.id = "descText";

    ndiv.appendChild(ndiv2);
    ndiv.appendChild(ndiv3);
    ndiv2.appendChild(ndivh1);
    ndiv3.appendChild(ndivh3);

    document.getElementById("display").appendChild(ndiv);
    ndivh1.innerHTML = document.getElementById("titleText").innerHTML;
    ndivh3.innerHTML = document.getElementById("descText").innerHTML;
    document.getElementById("backg").style.backgroundImage = srcStr;
    document.getElementById("titleText").style.color = colorStr;
    document.getElementById("descText").style.color = colorStr;

}
    

/*-----------------------GRID IMAGE--------------*/
/*function createImage(){
    //<img />//
    var newImg = document.createElement("img");
    
    //<img /> into <div id="gridImage"></div>
    //<div id="gridImage"><img /></div>
    document.getElementById("gridImage").appendChild(newImg);
    newImg.src = srcStr;
    
    //give it id and class for styles
    newImg.id = "newImageId";
    newImg.id = "imgClass";
    
    
}*/

/*function createDiv() {
    var newDiv = document.createElement("div");
    var grabDiv = document.getElementById("thisDiv");
    
    document.getElementById("gridImage").appendChild(newDiv);
    newDiv.id = "thisDiv";
    newDiv.style.backgroundImage = "url("+srcStr+")";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.backgroundSize = "cover";
    newDiv.style.display = "inline-block";
    newDiv.id = "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-1";    
    
    statusDiv.innerHTML = "You've created a <b>new</b> div!"+srcStr;
}*/
    
/*-----------------------INTERACTION------------*/
document.getElementById("imgInput").addEventListener("keyup", function(ev){
    console.log(ev.keyCode);
    if(ev.keyCode == 13 ){
        transferInput();
        changeImage();
        /*createImage();
        createDiv();*/
    }
});

document.getElementById("titleInput").addEventListener("keyup", function(ev){
    console.log(ev.keyCode);
    titleInput();
    changetitletxt();
});

document.getElementById("descInput").addEventListener("keyup", function(ev){
    console.log(ev.keyCode);
    descInput();
    changedesctxt();
});

document.getElementById("txtColor").addEventListener("change", function(ev){
    console.log(ev.keyCode);
    colorInput();
    changecolortxt();
})


document.body.addEventListener("keydown", function(ev){
    moveImg(ev.keyCode);
    heightChange(ev.keyCode);
    
});

document.getElementById("append").addEventListener("click", function(){
    createDiv();
    document.getElementById("backg").style.backgroundImage = srcStr;
    document.getElementById("titleText").style.color = colorStr;
    document.getElementById("descText").style.color = colorStr;
});

document.getElementById("menu").addEventListener("click", function(){
    document.getElementById("controls").style.bottom = 5 + "px";
});