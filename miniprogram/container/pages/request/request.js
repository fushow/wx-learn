// container/pages/request/request.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },
    query() {
        let that = this;
        app.restful.get('/appapi.php?a=getPortalList&catid=15&page=1', {data: ''}).then(res => {
            that.setData({
                list: res.result
            })
        }).catch(err => {
            wx.showToast({
                title: '根据自己的实际请求进行更改',
                icon: 'none'
            })
        })
    }
});