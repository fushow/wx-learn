// container/pages/loadmore/loadmore.js
const app = getApp();
let loadMoreView;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        page:1
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        // 获取loadmore组件实例
        loadMoreView = that.selectComponent("#loadMoreView")
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.query();
    },
    query() {
        let that = this;
        app.restful.get(`/appapi.php?a=getPortalList&catid=15&page=${that.data.page}`).then(res => {
            if (that.data.page > 1) {
                that.setData({
                    list: [...that.data.list, ...res.result]
                })
            } else {
                wx.stopPullDownRefresh();
                that.setData({
                    list: res.result
                });
            }
            loadMoreView.loadMoreComplete(that.data.page, 4)
        }).catch(err => {
            wx.showToast({
                title: '根据自己的实际请求进行更改',
                icon: 'none'
            })
        })
    },
    // loadmore组件 loadmore触发事件
    loadMoreListener() {
        let that = this;
        that.setData({
            page: that.data.page + 1
        }, () => {
            that.query()
        })
    },
    // 监听用户下拉刷新事件
    onPullDownRefresh() {
        this.setData({
            page: 1
        }, () => {
            this.query()
        })
    },
    // 监听用户上拉触底事件
    onReachBottom() {
        loadMoreView.loadMore()
    },

});