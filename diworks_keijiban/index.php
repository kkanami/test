
 <!doctype html>
 <html lang="ja">

 <head>
     <meta charset="utf-8">
     <title>diworksblog 掲示板</title>
     <link rel="stylesheet" type="text/css" href="style.css">
 </head>

 <body>
     <?php
    //PDO
    mb_internal_encoding("utf8");
 $pdo=new PDO("mysql:dbname=lesson01;host=localhost;","root","");
    $stmt=$pdo->query("select*from diworks_keijiban");
    
  
    ?>

     <header>
         <img src="diblog_logo.jpg">
         <div class="content">
             <ul class="menu">
                 <li>トップ</li>
                 <li>プロフィール</li>
                 <li>D.I.Blogについて</li>
                 <li>登録フォーム</li>
                 <li>問い合わせ</li>
                 <li>その他</li>
             </ul>
         </div>
     </header>

     <main>
         <div class="main">
             <div class="left">
                 <h1>プログラミングに役立つ掲示板</h1>

                 <div class="form">
                     <h3>入力フォーム</h3>
                     
                     <form method="post" action="insert.php" required>
                         <div>
                             <label>ハンドルネーム</label>
                             <br>
                             <input type="text" class="text" size="35" name="handlename" required>

                         </div>

                         <div>
                             <label>タイトル</label>
                             <br>
                             <input type="text" class="text" size="35" name="title" required>

                         </div>

                         <div>
                             <label>コメント</label>
                             <br>
                             <!--<textarea></textarea>の間に改行やインデントいれると謎のスペースがはいってしまうので注意-->
                             <textarea cols="35" rows="7" name="comments" required></textarea>
                         </div>

                         <div>
                             <input type="submit" class="submit" value="投稿する">
                         </div>

                     </form>

                 </div>
                 <br>

                 <?php
                  //投稿を表示させるrow…行 stmt…statementの略。声明 fetch…取ってくる
    while($row=$stmt->fetch()){
             echo'<div class="kiji">';
               echo"<h3>".$row['title']."</h3>";
                echo"<div class='contents'>";
                echo $row['comments'];
                     echo"<div class='handlename'>posted by".$row['handlename']."</div>";
                 echo"</div>";
              echo"</div>";
            }
              ?>

             </div>
             <div class="right">
                 <h3>人気の記事</h3>
                 <ul>
                     <li><a href=""> PHPオススメ本</a></li>
                     <li><a href="">PHP　MyAdminの使い方</a></li>
                     <li><a href="">いま人気のエディタTops</a></li>
                     <li><a href="">HTMLの基礎</a></li>
                 </ul>

                 <h3>オススメリンク</h3>
                 <ul>
                     <li><a href=""> ﾃﾞｨｰｱｲﾜｰｸｽ株式会社</a></li>
                     <li><a href="">XAMPPのダウンロード</a></li>
                     <li> <a href="">Eclipseのダウンロード</a></li>
                     <li> <a href="">Braketsのダウンロード</a></li>
                 </ul>

                 <h3>カテゴリ</h3>
                 <ul>
                     <li> <a href=""> HTML</a></li>
                     <li><a href=""> PHP</a></li>
                     <li><a href=""> MySQL</a></li>
                     <li><a href=""> JavaScript</a></li>
                 </ul>

             </div>

         </div>
     </main>

     <footer>
         Copyright D.I.works| D.I.blog is the one which provides A to Z about programming
     </footer>
 </body>

 </html>
