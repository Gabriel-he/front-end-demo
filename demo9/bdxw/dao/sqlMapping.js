// SQL操作语句
var operation = {
  add:'INSERT INTO news_table(TYPE, TITLE, IMG,TIME) VALUES(?,?,?,?)',
  update:'UPDATE news_table SET TYPE=?, TITLE=?, IMG=?, TIME=? WHERE ID=?',
  delete: 'DELETE FROM news_table WHERE ID=?',
  queryById: 'SELECT * FROM news_table WHERE ID=?',
  queryType: 'SELECT * FROM news_table WHERE TYPE=?'
};
//"INSERT INTO `news_table`(`TYPE`, `TITLE`, `IMG`, `TIME`) VALUES ('".$type."','".$title."','".$img."','".$time."')"
//"UPDATE `news_table` SET `TYPE`='".$type."',`TITLE`='".$title."',`IMG`='".$img."',`TIME`='".$time."' WHERE `ID`='".$id."'"
//"DELETE FROM `news_table` WHERE `ID`='".$id."'"
//"SELECT * FROM `news_table` WHERE `TYPE`='".$type."'"
//"SELECT * FROM `news_table` WHERE `ID`='".$id."'"
module.exports = operation;