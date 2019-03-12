// miniprogram/container/pages/upload/upload.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        files:[]
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
    uploadImg() {
        let that = this;
        app.upload.chooseImage({sizeType: ['original', 'compressed'], count:2}).then(function(files){
            that.setData({
                files:[...that.data.files,...files]
            })
            // 根据实际需要进行上传步骤
            // app.upload.uploadFile({files:[],name:'file',formData:{}, header:{},dir:''}).then(function(files){
            //
            // }).catch(err=>{
            //     console.log(err)
            // });
        }).catch(err=>{
            console.log(err)
        });
    },
});