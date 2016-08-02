function _click(){
    var arrA = ["a","x","b","d","m","a","k","m","p","j","a"];
    var objResult = {
        sElement : null,
        nCount : 0,
    };
    var tmpElement, tmpCount;
    objResult.sElement = arrA[0];
    // 查到最多元素并计数
    for (var i = 0; i < arrA.length; i++) {
        tmpElement = arrA[i];
        tmpCount = 1;
        for (var j = 1; j < arrA.length; j++) {
            if(arrA[i] == arrA[j]){
                tmpCount++;
            }
        }
        if(tmpCount > objResult.nCount){
           objResult.sElement =  arrA[i];
           objResult.nCount = tmpCount;
        }
    }
    // 输出元素及计数
    document.getElementById('outcome').innerHTML = objResult.sElement;
    document.getElementById('outcome1').innerHTML = objResult.nCount;
    // 输出序号
    var retOrder = "序号：";
    for( var k = 0; k < arrA.length; k++){
        if(arrA[k] == objResult.sElement){
            var s = k+1;
            toString(s);
            retOrder = retOrder +" " + s;
        }
    }
    document.getElementById('outcome2').innerHTML = retOrder;
}