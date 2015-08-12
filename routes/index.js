var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

		//判断访问终端
	var browser={
	    versions:function(){
	      //  var u = navigator.userAgent, app = navigator.appVersion;
	        var u = req.get('User-Agent');
	        return {
	            trident: u.indexOf('Trident') > -1, //IE内核
	            presto: u.indexOf('Presto') > -1, //opera内核
	            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
	            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
	            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
	            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
	            iPad: u.indexOf('iPad') > -1, //是否iPad
	            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
	            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
	            qq: u.match(/\sQQ/i) == " qq" //是否QQ
	        };
	    }(),
	//    language:(navigator.browserLanguage || navigator.language).toLowerCase()
	};

	if (browser.versions.ios) {
		res.render('fun');
	}
	if (browser.versions.android) {
		res.render('uc');
	}

  res.render('index', { title: 'Express' });
});

router.get('/fun', function(req, res, next) {
	res.render('fun');
});

router.get('/qr', function(req, res, next) {
	res.render('jsqrcode');
});

router.get('/client', function(req, res, next) {
	res.render('client');
});

router.get('/login', function(req, res, next) {
	res.render('login');
});

router.get('/loginok', function(req, res, next) {
	res.render('loginSuccess');
});

router.get('/uc', function(req, res, next) {
	res.render('uc');
});

router.get('/mobile', function(req, res, next) {
	res.render('mobile');
});

module.exports = router;
