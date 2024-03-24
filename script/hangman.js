// Draw Hangman based on wrong attempts
function drawHangman() {
    switch (wrongAttempts) {
        case 1:
            drawHead();
            break;
        case 2:
            drawBody();
            break;
        case 3:
            drawLeftArm();
            break;
        case 4:
            drawRightArm();
            break;
        case 5:
            drawLeftLeg();
            break;
        case 6:
            drawRightLeg();
            break;
    }
}

// Draw head
function drawHead() {
    ctx.beginPath();
    ctx.arc(150, 95, 25, 125* Math.PI / 180, 60* Math.PI / 180);
    ctx.arc(150, 120, 15,  10* Math.PI / 180, 200* Math.PI / 180);
    ctx.moveTo(150, 20);
    ctx.lineTo(150, 70);
    ctx.stroke();
//eye
    ctx.beginPath();
    ctx.arc(142, 95, 5,  0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(158, 95, 5,  0, Math.PI*2);
    ctx.fill();
//mouth with teeth
    ctx.beginPath();
    ctx.arc(150, 80,40 ,  80* Math.PI / 180, 105* Math.PI / 180);
    ctx.arc(150, 85,40 ,  108* Math.PI / 180, 75* Math.PI / 180, true);
    ctx.lineTo(157,120);
    ctx.moveTo(153,120);
    ctx.lineTo(153,125);
    ctx.moveTo(148,120);
    ctx.lineTo(148,125);
    ctx.moveTo(143,120);
    ctx.lineTo(143,125);
    ctx.stroke();
//nose
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(155, 110);
    ctx.lineTo(145, 110);
    ctx.lineTo(150, 100);
    ctx.stroke();

}

// Draw body
function drawBody() {
    ctx.beginPath();
    ctx.arc(150, 200, 60,  235* Math.PI / 180, 300* Math.PI / 180);
    ctx.lineTo(150, 150);
    ctx.lineTo(150, 160);
    ctx.lineTo(180, 168);
    ctx.lineTo(180, 175);
    ctx.lineTo(150, 170);
    ctx.lineTo(150, 175);
    ctx.lineTo(180, 183);
    ctx.lineTo(180, 193);
    ctx.lineTo(150, 183);
    ctx.lineTo(115, 193);
    ctx.lineTo(115, 183);
    ctx.lineTo(145, 175);
    ctx.lineTo(145, 170);
    ctx.lineTo(115, 175);
    ctx.lineTo(115, 168);
    ctx.lineTo(145, 160);
    ctx.lineTo(145, 150);
    ctx.lineTo(115, 150);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineTo(155, 200);
    ctx.lineTo(155, 215);
    ctx.lineTo(145, 215);
    ctx.lineTo(145, 200);
    ctx.lineTo(155, 200);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineTo(155, 220);
    ctx.lineTo(155, 235);
    ctx.lineTo(145, 235);
    ctx.lineTo(145, 220);
    ctx.lineTo(155, 220);
    ctx.stroke();
}

// Draw left arm
function drawLeftArm() {
    ctx.beginPath();
    ctx.moveTo(105, 150);
    ctx.lineTo(78, 123);
    ctx.arc(75,120,5,35* Math.PI / 180, 200* Math.PI / 180, true);
    ctx.arc(70,125,5,300* Math.PI / 180, 35* Math.PI / 180, true);
    ctx.lineTo(73, 128);
    ctx.lineTo(100, 155);
    ctx.moveTo(105, 150);
    ctx.arc(108,153,5,300* Math.PI / 180, 45* Math.PI / 180);
    ctx.arc(103,158,5,-5* Math.PI / 180, 200* Math.PI / 180);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(63,110,7,0, 2* Math.PI );
    ctx.stroke();
}

// Draw right arm
function drawRightArm() {
    ctx.save();
    ctx.translate(345,50);
    ctx.rotate(90 * Math.PI/180);
    ctx.beginPath();
    ctx.moveTo(105, 150);
    ctx.lineTo(78, 123);
    ctx.arc(75,120,5,35* Math.PI / 180, 200* Math.PI / 180, true);
    ctx.arc(70,125,5,300* Math.PI / 180, 35* Math.PI / 180, true);
    ctx.lineTo(73, 128);
    ctx.lineTo(100, 155);
    ctx.moveTo(105, 150);
    ctx.arc(108,153,5,300* Math.PI / 180, 45* Math.PI / 180);
    ctx.arc(103,158,5,-5* Math.PI / 180, 200* Math.PI / 180);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(63,110,7,0, 2* Math.PI );
    ctx.stroke();
    ctx.restore();
}

// Draw left leg
function drawLeftLeg() {
    ctx.save();
    ctx.translate(-40,360);
    ctx.rotate(-90 * Math.PI/180);
    ctx.beginPath();
    ctx.moveTo(105, 150);
    ctx.lineTo(78, 123);
    ctx.arc(75,120,5,35* Math.PI / 180, 200* Math.PI / 180, true);
    ctx.arc(70,125,5,300* Math.PI / 180, 35* Math.PI / 180, true);
    ctx.lineTo(73, 128);
    ctx.lineTo(100, 155);
    ctx.moveTo(105, 150);
    ctx.arc(108,153,5,300* Math.PI / 180, 45* Math.PI / 180);
    ctx.arc(103,158,5,-5* Math.PI / 180, 200* Math.PI / 180);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(63,110,7,0, 2* Math.PI );
    ctx.stroke();
    ctx.restore();
}

// Draw right leg
function drawRightLeg() {
    ctx.save();
    ctx.translate(290,410);
    ctx.rotate(180 * Math.PI/180);
    ctx.beginPath();
    ctx.moveTo(105, 150);
    ctx.lineTo(78, 123);
    ctx.arc(75,120,5,35* Math.PI / 180, 200* Math.PI / 180, true);
    ctx.arc(70,125,5,300* Math.PI / 180, 35* Math.PI / 180, true);
    ctx.lineTo(73, 128);
    ctx.lineTo(100, 155);
    ctx.moveTo(105, 150);
    ctx.arc(108,153,5,300* Math.PI / 180, 45* Math.PI / 180);
    ctx.arc(103,158,5,-5* Math.PI / 180, 200* Math.PI / 180);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(63,110,7,0, 2* Math.PI );
    ctx.stroke();
    ctx.restore();
}
