// miniprogram/container/pages/form/form.js
import WxValidate from '../../../api/wx-validate/WxValidate'

Page({

    /**
     * 页面的初始数据
     */
    data: {},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.initValidate();
    },
    onShow: function () {

    },
    initValidate() {
        // 验证字段的规则
        const rules = {
            username: {
                required: true
            },
            password:{
                required: true,
                password:true
            },
            email:{
                required: true,
                email: true
            },
            idcard:{
                required: true,
                idcard:true
            }
        };
        // 验证字段的提示信息，若不传则调用默认的信息
        const messages = {
            username: {
                required: '请填写用户名'
            },
            password: {
                required: '密码不少于6位'
            },
            email: {
                required: '请填写正确电子邮件'
            },
            idcard: {
                required: '请填写正确身份证号码'
            }
        };
        // 创建实例对象
        this.WxValidate = new WxValidate(rules, messages);
        // 自定义验证规则
        this.WxValidate.addMethod('password', (value, param) => {
            return this.WxValidate.optional(value) || (value.length < 6)
        });

    },
    formSubmit(e) {
        let params = e.detail.value;
        if (!this.WxValidate.checkForm(params)) {
            const error = this.WxValidate.errorList[0];
            wx.showToast({
                title: error.msg,
                icon: 'none',
                duration: 2000
            });
            setTimeout(() => {
                wx.hideToast();
            }, 2000);
            return
        }
        wx.showModal({
            title: '提示',
            content: '这仅仅是一个表单验证成功的提示',
        })
    },
    formReset() {
        console.log('form发生了reset事件')
    }
});