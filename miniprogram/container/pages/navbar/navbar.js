// miniprogram/container/pages/navbar/navbar.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{name: '选项一'}, {name: '选项二'}, {name: '选项三'}, {name: '选项四'}],
        activeIndex: 0,
        labelPros: {
            label: 'name'
        },
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
    tabEvent(e) {
        this.setData({
            activeIndex: e.detail.activeIndex
        });
        console.log('返回值', e.detail)
    }
});