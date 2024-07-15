var i=1;
while(i<=20){
    document.write(i);
    i++;
    document.write("<br>");
}

var a=10;
while(a<=30){
    document.write(a+"<br>");a++;
}

var b=20;
while(b>=10){
    document.write(b+"<br>");
    b--;
}

var c=1;
while(c<=10){
    document.write(c+"<br>");
    c+=2;
}

var name=1;
while(name<5){
    document.write("Tanaka"+"<br>");
    name++;
}

var myoji=["高木","田中","山本"];
document.write(myoji);

var color=["赤","白","黒"];
document.write(color);

var color=["赤","白","黒"];
document.write(color[0]);
document.write(color[1]);
document.write(color[2]);

var color=["No1","No2","No3"];
delete color[0];
document.write(color);

var pre1=["東京","神奈川","埼玉"];
pre1[3]="千葉";
document.write(pre1);

var pre2=["東京","神奈川","埼玉"];
delete pre2[0]; pre2[0]="千葉";
document.write(pre2);

var kumimyoji={"A組":"田中","B組":"高橋","C組":"斎藤"};
document.write(kumimyoji["A組"]);

var number={"１番":"佐藤","２番":"山田","3番":"斎藤"};
document.write(number["１番"]);

var gosanke=["田中","高橋","斎藤"];
gosanke.unshift("鈴木");
document.write(gosanke);

var abc=["高知","愛媛","香川"];
abc.unshift("徳島");
document.write(abc);

var adress=["名前","住所","電話番号"];
adress.push("アドレス");
document.write(adress);

var add=["名前","住所","電話番号"];
add.pop();
document.write(add);

var age =[18,26,33,41,50];
document.write(age.slice(1,4));


document.write("<br>");

function fruitsprice(apple,orange){
    return(apple*80)+(orange*60);
}

document.write(fruitsprice(3,5)+"円"+"<br>");
document.write(fruitsprice(6,8)+"円"+"<br>");

function namehello(name){
    return name+"さん。こんにちは";
}

document.write(namehello("高橋"));
document.write("<br>");
document.write(namehello("鈴木"));
document.write("<br>");

function live(abc){
    return abc+"出身の方";
}

document.write(live("東京"));
document.write("<br>");
document.write(live("神奈川"));
document.write("<br>");
document.write(live("大阪"));
document.write("<br>");

function test(num){
    return "あなたの点数は"+num+"点です。";
    
}

document.write(test(90));
document.write("<br>");
document.write(test(88));
document.write("<br>");
document.write(test(79));
document.write("<br>");

function oshirase(num){
    return"会員Noは"+num+"です。";
}

document.write(oshirase(1022));
document.write("<br>");
document.write(oshirase(1199));
document.write("<br>");
document.write(oshirase(2047));
document.write("<br>");





































