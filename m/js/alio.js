var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
var isbaidu = u.indexOf('baidu') > -1 || u.indexOf('Baidu') > -1; 
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
if(isbaidu)
{
    document.writeln("<a class='btn_bottom716' href='/d.php' target='_blank'></a>");
}
