## 参考文档
- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

//调用wx.chooseImage方法之后会触发入口文件app.js中的onLaunch、onShow方法，然后再触发当前页面的onHide、onShow方法;
//如果不做特殊的处理会导致无法预估的问题。出现这种Bug相当无奈;解决办法如下：
onShow: function (options) {
    let pages = getCurrentPages();
    if(pages.length == 0) {
        //your code
    }
},
