// container/pages/request/request.js
var util = require('../../../util/util.js');
var mainList ="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=15&page=1";
var postMainList = "http://www.phonegap100.com/appapi.php?a=getPortalCate";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getMainList:[],
    postMainList:[],
    staus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.showSuccessToast("ddddd");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  getMainList() {
    let that = this;
    that.setData({
      postMainList: []
    });
    util.request(mainList).then(function (res) {
      console.log(res.result);
      that.setData({
        getMainList: res.result,
        staus:true
      });
    });
  },
  postMainList(){
    let that = this;
    that.setData({
      getMainList: []
    });
    util.request(postMainList, { id: '11', name: '222' }).then(function (res) {
      console.log(res);
      that.setData({
        postMainList: res.result,
        staus: false
      });
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})