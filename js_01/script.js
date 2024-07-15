for (var i = 1; i <= 5; i++) {
    document.write("★");
}
document.write("<br>");
document.write("<br>");

for (var a = 1; a <= 2; a++) {
    for (var aa = 1; aa <= 3; aa++) {
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br>");

for (var b = 1; b <= 2; b++) {
    for (var bb = 1; bb <= 5; bb++) {
        document.write("☆");
    }
    document.write("<br>");
}

document.write("<br>");

for (var c = 1; c <= 4; c++) {
    for (var cc = 1; cc <= 5; cc++) {
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br>");

for (var d = 1; d <= 4; d++) {
    for (var dd = 1; dd <= 3; dd++) {
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

for (var e = 1; e <= 3; e++) {
    for (var ee = 1; ee <= 3; ee++) {
        if (ee % 2 == 1) {
            document.write("☆");
        } else {
            document.write("★");
        }
    }
    document.write("<br>");
}
document.write("<br>");

for (var f = 1; f <= 4; f++) {
    for (var ff = 1; ff <= 5; ff++) {
        if (ff % 3 == 0) {
            document.write("☆");
        } else {
            document.write("★");
        }
    }
    document.write("<br>");
}

document.write("<br>");

for (var g = 1; g <= 5; g++) {
    for (var gg = 1; gg <= g; gg++) {
        document.write("★");
    }
    document.write("<br>");
}
