var str = new String();
while(1){
str=prompt('Введите первую строку (9 символов)', '');
console.log(str);
if(str==null)	continue;
if(str.length==9)
	break;
}
var arr= new Array(9);
var buff;
for( var i=0;i<9;i++){
	buff=prompt(`Введите ${i+1} элемент массива`,'');
	arr[i]=buff;
}
var arr_1=new Array();
for(var i=0;i<str.length;i++){
	if(str[i]=='1')
		arr_1.push(arr[i]);
}
alert(arr_1);

