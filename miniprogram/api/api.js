const app = getApp();
let token = wx.getStorageSync('accesstoken') ? JSON.parse(wx.getStorageSync('accesstoken')).access_token : '';
const request = (url, options) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${app.globalData.server_url}${url}`,
            method: options.method,
            data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
            header: token ? {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token
            }:{'Content-Type': 'application/json; charset=UTF-8'},
            success(request) {
                if (request.data.retCode === 200) {
                    resolve(request.data)
                } else {
                    reject(request.data)
                }
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