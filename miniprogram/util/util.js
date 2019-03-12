function formatTime(time) {
    if (typeof time !== 'number' || time < 0) {
        return time
    }

    const hour = parseInt(time / 3600, 10)
    time %= 3600
    const minute = parseInt(time / 60, 10)
    time = parseInt(time % 60, 10)
    const second = time

    return ([hour, minute, second]).map(function (n) {
        n = n.toString()
        return n[1] ? n : '0' + n
    }).join(':')
}

function formatLocation(longitude, latitude) {
    if (typeof longitude === 'string' && typeof latitude === 'string') {
        longitude = parseFloat(longitude)
        latitude = parseFloat(latitude)
    }

    longitude = longitude.toFixed(2)
    latitude = latitude.toFixed(2)

    return {
        longitude: longitude.toString().split('.'),
        latitude: latitude.toString().split('.')
    }
}

function fib(n) {
    if (n < 1) return 0
    if (n <= 2) return 1
    return fib(n - 1) + fib(n - 2)
}

function formatLeadingZeroNumber(n, digitNum = 2) {
    n = n.toString()
    const needNum = Math.max(digitNum - n.length, 0)
    return new Array(needNum).fill(0).join('') + n
}

function formatDateTime(date, withMs = false) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const ms = date.getMilliseconds()

    let ret = [year, month, day].map(value => formatLeadingZeroNumber(value, 2)).join('-') +
        ' ' + [hour, minute, second].map(value => formatLeadingZeroNumber(value, 2)).join(':')
    if (withMs) {
        ret += '.' + formatLeadingZeroNumber(ms, 3)
    }
    return ret
}

function formatDate(inputTime) {
    let date = new Date(inputTime);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}
//提示成功
function showSuccessToast(msg) {
  wx.showToast({
    title: msg,
    duration: 2000
  })
}
// 提示失败
function showErrorToast(msg) {
  wx.showToast({
    title: msg,
    image: '/static/images/icon_error.png',
    duration: 2000
  })
}
//加载中
function openLoading(msg) {
  wx.showToast({
    title: msg,
    icon: 'loading',
    duration: 2000
  })
}
/**
 * 确认框
 */
function networkError(title,msg) {
  wx.showModal({
    title: title,
    content: msg,
    showCancel: false
  })
}
/**
 * 确认按钮，成功跳转到上一个页面
 */
function networkErrorToback(title, msg) {
  wx.showModal({
    title: title,
    content: msg,
    showCancel: true,
    success: function (res) {
      if (res.confirm) {
        wx.navigateBack({
          delta: 1
        })
      }
    }
  })
}

module.exports = {
    formatTime,
    formatDate,
    formatLocation,
    fib,
    formatDateTime,
    showSuccessToast,
    showErrorToast,
    openLoading,
    networkError,
    networkErrorToback
};
