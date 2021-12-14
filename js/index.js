// 开始效果
$('#tabs').on('click', 'li', function () {
  $('#section section').eq($(this).index()).show().siblings().hide()
})
// 时间
$('#time p').html(dayjs().format('YYYY-MM-DD HH:mm:ss dddd'))
setInterval(function(){
  $('#time p').html(dayjs().format('YYYY-MM-DD HH:mm:ss dddd'))
}, 1000);
// 搜索
$('#btn').on('click', function () {
  window.location.href = 'https://www.sogou.com/web?ie=UTF-8&query=' + $('#ipt').val()
  $('#ipt').val() = ''
})
// 点击
// 可以再想想
$('#tabs li:first-child').css('fontWeight','700')
$('#tabs').on('click','li', function () {
  $('#tabs li').eq($(this).index()).css('fontWeight','700').siblings().css('fontWeight','400')
})
// 其他
console.log('以后有可能会完善')
console.log('随便写的，有什么问题的话可别找我哦~~')

//
// if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
//   window.location.href = "./music.html"; // 手机
// } else {
//   window.location.href = "./index.html"; // 电脑
// }