/**
 * @fileoverview Example to compose HTTP reqeuest
 * and handle the response. Same task shares context.
 *
 * @supported Quantumult X (v1.0.5-build166)
 
	响应报文格式
	response.statusCode,
	response.headers, 
	response.body
 */
 
 
var url = "https://m.maoyan.com/ajax/comingList?ci=&token=&limit=10&&optimus_risk_level=&optimus_code=";

var method = "GET";

// 请求头
var headers = {
				"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"Accept-Encoding": "gzip, deflate, br",
				"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
				"Cache-Control": "no-cache",
				"Connection": "keep-alive",
				"Cookie": "uuid_n_v=v1; iuuid=C4BBEBF0BCF911EABE352F39F3BB792188C96CE4242E4F6AB6E30A83ABE9DAC6; webp=true; ci=89%2C%E5%B8%B8%E5%B7%9E",
				"Host": "m.maoyan.com",
				"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
				};

// 请求报文
var data = {
				"ci": "",
				"token": "",
				"limit": "10",
				"optimus_risk_level": "",
				"optimus_code":""
				};

var myRequest = {
    url: url,
    method: method, 
    headers: headers, 
    body: JSON.stringify(data)
};


let config = {
    show: {
        //普通每天的
        template: {
            title: ``,
            subtitle: `☔猫眼电影`,
            detail: `
《$[name1]》
	热度：$[number1] 人想看
	主演: $[Starring1] 
	上映时间：$[time1] 呐~
	
《$[name2]》
	热度：$[number2] 人想看
	主演: $[Starring2] 
	上映时间：$[time2] 呐~
	
《$[name3]》
	热度：$[number3] 人想看
	主演: $[Starring3] 
	上映时间：$[time3] 呐~
	
《$[name4]》
	热度：$[number4] 人想看
	主演: $[Starring4] 
	上映时间：$[time4] 呐~
	
《$[name5]》
	热度：$[number5] 人想看
	主演: $[Starring5] 
	上映时间：$[time5] 呐~
	
《$[name6]》
	热度：$[number6] 人想看
	主演: $[Starring6] 
	上映时间：$[time6] 呐~
	
《$[name7]》
	热度：$[number7] 人想看
	主演: $[Starring7] 
	上映时间：$[time7] 呐~
	
《$[name8]》
	热度：$[number8] 人想看
	主演: $[Starring8] 
	上映时间：$[time8] 呐~
	
《$[name9]》
	热度：$[number9] 人想看
	主演: $[Starring9] 
	上映时间：$[time9] 呐~
	
《$[name10]》
	热度：$[number10] 人想看
	主演: $[Starring10] 
	上映时间：$[time10] 呐~
`
        }
    }
}


$task.fetch(myRequest).then(response => {
   
   
	
	var data = JSON.parse(response.body);
	
	// console.log(data.coming[0]);
	 
	// console.log(data.coming[0].nm);
	
	const map = {
        //数据绑定
		name1:data.coming[0].nm,
		number1:data.coming[0].wish,
		Starring1:data.coming[0].star,
		time1:data.coming[0].comingTitle,
		name2:data.coming[1].nm,
		number2:data.coming[1].wish,
		Starring2:data.coming[1].star,
		time2:data.coming[1].comingTitle,
		name3:data.coming[2].nm,
		number3:data.coming[2].wish,
		Starring3:data.coming[2].star,
		time3:data.coming[2].comingTitle,
		name4:data.coming[3].nm,
		number4:data.coming[3].wish,
		Starring4:data.coming[3].star,
		time4:data.coming[3].comingTitle,
		name5:data.coming[4].nm,
		number5:data.coming[4].wish,
		Starring5:data.coming[4].star,
		time5:data.coming[4].comingTitle,
		name6:data.coming[5].nm,
		number6:data.coming[5].wish,
		Starring6:data.coming[5].star,
		time6:data.coming[5].comingTitle,
		name7:data.coming[6].nm,
		number7:data.coming[6].wish,
		Starring7:data.coming[6].star,
		time7:data.coming[6].comingTitle,
		name8:data.coming[7].nm,
		number8:data.coming[7].wish,
		Starring8:data.coming[7].star,
		time8:data.coming[7].comingTitle,
		name9:data.coming[8].nm,
		number9:data.coming[8].wish,
		Starring9:data.coming[8].star,
		time9:data.coming[8].comingTitle,
		name10:data.coming[9].nm,
		number10:data.coming[9].wish,
		Starring10:data.coming[9].star,
		time10:data.coming[9].comingTitle
    }
		// console.log(map);
	var notifyInfo = {
        title: execTemplate(config.show.template.title, map),
        subtitle: execTemplate(config.show.template.subtitle, map),
        detail: execTemplate(config.show.template.detail, map),
    };
	
	var i = Math.ceil(Math.random()*10);
	
	var url = data.coming[i].img.replace("w.h","");

	var showOption = {"media-url" : url};
	
	//调用输出
    $notify(notifyInfo.title, notifyInfo.subtitle, notifyInfo.detail,showOption);	

   // $notify("Title", "Subtitle", response.body); // Success!
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
});



/**
 * 用于普通模板的映射
 * @param {String} template 模板内容
 * @param {Object} map 映射内容
 */
function execTemplate(template, map) {
    if (!template) return "";
    let regex = /\$\[([a-z,A-Z,0-9]*)\]/g;
    if (regex.test(template)) {
        for (item of template.match(regex)) {
            item.match(regex);
            if (RegExp.$1 && map[RegExp.$1]) {
                template = template.replace(item, map[RegExp.$1]);
            } else {
                template = template.replace(item, "");
            }
        }
    }
    return template;
}

