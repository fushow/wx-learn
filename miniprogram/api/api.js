// 独立分包,在app未定义时返回一个默认实现,当主包加载，App 被注册时，默认实现中定义的属性会被覆盖合并到真正的 App 中
const app = getApp({allowDefault: true});
app.server_url = 'http://www.phonegap100.com';
let token = wx.getStorageSync('accesstoken') ? JSON.parse(wx.getStorageSync('accesstoken')).access_token : '';
const request = (url, options) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${app.server_url}${url}`,
            method: options.method,
            data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
            //header根据实际需要进行修改
            header: token ? {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token
            }:{'Content-Type': 'application/json; charset=UTF-8'},
            success(request) {
                //根据实际返回来的code进行更改
                // if (request.data.retCode === 200) {
                //     resolve(request.data)
                // } else {
                //     reject(request.data)
                // }
                resolve(request.data)
            },
            fail(error) {
                reject(error.data)
            }
        })
    })
};

const get = (url, options = {}) => {
    return request(url, { method: 'GET', data: options })
};

const post = (url, options) => {
    return request(url, { method: 'POST', data: options })
};

const put = (url, options) => {
    return request(url, { method: 'PUT', data: options })
};

// 不能声明DELETE（关键字）
const remove = (url, options) => {
    return request(url, { method: 'DELETE', data: options })
};

module.exports = {
    get,
    post,
    put,
    remove
};