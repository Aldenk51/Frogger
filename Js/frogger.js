var canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
var rightPressed = upPressed = downPressed = leftPressed = false;
var death = 0;
var score = 0;
var x = 250;
y = 450;
width = height = 50;
frog = new Image();
frog.src = "Img/frog.png";

car11 = car12 = new Image();
car11.src = car12.src = "Img/redcar.png";
carY1 = 383;
carWidth1 = carHeight1 = 100;
carX11 = -100;
carX12 = 200;

car21 = car22 = car23 = new Image();
car21.src = car22.src = car23.src = "Img/bluecar.png";
carY2 = 329
carWidth2 = carHeight2 = 100;
carX21 = 55;
carX22 = 250;
carX23 = 445;

car3 = new Image();
car3.src = "Img/pinkcar.png";
carY3 = 280;
carWidth3 = carHeight3 = 100;
carX3 = 0;

car41 = car42 = new Image();
car41.src = car42.src = "Img/greencar.png";
carY4 = 233;
carWidth4 = carHeight4 = 100;
carX41 = -100;
carX42 = 200;

log11 = log12 = log13 = new Image();
log11.src = log12.src = log13.src = "Img/log.png";
logY1 = 125;
logWidth1 = 100;
logHeight1 = 100;
logX11 = 0;
logX12 = 230;
logX13 = 450;

log2 = new Image();
log2.src = "Img/logleft.png";
logY2 = 75;
logWidth2 = 250;
logHeight2 = 100;
logX2 = 0;

log31 = log32 = new Image();
log31.src = log32.src = "Img/log.png";
logY3 = 25;
logWidth3 = 100;
logHeight3 = 100;
logX31 = 0;
logX32 = 300;

document.addEventListener('keydown', keyDownHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 37) {
        if(x > 49) {
        	x -= 50;
        }
        frog.src = "Img/frog-left.png";
    }
    if(e.keyCode == 38) {
        if(y > 0) {
       		y -= 50;
        }
        frog.src = "Img/frog.png";
    }
    if(e.keyCode == 39) {
        if( x < 451) {
        	x += 50;
        }
        frog.src = "Img/frog-right.png";
    }
    if(e.keyCode == 40) {
        if(y < 450) {
        	y += 50;
        }
        frog.src = "Img/frog-back.png";
    }
}


function drawFrog() {
    context.drawImage(frog, x, y, width, height);
}

function drawCar11() {
    context.drawImage(car11, carX11, carY1, carWidth1, carHeight1);
    if(carX11 < 550) {
        carX11 += 4;
    } else {
        carX11 -= 600;
    }
}
    
function drawCar12() {
    context.drawImage(car12, carX12, carY1, carWidth1, carHeight1);
    if(carX12 < 550) {
        carX12 += 4;
    } else {
        carX12 -= 600;
    }
}

function drawCar21() {
    context.drawImage(car21, carX21, carY2, carWidth2, carHeight2);
    if(carX21 > -85) {
        carX21 -= 3;
    } else {
        carX21 += 600;
    }
}

function drawCar22() {
    context.drawImage(car22, carX22, carY2, carWidth2, carHeight2);
    if(carX22 > -85) {
        carX22 -= 3;
    } else {
        carX22 += 600;
    }
}

function drawCar23() {
    context.drawImage(car23, carX23, carY2, carWidth2, carHeight2);
    if(carX23 > -85) {
        carX23 -= 3;
    } else {
        carX23 += 600;
    }
}

function drawCar3() {
    context.drawImage(car3, carX3, carY3, carWidth3, carHeight3);
    if(carX3 < 550) {
        carX3 += 7;
    } else {
        carX3 -= 600;
    }
}

function drawCar41() {
    context.drawImage(car41, carX41, carY4, carWidth4, carHeight4);
    if(carX41 > -85) {
        carX41 -= 4;
    } else {
        carX41 += 600;
    }
}

function drawCar42() {
    context.drawImage(car42, carX42, carY4, carWidth4, carHeight4);
    if(carX42 > -85) {
        carX42 -= 4;
    } else {
        carX42 += 600;
    }
}

function drawLog11() {
    context.drawImage(log11, logX11, logY1, logWidth1, logHeight1);
    if(logX11 < 550) {
        logX11 += 3;
    } else {
        logX11 -= 650;
    }
}

function drawLog12() {
    context.drawImage(log12, logX12, logY1, logWidth1, logHeight1);
    if(logX12 < 550) {
        logX12 += 3;
    } else {
        logX12 -= 650;
    }
}

function drawLog13() {
    context.drawImage(log13, logX13, logY1, logWidth1, logHeight1);
    if(logX13 < 550) {
        logX13 += 3;
    } else {
        logX13 -= 650;
    }
}

function drawLog2() {
    context.drawImage(log2, logX2, logY2, logWidth2, logHeight2);
    if(logX2 > -250) {
        logX2 -= 4;
    } else {
        logX2 += 790;
    }
}

function drawLog31() {
    context.drawImage(log31, logX31, logY3, logWidth3, logHeight3);
    if(logX31 < 550) {
        logX31 += 3;
    } else {
        logX31 -= 650;
    }
}

function drawLog32() {
    context.drawImage(log32, logX32, logY3, logWidth3, logHeight3);
    if(logX32 < 550) {
        logX32 += 3;
    } else {
        logX32 -= 650;
    }
}

function drawBackground() {
	context.fillStyle = "green";
	context.fillRect(0, 450, 550, 50);
	context.fillRect(0, 200, 550, 50);
	context.fillRect(0, 0, 550, 50);
	context.fillStyle = "black";
	context.fillRect(0, 250, 550, 200);
	context.fillStyle = "#0066FF";
	context.fillRect(0, 50, 550, 150);
	
	context.beginPath();
	context.moveTo(0, 350);
	context.lineTo(550.5, 350);
	context.strokeStyle = "yellow";
    context.setLineDash([0]);
	context.lineWidth = 7;
	context.stroke();
	
	context.beginPath();
	context.moveTo(0.5, 400);
	context.lineTo(550.5, 400);
	context.strokeStyle = "white";
	context.setLineDash([15, 20]);
	context.lineWidth = 4.5;
	context.moveTo(0.5, 300);
	context.lineTo(550.5, 300);
	context.strokeStyle = "white";
	context.setLineDash([15, 20]);
	context.lineWidth = 4.5;
	context.stroke();
}

function runOver() {
    var carsX = [carX11, carX12, carX21, carX22, carX23, carX3, carX41, carX42];
    var carsY = [carY1, carY1, carY2, carY2, carY2, carY3, carY4, carY4];
    for(i = 0; i < carsX.length; i ++) {
        if(carsX[i] <= x + 15 && carsX[i] + 60 >= x && carsY[i] + 30 >= y && carsY[i] <= y + 5) {
            y = 450;
            x = 250;
            frog.src = "Img/frog.png";
            death ++;
        }
    }
}

function float() {
    if(logX11 <= x + 50 && logX11 + 90 >= x && logY1 + 30 >= y && logY1 <= y + 20) {
        if(x < 500) {
            x += 3;
        }
    } else if(logX12 <= x + 50 && logX12 + 90 >= x && logY1 + 30 >= y && logY1 <= y + 20) {
        if(x < 500) {
            x += 3;
        }
    } else if(logX13 <= x + 50 && logX13 + 90 >= x && logY1 + 30 >= y && logY1 <= y + 20) {
        if(x < 500) {
            x += 3;
        }
    } else if(logX2 <= x + 35 && logX2 + 230 >= x && logY2 + 50 >= y && logY2 <= y + 15) {
        if(x > 0) {
            x -= 4;
        }
    } else if(logX31 <= x + 50 && logX31 + 90 >= x && logY3 + 30 >= y && logY3 <= y + 20) {
        if(x < 500) {
            x += 3;
        }
    } else if(logX32 <= x + 50 && logX32 + 90 >= x && logY3 + 30 >= y && logY3 <= y + 20) {
        if(x < 500) {
            x += 3;
        }
    } else if(y < 200 && y >= 50) {
            x = 250;
            y = 450;
            frog.src = "Img/frog.png";
            death++;
    }
}

function increaseScore() {
    if(y < 50) {
        score ++;
        x = 250;
        y = 450;
        frog.src = "Img/frog.png";
    }
}

function showInfo() {
    context.fillStyle="white";
    context.fillText("Deaths: " + (death), 0, 25);
    context.fillText("Score: " + (score), 0, 40);
}

function draw() {
    runOver();
    drawBackground();
    drawCar11();
    drawCar12();
    drawCar21();
    drawCar22();
    drawCar23();
    drawCar3();
    drawCar41();
    drawCar42();
    drawLog11();
    drawLog12();
    drawLog13();
    drawLog2();
    drawLog31();
    drawLog32();
    float();
    showInfo();
    increaseScore();
    drawFrog();
    requestAnimationFrame(draw);
}

draw();