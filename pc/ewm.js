document.writeln("<div style=\'display: none;\' id=\'qr\'><div class=\'qrcode\'><div class=\'qrcodes\'><div class=\'qrtitle\'>为了更稳定服务，防止资源屏蔽，请微信扫码关注公众号解锁资源！</div><img src=\'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQGR8DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyXzd4aHhidWRkQjQxTndmOU52Y0QAAgTg1L9fAwSAOgkA\' class=\'qrimg\'/><div><a class=\'qrtip\' href=\'https://shimo.im/docs/XWjqqxjJrRTJkvtH/read\' target=\'_blank\'>微信怎么扫描自己手机上的二维码?</a></div><div class=\'qrgb\'>取消</div></div></div></div>");
var url = window.location.href;
var codeid = "";
//页面加载事件
$(document).ready(function() {
	var openid = cookie.get("hkbopenid");
	//console.log(openid)
	if (openid == undefined) {
		//$('#show_link').css('display', 'block');
		var h = $('.baiduyunaddres').height();
		$(".baiduyunaddres").css("position","relative");  
		var html = '<div onclick="shouquan()" style="height: '+h+'px;position: absolute;width: 960px;z-index: 999;top:0;cursor:pointer;"></div>';
		$(".baiduyunaddres").append(html);

	} else {
		
	}
	setTimeout(function(){

		var jh = getQueryVariable('jh');
		if (jh == 1) {
			alert('激活成功！');
		}
	},500)
});


$(".qrgb").bind("click", function() {
	$('#qr').css('display', 'none');
})


function shouquan() {
	if (codeid == "") {
		$.ajax({
			url: "https://www.haokongbu.net/ewm/ewm.php",
			type: "get",
			data: {
				type: "code"
			},
			xhrFields: {
				withCredentials: true // 这里设置了withCredentials
			},
			success: function(data) {
				var obj = JSON.parse(data);
				codeid = obj.id;
				var qrcode = 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + obj.ticket;
				$(".qrimg").attr('src', qrcode);
				ref = setInterval(function() {
					login();
				}, 2000);
				$('#qr').css('display', 'block');
			}
		});
	} else {
		$('#qr').css('display', 'block');
	}
};


function login() {
	$.ajax({
		url: "https://www.haokongbu.net/ewm/ewm.php",
		type: "get",
		data: {
			type: "cxopenid",
			id: codeid
		},
		xhrFields: {
			withCredentials: true // 这里设置了withCredentials
		},
		success: function(data) {
			var obj = JSON.parse(data);
			if (obj.openid != null) {
				clearInterval(ref);
				cookie.set("hkbopenid", obj.openid, 30);

				/*$.ajax({//从数据库删除codeid
					url: "/timg/ewm.php",
					type: "get",
					data: {
						type: "scid",
						id: codeid
					}
				})*/
				location.href = url+"?jh=1";
			}
		}
	})
}

//缓存
var cookie = {
	set: function(key, val, time) { //设置cookie方法
		var date = new Date(); //获取当前时间
		var expiresDays = time; //将date设置为n天以后的时间
		date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000); //格式化为cookie识别的时间
		document.cookie = key + "=" + val + ";expires=" + date.toGMTString(); //设置cookie
	},
	get: function(key) { //获取cookie方法
		/*获取cookie参数*/
		var getCookie = document.cookie.replace(/[ ]/g, ""); //获取cookie，并且将获得的cookie格式化，去掉空格字符
		var arrCookie = getCookie.split(";") //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
		var tips; //声明变量tips
		for (var i = 0; i < arrCookie.length; i++) { //使用for循环查找cookie中的tips变量
			var arr = arrCookie[i].split("="); //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
			if (key == arr[0]) { //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
				tips = arr[1]; //将cookie的值赋给变量tips
				break; //终止for循环遍历
			}
		}
		return tips;
	}
}


function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
}
