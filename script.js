let pauseBool = false;
let repeater;

function durationNum(){
    let num = Math.random() * 1.5 + 0.5;
    return num + "s"
}

function elementNum(){
    let num = Math.floor(Math.random() * 6) + 1;
    let res;
    switch(num){
        case 1:
            res = 'big-square'; 
            break;
        case 2:
            res = 'big-circle';
            break;
        case 3:
            res = 'big-triangle';
            break;
        case 4:
            res = 'small-circle';
            break;
        case 5: 
            res = 'small-triangle';
            break;
        case 6:
            res = 'small-square';
            break;
    }
    return res;
}

function scaleNum(){
    let num = Math.random() + 0.5;
    return "scale("+ num + ")"
}

function rotateNum(){
    let num = Math.floor(Math.random() * 359) + 1;
    return "rotate("+ num + "deg)"
}

function translateNum(){
    let num = Math.floor(Math.random() * 300) - 150;
    let numd = Math.floor(Math.random() * 300) - 150;
    return "translate("+ num + "px, " + numd + "px)"
}

function transformChoice(){
    let num = Math.floor(Math.random() * 3) + 1;
    let res;
    switch(num){
        case 1:
            res = scaleNum();
            break;
        case 2:
            res = rotateNum();
            break;
        case 3:
            res = translateNum();
            break;
    }
    return res;
}


function startAnimation(){
    if(!pauseBool){
        let elementId = elementNum();

        document.getElementById(elementId).style.transitionDuration = durationNum();
        document.getElementById(elementId).style.transform = transformChoice();

        repeater = setTimeout(startAnimation, 100);
    }
    pauseBool = false;
}

function stopAnimation(){
    pauseBool = true;
}