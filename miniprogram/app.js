//app.js
import restful from 'api/api'
import upload from 'api/upload'
App({
    onLaunch:()=>{

    },
    globalData:{},
    //request
    restful:restful,
    //上传图片
    upload:upload
});


