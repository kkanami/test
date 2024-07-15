var a1 = 2;
if (a1 < 10) {
    document.write("A");
}

var a2 = 10;
if (a2 <= 10) {
    document.write("B");
}

var a3 = 12;
if (a3 == 12) {
    document.write("同じ数字");
}

var a4 = "田中";
if (a4 == "田中") {
    document.write(a4 + "さんです");
}

var b1 = 90;
if (100 >= b1) {
    document.write("100より小さい数です");
}

var b2 = 3;
if (b2 < 1) {
    document.write("A");
} else if (b2 > 1) {
    document.write("B");
}

var b3 = 10;
if (b3 < 10) {
    document.write("X");
} else if (b3 > 5) {
    document.write("Y");
}

var b4 = 1;
if (b4 == 0) {
    document.write("数字は0");
} else if (b4 == 1) {
    document.write("数字は1");
} else if (b4 == 2) {
    document.write("数字は2");
}

var b5 = -8;
if (b5 < 0) {
    document.write("マイナス");
} else if (b5 >= 1) {
    document.write("プラス");
}

var c1 = 10;
if (c1 < 10) {
    document.write("★");
} else {
    document.write("☆");
}

var c2 = 5;
if (c2 > 10) {
    document.write("OK");
} else {
    document.write("NG");
}

var c3 = "A";
if (c3 == "B") {
    document.write("B");
} else {
    document.write("その他");
}

var c4 = 5;
if (c4 > 0 && c4 < 10) {
    document.write("B");
} else {
    document.write("その他");
}

var c5 = 10;
if (c5 >= 10 || c5 < 5) {
    document.write("X");
} else {
    document.write("Y");
}


document.write("<br>");

var aa1 = 5;
if (aa1 > 0) {
    if (aa1 < 10) {
        document.write("A");
    }
}

var aa3 = 12;
if (aa3 > 0) {
    if (aa3 < 10) {
        document.write("A");
    } else if (aa3 > 10) {
        document.write("B");
    }
}

var aa4 = 5;
if (aa4 < 3) {
    document.write("A");
} else if (aa4 < 5) {
    document.write("B");
} else {
    document.write("C");
}

var aa5 = 6;
if (aa5 > 10) {
    document.write("A");
} else if (aa5 < 5 || aa5 == 6) {
    document.write("B");
} else {
    document.write("C");
}

var age = 18;
var sex = "女性";

if (age >= 18) {
    if (sex == "女性") {
        document.write("Aさん");
    } else if (sex == "男性") {
        document.write("Bさん");
    } else {
        document.write("Cさん");
    }
}

var month = 5;
var day = 28;

if (month <= 12) {
    if (day <= 15) {
        document.write("月の前半");
    } else {
        document.write("月の後半");
    }
}

var test1=80;
var test2=96;

if(test1>=80){
    if(test2<=89){
        document.write("不合格");
    }else if(test2>=90){
             document.write("合格");
             }
}

document.write("<br>");

var aaa1=1;
switch(aaa1){
    case 0:
        document.write("A");
        break;
        
    case 1:
        document.write("B");
        break;
}

var aaa2=3;

switch(aaa2){
    case 0:
        document.write("A");
        break;
    case 1:
        document.write("B");
        break;
    default:
        document.write("C");
}

var aaa3="青";
switch(aaa3){
    case "赤":
        document.write("紅組");
        break;
        
    case "白":
        document.write("白組");
        break;
        
    case "青":
        document.write("青組");
        break;
}

var star="☆";
switch(star){
        case"★":
        document.write("黒い星です");
        break;
        case"☆":
        document.write("白い星です");
        break;
    default:
        document.write("その他記号です");
}

var score=99;
switch(score){
    case 99:
        document.write("おしい！");
        break;
    case 100:
        document.write("満点です！");
        break;
    default:
        document.write(score+"点です！");
}

document.write("<br>");

for(var i=1; i<=10; i++){
    document.write(i);document.write("/");
}

document.write("<br>");

for(var a=10; a>=0; a--){
    document.write(a);document.write("/");
}

document.write("<br>");

for(var b=1; b<7; b++){
    document.write(b);document.write("<br>");
}

for(var star=1; star<5; star++){
    document.write("★");document.write("<br>");
}

for(var month=1; month<=12; month++){
    document.write(month);document.write("月");
}

for(var age=18; age<=99; age++){
    document.write(age+"歳");document.write("<br>");
}

for(var ii=1; ii<=10; ii++){
    if(ii%2==0){
        document.write(ii);
    }
}


for(var aba=3; aba<=8; aba++){
    if(aba>5){
        document.write(aba);document.write("<br>");
    }
}

for(var bbb=1; bbb<=9; bbb++){
    for(var ccc=1; ccc<=9; ccc++){
        document.write(bbb*ccc);
    }document.write("→"+bbb+"の段<br>");
}

for(var star1=1; star1<=5; star1++){
    for(var star2=1; star2<=6; star2++){
        document.write("★");
    }document.write("<br>");
}

for(var monthh=1; monthh<=12; monthh++){
    document.write(monthh+"月:");
    for(var dayy=1; dayy<=30; dayy++){
        document.write(day+"日/");
    }document.write("<br><br>");
}

document.write("<br>");

for(var numm=10; numm>=0; numm--){
    if(numm==0){
        document.write("終了！"+"<br>");}
        else{document.write(numm+"<br>");}
    }

for(var no1=0; no1<5; no1++){
    for(var no2=0; no2<5; no2++){
        if(no2%2==0){
            document.write("★");
        }else{document.write("☆");}
    }document.write("<br>");
}

for(var xyz=1; xyz<30; xyz++){
    if(xyz%2==0){
        document.write("２の倍数");
    }else if(xyz%3==0){
        document.write("３の倍数");
    }else if(xyz%2==0&&xyz%3==0){
        document.write("公倍数"); /*先に書いた条件が優先される？*/
    }
    else{document.write(xyz);}
    document.write("<br>");
}




















