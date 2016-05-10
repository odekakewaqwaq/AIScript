sel = activeDocument.selection;
text = prompt("回転角度をコンマ区切り半角数字で","")
var d = text.split(",");

for(i=0; i<sel.length; i++){
    var n = Math.floor(Math.random() * d.length);
    sel[i].rotate(d[n]);
}