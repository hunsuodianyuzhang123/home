$(function () {
  // 按键刷新页面，进行更换
  $('#load').on('click', function () {
    window.location.reload()
  })
  // ajax获取
  $.get(
    'https://api.vvhan.com/api/rand.music?type=json&sort=热歌榜',
    function (res) {
      // console.log(res)
      $('.iptTitle').html(res.info.name)
      $('.iptAuthor').html(res.info.auther)
      $('img').attr('src', res.info.picUrl)
      $('audio').attr('src', res.info.mp3url)
    }
  )
  // 自动更新
  // $('#audio')[0].currentTime 当前播放时间
  // $('#audio')[0].duration 总时间
  setInterval(function () {
    // console.log($('#audio')[0].currentTime / $('#audio')[0].duration)
    if ($('#audio')[0].currentTime / $('#audio')[0].duration == 1) {
      window.location.reload()
    }
  }, 1000)
  // 其他
  console.log('以后有可能会完善')
  console.log('随便写的，有什么问题的话可别找我哦~~')
})
