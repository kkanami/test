<?php
//文字化け防止
mb_internal_encoding("utf8");
//DB接続
$pdo=new PDO("mysql:dbname=lesson01;host=localhost;","root","");
$pdo->exec("insert into diworks_keijiban(handlename,title,comments)
values('".$_POST['handlename']."','".$_POST['title']."','".$_POST['comments']."');");
//リダイレクトの処理
header("Location:http://localhost/diworks_keijiban/index.php");
?>

