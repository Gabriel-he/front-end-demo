<?php 
	header("Content-type: application/json; charset=utf-8");
    date_default_timezone_set('Asia/Shanghai');
    // 引入数据库配置
    require('db_config.php');
 	$data = $_POST;

 	$id = $data['id'];//非用户输入，不需转义
 	$type = $data['type'];//type由js自动生成，肯定会带
 	$title = $data['title'];
 	//$time = $data['time'];
    $time = date("Y-m-d");
 	$img = $data['img'];

 	//连接到本地mysql数据库
    $myconn=mysql_connect($db_name,$db_id,$db_pswd);
    mysql_select_db($tb_name,$myconn);

    //进行转义
    $title = mysql_real_escape_string($title,$myconn);
    $time = mysql_real_escape_string($time,$myconn);
    $img = mysql_real_escape_string($img,$myconn);

    $strSql="UPDATE `news_table` SET `TYPE`='".$type."',`TITLE`='".$title."',`IMG`='".$img."',`TIME`='".$time."' WHERE `ID`='".$id."'";
    mysql_query("set names 'utf8'");
    $result = mysql_query($strSql);
    if(!$result) {
    	$ret = array("result"=>"fail");
    	echo json_encode($ret);
    	die('Error:'.mysql_error());
    } else {
    	// 成功插入
    	$ret = array("result"=>"ok");
    	echo json_encode($ret);
    }
    mysql_close($myconn);







?>