const app = getApp({allowDefault: true});
const upload = {
    chooseImage:({sizeType = ['original'],sourceType = ['album', 'camera'], count = 1})=>{
        return new Promise((resolve,reject)=>{
            wx.chooseImage({
                count: count,//默认1
                sizeType: sizeType,//默认原图
                sourceType:sourceType, // 默认二者皆可,选择和拍照
                success(res) {
                    resolve(res.tempFilePaths);
                },
                fail(err){
                    reject(err)
                }
            })
        })
    },
    /**
     * 以wx.request作为底层方法
     * @param {array}     files         图片url集合
     * @param {String}  url           图片上传服务器地址
     * @param {String}  dir           上传接口地址
     * @param {String}  name          文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
     * @param {Object}  header        HTTP 请求 Header, header 中不能设置 Referer
     * @param {Object}  formData      HTTP 请求中其他额外的 form data
     */
    uploadFile:({files = [],name = 'file',formData = {}, header = {},dir = '',url = `${app.server_url}`})=>{
        return new Promise((resolve,reject)=>{
            if (files && files instanceof Array && files.length>0){
                let promiseList=[];
                for (let i = 0; i < files.length;i++){
                    promiseList[i] =  new Promise((resolve, reject) => {
                        wx.uploadFile({
                            url: url + dir, //仅为示例，非真实的接口地址
                            filePath: files[i],
                            name: name,
                            formData: formData,
                            header: header,
                            success: function (res) {
                                resolve(res.data);
                            },
                            fail: function (error) {
                                reject(error);
                            }
                        })
                    });
                }
                Promise.all(promiseList)
                    .then(function (result){
                        resolve(result);
                    })
                    .then(function(error){
                        reject(error);
                    })
            }else{
                reject('传参有误，请传数组格式');
            }
        })
    }
};
export  default upload
