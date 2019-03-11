// container/pages/toastDemo/toastDemo.js
var util = require('../../../util/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  showSuccessToast(){
    util.showSuccessToast("已成功");
  },
  showErrorToast() {
    util.showErrorToast("失败");
  },
  openLoading(){
    util.openLoading("数据加载中")
  },
  networkError(){
    util.networkError("温馨提示","网络异常，请稍后在试");
  },
  networkErrorToback(){
    util.networkErrorToback("温馨提示", "网络异常，请稍后在试");
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})