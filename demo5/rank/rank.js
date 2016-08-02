 function _click() {
     var tmp, str;
     // 获取input中数据
     tmp = document.getElementsByName("score")[0].value;
     var regex = /^\d+$/;
     if (!tmp.match(regex) || tmp > 100){
        str = "输入不合法，请检查";
     } else if (tmp === 100) {
        str = "1等生";
     } else{
        tmp = (10 - parseInt(tmp / 10));
        str = tmp + "等生";
     }

     //原有做法
     // if (( "" === tmp) || (undefined === tmp) || ( null === tmp)) {
     //     str = "请输入分数";
     // } else if (isNaN(tmp)) {
     //     str = "请输入数字内容";
     // } else if ((tmp > 100) || (tmp < 0)) {
     //     str = "分数必须在0~100之间";
     // } else if (tmp == 100) {
     //     str = "1等生";
     // } else {
     //     tmp = (10 - parseInt(tmp / 10));
     //     str = tmp + "等生";
     // }
     // 输出结果
     document.getElementById('outcome').innerHTML = str;
     return;
 }