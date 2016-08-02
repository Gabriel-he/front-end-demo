function _click() {
    var numA, numB, operator, ret;
    // 获取数字和操作符
    numA = parseFloat(document.getElementsByName("score1")[0].value);
    numB = parseFloat(document.getElementsByName("score2")[0].value);
    operator = (document.getElementsByName("select_oprt")[0].value);
    // 入参检查
    if(isNaN(numA) || isNaN(numB)){
        document.getElementById('outcome').innerHTML = "ERR:请输入数字";
        return;
    }
    //alert(numB);
    switch (operator) {
        case "+":
            ret = numA + numB;
            break;
        case "-":
            ret = numA - numB;
            break;
        case "*":
            ret = numA * numB;
            break;
        case "/":
            if(numB == 0){
             document.getElementById('outcome').innerHTML = "ERR:除数不能为零";
             return;
            }
            ret = numA / numB;
            break;
        default:
            // 非四则运算时出口
            document.getElementById('outcome').innerHTML = "ERR:仅支持四则运算，请检查输入";
            return;
    }
    // 保留8位小数
    ret = parseFloat(ret.toFixed(8));
    document.getElementById('outcome').innerHTML = ret;
    return;
}
