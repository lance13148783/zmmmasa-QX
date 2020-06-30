# QX 
#已修改阉割通知
#惠头条   邀请码 97593577 不介意请填写我的邀请码  走邀请8天我可得10+你也可得10+//
#QX使用
#获取cookie
[rewrite_local]
#惠头条ck 签到 新闻 视频 小视频 时段奖励5个ck 时段奖励必须最后获取 之后注释掉
https:\/\/api\.cashtoutiao\.com url script-request-body https://raw.githubusercontent.com/zmmmasa/QX/master/htt_cookie.js
#惠头条 时间可更改 推荐大于2分钟
[server_local]
0 */3 0-22 * * * https://raw.githubusercontent.com/zmmmasa/QX/master/htt_task.js, tag=惠头条, enabled=true
#添加hostname
hostname= api.cashtoutiao.com

#以下为loon 
#添加到[Script]模块下
#两条  获取 签到 新闻 视频 小视频 时段奖励5个ck 时段奖励必须最后获取 之后注释掉
cron "0 */3 0-22 * * *" script-path=https://raw.githubusercontent.com/zmmmasa/QX/master/htt_task.js, tag=惠头条
http-request https:\/\/api\.cashtoutiao\.com script-path=https://raw.githubusercontent.com/zmmmasa/QX/master/htt_cookie.js, requires-body=true, timeout=30, tag=惠头条CK-
#添加主机名
MITM=api.cashtoutiao.com
