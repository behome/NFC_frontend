
function isReview()
{
	var rparents = document.getElementsByClassName('J_KgRate_ReviewItem');
	var newReview = document.getElementsByClassName('changed');
	var r_counts = rparents.length;
	var n_counts = newReview.length;
	if(r_counts != 0 && n_counts == 0){
		return true;
	}else{
		return false;
	}
}


function changeReview()
{
	
		if(isReview()){
			var iparents = document.getElementsByClassName('J_KgRate_ReviewItem');
			//console.log(html);
			var html = '<span style="margin-left:6px;">商品口碑助手：有点问题。同一天对同一个款式的商品评价好几次，这样做是不是有点问题呢？</span>';
			console.log(iparents.length);
			for(var i = 0; i < iparents.length; i++){
				console.log(iparents[i].className);
				var temp = document.createElement('div');
				temp.setAttribute('class','changed');
				iparents[i].appendChild(temp);
				temp.innerHTML = html;
			}
			console.log('已经注入新的标签');
		}
	
	
}
document.addEventListener('DOMContentLoaded', function()
{
	// 注入自定义JS
	injectCustomJs();

	//修改评论
	/*if(location.host == "item.taobao.com"){
		alert('dhfuwefh');
		changeReview();
	}*/
});
// 向页面注入JS
function injectCustomJs(jsPath)
{
	jsPath = jsPath || 'js/inject.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
	temp.src = chrome.extension.getURL(jsPath);
	temp.onload = function()
	{
		// 放在页面不好看，执行完后移除掉
		this.parentNode.removeChild(this);
	};
	document.body.appendChild(temp);
}

