export const formatDate = (time) => {
  let now = new Date();
  let nowYear = now.getFullYear();
  let nowMonth = now.getMonth() + 1;
  let nowDate = now.getDate();
  let nowHour = now.getHours();
  let nowMin = now.getMinutes();
  let nowSec = now.getSeconds();
  let year = nowYear - Number(time.substr(0, 4));
  let month = nowMonth - Number(time.substr(5, 2));
  let date = nowDate - Number(time.substr(8, 2));
  let hour = nowHour - Number(time.substr(11, 2)) - 8;
  let min = nowMin - Number(time.substr(14, 2));
  let sec = nowSec - Number(time.substr(18, 2));
  let timesec = year * 365 * 24 * 60 * 60 + month * 30 * 24 * 60 * 60 + date * 24 * 60 * 60 + hour * 60 * 60 + min * 60 + sec;
  let timeNow = timesec / 60 / 60 / 24 / 365;
  if (timeNow >= 1) {
    return parseInt(timeNow) + '年前';
  } else if (timeNow * 365 / 30 >= 1) {
    return parseInt(timeNow * 365 / 30) + '个月前';
  } else if (timeNow * 365 >= 1) {
    return parseInt(timeNow * 365) + '天前';
  } else if (timeNow * 365 * 24 >= 1) {
    return parseInt(timeNow * 365 * 24) + '小时前';
  } else if (timeNow * 365 * 24 * 60 >= 1) {
    return parseInt(timesec / 60) + '分钟前';
  } else {
    return timesec + '秒前';
  }
}


export const getWindowHeight = () => {
  let windowHeight = 0;
  if (document.compatMode == 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}

export const getScrollHeight = () => {
  let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}

export const getScrollTop = () => {
  let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

export function setTitle(tab) {
  switch (tab) {
    case 'all':
      return '全部帖子';
    case 'ask':
      return '问答';
    case 'share':
      return '分享'
    case 'job':
      return '招聘';
    case 'good':
      return '精华'
  }
}
