var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject = "";
var blockImageObject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerObject = Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img) {
        blockImageObject = Img;

        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockImageObject);
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)

    if(e.shiftKey == true && keyPressed == "187") {
        console.log("shift+mais pressionadas juntas (para aumentar o item)");
        blockImageWidth = blockImageWidth+10;
        blockImageHeight = blockImageHeight+10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }

    if(e.shiftKey == true && keyPressed == "189") {
        console.log("shift+menos pressionadas juntas (para aumentar o item)");
        blockImageWidth = blockImageWidth-10;
        blockImageHeight = blockImageHeight-10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }

    if(keyPressed == "38") {
        up();
    }
    if(keyPressed == "40") {
        down();
    }
    if(keyPressed == "37") {
        left();
    }
    if(keyPressed == "39") {
        right();
    }

    if(keyPressed == "78") {        //nuvem
        newImage("cloud.jpg");
    }
    if(keyPressed == "69") {        //verde escuro
        newImage("dark_green.png");
    }
    if(keyPressed == "84") {        //terra
        newImage("ground.png");
    }
    if(keyPressed == "76") {        //luz
        newImage("light_green.png");
    }
    if(keyPressed == "82") {        //roof ("parede")
        newImage("roof.jpg");
    }
    if(keyPressed == "77") {        //madeira
        newImage("trunk.jpg");
    }
    if(keyPressed == "85") {        //bloco luminoso (único)
        newImage("unique.png");
    }
    if(keyPressed == "80") {        //parede
        newImage("wall.jpg");
    }
    if(keyPressed == "65") {        //parede amarela
        newImage("yellow_wall.png");
    }   

    if(keyPressed == "8") {
        deleteSelectedObject()
    }
}

function up() {
    if(playerY >=40) {
        playerY = playerY - blockImageHeight;
        console.log("altura img do bloco = "+blockImageHeight);
        console.log("quando a tecla direcional cima for pressionada, X + "+playerX+", Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function down() {
    if(playerY <=370) {
        playerY = playerY + blockImageHeight;
        console.log("altura img do bloco = "+blockImageHeight);
        console.log("quando a tecla direcional baixo for pressionada, X + "+playerX+", Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function left() {
    if(playerX >=0) {
        playerX = playerX - blockImageWidth;
        console.log("altura img do bloco = "+blockImageWidth);
        console.log("quando a tecla direcional esquerda for pressionada, X + "+playerX+", Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function right() {
    if(playerX <=800) {
        playerX = playerX + blockImageWidth;
        console.log("altura img do bloco = "+blockImageWidth);
        console.log("quando a tecla direcional esquerda for pressionada, X + "+playerX+", Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function deleteSelectedObject() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
        canvas.remove(activeObject);
    }
}
