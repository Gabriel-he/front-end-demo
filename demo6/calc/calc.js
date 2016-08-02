var numTmp = "";
var numAnswer = "";
var operator = "";

var eAnswer = document.getElementById('outputArea');


var ebtnClear = document.getElementById('btnClear');
console.log(document.getElementById('btnClear'));
var ebtnSwitch = document.getElementById('btnSwitch');
var ebtnCompletation = document.getElementById('btnCompletation');
var ebtnReciprocal = document.getElementById('btnReciprocal');
var ebtnSqr = document.getElementById('btnSqr');
var ebtnSin = document.getElementById('btnSin');
var ebtnCos = document.getElementById('btnCos');
var ebtnMinus = document.getElementById('btnMinus');
var ebtnPlus = document.getElementById('btnPlus');
var ebtn7 = document.getElementById('btn7');
var ebtn8 = document.getElementById('btn8');
var ebtn9 = document.getElementById('btn9');
var ebtn4 = document.getElementById('btn4');
var ebtn5 = document.getElementById('btn5');
var ebtn6 = document.getElementById('btn6');
var ebtnMultiply = document.getElementById('btnMultiply');
var ebtn1 = document.getElementById('btn1');
var ebtn2 = document.getElementById('btn2');
var ebtn3 = document.getElementById('btn3');
var ebtn0 = document.getElementById('btn0');
var ebtnDivide = document.getElementById('btnDivide');
var ebtnDot = document.getElementById('btnDot');
var ebtnAnswer = document.getElementById('btnAnswer');
// 清屏按钮
ebtnClear.onclick = function() {
    numAnswer = "";
    numTmp = "";
    operator = "";
    eAnswer.innerText = "0";
};
// 检查是否超出运算范围
function checkRange(num) {
    var tmp = parseFloat(num);
    if ((-9007199254740991 > tmp) || (9007199254740991 < tmp)) {
        var str = "运算超出计算范围";
        // 复位
        numTmp = "";
        numAnswer = "";
        operator = "";
        return str;
    }
    return numTmp;
}
// 刷新显示
function flushScreen(str) {
    //保留16位精度
    var ret = parseFloat(str);
    ret = parseFloat(ret.toFixed(16));
    eAnswer.innerText = ret;
}
// 延迟用于按钮每次点击都能闪烁
function pause(ele) {
    ele.style = "animation-play-state: paused;";
}
// =================以下为数字按钮事件=====================
ebtn9.onclick = function() {
    ebtn9.style = "animation-play-state: running;";
    ebtn9.style = "animation:click1 ease-out 0.1s";
    numTmp = numTmp + "9";
    // 长度检查
    var str = checkRange(numTmp);
    flushScreen(str);
    // alert(9);
    setTimeout("pause(ebtn9)", "300");
    console.log(document.getElementById('btn9'));
    return;
};
ebtn8.onclick = function() {
    ebtn8.style = "animation-play-state: running;";
    ebtn8.style = "animation:click1 ease-out 0.1s";

    numTmp = numTmp + "8";
    // 长度检查
    var str = checkRange(numTmp);
    flushScreen(str);

    setTimeout("pause(ebtn8)", "300");
    return;
};
ebtn7.onclick = function() {
    ebtn7.style = "animation-play-state: running;";
    ebtn7.style = "animation:click1 ease-out 0.1s";
    numTmp = numTmp + "7";
    // 长度检查
    var str = checkRange(numTmp);
    flushScreen(str);
    setTimeout("pause(ebtn7)", "300");
    return;
};
ebtn6.onclick = function() {
    ebtn6.style = "animation-play-state: running;";
    ebtn6.style = "animation:click1 ease-out 0.1s";
    numTmp = numTmp + "6";
    // 长度检查
    var str = checkRange(numTmp);
    flushScreen(str);
    setTimeout("pause(ebtn6)", "300");
    return;
};
ebtn5.onclick = function() {
    ebtn5.style = "animation-play-state: running;";
    ebtn5.style = "animation:click1 ease-out 0.1s";
    numTmp = numTmp + "5";

    var str = checkRange(numTmp);
    flushScreen(str);

    setTimeout("pause(ebtn5)", "300");
    return;
};
ebtn4.onclick = function() {
    ebtn4.style = "animation-play-state: running;";
    ebtn4.style = "animation:click1 ease-out 0.1s";
    numTmp = numTmp + "4";
    // 长度检查
    var str = checkRange(numTmp);
    flushScreen(str);
    setTimeout("pause(ebtn4)", "300");
    return;
};
ebtn3.onclick = function() {
    ebtn3.style = "animation-play-state: running;";
    ebtn3.style = "animation:click1 ease-out 0.1s";
    numTmp = numTmp + "3";
    // 长度检查
    var str = checkRange(numTmp);
    flushScreen(str);
    setTimeout("pause(ebtn3)", "300");
    return;
};
ebtn2.onclick = function() {
    ebtn2.style = "animation-play-state: running;";
    ebtn2.style = "animation:click1 ease-out 0.1s";
    numTmp = numTmp + "2";
    // 长度检查
    var str = checkRange(numTmp);
    flushScreen(str);
    setTimeout("pause(ebtn2)", "300");
    return;
};
ebtn1.onclick = function() {
    ebtn1.style = "animation-play-state: running;";
    ebtn1.style = "animation:click1 ease-out 0.1s";
    numTmp = numTmp + "1";
    // 长度检查
    var str = checkRange(numTmp);
    flushScreen(str);
    setTimeout("pause(ebtn1)", "300");
    return;

};
ebtn0.onclick = function() {
    ebtn0.style = "animation-play-state: running;";
    ebtn0.style = "animation:click1 ease-out 0.1s";

    numTmp = numTmp + "0";

    var str = checkRange(numTmp);
    flushScreen(str);
    setTimeout("pause(ebtn0)", "300");
    return;
};
ebtnDot.onclick = function() {
    ebtnDot.style = "animation-play-state: running;";
    ebtnDot.style = "animation:click1 ease-out 0.1s";

    numTmp = numTmp + ".";

    var str = checkRange(numTmp);
    flushScreen(str);
    setTimeout("pause(ebtnDot)", "300");
    return;
};

// ===================以下为单目运算操作==========================
ebtnSwitch.onclick = function() {
    ebtnSwitch.style = "animation-play-state: running;";
    ebtnSwitch.style = "animation:click2 ease-out 0.1s";
    var t;
    t = parseFloat(numTmp) * (-1);
    numTmp = "" + t;
    flushScreen(numTmp);
    setTimeout("pause(ebtnSwitch)", "300");
    return;
};

ebtnReciprocal.onclick = function() {
    ebtnCompletation.style = "animation-play-state: running;";
    ebtnCompletation.style = "animation:click2 ease-out 0.1s";
    var t;
    t = parseFloat(numTmp);
    numAnswer = "" + (1 / t);
    flushScreen(numAnswer);
    setTimeout("pause(ebtnCompletation)", "300");
    return;
};
ebtnSqr.onclick = function() {
    ebtnSqr.style = "animation-play-state: running;";
    ebtnSqr.style = "animation:click2 ease-out 0.1s";
    var t;
    t = parseFloat(numTmp);
    numAnswer = Math.sqrt(t);
    flushScreen(numAnswer);
    setTimeout("pause(ebtnSqr)", "300");
    return;
};

ebtnSin.onclick = function() {
    ebtnSin.style = "animation-play-state: running;";
    ebtnSin.style = "animation:click2 ease-out 0.1s";
    var t;
    t = parseFloat(numTmp);
    // 转化为角度制计算
    numAnswer = parseFloat((Math.sin(t*Math.PI/180)).toFixed(8));
    flushScreen(numAnswer);
    setTimeout("pause(ebtnSin)", "300");
    return;
}
ebtnCos.onclick = function() {
        ebtnCos.style = "animation-play-state: running;";
        ebtnCos.style = "animation:click2 ease-out 0.1s";
        var t;
        t = parseFloat(numTmp);
        // 转化为角度制计算
        numAnswer = parseFloat((Math.cos(t*Math.PI/180)).toFixed(8));
        flushScreen(numAnswer);
        setTimeout("pause(ebtnCos)", "300");
        return;
    }
    //====================== 以下均为双目操作=====================
ebtnCompletation.onclick = function() {
    ebtnCompletation.style = "animation-play-state: running;";
    ebtnCompletation.style = "animation:click2 ease-out 0.1s";
    var t;
    // 双操作数运算
    numAnswer = numTmp;
    numTmp = "";
    operator = "%";

    flushScreen(numAnswer);
    setTimeout("pause(ebtnCompletation)", "300");
    return;
};
ebtnMinus.onclick = function() {
    ebtnMinus.style = "animation-play-state: running;";
    ebtnMinus.style = "animation:click2 ease-out 0.1s";
    var t;
    // 双操作数运算
    numAnswer = numTmp;
    numTmp = "";
    operator = "-";

    flushScreen(numAnswer);
    setTimeout("pause(ebtnMinus)", "300");
    return;
};
ebtnPlus.onclick = function() {
    ebtnPlus.style = "animation-play-state: running;";
    ebtnPlus.style = "animation:click2 ease-out 0.1s";
    var t;
    // 双操作数运算
    numAnswer = numTmp;
    numTmp = "";
    operator = "+";

    flushScreen(numAnswer);
    setTimeout("pause(ebtnPlus)", "300");
    return;
};
ebtnMultiply.onclick = function() {
    ebtnMultiply.style = "animation-play-state: running;";
    ebtnMultiply.style = "animation:click2 ease-out 0.1s";
    var t;
    // 双操作数运算
    numAnswer = numTmp;
    numTmp = "";
    operator = "*";

    flushScreen(numAnswer);
    setTimeout("pause(ebtnMultiply)", "300");
    return;
};
ebtnDivide.onclick = function() {
    ebtnDivide.style = "animation-play-state: running;";
    ebtnDivide.style = "animation:click2 ease-out 0.1s";
    var t;
    // 双操作数运算
    numAnswer = numTmp;
    numTmp = "";
    operator = "/";

    flushScreen(numAnswer);
    setTimeout("pause(ebtnDivide)", "300");
    return;
};
// ============对双操作数运算在按下“=”后进行运算并显示结果======
ebtnAnswer.onclick = function() {
    ebtnAnswer.style = "animation-play-state: running;";
    ebtnAnswer.style = "animation:click3 ease-out 0.1s";
    var a = parseFloat(numAnswer);
    var b = parseFloat(numTmp);
    var ret;
    switch (operator) {
        case "%":
            ret = a % b;
            break;
        case "+":
            ret = a + b;
            break;
        case "-":
            ret = a - b;
            break;
        case "*":
            ret = parseFloat((a * b).toFixed(8));
            break;
        case "/":
            if (b == 0) {
                alert("ERR:除数不能为0");
                // 复位
                numTmp = "";
                numAnswer = "";
                operator = "";
                ret = 0;
                break;
            }
            ret = a / b;
            break;
        default:
            if (!isNaN(a) && !isNaN(b)) {
                ret = a;
            } else if (isNaN(a) && !isNaN(b)) {
                ret = b;
            } else {
                ret = 0;
            }
            break;
    }
    flushScreen(ret);
    setTimeout("pause(ebtnAnswer)", "300");
    return;
};
