## 参考文档
- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)
- [表单验证](https://github.com/skyvow/wx-extend/blob/master/docs/components/validate.md)
-[富文本解析](https://github.com/icindy/wxParse)

- //调用wx.chooseImage方法之后会触发入口文件app.js中的onLaunch、onShow方法，然后再触发当前页面的onHide、onShow方法;
- //如果不做特殊的处理会导致无法预估的问题。出现这种Bug相当无奈;解决办法如下：
onShow: function (options) {
    let pages = getCurrentPages();
    if(pages.length == 0) {
        //your code
    }
},
- 1、input组件丢字问题
- // 获取值是bindinput和bindblur同时用上
- 2、服务器地址配置
-// api/api.js 的server-url
-3、request (api/api.js)
-// app.restful.get get请求
-// app.restful.post post请求
-// app.restful.put put修改请求
-// app.restful.remove remove删除请求
-4、webstorm支持less小程序开发
-// 详见https://www.jianshu.com/p/253330cc5a97
