<?php
	header("Content-type: application/json; charset=utf-8");

    // 引入数据库配置
    require('../manage/php/db_config.php');
 
 	//$currentNewsNumber = $_POST['currentNewsNumber'];
 	$type = $_POST['type'];

 	// 入参检查在js做

 	 //连接到本地mysql数据库
    $myconn=mysql_connect($db_name,$db_id,$db_pswd);
    mysql_select_db($tb_name,$myconn);
    $strSql="SELECT * FROM `news_table` WHERE `TYPE`='".$type."'";
    mysql_query("set names 'utf8'");
    $result = mysql_query($strSql);
    if(!$result) {
    	$ret = array("result"=>"fail");
    	echo json_encode($ret);
    	die('Error:'.mysql_error());
    } else {
    	// 获取数据成功
    	$return_msg = array();
    	while($row = mysql_fetch_array($result)){
    		array_push($return_msg, array(
    					"id"=>$row['ID'],"type"=>$row['TYPE'],
    					"title"=>$row['TITLE'],"img"=>$row['IMG'],
    					"time"=>$row['TIME']));
    	}
    	echo json_encode($return_msg);
    }
    mysql_close($myconn);






















?>