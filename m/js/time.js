let time = function () {
  document.getElementById('year').innerHTML = dayjs().format('YYYY年MM月DD日')
  document.getElementById('hour').innerHTML = dayjs().format('HH:mm:ss')
  const dayArr = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ]
  document.getElementById('day').innerHTML = dayArr[new Date().getDay()]
}

time()
setInterval(() => time(), 500)
