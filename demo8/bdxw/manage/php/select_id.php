<?php
	header("Content-type: application/json; charset=utf-8");

    // 引入数据库配置
    require('db_config.php');
    
	$data = $_POST;
	$id = $data['id'];

	$myconn=mysql_connect($db_name,$db_id,$db_pswd);
    //选择test为操作库
     // //这就是指定数据库字符集，一般放在连接数据库后面就系了
    mysql_select_db($tb_name,$myconn);
   // $strSql="INSERT INTO `news_table`(`TYPE`, `TITLE`, `IMG`, `TIME`) VALUES ('".$type."','".$title."','".$time."','".$img."')";
    $strSql= "SELECT * FROM `news_table` WHERE `ID`='".$id."'";
    mysql_query("set names 'utf8'");
    $result = mysql_query($strSql);
    if(!$result) {
    	$ret = array("result"=>"fail");
    	echo json_encode($ret);
    	die('Error:'.mysql_error());
    } else {
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